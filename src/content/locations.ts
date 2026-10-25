/** Addresses supplied by the business owner. No opening hours or coordinates assumed. */
export const businessLocations = [
  {
    id: 'alwar', city: 'Alwar', region: 'Rajasthan',
    address: '306 Scheme 1, near Bal Bharti School, Arya Nagar, Alwar, Rajasthan 301001',
    area: 'Arya Nagar · Near Bal Bharti School',
  },
  {
    id: 'mumbai', city: 'Mumbai', region: 'Maharashtra',
    address: 'Lokhandwala Circle, Swami Samarth Nagar, Lokhandwala Complex, Andheri West, Mumbai, Maharashtra 400053',
    area: 'Lokhandwala · Andheri West',
  },
].map(location => ({
  ...location,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`,
  embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`,
}));
