import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact the QR Free team. Ask questions, report issues, or give feedback about our free QR code generator and scanner.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact QR Free',
    description:
      'Need help with QR codes or have feedback? Get in touch with the QR Free team.',
    type: 'website',
    url: 'https://qrfree.app/contact',
  },
};

const contactMethods = [
  {
    title: 'Email Us',
    description:
      'Send us a message and we will get back to you as soon as possible, usually within 1-2 business days.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    title: 'Feature Requests',
    description:
      'Want a new QR code type or a new feature? Let us know and we will consider it for future releases.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    title: 'Report an Issue',
    description:
      'If a generated QR code does not scan or the scanner is acting up, report the problem and we will fix it quickly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
];

const developer = {
  name: 'Resham Chaudhary',
  email: 'reshamdevstudio@gmail.com',
  website: 'https://resamchaudhary.com.np',
};

export default function ContactPage() {
  return (
    <section className="py-10 md:py-16" id="contact-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Questions, feedback, or partnership inquiries? We would love to hear from
            you. Fill out the form below and we will get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <div key={method.title} className="glass-card p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center text-primary-light mx-auto mb-4">
                {method.icon}
              </div>
              <h2 className="text-lg font-semibold mb-2">{method.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="glass-card-static p-6 md:p-8 text-center">
            <h2 className="text-lg font-semibold mb-2">About the Developer</h2>
            <p className="text-muted text-sm leading-relaxed max-w-xl mx-auto mb-6">
              QR Free is designed and maintained by a solo developer. Have a question
              directly, or want to discuss a project? Reach out through any channel below.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-light">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span className="font-medium text-foreground">{developer.name}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 5L2 7"/>
                </svg>
                <a
                  href={`mailto:${developer.email}`}
                  className="text-primary-light hover:text-accent transition-colors break-all"
                  id="developer-email"
                >
                  {developer.email}
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <a
                  href={developer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-accent transition-colors"
                  id="developer-website"
                >
                  {developer.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <AdUnit slot="contact" />
        </div>
      </div>
    </section>
  );
}