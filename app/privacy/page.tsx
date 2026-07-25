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
            <h2 className="text-xl font-bold text-foreground gradient-text">4. Cookies & Web Analytics</h2>
            <p>
              QR Free does not use tracking cookies, advertising cookies, or intrusive analytics scripts. We do not track your browsing activity across other websites or store personal cookies on your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">5. Third-Party Links</h2>
            <p>
              When scanning QR codes or clicking outbound links, you may be directed to external third-party websites. We are not responsible for the privacy practices or content of third-party platforms. We encourage users to read the privacy statements of any external site they visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any updates will be posted directly on this page with an updated modification date.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, feel free to reach out through our homepage or about section.
            </p>
            <div className="pt-2">
              <Link href="/about" className="btn-secondary text-sm">
                Learn More About Us →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
