# SJ Entertainment Choreography — Asset Replacement Checklist

This checklist documents every replaceable media placeholder across the website.  
When real photography, performance videos, or YouTube links are ready, update the corresponding record in `src/content/media.ts` or `src/content/portfolio.ts`.

---

## 1. Brand Monogram & Identity Assets

| Asset / Role | Identifier | Recommended Format | Dimensions | Destination / Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Monogram / Crest** | `Monogram.tsx` | SVG / PNG (transparent) | 512 × 512 px | Used in header, footer, and media placeholders |
| **Favicon & App Icon** | `favicon.ico`, `icon.png` | ICO & PNG | 32×32, 192×192, 512×512 | `public/icon.svg` (SJ icon); optional final `src/app/favicon.ico` |
| **OpenGraph Sharing Banner** | `og-image.jpg` | High-res JPG | 1200 × 630 px | Used for WhatsApp/Instagram link previews |

---

## 2. Home Page Media Slots

| Section | Slot ID | Expected Filename | Aspect Ratio | Recommended Dimensions | Content Guidance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Background / Showcase** | `hero-main` | `sj-hero-cinematic.mp4` | 16:9 | 1920 × 1080 px | High-resolution cinematic film of Sajid & Joya directing or couples dancing. Publishing this film replaces the gold-ring hero sculpture with a playable preview. |
| **Signature Experience: Choreography** | `home-signature-choreography` | `sj-choreography-signature.jpg` | 16:9 | 1600 × 900 px | Sangeet night stage performance or couple first dance with stage lighting. |
| **Signature Experience: Couple Entries** | `home-signature-entries` | `sj-couple-entries-grand.jpg` | 16:9 | 1600 × 900 px | Couple making grand entrance with cold pyro, floral aisle, or live artists. |
| **Inside Celebration: Slot 1** | `home-slot-couple` | `sj-showcase-couple-dance.mp4` | 4:5 | 1080 × 1350 px | Vertical couple choreography highlight reel (Instagram / cinematic cut). |
| **Inside Celebration: Slot 2** | `home-slot-family` | `sj-showcase-family-sangeet.mp4` | 4:5 | 1080 × 1350 px | High-energy family and friends group dance highlight. |
| **Inside Celebration: Slot 3** | `home-slot-entry` | `sj-showcase-couple-entry.mp4` | 4:5 | 1080 × 1350 px | Royal or cinematic couple entry reveal moment. |

---

## 3. About SJ Founders & Rehearsals

| Section | Slot ID | Expected Filename | Aspect Ratio | Recommended Dimensions | Content Guidance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Joint Portrait (Sajid & Joya)** | `portrait-sajid-joya` | `sajid-joya-joint-portrait.jpg` | 4:5 | 1200 × 1500 px | Warm, elegant editorial portrait of founders Sajid & Joya in celebratory attire. |
| **Individual Portrait: Sajid** | `portrait-sajid` | `sajid-portrait.jpg` | 3:4 | 900 × 1200 px | Professional, warm headshot/portrait of Sajid. |
| **Individual Portrait: Joya** | `portrait-joya` | `joya-portrait.jpg` | 3:4 | 900 × 1200 px | Professional, elegant headshot/portrait of Joya. |
| **Behind The Scenes: Rehearsals** | `about-bts-rehearsal` | `sj-rehearsal-bts.jpg` | 16:9 | 1600 × 900 px | Joyful rehearsal studio moment showing step guidance with a couple or family. |
| **Behind The Scenes: Stage Direction** | `about-stage-production` | `sj-stage-coordination.jpg` | 16:9 | 1600 × 900 px | Sajid & Joya on-site during stage walkthrough or sound check. |

---

## 4. Wedding Choreography Page

| Section | Slot ID | Expected Filename | Aspect Ratio | Recommended Dimensions | Content Guidance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Choreography Hero Overview** | `choreography-hero` | `sj-wedding-choreography-hero.jpg` | 16:9 | 1920 × 1080 px | Wide stage visual capturing full celebration energy. |
| **Dance Along with SJ Spotlight** | `dance-along-session` | `sj-dance-along-interactive.jpg` | 16:9 | 1600 × 900 px | Live interactive moment of Sajid & Joya leading crowd on the dance floor. |

---

## 5. Couple Entries & Entertainment Page

| Section | Slot ID | Expected Filename | Aspect Ratio | Recommended Dimensions | Content Guidance |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Entries & Artists Hero** | `entries-hero` | `sj-couple-entries-hero.jpg` | 16:9 | 1920 × 1080 px | Breathtaking entrance capture featuring florals, dhol, or theatrical lights. |

---

## 6. How to Replace Media in the Codebase

1. Place image files in the `public/media/` directory (e.g. `public/media/sajid-joya-joint-portrait.jpg`).
2. Open `src/content/media.ts`.
3. Locate the item by its `id` (e.g. `'portrait-sajid-joya'`).
4. Update:
   - `sourceUrl`: `'/media/sajid-joya-joint-portrait.jpg'` (or an external CDN URL / YouTube link for videos)
   - `published`: `true`
5. Save the file. The website will immediately replace the placeholder with the real photo or video player.

