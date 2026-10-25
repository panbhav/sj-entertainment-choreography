import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work | Wedding Dance & Entry Films',
  description: 'Watch real couple dances, Sangeet performances, family celebrations, wedding entries and rehearsal highlights by Sajid & Joya.',
  alternates: { canonical: '/our-work' },
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
