// Product filter for the changelog page. Each <Update> is tagged with its product
// (tags={["Node SDK"]}); the filter reads that tag and hides entries for other products.
// The selected product is kept in the URL hash (/changelog#node-sdk) so filtered views can
// be linked and redirected to. The filter is a sticky row above the entries that scrolls
// sideways when it does not fit.
export const ChangelogFilter = ({ products }) => {
  const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const options = products.map((name) => ({ name, slug: slugify(name) }));
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash === "") setSelected(null);
      // Other hashes are entry anchors (#v2-8-0); leave the filter as it is.
      else if (options.some((option) => option.slug === hash)) setSelected(hash);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // Copy each entry's tag onto its container so CSS can hide the other products, and point the
  // sidebar's product links at this page. docs.json has to declare them as absolute URLs (Mintlify
  // rewrites relative hrefs that carry a hash to "/"), which also makes it open them in a new tab;
  // rewriting them here keeps the click on this page, and on this host in local and preview builds.
  useEffect(() => {
    const sync = () => {
      document.querySelectorAll(".update-container:not([data-changelog-product])").forEach((entry) => {
        const tag = entry.querySelector('[data-component-part="update-tag"]');
        if (tag) entry.setAttribute("data-changelog-product", slugify(tag.textContent));
      });
      document.querySelectorAll('a[target="_blank"][href*="/changelog#"]').forEach((link) => {
        const { pathname, hash } = new URL(link.href);
        if (pathname !== window.location.pathname) return;
        link.setAttribute("href", `${pathname}${hash}`);
        link.removeAttribute("target");
        link.removeAttribute("rel");
      });
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // Marks the page so custom.css can restyle the changelog's sidebar without touching others.
  useEffect(() => {
    document.body.setAttribute("data-changelog-page", "");
    return () => document.body.removeAttribute("data-changelog-page");
  }, []);

  useEffect(() => {
    const sidebarLinks = () =>
      [...document.querySelectorAll("a.nav-anchor")].filter((link) =>
        link.getAttribute("href")?.startsWith(window.location.pathname)
      );
    const markActive = () => {
      sidebarLinks().forEach((link) => {
        const hash = link.getAttribute("href").split("#")[1] ?? null;
        link.setAttribute("data-changelog-active", String(hash === selected));
      });
    };
    markActive();
    const observer = new MutationObserver(markActive);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [selected]);

  const select = (slug) => {
    setSelected(slug);
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", slug ? `${pathname}${search}#${slug}` : `${pathname}${search}`);
  };

  return (
    <div className="changelog-filter not-prose">
      <style>{`
        /* The bar sticks just under the navbar, which ends 2.5rem above --scroll-mt. */
        .changelog-filter {
          position: sticky; top: calc(var(--scroll-mt, 152px) - 2.5rem); z-index: 20;
          margin-top: 1.5rem; padding-block: 0.75rem;
          background: rgb(var(--background-light, 255 255 255));
          border-bottom: 1px solid rgb(0 0 0 / 0.06);
        }
        .dark .changelog-filter {
          background: rgb(var(--background-dark, 14 12 13));
          border-bottom-color: rgb(255 255 255 / 0.06);
        }
        .changelog-filter-list {
          display: flex; gap: 0.375rem; overflow-x: auto; scrollbar-width: none;
        }
        .changelog-filter-list::-webkit-scrollbar { display: none; }
        .changelog-filter button {
          flex-shrink: 0; padding: 0.3125rem 0.75rem; border-radius: 9999px;
          font-size: 0.8125rem; font-weight: 500; line-height: 1.25rem; white-space: nowrap;
          border: 1px solid transparent; background: rgb(0 0 0 / 0.04); color: rgb(75 85 99);
          cursor: pointer; transition: background-color 120ms, color 120ms, border-color 120ms;
        }
        .changelog-filter button:hover { background: rgb(0 0 0 / 0.08); color: rgb(17 24 39); }
        .changelog-filter button[aria-pressed="true"] {
          background: rgb(var(--primary, 255 87 34) / 0.1); color: rgb(var(--primary-dark, 220 65 0));
          border-color: rgb(var(--primary, 255 87 34) / 0.35);
        }
        .dark .changelog-filter button { background: rgb(255 255 255 / 0.05); color: rgb(156 163 175); }
        .dark .changelog-filter button:hover { background: rgb(255 255 255 / 0.1); color: rgb(243 244 246); }
        .dark .changelog-filter button[aria-pressed="true"] {
          background: rgb(var(--primary-light, 255 140 102) / 0.12); color: rgb(var(--primary-light, 255 140 102));
          border-color: rgb(var(--primary-light, 255 140 102) / 0.35);
        }
        /* Keep version labels and anchor jumps below the bar instead of under it. */
        .update-container > div:first-child { top: calc(var(--scroll-mt, 152px) + 1.75rem) !important; }
        .update-container { scroll-margin-top: calc(var(--scroll-mt, 152px) + 1.75rem); }
        ${selected ? `.update-container:not([data-changelog-product="${selected}"]) { display: none; }` : ""}
      `}</style>
      <div className="changelog-filter-list" role="group" aria-label="Filter by product">
        <button type="button" aria-pressed={selected === null} onClick={() => select(null)}>
          All
        </button>
        {options.map(({ name, slug }) => (
          <button key={slug} type="button" aria-pressed={selected === slug} onClick={() => select(slug)}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};
