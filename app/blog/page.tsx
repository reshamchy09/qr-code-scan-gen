import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './content';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'QR Code Blog: Guides, Tips & How-To Articles',
  description:
    'Practical guides and how-to articles about QR codes. Learn how to generate, scan, design, and use QR codes for business and personal projects.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'QR Code Blog: Guides, Tips & How-To Articles',
    description:
      'Practical guides about QR codes: how to generate, scan, design, and use them in business.',
    type: 'website',
    url: 'https://qr-code-scan-gen.vercel.app/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <section className="py-10 md:py-16" id="blog-section">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
name: 'QR Free Blog',
           url: 'https://qr-code-scan-gen.vercel.app/blog',
           description:
             'Practical guides and how-to articles about QR codes for personal and business use.',
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            QR Code <span className="gradient-text">Guides</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Learn how to create, scan, design, and use QR codes for your home or business.
            Written by people who build QR tools every day.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card p-6 md:p-8 block group"
            >
              <div className="flex items-center gap-3 text-xs text-muted mb-3">
                <time dateTime={post.date}>{post.date}</time>
                <span>&bull;</span>
                <span>{post.readTime}</span>
                <span>&bull;</span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                {post.title}
              </h2>
              <p className="text-muted leading-relaxed mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm text-accent font-medium">
                Read guide
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="glass-card-static p-6 md:p-8 mt-12 text-center">
          <h2 className="text-xl font-bold mb-3">
            Ready to Try It Yourself?
          </h2>
          <p className="text-muted mb-5">
            Put the guides into practice with the free generator or scanner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/generator" className="btn-primary text-sm">
              Open QR Generator
            </Link>
            <Link href="/scanner" className="btn-accent text-sm">
              Open QR Scanner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}