# RPS Website — Static Single-Page Site

Pure HTML/CSS/JS. No WordPress, no build step, no dependencies, no hosting cost.

## Files

| File         | What it does |
|--------------|--------------|
| `index.html` | All page content. Each section is clearly marked with `<!-- ==== SECTION ==== -->` comment banners. Edit text directly. |
| `styles.css` | All styling. Brand colours, fonts and spacing live in the `:root` block at the top — change a hex value there and it updates site-wide. |
| `script.js`  | Animations and interactions (scroll reveals, progress track, ticker, mobile menu). You shouldn't need to touch this. |
| `robots.txt` / `sitemap.xml` | SEO plumbing for Google. |
| `assets/`    | Drop your logo (`rps-logo.png`) and a 1200×630 social share image (`og-image.png`) in here. |

## Before going live — two things to replace

1. **Phone number** — search `index.html` for `+440000000000` (appears 3 times) and replace with the real RPS number in international format, e.g. `tel:+441234567890`.
2. **Images** — add `assets/rps-logo.png` and `assets/og-image.png` (the OSM graphic cropped to 1200×630 works well for the share image).

## Hosting on GitHub Pages (free)

1. Create a new repository on GitHub, e.g. `rps-website` (public).
2. Upload all these files to the repository root (drag-and-drop in the GitHub web UI works, or `git push`).
3. Repository **Settings → Pages → Source: Deploy from a branch → Branch: main, folder: / (root) → Save**.
4. The site goes live at `https://<your-username>.github.io/rps-website/` within a minute or two.

### Pointing www.1rps.com at it

1. In **Settings → Pages → Custom domain**, enter `www.1rps.com` and save — GitHub creates a `CNAME` file in the repo.
2. At your domain registrar, add a **CNAME record**: `www → <your-username>.github.io`.
3. For the apex domain (`1rps.com`), add **A records** pointing to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
4. Back in GitHub Pages settings, tick **Enforce HTTPS** once the certificate is issued (usually under an hour).
5. Keep the WordPress site up until DNS has switched over, then cancel the hosting.

## SEO checklist after launch

- Submit `https://www.1rps.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).
- Verify the structured data with Google's [Rich Results Test](https://search.google.com/test/rich-results) — the JSON-LD Organization + Services schema is already in `index.html`.
- The site scores highly on Core Web Vitals by design: no render-blocking frameworks, system-cached Google Fonts, ~30 KB of CSS/JS total.

## Editing tips

- **Add a pillar / outcome / plan row**: copy an existing block in `index.html` and edit the text — the grid handles layout automatically.
- **Change the accent colour of a pillar card**: edit its inline `style="--accent:#..."`.
- **Tone down animations**: delete `script.js`'s reveal block, or rely on the built-in `prefers-reduced-motion` support.
- News/blog later: GitHub Pages supports Jekyll natively if you want to add posts down the line — or keep news on LinkedIn and link to it.
