"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Cpu,
  Settings,
  Droplets,
  FlaskConical,
  Activity,
  Leaf,
  Navigation,
  Tractor,
  ArrowRight
} from "lucide-react"

const TABS = [
  { id: "all", name: "All" },
  { id: "agritech", name: "AgriTech" },
  { id: "irrigation", name: "Irrigation" },
  { id: "crop-protection", name: "Crop Protection" },
  { id: "machinery", name: "Machinery" },
  { id: "livestock", name: "Livestock" },
];

const COMMON_COVER_IMAGE = "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"; // Abstract green layers

const TRENDING_REPORTS = [
  {
    title: "Global Precision Agriculture Market Size, Share & Forecast",
    shortTitle: "Precision Agriculture Market Analysis",
    category: "AgriTech",
    categoryId: "agritech",
    icon: Cpu,
    badge: "Hot",
    cagr: "15.7%",
    years: "2026–2035",
    excerpt: "Valued at USD 8.7 billion in 2025, projected to reach USD 24.5 billion by 2035.",
    price: "From USD 4,990",
    url: "/report/global-precision-agriculture-market"
  },
  {
    title: "Global Agricultural Robotics & Automation Market",
    shortTitle: "Agricultural Robotics & Automation Market",
    category: "Machinery",
    categoryId: "machinery",
    icon: Settings,
    badge: null,
    cagr: "22.4%",
    years: "2026–2035",
    excerpt: "Valued at USD 5.3 billion in 2025, projected to reach USD 21.8 billion by 2035.",
    price: "From USD 4,990",
    url: "/report/global-agricultural-robotics-market"
  },
  {
    title: "Smart Irrigation Systems Market Size & Forecast",
    shortTitle: "Smart Irrigation Systems Market",
    category: "Irrigation",
    categoryId: "irrigation",
    icon: Droplets,
    badge: null,
    cagr: "12.8%",
    years: "2026–2035",
    excerpt: "Valued at USD 1.8 billion in 2025, projected to reach USD 4.9 billion by 2035.",
    price: "From USD 4,990",
    url: "/report/smart-irrigation-systems-market"
  },
  {
    title: "Biopesticides & Crop Protection Chemicals Market",
    shortTitle: "Crop Protection Chemicals Market",
    category: "Crop Protection",
    categoryId: "crop-protection",
    icon: FlaskConical,
    badge: null,
    cagr: "14.2%",
    years: "2026–2035",
    excerpt: "Valued at USD 6.2 billion in 2025, projected to reach USD 18.5 billion by 2035.",
    price: "From USD 4,990",
    url: "/report/biopesticides-crop-protection-market"
  },
  {
    title: "Livestock Monitoring & Wearable Sensors Market",
    shortTitle: "Livestock Monitoring Sensors Market",
    category: "Livestock",
    categoryId: "livestock",
    icon: Activity,
    badge: null,
    cagr: "18.6%",
    years: "2026–2035",
    excerpt: "Valued at USD 2.1 billion in 2025, projected to reach USD 7.2 billion by 2035.",
    price: "From USD 4,990",
    url: "/report/livestock-monitoring-sensors-market"
  },
  {
    title: "Vertical Farming & Controlled Environment Agriculture",
    shortTitle: "Vertical Farming & Indoor Agriculture",
    category: "AgriTech",
    categoryId: "agritech",
    icon: Leaf,
    badge: null,
    cagr: "20.1%",
    years: "2026–2035",
    excerpt: "Valued at USD 4.8 billion in 2025, projected to reach USD 19.3 billion by 2035.",
    price: "From USD 4,990",
    url: "/report/vertical-farming-indoor-agriculture"
  },
  {
    title: "Agricultural Drones & Remote Sensing Market",
    shortTitle: "Agricultural Drones & Remote Sensing",
    category: "AgriTech",
    categoryId: "agritech",
    icon: Navigation,
    badge: null,
    cagr: "24.8%",
    years: "2026–2035",
    excerpt: "Valued at USD 1.5 billion in 2025, projected to reach USD 6.8 billion by 2035.",
    price: "From USD 4,990",
    url: "/report/agricultural-drones-uavs-market"
  },
  {
    title: "Global Harvester Machinery Market Size & Share",
    shortTitle: "Harvester Machinery Market Size",
    category: "Machinery",
    categoryId: "machinery",
    icon: Tractor,
    badge: null,
    cagr: "8.5%",
    years: "2026–2035",
    excerpt: "Valued at USD 11.2 billion in 2025, projected to reach USD 20.4 billion by 2035.",
    price: "From USD 4,990",
    url: "/report/global-harvester-machinery-market"
  }
];

