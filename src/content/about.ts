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

export const ownersData: {
  jointIntro: string;
  jointMediaId: string;
  experienceYears: string;
  celebrationsCount: string;
  stats: ExperienceStat[];
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
      value: 'Pan-India',
      label: 'Destination Service',
      description: 'On-site rehearsals in Rajasthan, Goa, Kerala, and luxury resorts nationwide.',
    },
    {
      value: '100%',
      label: 'Beginner Friendly',
      description: 'Routines adapted with patience so every non-dancer shines with confidence.',
    },
  ],
  owners: [
    {
      name: 'Sajid',
      role: 'Co-Founder & Lead Choreographer',
      portraitMediaId: 'portrait-sajid',
      bioParagraphs: [
        'With more than a decade of stage mastery, Sajid leads musical arrangements, dynamic staging, and high-energy squad choreography. His infectious enthusiasm and calm, patient instruction put every groom and family member at absolute ease.',
      ],
      focusAreas: ['Musicality & Medley Mixing', 'High-Energy Squad Formations', 'Stage Confidence'],
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
