"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Download } from "lucide-react"

const tabData = {
  "By Component": {
    chartData: [
      { name: "Hardware", "2025 Size (USD Bn)": 4.7, "2035 Forecast (USD Bn)": 12.1, cagr: "9.9%" },
      { name: "Software", "2025 Size (USD Bn)": 1.7, "2035 Forecast (USD Bn)": 5.8, cagr: "13.0%" },
      { name: "Services", "2025 Size (USD Bn)": 1.4, "2035 Forecast (USD Bn)": 4.7, cagr: "12.8%" },
    ],
    title: "How Do Hardware and Software Components Define the Core Architecture?",
    descriptions: [
      { title: "Hardware", desc: "The Hardware segment dominates, led by IoT sensor networks and automated steering systems that integrate precision control within a single package. Drones and Development Boards serve mapping and yield prototyping needs, while intelligent irrigation controls represent high-volume specific hardware sub-segments." },
      { title: "Software", desc: "The Software segment is growing fastest, with SaaS demand accelerating as cloud ecosystems mature. Farm management platforms and predictive analytics engines provide the essential data capabilities required to rapidly deploy precision operational profiles." },
      { title: "Services", desc: "Managed Services and Professional Services are expanding as commercial farms outsource rural network operations, custom hardware integration, and large-scale fleet management responsibilities to specialized integrators." }
    ],
    subSegments: [
      { title: "Hardware", items: "Sensors, Drones, Automated Steering Systems, GPS Receivers, Variable Rate Controllers" },
      { title: "Software", items: "Farm Management Systems, Predictive Analytics, Crop Modeling SaaS" },
      { title: "Services", items: "System Integration, Managed Data Services, Professional Agronomy Consulting" }
    ]
  },
  "By Organisation Size": {
    chartData: [
      { name: "Large Farms", "2025 Size (USD Bn)": 4.9, "2035 Forecast (USD Bn)": 11.2, cagr: "8.6%" },
      { name: "Medium Farms", "2025 Size (USD Bn)": 1.8, "2035 Forecast (USD Bn)": 6.1, cagr: "13.0%" },
      { name: "Small Farms", "2025 Size (USD Bn)": 1.1, "2035 Forecast (USD Bn)": 5.3, cagr: "17.0%" },
    ],
    title: "How Do Different Farm Sizes Drive Market Penetration?",
    descriptions: [
      { title: "Large Farms", desc: "Large commercial farming operations continue to dominate precision ag revenue, driven by aggressive economies of scale and their ability to amortize high initial CAPEX across massive acreage. These operations prioritize autonomous machinery and enterprise-grade predictive analytics." },
      { title: "Medium Farms", desc: "Medium-sized operations are the fastest-growing segment in terms of absolute volume, as hardware costs decline and user-friendly SaaS platforms lower the barrier to entry for intelligent yield optimization." },
      { title: "Small Farms", desc: "Small farms historically lagged in adoption but are now exhibiting the highest CAGR, spurred by affordable drone-as-a-service (DaaS) models, cooperative equipment sharing, and government subsidies for sustainable practices." }
    ],
    subSegments: [
      { title: "Large Farms", items: "> 1,000 Acres, Corporate Agriculture, Cooperative Mega-Farms" },
      { title: "Medium Farms", items: "250 - 1,000 Acres, Family-owned Commercial Operations" },
      { title: "Small Farms", items: "< 250 Acres, Specialty Crop Growers, Urban Farming Collectives" }
    ]
  },
  "By Application": {
    chartData: [
      { name: "Yield Monitoring", "2025 Size (USD Bn)": 2.8, "2035 Forecast (USD Bn)": 6.5, cagr: "8.8%" },
      { name: "Smart Irrigation", "2025 Size (USD Bn)": 2.1, "2035 Forecast (USD Bn)": 8.1, cagr: "14.5%" },
      { name: "Crop Scouting", "2025 Size (USD Bn)": 1.6, "2035 Forecast (USD Bn)": 4.9, cagr: "11.8%" },
      { name: "Field Mapping", "2025 Size (USD Bn)": 1.3, "2035 Forecast (USD Bn)": 3.1, cagr: "9.1%" },
    ],
    title: "Which Precision Applications Offer the Highest ROI?",
    descriptions: [
      { title: "Yield Monitoring", desc: "Historically the bedrock of precision agriculture, yield monitoring provides baseline data for harvest efficiency. Growth remains steady as legacy combines are retrofitted with modern telematics." },
      { title: "Smart Irrigation", desc: "Propelled by critical water scarcity and climate change pressures, Smart Irrigation is the fastest-growing application. IoT-enabled soil moisture sensors paired with automated valves deliver massive cost and resource savings." },
      { title: "Crop Scouting & Field Mapping", desc: "Drone-based spectral imaging and AI-driven disease identification have revolutionized crop scouting, transitioning it from a manual, labor-intensive process to an automated, real-time diagnostic capability." }
    ],
    subSegments: [
      { title: "Yield Monitoring", items: "On-combine Sensors, Grain Quality Analysis, Biomass Measurement" },
      { title: "Smart Irrigation", items: "Soil Moisture Probes, Weather Integration, Variable Rate Irrigation (VRI)" },
      { title: "Crop Scouting", items: "UAV Imaging, Pest Detection AI, Weed Mapping, NDVI Analysis" },
      { title: "Field Mapping", items: "GIS Systems, Soil Sampling Integration, Boundary Mapping" }
    ]
  },
  "By End-User": {
    chartData: [
      { name: "Farmers/Growers", "2025 Size (USD Bn)": 5.2, "2035 Forecast (USD Bn)": 13.5, cagr: "10.0%" },
      { name: "Agronomy Co-ops", "2025 Size (USD Bn)": 1.8, "2035 Forecast (USD Bn)": 5.1, cagr: "11.0%" },
      { name: "Research/Gov", "2025 Size (USD Bn)": 0.8, "2035 Forecast (USD Bn)": 4.0, cagr: "17.5%" },
    ],
    title: "Who Are the Primary Consumers of Precision Technology?",
    descriptions: [
      { title: "Farmers & Growers", desc: "Direct adoption by independent farmers and corporate growers remains the largest revenue channel, primarily focused on hardware procurement and SaaS subscriptions for immediate field-level ROI." },
      { title: "Agronomy Co-ops", desc: "Agricultural cooperatives are increasingly acting as technology brokers, purchasing enterprise-grade analytics platforms and expensive hardware (like drones) to lease as a service to their member base." },
      { title: "Research & Government", desc: "While currently a smaller segment, research institutions and government bodies are aggressively funding smart agriculture initiatives to ensure national food security and environmental sustainability." }
    ],
    subSegments: [
      { title: "Farmers/Growers", items: "Independent Farm Owners, Corporate Agricultural Firms, Orchard Operators" },
      { title: "Agronomy Co-ops", items: "Farming Cooperatives, Equipment Dealerships, Ag-Service Providers" },
      { title: "Research/Gov", items: "Universities, Environmental Protection Agencies, National Ag Departments" }
    ]
  }
}

