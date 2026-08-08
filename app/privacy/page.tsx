import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for QR Free. 100% client-side QR code generator and scanner. We do not collect, store, or track any personal data.',
};

export default function PrivacyPage() {
  return (
    <section className="py-10 md:py-16" id="privacy-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-muted text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="glass-card-static p-8 md:p-12 space-y-8 text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">1. Overview</h2>
            <p>
              At <strong>QR Free</strong>, accessible from our website, one of our main priorities is the privacy of our visitors.
              This Privacy Policy document contains types of information that is (or isn&apos;t) collected and recorded by QR Free and how we use it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">2. Zero Data Collection & 100% Client-Side Processing</h2>
            <p>
              QR Free operates strictly as a <strong>frontend-only application</strong>. When you generate a QR code or scan a QR code using your camera or file upload:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>All computations occur entirely within your web browser using client-side JavaScript.</li>
              <li>No input text, URLs, email addresses, phone numbers, WiFi credentials, or scanned image files are ever uploaded, transmitted, or stored on any server.</li>
              <li>We do not maintain any databases, backend servers, or user accounts.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">3. Camera Access & File Uploads</h2>
            <p>
              When using the QR Scanner feature:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong>Camera Stream:</strong> Your camera feed is processed frame-by-frame directly in browser memory to identify QR code patterns. The video stream is never recorded, saved, or transmitted outside your local device.</li>
              <li><strong>Image Uploads:</strong> Uploaded image files are read locally via HTML5 FileReader APIs and processed using client-side image decoding scripts. No uploaded file leaves your computer or phone.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">4. Cookies & Advertisements</h2>
            <p>
              QR Free itself does not set tracking cookies, advertising cookies, or intrusive analytics
              scripts, and we never sell your personal information. However, we participate in the
              <strong> Google AdSense</strong> advertising program to keep the service completely free.
              When you visit pages on QR Free, Google and its advertising partners may use cookies to
              serve and personalize ads based on your previous visits to our website and other websites.
            </p>
            <p>Specifically, Google AdSense may use:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>DART cookies:</strong> Serving ads to users based on their visits to qrfree.app
                and other sites on the internet.
              </li>
              <li>
                <strong>Ad personalization cookies:</strong> Used by Google and third-party vendors to
                show relevant ads. You can opt out of personalized advertising by visiting the
                Google Ads Settings page.
              </li>
              <li>
                <strong>Third-party vendor cookies:</strong> Google and other third-party vendors may
                use other advertising cookies as described in the{' '}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light underline hover:text-accent"
                >
                  Google Advertising Policies
                </a>
                .
              </li>
            </ul>
            <p>
              You may consult the{' '}
              <a
                href="http://www.aboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light underline hover:text-accent"
              >
                About Cookies
              </a>{' '}
              website for guidance on how to manage and delete cookies in common browsers. Most
              browsers also allow you to disable third-party cookies entirely through their
              settings.
            </p>
            <p>
              We also recommend reviewing Google&apos;s{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light underline hover:text-accent"
              >
                Google Privacy Policy
              </a>{' '}
              to understand how Google uses data when you use our website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">5. Consent & Opt-Out</h2>
            <p>
              By using our website, you consent to our privacy policy and to Google AdSense
              cookies as described above. If you do not wish to receive personalized ads, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Opt out of personalized advertising via{' '}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light underline hover:text-accent"
                >
                  Google Ads Settings
                </a>.
              </li>
              <li>Manage or disable cookies in your browser preferences.</li>
              <li>Decline cookie consent using the banner shown on our website.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">6. Third-Party Links</h2>
            <p>
              When scanning QR codes or clicking outbound links, you may be directed to external
              third-party websites. We are not responsible for the privacy practices or content of
              third-party platforms. We encourage users to read the privacy statements of any external
              site they visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any updates will be posted directly on this page with an updated modification date.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy or how we use
              cookies, please contact us through our{' '}
              <Link href="/contact" className="text-primary-light underline hover:text-accent">
                contact page
              </Link>
              .
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-secondary text-sm">
                Contact Us →
              </Link>
              <Link href="/about" className="btn-primary text-sm">
                Learn More About Us →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
