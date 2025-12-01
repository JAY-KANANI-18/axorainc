import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { BlogPost, blogPosts } from "../../data/blogPosts";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

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
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center text-2xl font-bold">
              <Image
                src="/axora-full-main.png"
                alt="Axora Infotech Logo"
                width={150}
                height={80}
                priority
              />
            </a>
            <div className="flex gap-6">
              {/* <a
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/axovision"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                AxoVision
              </a> */}
              <a
                href="/#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {/* HERO SECTION */}
          <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Insights & Articles
                </h1>
                <p className="text-xl text-gray-300">
                  Explore the latest trends in AI, computer vision, and visual
                  search technology
                </p>
              </div>
            </div>
          </section>

          {/* BLOG POSTS GRID */}
          <section className="py-20 bg-gray-50">
            <div className="m-4">
              <button
                onClick={() => router.back()}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <FaArrowLeftLong />
              </button>
            </div>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {postsSorted.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="h-48 w-full bg-gradient-to-br from-blue-500 to-purple-500 relative">
                      <Image
                        src={post.image}
                        alt={post.slug}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <p>{post.author}</p>
                          <p>{formatDate(post.date)}</p>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                        >
                          Read More
                          <svg
                            className="w-4 h-4"
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
                      </div>
                    </div>
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
          <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                Get notified when we publish new articles about AI, computer
                vision, and visual search technology
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
