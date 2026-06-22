import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, User, ArrowLeft, Share2, Bookmark, MessageSquare, ArrowRight } from "lucide-react"

const ARTICLE = {
  title: "John Deere Unveils Next-Gen Autonomous Tractor with AI Capabilities",
  category: "AgriTech",
  date: "June 15, 2026",
  readTime: "8 min read",
  author: "Dr. Alan Davies",
  authorRole: "Lead Analyst, AgTech & IoT",
  imgUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
}

const RELATED_NEWS = [
  {
    title: "Agri Drone Startups Raise $120M in Q2 2026",
    date: "June 12, 2026",
    category: "Investment",
    imgUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New AI Models Predict Crop Disease with 95% Accuracy",
    date: "June 9, 2026",
    category: "Technology",
    imgUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "EU Announces New Subsidies for Organic Farming",
    date: "June 7, 2026",
    category: "Policy",
    imgUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

export default function NewsArticlePage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-[#14532d] text-white pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <Link href="/news" className="inline-flex items-center gap-2 text-green-50/80 hover:text-white text-[13px] font-medium mb-8 transition-colors bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                <ArrowLeft className="w-4 h-4" /> Back to News
              </Link>
              <span className="block text-[12px] font-bold text-[#4ade80] uppercase tracking-widest mb-4">{ARTICLE.category}</span>
              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-8 drop-shadow-sm">
                {ARTICLE.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-green-50/90 text-[13px] font-medium">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/5"><User className="w-4 h-4" /> {ARTICLE.author}</span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/5"><CalendarDays className="w-4 h-4" /> {ARTICLE.date}</span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/5"><Clock className="w-4 h-4" /> {ARTICLE.readTime}</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image src={ARTICLE.imgUrl} alt={ARTICLE.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Share Bar */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                <button className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-brand-700 transition-colors font-medium">
                  <Share2 className="w-4 h-4" /> Share
                </button>
                <button className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-brand-700 transition-colors font-medium">
                  <Bookmark className="w-4 h-4" /> Save
                </button>
                <button className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-brand-700 transition-colors font-medium">
                  <MessageSquare className="w-4 h-4" /> Comments (12)
                </button>
              </div>

              <div className="prose max-w-none text-gray-600 text-[15px] leading-[1.85]">
                <p className="text-[17px] text-gray-700 font-medium leading-relaxed mb-6">
                  John Deere has officially unveiled its next-generation autonomous tractor platform, marking a watershed moment for the precision agriculture industry. The new machine integrates cutting-edge AI and machine learning models developed in partnership with NVIDIA to optimize every phase of the planting and harvesting cycle without requiring direct human intervention.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">A Leap Forward in Autonomous Farming</h2>
                <p>
                  The announcement was made at the 2026 AgTech World Summit in Chicago, where John Deere CEO John May presented a live demonstration of the tractor navigating a 500-acre corn field using only onboard sensors, GPS RTK positioning, and a proprietary vision system trained on over 10 million annotated field images.
                </p>
                <p>
                  Industry analysts have noted that this represents a significant improvement over the company&#39;s previous autonomous platforms, with the new system achieving a 99.7% obstacle avoidance rate and the ability to operate continuously for up to 20 hours on a single fuel charge. The tractor can make real-time adjustments to seed depth and spacing based on soil conditions detected by ground-penetrating radar.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">AI-Powered Decision Making</h2>
                <p>
                  At the core of the new platform is Deere&#39;s proprietary FieldBrain AI engine. This system processes data from 36 onboard cameras, LIDAR arrays, and multispectral sensors to create a real-time 3D model of the field. The AI can identify over 200 weed species with 98% accuracy and autonomously adjust herbicide application rates to minimize chemical usage.
                </p>
                <p>
                  According to Deere&#39;s chief technology officer, the system also integrates with satellite weather data and historical yield maps to optimize planting patterns. Early field trials across 15 farms in Iowa and Illinois showed an average yield improvement of 12.3% compared to conventionally operated equipment.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">Market Implications</h2>
                <p>
                  The autonomous tractor market is projected to grow at a CAGR of 15.2% through 2035, with John Deere, AGCO Corporation, and CNH Industrial leading the competitive landscape. This latest announcement is expected to accelerate enterprise adoption among large-scale commercial farming operations in North America and Europe.
                </p>
                <p>
                  Financial analysts at Morgan Stanley have upgraded their price target for Deere & Company stock, citing the autonomous platform as a &#34;transformative revenue catalyst&#34; that could generate an additional $2.1 billion in annual recurring software subscription revenue by 2030.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">Regulatory Considerations</h2>
                <p>
                  While the technology itself represents a major advancement, regulatory frameworks for autonomous agricultural equipment remain fragmented across jurisdictions. The USDA has expressed support for accelerated testing programs, but individual state regulations vary significantly. Industry groups are lobbying for a unified federal framework that would streamline certification requirements and allow cross-state operation of autonomous farming fleets.
                </p>

                <div className="bg-[#f0fdf4] border border-brand-200 rounded-xl p-6 mt-8 mb-4">
                  <p className="text-[14px] text-brand-900 font-semibold mb-2">Key Takeaway</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    John Deere&#39;s autonomous tractor launch signals a new era in precision agriculture. With AI-powered decision making, 99.7% obstacle avoidance, and an average 12.3% yield improvement in trials, the platform sets a new benchmark for the industry. Investors and competitors should watch the enterprise subscription model closely.
                  </p>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-[15px] font-bold text-brand-900 mb-4">About the Author</h4>
                <div className="flex gap-5 items-start">
                  <img src="https://i.pravatar.cc/150?img=44" alt="Author" className="w-16 h-16 object-cover rounded-full" />
                  <div>
                    <p className="text-[15px] font-bold text-gray-900">{ARTICLE.author}</p>
                    <p className="text-[13px] text-brand-600 font-medium mb-2">{ARTICLE.authorRole}</p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      With over 15 years of experience in agricultural technology analysis, Dr. Davies leads the IoT and Autonomous Systems research division. He holds a Ph.D. in Agricultural Engineering.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Related News */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[16px] font-bold text-brand-900 mb-5">Related News</h3>
                  <div className="space-y-5">
                    {RELATED_NEWS.map((item, idx) => (
                      <Link key={idx} href="#" className="flex gap-4 group">
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={item.imgUrl} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-brand-700 transition-colors line-clamp-2">{item.title}</h4>
                          <span className="text-[11px] text-gray-400 mt-1 block">{item.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#14532d] text-white rounded-2xl p-6">
                  <h3 className="text-[16px] font-bold mb-2">Stay Updated</h3>
                  <p className="text-[12px] text-green-50/80 mb-4">Get the latest agriculture news delivered to your inbox.</p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full py-2.5 px-4 rounded-lg bg-black/20 border border-transparent text-white placeholder-green-50/50 text-[13px] mb-3 focus:outline-none focus:border-brand-400"
                  />
                  <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-2.5 rounded-lg transition-colors text-[13px]">
                    Subscribe
                  </button>
                </div>

                {/* Browse Reports CTA */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
                  <h3 className="text-[16px] font-bold text-brand-900 mb-2">Explore Our Reports</h3>
                  <p className="text-[12px] text-gray-500 mb-4">Access in-depth market research and forecasts.</p>
                  <Link href="/reports" className="inline-flex items-center gap-2 bg-white border border-brand-200 text-brand-700 hover:bg-brand-50 font-semibold py-2.5 px-5 rounded-lg transition-colors text-[13px]">
                    Browse Reports <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
