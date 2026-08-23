import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug, getRelatedPosts } from '../content';
import JsonLd from '../../components/JsonLd';
import AdUnit from '../../components/AdUnit';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonical = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      url: `https://qr-code-scan-gen.vercel.app/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      section: 'QR Code Guides',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <section className="py-10 md:py-16" id="blog-post-section">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.metaDescription,
          image: 'https://qr-code-scan-gen.vercel.app/favicon.ico',
          datePublished: post.date,
          dateModified: post.updated,
          author: {
            '@type': 'Organization',
            name: 'QR Free',
            url: 'https://qr-code-scan-gen.vercel.app/about',
          },
          publisher: {
            '@type': 'Organization',
            name: 'QR Free',
            url: 'https://qr-code-scan-gen.vercel.app',
            logo: {
              '@type': 'ImageObject',
              url: 'https://qr-code-scan-gen.vercel.app/favicon.ico',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://qr-code-scan-gen.vercel.app/blog/${post.slug}`,
          },
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary-light transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-muted/80 truncate">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-muted mb-4">
            <time dateTime={post.date}>Published {post.date}</time>
            {post.updated !== post.date && (
              <>
                <span>&bull;</span>
                <span>Updated {post.updated}</span>
              </>
            )}
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Content */}
        <article className="space-y-8">
          {post.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl font-bold mt-10 pt-2 border-t border-border/40">
                  {section.heading}
                </h2>
              )}
              {section.body?.map((paragraph, i) => (
                <p key={i} className="text-foreground/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-2 pl-1">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/90 leading-relaxed">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent flex-shrink-0 mt-1">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.cta && (
                <div className="glass-card-static p-6 md:p-8 mt-6 border-[rgba(6,182,212,0.2)]">
                  <p className="text-muted text-sm mb-4">{section.cta.description}</p>
                  <Link href={section.cta.href} className="btn-primary text-sm">
                    {section.cta.label} →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </article>

        <div className="mt-10">
          <AdUnit slot="guide" />
        </div>

        {/* Related posts */}
        <div className="mt-16">
          <h2 className="text-xl font-bold mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="glass-card p-5 block group"
              >
                <div className="text-xs text-muted mb-2">{relatedPost.date}</div>
                <h3 className="font-semibold mb-2 group-hover:text-primary-light transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card-static p-6 md:p-8 mt-12 text-center">
          <h2 className="text-xl font-bold mb-3">Need a QR Code Right Now?</h2>
          <p className="text-muted mb-5">
            Generate or scan a QR code instantly. Free, private, and no signup required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/generator" className="btn-primary text-sm">
              Generate QR Code
            </Link>
            <Link href="/scanner" className="btn-accent text-sm">
              Scan QR Code
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}