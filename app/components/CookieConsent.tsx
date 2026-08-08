'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'qrfree-consent-v1';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === 'accepted' || stored === 'declined') {
        setVisible(false);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Storage unavailable; hide banner either way.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 p-4 animate-slide-up"
      role="dialog"
      aria-live="polite"
      id="cookie-consent-banner"
    >
      <div className="max-w-3xl mx-auto glass-card-static p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 border-[rgba(124,58,237,0.25)]">
        <div className="flex-1 text-sm text-muted leading-relaxed">
          <p>
            We use cookies to personalize content and ads, analyze our traffic, and
            improve your experience. We also share information about your use of our
            site with our advertising partners. Learn more in our{' '}
            <Link href="/privacy" className="text-primary-light underline hover:text-accent">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={() => setConsent('declined')} className="btn-ghost text-sm" id="consent-decline">
            Decline
          </button>
          <button onClick={() => setConsent('accepted')} className="btn-primary text-sm" id="consent-accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}