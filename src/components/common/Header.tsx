'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import Monogram from './Monogram';

const experiences = [
  {
    num: '01',
    name: 'Wedding choreography',
    desc: 'Couple dance, Sangeet & family routines',
    href: '/wedding-choreography',
  },
  {
    num: '02',
    name: 'Entries & entertainment',
    desc: 'Theatrical grand arrivals & live artists',
    href: '/couple-entries-entertainment',
  },
  {
    num: '03',
    name: 'Experiences & packages',
    desc: 'Curated combinations & tailored quotes',
    href: '/packages',
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function dismiss(event: MouseEvent) {
      if (!dropdown.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', dismiss);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('mousedown', dismiss);
      document.removeEventListener('keydown', escape);
    };
  }, []);

  function close() {
    setMobileOpen(false);
    setDropdownOpen(false);
  }

  const isExperienceActive =
    pathname.startsWith('/wedding-choreography') ||
    pathname.startsWith('/couple-entries-entertainment') ||
    pathname.startsWith('/packages');

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link
            href="/"
            className="site-brand"
            onClick={close}
            aria-label="SJ Entertainment Choreography home"
          >
            <Monogram size={46} />
            <span>
              <strong>SJ Entertainment</strong>
              <small>CHOREOGRAPHY BY SAJID & JOYA</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
              Home
            </Link>

            <div
              className="nav-dropdown"
              ref={dropdown}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setDropdownOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-controls="experience-menu"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={isExperienceActive ? { color: '#8c6232', fontWeight: 600 } : undefined}
              >
                <span>Experiences</span>
                <ChevronDown size={13} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {dropdownOpen && (
                <div id="experience-menu" className="dropdown-panel" style={{ width: '330px', padding: '16px' }}>
                  <div style={{ borderBottom: '1px solid #ebd9c5', paddingBottom: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#876945', fontWeight: 600 }}>
                      Three Separate Celebration Pages
                    </span>
                  </div>
                  {experiences.map((item) => {
                    const isCurrent = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        aria-current={isCurrent ? 'page' : undefined}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '12px',
                          padding: '10px 8px',
                          borderRadius: '4px',
                          background: isCurrent ? '#f4ece1' : 'transparent',
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '9px', color: '#9a784b', fontFamily: 'monospace', fontWeight: 600 }}>
                              {item.num}
                            </span>
                            <span style={{ fontSize: '13px', fontWeight: 500, color: '#3c1523' }}>
                              {item.name}
                            </span>
                          </div>
                          <span style={{ fontSize: '11px', color: '#766b64', display: 'block', marginTop: '2px', lineHeight: 1.4 }}>
                            {item.desc}
                          </span>
                        </div>
                        <ArrowUpRight size={15} style={{ color: '#9a784b', flexShrink: 0, marginTop: '2px' }} />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/our-work" aria-current={pathname.startsWith('/our-work') ? 'page' : undefined}>
              Our work
            </Link>

            <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
              Our story
            </Link>
          </nav>

          <Link href="/contact" className="header-cta">
            Let’s celebrate <ArrowUpRight size={15} />
          </Link>

          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">
            <Link href="/" onClick={close} aria-current={pathname === '/' ? 'page' : undefined}>
              Home <ArrowUpRight size={16} />
            </Link>

            <div style={{ padding: '14px 10px 4px', borderTop: '1px solid #ebd9c5', marginTop: '6px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#876945', fontWeight: 600 }}>
                Experiences (3 Dedicated Pages)
              </span>
            </div>

            {experiences.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={close}
                aria-current={pathname === item.href ? 'page' : undefined}
                style={{ paddingLeft: '18px' }}
              >
                <span>
                  <strong style={{ display: 'block', fontSize: '13px', color: '#3c1523' }}>{item.num}. {item.name}</strong>
                  <small style={{ fontSize: '11px', color: '#766b64' }}>{item.desc}</small>
                </span>
                <ArrowUpRight size={16} />
              </Link>
            ))}

            <div style={{ borderTop: '1px solid #ebd9c5', marginBlock: '6px' }} />

            <Link href="/our-work" onClick={close} aria-current={pathname.startsWith('/our-work') ? 'page' : undefined}>
              Our work <ArrowUpRight size={16} />
            </Link>

            <Link href="/about" onClick={close} aria-current={pathname === '/about' ? 'page' : undefined}>
              Our story <ArrowUpRight size={16} />
            </Link>

            <Link href="/contact" onClick={close} aria-current={pathname === '/contact' ? 'page' : undefined}>
              Let’s celebrate <ArrowUpRight size={16} />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
