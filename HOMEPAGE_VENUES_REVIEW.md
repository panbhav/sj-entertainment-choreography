# Homepage venues and brands — 25 October 2026

The owner supplied these names as actual work history. The homepage now displays 11 venues and 6 brands/businesses, in separate animated rows with a static expandable directory. Names are text, without fabricated logos, endorsement badges, or external links to potentially incorrect businesses.

## Naming decisions

- Grand Hyatt Goa: https://www.hyatt.com/grand-hyatt/en-US/goagh-grand-hyatt-goa
- Marriott, Jaipur: retain brand and city rather than assuming which of Jaipur's Marriott properties the owner meant. https://www.marriott.com/en-us/destinations/india/jaipur.mi
- Nahargarh, Ranthambhore: corrected spelling; no claim that this is Jaipur's Nahargarh Fort. https://www.nahargarh.com/rooms-facilities
- Taj Lake Palace, Udaipur; Rambagh Palace, Jaipur: https://www.ihcltata.com/press-room/a-royal-experience-at-the-living-palaces-of-taj
- Neemrana Fort-Palace: https://www.neemranahotels.com/fort-palace-neemrana/
- Tijara Fort-Palace: https://www.neemranahotels.com/tijara-fort-palace-alwar-rajasthan/
- Fariyas Resort, Lonavala: https://fariyas.com/
- The Sariska Palace, Alwar: https://sariskapalace.com/
- The Fern, Alwar-Sariska: https://www.fernhotels.com/rajasthans-lakes-palaces-forts-havelis/the-fern-an-ecotel-hotel-alwar-sariska
- Tanishq: https://www.titancompany.in/our-brands/tanishq
- Alwar Motel, Tata Motors, Nissan Motors, Tirupati Jewellers, Jayanti and Mama Supari: retain supplied identity, normalise capitalisation and Jewellers spelling. Jayanti and Mama Supari are treated as separate businesses. Exact local branch/company identities were not assumed.

Official sources above support naming, not SJ's working relationship with the organisations. The relationships are based on the owner's instruction.

## Behaviour

No additional client JavaScript or downloaded media. CSS motion pauses on hover or keyboard focus within the section. Reduced-motion visitors receive wrapped, static rows with duplicate copies hidden. The native details directory allows reading every name without waiting for animation. Existing hero film controls are unchanged.

Verification: ESLint (zero warnings), TypeScript and production build passed. The existing HTTP audit checked 20 pages, 178 links/anchors and 115 assets with zero failures. Browser checks confirmed 17 directory entries, native keyboard expansion/collapse, animation paused during keyboard interaction, and the CTA navigating to /contact. No page overflow at 320, 390, 768 or 1280 px. Desktop and mobile screenshots are in artifacts/site-audit/venues-desktop.png and venues-mobile.png. Reduced-motion behaviour was reviewed in CSS; no physical-device testing was performed in this follow-up.
