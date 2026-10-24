export interface OwnerBio {
  name: string;
  role: string;
  portraitMediaId: string;
  bioParagraphs: string[];
  focusAreas: string[];
  isPublished: boolean;
}

export interface BrandApproachPillar {
  title: string;
  description: string;
}

export interface ExperienceStat {
  value: string;
  label: string;
  description: string;
}

export interface AwardRecognition {
  awardTitle: string;
  category: string;
  honouree: string;
  conferredBy: string;
  conferredByTitle: string;
  event: string;
  location: string;
  date: string;
  summary: string;
  highlights: string[];
}

export const ownersData: {
  jointIntro: string;
  jointMediaId: string;
  experienceYears: string;
  celebrationsCount: string;
  stats: ExperienceStat[];
  award: AwardRecognition;
  owners: OwnerBio[];
  philosophyTitle: string;
  philosophyParagraphs: string[];
  approachPillars: BrandApproachPillar[];
  coverageStatement: string;
} = {
  jointIntro:
    "We are Sajid and Joya — creative partners, founders, and the artistic heartbeat behind SJ Entertainment Choreography. With more than 10 years of dedicated experience and hundreds of couple and family celebrations choreographed across India, we transform your favourite music into wedding moments that look breathtaking on stage and feel joyful in your heart.",
  jointMediaId: 'portrait-sajid-joya',
  experienceYears: '10+',
  celebrationsCount: '500+',
  stats: [
    {
      value: '10+ Years',
      label: 'Experience',
      description: 'Over a decade of choreographing dream wedding moments and stage productions.',
    },
    {
      value: '500+',
      label: 'Celebrations',
      description: 'Couples, families, and high-energy squads choreographed across India.',
    },
    {
      value: 'National Award',
      label: 'Recognition',
      description: 'Honoured with the National Star Achievers Award 2026 for wedding choreography excellence.',
    },
    {
      value: 'Pan-India',
      label: 'Destination Service',
      description: 'On-site rehearsals in Rajasthan, Goa, Kerala, and luxury resorts nationwide.',
    },
  ],
  award: {
    awardTitle: 'National Star Achievers Award 2026',
    category: 'Best Wedding Choreographer of the Year',
    honouree: 'Mr. Sajid Ali',
    conferredBy: 'Vaishnavi Macdonald',
    conferredByTitle: 'Veteran Bollywood & Television Actress',
    event: 'National Star Achievers Award Gala',
    location: 'Hotel Prime Safari, Jaipur, Rajasthan',
    date: '04 October 2026',
    summary:
      'Honoured with the prestigious Certificate of Excellence and Star Achievers Trophy in recognition of outstanding artistic contribution, innovative wedding choreography, and memorable stage productions across India.',
    highlights: [
      'Conferred on stage by celebrated Bollywood actress Vaishnavi Macdonald',
      'Certificate of Excellence presented to Founder Sajid Ali',
      'Recognized for exceptional musicality, stage direction & non-dancer empowerment',
    ],
  },
  owners: [
    {
      name: 'Sajid',
      role: 'Co-Founder & Lead Choreographer',
      portraitMediaId: 'portrait-sajid',
      bioParagraphs: [
        'With more than a decade of stage mastery and recognized with the National Star Achievers Award 2026 by Bollywood actress Vaishnavi Macdonald, Sajid leads musical arrangements, dynamic staging, and high-energy squad choreography.',
        'His infectious enthusiasm, sharp musicality, and calm, patient instruction put every groom, nervous beginner, and multi-generational family member at absolute ease.',
      ],
      focusAreas: ['Musicality & Medley Mixing', 'High-Energy Squad Formations', 'Stage Confidence', 'Award-Winning Choreography'],
      isPublished: true,
    },
    {
      name: 'Joya',
      role: 'Co-Founder & Performance Stylist',
      portraitMediaId: 'portrait-joya',
      bioParagraphs: [
        'Bringing 10+ years of artistic sensibility, Joya specializes in graceful movement styling, emotive couple chemistry, and stage posture suited for bridal lehengas and wedding couture. Her sessions are warm, patient, and empowering.',
      ],
      focusAreas: ['Bridal Grace & Mudras', 'Couple Storytelling & Chemistry', 'Patient Step Breakdown'],
      isPublished: true,
    },
  ],
  philosophyTitle: 'Artistry Rooted in Celebration',
  philosophyParagraphs: [
    'A wedding is not a dance examination — it is a joyful gathering of generations celebrating two families coming together. Our choreography process is designed to be joyful from the very first rehearsal.',
    'Whether you have never danced before or love taking center stage, we adapt the movements to your comfort level, natural body language, and wedding outfits so you can enjoy every second of your celebration.',
  ],
  approachPillars: [
    {
      title: 'Comfort Over Complexity',
      description:
        'We never impose forced routines. We design clean, graceful choreography that looks polished from the audience while feeling comfortable and intuitive for you.',
    },
    {
      title: 'Family-First Inclusivity',
      description:
        'From grandparents taking gentle steps to enthusiastic cousins pulling off high-energy medleys, we ensure every generation feels valued and included.',
    },
    {
      title: 'Complete Musical Harmony',
      description:
        'Music sets the emotion. We custom-edit song medleys, pacing transitions, and sound cues so the performance tells a cohesive, uplifting story.',
    },
    {
      title: 'Calm Stage Readiness',
      description:
        'Beyond teaching steps, we guide you on eye contact, stage positioning, smile, and outfit handling so you feel composed and celebratory on the big day.',
    },
  ],
  coverageStatement:
    'Sajid & Joya travel for destination and local weddings across India. Whether your celebration is hosted in Rajasthan palaces, Goa coastal resorts, metro ballrooms, or intimate ancestral estates, our team coordinates seamlessly with your wedding planners and production crews.',
};
