import { LineChart, BookOpen, Building2, PieChart, TrendingUp, ArrowRight } from "lucide-react"

const FEATURES = [
  {
    title: "Market Intelligence",
    icon: LineChart,
    desc: "We provide high-quality Syndicated and Custom Research insights using statistical representation of data by synthesizing a range of secondary and primary sources."
  },
  {
    title: "Comprehensive Databooks",
    icon: BookOpen,
    desc: "Availability of Market Databooks with proven historical numbers along with driven market estimation data through strategic implementation and predictive modeling."
  },
  {
    title: "Industry Profiles",
    icon: Building2,
    desc: "Detailed information of company and industry profiles, financial data, investment insights, business periodicals, and Mergers & Acquisitions along with SWOT analysis."
  },
  {
    title: "Segmental Analysis",
    icon: PieChart,
    desc: "Complete analysis of all the segments covered in the reports, with their market dynamics to get an overall understanding of the current global market scenario."
  },
  {
    title: "Competitive Landscape",
    icon: TrendingUp,
    desc: "Evaluating competitive marketing effectiveness through comprehensive analysis to gain a complete sense of the specific market that will impact your revenue."
  }
]

export function AboutUs() {
  return (
    <section className="py-12 lg:py-16 bg-brand-50/40 border-t border-brand-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          
          {/* Header Block */}
          <div className="bg-transparent rounded-2xl p-4 lg:p-6 flex flex-col justify-center">
            <h2 className="text-2xl lg:text-[28px] font-extrabold text-brand-900 mb-4 leading-tight tracking-tight">
              Why Choose Agriculture Industry Insights?
            </h2>
            <p className="text-[13px] lg:text-sm text-gray-600 mb-8 leading-relaxed">
              With Agriculture Industry Insights, gain access to reliable research reports and expert analysis across all agricultural segments and global markets.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border border-brand-200 bg-white text-brand-700 hover:bg-brand-50 hover:border-brand-300 font-semibold py-2.5 px-5 rounded-lg transition-all w-fit text-sm shadow-sm"
            >
              Learn about our methodology
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Feature Cards */}
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 lg:p-7 shadow-sm border border-gray-100/80 hover:shadow-md hover:border-brand-200 transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-brand-50/80 flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors duration-300 border border-brand-100/50">
                <feature.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg lg:text-[19px] font-bold text-brand-900 mb-2.5 tracking-tight">{feature.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed flex-grow">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
