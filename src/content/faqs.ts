export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'choreography' | 'entries' | 'logistics' | 'general';
}

export const weddingChoreographyFaqs: FAQItem[] = [
  {
    id: 'beginners',
    question: 'Can beginners and family members with no dance experience participate?',
    answer:
      'Yes, absolutely. The vast majority of wedding performers are not trained dancers. We structure our choreography around intuitive, natural movements, clear counts, and comfortable pacing. We focus on stage confidence and genuine expression rather than complicated acrobatics so every family member feels completely at ease.',
    category: 'choreography',
  },
  {
    id: 'song-choice',
    question: 'Can we choose our own songs, or do you recommend tracks?',
    answer:
      'You are entirely welcome to choose your favourite songs. We collaborate with you to understand your musical tastes and help determine track pacing, length, and seamless medley transitions. If you are undecided, we are happy to share curated track suggestions based on the vibe of your event.',
    category: 'choreography',
  },
  {
    id: 'separate-family-performances',
    question: 'Can different family branches or friend groups have separate performances?',
    answer:
      'Yes. Most sangeet celebrations feature multiple chapters — such as groom’s friends, bride’s squad, parents, cousins, and the couple dance. We structure rehearsal times and track lengths so each group gets dedicated attention and the overall show flows smoothly without feeling overly lengthy.',
    category: 'choreography',
  },
  {
    id: 'rehearsal-planning',
    question: 'How are rehearsals planned and scheduled?',
    answer:
      'Rehearsal plans are tailored to your schedule and wedding timeline. Depending on whether family members are local or traveling from out of town, we combine in-person sessions, live virtual rehearsals, and recorded practice video guides with counts. We finalize rehearsal days and durations during our initial planning discussions.',
    category: 'logistics',
  },
  {
    id: 'travel-outside-city',
    question: 'Can choreography and coordination be arranged for weddings outside your home city?',
    answer:
      'Yes. Sajid & Joya travel across India for destination and local celebrations. For outstation weddings, rehearsal schedules, travel itineraries, and on-ground rehearsal dates leading up to the celebration days are planned directly with you and your wedding planners.',
    category: 'logistics',
  },
  {
    id: 'destination-wedding-process',
    question: 'How does destination wedding choreography work when family members live in different cities?',
    answer:
      'This is one of our key specialities. With more than 10 years of destination wedding choreography experience, we conduct interactive virtual rehearsals for cousins, friends, and out-of-town relatives before the wedding week. When we arrive on-site at your destination venue (in Rajasthan, Goa, Kerala, or anywhere across India), we run comprehensive on-stage blocking rehearsals and coordinate audio-light cues directly with your venue and event production teams.',
    category: 'logistics',
  },
  {
    id: 'entry-concept-requirements',
    question: 'How are technical and stage requirements handled for couple entries?',
    answer:
      'Grand entry concepts rely heavily on your venue layout, aisle width, ceiling heights, and local sound/pyro guidelines. During initial planning, we review your venue specifications alongside your event decorator, lighting designer, and sound team to ensure smooth, safe execution.',
    category: 'entries',
  },
];
