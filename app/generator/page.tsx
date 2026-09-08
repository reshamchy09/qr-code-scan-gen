import type { Metadata } from 'next';
import GeneratorClient from './GeneratorClient';
import AdUnit from '../components/AdUnit';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free QR Code Generator',
  description:
    'Create QR codes for URLs, WiFi, text, email, phone numbers, SMS, and WhatsApp. Download as PNG or SVG. 100% free, no signup required.',
  alternates: {
    canonical: '/generator',
  },
  keywords: [
    'QR Code Generator',
    'Free QR Code Generator',
    'Free QR Code Maker',
    'QR Generator Online',
    'Create QR Code',
    'Create QR Code Online',
    'Generate QR Code',
    'QR Code Creator',
    'QR Code Maker',
    'QR Code Online',
    'QR Code Generator Free',
    'Custom QR Code Generator',
    'Static QR Code',
    'Best QR Code Generator',
    'Unlimited QR Codes',
    'QR Code Download PNG',
    'QR Code Download SVG',
    'High Resolution QR Code',
    'URL QR Code',
    'Website QR Code',
    'Text QR Code',
    'Email QR Code',
    'Phone QR Code',
    'SMS QR Code',
    'WiFi QR Code',
    'WiFi QR Code Generator',
    'WhatsApp QR Code',
    'Google Maps QR Code',
    'vCard QR Code',
    'Restaurant QR Code',
    'Menu QR Code',
    'Free Online QR Tool',
    'Responsive QR Generator',
    'Fast QR Code Generator',
    'Secure QR Code Generator',
    'Instant QR Generator',
  ]
};

const qrTypeExplanations = [
  {
    title: 'URL QR Code',
    description:
      'The most common type. Stores a web address like https://example.com. When scanned, it opens the page in the browser. Use it on business cards, posters, product packaging, and menus to send people straight to a landing page. Always include the https:// prefix so scanners treat it as a link.',
  },
  {
    title: 'Text QR Code',
    description:
      'Stores plain text and displays it instantly on the scanner screen, working entirely offline. Great for short notes, serial numbers, and offline instructions. Anything that is not a web address, phone number, or special format belongs in the text type.',
  },
  {
    title: 'Email QR Code',
    description:
      'Stores an email address plus an optional subject and body. Scanning it opens the device email app with a new message already addressed and pre-filled. Perfect for an "email us" action on signs, menus, and receipts.',
  },
  {
    title: 'Phone QR Code',
    description:
      'Stores a phone number and opens the dialer when scanned, with the number ready to call. Use it on brochures, real estate signs, and support cards when the goal is a direct phone call.',
  },
  {
    title: 'SMS QR Code',
    description:
      'Stores a phone number plus an optional pre-written message. Scanning it opens your messaging app with the recipient and body already filled in. Ideal for customer support, event RSVPs, and order confirmations.',
  },
  {
    title: 'WiFi QR Code',
    description:
      'Packs the network name, password, and encryption type into one code. Scanning it connects the phone to the network automatically. The most useful type for coffee shops, offices, and home guests — it removes the pain of typing long passwords.',
  },
  {
    title: 'WhatsApp QR Code',
    description:
      'Stores a phone number with a country code plus an optional greeting message. Scanning it opens WhatsApp with a chat started on that number. Ideal for storefronts, business cards, and any ad where you want to start a chat.',
  },
];

const howToSteps = [
  {
    step: '1',
    title: 'Choose the QR type',
    description:
      'Select URL, Text, Email, Phone, SMS, WiFi, or WhatsApp from the tabs above. Each type encodes content differently, so pick the one that matches what you want it to do.',
  },
  {
    step: '2',
    title: 'Enter your information',
    description:
      'Type or paste the content into the field. The preview updates live as you type. If the content is invalid, the preview stays empty as a hint to fix it.',
  },
  {
    step: '3',
    title: 'Generate',
    description:
      'The QR code renders instantly in your browser. No server is involved, so nothing you enter ever leaves your device.',
  },
  {
    step: '4',
    title: 'Download or test',
    description:
      'Download the code as PNG or SVG, or copy it to your clipboard. Always test the finished code with a real phone before printing or distributing it.',
  },
];

const staticExplanations = {
  title: 'Static QR Codes Explained',
  paragraphs: [
    'The QR codes generated on QR Free are static codes. A static QR code stores the content directly in the black-and-white pattern itself. The URL, phone number, or WiFi credentials are baked into the modules, so any device can read them for the life of the printed material with no subscription and no server required.',
    'This is what makes the generator free and private. There is no account, no expiry date, no redirect link, and no server that ever sees the content you encode. Static codes work offline and keep working for as long as the printed material survives.',
    'The only limitation of a static code is that you cannot edit the destination later. If you need to change where a code points, you simply generate a new one. For most posters, labels, business cards, and packaging, a static code is exactly what you need.',
  ],
};

