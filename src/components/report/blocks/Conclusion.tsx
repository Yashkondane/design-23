import { Target, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react"

export function Conclusion() {
  const sections = [
    {
      icon: <Target className="w-5 h-5 text-brand-600" />,
      title: "Strategic Positioning Recommendations",
      desc: "Equipment vendors should prioritize multi-protocol integration combining legacy machinery with cutting-edge AI inference and computer vision to capture premium enterprise farming wins. Healthcare-grade IoT certification investment is non-negotiable for vendors targeting the fastest-growing livestock monitoring segment. Software developers must invest in open API ecosystems and cross-platform interoperability to accelerate customer time-to-market."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-brand-600" />,
      title: "Investment Attractiveness",
      desc: "The Precision Agriculture Market represents a structurally attractive investment environment given durable multi-decade secular drivers, recurring hardware replacement cycles, and expanding application diversification into yield forecasting and supply chain logistics. The highest conviction investment themes include autonomous drone robotics at a CAGR of 15.2%, localized weather modeling at 14.8% CAGR, and smart irrigation at 12.9% CAGR."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-600" />,
      title: "Market Shifts and Key Risks",
      desc: "The most significant market shift underway is the transition from single-purpose rural hardware toward multi-layered software platforms integrating telemetry, autonomous routing, and predictive yields on a single dashboard. Key risks for the market include accelerated competition from emerging low-cost hardware manufacturers, regulatory fragmentation in emerging markets constraining geographic expansion, and severe supply chain vulnerabilities in semiconductor manufacturing."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-brand-600" />,
      title: "Growth Pathways",
      desc: "Organizations seeking to maximize value from the Precision Agriculture Market should pursue a three-horizon strategy. In the near term (2025-2027), prioritize autonomous equipment deployment and real-time yield analytics to capture premium enterprise wins. In the mid term (2027-2031), invest in edge AI integration and rural 5G connectivity. In the long term (2031-2035), position for ubiquitous ambient sensing infrastructure where precision agriculture serves as the foundational layer across smart rural economies."
    }
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-[22px] font-bold text-brand-600 mb-6">Conclusion and Recommendations</h2>
      
      <div className="bg-[#f0fdf4] border border-brand-500 rounded-[20px] p-8 lg:p-10 shadow-sm">
        <p className="text-[13px] text-gray-700 leading-relaxed mb-8">
          The Precision Agriculture Market is entering a decade of diversified, multi-vertical growth driven by IoT proliferation, rural broadband expansion, and the integration of AI processing at the wireless edge. The market is forecast to grow from USD 8.7 billion in 2025 to USD 22.6 billion by 2035 at a CAGR of 11.2%. Our analysis indicates that this growth reflects both the structural expansion of connected device volumes and the increasing value content per device as autonomous platforms incorporate AI inference, deep learning, and robust computer vision capabilities that command premium pricing.
        </p>

        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-2">
                {sec.icon}
                <h4 className="text-[15px] font-bold text-brand-900">{sec.title}</h4>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed pl-8">
                {sec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
