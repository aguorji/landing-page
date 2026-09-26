# AguTech Labs — Website

Portfolio and business site for AguTech Labs, founded by Kevin O. Agu.

A modern, responsive portfolio landing page built with plain HTML, CSS and JavaScript (no build step).

**Features:** light/dark theme toggle, mobile menu, project filtering, scroll animations,
animated stats, contact form, SEO/social meta tags, and accessible markup (skip link, focus styles,
reduced-motion support).

## Make it yours

Search the project for `TODO` — every spot that needs your real details is marked.

1. **Projects** (`index.html`, `#projects`): replace the sample cards with your real projects.
   Add screenshots to `assets/images/projects/` and swap the gradient `thumb` for an `<img>`.
   Set `data-category` to `website`, `app` or `ui` so the filters work.
2. **Email:** set to `info@agutechlabs.com` via `CONTACT_EMAIL` in `js/main.js`.
3. **LinkedIn:** update the LinkedIn URL in the hero.
4. **Photo:** add `assets/images/profile.jpg` and replace the `KA` placeholder in the About section.
5. **CV:** add your CV as `assets/cv.pdf`.
6. **Stats & skills:** keep only numbers and skills that are true for you.
7. **Contact form:** create a free form at [formspree.io](https://formspree.io) using
   `info@agutechlabs.com`, then paste its ID into `FORMSPREE_ID` in `js/main.js`.
   Until then, the form opens the visitor's email app.
8. **Prices:** replace the "Quote on request" lines in the Packages section with your prices.
9. **Testimonials:** the section is hidden. Add real client quotes, then remove `hidden` from
   `<section id="testimonials">`.
10. **FAQ & privacy policy:** review the answers in the FAQ section and `privacy.html`
    (a general template, not legal advice).

## Pages & files

- `index.html` — main page
- `privacy.html` — privacy policy
- `404.html` — "page not found" page (used automatically by GitHub Pages, Netlify and Vercel)
- `assets/images/og-image.png` — preview image shown when the link is shared
- `robots.txt`, `sitemap.xml`, `CNAME` — search engines and custom domain

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

Live domain: **https://agutechlabs.com**

Works on any static host. For GitHub Pages, the `CNAME` file already points the site at
`agutechlabs.com`:

1. Repo **Settings → Pages** → deploy from the `main` branch, root folder.
2. At your domain registrar, add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `aguorji.github.io`
3. Once DNS is live, tick **Enforce HTTPS** in the Pages settings.
