"use client"

import { useState } from "react"
import { 
  Tractor, 
  Droplets, 
  Activity, 
  FlaskConical, 
  Truck, 
  Sprout, 
  Plane, 
  CloudSun,
  ChevronRight,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const CATEGORIES = [
  { name: "AgriTech & Innovation", icon: Tractor },
  { name: "Precision Agriculture", icon: Tractor },
  { name: "Farm Equipment & Machinery", icon: Tractor },
  { name: "Irrigation & Water Management", icon: Droplets },
  { name: "Livestock Monitoring", icon: Activity },
  { name: "Agrochemicals & Fertilizers", icon: FlaskConical },
  { name: "Supply Chain & Logistics", icon: Truck },
  { name: "Vertical Farming", icon: Sprout },
  { name: "Drone Technology", icon: Plane },
  { name: "Climate-Smart Agriculture", icon: CloudSun },
]

const REPORTS = [
  {
    title: "Global Precision Agriculture Market",
    desc: "The global precision agriculture market was valued at USD 8.7 billion...",
    date: "20 Jun 2026",
  },
  {
    title: "Agricultural Robotics Industry Analysis",
    desc: "Key player innovations, market size and future outlook.",
    date: "12 Jun 2026",
  },
  {
    title: "Smart Irrigation Market Trends &...",
    desc: "Technology advancements, adoption insights and forecast.",
    date: "10 Jun 2026",
  },
  {
    title: "Agrochemicals & Fertilizer Global...",
    desc: "Comprehensive analysis of the global agrochemicals and fertilizer market.",
    date: "05 Jun 2026",
  },
  {
    title: "Vertical Farming Market Size, Share &...",
    desc: "Indoor agriculture trends, hydroponics and growth outlook.",
    date: "28 May 2026",
  },
  {
    title: "Global Agricultural Drones Market",
    desc: "The impact of UAVs on crop monitoring, spraying and productivity.",
    date: "22 May 2026",
  },
]

export function FeaturedReports() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name)

  return (
    <section className="py-10 lg:py-12 bg-gray-50 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Latest Reports</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explore our most recent market intelligence and industry trend analysis.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-6 flex flex-col lg:flex-row gap-8 border border-gray-100">
          
          {/* Sidebar Categories */}
          <div className="lg:w-[280px] flex-shrink-0 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 px-2">Categories</h3>
              <ul className="space-y-1">
                {CATEGORIES.map((cat, idx) => {
                  const isActive = cat.name === activeCategory
                  return (
                  <li key={idx}>
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full flex items-center gap-3 font-medium px-4 py-3 rounded-xl transition-colors text-sm group ${
                        isActive 
                          ? "text-brand-700 bg-brand-50 shadow-sm border border-brand-100 font-semibold" 
                          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
                      }`}
                    >
                      <cat.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-brand-600" : "text-gray-400 group-hover:text-gray-600"}`} />
                      <span className="text-left">{cat.name}</span>
                    </button>
                  </li>
                )})}
              </ul>
            </div>

            <div className="mt-6">
              <Link href="/categories" className="w-full flex items-center justify-center gap-2 bg-white border border-brand-200 text-brand-700 hover:bg-brand-50 font-semibold py-3 px-4 rounded-xl transition-colors text-sm">
                View all categories
                <ChevronRight className="w-4 h-4 ml-auto" />
              </Link>
            </div>
          </div>

          {/* Reports Content */}
          <div className="flex-grow flex flex-col min-w-0">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 min-h-[60px]">
              <div>
                <h2 key={activeCategory + "-title"} className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight animate-in fade-in slide-in-from-left-4 duration-500">
                  {activeCategory}
                </h2>
                <p className="text-gray-500 text-sm mt-1">Latest market intelligence and trend analysis</p>
              </div>
              <a
                href="/reports"
                className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-700 hover:border-brand-500 hover:text-brand-700 font-semibold py-2 px-4 rounded-lg transition-colors text-sm shadow-sm"
              >
                View all reports
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Grid */}
            <div key={activeCategory + "-grid"} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
              {REPORTS.map((report, idx) => (
                <Link href={`/report/${report.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={idx} className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-md hover:border-brand-500 transition-all duration-300 group flex flex-col h-full overflow-hidden">
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
                    <h3 className="text-[14px] font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-700 transition-colors line-clamp-2" title={report.title}>
                      {report.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed mb-6">{report.desc}</p>

                    <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="text-[9px] text-gray-400 font-medium mb-0.5">Pub Date</span>
                        <span className="text-[10px] text-gray-700 font-semibold leading-tight">{report.date}</span>
                      </div>
                      <span className="text-brand-600 group-hover:text-brand-800 text-[11px] font-bold flex items-center gap-1 transition-colors group/link whitespace-nowrap">
                        Read Report
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
