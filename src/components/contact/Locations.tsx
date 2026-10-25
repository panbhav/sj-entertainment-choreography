'use client';

import { useState } from 'react';
import { ArrowUpRight, MapPin, Navigation, X } from 'lucide-react';
import { businessLocations } from '@/content/locations';
import './Locations.css';

export default function Locations() {
  const [openMaps, setOpenMaps] = useState<Record<string, boolean>>({});

  return (
    <section id="locations" className="sj-locations" aria-labelledby="locations-title">
      <header className="sj-locations-heading">
        <div>
          <p className="sj-locations-eyebrow">Two bases. One creative team.</p>
          <h2 id="locations-title">Rooted in Rajasthan.<br /><em>In rhythm with Mumbai.</em></h2>
        </div>
        <p>Based in Alwar and Mumbai, Sajid &amp; Joya choreograph celebrations across India. Find your nearest base below and connect with Sajid to discuss your plans.</p>
      </header>
      <div className="sj-locations-grid">
        {businessLocations.map(location => (
          <article key={location.id} id={`location-${location.id}`} className="sj-location-card" aria-labelledby={`location-${location.id}-title`}>
            <div className="sj-location-details">
              <div className="sj-location-topline"><span>{location.region}</span><MapPin size={21} aria-hidden="true" /></div>
              <h3 id={`location-${location.id}-title`}>{location.city}</h3>
              <p className="sj-location-area">{location.area}</p>
              <address>{location.address}</address>
              <div className="sj-location-actions">
                <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Get directions to ${location.city} (opens Google Maps in a new tab)`}><Navigation size={15} aria-hidden="true" />Get directions<ArrowUpRight size={15} aria-hidden="true" /></a>
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${location.city} in Google Maps (new tab)`}>Open Google Maps<ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="sj-location-map">
              {openMaps[location.id] ? (
                <>
                  <iframe id={`map-${location.id}`} src={location.embedUrl} title={`Google map: ${location.city} — ${location.area}`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  <button type="button" className="sj-map-close" aria-label={`Hide ${location.city} map`} aria-expanded="true" aria-controls={`map-${location.id}`} onClick={() => setOpenMaps(maps => ({ ...maps, [location.id]: false }))}><X size={14} aria-hidden="true" />Hide map</button>
                </>
              ) : (
                <div className="sj-map-preview" id={`map-${location.id}`}>
                  <MapPin size={30} strokeWidth={1.4} aria-hidden="true" />
                  <button type="button" aria-label={`Show ${location.city} map`} aria-expanded="false" aria-controls={`map-${location.id}`} onClick={() => setOpenMaps(maps => ({ ...maps, [location.id]: true }))}>Show map<ArrowUpRight size={15} aria-hidden="true" /></button>
                  <p>Interactive Google map · loads on request</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
