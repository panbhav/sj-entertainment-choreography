# Background artists service visuals

Generated with the built-in image generation tool. These fictional planning concepts do not depict SJ team members or past SJ events. The website labels them accordingly.

Final assets: `public/images/artists/background-entry.webp`, `background-haldi.webp`, `background-sangeet.webp`, `background-reception.webp`.

## Integration and verification

- Four service visuals are reused across the wedding overview, all seven function pages, the entertainment overview, entry concepts and the live artists page.
- Each format links to its corresponding contact service; Bhaat / Mayra has its own contextual copy and enquiry option. Existing multi-select supports combining these with choreography services.
- Production build, TypeScript and ESLint passed. Final HTTP audit: 19 pages, 163 links and anchors, 115 assets, zero failures.
- Browser checks: 320, 390, 768 and 1280 px widths with no horizontal overflow. All four images loaded, Sangeet service preselection worked, mobile Haldi card checked, browser error log empty.
- Images are optimized 1200 × 900 WebP files, approximately 185–228 KiB each. Original generation outputs remain in the Codex generated-images directory.
- Screenshots: `artifacts/site-audit/background-artists-desktop.png` and `artifacts/site-audit/background-artists-mobile.png`.
- Automatic notification delivery still requires the provider and hosting configuration described in `AUTOMATIC_NOTIFICATIONS_SETUP.md`.

## Prompts

### entry

Use case: photorealistic-natural. Asset type: landscape website service concept image, 4:3 composition. Primary request: An Indian bride and groom entering a wedding ballroom, framed by four professional adult backing dancers in coordinated ivory and antique gold Indo-western stage costumes. The couple remains the focal point; dancers stand at either side in elegant synchronized open-arm poses creating an aisle, not guests or relatives. Full bodies visible, balanced symmetrical wide composition, warm evening light. Style: premium editorial wedding photography, believable anatomy, realistic hands, fabric textures and movement, sharp clear performers, natural skin tones. Fictional people, illustrative concept rather than documented real event. No text, logos, watermarks, collage, frames, confetti obscuring faces, acrobatics or unsafe effects. Keep all dancers and their hands comfortably inside the frame for responsive cropping.

### haldi

Use case: photorealistic-natural. Asset type: landscape website service concept image, 4:3 composition. Primary request: Six professional adult Indian background dancers, women and men, in coordinated yellow and ivory festive dance costumes performing a lively Bollywood hook in a dry open courtyard at a daytime Haldi wedding function. Marigold decor softly in background, dancers are the focal point, no turmeric application, no ritual demonstration, no bride portrait. Full bodies, spacious practical dance floor, bright natural daylight. Style: premium editorial wedding photography, believable anatomy, realistic hands, fabric textures and movement, sharp clear performers, natural skin tones. Fictional people, illustrative concept rather than documented real event. No text, logos, watermarks, collage, frames, confetti obscuring faces, acrobatics or unsafe effects. Keep all dancers and their hands comfortably inside the frame for responsive cropping.

### sangeet

Use case: photorealistic-natural. Asset type: landscape website service concept image, 4:3 composition. Primary request: Six professional adult Indian backing dancers in coordinated burgundy and antique gold stage costumes in two balanced formations behind an Indian wedding couple performing a Sangeet dance duet. Clear distinction between couple in wedding outfits and supporting dance ensemble, polished synchronized poses, full bodies, wide stage, warm theatrical spotlights, tasteful softly blurred LED backdrop. Style: premium editorial wedding photography, believable anatomy, realistic hands, fabric textures and movement, sharp clear performers, natural skin tones. Fictional people, illustrative concept rather than documented real event. No text, logos, watermarks, collage, frames, confetti obscuring faces, acrobatics or unsafe effects. Keep all dancers and their hands comfortably inside the frame for responsive cropping.

### reception

Use case: photorealistic-natural. Asset type: landscape website service concept image, 4:3 composition. Primary request: Six professional adult Indian background dancers in elegant coordinated midnight blue and champagne stage costumes performing a sophisticated Bollywood fusion opening routine at a wedding reception ballroom. Full bodies, synchronized graceful dance poses, generous clear stage, chandeliers in soft focus, cinematic warm lighting, performers as focal point. Style: premium editorial wedding photography, believable anatomy, realistic hands, fabric textures and movement, sharp clear performers, natural skin tones. Fictional people, illustrative concept rather than documented real event. No text, logos, watermarks, collage, frames, confetti obscuring faces, acrobatics or unsafe effects. Keep all dancers and their hands comfortably inside the frame for responsive cropping.

