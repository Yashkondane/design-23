import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function LatestNews() {
  const recentNews = [
    {
      title: "AII Surpasses 20,000 Published Market Research Reports",
      tag: "Milestone",
      date: "June 12, 2026",
      imgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      url: "/news/aii-surpasses-report-milestone"
    },
    {
      title: "AII Partners with Global Agriculture Council for Precision Farming Tracking",
      tag: "Partnership",
      date: "June 5, 2026",
      imgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      url: "/news/aii-partners-agriculture-council"
    },
    {
      title: "AII Wheat and Soy Market Forecast Cited in Bloomberg Intelligence Report",
      tag: "Media",
      date: "May 28, 2026",
      imgUrl: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      url: "/news/aii-cited-bloomberg-report"
    },
    {
      title: "AII Launches Enterprise Research Platform with API Data Access",
      tag: "Product",
      date: "May 20, 2026",
      imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      url: "/news/aii-launches-enterprise-platform"
    },
    {
      title: "AII Named 'Best Agriculture Research Firm 2026' by AgTech Weekly",
      tag: "Award",
      date: "May 10, 2026",
      imgUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      url: "/news/aii-best-research-firm-award"
    },
    {
      title: "AII Publishes 2026 Global Vertical Farming Market Analysis",
      tag: "Research",
      date: "May 5, 2026",
      imgUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      url: "/news/aii-vertical-farming-analysis"
    }
  ];

  return (
    <section className="bg-brand-50 py-20 px-6" aria-label="AII News and Press Releases">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-accent"></span>
            <span className="text-brand-600 text-sm font-bold tracking-wider uppercase">News &amp; Press</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News from Agriculture Industry Insights</h2>
          <p className="text-gray-500 text-[15px] max-w-3xl leading-relaxed">Company announcements, media coverage, research launches, and industry recognition.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Featured News (Left) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-video w-full">
              <Image 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AII Agriculture Global Expansion"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-6 bg-accent text-brand-900 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">Press Release</span>
            </div>
            <div className="p-8">
              <div className="text-sm font-medium text-muted mb-3">June 18, 2026</div>
              <h3 className="text-2xl font-bold text-brand-700 mb-4 hover:text-brand-500 transition-colors">
                <Link href="/news/aii-expands-asia-pacific-coverage">
                  AII Expands Global Agriculture Market Coverage to 38 Countries with New Research Analyst Team Hires
                </Link>
              </h3>
              <p className="text-soil/80 leading-relaxed mb-6">
                Agriculture Industry Insights today announced the expansion of its research capabilities to include 8 new country-level agricultural markets in Asia-Pacific, bringing total geographic coverage to 38 countries. The expansion is supported by senior research analyst hires specializing in irrigation, drone logistics, and climate-smart seeds.
              </p>
              <Link href="/news/aii-expands-asia-pacific-coverage" className="inline-flex items-center font-bold text-brand-600 hover:text-brand-500 transition-colors">
                Read Full Announcement <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* News List (Right) */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="font-bold text-soil text-lg">Recent Updates</h3>
              <Link href="/news" className="text-sm font-medium text-brand-600 hover:text-brand-500 flex items-center">
                View All News <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            <div className="flex flex-col">
              {recentNews.map((item, idx) => (
                <Link href={item.url} className="group flex items-start gap-4 p-5 border-b border-gray-100 hover:bg-brand-50 transition-colors last:border-0" key={idx}>
                  <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image 
                      src={item.imgUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 mb-1">{item.tag}</span>
                    <div className="text-sm font-bold text-soil group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug mb-1.5">{item.title}</div>
                    <div className="text-xs text-muted">{item.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