const faqs = [
  {
    q: 'Is this QR code generator really free?',
    a: 'Yes. QR Free is completely free with no premium tiers, no watermark, no account, and no limit on how many codes you generate or download.',
  },
  {
    q: 'Do the QR codes ever expire?',
    a: 'No. The codes are static, meaning the content is stored directly in the pattern. They work for as long as the printed or digital material survives.',
  },
  {
    q: 'What is the difference between PNG and SVG?',
    a: 'PNG is a raster image that works everywhere, including documents, slides, and social media. SVG is a vector format that scales to any size without losing quality, making it ideal for large banners, posters, and professional print.',
  },
  {
    q: 'Is my data safe when I generate a QR code?',
    a: 'Yes. The generator runs entirely in your browser using client-side JavaScript. Your content never leaves your device or touches a server.',
  },
  {
    q: 'Can I use these QR codes commercially?',
    a: 'Yes. You can use the generated QR codes freely for personal and commercial purposes with no attribution required.',
  },
  {
    q: 'What size should I print the QR code?',
    a: 'Print the code at least 2 cm across for close viewing, and increase the size with the intended scan distance. Keep clear white space around it and use dark modules on a light background.',
  },
];

export default function GeneratorPage() {
  return (
    <>
      <GeneratorClient />
      <AdUnit slot="generator" />

      {/* Educational content */}
      <section className="py-12 md:py-16" id="generator-guide-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* How to create */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              How to <span className="gradient-text">Create a QR Code</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {howToSteps.map((item) => (
                <div key={item.step} className="glass-card p-6">
                  <div className="text-xs font-mono text-accent mb-3">Step {item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* QR Types explained */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              QR Code Types <span className="gradient-text">Explained</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {qrTypeExplanations.map((type) => (
                <div key={type.title} className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Static codes */}
          <div className="glass-card-static p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">{staticExplanations.title}</h2>
            {staticExplanations.paragraphs.map((p, i) => (
              <p key={i} className="text-muted leading-relaxed mb-4">{p}</p>
            ))}
            <Link href="/blog/static-vs-dynamic-qr-codes" className="text-primary-light underline hover:text-accent text-sm">
              Read our full static vs dynamic QR code guide →
            </Link>
          </div>

          {/* Privacy & security */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Privacy &amp; Security <span className="gradient-text">Tips</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">Local Processing</h3>
                <p className="text-sm text-muted leading-relaxed">
                  QR content you enter is processed locally in your browser and is not uploaded to any server. Your URLs, WiFi credentials, and contact details never leave your device.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">Verify Before You Scan</h3>
                <p className="text-sm text-muted leading-relaxed">
                  When scanning codes, verify the destination before opening it. Treat any QR code like a link from an unknown sender and apply the same caution.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">Test Before Printing</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Always scan a test copy with a real phone before printing a large run. Test at the intended distance and in realistic lighting on both iPhone and Android.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">Keep the Quiet Zone</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Leave at least a 4-module blank border around the code and use dark modules on a light background. This dramatically improves scan reliability.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="glass-card-static group">
                  <summary className="px-6 py-4 cursor-pointer text-foreground font-medium flex items-center justify-between list-none">
                    <span>{faq.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted transition-transform group-open:rotate-180 flex-shrink-0 ml-4">
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

          {/* Related guides */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Related <span className="gradient-text">QR Guides</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/blog/how-to-generate-a-qr-code" className="glass-card p-6 block group">
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">How to Generate a QR Code for Free</h3>
                <p className="text-sm text-muted leading-relaxed">A step-by-step walkthrough for creating your first scannable QR code.</p>
              </Link>
              <Link href="/blog/qr-code-types-explained" className="glass-card p-6 block group">
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">7 QR Code Types Explained</h3>
                <p className="text-sm text-muted leading-relaxed">What each type does, when to use it, and how to pick the right one.</p>
              </Link>
              <Link href="/blog/qr-code-design-best-practices" className="glass-card p-6 block group">
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">QR Code Design &amp; Print Best Practices</h3>
                <p className="text-sm text-muted leading-relaxed">Quiet zones, contrast, and sizing rules for reliable scans.</p>
              </Link>
              <Link href="/blog/how-to-create-a-wifi-qr-code" className="glass-card p-6 block group">
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">How to Create a WiFi QR Code</h3>
                <p className="text-sm text-muted leading-relaxed">Share your network password by scan, with the correct settings.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
