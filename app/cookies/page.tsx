import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Cookie Policy for QR Free. Learn about the cookies and similar technologies we use, including Google AdSense cookies, and how to manage them.',
  alternates: {
    canonical: '/cookies',
  },
};

export default function CookiePolicyPage() {
  return (
    <section className="py-10 md:py-16" id="cookies-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Cookie <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-muted text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="glass-card-static p-8 md:p-12 space-y-8 text-muted leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that websites place on your computer or mobile device when you visit them. They are widely used to make websites work more efficiently, as well as to provide reporting information. Cookies set by the website owner (in this case, QR Free) are called &quot;first-party cookies&quot;. Cookies set by third parties are called &quot;third-party cookies&quot;.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">2. How We Use Cookies</h2>
            <p>
              QR Free uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable core features such as security, network management, and accessibility. The website cannot function properly without these cookies.
              </li>
              <li>
                <strong>Advertising cookies:</strong> These cookies are used to deliver ads that are more relevant to you and your interests. They may limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.
              </li>
              <li>
                <strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website, allowing us to measure and improve performance. Information tracked includes pages visited, time spent on the site, and referral sources.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">3. Essential Technologies</h2>
            <p>
              QR Free does not set essential tracking cookies. The application is 100% client-side and runs entirely in your browser without setting persistent cookies for functionality. Any cookies set are strictly for the purpose of the Google AdSense advertising program.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">4. Analytics Technologies</h2>
            <p>
              QR Free may use analytics technologies to understand how the website is used. Currently, the site does not use third-party analytics cookies, but this may change in the future. If analytics are added, they will be disclosed in an updated Cookie Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">5. Advertising Technologies</h2>
            <p>
              QR Free participates in the Google AdSense advertising program to keep the service completely free. Google AdSense and its partners may use cookies, web beacons, and other technologies to serve ads based on your visits to QR Free and other websites. These technologies collect information about your online activities across multiple sites to provide you with relevant advertising.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">6. Google AdSense</h2>
            <p>
              Google AdSense is an advertising service operated by Google that allows QR Free to display ads. Google AdSense uses cookies to serve ads based on a user&apos;s prior visits to QR Free and other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to QR Free or other sites on the internet. By using QR Free, you consent to the use of advertising cookies as described in this policy. You can opt out of personalized advertising by visiting the Google Ads Settings page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">7. Third-Party Cookies</h2>
            <p>
              Third-party cookies are created by domains other than QR Free. When you visit QR Free, the following third parties may set cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                Google AdSense — sets cookies for ad serving, frequency capping, and ad personalization. For more information, see Google&apos;s cookie policies.
              </li>
              <li>
                Any embedded content (such as YouTube videos or social media plugins) may set their own cookies. QR Free does not control these cookies.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">8. Managing Cookies</h2>
            <p>
              You have several options to manage and delete cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>Browser settings:</strong> You can control cookies through your browser&apos;s settings menu. Most browsers allow you to view, manage, delete, and block cookies. Disabling essential cookies may impact the functionality of QR Free.
              </li>
              <li>
                <strong>Cookie Consent Banner:</strong> When you visit QR Free, a cookie consent banner appears. You can accept or decline cookies. The current banner is managed via the Cookie Consent component in the website footer.
              </li>
              <li>
                <strong>Opt-out tools:</strong> You can use tools like <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary-light underline hover:text-accent">About Cookies</a> to manage cookies across multiple websites.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">9. Consent Preferences</h2>
            <p>
              When you first visit QR Free, a cookie consent banner is displayed. The banner allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Accept all cookies (including AdSense advertising cookies)</li>
              <li>Decline non-essential cookies (essential functionality cookies will still work)</li>
              <li>Manage specific cookie categories</li>
            </ul>
            <p>
              Your consent preference is stored locally in your browser using localStorage. The consent banner will not reappear unless you clear your browser data or the consent cookie expires.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground gradient-text">10. Changes to This Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. Any updates will be posted directly on this page with an updated modification date. We encourage users to review this page periodically for the latest information about cookies and similar technologies.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us through our contact page.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-secondary text-sm">
                Contact Us →
              </Link>
              <Link href="/privacy" className="btn-primary text-sm">
                Privacy Policy →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}