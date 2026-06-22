import { 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Database, 
  BarChart2, 
  Search,
  CheckCircle2
} from "lucide-react"

const REASONS = [
  {
    title: "Accurate Market Positionings",
    desc: "Identify your true competitive edge with granular market positioning services and make confident, data-driven decisions.",
    icon: Target,
  },
  {
    title: "Estimates & Forecasts",
    desc: "Access highly accurate estimates and forward-looking forecasts powered by expert analysis and advanced models.",
    icon: TrendingUp,
  },
  {
    title: "Data Assurance Checks",
    desc: "We run rigorous validation checks across multiple data models to ensure maximum accuracy and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Profound Data Sources",
    desc: "Leverage deep-rooted, verified, and continuously updated data from trusted global sources and industry providers.",
    icon: Database,
  },
  {
    title: "Analysis With Clarity",
    desc: "Our refined market taxonomy and clear insights cut through the noise—so you can focus on what drives growth.",
    icon: BarChart2,
  },
  {
    title: "Deep-Dive Insights",
    desc: "Go beyond the surface with in-depth intelligence that uncovers opportunities, risks, and trends others might miss.",
    icon: Search,
  },
]

export function WhyUs() {
  return (
    <section className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-brand-100/50">
            <CheckCircle2 className="w-4 h-4" />
            THE ADVANTAGE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-5">
            Why <span className="text-brand-700">Agriculture</span> Industry Insights?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Empowering your strategic decisions with accurate, reliable, and actionable market intelligence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-200/40 border border-gray-100 hover:shadow-xl hover:shadow-brand-100/50 hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-brand-700 transition-colors">{reason.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
