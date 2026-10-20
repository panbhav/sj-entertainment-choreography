export interface ExperienceCombination {
  id: string;
  name: string;
  tagline: string;
  idealFor: string;
  summary: string;
  combinableServices: string[];
  planningFocus: string[];
  queryParam: string;
  featured?: boolean;
}

export const experienceCombinations: ExperienceCombination[] = [
  {
    id: 'signature-choreography',
    name: 'Signature Choreography',
    tagline: 'Focused on creating memorable, effortless stage moments for family and couple',
    idealFor: 'Couples and families wanting dedicated dance direction for Sangeet, Haldi, or Reception.',
    summary:
      'A structured, step-by-step dance curation focused on turning non-dancers into confident performers. We tailor song tracks, rehearse at a comfortable pace, and ensure everyone looks natural on stage.',
    combinableServices: [
      'Bespoke Couple Dance routine with custom track mixing',
      'Parents & elders celebration sequence',
      'Family & friends group choreography',
      'Bride / Groom solo or squad moments',
      'In-person and virtual rehearsal scheduling',
      'Custom track editing & rehearsal video guides',
    ],
    planningFocus: [
      'Number of songs and total stage runtime',
      'Participant comfort levels and music preferences',
      'Rehearsal schedule leading up to wedding week',
      'Stage dimensions and outfit movement checks',
    ],
    queryParam: 'signature-choreography',
    featured: false,
  },
  {
    id: 'grand-entry-experience',
    name: 'Grand Entry Experience',
    tagline: 'Theatrical couple, bridal, or groom entries with synchronized production',
    idealFor: 'Couples who want a cinematic, unforgettable entrance that sets the mood for the entire evening.',
    summary:
      'Turn your grand arrival into a breathtaking memory. We coordinate music cues, choreography, bridal squad pacing, and live performers or theatrical visual elements.',
    combinableServices: [
      'Couple, Bridal, or Groom Entry choreography & direction',
      'Curated entry music arrangement and vocal preludes',
      'Live Dhol, acoustic instrumentalists, or folk escorts',
      'Coordinated flash mob or bridal squad entry walk',
      'On-ground timing alignment with lighting & special effects teams',
    ],
    planningFocus: [
      'Venue pathway architecture and technical clearances',
      'Visual mood: Royal, romantic, high-energy, or ethereal',
      'Live artist accompaniment choices',
      'Rehearsal with bridal party and procession escorts',
    ],
    queryParam: 'grand-entry-experience',
    featured: false,
  },
  {
    id: 'complete-celebration',
    name: 'Complete Celebration',
    tagline: 'Comprehensive choreography, grand entries, and live entertainment direction',
    idealFor: 'Couples and multi-day celebrations seeking holistic entertainment curation from Haldi to Reception.',
    summary:
      'A seamless entertainment journey spanning multiple ceremonies. Sajid & Joya oversee all choreography sequences, design grand entries, and integrate live performers and our crowd-favourite “Dance Along with SJ” session.',
    combinableServices: [
      'Multi-event choreography (Haldi, Mehendi, Sangeet & Reception)',
      'Couple, Bridal, and Groom custom entry concepts',
      'Dance Along with SJ interactive wedding session',
      'Coordination of live artist acts, dhol ensembles, or dance troupes',
      'Dedicated on-site rehearsal and event-day stage management',
    ],
    planningFocus: [
      'Multi-day timeline and sequence scheduling across venues',
      'Holistic musical flow and diverse genre curation',
      'Artist selection and technical rider coordination',
      'Comprehensive travel logistics and on-ground presence',
    ],
    queryParam: 'complete-celebration',
    featured: true,
  },
];

export const quotationFactors = [
  {
    title: 'Event Location & Dates',
    description:
      'Destination weddings, travel itineraries, multi-city schedules, and peak wedding season availability across India.',
  },
  {
    title: 'Scope of Selected Services',
    description:
      'Whether your celebration calls for single-event couple choreography, multi-day family routines, or grand entries.',
  },
  {
    title: 'Number of Performances',
    description:
      'Total songs, medleys, distinct family chapters, solos, and group sequences being choreographed.',
  },
  {
    title: 'Rehearsal Format & Duration',
    description:
      'The balance of in-person studio sessions, private home visits, virtual rehearsals, and customized practice video guides.',
  },
  {
    title: 'Artists & Live Production',
    description:
      'Involvement of live dhol ensembles, dance troupes, emcees, instrumentalists, and special stage cues.',
  },
  {
    title: 'Travel & Accommodation Logistics',
    description:
      'Travel and lodging requirements for outstation destinations, discussed openly and transparently during planning.',
  },
];