export function SegmentationAnalysis() {
  const tabs = ["By Component", "By Organisation Size", "By Application", "By End-User"]
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>("By Component")

  const currentData = tabData[activeTab]

  return (
    <div className="mt-12 mb-12 pt-8">
      {/* Header Block */}
      <div className="mb-6 pl-4 border-l-[3px] border-l-brand-600">
        <h2 className="text-2xl font-bold text-brand-600 mb-2">How Is the Precision Agriculture Market Segmented?</h2>
        <p className="text-gray-500 text-[15px]">Deep-dive into market composition and granular growth forecasts.</p>
      </div>
      {/* Main Container */}
      <div className="bg-white rounded-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof tabData)}
              className={`px-6 py-4 text-[13px] font-bold whitespace-nowrap border-b-[3px] transition-colors ${
                activeTab === tab
                  ? "border-brand-500 text-brand-700"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-8">
          {/* Chart Legend */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#86efac]"></div>
              <span className="text-[12px] font-bold text-gray-600">2025 Size (USD Bn)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-brand-600"></div>
              <span className="text-[12px] font-bold text-gray-600">2035 Forecast (USD Bn)</span>
            </div>
          </div>

          {/* Chart Area */}
          <div className="h-[280px] w-full mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData.chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  axisLine={{ stroke: '#E5E7EB' }}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="2025 Size (USD Bn)" fill="#86efac" radius={[2, 2, 0, 0]} barSize={40} />
                <Bar dataKey="2035 Forecast (USD Bn)" fill="#16a34a" radius={[2, 2, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Table Header Section */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[17px] font-bold text-brand-600">
              {currentData.title}
            </h3>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          {/* Data Table */}
          <div className="border border-gray-100 rounded-lg mb-8 overflow-hidden">
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="py-4 px-6 font-bold text-brand-600 w-1/4">Segment Item</th>
                  <th className="py-4 px-6 font-bold text-brand-600">2025 (USD Bn)</th>
                  <th className="py-4 px-6 font-bold text-brand-600">2035 (USD Bn)</th>
                  <th className="py-4 px-6 font-bold text-brand-600">CAGR (26-35)</th>
                </tr>
              </thead>
              <tbody>
                {currentData.chartData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-brand-600">{row.name}</td>
                    <td className="py-4 px-6 text-gray-600">${row["2025 Size (USD Bn)"]}</td>
                    <td className="py-4 px-6 text-gray-600">${row["2035 Forecast (USD Bn)"]}</td>
                    <td className="py-4 px-6">
                      <span className="bg-brand-50 text-brand-700 px-2 py-1 rounded-[4px] font-bold text-[11px]">
                        {row.cagr}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Text Descriptions */}
          <div className="space-y-6 mb-8">
            {currentData.descriptions.map((desc, idx) => (
              <div key={idx}>
                <h4 className="text-[14px] font-bold text-brand-800 mb-2">{desc.title}</h4>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  {desc.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Sub-Segmentation Box */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h4 className="text-[14px] font-bold text-brand-800 mb-4">Detailed Sub-Segmentation:</h4>
            <ul className="space-y-3">
              {currentData.subSegments.map((sub, idx) => (
                <li key={idx} className="text-[13px] text-gray-600">
                  <span className="font-bold text-brand-800">{sub.title}: </span>
                  {sub.items}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
