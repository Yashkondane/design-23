import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, User, ArrowLeft, Share2, Bookmark, MessageSquare, ArrowRight } from "lucide-react"

const BLOG = {
  title: "The Future of Agricultural Robotics: How Automation is Reshaping Modern Farming",
  category: "Analysis",
  date: "June 9, 2026",
  readTime: "6 min read",
  author: "Sarah Chen",
  authorRole: "Senior Market Researcher",
  imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
}

const TABLE_OF_CONTENTS = [
  "Introduction",
  "The Current Landscape",
  "Key Technologies Driving Adoption",
  "Economic Impact on Farm Operations",
  "Regional Adoption Patterns",
  "Challenges & Barriers",
  "Future Outlook",
]

const RELATED_BLOGS = [
  {
    title: "How AI is Transforming Agriculture",
    date: "June 5, 2026",
    category: "Technology",
    readTime: "5 min",
    imgUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sustainable Agriculture: A Path Forward",
    date: "June 3, 2026",
    category: "Market Insights",
    readTime: "5 min",
    imgUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Innovations in Vertical Farming Systems",
    date: "June 2, 2026",
    category: "AgriTech",
    readTime: "7 min",
    imgUrl: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

export default function BlogPostPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <div className="bg-[#14532d] text-white pt-16 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <Link href="/blogs" className="inline-flex items-center gap-2 text-green-50/80 hover:text-white text-[13px] font-medium mb-8 transition-colors bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                <ArrowLeft className="w-4 h-4" /> Back to Blogs
              </Link>
              <span className="block text-[12px] font-bold text-[#4ade80] uppercase tracking-widest mb-4">{BLOG.category}</span>
              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight mb-8 drop-shadow-sm">
                {BLOG.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-green-50/90 text-[13px] font-medium">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/5"><User className="w-4 h-4" /> {BLOG.author}</span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/5"><CalendarDays className="w-4 h-4" /> {BLOG.date}</span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/5"><Clock className="w-4 h-4" /> {BLOG.readTime}</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image src={BLOG.imgUrl} alt={BLOG.title} fill className="object-cover" priority />
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
                  <MessageSquare className="w-4 h-4" /> Comments (8)
                </button>
              </div>

              <div className="prose max-w-none text-gray-600 text-[15px] leading-[1.85]">
                <p className="text-[17px] text-gray-700 font-medium leading-relaxed mb-6">
                  Agricultural robotics is no longer a futuristic concept — it is a rapidly scaling reality reshaping how food is grown, harvested, and processed worldwide. From autonomous tractors navigating vast cornfields to delicate fruit-picking robots operating in controlled greenhouse environments, the convergence of artificial intelligence, computer vision, and precision engineering is creating a new paradigm in modern farming.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">The Current Landscape</h2>
                <p>
                  The global agricultural robotics market was valued at USD 5.4 billion in 2025 and is projected to reach USD 16.8 billion by 2035, growing at a CAGR of 12.0%. This rapid expansion is driven by three fundamental forces: persistent labor shortages in rural areas, the increasing affordability of sensor and compute hardware, and the urgent need to increase agricultural productivity to feed a population projected to reach 9.7 billion by 2050.
                </p>
                <p>
                  Today&#39;s agricultural robots fall into several categories: autonomous field vehicles (tractors, sprayers, tillers), aerial platforms (drones for crop scouting and precision spraying), harvesting robots (for fruits, vegetables, and specialty crops), and livestock management systems (automated milking, feeding, and health monitoring). Each category is experiencing its own innovation trajectory with distinct adoption curves across different regions and farm types.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">Key Technologies Driving Adoption</h2>
                <p>
                  Several converging technologies are accelerating the adoption of agricultural robotics. Computer vision systems, trained on millions of annotated crop images, now achieve over 97% accuracy in distinguishing between crops and weeds. This enables autonomous spot-spraying that can reduce herbicide usage by up to 90% compared to broadcast application methods.
                </p>
                <p>
                  Edge AI processors from companies like NVIDIA and Qualcomm allow complex neural network inference to run directly on the robot, eliminating the need for cloud connectivity in areas with limited broadband. Meanwhile, advances in soft robotics are enabling delicate fruit harvesting without bruising — a capability that was considered technically impossible just five years ago.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">Economic Impact on Farm Operations</h2>
                <p>
                  The economic case for agricultural robotics is becoming increasingly compelling. Analysis of 200+ commercial deployments across North America and Europe shows that autonomous tractor systems typically achieve full ROI within 18-24 months for farms exceeding 500 acres. Labor cost savings alone account for 40-60% of the total economic benefit, with additional gains coming from reduced input waste (seeds, fertilizers, chemicals) and increased yield through more precise operations.
                </p>

                <div className="bg-[#f0fdf4] border border-brand-200 rounded-xl p-6 mt-8 mb-4">
                  <p className="text-[14px] text-brand-900 font-semibold mb-2">Key Insight</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    Farms that adopted robotic weeding and precision spraying systems reported a 35% reduction in chemical costs and a 12-18% improvement in overall crop yield within the first two growing seasons.
                  </p>
                </div>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">Regional Adoption Patterns</h2>
                <p>
                  North America and Northern Europe lead in autonomous field equipment adoption, driven by large farm sizes and high labor costs. Asia-Pacific, particularly Japan and South Korea, leads in greenhouse robotics and indoor farming automation. Latin America is emerging as a high-growth market for drone-based crop monitoring, while sub-Saharan Africa is seeing targeted deployments of low-cost sensor networks for smallholder farms.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">Challenges & Barriers</h2>
                <p>
                  Despite the promising trajectory, several challenges remain. The high initial capital cost of autonomous systems puts them out of reach for smallholder farmers who represent the majority of global food producers. Interoperability between different manufacturer&#39;s systems remains limited, creating vendor lock-in risks. Regulatory frameworks for autonomous agricultural vehicles vary widely across jurisdictions, and rural broadband connectivity gaps continue to constrain cloud-dependent applications.
                </p>

                <h2 className="text-[20px] font-bold text-brand-900 mt-10 mb-4">Future Outlook</h2>
                <p>
                  Looking ahead to 2030-2035, we expect to see the emergence of fully autonomous &#34;dark farms&#34; — large-scale operations that run 24/7 with minimal human supervision. The convergence of 5G networks, satellite connectivity, and edge computing will enable real-time fleet coordination of dozens of robots operating simultaneously. The transition from capital-expenditure to Robotics-as-a-Service (RaaS) subscription models will dramatically lower the barrier to entry for mid-sized operations.
                </p>
                <p>
                  The agricultural robotics revolution is not a question of &#34;if&#34; but &#34;when&#34; — and the when is rapidly becoming now.
                </p>
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-[15px] font-bold text-brand-900 mb-4">About the Author</h4>
                <div className="flex gap-5 items-start">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Author" className="w-16 h-16 object-cover rounded-full" />
                  <div>
                    <p className="text-[15px] font-bold text-gray-900">{BLOG.author}</p>
                    <p className="text-[13px] text-brand-600 font-medium mb-2">{BLOG.authorRole}</p>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      Sarah specializes in software ecosystem analysis, cloud adoption in rural networks, and farm management platforms. She tracks venture capital inflows and strategic M&A activities within the precision agriculture sector globally.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Table of Contents */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[16px] font-bold text-brand-900 mb-4">Table of Contents</h3>
                  <ul className="space-y-3">
                    {TABLE_OF_CONTENTS.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[13px] text-gray-600 hover:text-brand-700 cursor-pointer transition-colors">
                        <span className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">{idx + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Blogs */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-[16px] font-bold text-brand-900 mb-5">Related Posts</h3>
                  <div className="space-y-5">
                    {RELATED_BLOGS.map((item, idx) => (
                      <Link key={idx} href="#" className="flex gap-4 group">
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={item.imgUrl} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[13px] font-bold text-gray-900 leading-snug group-hover:text-brand-700 transition-colors line-clamp-2">{item.title}</h4>
                          <span className="text-[11px] text-gray-400 mt-1 block">{item.date} · {item.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#14532d] text-white rounded-2xl p-6">
                  <h3 className="text-[16px] font-bold mb-2">Stay Updated</h3>
                  <p className="text-[12px] text-green-50/80 mb-4">Get the latest insights and analysis delivered to your inbox.</p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full py-2.5 px-4 rounded-lg bg-black/20 border border-transparent text-white placeholder-green-50/50 text-[13px] mb-3 focus:outline-none focus:border-brand-400"
                  />
                  <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-2.5 rounded-lg transition-colors text-[13px]">
                    Subscribe
                  </button>
                </div>

                {/* Reports CTA */}
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
