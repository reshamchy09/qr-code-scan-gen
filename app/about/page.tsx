import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About QR Free',
  description:
    'Learn about QR Free — the 100% free, privacy-first QR code generator and scanner. No signup and all processing in your browser.',
  alternates: {
    canonical: '/about',
  },
};

const steps = [
  {
    num: '01',
    title: 'Choose Your Type',
    description: 'Select from 7 QR code types: URL, Text, Email, Phone, SMS, WiFi, or WhatsApp.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Enter Your Content',
    description: 'Type in your URL, text, phone number, WiFi details, or whatever content you need.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Download or Scan',
    description: 'Download your QR code as PNG or SVG, copy to clipboard, or scan existing QR codes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
];

const values = [
  {
    title: '100% Free Forever',
    description: 'No premium plans, no hidden fees, no feature limits. QR Free will always be completely free.',
    icon: '💎',
  },
  {
    title: 'Privacy First',
    description: 'All QR code processing happens in your browser. We never see, store, or transmit your data.',
    icon: '🔒',
  },
  {
    title: 'No Account Needed',
    description: 'Just open the website and start using it. No registration, no email, no passwords.',
    icon: '⚡',
  },
  {
    title: 'Open & Transparent',
    description: 'Our tool is built with well-known open-source libraries. No black boxes, no surprises.',
    icon: '🌐',
  },
];

export default function AboutPage() {
  return (
    <section className="py-10 md:py-16" id="about-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">QR Free</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            QR Free is a 100% free, privacy-first QR code tool. Generate and scan QR codes
            instantly — no signup, no data collection. Everything runs in your browser.
          </p>
        </div>

        {/* Mission */}
        <div className="glass-card-static p-8 md:p-10 mb-16">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h2>
          <p className="text-muted leading-relaxed text-base">
            We believe QR code tools should be free, fast, and private. Many QR code websites
            require accounts, charge for basic features, or track your data. QR Free is different.
            We built this tool to give everyone access to a premium QR code experience without
            any strings attached. All processing happens right in your browser — your data never
            leaves your device.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {steps.map((step) => (
              <div key={step.num} className="glass-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center text-primary-light mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-xs font-mono text-accent mb-2">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our <span className="gradient-text-reverse">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 stagger-children">
            {values.map((value) => (
              <div key={value.title} className="glass-card p-6">
                <div className="text-2xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer */}
        <div className="glass-card-static p-8 md:p-10 mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Built by <span className="gradient-text">Resham Chaudhary</span>
          </h2>
          <p className="text-muted leading-relaxed text-base max-w-2xl mx-auto mb-6">
            QR Free is crafted and maintained by Resham Chaudhary, a solo developer
            passionate about building small, fast, and genuinely useful web tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:reshamdevstudio@gmail.com"
              className="btn-secondary text-sm"
              id="about-developer-email"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
              reshamdevstudio@gmail.com
            </a>
            <a
              href="https://resamchaudhary.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm border border-[rgba(124,58,237,0.2)]"
              id="about-developer-website"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              resamchaudhary.com.np
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card-static p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted mb-6">
            Start generating or scanning QR codes right now — it&apos;s completely free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/generator" className="btn-primary w-full sm:w-auto" id="about-cta-generate">
              Generate QR Code
            </Link>
            <Link href="/scanner" className="btn-accent w-full sm:w-auto" id="about-cta-scan">
              Scan QR Code
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
