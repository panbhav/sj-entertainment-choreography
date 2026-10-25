import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';
import TeamInterestForm from '@/components/enquiry/TeamInterestForm';
import SocialLounge from '@/components/common/SocialLounge';
import '@/components/enquiry/Hire.css';

export const metadata: Metadata = {
  title: 'Join Our Team',
  description: 'Introduce yourself to the SJ crew. Share your choreography, dance, production or creative skills, experience, availability and portfolio with Sajid.',
  alternates: { canonical: '/join-our-team' },
};

export default function JoinOurTeamPage() {
  return <div className="interior-page hire-page"><div className="site-container hire-layout">
    <section className="hire-intro" aria-labelledby="team-title">
      <span className="hire-pill"><Sparkles size={13} /> THE PEOPLE BEHIND THE MOMENTS</span>
      <h1 id="team-title">Join the<br /><em>SJ crew.</em></h1>
      <p>Bring your talent. Create unforgettable celebrations with us. We’d love to meet dancers, choreographers, and creatives who care about the people behind every performance.</p>
      <a className="hire-jump" href="#team-interest">Express your interest <ArrowUpRight size={16} /></a>
      <div className="hire-process">{[
        ['01', 'Show your spark.', 'Tell us about your skills, styles and experience.'],
        ['02', 'Share your work.', 'Add a portfolio or showreel link if you have one.'],
        ['03', 'Start a conversation.', 'Discuss a suitable opportunity with the SJ team.'],
      ].map(([num, title, text]) => <div key={num}><span>{num} /</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      <div className="hire-direct">
        <h2>A personal introduction, to Sajid.</h2><p>Ask about working with the team.</p>
        <a href={`tel:${siteConfig.contact.phone}`}><Phone size={17} /> +91 82332 77258 <ArrowUpRight size={15} /></a>
        <a href={`mailto:${siteConfig.contact.email}?subject=SJ%20team%20opportunities`}><Mail size={17} /><span>{siteConfig.contact.email}</span></a>
        <p className="flex items-center gap-2 mt-4"><MapPin size={14} /> Tell us your base city and openness to travel.</p>
        <Link href="/contact">Planning a celebration? Enquire here <ArrowUpRight size={15} /></Link>
      </div>
    </section>
    <TeamInterestForm />
  </div><SocialLounge /></div>;
}
