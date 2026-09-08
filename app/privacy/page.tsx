import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for QR Free. Learn how we process data, cookies, and advertising technologies when you use our QR code generator and scanner.',
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
            <h2 className="text-xl font-bold text-foreground gradient-text">1. Introduction</h2>
            <p>
              At <strong>QR Free</strong>, accessible from https://qr-code-scan-gen.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is (or isn&apos;t) collected and recorded by QR Free and how we use it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">2. Information We Process</h2>
            <p>
              QR Free processes the following types of information when you use our service:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>QR code content (URLs, text, contact information, WiFi details, WhatsApp messages) entered into the generator or scanner.</li>
              <li>Camera feed frames (processed locally in browser memory) when using the scanner feature.</li>
              <li>Uploaded image files (processed locally via HTML5 FileReader APIs for QR decoding).</li>
              <li>Technical data such as browser type, device information, IP address, and scan timestamps for security and troubleshooting.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">3. QR Generator Data</h2>
            <p>
              When you use the QR code generator, your input is processed entirely within your browser. No QR code content is uploaded, transmitted, or stored on any server by QR Free. We do not maintain databases, backend servers, or user accounts for generated QR codes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">4. QR Scanner Data</h2>
            <p>
              When you use the QR code scanner, the camera feed or uploaded image is processed locally in your browser to decode QR code patterns. The video stream is never recorded, saved, or transmitted outside your local device. Uploaded image files are read locally and decoded using client-side scripts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">5. Camera Permission</h2>
            <p>
              When using the QR Scanner feature, we request camera permission only when the user clicks &quot;Start Camera.&quot; The camera stream is processed frame-by-frame directly in browser memory to identify QR code patterns. The video stream is never recorded, saved, or transmitted outside your local device. If permission is denied, the scanner falls back to image upload mode.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">6. Uploaded Images</h2>
            <p>
              Uploaded image files are read locally via HTML5 FileReader APIs and processed using client-side image decoding scripts. No uploaded file leaves your computer or phone. Files are processed entirely in browser memory and are not uploaded to any server.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">7. Cookies and Similar Technologies</h2>
            <p>
              QR Free itself does not set tracking cookies, advertising cookies, or intrusive analytics scripts. However, we participate in the Google AdSense advertising program to keep the service completely free. When you visit pages on QR Free, Google and its advertising partners may use cookies to serve and personalize ads based on your previous visits to our website and other websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">8. Advertising</h2>
            <p>
              Google AdSense may use cookies and identifiers to serve ads on QR Free. These advertising technologies may collect data about your visits to our website and other sites. This data may be used to create a profile of your interests and show you relevant ads. You can opt out of personalized advertising by visiting the Google Ads Settings page. We do not claim &quot;no tracking&quot; for advertising technologies — the QR code generation and scanning themselves are client-side and private, but the website uses Google AdSense cookies for advertising purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">9. Google AdSense</h2>
            <p>
              QR Free participates in the Google AdSense advertising program to keep the service completely free. Google AdSense and its partners may use advertising cookies and similar technologies to serve ads based on your visits to our website and other sites. For more information about Google&apos;s advertising practices, you can consult the Google Privacy Policy and Google Ads Settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">10. Third-Party Services</h2>
            <p>
              QR Free uses the following third-party services that may process data:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Google AdSense — for advertising. See Google&apos;s policies for data usage.</li>
              <li>Google Analytics — if enabled, for website usage analytics. IP addresses and user agents may be transmitted to Google.</li>
              <li>jsQR and qrcode libraries — client-side QR code processing libraries that run entirely in your browser.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">11. Contact Form Data</h2>
            <p>
              The contact form at /contact collects: name (optional), email (required), subject (optional), and message (required). Submitted data is used solely to respond to your message. The form sends data via mailto protocol to reshamdevstudio@gmail.com. We do not store contact form submissions in a database.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">12. Data Retention</h2>
            <p>
              QR Free does not retain generated QR code content, scanned data, uploaded images, or contact form submissions in databases or backend servers. All QR code generation and scanning processing occurs locally in the browser. Contact form data is used only for responding to messages and is not retained beyond the email conversation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">13. Data Security</h2>
            <p>
              QR Free employs reasonable security measures to protect the integrity of the service. However, as a 100% client-side application with no backend storage, there are no user databases or servers to breach. Security relies on browser security and user device protection.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">14. Children&apos;s Privacy</h2>
            <p>
              QR Free does not knowingly collect personal information from children under 13. If you are a parent or guardian and you are concerned about your child&apos;s use of our services, you can contact us through the contact page to request deletion of any data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">15. External Links</h2>
            <p>
              When scanning QR codes or clicking outbound links, you may be directed to external third-party websites. We are not responsible for the privacy practices or content of third-party platforms. We encourage users to read the privacy statements of any external site they visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">16. User Rights</h2>
            <p>
              Users may request: access to their data, correction of inaccurate information, and deletion of data held. For contact form data, users may email reshamdevstudio@gmail.com to request deletion. For QR code content and scanner data, note that no data is retained, so deletion requests are generally not applicable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">17. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any updates will be posted directly on this page with an updated modification date. We encourage users to review this page periodically.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy or how we use cookies, please contact us through our contact page.
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