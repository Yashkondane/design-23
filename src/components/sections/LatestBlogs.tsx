import Image from "next/image"
import { ArrowRight, Clock, CalendarDays } from "lucide-react"
import { InteractiveMarquee } from "@/components/ui/interactive-marquee"
import Link from "next/link"

const BLOGS = [
  {
    title: "The Future of Agricultural Robotics",
    desc: "A deep dive into how robotics and AI are reshaping the agriculture industry.",
    category: "Analysis",
    date: "June 9, 2026",
    readTime: "6 min read",
    imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Robotics"
  },
  {
    title: "Impact of Climate Change on Crop Yields",
    desc: "Understanding climate risks and strategies to build a more resilient agriculture system.",
    category: "Sustainability",
    date: "June 7, 2026",
    readTime: "5 min read",
    imgUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sustainability"
  },
  {
    title: "How AI is Transforming Agriculture",
    desc: "From predictive analytics to smart decision-making - AI is shaping the future of farming.",
    category: "Technology",
    date: "June 5, 2026",
    readTime: "5 min read",
    imgUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Technology"
  },
  {
    title: "Sustainable Agriculture: A Path Forward",
    desc: "How regenerative practices can restore soil health and ensure long-term food security.",
    category: "Market Insights",
    date: "June 3, 2026",
    readTime: "5 min read",
    imgUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Market Insights"
  },
  {
    title: "Innovations in Vertical Farming Systems",
    desc: "Exploring how vertical farms are maximizing yields in urban environments.",
    category: "AgriTech",
    date: "June 2, 2026",
    readTime: "7 min read",
    imgUrl: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Vertical farming"
  },
  {
    title: "Water Management and Smart Irrigation",
    desc: "How IoT sensors are helping farmers conserve water while improving crop health.",
    category: "Sustainability",
    date: "May 30, 2026",
    readTime: "4 min read",
    imgUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Irrigation"
  },
  {
    title: "The Rise of Plant-Based Alternative Proteins",
    desc: "Analyzing the market shift towards alternative proteins and what it means for traditional agriculture.",
    category: "Analysis",
    date: "May 28, 2026",
    readTime: "6 min read",
    imgUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Plant-based proteins"
  },
  {
    title: "Blockchain for Agricultural Supply Chains",
    desc: "Enhancing transparency and traceability from farm to fork using blockchain technology.",
    category: "Technology",
    date: "May 25, 2026",
    readTime: "8 min read",
    imgUrl: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Blockchain in supply chain"
  }
]

export function LatestBlogs() {
  return (
    <section className="py-10 lg:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Latest Blogs &amp; Insights</h2>
          <a
            href="/blogs"
            className="text-brand-700 font-semibold flex items-center gap-2 hover:text-brand-800 transition-colors"
          >
            View All Blogs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Blogs Marquee */}
        <div className="w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          <InteractiveMarquee direction="forward" speed={1.2}>
            {BLOGS.map((blog, idx) => (
              <Link key={idx} href={`/blogs/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="group flex flex-col h-[400px] cursor-pointer w-[350px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md shadow-gray-200/40 hover:shadow-xl hover:shadow-brand-100/50 hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-48 overflow-hidden mb-5 flex-shrink-0">
                  <Image
                    src={blog.imgUrl}
                    alt={blog.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col flex-1 px-6 pb-6">
                  <span className="text-xs font-bold text-brand-700 tracking-widest uppercase block mb-3">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed flex-1">
                    {blog.desc}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mt-auto pt-4 border-t border-gray-50">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4 text-gray-400" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </InteractiveMarquee>
        </div>
      </div>
    </section>
  )
}
