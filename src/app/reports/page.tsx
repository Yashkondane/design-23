"use client"
import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, Search, ChevronDown } from "lucide-react"
import Link from "next/link"

const CATEGORIES = [
  "All Reports",
  "AgriTech & Innovation",
  "Precision Agriculture",
  "Farm Equipment & Machinery",
  "Irrigation & Water Management",
  "Livestock Monitoring",
  "Agrochemicals & Fertilizers",
  "Supply Chain & Logistics",
  "Vertical Farming",
  "Drone Technology",
  "Climate-Smart Agriculture",
]

const REPORTS = [
  {
    title: "Global Precision Agriculture Market Size, Share & Forecast 2026–2035",
    desc: "The global precision agriculture market was valued at USD 8.7 billion in 2025 and is projected to reach USD 22.6 billion by 2035, at a CAGR of 11.2%.",
    date: "20 Jun 2026",
    category: "Precision Agriculture",
    slug: "precision-agriculture-market",
  },
  {
    title: "Agricultural Robotics Industry Analysis & Forecast 2026–2035",
    desc: "Key player innovations, market size and future outlook for the rapidly growing agricultural robotics sector globally.",
    date: "12 Jun 2026",
    category: "AgriTech & Innovation",
    slug: "agricultural-robotics-market",
  },
  {
    title: "Smart Irrigation Market Trends & Forecast 2026–2035",
    desc: "Technology advancements, adoption insights and forecast for the global smart irrigation systems market.",
    date: "10 Jun 2026",
    category: "Irrigation & Water Management",
    slug: "smart-irrigation-market",
  },
  {
    title: "Agrochemicals & Fertilizer Global Market Report 2026–2035",
    desc: "Comprehensive analysis of the global agrochemicals and fertilizer market covering all major segments and regions.",
    date: "05 Jun 2026",
    category: "Agrochemicals & Fertilizers",
    slug: "agrochemicals-fertilizer-market",
  },
  {
    title: "Vertical Farming Market Size, Share & Forecast 2026–2035",
    desc: "Indoor agriculture trends, hydroponics and growth outlook for the global vertical farming industry.",
    date: "28 May 2026",
    category: "Vertical Farming",
    slug: "vertical-farming-market",
  },
  {
    title: "Global Agricultural Drones Market Report 2026–2035",
    desc: "The impact of UAVs on crop monitoring, spraying and productivity across all major agricultural markets.",
    date: "22 May 2026",
    category: "Drone Technology",
    slug: "agricultural-drones-market",
  },
  {
    title: "Livestock Health Monitoring Systems Market 2026–2035",
    desc: "Advanced biometric sensors, AI-driven behavior analysis and predictive livestock health platforms reshaping animal husbandry.",
    date: "18 May 2026",
    category: "Livestock Monitoring",
    slug: "livestock-monitoring-market",
  },
  {
    title: "Global Farm Equipment & Machinery Market 2026–2035",
    desc: "Market intelligence on tractors, harvesters, tillage equipment and autonomous farming machinery worldwide.",
    date: "14 May 2026",
    category: "Farm Equipment & Machinery",
    slug: "farm-equipment-market",
  },
  {
    title: "Agricultural Supply Chain & Cold Chain Logistics 2026–2035",
    desc: "End-to-end analysis of agricultural supply chain optimization, cold storage networks, and last-mile delivery innovations.",
    date: "10 May 2026",
    category: "Supply Chain & Logistics",
    slug: "supply-chain-logistics-market",
  },
  {
    title: "Climate-Smart Agriculture Market Analysis 2026–2035",
    desc: "Regenerative farming practices, carbon credit systems, and climate adaptation technologies transforming global agriculture.",
    date: "06 May 2026",
    category: "Climate-Smart Agriculture",
    slug: "climate-smart-agriculture-market",
  },
  {
    title: "Agricultural IoT Sensors & Connectivity Market 2026–2035",
    desc: "Soil moisture sensors, weather stations, and rural 5G connectivity platforms enabling real-time farm data analytics.",
    date: "01 May 2026",
    category: "AgriTech & Innovation",
    slug: "iot-sensors-connectivity-market",
  },
  {
    title: "Global Crop Protection Chemicals Market 2026–2035",
    desc: "Herbicides, fungicides, insecticides and bio-pesticides market analysis with regulatory impact assessment across regions.",
    date: "25 Apr 2026",
    category: "Agrochemicals & Fertilizers",
    slug: "crop-protection-chemicals-market",
  },
]

export default function ReportsPage() {
  const [activeCategory, setActiveCategory] = useState("All Reports")

  const filteredReports = activeCategory === "All Reports"
    ? REPORTS
    : REPORTS.filter(report => report.category === activeCategory)

  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        {/* Hero Banner */}
        <div className="bg-[#14532d] text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Market Research Reports</h1>
            <p className="text-green-50/90 text-lg max-w-2xl mx-auto mb-8">
              Explore our comprehensive collection of agriculture industry reports covering every major market segment.
            </p>
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports by title, category, or keyword..."
                className="w-full py-3.5 pl-12 pr-6 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 shadow-lg text-[14px]"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8 relative items-start">
            {/* Left Sidebar: Categories */}
            <div className="lg:w-1/4 flex-shrink-0 relative hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar pr-4 pb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-2.5 rounded-lg text-[14px] font-medium transition-colors ${
                        activeCategory === cat
                          ? "bg-brand-50 text-brand-700 font-semibold shadow-sm border border-brand-100"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content: Reports */}
            <div className="lg:w-3/4">
              {/* Results Count & Sort */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <p className="text-[13px] text-gray-500">
                  Showing <span className="font-bold text-gray-900">{filteredReports.length}</span> reports
                </p>
                <button className="flex items-center gap-2 text-[13px] text-gray-600 font-medium border border-gray-200 px-4 py-2 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                  Sort by: Latest
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Reports Grid */}
              <div 
                key={activeCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                {filteredReports.map((report, idx) => (
                  <Link
                    key={idx}
                    href={`/report/${report.slug}`}
                    className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-md hover:border-brand-500 transition-all duration-300 group flex flex-col h-full overflow-hidden"
                  >
                    {/* Top: Book cover */}
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

                    {/* Bottom: text */}
                    <div className="flex flex-col flex-grow p-5 min-w-0">
                      <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider mb-2">{report.category}</span>
                      <h3 className="text-[14px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-700 transition-colors line-clamp-2" title={report.title}>
                        {report.title}
                      </h3>
                      <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-6">{report.desc}</p>

                      <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between gap-2">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-gray-400 font-medium mb-0.5">Pub Date</span>
                          <span className="text-[10px] text-gray-700 font-semibold leading-tight">{report.date}</span>
                        </div>
                        <span className="text-brand-600 hover:text-brand-800 text-[11px] font-bold flex items-center gap-1 transition-colors group/link whitespace-nowrap">
                          Read Report
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-white border border-gray-200 text-gray-700 hover:border-brand-500 hover:text-brand-700 font-semibold py-3 px-8 rounded-lg transition-colors text-[14px] shadow-sm">
                  Load More Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
