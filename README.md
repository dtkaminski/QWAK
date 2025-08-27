# Qwak Landing Page

This folder contains a production‑ready static landing page for **Qwak**—an AI life‑admin agent that saves time and money by automating paperwork and switching.  The site has been designed to meet WCAG AA accessibility requirements, be responsive from mobile (360px) to desktop (1440px) and achieve high Lighthouse scores across performance, best‑practices, SEO and accessibility.

## Structure

```
qwak_site/
├── index.html            # Main HTML document
├── js/
│   └── app.js            # Vanilla JS for analytics and form handling
├── styles/
│   ├── tokens.css        # Design tokens (colours, typography)
│   └── main.css          # Global styles and component layouts
├── brand/
│   ├── qwak-logo.png     # Original PNG logo (500×500)
│   ├── qwak-logo.svg     # SVG wrapper referencing the PNG
│   ├── qwak-logo-16x16.png   # Favicon
│   ├── qwak-logo-32x32.png   # Favicon (retina)
│   ├── qwak-logo-128x128.png # App icon
│   ├── qwak-logo-512x512.png # App icon (large)
│   └── opengraph.png     # 1200×630 image for social previews
├── icons/                # SVG icons used in the site
├── img/
│   └── hero-bg.svg       # Decorative gradient for hero backgrounds (unused, optional)
└── security-whitepaper.pdf  # Placeholder PDF for the security whitepaper link
```

## Customising the design

- **Colours & fonts**: All colour and typography definitions live in `styles/tokens.css`.  To tweak the palette or scale, update the CSS variables under the `:root` selector.  For example, to change the primary accent colour you can adjust `--accent-teal`.
- **Typography**: The site uses the Inter/SF/system stack.  You can swap in a different font by editing `--font-family-base` in `tokens.css` and updating the `<link>` tags in `index.html` if you import a webfont.
- **Icons**: The inline SVGs used throughout the site are defined in place in `index.html`.  If you'd like to swap them for your own icons, replace the `<svg>` markup in each component with your new icon definitions.  Additional icons can be added to the `icons/` directory for reuse.
- **Hero background**: The hero uses a CSS gradient defined in `main.css`.  If you’d prefer an image, place your asset in `img/` and update the `.hero` rule’s `background` property.
- **Analytics**: `js/app.js` logs key user interactions to the console via events like `cta_click`, `waitlist_submit`, `how_it_works_view`, `feature_card_click`, `faq_open` and `security_view`.  Replace these `console.log()` statements with your analytics provider’s API calls as needed.
  - The `feature_card_click` event now fires when a user clicks on any feature card, not simply when the section enters view.
  - The `faq_open` event fires each time a user opens a FAQ item.
  - View events for the How‑it‑works, Why Qwak and Security sections are triggered via `IntersectionObserver` when at least 50% of the section is visible.

## Placeholders to replace

This build includes a few placeholder files and values which you should replace before going live:

- `security-whitepaper.pdf`: Replace this empty file with your actual security whitepaper.
- Savings range: In `index.html` under “Proven savings” replace `£X–£Y/yr` with real benchmark figures once available.
- Comparison methodology and commission disclosure: Add details to the appropriate sections to explain how you rank deals and disclose any commissions.
- `privacy policy` link in the waitlist form: Point this to your real privacy policy URL.

## Development notes

* **Dependencies**: This project uses no frameworks or build steps—only static HTML, CSS and a small amount of vanilla JS.  You can run a simple HTTP server (e.g. `npx http-server qwak_site`) to test locally.
* **Accessibility**: Landmarks, form labels and keyboard focus styles have been included to meet WCAG AA.  Remember to audit any future changes with a tool like Lighthouse or axe.
* **Performance**: All CSS and JS are unminified for clarity but small in size.  Gzipping the assets should result in a bundle under 200KB (excluding images) as required.

Enjoy your new landing page!