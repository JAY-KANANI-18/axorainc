import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { blogPosts, BlogPost } from "../../data/blogPosts";

interface BlogPostPageProps {
  post: BlogPost;
}

const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  const seoTitle = `${post.title} | Axora Infotech Blog`;
  const description = post.excerpt;
  const canonicalUrl = `https://axorainfotech.com/blog/${post.slug}`;
  const ogImage = post.ogImage || "https://axorainfotech.com/blog-og-image.jpg";
  const keywords = post.keywords?.join(", ") ||
    "visual search, computer vision, tile industry, AI insights";
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Axora Infotech Blog RSS"
          href="/rss.xml"
        />

        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Axora Infotech" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={post.date} />
        <meta property="og:image:alt" content={post.title} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@AxoraInfotech" />
        <meta name="twitter:creator" content="@AxoraInfotech" />
        <meta name="twitter:image:alt" content={post.title} />

        {/* LinkedIn / Article Meta */}
        <meta property="article:author" content="https://www.linkedin.com/company/axora-infotech" />
        <meta property="article:publisher" content="https://www.linkedin.com/company/axora-infotech" />
        <meta property="article:section" content={post.category} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        {post.keywords?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              image: ogImage,
              datePublished: post.date,
              dateModified: post.date,
              author: {
                "@type": "Organization",
                name: post.author,
              },
              publisher: {
                "@type": "Organization",
                name: "Axora Infotech",
                logo: {
                  "@type": "ImageObject",
                  url: "https://axorainfotech.com/2.png",
                },
              },
              mainEntityOfPage: canonicalUrl,
              url: canonicalUrl,
              keywords: post.keywords,
              articleSection: post.category,
            }),
          }}
        />

        {/* Structured Data - Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://axorainfotech.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://axorainfotech.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: canonicalUrl,
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center text-2xl font-bold">
              <Image
                src="/2.png"
                alt="Axora Infotech Logo"
                width={150}
                height={80}
                priority
              />
            </Link>
            <div className="flex gap-6">
              <Link
                href="/blog"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Back to Blog
              </Link>
              <Link
                href="/axovision"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                AxoVision
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <article className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl">
                <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200 mb-6">
                  <span className="bg-blue-500/20 text-blue-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  {post.title}
                </h1>
                <p className="text-blue-100 text-lg mb-8">{post.excerpt}</p>
                <div className="mb-10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto rounded-2xl shadow-xl"
                    priority
                  />
                </div>

                <div className="flex items-center gap-4 text-sm text-blue-200 mb-12">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-lg font-semibold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p>{formatDate(post.date)}</p>
                  </div>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                  {post.content.map((section) => (
                    <section key={section.heading} className="mb-10">
                      <h2>{section.heading}</h2>
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </section>
                  ))}
                </div>

                {/* Related Services CTA */}
                <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Explore related services
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/services/ai-product-engineering"
                      className="px-4 py-2 bg-blue-500/20 text-blue-100 rounded-lg hover:bg-blue-500/30 transition-colors"
                    >
                      AI Product Engineering
                    </Link>
                    <Link
                      href="/services/custom-saas-development"
                      className="px-4 py-2 bg-blue-500/20 text-blue-100 rounded-lg hover:bg-blue-500/30 transition-colors"
                    >
                      Custom SaaS Platforms
                    </Link>
                    <Link
                      href="/services/cloud-devops-automation"
                      className="px-4 py-2 bg-blue-500/20 text-blue-100 rounded-lg hover:bg-blue-500/30 transition-colors"
                    >
                      Cloud & DevOps Automation
                    </Link>
                  </div>
                </div>

                {/* Prev/Next Navigation */}
                {(prevPost || nextPost) && (
                  <nav className="mt-12 flex items-center justify-between gap-4">
                    {prevPost ? (
                      <Link
                        href={`/blog/${prevPost.slug}`}
                        className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        {prevPost.title}
                      </Link>
                    ) : (
                      <span />
                    )}

                    {nextPost && (
                      <Link
                        href={`/blog/${nextPost.slug}`}
                        className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                      >
                        {nextPost.title}
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </nav>
                )}

                <div className="mt-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back to all articles
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async (
  context
) => {
  const slug = context.params?.slug as string;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
