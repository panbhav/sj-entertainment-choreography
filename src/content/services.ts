export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  recommendedDuration?: string;
  mediaId?: string;
  serviceCategory: 'celebration' | 'performance';
  queryParam: string;
}

export interface RehearsalOption {
  id: string;
  title: string;
  description: string;
  availabilityNote: string;
  isStandardOption: boolean;
}

export const weddingCelebrations: ServiceItem[] = [
  {
    id: 'destination-weddings',
    name: 'Destination Wedding Choreography',
    subtitle: 'Comprehensive choreography & on-ground stage coordination across India and worldwide',
    description:
      'A seamless, all-inclusive choreography experience tailored for destination weddings in royal Rajasthan palaces, sun-kissed Goa beaches, serene hill retreats, and luxury resort banquets. Combining pre-wedding virtual rehearsals across timezones with on-ground technical dry runs, AV crew alignment, and multi-ceremony dance direction.',
    highlights: [
      'Multi-day celebration curation (Sundowner, Mehendi, Sangeet & After-party)',
      'Pre-wedding online rehearsals for outstation, international, and NRI relatives',
      'On-ground stage blocking, lighting synchronization, and sound-check rehearsals',
      'Dedicated floor direction by Sajid & Joya throughout your wedding days',
      'Seamless coordination with wedding planners, DJs, emcees, and production teams',
    ],
    recommendedDuration: 'Multi-day on-site presence',
    mediaId: 'choreography-hero',
    serviceCategory: 'celebration',
    queryParam: 'destination-weddings',
  },
  {
    id: 'sangeet',
    name: 'Sangeet Night Spectacular',
    subtitle: 'The grand musical centerpiece of your wedding celebrations',
    description:
      'High-energy, coordinated performances designed for family chapters, cousins, friend squads, and the couple. We curate a natural flow so every sequence builds excitement towards the grand finale.',
    highlights: [
      'Storyline & theme conceptualisation',
      'Track selection and music pacing',
      'Step-by-step rehearsals adapted to all comfort levels',
      'Stage presence and cue coaching',
    ],
    recommendedDuration: 'Tailored to event schedule',
    mediaId: 'choreography-hero',
    serviceCategory: 'celebration',
    queryParam: 'sangeet-spectacular',
  },
  {
    id: 'haldi',
    name: 'Haldi Celebrations',
    subtitle: 'Joyful, spontaneous choreography for daytime turmeric revelry',
    description:
      'Uplifting and cheerful dance pieces that match the casual warmth and vibrant spirit of Haldi ceremonies. Designed with lively tracks and easy-to-follow steps so everyone can dance freely without worrying about complex footwork.',
    highlights: [
      'Breezy, vibrant folk and popular tracks',
      'Interactive routines that involve elders and guests',
      'Choreography suited for outdoor and pool-side setups',
    ],
    serviceCategory: 'celebration',
    queryParam: 'haldi-celebration',
  },
  {
    id: 'mehendi',
    name: 'Mehendi Soiree',
    subtitle: 'Delicate, rhythmic performances intertwined with festive warmth',
    description:
      'Graceful steps, gentle spins, and melodious song selections tailored for intimate gatherings and high-spirited girl squads as henna is applied.',
    highlights: [
      'Graceful semi-classical, sufi, and retro Bollywood options',
      'Routines comfortable for attire with dupattas and lehengas',
      'Bridal squad and sister routines',
    ],
    serviceCategory: 'celebration',
    queryParam: 'mehendi-soiree',
  },
  {
    id: 'bhaat-mayra',
    name: 'Bhaat / Mayra Traditions',
    subtitle: 'Heartwarming cultural sequences celebrating maternal family bonds',
    description:
      'Honouring emotional family traditions with customary songs and dignified, joyful choreography that brings Nanihal and maternal relatives into the spotlight with respect and celebration.',
    highlights: [
      'Traditional and regional folk melodies',
      'Inclusive choreography for multiple generations',
      'Reverent and celebratory presentation',
    ],
    serviceCategory: 'celebration',
    queryParam: 'bhaat-mayra',
  },
  {
    id: 'wedding-day',
    name: 'Wedding Day Ceremonies',
    subtitle: 'Poised choreography for varmala, processions, and auspicious moments',
    description:
      'Choreographing the pacing, stance, and graceful movements for sacred traditions — from the groom’s baraat arrival to the varmala exchange and formal bridal aisle walk.',
    highlights: [
      'Timed music cues for the varmala exchange',
      'Baraat flash mobs and family dance coordination',
      'Elegant posture and timing for floral walks',
    ],
    serviceCategory: 'celebration',
    queryParam: 'wedding-day-ceremonies',
  },
  {
    id: 'reception',
    name: 'Wedding Reception',
    subtitle: 'Sophisticated couple showcases and celebratory toast dances',
    description:
      'Polished, black-tie or royal traditional ballroom and contemporary dance routines for the newlywed reveal, formal couple dance, and family toast sequences.',
    highlights: [
      'Romantic slow dance and contemporary waltz styling',
      'Refined father-daughter and mother-son moments',
      'High-impact party starter routines',
    ],
    serviceCategory: 'celebration',
    queryParam: 'reception-showcase',
  },
];

