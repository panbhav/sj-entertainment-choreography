'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import Monogram from './Monogram';
const experiences = [
  ['Wedding choreography', '/wedding-choreography'],
  ['Entries & entertainment', '/couple-entries-entertainment'],
  ['Experiences & packages', '/packages'],
];
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function dismiss(event: MouseEvent) { if (!dropdown.current?.contains(event.target as Node)) setDropdownOpen(false); }
    function escape(event: KeyboardEvent) { if (event.key === 'Escape') { setMobileOpen(false); setDropdownOpen(false); } }
    document.addEventListener('mousedown', dismiss);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('mousedown', dismiss); document.removeEventListener('keydown', escape); };
  }, []);
  function close() { setMobileOpen(false); setDropdownOpen(false); }
  return <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <header className="site-header"><div className="site-container header-inner">
      <Link href="/" className="site-brand" onClick={close} aria-label="SJ Entertainment Choreography home"><Monogram size={46} /><span><strong>SJ Entertainment</strong><small>CHOREOGRAPHY BY SAJID & JOYA</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</Link><div className="nav-dropdown" ref={dropdown} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setDropdownOpen(false); }}><button type="button" aria-expanded={dropdownOpen} aria-controls="experience-menu" onClick={() => setDropdownOpen(!dropdownOpen)}>Experiences <ChevronDown size={13} /></button>{dropdownOpen && <div id="experience-menu" className="dropdown-panel">{experiences.map(([name, href]) => <Link key={href} href={href} onClick={close} aria-current={pathname === href ? 'page' : undefined}>{name}<ArrowUpRight size={14} /></Link>)}</div>}</div><Link href="/our-work" aria-current={pathname.startsWith('/our-work') ? 'page' : undefined}>Our work</Link><Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>Our story</Link></nav>
      <Link href="/contact" className="header-cta">Let’s celebrate <ArrowUpRight size={15} /></Link><button className="mobile-toggle" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
    </div>{mobileOpen && <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">{[['Home', '/'], ...experiences, ['Our work', '/our-work'], ['Our story', '/about'], ['Let’s celebrate', '/contact']].map(([name, href]) => <Link href={href} key={href} onClick={close} aria-current={pathname === href ? 'page' : undefined}>{name}<ArrowUpRight size={16} /></Link>)}</nav>}</header>
  </>;
}
