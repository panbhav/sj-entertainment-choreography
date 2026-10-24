# SJ Entertainment Choreography

> **Owned by Sajid & Joya**  
> Bespoke wedding choreography, memorable couple entries, and celebratory entertainment across India.

A complete, responsive website built with Next.js App Router, React 19, TypeScript, and Tailwind CSS. Designed with a modern Indian wedding aesthetic: warm ivory backgrounds (`#FAF7F2`), deep wine/plum accents (`#4A1525`), restrained champagne-gold detailing (`#BD954E`), and elegant typography.

---

## 1. Website Structure & Routes

The website implements client-side App Router navigation with dedicated shareable URLs:

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Cinematic hero, two signature experiences, upcoming showcase slots, Meet Sajid & Joya, 4-step process, enquiry banner |
| `/wedding-choreography` | **Wedding Choreography** | Sangeet, Haldi, Mehendi, Bhaat, Wedding Day, Reception, "Dance Along with SJ" interactive floor session, rehearsal options, and FAQ accordion |
| `/couple-entries-entertainment` | **Couple Entries & Live Entertainment** | 7 illustrative entry concepts (Romantic, Royal, Bollywood, etc.) & live artists (dhol ensembles, folk performers, bands) |
| `/our-work` | **Our Work** | Filterable gallery (All, Choreography, Couple Entries, Artists) with intentional media placeholders and project template support |
| `/our-work/[slug]` | **Project Detail** | Reusable template ready for verified published wedding showcases |
| `/packages` | **Experiences & Packages** | 3 curated service combinations, transparent quotation factors, and personalized quote enquiry actions |
| `/about` | **About Sajid & Joya** | Founders' factual introduction, individual profiles, rehearsal behind-the-scenes placeholders, and nationwide coverage statement |
| `/contact` | **Plan Your Celebration** | Accessible celebration enquiry form with preselected service interest (`?service=...`), validation, spam protection, and contact channels |
| `/privacy` | **Privacy Policy (Draft)** | Clearly marked draft policy for owner review prior to production enquiry collection |
| `/terms` | **Terms of Service (Draft)** | Clearly marked draft terms outlining website presentation and engagement guidelines |
| `/api/enquire` | **Enquiry API** | Server-side validation, honeypot spam protection, and delivery integration point |

---

## 2. Key Architecture Principles

1. **Centralised, Typed Content Models (`src/content/`)**:
   - `siteConfig.ts` — Brand name, owners, contact details, social channels, Spotify embed state.
   - `media.ts` — Centralised registry of all photos and videos with aspect ratios, titles, alt text, and publication flags.
   - `services.ts` — Wedding celebration sequences, signature performances, and rehearsal configurations.
   - `entriesAndArtists.ts` — Entry concept ideas and live entertainment categories.
   - `packages.ts` — Suggested combinations and quotation factors.
   - `about.ts` — Factual founder bios and philosophy pillars.
   - `portfolio.ts` — Gallery slots and published client records.
   - `faqs.ts` — Practical, cautious answers without invented policies.
   - `testimonials.ts` — Testimonial registry hidden automatically until genuine reviews are approved.

2. **Intentional Media Placeholders (No Fake Stock Imagery)**:
   - Built with the custom `MediaPlaceholder` and `ResponsiveImage` components.
   - Reserves exact aspect ratios (`16:9`, `4:5`, `4:3`, `1:1`) to prevent Cumulative Layout Shift (CLS).
   - Styled with subtle gold ornamental accents, warm ivory or wine backdrops, and clear labels (e.g., "Couple Entry Film").
   - Video slots display clean placeholders without broken play buttons when video source is missing.
   - Supports seamless replacement with local videos or YouTube links via `VideoModal`.

3. **Truthful & Respectful Brand Content**:
   - No fabricated phone numbers, emails, addresses, years in business, awards, celebrity client claims, or fake ratings.
   - Unconfigured contact channels hide gracefully.
   - Clear disclosure that entry concepts are illustrative ideas discussed during planning.

4. **Robust Enquiry Handling**:
   - Includes client-side and server-side validation for international phone formats.
   - Hidden honeypot field traps automated spam bots.
   - If no backend delivery provider is active (`ENQUIRY_DELIVERY_ENABLED=false`), the form honestly informs the user and provides direct contact instructions rather than fabricating a false success message.

---

## 3. Getting Started Locally