export const signaturePerformances: ServiceItem[] = [
  {
    id: 'couple-dance',
    name: 'Bespoke Couple Dance',
    subtitle: 'A romantic, expressive performance reflecting your unique chemistry',
    description:
      'We design routines that feel authentic to who you are — whether slow, poignant and lyrical, or full of playful banter and Bollywood rhythm. We ensure movements feel natural, flattering on stage, and comfortable in wedding attire.',
    highlights: [
      'Song customisation and personalised medley mixing',
      'Camera-ready dips, lifts, and closing frames',
      'Outfit and shoe compatibility checks',
      'Expression, eye contact, and stage confidence coaching',
    ],
    serviceCategory: 'performance',
    queryParam: 'couple-dance',
  },
  {
    id: 'dance-along-sj',
    name: 'Dance Along with SJ',
    subtitle: 'Instructor-led wedding session where all guests join in effortless unison',
    description:
      'A signature crowd-favourite highlight where Sajid & Joya take the floor live during your Sangeet, Cocktail, or After-party to guide guests through catchy, easy-to-mirror steps. Breaks the ice instantly and turns spectators into dancers.',
    highlights: [
      'Live interactive floor direction by Sajid & Joya',
      'Zero rehearsals required for guests',
      'Instant crowd engagement for all age groups',
      'Seamless transition from stage performances into an open dance floor',
    ],
    mediaId: 'dance-along-session',
    serviceCategory: 'performance',
    queryParam: 'dance-along-with-sj',
  },
  {
    id: 'bride-solo',
    name: 'Graceful Bride Solo',
    subtitle: 'A captivating spotlight performance crafted for the bride',
    description:
      'Designed to celebrate your journey, emotions, and style. From subtle expressive storytelling to dynamic fusion rhythms, the routine highlights your grace while remaining effortless to perform in bridal wear.',
    highlights: [
      'Expressions (abhinaya) and hand mudras / poise',
      'Comfort-first pacing keeping heavy attire in mind',
      'Bespoke track transition and audio mixing',
    ],
    serviceCategory: 'performance',
    queryParam: 'bride-solo',
  },
  {
    id: 'groom-solo',
    name: 'High-Spirited Groom Solo / Squad',
    subtitle: 'Confident, fun routines full of charisma and charm',
    description:
      'Designed for grooms who want to surprise their partner or light up the stage with swagger. Can be performed solo or transitioned smoothly into a group dance with groomsmen.',
    highlights: [
      'Energetic choreography tailored to natural groove',
      'Groomsmen integration and banter sequences',
      'Relaxed, fun rehearsals designed for busy schedules',
    ],
    serviceCategory: 'performance',
    queryParam: 'groom-solo',
  },
  {
    id: 'family-friends',
    name: 'Family & Friends Group Performances',
    subtitle: 'Cohesive, joyful group choreography for relatives of all ages',
    description:
      'From parents and elder relatives to cousins and college friends, we create layered routines where everyone shines regardless of dance background or rehearsal availability.',
    highlights: [
      'Formations designed to hide missed steps and elevate stage look',
      'Separate sections for different family branches',
      'Pacing adapted for elders and children',
    ],
    serviceCategory: 'performance',
    queryParam: 'family-friends-group',
  },
  {
    id: 'surprise-acts',
    name: 'Flash Mobs & Surprise Performances',
    subtitle: 'Secretly rehearsed showstoppers to amaze the couple or guests',
    description:
      'Discrete planning, confidential audio cues, and coordinate rehearsal sessions for surprise performances by the bridal party, siblings, or parents.',
    highlights: [
      'Discreet rehearsal coordination',
      'Staging and surprise entrance cues',
      'High-impact reveal timing',
    ],
    serviceCategory: 'performance',
    queryParam: 'surprise-performance',
  },
];

