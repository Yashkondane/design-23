"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { TrendingUp } from "lucide-react"

const MOCK_REPORTS = [
  { title: "Global Precision Agriculture Market Size, Share & Forecast", category: "AgriTech", url: "/report/global-precision-agriculture-market" },
  { title: "Autonomous Farming Tractor Market Industry Analysis", category: "Machinery", url: "/report/autonomous-farming-tractor-market" },
  { title: "Smart Irrigation Systems Global Market Report", category: "Irrigation", url: "/report/smart-irrigation-systems-market" },
  { title: "Crop Protection Agrochemicals Market Trends", category: "Agrochemicals", url: "/report/crop-protection-agrochemicals-market" },
  { title: "Livestock Monitoring & Wearable Sensors Market Forecast", category: "Livestock", url: "/report/livestock-monitoring-sensors-market" },
  { title: "Vertical Farming & Indoor Agriculture Global Market", category: "Farming", url: "/report/vertical-farming-indoor-agriculture" },
  { title: "Agricultural Drones & UAVs Market Size & Growth", category: "Drones", url: "/report/agricultural-drones-uavs-market" },
  { title: "Organic Fertilizers Market Share and Forecast", category: "Agrochemicals", url: "/report/organic-fertilizers-market" },
]

export function Hero() {
  const [query, setQuery] = useState("")
  const trimmedQuery = query.trim()
  const suggestions = trimmedQuery.length > 2
    ? MOCK_REPORTS.filter(report => report.title.toLowerCase().includes(trimmedQuery.toLowerCase()))
    : []

  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setQuery(val)
    if (val.trim().length > 2) {
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
    setActiveSuggestionIndex(-1)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveSuggestionIndex(prev => prev < suggestions.length - 1 ? prev + 1 : prev)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveSuggestionIndex(prev => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === "Enter") {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        e.preventDefault()
        router.push(suggestions[activeSuggestionIndex].url)
        setShowSuggestions(false)
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    }
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/reports?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <section className="hero-section-custom" aria-label="Agriculture Industry Insights Homepage Hero">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="hero-inner-custom">

          {/* Left Column */}
          <div className="hero-content-custom">
            <div className="hero-eyebrow-custom">
              <span className="hero-eyebrow-dot-custom"></span>
              Trusted Since 2018 · 1,500+ Global Clients
            </div>

            <h1 className="hero-headline-custom">
              Global <em>Agriculture Research Reports</em> {"&"} Industry Forecasts
            </h1>
            <p className="hero-subheadline-custom">
              Data-driven market size, CAGR forecasts, segmentation analysis &amp; competitive intelligence across all agricultural sectors. Make confident strategic decisions backed by verified analyst data.
            </p>

            <div className="hero-search-wrap-custom" ref={containerRef}>
              <form className="hero-search-form-custom" onSubmit={handleSearchSubmit} role="search" aria-label="Search Market Research Reports">
                <label htmlFor="hero-search" className="sr-only">Search reports</label>
                <input
                  type="search"
                  id="hero-search"
                  name="q"
                  placeholder="Search 20,000+ agriculture market reports…"
                  value={query}
                  onChange={handleQueryChange}
                  onKeyDown={handleKeyDown}
                  onFocus={() => query.trim().length > 2 && setShowSuggestions(true)}
                  autoComplete="off"
                />
                <button type="submit" aria-label="Search">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search
                </button>
              </form>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-[300px] overflow-y-auto">
                  {suggestions.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        router.push(item.url)
                        setShowSuggestions(false)
                      }}
                      className={`px-5 py-3.5 cursor-pointer border-b border-gray-50 flex items-center justify-between text-left hover:bg-emerald-50 transition-colors ${index === activeSuggestionIndex ? "bg-emerald-50" : ""}`}
                    >
                      <div>
                        <div className="text-sm font-bold text-gray-900 leading-tight">{item.title}</div>
                        <div className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mt-1">{item.category}</div>
                      </div>
                      <span className="text-emerald-600 font-bold text-xs">View →</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="hero-tags-custom" aria-label="Popular report searches">
              <span className="hero-tags-label-custom">Popular:</span>
              <Link href="/category/agritech-innovation">AgriTech</Link>
              <Link href="/category/precision-agriculture">Precision Farming</Link>
              <Link href="/category/farm-equipment-machinery">Farm Machinery</Link>
              <Link href="/category/irrigation-water-management">Smart Irrigation</Link>
              <Link href="/category/livestock-monitoring">Livestock Tech</Link>
            </div>

            <div className="hero-cta-row-custom">
              <Link href="/reports" className="btn-hero-primary-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Browse All Reports
              </Link>
              <Link href="/free-sample" className="btn-hero-secondary-custom">Request Free Sample</Link>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="relative flex justify-center lg:justify-end w-full mt-12 lg:mt-0 lg:w-auto flex-1 lg:max-w-[520px] xl:max-w-[580px]" aria-hidden="true">


            {/* Image frame */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(27,94,32,0.16),0_2px_8px_rgba(0,0,0,0.06)] border border-white ring-1 ring-emerald-100">
              <Image
                src="/hero-visual.png"
                alt="Global agriculture market research — aerial farmland data intelligence"
                width={960}
                height={600}
                className="w-full h-auto object-cover block"
                priority
              />

              {/* Floating stat card — bottom left */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={17} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Agri Market CAGR</div>
                  <div className="text-[18px] font-extrabold text-emerald-700 leading-tight">15.7%</div>
                  <div className="text-[9px] text-gray-400 font-medium">2025–2035 Global Forecast</div>
                </div>
              </div>

              {/* Floating stat card — top right */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white px-4 py-2.5 text-center">
                <div className="text-[20px] font-extrabold text-gray-900 leading-tight">$28.8B</div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600">Market Size 2025</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

