"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

const tableData = [
  { region: "Asia-Pacific", size25: "$2.0", size35: "$6.7", cagr: "12.9%", driver: "Drone-as-a-service, IoT manufacturing, Gov Subsidies" },
  { region: "Europe", size25: "$1.9", size35: "$5.1", cagr: "10.4%", driver: "Sustainability mandates, smart irrigation, CAP regulations" },
  { region: "Latin America", size25: "$0.4", size35: "$1.3", cagr: "12.5%", driver: "Broadacre exports, fleet telematics, yield mapping" },
  { region: "Middle East & Africa", size25: "$0.4", size35: "$1.3", cagr: "12.5%", driver: "Smart irrigation, vertical farming, mobile advisory" },
  { region: "North America", size25: "$3.1", size35: "$8.2", cagr: "11.4%", driver: "Automated steering, large-scale IoT, OEM developers" }
]

const regionalData = {
  "North America": {
    size25: "$3.1B",
    cagr: "11.4%",
    desc: "North America is the largest regional market for Precision Agriculture. The region is anchored by massive corporate farming operations across the US Midwest and the headquarters of leading AgTech developers like John Deere and Trimble. Stringent environmental regulations and high labor costs reinforce demand for automated steering and high-efficiency sensor networks.",
    primaryDriver: "Automated Steering, Large-scale IoT Deployments, Predictive Analytics",
    countries: [
      { name: "U.S. Precision Ag Market", flag: "us", desc: "The United States represents over 75% of North American Precision Ag revenue, underpinned by the world's highest per-capita agricultural technology expenditure and the headquarters of leading vendors." },
      { name: "Canada Precision Ag Market", flag: "ca", desc: "Canada contributes approximately 15% of North American revenue. Canadian smart farm adoption is expanding rapidly, specifically in broadacre crops across Saskatchewan and Alberta." },
      { name: "Mexico Precision Ag Market", flag: "mx", desc: "Mexico is the fastest-growing Precision Ag Market within North America, driven by the expanding export-oriented specialty crop sector requiring strict supply chain traceability." }
    ]
  },
  "Europe": {
    size25: "$1.9B",
    cagr: "10.4%",
    desc: "Europe is the second-largest Precision Agriculture market region. The region benefits from deep technological integration and stringent EU sustainability mandates (like the Common Agricultural Policy) that heavily incentivize eco-friendly, precise farming techniques. Smart irrigation and livestock monitoring are critical European growth pillars.",
    primaryDriver: "EU Sustainability Mandates, Smart Irrigation, Livestock Health Monitoring",
    countries: [
      { name: "UK Precision Ag Market", flag: "gb", desc: "The United Kingdom is driven by advanced robotic farming trials and a rapidly expanding digital ag-tech ecosystem regulated by the DEFRA." },
      { name: "Germany Precision Ag Market", flag: "de", desc: "Germany is distinguished by automotive industry leadership spilling over into advanced industrial IoT adoption for heavy farm machinery." },
      { name: "France Precision Ag Market", flag: "fr", desc: "France demonstrates strong Precision Ag activity across viticulture and broadacre, supported by the 'France 2030' national investment plan." },
      { name: "Italy Precision Ag Market", flag: "it", desc: "Italy is a growing market driven by smart irrigation components and advanced viticulture sensor networks." },
      { name: "Spain Precision Ag Market", flag: "es", desc: "Spain is experiencing increasing adoption across greenhouse automation and smart water management due to severe drought conditions." },
      { name: "Netherlands Precision Ag Market", flag: "nl", desc: "The Netherlands is a global leader in high-tech greenhouse automation, robotic harvesting, and vertical farming technologies." }
    ]
  },
  "Asia-Pacific": {
    size25: "$2.0B",
    cagr: "12.9%",
    desc: "Asia-Pacific is projected to be the fastest-growing region. Rapid population growth, increasing food demand, and massive governmental initiatives in countries like India and China are accelerating the deployment of smart farming tools, particularly affordable drone-as-a-service models.",
    primaryDriver: "Drone-as-a-service, Government Subsidies, High Population Density",
    countries: [
      { name: "China Precision Ag Market", flag: "cn", desc: "China leads the APAC market, driven by massive state-sponsored agricultural modernization programs and heavy drone deployments." },
      { name: "India Precision Ag Market", flag: "in", desc: "India is experiencing rapid growth fueled by government digitization initiatives and affordable local AgriTech startups." },
      { name: "Australia Precision Ag Market", flag: "au", desc: "Australia features highly advanced broadacre farming operations with near-universal adoption of automated steering." },
      { name: "Japan Precision Ag Market", flag: "jp", desc: "Japan is pioneering autonomous tractors and robotic harvesting to combat severe agricultural labor shortages." }
    ]
  },
  "Middle East & Africa": {
    size25: "$0.4B",
    cagr: "12.5%",
    desc: "The Middle East & Africa represents an emerging frontier for precision agriculture. The Middle East is heavily investing in controlled environment agriculture and smart irrigation to combat extreme aridity, while Africa sees rising adoption of mobile-based farm advisory systems.",
    primaryDriver: "Extreme Aridity Solutions, Mobile Advisory Apps, Controlled Environment Ag",
    countries: [
      { name: "Israel Precision Ag Market", flag: "il", desc: "Israel is a global pioneer in drip irrigation tech and advanced agricultural data analytics startups." },
      { name: "South Africa Precision Ag Market", flag: "za", desc: "South Africa leads the African continent in commercial precision ag, particularly in variable rate technology." },
      { name: "UAE Precision Ag Market", flag: "ae", desc: "The UAE is investing billions into vertical farming and AI-driven greenhouses to ensure national food security." }
    ]
  },
  "Latin America": {
    size25: "$0.4B",
    cagr: "12.5%",
    desc: "Latin America is experiencing steady growth, primarily led by Brazil and Argentina's massive soybean and corn export markets. In these regions, even minor improvements in operational efficiency via precision tech directly impact global competitiveness and raw output tonnage.",
    primaryDriver: "Broadacre Export Markets, Yield Monitoring, Fleet Telematics",
    countries: [
      { name: "Brazil Precision Ag Market", flag: "br", desc: "Brazil dominates the region, with massive corporate farms heavily investing in fleet management and yield mapping for soy and sugarcane." },
      { name: "Argentina Precision Ag Market", flag: "ar", desc: "Argentina shows strong adoption of no-till farming practices paired with advanced variable rate application technologies." },
      { name: "Chile Precision Ag Market", flag: "cl", desc: "Chile focuses precision tech on high-value export crops, utilizing smart irrigation and advanced weather modeling." }
    ]
  }
}

