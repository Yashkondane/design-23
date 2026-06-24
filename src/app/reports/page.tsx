"use client"
import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ArrowRight, Search, ChevronDown } from "lucide-react"
import Link from "next/link"

const CATEGORIES = [
  "All Reports",
  "AgriTech",
  "Precision Agriculture",
  "Machinery",
  "Irrigation",
  "Livestock",
  "Crop Protection",
  "Supply Chain",
  "Vertical Farming",
  "Drone Technology",
  "Climate-Smart Agriculture",
]

const REPORTS = [
  {
    title: "Global Precision Agriculture Market Size, Share & Forecast",
    shortTitle: "Precision Agriculture Market Analysis",
    desc: "Valued at USD 8.7 billion in 2025, projected to reach USD 24.5 billion by 2035.",
    date: "20 Jun 2026",
    category: "Precision Agriculture",
    slug: "precision-agriculture-market",
    cagr: "15.7%",
    years: "2026–2035",
    price: "From USD 4,990",
    badge: "Hot",
  },
  {
    title: "Agricultural Robotics Industry Analysis & Forecast",
    shortTitle: "Agricultural Robotics Market",
    desc: "Valued at USD 5.3 billion in 2025, projected to reach USD 21.8 billion by 2035.",
    date: "12 Jun 2026",
    category: "AgriTech",
    slug: "agricultural-robotics-market",
    cagr: "22.4%",
    years: "2026–2035",
    price: "From USD 4,990",
    badge: null,
  },
  {
    title: "Smart Irrigation Market Trends & Forecast",
    shortTitle: "Smart Irrigation Systems Market",
    category: "Irrigation",
    date: "10 Jun 2026",
    cagr: "12.8%",
    years: "2026–2035",
    desc: "Valued at USD 1.8 billion in 2025, projected to reach USD 4.9 billion by 2035.",
    price: "From USD 4,990",
    slug: "smart-irrigation-market",
    badge: null,
  },
  {
    title: "Agrochemicals & Fertilizer Global Market Report",
    shortTitle: "Crop Protection Chemicals Market",
    category: "Crop Protection",
    date: "05 Jun 2026",
    cagr: "14.2%",
    years: "2026–2035",
    desc: "Valued at USD 6.2 billion in 2025, projected to reach USD 18.5 billion by 2035.",
    price: "From USD 4,990",
    slug: "agrochemicals-fertilizer-market",
    badge: null,
  },
  {
    title: "Vertical Farming Market Size, Share & Forecast",
    shortTitle: "Vertical Farming & Indoor Agriculture",
    category: "Vertical Farming",
    date: "28 May 2026",
    cagr: "20.1%",
    years: "2026–2035",
    desc: "Valued at USD 4.8 billion in 2025, projected to reach USD 19.3 billion by 2035.",
    price: "From USD 4,990",
    slug: "vertical-farming-market",
    badge: null,
  },
  {
    title: "Global Agricultural Drones Market Report",
    shortTitle: "Agricultural Drones & Remote Sensing",
    category: "Drone Technology",
    date: "22 May 2026",
    cagr: "24.8%",
    years: "2026–2035",
    desc: "Valued at USD 1.5 billion in 2025, projected to reach USD 6.8 billion by 2035.",
    price: "From USD 4,990",
    slug: "agricultural-drones-market",
    badge: null,
  },
  {
    title: "Livestock Health Monitoring Systems Market",
    shortTitle: "Livestock Monitoring Sensors Market",
    desc: "Advanced biometric sensors, AI-driven behavior analysis and predictive livestock health platforms reshaping animal husbandry.",
    date: "18 May 2026",
    category: "Livestock",
    slug: "livestock-monitoring-market",
    cagr: "18.6%",
    years: "2026–2035",
    price: "From USD 4,990",
    badge: null,
  },
  {
    title: "Global Farm Equipment & Machinery Market",
    shortTitle: "Harvester Machinery Market Size",
    desc: "Market intelligence on tractors, harvesters, tillage equipment and autonomous farming machinery worldwide.",
    date: "14 May 2026",
    category: "Machinery",
    slug: "farm-equipment-market",
    cagr: "8.5%",
    years: "2026–2035",
    price: "From USD 4,990",
    badge: null,
  },
  {
    title: "Agricultural Supply Chain & Cold Chain Logistics",
    shortTitle: "Supply Chain & Logistics Market",
    desc: "End-to-end analysis of agricultural supply chain optimization, cold storage networks, and last-mile delivery innovations.",
    date: "10 May 2026",
    category: "Supply Chain",
    slug: "supply-chain-logistics-market",
    cagr: "11.4%",
    years: "2026–2035",
    price: "From USD 4,990",
    badge: null,
  },
  {
    title: "Climate-Smart Agriculture Market Analysis",
    shortTitle: "Climate-Smart Agriculture",
    desc: "Regenerative farming practices, carbon credit systems, and climate adaptation technologies transforming global agriculture.",
    date: "06 May 2026",
    category: "Climate-Smart Agriculture",
    slug: "climate-smart-agriculture-market",
    cagr: "16.2%",
    years: "2026–2035",
    price: "From USD 4,990",
    badge: null,
  },
]

