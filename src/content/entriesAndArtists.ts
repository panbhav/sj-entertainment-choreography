export interface EntryConcept {
  id: string;
  name: string;
  description: string;
  mood: string;
  mediaId: string;
  imageUrl: string;
  inclusions?: string[];
  venueRequirements?: string[];
  queryParam: string;
  isConfirmedOffering: boolean; // Flag identifying verified vs illustrative concept
  isPublished: boolean;
}

export interface ArtistCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  suggestedMoments: string[];
  productionNotes: string;
  queryParam: string;
  isPublished: boolean;
}

/**
 * Proposed entry concepts.
 * 
 * In accordance with client guidelines, these concepts are illustrative ideas
 * presented for creative discussion with authentic luxury visual references.
 */
export const coupleEntryConcepts: EntryConcept[] = [
  {
    id: 'romantic-couple-entry',
    name: 'Romantic & Lyrical Entry',
    description:
      'An intimate, poignant entrance marked by soft lighting, melodic instrumentals, and graceful synchronised walking or slow dance movements leading into the center floor.',
    mood: 'Emotional, poetic, understated luxury',
    mediaId: 'entries-hero',
    imageUrl: '/images/entries/romantic-couple-entry.jpg',
    inclusions: [
      'Personalised love story audio prelude or voiceover option',
      'Timed lighting and musical crescendo coordination',
      'Gentle bridal escort and couple reveal choreography',
    ],
    venueRequirements: [
      'Unobstructed central aisle or stage pathway',
      'Professional dimmable lighting and spot control',
    ],
    queryParam: 'romantic-entry',
    isConfirmedOffering: false,
    isPublished: true,
  },
  {
    id: 'royal-entry',
    name: 'Royal Heritage & Regal Entry',
    description:
      'An entrance steeped in grandeur with traditional heralds, royal chhatri or ceremonial escorts, dignified pacing, and anthemic orchestral or shehnai-infused soundscapes.',
    mood: 'Imperial, dignified, timeless grandeur',
    mediaId: 'entries-hero',
    imageUrl: '/images/entries/royal-entry.jpg',
    inclusions: [
      'Ceremonial escort coordination with bridal party or performers',
      'Stately procession pacing and posture guidance',
      'Custom grand fanfare audio mixing',
    ],
    venueRequirements: [
      'Spacious entry aisle with high ceilings or open-air courtyard',
      'Stage or platform with adequate depth for formal court reveal',
    ],
    queryParam: 'royal-entry',
    isConfirmedOffering: false,
    isPublished: true,
  },
  {
    id: 'dance-led-entry',
    name: 'Dance-Led High-Energy Entry',
    description:
      'The couple makes an electric entrance accompanied by a coordinated flash mob of siblings, friends, or a professional dance troupe that erupts straight onto the dance floor.',
    mood: 'Celebratory, electrifying, upbeat',
    mediaId: 'entries-hero',
    imageUrl: '/images/entries/dance-led-entry.jpg',
    inclusions: [
      'Rehearsed entry flash mob with friends and bridal party',
      'Dynamic song switch from ambient entry to dance floor anthem',
      'Floor positioning and reveal timing',
    ],
    venueRequirements: [
      'Wide dance floor adjacent to entry door or staircase',
      'Sound system capable of sudden high-energy drops',
    ],
    queryParam: 'dance-led-entry',
    isConfirmedOffering: false,
    isPublished: true,
  },
  {
    id: 'bollywood-entry',
    name: 'Cinematic Bollywood Entry',
    description:
      'Drawing inspiration from classic and modern Hindi cinema with dramatic lighting, evocative music arrangements, and choreographed dramatic cues.',
    mood: 'Theatrical, cinematic, glamorous',
    mediaId: 'entries-hero',
    imageUrl: '/images/entries/bollywood-entry.jpg',
    inclusions: [
      'Custom theatrical audio track cut with dialogues or signature cues',
      'Choreographed stage walk and signature pose freeze',
      'Integration with venue special effects operators',
    ],
    venueRequirements: [
      'Visual backdrop or LED wall synchronization capability',
      'Event production permissions for cold pyro / haze where permitted',
    ],
    queryParam: 'bollywood-entry',
    isConfirmedOffering: false,
    isPublished: true,
  },
  {
    id: 'floral-entry',
    name: 'Floral Canopy & Botanical Pathway',
    description:
      'A serene, visually stunning walk beneath a bespoke Phoolon Ki Chaadar or blooming floral archways, framed by gentle petals and acoustic melodies.',
    mood: 'Fresh, ethereal, botanical grace',
    mediaId: 'entries-hero',
    imageUrl: '/images/entries/floral-entry.jpg',
    inclusions: [
      'Pacing coordination for brothers/friends carrying the canopy',
      'Acoustic or instrumental entry timing',
      'Staging positioning for photo & film framing',
    ],
    venueRequirements: [
      'Clear clearance height along the ceremonial aisle',
      'Smooth, level flooring suitable for heavy lehengas',
    ],
    queryParam: 'floral-entry',
    isConfirmedOffering: false,
    isPublished: true,
  },
  {
    id: 'bridal-groom-entry',
    name: 'Individual Bridal or Groom Feature Entry',
    description:
      'Distinct concepts tailored specifically for the solo bride walk or a grand groom entry featuring vintage cars, buggies, or an exuberant baraat reveal.',
    mood: 'Personalized, charismatic, spotlight-focused',
    mediaId: 'entries-hero',
    imageUrl: '/images/entries/bridal-groom-entry.jpg',
    inclusions: [
      'Detailed gait, expression, and pacing walk-through',
      'Coordinated music cue and spotlight focus',
      'Bridal party escort placement',
    ],
    venueRequirements: [
      'Tailored to the chosen vehicle or procession mode',
    ],
    queryParam: 'individual-entry',
    isConfirmedOffering: false,
    isPublished: true,
  },
  {
    id: 'custom-themed-entry',
    name: 'Custom Themed Concept Entry',
    description:
      'A unique entrance built around your personal story, travels, shared passions, or specific cultural heritage, conceptualised from scratch with our creative team.',
    mood: 'Bespoke, artistic, one-of-a-kind',
    mediaId: 'entries-hero',
    imageUrl: '/images/entries/custom-themed-entry.jpg',
    inclusions: [
      'Collaborative concept ideation session',
      'Custom visual and musical storyboard',
      'Full technical coordination with wedding planners and decorators',
    ],
    venueRequirements: [
      'Custom requirements discussed during event production meetings',
    ],
    queryParam: 'custom-entry',
    isConfirmedOffering: false,
    isPublished: true,
  },
];