/**
 * Rehearsal options - driven by configuration.
 * Notes clearly state that these are discussed during planning and customized to each wedding.
 */
export const rehearsalOptions: RehearsalOption[] = [
  {
    id: 'in-person-sessions',
    title: 'In-Person Studio & Home Sessions',
    description:
      'Focused, dedicated in-person rehearsal sessions with Sajid & Joya at your private residence, chosen rehearsal space, or designated studio.',
    availabilityNote: 'Scheduled based on travel dates and city logistics.',
    isStandardOption: true,
  },
  {
    id: 'virtual-rehearsals',
    title: 'Virtual & Hybrid Rehearsals',
    description:
      'Interactive live online sessions for family members, cousins, or friends living in different cities or abroad prior to wedding week.',
    availabilityNote: 'Configurable option for out-of-town performers.',
    isStandardOption: true,
  },
  {
    id: 'practice-video-guides',
    title: 'Bespoke Practice Video Guides',
    description:
      'Custom recorded video breakdowns with counts, mirrors, and slow-tempo repetitions so performers can practice at their own pace between sessions.',
    availabilityNote: 'Provided upon discussion based on choreography plan.',
    isStandardOption: true,
  },
  {
    id: 'custom-music-editing',
    title: 'Custom Audio Mixing & Track Editing',
    description:
      'Seamless track transitions, tempo adjustments, voice-over additions, and bespoke musical cuts crafted specifically for your dance sequences.',
    availabilityNote: 'Tailored to your final performance track selections.',
    isStandardOption: true,
  },
  {
    id: 'on-ground-stage-direction',
    title: 'On-Ground Stage & Cue Coordination',
    description:
      'On-site technical walk-through, sound checks, light cue coordination, and backstage line-up direction on the event day.',
    availabilityNote: 'Subject to schedule and event team coordination.',
    isStandardOption: true,
  },
];

export const choreographyPlanningSteps = [
  {
    step: '01',
    title: 'Discovery & Song Selection',
    description:
      'We discuss your wedding vision, song preferences, family dynamics, and comfort levels to map out the celebration storyline.',
  },
  {
    step: '02',
    title: 'Choreography & Track Customisation',
    description:
      'We custom mix your tracks and design steps tailored to your outfits, stage size, and personal aesthetic.',
  },
  {
    step: '03',
    title: 'Comfort-First Rehearsals',
    description:
      'Step-by-step sessions with patient guidance, focusing on confidence, facial expressions, and stage presence.',
  },
  {
    step: '04',
    title: 'Final Stage & Event Execution',
    description:
      'Stage dry run, technical cue alignment with your DJ/production team, and calm guidance as you take the stage.',
  },
];
