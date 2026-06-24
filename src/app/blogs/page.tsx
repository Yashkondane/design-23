import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, Search, Clock, CalendarDays } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const CATEGORIES = ["All", "Analysis", "Technology", "Sustainability", "Market Insights", "AgriTech", "Policy"]

const BLOGS = [
  {
    title: "The Future of Agricultural Robotics",
    desc: "A deep dive into how robotics and AI are reshaping the agriculture industry from planting to harvesting.",
    category: "Analysis",
    date: "June 9, 2026",
    readTime: "6 min read",
    imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Robotics"
  },
  {
    title: "Impact of Climate Change on Crop Yields",
    desc: "Understanding climate risks and strategies to build a more resilient agriculture system for the future.",
    category: "Sustainability",
    date: "June 7, 2026",
    readTime: "5 min read",
    imgUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sustainability"
  },
  {
    title: "How AI is Transforming Agriculture",
    desc: "From predictive analytics to smart decision-making — AI is shaping the future of farming in unprecedented ways.",
    category: "Technology",
    date: "June 5, 2026",
    readTime: "5 min read",
    imgUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Technology"
  },
  {
    title: "Sustainable Agriculture: A Path Forward",
    desc: "How regenerative practices can restore soil health and ensure long-term food security for a growing population.",
    category: "Market Insights",
    date: "June 3, 2026",
    readTime: "5 min read",
    imgUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Market Insights"
  },
  {
    title: "Innovations in Vertical Farming Systems",
    desc: "Exploring how vertical farms are maximizing yields in urban environments while reducing resource consumption.",
    category: "AgriTech",
    date: "June 2, 2026",
    readTime: "7 min read",
    imgUrl: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Vertical farming"
  },
  {
    title: "Water Management and Smart Irrigation",
    desc: "How IoT sensors are helping farmers conserve water while improving crop health and overall yield efficiency.",
    category: "Sustainability",
    date: "May 30, 2026",
    readTime: "4 min read",
    imgUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Irrigation"
  },
  {
    title: "The Rise of Plant-Based Alternative Proteins",
    desc: "Analyzing the market shift towards alternative proteins and what it means for traditional agriculture value chains.",
    category: "Analysis",
    date: "May 28, 2026",
    readTime: "6 min read",
    imgUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Plant-based proteins"
  },
  {
    title: "Blockchain for Agricultural Supply Chains",
    desc: "Enhancing transparency and traceability from farm to fork using distributed ledger technology.",
    category: "Technology",
    date: "May 25, 2026",
    readTime: "8 min read",
    imgUrl: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Blockchain in supply chain"
  },
  {
    title: "Soil Health Diagnostics: The Next Frontier",
    desc: "Advanced spectroscopy and AI-powered soil analysis tools that give farmers actionable insights in minutes.",
    category: "AgriTech",
    date: "May 22, 2026",
    readTime: "5 min read",
    imgUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Soil health"
  },
]

export default function BlogsPage() {
  const featured = BLOGS[0]
  const rest = BLOGS.slice(1)

  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        {/* Hero Banner */}
        <section
          style={{
            background: "linear-gradient(160deg, #0D3B12 0%, #1B5E20 50%, #2E7D32 100%)",
            padding: "56px 24px 52px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-60px", right: "-80px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(102, 187, 106, 0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <nav className="flex items-center gap-1.5 text-xs mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
              <Link href="/" className="hover:text-white" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.35)" }}>&rsaquo;</span>
              <span style={{ color: "rgba(255,255,255,0.9)" }}>Blogs</span>
            </nav>
            <h1 className="font-serif" style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "12px" }}>
              Blogs &amp; Insights
            </h1>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "16px", lineHeight: 1.7, maxWidth: "680px", marginBottom: "28px" }}>
              Expert analysis, thought leadership, and deep dives into the trends shaping the future of agriculture.
            </p>
            <div style={{ position: "relative", maxWidth: "560px" }}>
              <Search style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", width: "20px", height: "20px", color: "#9ca3af", pointerEvents: "none" }} />
              <input
                type="text"
                placeholder="Search blog posts..."
                style={{ width: "100%", height: "52px", paddingLeft: "52px", paddingRight: "24px", borderRadius: "9999px", backgroundColor: "#ffffff", color: "#1f2937", border: "none", outline: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", fontSize: "14px", boxSizing: "border-box" }}
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors border ${
                  idx === 0
                    ? "bg-[#14532d] text-white border-[#14532d]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-500 hover:text-brand-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Blog Post */}
          <div className="mb-12">
            <Link href="/blogs/future-of-agricultural-robotics" className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <Image
                  src={featured.imgUrl}
                  alt={featured.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-[11px] font-bold text-brand-600 uppercase tracking-widest mb-3">{featured.category}</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-brand-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{featured.desc}</p>
                <div className="flex items-center gap-4 text-[12px] text-gray-400 font-medium">
                  <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featured.readTime}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rest.map((blog, idx) => (
              <Link
                key={idx}
                href={`/blogs/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md shadow-gray-200/40 hover:shadow-xl hover:shadow-brand-100/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={blog.imgUrl}
                    alt={blog.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <span className="text-[10px] font-bold text-brand-600 tracking-widest uppercase block mb-2">
                    {blog.category}
                  </span>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-[12px] text-gray-500 mb-4 line-clamp-2 leading-relaxed flex-1">
                    {blog.desc}
                  </p>
                  <div className="flex items-center gap-4 text-[11px] font-medium text-gray-400 mt-auto pt-4 border-t border-gray-50">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-200 text-gray-700 hover:border-brand-500 hover:text-brand-700 font-semibold py-3 px-8 rounded-lg transition-colors text-[14px] shadow-sm">
              Load More Posts
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
