# SJ Entertainment & Choreography

Bespoke wedding choreography and grand couple entries across India by Sajid & Joya.

## Development

```bash
npm install
npm run dev
```

## Production Build & Static Export

```bash
# For local preview
npm run build

# For GitHub Pages deployment
$env:GITHUB_PAGES="true"; npm run build
```

## Film-led opening — October 2026

The homepage opening uses `src/components/home/CinematicHero.tsx`, with namespaced styling in `CinematicHero.css`. The navigation uses the real white SJ logo and overlays the film; it becomes opaque after scrolling.

The opening features a curated multi-scene celebration montage combining four distinct wedding moments with smooth crossfades:
1. Romantic Couple First Dance & Chemistry (Sanchit & Pragya)
2. Grand Stage Production with Cold Pyro & Illuminated CO2 Geysers (Akshay & Vidhi)
3. Synchronized Bridesmaids & Family Squad Sangeet Routine (Sakshi & Friends)
4. High-Energy Bollywood Sangeet Finale with Confetti & Stage Flags (RS Highlights)

Optimized outputs are stored in `public/media/hero-film-montage-desktop.mp4` (1920×1080 60fps) and `hero-film-montage-mobile.mp4` (1080×1920 60fps), with matching high-resolution posters.

Autoplay is muted and inline. Visitors can pause/resume the film. Playback pauses off-screen and in hidden tabs. Reduced-motion and data-saving preferences show the responsive poster without downloading the video unless the visitor presses play. Source paths use the base-path helper for subdirectory hosting.
