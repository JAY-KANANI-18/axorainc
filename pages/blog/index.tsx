import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { BlogPost, blogPosts } from "../../data/blogPosts";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";

const Blog: NextPage = () => {
  const router = useRouter();

  const formatDate = (dateString: string) =>
    new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));

  const postsSorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Head>
        <title>Blog - AI & Visual Search Insights | Axora Infotech</title>
        <meta
          name="description"
          content="AI, SaaS, and cloud engineering insights by Axora Infotech. Learn AI Product Engineering, SaaS multitenancy, DevOps automation, and CRM modernization."
        />
        <meta
          name="keywords"
          content="AI blog, computer vision articles, visual search technology, tile industry trends, AI technology insights, machine learning blog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Axora Infotech" />
        <link rel="canonical" href="https://axorainfotech.com/blog" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Axora Infotech Blog RSS"
          href="/rss.xml"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Blog - AI & Visual Search Insights"
        />
        <meta
          property="og:description"
          content="Expert insights on AI, SaaS platforms, and cloud-native engineering."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://axorainfotech.com/blog" />
        <meta
          property="og:image"
          content="https://axorainfotech.com/blog-og-image.jpg"
        />
        <meta property="og:image:alt" content="Axora Infotech Blog" />
        <meta property="og:site_name" content="Axora Infotech" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog - AI & Visual Search Insights"
        />
        <meta
          name="twitter:description"
          content="Expert insights on AI, SaaS platforms, and cloud-native engineering."
        />
        <meta name="twitter:site" content="@AxoraInfotech" />
        <meta name="twitter:creator" content="@AxoraInfotech" />

        {/* Structured Data - Blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Axora Infotech Blog",
              description:
                "Insights on AI, SaaS platforms, and cloud-native engineering",
              url: "https://axorainfotech.com/blog",
              publisher: {
                "@type": "Organization",
                name: "Axora Infotech",
                logo: {
                  "@type": "ImageObject",
                  url: "https://axorainfotech.com/axora-full-main.png",
                },
              },
            }),
          }}
        />

        {/* Structured Data - ItemList of Blog Posts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: blogPosts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://axorainfotech.com/blog/${post.slug}`,
                name: post.title,
              })),
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
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* HEADER */}
          <Nav />

        <main className="flex-grow">
          {/* HERO SECTION */}
          <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 text-blue-200 text-sm font-semibold">
                    📚 Knowledge Hub
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
                  Insights & Articles
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  Explore the latest trends in AI, SaaS platforms, cloud engineering, and digital transformation
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                    AI Product Engineering
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                    SaaS Development
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                    Cloud & DevOps
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
                    CRM Modernization
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* BLOG POSTS GRID */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all"
                >
                  <FaArrowLeftLong />
                  <span className="font-medium">Back</span>
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {postsSorted.map((post, index) => (
                  <article
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="h-56 w-full bg-gradient-to-br from-blue-500 to-purple-500 relative overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm mb-4">
                          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold border border-blue-100">
                            {post.category}
                          </span>
                          <span className="text-gray-500">{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {post.author.charAt(0)}
                            </div>
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">{post.author}</p>
                              <p className="text-gray-500">{formatDate(post.date)}</p>
                            </div>
                          </div>
                          <div className="text-blue-600 font-semibold group-hover:text-blue-700 flex items-center gap-2">
                            Read
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Coming Soon Message */}
              {blogPosts.length === 0 && (
                <div className="text-center max-w-2xl mx-auto">
                  <div className="text-6xl mb-6">📚</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Content Coming Soon
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    We're preparing insightful articles about AI-powered visual
                    search and computer vision technology. Check back soon!
                  </p>
                  <a
                    href="/"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                  >
                    Back to Home
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* NEWSLETTER SIGNUP */}
          <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-3xl mx-auto">
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-semibold">
                    📬 Newsletter
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Stay Updated with Latest Insights
                </h2>
                <p className="text-xl text-blue-200 mb-10 leading-relaxed">
                  Get notified when we publish new articles about AI, SaaS platforms, cloud engineering, and digital transformation
                </p>
                <form className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm text-blue-200 mt-4">
                    Join 1,000+ professionals getting weekly insights
                  </p>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
