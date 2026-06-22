import { Cpu, Users, Tractor, Database, ShieldCheck, TrendingUp } from "lucide-react"

export function EcosystemAnalysis() {
  const categories = [
    {
      icon: <Cpu className="w-5 h-5 text-gray-700" />,
      title: "Technology & Innovation",
      points: [
        "AI crop modeling algorithms optimize harvest timelines.",
        "Edge-computing sensors enable real-time soil diagnostics."
      ]
    },
    {
      icon: <Users className="w-5 h-5 text-gray-700" />,
      title: "Farm Operators & End Users",
      points: [
        "Commercial farm operators deploy smart irrigation systems.",
        "Agricultural cooperatives aggregate regional yield data."
      ]
    },
    {
      icon: <Tractor className="w-5 h-5 text-gray-700" />,
      title: "Equipment Manufacturers",
      points: [
        "OEMs integrate autonomous steering into legacy tractors.",
        "Drone manufacturers supply high-payload mapping UAVs."
      ]
    },
    {
      icon: <Database className="w-5 h-5 text-gray-700" />,
      title: "Data & Connectivity Infrastructure",
      points: [
        "Satellite broadband providers bridge rural connectivity gaps.",
        "Cloud IoT gateways centralize massive agronomic datasets."
      ]
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gray-700" />,
      title: "Regulatory & Compliance",
      points: [
        "Environmental agencies monitor acceptable chemical runoff.",
        "Governmental subsidies incentivize eco-friendly upgrades."
      ]
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-gray-700" />,
      title: "Investment & Funding",
      points: [
        "AgTech venture capital drives hardware miniaturization.",
        "Conglomerate acquisitions consolidate fragmented software platforms."
      ]
    }
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-2xl font-bold text-brand-600 mb-6">
        Ecosystem Analysis of the Precision Agriculture Market
      </h2>
<p className="text-gray-600 text-[13px] leading-relaxed max-w-4xl mb-10">
        The Precision Agriculture Market ecosystem comprises technology developers, equipment manufacturers, software integrators, connectivity providers, investors, and farm operators working together to enable seamless data-driven farming. Innovation in low-power communication, autonomous robotics, and edge AI continues to drive market expansion.
      </p>

      <div className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
          {categories.map((cat, idx) => (
            <div className="flex gap-5" key={idx}>
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                {cat.icon}
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-brand-900 mb-2">{cat.title}</h4>
                <ul className="space-y-2">
                  {cat.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-1.5"></div>
                      <span className="text-[13px] text-gray-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
