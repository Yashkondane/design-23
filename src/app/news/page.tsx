import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, Search, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const NEWS = [
  {
    title: "John Deere Unveils Next-Gen Autonomous Tractor with AI Capabilities",
    desc: "The new machine integrates advanced machine learning models to optimize planting and harvesting without human intervention, marking a significant milestone in autonomous farming.",
    date: "June 15, 2026",
    category: "AgriTech",
    imgUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tractor in field"
  },
  {
    title: "India's Agri Exports Reach Record High in FY 2026",
    desc: "Driven by strong demand for rice and marine products, the country's agricultural exports surged past projected targets this year, boosting farmer incomes.",
    date: "June 14, 2026",
    category: "Trade & Exports",
    imgUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Agriculture field"
  },
  {
    title: "Global Fertilizer Prices Show Steady Decline",
    desc: "Easing supply chain disruptions and lower natural gas prices have contributed to a global stabilization in essential fertilizer costs.",
    date: "June 13, 2026",
    category: "Market Update",
    imgUrl: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Planting seeds"
  },
  {
    title: "Agri Drone Startups Raise $120M in Q2 2026",
    desc: "Venture capital continues to flow into aerial crop monitoring as precision agriculture becomes the standard for large-scale farms.",
    date: "June 12, 2026",
    category: "Investment",
    imgUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Drone flying over crop"
  },
  {
    title: "World Bank Invests $500M in Sustainable Agriculture Projects",
    desc: "The new funding aims to support climate-resilient farming practices across developing nations over the next five years.",
    date: "June 11, 2026",
    category: "Policy",
    imgUrl: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Silos and farming"
  },
  {
    title: "Demand for Dairy Products to Grow 18% by 2030: Report",
    desc: "Changing dietary habits and rising populations in emerging economies are expected to drive unprecedented growth in global dairy consumption.",
    date: "June 10, 2026",
    category: "Industry Report",
    imgUrl: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Dairy cows"
  },
  {
    title: "New AI Models Predict Crop Disease Outbreaks with 95% Accuracy",
    desc: "Researchers have developed a breakthrough algorithm that analyzes satellite imagery and weather patterns to forecast blight before it strikes.",
    date: "June 9, 2026",
    category: "Technology",
    imgUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Crop disease"
  },
  {
    title: "Sustainable Packaging Initiatives Gain Momentum in Food Processing",
    desc: "Major food manufacturers are pledging to eliminate single-use plastics from their supply chains by 2030 in response to consumer pressure.",
    date: "June 8, 2026",
    category: "Sustainability",
    imgUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sustainable packaging"
  },
  {
    title: "EU Announces New Subsidies for Organic Farming Transition",
    desc: "European Union member states will receive an additional €2.4 billion to support farmers transitioning from conventional to certified organic farming.",
    date: "June 7, 2026",
    category: "Policy",
    imgUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Organic farm"
  },
]

const TRENDING = NEWS.slice(1, 6);

export default function NewsPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />
      
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
            <span style={{ color: "rgba(255,255,255,0.9)" }}>News</span>
          </nav>
          <h1 className="font-serif" style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "12px" }}>
            Agriculture News
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "16px", lineHeight: 1.7, maxWidth: "680px", marginBottom: "28px" }}>
            Stay up-to-date with the latest developments, market trends, and technological innovations shaping the global agriculture industry.
          </p>
          <div style={{ position: "relative", maxWidth: "560px" }}>
            <Search style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", width: "20px", height: "20px", color: "#9ca3af", pointerEvents: "none" }} />
            <input
              type="text"
              placeholder="Search news articles..."
              style={{ width: "100%", height: "52px", paddingLeft: "52px", paddingRight: "24px", borderRadius: "9999px", backgroundColor: "#ffffff", color: "#1f2937", border: "none", outline: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", fontSize: "14px", boxSizing: "border-box" }}
            />
          </div>
        </div>
      </section>

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main News Feed (Left) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Category Filter / Search */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-4">
                <div className="flex gap-4 text-[13px] font-bold uppercase tracking-wider text-gray-500 overflow-x-auto no-scrollbar w-full sm:w-auto">
                  <span className="text-brand-700 border-b-2 border-brand-700 pb-1 flex-shrink-0 cursor-pointer">Latest</span>
                  <span className="hover:text-gray-900 cursor-pointer flex-shrink-0">AgriTech</span>
                  <span className="hover:text-gray-900 cursor-pointer flex-shrink-0">Markets</span>
                  <span className="hover:text-gray-900 cursor-pointer flex-shrink-0">Policy</span>
                  <span className="hover:text-gray-900 cursor-pointer flex-shrink-0">Sustainability</span>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Search news..." className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 w-full sm:w-64 bg-white" />
                </div>
              </div>

              {/* News Articles List */}
              <div className="space-y-6">
                {NEWS.map((item, idx) => (
                  <Link href={`/news/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`} key={idx} className="group flex flex-col sm:flex-row gap-6 items-center bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="relative w-full sm:w-64 aspect-[16/9] sm:aspect-square md:aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image src={item.imgUrl} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center flex-grow py-2">
                      <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                        <span className="text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">{item.category}</span>
                        <span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-gray-300 rounded-full"></span> {idx === 0 ? '2 hours ago' : item.date}</span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-extrabold text-gray-900 leading-tight mb-3 group-hover:text-brand-700 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                        {item.desc}
                      </p>
                      <span className="text-brand-700 font-semibold text-[13px] flex items-center gap-1.5 group-hover:gap-2 transition-all">
                        Read full story <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12 pt-8 border-t border-gray-200">
                <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:text-brand-700 hover:border-brand-500 shadow-sm transition-all">
                  Load More News
                </button>
              </div>

            </div>

            {/* Sidebar (Right) */}
            <aside className="lg:col-span-4 space-y-8 sticky top-24">
              
              {/* Trending Widget */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <h3 className="text-lg font-bold text-gray-900">Trending Now</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {TRENDING.map((item, idx) => (
                      <Link href={`/news/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`} key={idx} className="group flex gap-4 items-start">
                        <span className="text-3xl font-black text-gray-200 group-hover:text-brand-200 transition-colors">0{idx + 1}</span>
                        <div>
                          <h4 className="text-[15px] font-bold text-gray-900 leading-snug group-hover:text-brand-700 transition-colors mb-1">
                            {item.title}
                          </h4>
                          <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-gradient-to-br from-[#14532d] to-brand-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Morning Briefing</h3>
                <p className="text-sm text-brand-100 mb-6 leading-relaxed relative z-10">
                  Get the most important agriculture news in your inbox every morning.
                </p>
                <form className="relative z-10 space-y-3">
                  <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400 text-sm" />
                  <button className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-lg shadow-brand-500/30">
                    Subscribe Now
                  </button>
                </form>
              </div>

            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
