import Link from 'next/link';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import '@/components/common/Connection.css';

const venues = [
  ['Grand Hyatt', 'Goa'],
  ['Marriott', 'Jaipur'],
  ['Nahargarh', 'Ranthambhore'],
  ['Taj Lake Palace', 'Udaipur'],
  ['Rambagh Palace', 'Jaipur'],
  ['Neemrana Fort-Palace', 'Neemrana'],
  ['Tijara Fort-Palace', 'Tijara, Alwar'],
  ['Alwar Motel', 'Alwar'],
  ['Fariyas Resort', 'Lonavala'],
  ['The Sariska Palace', 'Alwar'],
  ['The Fern', 'Alwar-Sariska'],
];

const brands = ['Tanishq', 'Tata Motors', 'Nissan Motors', 'Tirupati Jewellers', 'Jayanti', 'Mama Supari'];

export default function PartnerMarquee() {
  return (
    <section className="partner-wall" aria-labelledby="partners-title">
      <div className="site-container partner-wall-heading">
        <div>
          <p className="eyebrow"><Sparkles size={14} aria-hidden="true" /> WHERE WE’VE PERFORMED</p>
          <h2 id="partners-title">Remarkable places.<br /><em>Memorable performances.</em></h2>
        </div>
        <div className="partner-intro">
          <p>From palace celebrations to brand events, bringing the SJ energy to extraordinary settings.</p>
          <span className="partner-counts">11 venues <span aria-hidden="true">✦</span> 6 brands & businesses</span>
        </div>
      </div>

      <div className="site-container partner-row-label"><span>01 / CELEBRATION VENUES</span><span>PALACES · HOTELS · RESORTS</span></div>
      <div className="partner-viewport" aria-label="Celebration venues">
        <div className="partner-track">
          {[0, 1].map(copy => (
            <ul className="partner-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {venues.map(([name, location], index) => (
                <li className="partner-venue" key={name}>
                  <span className="partner-venue-top"><span>{String(index + 1).padStart(2, '0')}</span><Sparkles size={18} aria-hidden="true" /></span>
                  <span className="partner-name">{name}</span>
                  <span className="partner-type"><MapPin size={11} aria-hidden="true" />{location}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="site-container partner-row-label partner-brands-label"><span>02 / BRANDS & BUSINESSES</span><span>SHARED STAGES. LASTING IMPRESSIONS.</span></div>
      <div className="partner-viewport" aria-label="Brands and businesses">
        <div className="partner-track partner-track-brands">
          {[0, 1].map(copy => (
            <ul className="partner-group partner-brand-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {brands.map(name => <li key={name}><Sparkles size={15} aria-hidden="true" /><span>{name}</span></li>)}
            </ul>
          ))}
        </div>
      </div>

      <div className="site-container partner-wall-footer">
        <details className="partner-directory">
          <summary>Explore all venues & brands <span aria-hidden="true">+</span></summary>
          <div className="partner-directory-content">
            <div><h3>Celebration venues</h3><ul>{venues.map(([name, location]) => <li key={name}>{name}<span>{location}</span></li>)}</ul></div>
            <div><h3>Brands & businesses</h3><ul>{brands.map(name => <li key={name}>{name}</li>)}</ul></div>
          </div>
        </details>
        <Link href="/contact">Bring SJ to your celebration <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
