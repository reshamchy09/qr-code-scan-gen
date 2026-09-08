import Link from 'next/link';

const footerLinks = {
  product: [
    { href: '/generator', label: 'QR Generator' },
    { href: '/scanner', label: 'QR Scanner' },
    { href: '/blog', label: 'QR Guides' },
    { href: '/contact', label: 'Contact Us' },
  ],
  types: [
    { href: '/generator', label: 'URL QR Code' },
    { href: '/generator', label: 'WiFi QR Code' },
    { href: '/generator', label: 'WhatsApp QR Code' },
    { href: '/generator', label: 'Email QR Code' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[rgba(124,58,237,0.1)]">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" fill="white"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" fill="white"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" fill="white"/>
                  <rect x="14" y="14" width="3" height="3" fill="white"/>
                  <rect x="18" y="14" width="3" height="3" fill="white"/>
                  <rect x="14" y="18" width="3" height="3" fill="white"/>
                  <rect x="18" y="18" width="3" height="3" fill="white"/>
                </svg>
              </div>
              <span className="text-lg font-bold gradient-text">QR Free</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Generate and scan QR codes instantly for free. No signup, no limits, and your QR content never leaves your browser.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Types */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">QR Types</h3>
            <ul className="space-y-3">
              {footerLinks.types.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Legal & Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[rgba(124,58,237,0.08)] flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} QR Free. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted/80">
            <Link href="/privacy" className="hover:text-primary-light transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-primary-light transition-colors">Terms & Conditions</Link>
            <span>&bull;</span>
            <span>100% Free & Private</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted/80">
            <span>
              Built by{' '}
              <a
                href="https://resamchaudhary.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:text-accent transition-colors"
                id="footer-developer-site"
              >
                Resham Chaudhary
              </a>
            </span>
            <span>&bull;</span>
            <a href="mailto:reshamdevstudio@gmail.com" className="hover:text-primary-light transition-colors">
              reshamdevstudio@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
