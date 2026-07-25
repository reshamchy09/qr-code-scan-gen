import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-20 md:py-32 flex items-center justify-center min-h-[70vh]" id="not-found-section">
      <div className="max-w-md mx-auto px-4 text-center">
        {/* 404 Visual Icon */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(124,58,237,0.2)] animate-pulse-glow">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-light">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <path d="M14 14l6 6m0-6l-6 6" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h2>
        <p className="text-muted mb-8 text-sm leading-relaxed">
          Oops! The page you are looking for doesn&apos;t exist or has been moved.
          Use the links below to get back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary w-full sm:w-auto text-sm" id="404-home-link">
            Go to Homepage
          </Link>
          <Link href="/generator" className="btn-secondary w-full sm:w-auto text-sm" id="404-generator-link">
            QR Generator
          </Link>
        </div>
      </div>
    </section>
  );
}
