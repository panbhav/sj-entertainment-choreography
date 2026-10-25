import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import '@/components/common/Connection.css';

const partners = [
  ['PALACE HOUSE', 'HERITAGE PROPERTY'], ['STUDIO / ONE', 'LIFESTYLE BRAND'],
  ['THE GRAND', 'CELEBRATION VENUE'], ['MUSE COLLECTIVE', 'CREATIVE BRAND'],
  ['COAST & CO.', 'RESORT PROPERTY'], ['AURA EVENTS', 'EVENT PARTNER'],
];

export default function PartnerMarquee() {
  return <section className="partner-wall" aria-labelledby="partners-title">
    <div className="site-container partner-wall-heading"><div><p className="eyebrow">BRANDS & PROPERTIES / PREVIEW</p><h2 id="partners-title">Great spaces.<br /><em>Unforgettable stages.</em></h2></div><div><p>A space for the brands, properties, and creative teams we work with.</p><p className="partner-placeholder-note">All names below are fictional placeholders, not confirmed clients.</p></div></div>
    <div className="partner-viewport"><div className="partner-track">{[0, 1].map(copy => <ul className="partner-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{partners.map(([name, type]) => <li key={name}><Sparkles size={18} aria-hidden="true" /><span className="partner-name">{name}</span><span className="partner-type">{type} · DEMO</span></li>)}</ul>)}</div></div>
    <div className="site-container partner-wall-footer"><span>YOUR SPACE. OUR MOVEMENT. A SHARED STORY.</span><Link href="/contact">Create something together <ArrowUpRight size={16} /></Link></div>
  </section>;
}
