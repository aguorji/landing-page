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
2. **Email:** update `CONTACT_EMAIL` in `js/main.js` (the page picks it up automatically).
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

Works on any static host — GitHub Pages (Settings → Pages → deploy from `main`), Netlify or Vercel.
