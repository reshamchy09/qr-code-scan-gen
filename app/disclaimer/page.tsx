import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Disclaimer for QR Free. Learn about the limitations and responsible use of our QR code generator and scanner tools.',
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <section className="py-10 md:py-16" id="disclaimer-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Disclaimer
          </h1>
          <p className="text-muted text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="glass-card-static p-8 md:p-12 space-y-8 text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">1. General Information</h2>
            <p>
              QR Free provides free QR code generation and scanning tools for convenience. The tools are provided &quot;as is&quot; without any warranties, either express or implied. Users should verify important QR destinations before opening or acting upon them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">2. QR Code Accuracy</h2>
            <p>
              While QR Free strives to generate high-quality QR codes, we do not guarantee that all generated codes will be readable by every scanning device or software. QR code readability can be affected by printing quality, size, contrast, damage, and environmental conditions. Always test your QR code with multiple devices before widespread distribution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">3. Scanner Results</h2>
            <p>
              QR Free&apos;s scanner decodes QR codes using client-side JavaScript. Detected URLs, phone numbers, and text are displayed for user review. QR Free does not automatically open detected URLs and users should verify the destination before clicking. For potentially suspicious URLs, users should exercise caution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">4. External Links</h2>
            <p>
              QR Free may contain links to third-party websites. These links are provided for convenience only. QR Free does not endorse, sponsor, or assume responsibility for the content, accuracy, privacy policies, or practices of any third-party websites. Users access third-party websites at their own risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">5. Security Responsibility</h2>
            <p>
              Users are responsible for the security of their devices and data when using QR code tools. QR code content (URLs, text, contact information) that users encode into QR codes is their sole responsibility. QR Free is not responsible for any security risks, data loss, or unauthorized access resulting from QR codes generated or scanned using our tools.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">6. Third-Party Websites</h2>
            <p>
              QR Free is an independent website and is not affiliated with, endorsed by, or connected to any third-party website, service, or organization mentioned or linked to from the website. Any reference to third-party products or services does not imply endorsement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">7. Service Availability</h2>
            <p>
              QR Free aims to provide reliable service, but does not guarantee uninterrupted, error-free, or secure operation. The service may be temporarily unavailable due to maintenance, technical issues, or other reasons. QR Free reserves the right to modify or discontinue the service at any time without notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">8. No Warranty</h2>
            <p>
              The QR code generator and scanner tools are provided without any warranty of any kind, including but not limited to: warranties of merchantability, fitness for a particular purpose, non-infringement, or accuracy. QR Free does not warrant that the service will be uninterrupted, error-free, or that defects will be corrected. Generated QR codes and scanned results are provided &quot;as is&quot;.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">9. User Responsibility</h2>
            <p>
              Users are solely responsible for the content they encode into QR codes and the actions they take based on scanned QR code content. Users should: verify QR code destinations before opening, apply common sense when scanning codes from unknown sources, and comply with all applicable laws and regulations when using QR codes. QR Free is not responsible for misuse of generated QR codes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">10. Copyright</h2>
            <p>
              The QR Free website, tools, and content are copyrighted by Resham Chaudhary. All rights reserved. Users may use the QR code generator and scanner tools for personal and commercial use without fee, subject to the Terms and Conditions. QR codes generated using the tool may be used freely, but the QR Free brand and logo may not be used without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">11. Changes</h2>
            <p>
              QR Free reserves the right to modify these disclaimer terms at any time without prior notice. Continued use of the service after any modifications constitutes acceptance of the updated terms. Users are encouraged to review this disclaimer periodically.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us through our contact page.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-secondary text-sm">
                Contact Us →
              </Link>
              <Link href="/about" className="btn-primary text-sm">
                About →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}