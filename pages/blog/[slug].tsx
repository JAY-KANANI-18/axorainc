import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { blogPosts, BlogPost } from "../../data/blogPosts";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";

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
  const router = useRouter();

  const seoTitle = `${post.title} | Axora Infotech Blog`;
  const description = post.excerpt;
  const canonicalUrl = `https://axorainfotech.com/blog/${post.slug}`;
  const ogImage = post.ogImage || "https://axorainfotech.com/blog-og-image.jpg";
  const keywords =
    post.keywords?.join(", ") ||
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
        <meta
          property="article:author"
          content="https://www.linkedin.com/company/axora-infotech"
        />
        <meta
          property="article:publisher"
          content="https://www.linkedin.com/company/axora-infotech"
        />
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
              "@type": "Article",
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
                  url: "https://axorainfotech.com/axora-full-main.png",
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
     <Nav />

        <main className="flex-grow bg-white">
          {/* Hero Section */}
          <article className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
              <div className="mb-8">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all backdrop-blur-sm"
                >
                  <FaArrowLeftLong />
                  <span className="font-medium">Back to Blog</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm mb-8">
                <span className="px-4 py-1.5 rounded-full bg-blue-500/30 text-blue-100 font-semibold border border-blue-400/30">
                  {post.category}
                </span>
                <span className="text-slate-300">{formatDate(post.date)}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">{post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
                {post.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-4xl">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">{post.author}</p>
                  <p className="text-sm text-slate-400">Published on {formatDate(post.date)}</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </article>

          {/* Content Section */}
          <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-16 prose-h2:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-lg prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-strong:font-semibold">
                {post.content.map((section, idx) => (
                  <section key={section.heading} className="mb-16">
                    <h2 className="relative inline-block">
                      {section.heading}
                      <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </h2>
                    <div className="mt-6 space-y-6">
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-slate-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Related Services */}
              <div className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    Explore Our Services
                  </h3>
                  <p className="text-slate-600">
                    Discover how we can help transform your business
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link
                    href="/services/ai-product-engineering"
                    className="group block p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      AI Product Engineering
                    </h4>
                    <p className="text-sm text-slate-600">
                      Build intelligent AI-powered applications
                    </p>
                  </Link>
                  <Link
                    href="/services/custom-saas-development"
                    className="group block p-6 bg-white border border-slate-200 rounded-xl hover:border-purple-400 hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                      Custom SaaS Platforms
                    </h4>
                    <p className="text-sm text-slate-600">
                      Scalable multi-tenant SaaS solutions
                    </p>
                  </Link>
                  <Link
                    href="/services/cloud-devops-automation"
                    className="group block p-6 bg-white border border-slate-200 rounded-xl hover:border-green-400 hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                      Cloud & DevOps
                    </h4>
                    <p className="text-sm text-slate-600">
                      Automated cloud infrastructure
                    </p>
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              {(prevPost || nextPost) && (
                <nav className="mt-16 pt-10 border-t-2 border-gray-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Continue Reading</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {prevPost && (
                      <Link
                        href={`/blog/${prevPost.slug}`}
                        className="group block p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-xl transition-all transform hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          <span className="font-medium">Previous Article</span>
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {prevPost.title}
                        </h4>
                        <p className="text-sm text-slate-500 mt-2">{prevPost.readTime}</p>
                      </Link>
                    )}

                    {nextPost && (
                      <Link
                        href={`/blog/${nextPost.slug}`}
                        className="group block p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-xl transition-all transform hover:-translate-y-1 md:text-right"
                      >
                        <div className="flex items-center justify-end gap-2 text-sm text-slate-500 mb-3">
                          <span className="font-medium">Next Article</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {nextPost.title}
                        </h4>
                        <p className="text-sm text-slate-500 mt-2">{nextPost.readTime}</p>
                      </Link>
                    )}
                  </div>
                </nav>
              )}

              <div className="mt-12 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  View All Articles
                </Link>
              </div>
            </div>
          </section>
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
