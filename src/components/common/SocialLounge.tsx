import { ArrowUpRight } from 'lucide-react';
import { getConfiguredSocials, getSocialPreviewNote } from '@/content/siteConfig';
import SocialIcon from './SocialIcons';
import './Connection.css';

const copy: Record<string, [string, string]> = {
  youtube: ['Watch the stories.', 'Longer films. Bigger feelings. A front-row seat to the celebration.'],
  instagram: ['Catch the moments.', 'The steps, the rehearsals, and everything between the spotlight.'],
  spotify: ['Find your soundtrack.', 'First-dance dreams and dance-floor favourites. Start with a song.'],
};

export default function SocialLounge() {
  return <section className="social-lounge site-container" aria-labelledby="social-title">
    <div className="connection-heading"><p className="eyebrow">OFF THE STAGE, STILL IN RHYTHM</p><h2 id="social-title">Watch. Follow. <em>Feel it.</em></h2><p>Follow our celebrations, explore our films and find your soundtrack. {getSocialPreviewNote()}</p></div>
    <div className="social-lounge-grid">{getConfiguredSocials().filter(s => copy[s.platform]).map(social => <a className={`social-destination social-${social.platform}`} href={social.url} key={social.platform} target="_blank" rel="noopener noreferrer" aria-label={`${social.label}${social.isPlaceholder ? ' — placeholder platform link' : ''} (opens in a new tab)`}>
      <div className="social-destination-top"><SocialIcon platform={social.platform} className="w-6 h-6" /><span>{social.isPlaceholder ? 'PREVIEW LINK' : social.label}<ArrowUpRight size={16} /></span></div>
      <p className="social-platform">{social.platform === 'spotify' ? 'Spotify' : social.label}</p><h3>{copy[social.platform][0]}</h3><p>{copy[social.platform][1]}</p>
      <span className="social-destination-link">{social.isPlaceholder ? 'Explore the platform' : 'Visit our profile'} <ArrowUpRight size={16} /></span>
    </a>)}</div>
  </section>;
}