export function FeaturedReports() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredReports = activeTab === "all"
    ? TRENDING_REPORTS
    : TRENDING_REPORTS.filter(r => r.categoryId === activeTab);

  return (
    <section className="section-custom bg-white py-20" aria-label="Trending Market Research Reports">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-brand-500"></span>
            <span className="text-brand-600 text-sm font-bold tracking-wider uppercase">Most Accessed</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Market Research Reports
          </h2>
          <p className="text-gray-500 text-[15px] max-w-3xl leading-relaxed">
            Most-accessed global market research reports updated for 2026. Each includes 10-year forecasts, segmentation, regional analysis, and competitive landscape.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter reports by industry">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${activeTab === tab.id
                  ? "bg-brand-600 text-white border-brand-600 shadow-md"
                  : "bg-white text-muted border-gray-200 hover:border-brand-300 hover:text-brand-600"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReports.map((report, idx) => (
            <article className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col h-full" key={idx}>
              <Link href={report.url} className="flex flex-col h-full" aria-label={report.title}>

                {/* Report Cover Banner Section */}
                <div className="relative h-40 w-full bg-gradient-to-br from-[#0A3D0F] via-[#1B5E20] to-[#2E7D32] overflow-hidden border-b-4 border-[#F9A825]">
                  
                  {/* Spine */}
                  <div className="absolute top-0 left-0 h-full w-8 bg-[#0A2E0E] border-r border-[#1B5E20] flex items-center justify-center">
                    <div className="flex flex-col gap-8 opacity-40">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 ml-8 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '12px 12px' }}></div>

                  {/* Corner Fold / Design element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#1A5320] rounded-bl-[40px] opacity-40"></div>
                  
                  {/* Top-right "RESEARCH" watermark */}
                  <div className="absolute top-3 right-4 text-white/5 font-serif text-[10px] uppercase tracking-[0.3em] font-bold">
                    Research
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute inset-0 left-12 right-5 py-6 flex flex-col text-white z-10">
                    <div className="flex items-center gap-2 opacity-90">
                      <div className="w-1.5 h-1.5 rounded-sm bg-[#F9A825]"></div>
                      <span className="text-[9px] font-bold tracking-widest uppercase text-[#A2C1A5]">AII Industry Report</span>
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-[19px] font-bold font-serif leading-snug line-clamp-3 pr-2">{report.shortTitle}</h4>
                    </div>
                  </div>

                  {report.badge && (
                    <span className="absolute top-4 right-4 bg-[#F9A825] text-[#0A2E0E] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-md z-20">
                      {report.badge}
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-50 text-brand-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {report.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-soil mb-4 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {report.title}
                  </h3>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-50 border border-green-100 text-brand-600 text-xs font-bold px-2 py-1 rounded">
                      CAGR: {report.cagr}
                    </span>
                    <span className="text-xs font-medium text-muted bg-gray-50 border border-gray-100 px-2 py-1 rounded">
                      {report.years}
                    </span>
                  </div>

                  <p className="text-sm text-muted line-clamp-2 mb-6 flex-1">
                    {report.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Starting From</span>
                      <span className="text-base font-black text-[#1A5320]">
                        ${report.price.replace("From USD ", "")}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#1A5320] flex items-center group-hover:text-white group-hover:bg-[#1A5320] bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full transition-all duration-300 shadow-sm">
                      View Report <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>

              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/reports" className="inline-flex items-center px-8 py-3 bg-brand-600 text-white font-bold rounded-lg shadow-md hover:bg-brand-700 hover:shadow-lg transition-all">
            View All 20,000+ Reports <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
