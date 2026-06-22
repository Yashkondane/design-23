import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

// Helper function to un-slugify for display
function formatTitle(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Dummy data for this category
const CATEGORY_REPORTS = [
  {
    title: "Global Market Analysis 2026-2035",
    desc: "Comprehensive analysis of market trends, regional growth, and competitive landscape.",
    date: "20 Jun 2026",
    slug: "global-market-analysis"
  },
  {
    title: "Investment Trends and Future Outlook",
    desc: "Key player innovations, startup funding, and future outlook for the rapidly growing sector.",
    date: "12 Jun 2026",
    slug: "investment-trends"
  },
  {
    title: "Regulatory Impact Assessment",
    desc: "Detailed look at how upcoming policies will affect supply chains and production costs.",
    date: "10 Jun 2026",
    slug: "regulatory-impact"
  },
]

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "unknown-category";
  const categoryName = formatTitle(slug);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-[#14532d] text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <span className="text-brand-300 font-semibold tracking-wider uppercase text-sm mb-4 block">Category</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{categoryName}</h1>
            <p className="text-green-50/90 text-lg max-w-2xl mx-auto">
              Explore our latest research, analysis, and insights specifically focused on {categoryName}.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">Reports in this Category</h2>
            <button className="flex items-center gap-2 text-[13px] text-gray-600 font-medium border border-gray-200 px-4 py-2 rounded-lg bg-white hover:bg-gray-50 transition-colors">
              Sort by: Latest
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CATEGORY_REPORTS.map((report, idx) => (
              <Link
                key={idx}
                href={`/report/${report.slug}`}
                className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-md hover:border-brand-500 transition-all duration-300 group flex flex-col h-full overflow-hidden"
              >
                <div className="relative h-32 flex-shrink-0 bg-gradient-to-br from-brand-600 via-brand-700 to-gray-900 text-white p-4 flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="0.5">
                      <path d="M0,50 Q50,100 100,50" />
                      <path d="M0,60 Q50,110 100,60" />
                    </svg>
                  </div>
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-white text-brand-700 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">REPORT</span>
                  </div>
                  <div className="relative z-10 text-sm font-bold mt-auto tracking-wide">2026</div>
                </div>

                <div className="flex flex-col flex-grow p-5 min-w-0">
                  <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider mb-2">{categoryName}</span>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-700 transition-colors line-clamp-2">
                    {categoryName} {report.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-6">{report.desc}</p>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-400 font-medium mb-0.5">Pub Date</span>
                      <span className="text-[10px] text-gray-700 font-semibold leading-tight">{report.date}</span>
                    </div>
                    <span className="text-brand-600 hover:text-brand-800 text-[11px] font-bold flex items-center gap-1 transition-colors group/link whitespace-nowrap">
                      Read Report
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border border-gray-200 text-gray-700 hover:border-brand-500 hover:text-brand-700 font-semibold py-3 px-8 rounded-lg transition-colors text-[14px] shadow-sm">
              Load More
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