/**
 * Proposed Live Artists & Entertainment Categories.
 * 
 * Actual artist bookings and technical riders depend on availability, venue rules,
 * and client curation. We present verified categories with clear planning explanations.
 */
export const artistCategories: ArtistCategory[] = [
  {
    id: 'dance-troupes',
    name: 'Professional Dance Troupes & Ensembles',
    subtitle: 'Backing dancers and opening acts that elevate stage energy',
    description:
      'Curated professional dancers to accompany couple entries, frame sangeet performances, or present dazzling themed opening acts across Bollywood, contemporary, and classical styles.',
    imageUrl: '/images/artists/dance-troupes.jpg',
    suggestedMoments: ['Sangeet Grand Opening', 'Couple Entry Backing', 'Grand Finale Sequence'],
    productionNotes: 'Stage dimensions, green room facilities, and costume changing areas coordinated with your venue.',
    queryParam: 'dance-troupes',
    isPublished: true,
  },
  {
    id: 'dhol-artists',
    name: 'Symphonic Dhol Ensembles & Percussionists',
    subtitle: 'Unstoppable Punjabi and fusion beats to ignite the celebration',
    description:
      'Energetic traditional and fusion dhol players to lead the Baraat, amplify the Groom entry, or kick off the after-party dance floor with thunderous live rhythm.',
    imageUrl: '/images/artists/dhol-artists.jpg',
    suggestedMoments: ['Baraat Procession', 'Milni Ceremony', 'Sangeet After-Party Kickoff'],
    productionNotes: 'Acoustic and wireless mic options coordinated based on indoor or outdoor venue restrictions.',
    queryParam: 'dhol-artists',
    isPublished: true,
  },
  {
    id: 'folk-performers',
    name: 'Authentic Regional & Folk Artists',
    subtitle: 'Rich cultural vibrancy rooted in heritage traditions',
    description:
      'Traditional Rajasthani Ghoomar, Kalbelia, Gujarati Garba/Raas, Bhangra, or Sufi folk troupes that bring cultural authenticity and interactive joy to Haldi, Mehendi, or Welcome nights.',
    imageUrl: '/images/artists/folk-performers.jpg',
    suggestedMoments: ['Haldi Ceremonies', 'Mehendi Carnival', 'Cultural Welcome Dinner'],
    productionNotes: 'Tailored to regional heritage and event theme requirements.',
    queryParam: 'folk-performers',
    isPublished: true,
  },
  {
    id: 'singers-bands',
    name: 'Live Bands & Acoustic Vocalists',
    subtitle: 'Soul-stirring live soundscapes for dinners and cocktail soirees',
    description:
      'Versatile singers and multi-genre live bands spanning Sufi rock, Bollywood retro, romantic acoustics, and contemporary pop to set an unforgettable musical atmosphere.',
    imageUrl: '/images/artists/singers-bands.jpg',
    suggestedMoments: ['Cocktail Evening', 'Welcome Dinner', 'Post-Sangeet Jam'],
    productionNotes: 'Sound riders, PA systems, and acoustic checks scheduled in advance with sound engineers.',
    queryParam: 'singers-bands',
    isPublished: true,
  },
  {
    id: 'instrumentalists',
    name: 'Classical & Fusion Instrumentalists',
    subtitle: 'Melodious violin, saxophone, flute, and sitar solos',
    description:
      'Virtuoso soloists or chamber duos providing ambient melodies during bridal walks, varmala exchanges, or elegant cocktail hour receptions.',
    imageUrl: '/images/artists/instrumentalists.jpg',
    suggestedMoments: ['Varmala Exchange', 'Bridal Walkdown', 'High-Tea & Cocktail Hour'],
    productionNotes: 'Requires dedicated audio inputs and stage monitor positioning.',
    queryParam: 'instrumentalists',
    isPublished: true,
  },
  {
    id: 'emcees',
    name: 'Celebrity & Professional Wedding Emcees',
    subtitle: 'Charismatic, articulate hosting that keeps the celebration flowing',
    description:
      'Warm, engaging hosts who understand wedding etiquette, maintain high room energy, introduce family chapters smoothly, and keep guests entertained throughout the sangeet.',
    imageUrl: '/images/artists/emcees.jpg',
    suggestedMoments: ['Sangeet Night Compering', 'Interactive Family Games', 'Reception Welcomes'],
    productionNotes: 'Script walkthrough and family pronunciation guide conducted prior to event day.',
    queryParam: 'emcees',
    isPublished: true,
  },
  {
    id: 'specialist-acts',
    name: 'Specialist Acts & Visual Spectacles',
    subtitle: 'Acrobatic, laser, LED, and atmospheric performance artists',
    description:
      'Mesmerising visual spectacles such as mirror performers, LED wings, aerial silk acts, or sand artists that add wonder and photo-worthy moments to your celebration.',
    imageUrl: '/images/artists/specialist-acts.jpg',
    suggestedMoments: ['Sangeet Mid-Show Transition', 'Reception Reveal', 'After-Party'],
    productionNotes: 'Rigging points, ceiling heights, and fire/safety clearances reviewed directly with venue management.',
    queryParam: 'specialist-acts',
    isPublished: true,
  },
];
