# Kelviq Documentation

Complete documentation for Kelviq, the SaaS monetization and subscription management platform.

## Getting Started

### For Product Teams
- [Introduction to Kelviq](getstarted/introduction-to-kelviq.mdx) - Overview and features
- [Getting Started](quickstart/dashboard-setup.mdx) - Dashboard setup and first steps
- [Review Process](getstarted/review-process.mdx) - Business verification and compliance

### For Developers
- [Core Concepts](quickstart/core-concepts.mdx) - Key terminology and architecture
- [Integration Guide](quickstart/integrate-with-your-app.mdx) - How to integrate Kelviq
- [API Reference](api-reference/openapi.json) - Complete API documentation

## Key Features

### Product Management
- **[Products](/product-catalog/products)** - Create and manage your digital products
- **[Plans & Pricing](/product-catalog/plans)** - Configure flexible pricing models
- **[Features](/product-catalog/features)** - Define feature access and limits
- **[Digital Downloads](/product-catalog/digital-downloads)** - Deliver files after purchase
- **[License Keys](/product-catalog/license-keys)** - Manage software licensing
- **[Entitlements](/product-catalog/entitlements)** - Control feature access per customer

### Monetization
- **[Checkout](/checkout/checkout-configuration)** - Configure and customize checkout
- **[Customers](customers/customers)** - Manage customer subscriptions
- **[Webhooks](webhooks/webhooks)** - Real-time event notifications
- **[Webhooks](webhooks/webhooks)** - Real-time event notifications

### Developer Tools
- **[Authentication](api-reference/authentication)** - API key setup
- **[Error Codes](api-reference/errors)** - Error handling reference
- **[Python SDK](api-reference/backend-integration/python-sdk)** - Backend integration
- **[Node.js SDK](api-reference/backend-integration/node-sdk)** - Backend integration
- **[React SDK](frontend-integration/react-sdk)** - Frontend integration
- **[React UI](frontend-integration/react-ui)** - Pre-built components

## Common Tasks

- [Set up a free trial](product-catalog/plans) for your first plan
- [Configure multi-currency pricing](product-catalog/plans) with regional pricing
- [Deliver digital files](product-catalog/digital-downloads) to customers
- [Generate license keys](product-catalog/license-keys) automatically
- [Track feature usage](product-catalog/entitlements) per customer
- [Listen to webhooks](webhooks/webhooks) for real-time events

## Troubleshooting

Having issues? Check the [Troubleshooting Guide](troubleshooting/common-issues) for solutions to common problems.

## Support

- **Documentation** - You're reading it!
- **API Docs** - [Full API Reference](api-reference/openapi.json)
- **Email Support** - hi@kelviq.com
- **Status Page** - status.kelviq.com

## Local Development

To preview documentation changes locally:

### Install Mintlify CLI
```bash
npm i -g mint
```

### Run dev server
```bash
mint dev
```

### View preview
Open `http://localhost:3000` in your browser.

## Deploying Changes

Changes to the `main` branch are automatically deployed to production.

To preview changes before deployment:
1. Create a branch
2. Make changes
3. Create a pull request
4. Preview changes in the Mintlify dashboard
5. Merge to deploy

## Documentation Structure

```
/docs
├── getstarted/          # Getting started guides
├── quickstart/          # Quickstart and core concepts
├── product-catalog/     # Product management docs
├── checkout/            # Checkout configuration
├── customers/           # Customer management
├── api-reference/       # API docs and error codes
├── webhooks/            # Webhook documentation
├── frontend-integration/# Frontend SDKs
├── troubleshooting/     # Troubleshooting guides
└── docs.json           # Navigation and config
```

## Contributing

To contribute to Kelviq docs:

1. Make your changes in the appropriate directory
2. Test locally with `mint dev`
3. Create a pull request
4. After approval, merge to `main`
5. Changes deploy automatically

### Style Guide

- Use clear, developer-friendly language
- Include code examples for API features
- Use Mintlify components for formatting
- Link to related documentation
- Keep sections concise and focused

## Need Help?

- **Can't find something?** - Use the search feature (top of page)
- **Having issues?** - Check [Troubleshooting](troubleshooting/common-issues)
- **Want to report a bug?** - Email hi@kelviq.com
- **Have suggestions?** - We'd love your feedback!
