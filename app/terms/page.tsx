import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Terms and Conditions for using QR Free. Free online QR code generator and scanner with no registration required.',
};

export default function TermsPage() {
  return (
    <section className="py-10 md:py-16" id="terms-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-muted text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="glass-card-static p-8 md:p-12 space-y-8 text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong>QR Free</strong> (&quot;the Service&quot;), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">2. Description of Service</h2>
            <p>
              QR Free provides a free, browser-based QR Code Generator and QR Code Scanner tool. The service allows users to generate QR codes for URLs, plain text, email addresses, phone numbers, SMS messages, WiFi networks, and WhatsApp messages, as well as scan QR codes using a device camera or image uploads.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">3. Free Use & No Registration</h2>
            <p>
              The Service is provided 100% free of charge for both personal and commercial use. No account creation, subscription, or payment is required to access any features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">4. Acceptable Use Policy</h2>
            <p>
              You agree not to use QR Free to generate QR codes containing or linking to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Malicious software, phishing pages, or malware distribution URLs.</li>
              <li>Illegal, fraudulent, harassing, or defamatory content.</li>
              <li>Content that infringes upon third-party intellectual property or privacy rights.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">5. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without any warranty of any kind, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or that generated QR codes will be readable by every scanning device or software.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">6. Limitation of Liability</h2>
            <p>
              In no event shall QR Free or its creators be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use or inability to use the Service or any QR codes generated through the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time without prior notice. Continued use of the Service after any modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">Have questions about these terms?</p>
            <Link href="/privacy" className="btn-secondary text-xs">
              View Privacy Policy →
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
