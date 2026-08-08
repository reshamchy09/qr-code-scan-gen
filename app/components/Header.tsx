'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/generator', label: 'Generator' },
  { href: '/scanner', label: 'Scanner' },
  { href: '/blog', label: 'Guides' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,26,0.85)] backdrop-blur-xl border-b border-[rgba(124,58,237,0.1)] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" id="header-logo">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-shadow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" fill="white"/>
                <rect x="14" y="3" width="7" height="7" rx="1" fill="white"/>
                <rect x="3" y="14" width="7" height="7" rx="1" fill="white"/>
                <rect x="14" y="14" width="3" height="3" fill="white"/>
                <rect x="18" y="14" width="3" height="3" fill="white"/>
                <rect x="14" y="18" width="3" height="3" fill="white"/>
                <rect x="18" y="18" width="3" height="3" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-bold gradient-text">QR Free</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-[rgba(124,58,237,0.2)] to-[rgba(6,182,212,0.1)] border border-[rgba(124,58,237,0.3)]'
                      : 'text-muted hover:text-foreground hover:bg-[rgba(124,58,237,0.08)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/generator" className="btn-primary text-sm !py-2 !px-4">
              Create QR Code
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-[rgba(124,58,237,0.1)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/50 z-40 animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[rgba(10,10,26,0.95)] backdrop-blur-xl border-b border-[rgba(124,58,237,0.15)] z-50 animate-slide-down">
            <nav className="flex flex-col p-4 gap-1" id="mobile-nav">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-[rgba(124,58,237,0.2)] to-[rgba(6,182,212,0.1)] border border-[rgba(124,58,237,0.3)]'
                        : 'text-muted hover:text-foreground hover:bg-[rgba(124,58,237,0.08)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[rgba(124,58,237,0.1)]">
                <Link href="/generator" className="btn-primary w-full text-sm !py-2.5">
                  Create QR Code
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
