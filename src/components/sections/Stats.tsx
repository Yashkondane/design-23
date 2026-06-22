import { FileText, Globe, Users, TrendingUp } from "lucide-react"

const STATS = [
  {
    label: "Total Reports",
    value: "1,200+",
    icon: FileText,
    desc: "Comprehensive research reports covering all agricultural sectors."
  },
  {
    label: "Countries Covered",
    value: "50+",
    icon: Globe,
    desc: "Global insights with hyper-local data and regional analysis."
  },
  {
    label: "Active Subscribers",
    value: "10k+",
    icon: Users,
    desc: "Trusted by industry leaders, investors, and agribusiness professionals."
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: TrendingUp,
    desc: "Consistently delivering high-quality, actionable market intelligence."
  }
]

export function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-700 font-bold tracking-wider uppercase text-sm mb-3 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are the leading provider of agricultural market intelligence, 
            empowering businesses to make data-driven decisions on a global scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx} 
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300 group shadow-sm hover:shadow-xl hover:shadow-brand-100/50"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  {stat.label}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