### Prerequisites
- Node.js 18+ (tested with Node.js v24)
- npm 9+

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Typecheck and create optimized production build
npm run build

# Start production server
npm run start
```

---

## 4. Launch Readiness Checklist for Site Owners

Before making the website publicly active, Sajid & Joya should review:

- [ ] **Contact Channels**: Provide verified official phone/WhatsApp and email in `src/content/siteConfig.ts`.
- [ ] **Social Profiles**: Add official Instagram, YouTube, and optional Spotify playlist links in `src/content/siteConfig.ts`.
- [ ] **Media Assets**: Follow the [ASSET_CHECKLIST.md](./ASSET_CHECKLIST.md) to place high-resolution photos and performance films into `public/media/` and update `src/content/media.ts`.
- [ ] **Enquiry Delivery**: Set `ENQUIRY_DELIVERY_ENABLED=true` in `.env.local` and connect an email provider (such as Resend or SendGrid) inside `src/app/api/enquire/route.ts`.
- [ ] **Custom Domain**: Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://sjentertainmentchoreography.com`) to activate production robots.txt and sitemap.xml.
- [ ] **Policy Review**: Have your legal advisor review `/privacy` and `/terms` drafts to confirm booking cancellation and data retention rules.

## Design update — October 2026

The initial design used a CSS sculpture; the film-led opening described below supersedes it. Other media slots continue to use the central registry and existing client assets.

Put local files under `public/media/` and reference them as `/media/filename.jpg` (never `/public/media/...` or a Windows disk path). Add the filename, descriptive `alt`, aspect ratio, and `published: true` in `src/content/media.ts`. Images fall back to artwork on load errors. Videos support local MP4s and YouTube watch, Shorts, short, and embed links. Add a `posterUrl` for each film. Add approved portfolio projects in `src/content/portfolio.ts`.

The site has an SJ browser icon at `public/icon.svg`. Replace this with the final identity if needed. Contact details and social profiles are still configured in `src/content/siteConfig.ts`; no business details have been invented.

### Enquiry delivery

Copy `.env.example` to `.env.local` when connecting the site. Enquiries remain unavailable until `ENQUIRY_DELIVERY_ENABLED=true` and `ENQUIRY_WEBHOOK_URL` points to an HTTPS endpoint you control. The endpoint must accept enquiry JSON and return a 2xx response only after accepting the message for delivery. An optional `ENQUIRY_DELIVERY_KEY` is sent as a Bearer token. Validate and test the provider before publishing. The site reports delivery failures without clearing the form. Existing email/key flags alone no longer produce a false success.

### Verification

Run `npm run lint`, `npm run build`, and (with the site running) `node scripts/audit-site.mjs`. The audit checks public pages, rendered internal links and anchors, local build assets, missing project routes, and malformed enquiry payloads. Optional argument: the origin URL to audit.

## Film-led opening — October 2026

The homepage opening now uses `src/components/home/CinematicHero.tsx`, with namespaced styling in `CinematicHero.css`. The navigation uses the real white SJ logo and overlays the film; it becomes opaque after scrolling. Other homepage sections and the existing service pages are preserved.

The opening now uses the professionally filmed Aayush & Monika 4K Sangeet source. `public/media/hero-film-4k-desktop.webm` preserves the original 3840×2160 VP9 frames without re-encoding (approximately 23 seconds, aligned to a source keyframe). Browsers without VP9 support use `hero-film-hq-desktop.mp4` at 2560×1440. Mobile uses `hero-film-hq-mobile.mp4` at 1080×1920, cropped directly from the 4K original. MP4 exports use CRF18 in a single pass; there are no added dissolves. New filenames prevent stale cached versions from being shown. Both layouts have matching high-resolution poster images. No audio stream is included.

Autoplay is muted and inline. Visitors can pause/resume the film. Playback pauses off-screen and in hidden tabs. Reduced-motion and data-saving preferences show the responsive poster without downloading the video unless the visitor presses play. Source paths use the existing base-path helper for subdirectory hosting.

To rebuild the films, run `python scripts/build-hero-film.py --media-root "path/to/SJ Choreography"` with `imageio_ffmpeg` installed. Original media is read only. The source selection and export settings are recorded under `artifacts/hero-edit-hq/`. Source footage is preserved. Desktop playback automatically falls back to the compatible MP4 if native VP9 playback fails.


