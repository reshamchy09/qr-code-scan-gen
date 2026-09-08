import type { Metadata } from 'next';
import ScannerClient from './ScannerClient';
import AdUnit from '../components/AdUnit';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free QR Code Scanner',
  description:
    'Scan QR codes using your camera or upload an image. Decode QR codes instantly for free. No app download or signup required.',
  alternates: {
    canonical: '/scanner',
  },
  keywords: [
    'QR Code Scanner',
    'Online QR Scanner',
    'Scan QR Code',
    'QR Code Reader',
    'Camera QR Scanner',
    'Image QR Scanner',
  ],
};

const howToScanSteps = [
  {
    step: '1',
    title: 'Start the camera or upload',
    description:
      'Choose "Camera" to scan live with your device camera, or "Upload Image" to decode a QR code from an existing photo or screenshot.',
  },
  {
    step: '2',
    title: 'Point at the code',
    description:
      'Hold the phone steady so the QR code fills the frame. Keep about 15 to 30 cm of distance and make sure the code is well-lit and in focus.',
  },
  {
    step: '3',
    title: 'Review the result',
    description:
      'The decoded content is displayed on screen. If it is a URL, phone number, or text, review it carefully before acting on it.',
  },
  {
    step: '4',
    title: 'Open, copy, or scan again',
    description:
      'Open the detected URL, copy the result to your clipboard, or scan another code. The result is never opened automatically.',
  },
];

const androidSteps = [
  'Open the default camera app (Google Camera, Samsung Camera, or your device camera).',
  'Point it at the QR code as you would to take a photo.',
  'Tap the pop-up notification that slides up at the bottom of the frame.',
  'On some devices, enable the "Scan QR codes" option once in Camera settings the first time you try.',
];

const iphoneSteps = [
  'Open the built-in Camera app.',
  'Point the rear camera at the QR code so it fills the frame, holding the phone steady about 15 to 30 cm away.',
  'A yellow notification banner appears at the top of the screen.',
  'Tap the banner to open the link or content.',
];

const faqs = [
  {
    q: 'Does this scanner need an app or an account?',
    a: 'No. The scanner runs directly in your browser. No app download, no signup, and no account are required.',
  },
  {
    q: 'Is the camera feed recorded or uploaded?',
    a: 'No. The camera feed is processed frame-by-frame in browser memory only, and is never recorded, saved, or transmitted. Uploaded images are also processed locally on your device.',
  },
  {
    q: 'Does it automatically open detected URLs?',
    a: 'No. QR Free displays the detected URL first and lets you decide whether to open it. This helps you avoid malicious or unwanted links.',
  },
  {
    q: 'Why won&apos;t my QR code scan?',
    a: 'Common reasons include low contrast, a missing quiet zone, codes that are too small, or poor lighting. Move closer or farther, brighten the image, and make sure there is clear white space around the code.',
  },
  {
    q: 'What types of QR codes can it read?',
    a: 'It decodes URL, text, email, phone, SMS, WiFi, and WhatsApp codes. It supports standard QR formats including those with error correction.',
  },
  {
    q: 'Is QR code scanning safe?',
    a: 'The scanning itself is safe and local. The caution to apply is the same as opening any link: verify the destination first, especially for codes from unknown sources.',
  },
];

export default function ScannerPage() {
  return (
    <>
      <ScannerClient />
      <AdUnit slot="scanner" />

      {/* Educational content */}
      <section className="py-12 md:py-16" id="scanner-guide-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* How to scan */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              How to <span className="gradient-text-reverse">Scan a QR Code</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {howToScanSteps.map((item) => (
                <div key={item.step} className="glass-card p-6">
                  <div className="text-xs font-mono text-accent mb-3">Step {item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scan on iPhone / Android */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Scan on iPhone</h3>
              <ul className="space-y-3">
                {iphoneSteps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent font-semibold flex-shrink-0">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Scan on Android</h3>
              <ul className="space-y-3">
                {androidSteps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent font-semibold flex-shrink-0">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              QR Code <span className="gradient-text">Safety</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">We Never Auto-Open Links</h3>
                <p className="text-sm text-muted leading-relaxed">
                  When the scanner detects a URL, it shows you the full destination first. You decide whether to open it, which helps you avoid phishing and malicious links.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">Local Processing</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Camera frames and uploaded images are processed entirely in your browser and never leave your device. No scanned content is uploaded to a server.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">Trust Your Instincts</h3>
                <p className="text-sm text-muted leading-relaxed">
                  A QR code is just encoded text. Apply the same caution you would to any link from an unknown sender, and never enter passwords or personal data prompted by a scanned code.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">Use Common Sense</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Codes in public places are generally safe, but they can be tampered with. If a code looks damaged, misprinted, or out of place, avoid scanning it.
                </p>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="glass-card-static p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">Why a QR Code May Not Scan</h2>
            <ul className="space-y-3 text-muted leading-relaxed">
              <li>• Move closer, then a little farther — phone cameras often struggle at very short distances.</li>
              <li>• Increase the brightness. Faded or reflective prints are a common cause of failure.</li>
              <li>• Make sure the code is flat and evenly lit, not curved or in shadow.</li>
              <li>• Check that there is clear white space around the code; cropping the margin breaks many codes.</li>
              <li>• If it still fails, generate a higher-resolution code with strong contrast and retry.</li>
            </ul>
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
              <Link href="/blog/how-to-scan-a-qr-code" className="glass-card p-6 block group">
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">How to Scan a QR Code on iPhone and Android</h3>
                <p className="text-sm text-muted leading-relaxed">Step-by-step instructions for the built-in camera scanner on every phone.</p>
              </Link>
              <Link href="/blog/qr-code-types-explained" className="glass-card p-6 block group">
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">7 QR Code Types Explained</h3>
                <p className="text-sm text-muted leading-relaxed">Understand what each QR code type contains so you know what you are scanning.</p>
              </Link>
              <Link href="/blog/qr-code-design-best-practices" className="glass-card p-6 block group">
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">QR Code Design &amp; Print Best Practices</h3>
                <p className="text-sm text-muted leading-relaxed">Avoid the design mistakes that make printed codes fail to scan.</p>
              </Link>
              <Link href="/blog/static-vs-dynamic-qr-codes" className="glass-card p-6 block group">
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">Static vs Dynamic QR Codes</h3>
                <p className="text-sm text-muted leading-relaxed">Understand how QR codes store content and what that means for scanning.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
