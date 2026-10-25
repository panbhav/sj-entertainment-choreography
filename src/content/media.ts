export type AspectRatio = '16/9' | '4/3' | '3/2' | '1/1' | '4/5' | '3/4' | '9/16' | '21/9';

export type MediaType = 'image' | 'video';

export type MediaCategory = 
  | 'hero'
  | 'choreography'
  | 'couple-entry'
  | 'artists'
  | 'portrait'
  | 'behind-the-scenes'
  | 'celebration';

export interface MediaItem {
  id: string;
  title: string;
  mediaType: MediaType;
  sourceUrl?: string; // Empty or undefined while real media is awaited
  posterUrl?: string;
  alt: string;
  aspectRatio: AspectRatio;
  category: MediaCategory;
  caption?: string;
  published: boolean;
  expectedFilename?: string; // Provided for owner asset checklist
  recommendedDimensions?: string;
}

/**
 * Centralised Media Registry.
 *
 * All media items are configured here. When media is not yet available,
 * published: false or missing sourceUrl triggers our bespoke, elegant
 * SVG/architectural placeholder without broken play controls or layout shifts.
 */
export const mediaRegistry: Record<string, MediaItem> = {
  // Home Page
  'hero-main': {
    id: 'hero-main',
    title: 'Dhruv & Meenu — Signature Sangeet Choreography',
    mediaType: 'video',
    sourceUrl: '/media/hero-main.mp4',
    posterUrl: '/media/hero-main-poster.jpg',
    alt: 'Signature wedding sangeet choreography by Sajid & Joya',
    aspectRatio: '16/9',
    category: 'hero',
    caption: 'Dhruv & Meenu — Sangeet Celebration Highlight',
    published: true,
    expectedFilename: 'sj-hero-cinematic.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'home-signature-choreography': {
    id: 'home-signature-choreography',
    title: 'Wedding Choreography',
    mediaType: 'image',
    sourceUrl: '/media/portfolio/couple-dance.webp',
    posterUrl: '/media/portfolio/couple-dance.webp',
    alt: 'A flowing couple duet on stage',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'A flowing couple duet on stage',
    published: true,
    expectedFilename: 'sj-choreography-signature.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'home-signature-entries': {
    id: 'home-signature-entries',
    title: 'Couple Stage Reveals',
    mediaType: 'image',
    sourceUrl: '/media/portfolio/couple-reveal.webp',
    posterUrl: '/media/portfolio/couple-reveal.webp',
    alt: 'A couple in the spotlight, framed by sparkling stage effects',
    aspectRatio: '16/9',
    category: 'couple-entry',
    caption: 'A couple in the spotlight, framed by sparkling stage effects',
    published: true,
    expectedFilename: 'sj-couple-entries-grand.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'home-slot-couple': {
    id: 'home-slot-couple',
    title: 'A dance for two',
    mediaType: 'video',
    sourceUrl: '/media/portfolio/couple-dance.mp4',
    posterUrl: '/media/portfolio/couple-dance.webp',
    alt: 'Couple choreography on the sangeet stage',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Couple choreography on the sangeet stage',
    published: true,
    expectedFilename: 'sj-showcase-couple-dance.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'home-slot-family': {
    id: 'home-slot-family',
    title: 'Every generation, one celebration',
    mediaType: 'video',
    sourceUrl: '/media/portfolio/family-celebration.mp4',
    posterUrl: '/media/portfolio/family-celebration.webp',
    alt: 'A joyful family performance',
    aspectRatio: '16/9',
    category: 'celebration',
    caption: 'A joyful family performance',
    published: true,
    expectedFilename: 'sj-showcase-family-sangeet.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'home-slot-entry': {
    id: 'home-slot-entry',
    title: 'Their moment in the spotlight',
    mediaType: 'video',
    sourceUrl: '/media/portfolio/couple-reveal.mp4',
    posterUrl: '/media/portfolio/couple-reveal.webp',
    alt: 'Couple stage reveal with sparkling effects',
    aspectRatio: '16/9',
    category: 'couple-entry',
    caption: 'Couple stage reveal with sparkling effects',
    published: true,
    expectedFilename: 'sj-showcase-couple-entry.mp4',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // About Page Portraits
  'portrait-sajid-joya': {
    id: 'portrait-sajid-joya',
    title: 'Sajid & Joya',
    mediaType: 'image',
    sourceUrl: '/media/sajid-joya-founders.jpg',
    posterUrl: '/media/sajid-joya-founders.jpg',
    alt: 'Founders and lead choreographers Sajid & Joya with over 15 years of wedding experience',
    aspectRatio: '4/5',
    category: 'portrait',
    caption: 'Sajid & Joya — Over 15 Years of Choreographing Unforgettable Celebrations Across India',
    published: true,
    expectedFilename: 'sajid-joya-founders.jpg',
    recommendedDimensions: '1440x1800 (4:5)',
  },
  'portrait-sajid': {
    id: 'portrait-sajid',
    title: 'Sajid — Choreographer & Creative Director',
    mediaType: 'image',
    sourceUrl: '/media/sajid-individual-2026.webp',
    posterUrl: '/media/sajid-individual-2026.webp',
    alt: 'Sajid — Choreographer & Creative Director',
    aspectRatio: '3/4',
    category: 'portrait',
    caption: 'Sajid',
    published: true,
    expectedFilename: 'sajid-individual-2026.webp',
    recommendedDimensions: '900x1200 (3:4)',
  },
  'portrait-joya': {
    id: 'portrait-joya',
    title: 'Joya — Choreographer & Performance Stylist',
    mediaType: 'image',
    sourceUrl: '/media/joya-individual-2026.webp',
    posterUrl: '/media/joya-individual-2026.webp',
    alt: 'Joya — Choreographer & Performance Stylist',
    aspectRatio: '3/4',
    category: 'portrait',
    caption: 'Joya',
    published: true,
    expectedFilename: 'joya-individual-2026.webp',
    recommendedDimensions: '900x1200 (3:4)',
  },
  'about-bts-rehearsal': {
    id: 'about-bts-rehearsal',
    title: 'Rehearsal Studio Moments with Sajid & Joya',
    mediaType: 'video',
    sourceUrl: '/media/bts-rehearsal.mp4',
    posterUrl: '/media/bts-rehearsal-poster.jpg',
    alt: 'Behind the scenes rehearsal and choreography crafting',
    aspectRatio: '16/9',
    category: 'behind-the-scenes',
    caption: 'Crafting effortless routines in rehearsal sessions with Agarwal family',
    published: true,
    expectedFilename: 'sj-rehearsal-bts.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },
  'about-stage-production': {
    id: 'about-stage-production',
    title: 'Live Wedding Stage Coordination',
    mediaType: 'video',
    sourceUrl: '/media/stage-production.mp4',
    posterUrl: '/media/stage-production-poster.jpg',
    alt: 'Behind the scenes stage and cue coordination at celebration',
    aspectRatio: '16/9',
    category: 'behind-the-scenes',
    caption: 'On-ground staging, lighting and cue direction by Sajid',
    published: true,
    expectedFilename: 'sj-stage-coordination.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },

  // Wedding Choreography Page
  'choreography-hero': {
    id: 'choreography-hero',
    title: 'Wedding Choreography Overview',
    mediaType: 'video',
    sourceUrl: '/media/choreography-showcase.mp4',
    posterUrl: '/media/choreography-showcase-poster.jpg',
    alt: 'Visual celebration choreography across traditions',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Tailored wedding celebrations from Haldi to Reception',
    published: true,
    expectedFilename: 'sj-wedding-choreography-hero.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },
  'dance-along-session': {
    id: 'dance-along-session',
    title: 'Dance Along with SJ — Interactive Session',
    mediaType: 'image',
    sourceUrl: undefined,
    posterUrl: undefined,
    alt: 'Visual placeholder for Dance Along with SJ interactive guest session',
    aspectRatio: '16/9',
    category: 'choreography',
    caption: 'Instructor-led wedding day session where all guests join in',
    published: false,
    expectedFilename: 'sj-dance-along-interactive.jpg',
    recommendedDimensions: '1600x900 (16:9)',
  },

  // Couple Entries Page
  'entries-hero': {
    id: 'entries-hero',
    title: 'Grand Couple Entries & Visual Spectacles',
    mediaType: 'video',
    sourceUrl: '/media/entries-showcase.mp4',
    posterUrl: '/media/entries-showcase-poster.jpg',
    alt: 'Couple entries and artist entertainment production showcase',
    aspectRatio: '16/9',
    category: 'couple-entry',
    caption: 'Bespoke entry concepts tailored to your wedding venue and mood',
    published: true,
    expectedFilename: 'sj-couple-entries-hero.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // Packages Hero
  'packages-hero': {
    id: 'packages-hero',
    title: 'Experiences & Tailored Combinations',
    mediaType: 'image',
    sourceUrl: '/media/sj-brand-wallpaper.jpg',
    posterUrl: '/media/sj-brand-wallpaper.jpg',
    alt: 'Bespoke wedding entertainment combinations brand visual',
    aspectRatio: '16/9',
    category: 'celebration',
    caption: 'Thoughtfully combined choreography and entry experiences',
    published: true,
    expectedFilename: 'sj-experiences-packages-hero.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // Contact Hero
  'contact-hero': {
    id: 'contact-hero',
    title: 'Plan Your Celebration',
    mediaType: 'image',
    sourceUrl: '/media/sj-brand-wallpaper.jpg',
    posterUrl: '/media/sj-brand-wallpaper.jpg',
    alt: 'Planning and wedding choreography enquiry visual',
    aspectRatio: '16/9',
    category: 'celebration',
    caption: 'Begin crafting your celebration with Sajid & Joya',
    published: true,
    expectedFilename: 'sj-plan-your-celebration.jpg',
    recommendedDimensions: '1920x1080 (16:9)',
  },

  // Award Recognition & Accolades
  'award-stage': {
    id: 'award-stage',
    title: 'National Star Achievers Award Felicitation',
    mediaType: 'image',
    sourceUrl: '/media/award-stage-photo.jpg',
    posterUrl: '/media/award-stage-photo.jpg',
    alt: 'Sajid receiving the National Star Achievers Award from celebrity guest Vaishnavi Macdonald on stage in Jaipur',
    aspectRatio: '1/1',
    category: 'portrait',
    caption: 'Sajid honoured on stage by Bollywood actress Vaishnavi Macdonald in Jaipur',
    published: true,
    expectedFilename: 'award-stage-photo.jpg',
    recommendedDimensions: '1080x1080 (1:1)',
  },
  'award-certificate': {
    id: 'award-certificate',
    title: 'National Star Achievers Certificate of Excellence',
    mediaType: 'image',
    sourceUrl: '/media/award-certificate.jpg',
    posterUrl: '/media/award-certificate.jpg',
    alt: 'National Star Achievers Award Certificate of Excellence presented to Mr. Sajid Ali, Founder of SJ Entertainment Choreography',
    aspectRatio: '16/9',
    category: 'portrait',
    caption: 'Certificate of Excellence presented to Mr. Sajid Ali for outstanding achievements in choreography',
    published: true,
    expectedFilename: 'award-certificate.jpg',
    recommendedDimensions: '1820x1040 (16:9)',
  },
  'award-reel': {
    id: 'award-reel',
    title: 'National Star Achievers Award Ceremony Highlight',
    mediaType: 'video',
    sourceUrl: '/media/award-showcase.mp4',
    posterUrl: '/media/award-showcase-poster.jpg',
    alt: 'Video highlight of Sajid receiving the Wedding Choreographer Award at the National Star Achievers ceremony',
    aspectRatio: '9/16',
    category: 'celebration',
    caption: 'Stage ceremony highlight and trophy presentation in Jaipur',
    published: true,
    expectedFilename: 'award-showcase.mp4',
    recommendedDimensions: '720x1280 (9:16)',
  },
  'award-walk': {
    id: 'award-walk',
    title: 'National Star Achievers Gala Stage Walk',
    mediaType: 'image',
    sourceUrl: '/media/award-stage-walk.jpg',
    posterUrl: '/media/award-stage-walk.jpg',
    alt: 'Sajid walking with trophy and certificate under the National Star Achievers Award stage backdrop',
    aspectRatio: '4/5',
    category: 'portrait',
    caption: 'Celebrating success at the National Star Achievers Award Gala',
    published: true,
    expectedFilename: 'award-stage-walk.jpg',
    recommendedDimensions: '1080x1350 (4:5)',
  },
};

export function getMedia(id: string): MediaItem {
  return (
    mediaRegistry[id] || {
      id,
      title: 'Celebration Visual',
      mediaType: 'image',
      alt: 'Celebration visual placeholder',
      aspectRatio: '16/9',
      category: 'celebration',
      published: false,
    }
  );
}

