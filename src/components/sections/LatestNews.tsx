import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { InteractiveMarquee } from "@/components/ui/interactive-marquee"
import Link from "next/link"

const NEWS = [
  {
    title: "John Deere Unveils Next-Gen Autonomous Tractor with AI Capabilities",
    desc: "The new machine integrates advanced machine learning models to optimize planting and harvesting without human intervention.",
    date: "June 15, 2026",
    imgUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tractor in field"
  },
  {
    title: "India's Agri Exports Reach Record High in FY 2026",
    desc: "Driven by strong demand for rice and marine products, the country's agricultural exports surged past projected targets this year.",
    date: "June 14, 2026",
    imgUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Agriculture field"
  },
  {
    title: "Global Fertilizer Prices Show Steady Decline",
    desc: "Easing supply chain disruptions and lower natural gas prices have contributed to a global stabilization in essential fertilizer costs.",
    date: "June 15, 2026",
    imgUrl: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Planting seeds"
  },
  {
    title: "Agri Drone Startups Raise $120M in Q2 2026",
    desc: "Venture capital continues to flow into aerial crop monitoring as precision agriculture becomes the standard for large-scale farms.",
    date: "June 13, 2026",
    imgUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Drone flying over crop"
  },
  {
    title: "World Bank Invests $500M in Sustainable Agriculture Projects",
    desc: "The new funding aims to support climate-resilient farming practices across developing nations over the next five years.",
    date: "June 14, 2026",
    imgUrl: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Silos and farming"
  },
  {
    title: "Demand for Dairy Products to Grow 18% by 2030: Report",
    desc: "Changing dietary habits and rising populations in emerging economies are expected to drive unprecedented growth in global dairy consumption.",
    date: "June 12, 2026",
    imgUrl: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Dairy cows"
  },
  {
    title: "New AI Models Predict Crop Disease Outbreaks with 95% Accuracy",
    desc: "Researchers have developed a breakthrough algorithm that analyzes satellite imagery and weather patterns to forecast blight before it strikes.",
    date: "June 11, 2026",
    imgUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Crop disease"
  },
  {
    title: "Sustainable Packaging Initiatives Gain Momentum in Food Processing",
    desc: "Major food manufacturers are pledging to eliminate single-use plastics from their supply chains by 2030 in response to consumer pressure.",
    date: "June 10, 2026",
    imgUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sustainable packaging"
  }
]

export function LatestNews() {
  const featuredNews = NEWS[0];
  const sidebarNews = NEWS.slice(1, 4);

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Industry Updates</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Latest News</h2>
          </div>
          <Link
            href="/news"
            className="text-brand-700 font-semibold flex items-center gap-2 hover:text-brand-800 transition-colors bg-brand-50 px-4 py-2 rounded-lg"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured Article (Left) */}
          <Link
            href={`/news/${featuredNews.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="lg:col-span-8 group flex flex-col"
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-md border border-gray-100">
              <Image
                src={featuredNews.imgUrl}
                alt={featuredNews.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase px-3 py-1.5 rounded shadow-sm tracking-wide">
                Top Story
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <span className="font-bold text-brand-700 uppercase tracking-wider text-xs">AgriTech</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="font-medium text-red-600">2 hours ago</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4 group-hover:text-brand-700 transition-colors">
              {featuredNews.title}
            </h3>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed line-clamp-3">
              {featuredNews.desc}
            </p>
          </Link>

          {/* Sidebar News (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Trending Now
            </h4>
            
            {sidebarNews.map((item, idx) => (
              <Link
                key={idx}
                href={`/news/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="group flex gap-5 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="relative w-28 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                  <Image
                    src={item.imgUrl}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium mb-1.5 uppercase tracking-wide">
                    <span className="text-brand-600">Markets</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{idx === 0 ? '5h ago' : item.date}</span>
                  </div>
                  
                  <h5 className="text-[15px] font-bold text-gray-900 leading-snug group-hover:text-brand-700 transition-colors line-clamp-3">
                    {item.title}
                  </h5>
                </div>
              </Link>
            ))}
            
            <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <p className="text-sm text-gray-600 font-medium mb-3">Get daily agriculture news delivered to your inbox.</p>
              <div className="flex">
                <input type="email" placeholder="Email address" className="w-full px-3 py-2 text-sm rounded-l-lg border border-gray-300 focus:outline-none focus:border-brand-500" />
                <button className="bg-brand-700 hover:bg-brand-800 text-white px-4 text-sm font-bold rounded-r-lg transition-colors">Join</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
