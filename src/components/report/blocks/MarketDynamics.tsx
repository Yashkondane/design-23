import { Search, TrendingUp, AlertTriangle, Target } from "lucide-react"

export function MarketDynamics() {
  const tableData = [
    { driver: "Smart Irrigation Sensor Adoption", type: "DRIVER", typeColor: "text-green-600 bg-green-50", impact: "+1.8%", impactColor: "text-green-600", geo: "North America, Europe", timeline: "2026-2035" },
    { driver: "Autonomous Tractor Deployments", type: "DRIVER", typeColor: "text-green-600 bg-green-50", impact: "+1.5%", impactColor: "text-green-600", geo: "Global (all regions)", timeline: "2025-2032" },
    { driver: "Ag-Data Interoperability Standards", type: "DRIVER", typeColor: "text-green-600 bg-green-50", impact: "+0.9%", impactColor: "text-green-600", geo: "Global", timeline: "2026-2033" },
    { driver: "Drone-based Yield Mapping", type: "OPPORTUNITY", typeColor: "text-amber-600 bg-amber-50", impact: "+1.1%", impactColor: "text-green-600", geo: "North America, APAC", timeline: "2025-2035" },
    { driver: "Supply Chain Traceability", type: "OPPORTUNITY", typeColor: "text-amber-600 bg-amber-50", impact: "+1.2%", impactColor: "text-green-600", geo: "North America, Europe", timeline: "2025-2030" },
    { driver: "Edge-AI Crop Diagnostics", type: "OPPORTUNITY", typeColor: "text-amber-600 bg-amber-50", impact: "+0.8%", impactColor: "text-green-600", geo: "Global", timeline: "2026-2035" },
    { driver: "Rural Broadband Connectivity Gaps", type: "RESTRAINT", typeColor: "text-red-600 bg-red-50", impact: "-0.9%", impactColor: "text-red-600", geo: "Rural markets globally", timeline: "Ongoing" },
    { driver: "High Initial Capital Expenditure", type: "RESTRAINT", typeColor: "text-red-600 bg-red-50", impact: "-0.7%", impactColor: "text-red-600", geo: "Developing regions, APAC", timeline: "Ongoing" },
    { driver: "Data Privacy & Ownership Concerns", type: "RESTRAINT", typeColor: "text-red-600 bg-red-50", impact: "-0.6%", impactColor: "text-red-600", geo: "All regions", timeline: "2025-2030" },
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-2xl font-bold text-brand-600 mb-6">
        Market Drivers & Dynamics
      </h2>
      <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
        What Are the Key Market Drivers, Breakthroughs, and Investment Opportunities that Will Shape the Precision Agriculture Market Industry in the Next Decade?
      </p>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] border border-gray-200 mb-12 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
          <h4 className="font-bold text-brand-700 text-[15px]">Interactive Dataset</h4>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500 w-64 bg-white" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead>
              <tr className="bg-brand-900 text-white">
                <th className="py-4 px-6 font-semibold w-1/3">Drivers / Trends / Restraints ▲</th>
                <th className="py-4 px-6 font-semibold">Type</th>
                <th className="py-4 px-6 font-semibold">(+/-) % Impact on CAGR</th>
                <th className="py-4 px-6 font-semibold">Geographic Relevance</th>
                <th className="py-4 px-6 font-semibold">Impact Timeline</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-gray-800 font-medium">{row.driver}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-[4px] text-[10px] font-bold tracking-wider ${row.typeColor}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className={`py-4 px-6 font-bold ${row.impactColor}`}>{row.impact}</td>
                  <td className="py-4 px-6 text-gray-500">{row.geo}</td>
                  <td className="py-4 px-6 text-gray-500 font-medium">{row.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid of Drivers and Inhibitors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Drivers */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h3 className="text-[17px] font-bold text-brand-700">What Are the Growth Drivers?</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug">Rapid Proliferation of IoT Devices</h4>
              <p className="text-[13px] text-gray-600 leading-relaxed">The exponential growth of Internet of Things deployments is one of the most powerful structural tailwinds. Smart sensors, automated steering components, and rural gateways are among high-volume categories driving sustained precision ag demand.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug">Acceleration of Connected Farm Equipment</h4>
              <p className="text-[13px] text-gray-600 leading-relaxed">The rapid digitization of farm operations is creating strong structural demand for connected OEM equipment. Commercial farms are deploying real-time location systems to track heavy machinery, driving incremental demand for protocol stacks.</p>
            </div>
          </div>
        </div>

        {/* Inhibitors */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h3 className="text-[17px] font-bold text-brand-700">What Are the Growth Inhibitors?</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug">Rural Broadband Connectivity Gaps</h4>
              <p className="text-[13px] text-gray-600 leading-relaxed">Lack of reliable high-speed internet in remote agricultural areas poses a persistent operational constraint. In high-density crop environments, localized networks experience increased packet loss, requiring sophisticated engineering resources that increase deployment complexity.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[15px] font-bold text-gray-900 mb-3 leading-snug">High Initial Capital Expenditure</h4>
              <p className="text-[13px] text-gray-600 leading-relaxed">The massive upfront cost required to overhaul legacy farming infrastructure with automated machinery and sensor grids substantially hinders rapid adoption rates among small-to-medium sized farm operators in developing markets.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Opportunities (Dark Blue section) */}
      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-brand-600" />
          <h3 className="text-[17px] font-bold text-brand-700">What Are the Growth Opportunities?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-900 text-white rounded-xl p-6 shadow-md hover:-translate-y-1 transition-transform">
            <h4 className="text-[15px] font-bold text-white mb-3 leading-snug">Expansion of Autonomous Equipment</h4>
            <p className="text-[13px] text-brand-50 leading-relaxed">The OEM industry represents an expanding opportunity, with autonomous steering and yield diagnostics increasingly specified as standard equipment for hands-free routing. Manufacturers are integrating telemetry systems to enable over-the-air update capabilities.</p>
          </div>
          <div className="bg-brand-900 text-white rounded-xl p-6 shadow-md hover:-translate-y-1 transition-transform">
            <h4 className="text-[15px] font-bold text-white mb-3 leading-snug">Growth of Edge-AI Crop Diagnostics</h4>
            <p className="text-[13px] text-brand-50 leading-relaxed">The expanding machine learning peripheral market is creating new high-throughput, low-latency demand vectors. Drone manufacturers require reliable high-bandwidth data transfer that next-gen AI inference nodes can deliver at the field level.</p>
          </div>
          <div className="bg-brand-900 text-white rounded-xl p-6 shadow-md hover:-translate-y-1 transition-transform">
            <h4 className="text-[15px] font-bold text-white mb-3 leading-snug">Deployment of Large-Scale Sensor Networks</h4>
            <p className="text-[13px] text-brand-50 leading-relaxed">Large-scale soil mapping deployments represent a structurally attractive growth opportunity, enabled by ultra-low-power networking capabilities. Logistics operators are investing in resilient sensor infrastructure to support dynamic supply chain engagement.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
