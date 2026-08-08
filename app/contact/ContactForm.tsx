'use client';

import { useState } from 'react';

const CONTACT_EMAIL = 'reshamdevstudio@gmail.com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || `Message from ${name || 'a visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="glass-card-static p-6 md:p-8">
      <h2 className="text-xl font-semibold mb-5">Send Us a Message</h2>

      {submitted ? (
        <div className="p-5 rounded-xl bg-success/5 border border-success/20 text-center animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-success">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Message Ready!</h3>
          <p className="text-sm text-muted mb-4">
            Your email app should have opened with your message pre-filled.
            If not, send us an email at {CONTACT_EMAIL}.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary text-sm"
            id="send-another-message"
          >
            Write Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
          <div>
            <label htmlFor="contact-name" className="input-label">Your Name (Optional)</label>
            <input
              type="text"
              id="contact-name"
              className="input-field"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="input-label">Your Email *</label>
            <input
              type="email"
              id="contact-email"
              className="input-field"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contact-subject" className="input-label">Subject</label>
            <input
              type="text"
              id="contact-subject"
              className="input-field"
              placeholder="Question about QR codes"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="input-label">Message *</label>
            <textarea
              id="contact-message"
              className="input-field min-h-[140px] resize-y"
              placeholder="How can we help you?"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary w-full" id="contact-submit-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13"/>
              <path d="M22 2 15 22l-4-9-9-4 20-7z"/>
            </svg>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}