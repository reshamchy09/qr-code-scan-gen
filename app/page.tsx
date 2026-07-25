import Link from 'next/link';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Instant Generation',
    description: 'Create QR codes in real-time as you type. No waiting, no processing delays.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: '100% Private',
    description: 'All processing happens in your browser. No data is ever sent to any server.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: '7 QR Types',
    description: 'URL, Text, Email, Phone, SMS, WiFi, and WhatsApp — all formats supported.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    title: 'PNG & SVG Export',
    description: 'Download your QR codes in PNG or SVG format. Copy to clipboard instantly.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
    title: 'Camera Scanning',
    description: 'Scan QR codes using your webcam or upload an image to decode instantly.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Mobile Friendly',
    description: 'Fully responsive design. Works perfectly on phones, tablets, and desktops.',
  },
];

const faqs = [
  {
    q: 'Is QR Free really 100% free?',
    a: 'Yes! QR Free is completely free to use with no hidden charges, no premium tiers, and no limits on how many QR codes you can generate or scan.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No account or signup is required. Just open the website and start generating or scanning QR codes immediately.',
  },
  {
    q: 'Is my data safe?',
    a: 'Absolutely. All QR code generation and scanning happens entirely in your browser. No data is ever sent to or stored on any server.',
  },
  {
    q: 'What types of QR codes can I create?',
    a: 'You can create QR codes for URLs, plain text, email addresses, phone numbers, SMS messages, WiFi networks, and WhatsApp messages.',
  },
  {
    q: 'Can I download QR codes?',
    a: 'Yes! You can download your QR codes as PNG or SVG files, or copy them directly to your clipboard.',
  },
  {
    q: 'How does the QR scanner work?',
    a: 'You can scan QR codes using your device\'s camera in real-time, or upload an image containing a QR code. The scanner will decode the content instantly.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ────── HERO SECTION ────── */}
      <section className="relative py-20 md:py-32 overflow-hidden" id="hero-section">
        {/* Decorative blurs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary-light mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              100% Free &bull; No Signup Required
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-slide-up">
              Generate & Scan{' '}
              <span className="gradient-text">QR Codes</span>{' '}
              Instantly
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Create QR codes for URLs, WiFi, email, phone numbers, WhatsApp and more. Scan QR codes with your camera. All free, all private.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/generator" className="btn-primary text-base !px-8 !py-3.5 w-full sm:w-auto" id="hero-cta-generate">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                </svg>
                Generate QR Code
              </Link>
              <Link href="/scanner" className="btn-secondary text-base !px-8 !py-3.5 w-full sm:w-auto" id="hero-cta-scan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                Scan QR Code
              </Link>
            </div>
          </div>

          {/* Floating QR illustration */}
          <div className="mt-16 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="relative bg-white p-6 rounded-2xl shadow-2xl">
                <svg width="120" height="120" viewBox="0 0 120 120" className="text-gray-900">
                  {/* Simplified QR pattern */}
                  <rect x="10" y="10" width="30" height="30" rx="3" fill="currentColor"/>
                  <rect x="80" y="10" width="30" height="30" rx="3" fill="currentColor"/>
                  <rect x="10" y="80" width="30" height="30" rx="3" fill="currentColor"/>
                  <rect x="15" y="15" width="20" height="20" rx="2" fill="white"/>
                  <rect x="85" y="15" width="20" height="20" rx="2" fill="white"/>
                  <rect x="15" y="85" width="20" height="20" rx="2" fill="white"/>
                  <rect x="20" y="20" width="10" height="10" rx="1" fill="currentColor"/>
                  <rect x="90" y="20" width="10" height="10" rx="1" fill="currentColor"/>
                  <rect x="20" y="90" width="10" height="10" rx="1" fill="currentColor"/>
                  {/* Data modules */}
                  <rect x="50" y="10" width="8" height="8" fill="currentColor"/>
                  <rect x="62" y="10" width="8" height="8" fill="currentColor"/>
                  <rect x="50" y="22" width="8" height="8" fill="currentColor"/>
                  <rect x="10" y="50" width="8" height="8" fill="currentColor"/>
                  <rect x="22" y="50" width="8" height="8" fill="currentColor"/>
                  <rect x="50" y="50" width="8" height="8" fill="currentColor"/>
                  <rect x="62" y="50" width="8" height="8" fill="currentColor"/>
                  <rect x="50" y="62" width="8" height="8" fill="currentColor"/>
                  <rect x="80" y="50" width="8" height="8" fill="currentColor"/>
                  <rect x="80" y="80" width="10" height="10" fill="currentColor"/>
                  <rect x="95" y="80" width="10" height="10" fill="currentColor"/>
                  <rect x="80" y="95" width="10" height="10" fill="currentColor"/>
                  <rect x="100" y="95" width="10" height="10" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── GENERATOR PREVIEW ────── */}
      <section className="py-20 relative" id="generator-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create <span className="gradient-text">QR Codes</span> in Seconds
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Choose from 7 different QR code types. Enter your content and get a high-quality QR code instantly.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Input preview */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['URL', 'Text', 'Email', 'Phone', 'SMS', 'WiFi', 'WhatsApp'].map((type, i) => (
                    <span
                      key={type}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                        i === 0
                          ? 'bg-gradient-to-r from-primary/30 to-accent/15 text-white border border-primary/30'
                          : 'bg-surface-1 text-muted border border-border'
                      }`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="input-field cursor-default text-muted/80">
                    https://example.com
                  </div>
                  <p className="text-sm text-muted">
                    Enter any URL, text, or information and watch your QR code generate in real-time.
                  </p>
                </div>
                <Link href="/generator" className="btn-primary mt-6 inline-flex" id="preview-generate-cta">
                  Open Generator →
                </Link>
              </div>

              {/* Right: QR preview */}
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-xl shadow-lg animate-pulse-glow">
                  <svg width="160" height="160" viewBox="0 0 160 160" className="text-gray-900">
                    <rect x="12" y="12" width="40" height="40" rx="4" fill="currentColor"/>
                    <rect x="108" y="12" width="40" height="40" rx="4" fill="currentColor"/>
                    <rect x="12" y="108" width="40" height="40" rx="4" fill="currentColor"/>
                    <rect x="18" y="18" width="28" height="28" rx="2" fill="white"/>
                    <rect x="114" y="18" width="28" height="28" rx="2" fill="white"/>
                    <rect x="18" y="114" width="28" height="28" rx="2" fill="white"/>
                    <rect x="24" y="24" width="16" height="16" rx="2" fill="currentColor"/>
                    <rect x="120" y="24" width="16" height="16" rx="2" fill="currentColor"/>
                    <rect x="24" y="120" width="16" height="16" rx="2" fill="currentColor"/>
                    <rect x="64" y="12" width="10" height="10" fill="currentColor"/>
                    <rect x="78" y="12" width="10" height="10" fill="currentColor"/>
                    <rect x="92" y="12" width="10" height="10" fill="currentColor"/>
                    <rect x="64" y="26" width="10" height="10" fill="currentColor"/>
                    <rect x="78" y="26" width="10" height="10" fill="currentColor"/>
                    <rect x="64" y="40" width="10" height="10" fill="currentColor"/>
                    <rect x="12" y="64" width="10" height="10" fill="currentColor"/>
                    <rect x="26" y="64" width="10" height="10" fill="currentColor"/>
                    <rect x="40" y="64" width="10" height="10" fill="currentColor"/>
                    <rect x="64" y="64" width="10" height="10" fill="currentColor"/>
                    <rect x="78" y="78" width="10" height="10" fill="currentColor"/>
                    <rect x="92" y="64" width="10" height="10" fill="currentColor"/>
                    <rect x="108" y="64" width="10" height="10" fill="currentColor"/>
                    <rect x="64" y="92" width="10" height="10" fill="currentColor"/>
                    <rect x="78" y="92" width="10" height="10" fill="currentColor"/>
                    <rect x="108" y="108" width="14" height="14" fill="currentColor"/>
                    <rect x="130" y="108" width="14" height="14" fill="currentColor"/>
                    <rect x="108" y="130" width="14" height="14" fill="currentColor"/>
                    <rect x="136" y="130" width="14" height="14" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── SCANNER PREVIEW ────── */}
      <section className="py-20 relative" id="scanner-preview-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Scan <span className="gradient-text-reverse">QR Codes</span> Effortlessly
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Use your camera to scan QR codes in real-time, or upload an image. Results are instant.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Scanner preview */}
              <div className="order-2 md:order-1 flex justify-center">
                <div className="relative w-48 h-48 rounded-xl border-2 border-primary/30 bg-[rgba(10,10,30,0.8)] overflow-hidden">
                  {/* Scan line */}
                  <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent animate-scan-line z-10" />
                  {/* Corner markers */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-md" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-md" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-md" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-md" />
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted/30">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right: Description */}
              <div className="order-1 md:order-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                        <circle cx="12" cy="13" r="4"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Webcam Scanning</h3>
                      <p className="text-sm text-muted">Point your camera at any QR code for instant decoding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-light">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Image Upload</h3>
                      <p className="text-sm text-muted">Upload a screenshot or photo containing a QR code</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-success">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Instant Results</h3>
                      <p className="text-sm text-muted">Copy results or open detected URLs with one click</p>
                    </div>
                  </div>
                </div>
                <Link href="/scanner" className="btn-accent mt-6 inline-flex" id="preview-scan-cta">
                  Open Scanner →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── FEATURES GRID ────── */}
      <section className="py-20 relative" id="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">QR Free</span>?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Built for speed, privacy, and simplicity. Everything you need in a QR code tool.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center text-primary-light mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── FAQ SECTION ────── */}
      <section className="py-20 relative" id="faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="glass-card-static group" id={`faq-item-${index}`}>
                <summary className="px-6 py-4 cursor-pointer text-foreground font-medium flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-muted transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-muted leading-relaxed border-t border-border/50 pt-3 mt-1">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ────── CTA BANNER ────── */}
      <section className="py-20 relative" id="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-14 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your <span className="gradient-text">QR Code</span>?
              </h2>
              <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
                Start generating or scanning QR codes in seconds. No signup needed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/generator" className="btn-primary text-base !px-8 !py-3 w-full sm:w-auto" id="cta-generate">
                  Generate QR Code
                </Link>
                <Link href="/scanner" className="btn-accent text-base !px-8 !py-3 w-full sm:w-auto" id="cta-scan">
                  Scan QR Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
