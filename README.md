# Kevin O. Agu — Developer Portfolio

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
