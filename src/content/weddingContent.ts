export const weddingContentFormats = [
  {
    id: 'reels', title: 'Reels & creator-led moments', service: 'wedding-reels',
    description: 'Short vertical stories built around your entry, outfit reveals, favourite dance hooks or a trend you love. A creator helps with the concept, framing and simple on-camera direction.',
    output: 'Edited vertical reels for your own Instagram, Stories or Shorts.',
  },
  {
    id: 'functions', title: 'Function & celebration coverage', service: 'wedding-function-content',
    description: 'Capture the atmosphere across Haldi, Mehendi, Sangeet, wedding entries and reception: the setup, the people, the performances and the little transitions that connect it all.',
    output: 'Function highlights and short clips, curated around the events you choose.',
  },
  {
    id: 'candid', title: 'Candid & behind-the-scenes', service: 'wedding-candid-content',
    description: 'The rehearsal laughter, getting-ready excitement, family reactions and unplanned dance-floor moments. Natural coverage that gives couples, families and guests something personal to share.',
    output: 'Candid clips and behind-the-scenes edits with a relaxed, personal feel.',
  },
  {
    id: 'cinematic', title: 'Cinematic social edits', service: 'wedding-cinematic-content',
    description: 'A short, expressive story with considered framing, detail shots and musical pacing. Shape an entry, couple moment or celebration highlight into a cinematic edit for your social pages.',
    output: 'A polished short highlight in the orientation and edit style agreed with you.',
  },
];

export const weddingContentServiceOptions = [
  { value: 'wedding-content', label: 'Wedding Content Creators & Social Reels' },
  ...weddingContentFormats.map(format => ({ value: format.service, label: format.title })),
];
