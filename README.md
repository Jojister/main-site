# jojister-website

Personal site for Joji Araki: projects, art portfolio, and a print shop.
Live at [jojiaraki.com](https://www.jojiaraki.com).

## Stack

- React 18 + React Router (Create React App build)
- Netlify hosting, with Netlify Functions for Stripe Checkout
- English / Japanese text via `useLanguage().t(en, jp)`

## Layout

```
src/
  components/    page sections (Nav, Home, About, Project, Contact, Cart, ...)
  pages/         routed pages (Portfolio, Shop, Success)
  context/       CartContext (saved to localStorage), LanguageContext
  data/          products.json (shop items + prices), projects.json
  utils/         imageMap.js — image keys used in data/*.json -> bundled images
  images/        source images (keep under ~2000px on the long edge)
  style/App.css
netlify/functions/
  create-checkout-session.js   builds the Stripe session; prices come from products.json
  verify-session.js            returns a Checkout session's payment status
```

## Development

```bash
npm install
npm start        # dev server on http://localhost:3000 (no functions)
npm test         # unit tests
npm run build
```

To run the shop end to end locally, use the Netlify CLI (`netlify dev`) so the
functions are served too.

## Environment

| Variable            | Where                         | Purpose                     |
| ------------------- | ----------------------------- | --------------------------- |
| `STRIPE_SECRET_KEY` | `.env` locally, Netlify UI    | Stripe API key (server only) |

`.env` is git-ignored; never commit it.

## Adding a shop item or project

1. Add the image to `src/images/` and register its key in `src/utils/imageMap.js`.
2. Add the entry to `src/data/products.json` or `src/data/projects.json` using that key.
