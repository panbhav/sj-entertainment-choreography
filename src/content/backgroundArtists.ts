export const backgroundArtistFormats = [
  {
    id: 'entry', name: 'Entry escorts & reveal dancers',
    service: 'background-artists-entry', image: '/images/artists/background-entry.webp',
    alt: 'AI concept of professional dancers framing a wedding couple’s entrance',
    description: 'A coordinated artist ensemble opens the pathway, frames your arrival and joins a short dance reveal, keeping the spotlight on you.',
    includes: 'Artist formations, entrance timing, music cues and coordinated costume direction.',
    chapters: ['wedding-day', 'destination-weddings'],
  },
  {
    id: 'haldi', name: 'Haldi & Mehendi celebration dancers',
    service: 'background-artists-haldi-mehendi', image: '/images/artists/background-haldi.webp',
    alt: 'AI concept of a professional dance ensemble in yellow and ivory at a daytime wedding celebration',
    description: 'Bright, playful backing routines for the couple or family, with optional artist-led dance hooks that guests can join without rehearsals.',
    includes: 'Daytime entry support, folk or Bollywood routines and interactive guest dance-alongs.',
    chapters: ['haldi', 'mehendi', 'bhaat-mayra'],
  },
  {
    id: 'sangeet', name: 'Sangeet backing dancers & finales',
    service: 'background-artists-sangeet', image: '/images/artists/background-sangeet.webp',
    alt: 'AI concept of backing dancers supporting a couple’s Sangeet performance on stage',
    description: 'Professional dancers add formations and energy around your couple or family performance, with artist-only sections between chapters if you want them.',
    includes: 'Couple backing, family-performance support, opening acts and a coordinated finale.',
    chapters: ['sangeet', 'destination-weddings'],
  },
  {
    id: 'reception', name: 'Reception opening acts & party starters',
    service: 'background-artists-reception', image: '/images/artists/background-reception.webp',
    alt: 'AI concept of professional dancers performing a coordinated wedding reception opening act',
    description: 'An elegant opening ensemble, a high-energy couple reveal or a dance-floor opener, shaped around the atmosphere of your reception.',
    includes: 'Reception entry backing, a themed troupe performance and guest dance-floor transitions.',
    chapters: ['reception'],
  },
];

export const backgroundArtistServiceOptions = [
  { value: 'background-artists', label: 'Background Artists & Supporting Dancers' },
  { value: 'background-artists-bhaat-mayra', label: 'Bhaat / Mayra supporting dancers' },
  ...backgroundArtistFormats.map(format => ({ value: format.service, label: format.name })),
];