export default function ReportsPage() {
  const [activeCategory, setActiveCategory] = useState("All Reports")

  const filteredReports = activeCategory === "All Reports"
    ? REPORTS
    : REPORTS.filter(report => report.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner — uses inline styles only, no report-theme.css dependency */}
      <section
        style={{
          background: "linear-gradient(160deg, #0D3B12 0%, #1B5E20 50%, #2E7D32 100%)",
          padding: "56px 24px 52px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow */}
        <div style={{ position: "absolute", top: "-60px", right: "-80px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(102, 187, 106, 0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" className="hover:text-white" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.35)" }}>&rsaquo;</span>
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Reports</span>
          </nav>

          <h1 className="font-serif" style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "12px" }}>
            Market Research Reports
          </h1>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "16px", lineHeight: 1.7, maxWidth: "680px", marginBottom: "28px" }}>
            Explore our comprehensive collection of agriculture industry reports covering every major market segment.
          </p>

          {/* Search bar */}
          <div style={{ position: "relative", maxWidth: "560px" }}>
            <Search style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", width: "20px", height: "20px", color: "#9ca3af", pointerEvents: "none" }} />
            <input
              type="text"
              placeholder="Search reports by title, category, or keyword..."
              style={{
                width: "100%",
                height: "52px",
                paddingLeft: "52px",
                paddingRight: "24px",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                color: "#1f2937",
                border: "none",
                outline: "none",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
      </section>

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Reports Feed */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Results Count & Sort */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4">
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                {filteredReports.map((report, idx) => (
                  <article className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col h-full" key={idx}>
                    <Link href={`/report/${report.slug}`} className="flex flex-col h-full no-underline" style={{ textDecoration: "none" }}>

                      {/* Report Cover Banner Section */}
                      <div className="relative h-40 w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #0A3D0F, #1B5E20, #2E7D32)", borderBottom: "4px solid #F9A825" }}>
                        
                        {/* Spine */}
                        <div className="absolute top-0 left-0 h-full w-8 flex items-center justify-center" style={{ background: "#0A2E0E", borderRight: "1px solid #1B5E20" }}>
                          <div className="flex flex-col gap-8 opacity-40">
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          </div>
                        </div>

                        {/* Subtle Grid Pattern */}
                        <div className="absolute inset-0 ml-8 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "12px 12px" }} />

                        {/* Corner Fold */}
                        <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-[40px] opacity-40" style={{ background: "#1A5320" }} />
                        
                        {/* RESEARCH watermark */}
                        <div className="absolute top-3 right-4 font-serif text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: "rgba(255,255,255,0.05)" }}>
                          Research
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute inset-0 left-12 right-5 py-6 flex flex-col z-10" style={{ color: "#fff" }}>
                          <div className="flex items-center gap-2 opacity-90">
                            <div className="w-1.5 h-1.5 rounded-sm" style={{ background: "#F9A825" }} />
                            <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "#A2C1A5" }}>AII Industry Report</span>
                          </div>
                          <div className="mt-auto">
                            <h4 className="text-[17px] font-bold font-serif leading-snug line-clamp-3 pr-2" style={{ color: "#fff" }}>{report.shortTitle}</h4>
                          </div>
                        </div>

                        {report.badge && (
                          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-md z-20" style={{ background: "#F9A825", color: "#0A2E0E" }}>
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

                        <h3 className="text-[15px] font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors line-clamp-2">
                          {report.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="bg-green-50 border border-green-100 text-brand-600 text-[11px] font-bold px-2 py-1 rounded">
                            CAGR: {report.cagr}
                          </span>
                          <span className="text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2 py-1 rounded">
                            {report.years}
                          </span>
                        </div>

                        <p className="text-[12px] text-gray-500 line-clamp-2 mb-6 flex-1">
                          {report.desc}
                        </p>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Starting From</span>
                            <span className="text-[14px] font-black" style={{ color: "#1A5320" }}>
                              ${report.price.replace("From USD ", "")}
                            </span>
                          </div>
                          <span className="text-[11px] font-bold flex items-center text-[#1A5320] bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full transition-all duration-300 shadow-sm whitespace-nowrap group-hover:text-white group-hover:bg-[#1A5320] group-hover:border-[#1A5320]">
                            View Report <ArrowRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>

                    </Link>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="flex justify-center mt-12 pt-8 border-t border-gray-200">
                <button className="px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:text-brand-700 hover:border-brand-500 shadow-sm transition-all">
                  Load More Reports
                </button>
              </div>

            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 sticky top-24">
              
              {/* Category Filter Widget */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200" style={{ background: "#f9fafb" }}>
                  <h3 className="text-lg font-bold text-gray-900">Categories</h3>
                </div>
                <div className="p-3">
                  {CATEGORIES.map((cat, idx) => {
                    const count = cat === "All Reports" 
                      ? REPORTS.length 
                      : REPORTS.filter(report => report.category.toLowerCase() === cat.toLowerCase()).length;
                    const isActive = activeCategory === cat;
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          textAlign: "left",
                          padding: "10px 14px",
                          borderRadius: "10px",
                          fontSize: "14px",
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? "#166534" : "#4b5563",
                          backgroundColor: isActive ? "#f0fdf4" : "transparent",
                          border: isActive ? "1px solid #bbf7d0" : "1px solid transparent",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          marginBottom: "2px",
                        }}
                      >
                        <span>{cat}</span>
                        <span style={{
                          backgroundColor: isActive ? "#166534" : "#e5e7eb",
                          color: isActive ? "#fff" : "#6b7280",
                          padding: "3px 10px",
                          borderRadius: "9999px",
                          fontSize: "12px",
                          fontWeight: 700,
                          minWidth: "28px",
                          textAlign: "center",
                        }}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