export function RegionalOutlook() {
  const tabs = ["North America", "Europe", "Asia-Pacific", "Middle East & Africa", "Latin America"]
  const [activeTab, setActiveTab] = useState<keyof typeof regionalData>("North America")

  const currentData = regionalData[activeTab]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-[22px] font-bold text-brand-600 mb-2">Regional Outlook</h2>
      <h3 className="text-[17px] font-bold text-brand-900 mb-6">Geographic Performance Snapshot</h3>

      {/* Table */}
      <div className="border border-gray-100 rounded-lg mb-10 overflow-hidden shadow-sm">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-brand-900 text-white">
              <th className="py-4 px-6 font-bold w-1/5">Region ▲</th>
              <th className="py-4 px-6 font-bold">2025 (USD Bn)</th>
              <th className="py-4 px-6 font-bold">2035 (USD Bn)</th>
              <th className="py-4 px-6 font-bold">CAGR (%)</th>
              <th className="py-4 px-6 font-bold">Key Driver</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-gray-800">{row.region}</td>
                <td className="py-4 px-6 text-gray-600">{row.size25}</td>
                <td className="py-4 px-6 text-gray-600">{row.size35}</td>
                <td className="py-4 px-6 font-bold text-brand-600">{row.cagr}</td>
                <td className="py-4 px-6 text-gray-500">{row.driver}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabs / Cards */}
      <div className="flex flex-wrap gap-4 mb-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab
          const rowData = tableData.find(r => r.region === tab)
          const subText = rowData ? `${rowData.size35}B by '35` : ""

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof regionalData)}
              className={`flex-1 min-w-[140px] p-4 rounded-xl border text-left transition-all ${
                isActive
                  ? "bg-brand-900 border-brand-900 shadow-md text-white scale-[1.02] z-10"
                  : "bg-white border-gray-200 text-gray-700 hover:border-brand-300 hover:shadow-sm"
              }`}
            >
              <div className="font-bold text-[15px] mb-1">{tab}</div>
              <div className={`text-[12px] font-bold ${isActive ? 'text-brand-300' : 'text-gray-500'}`}>
                {subText}
              </div>
            </button>
          )
        })}
      </div>

      {/* Main Content Area */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col lg:flex-row gap-10">
        {/* Left Column: Sticky Overview */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-8 h-fit">
          <h3 className="text-[22px] leading-tight font-bold text-brand-900 mb-6">
            {activeTab} Precision Agriculture Market
          </h3>
          
          <div className="flex gap-4 mb-6">
            <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">2025 Size</div>
              <div className="text-[20px] font-bold text-brand-900">{currentData.size25}</div>
            </div>
            <div className="flex-1 bg-brand-50 rounded-lg p-4 border border-brand-100">
              <div className="text-[10px] font-bold text-brand-700 uppercase tracking-wider mb-1">CAGR</div>
              <div className="text-[20px] font-bold text-brand-600">{currentData.cagr}</div>
            </div>
          </div>

          <p className="text-[13px] text-gray-600 leading-relaxed mb-8">
            {currentData.desc}
          </p>

          <div className="bg-gray-50 border border-gray-100 border-l-[4px] border-l-amber-400 rounded-r-lg p-5">
            <p className="text-[12px] text-gray-600">
              <span className="font-bold text-brand-900">Primary Driver: </span>
              {currentData.primaryDriver}
            </p>
          </div>
        </div>

        {/* Right Column: Country Grid */}
        <div className="w-full lg:w-[65%]">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-brand-600" />
            <h4 className="text-[15px] font-bold text-brand-900">Key National Markets</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentData.countries.map((country, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={`https://flagcdn.com/w40/${country.flag}.png`} 
                    alt={`${country.name} flag`} 
                    className="w-6 h-auto rounded-sm border border-gray-200 shadow-sm"
                  />
                  <h5 className="font-bold text-[14px] text-brand-900 leading-tight">{country.name}</h5>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  {country.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
