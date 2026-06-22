"use client"

import { useState, useEffect } from "react"

export function SidebarTOC() {
  const links = [
    "Market Size & Forecast",
    "Market Overview",
    "Trends & Dynamics",
    "Ecosystem Analysis",
    "SWOT Analysis",
    "Porter's Five Forces Analysis",
    "Market Drivers & Dynamics",
    "Segmentation Analysis",
    "Regional Outlook",
    "Competitive Landscape",
    "Expert Insights",
    "Investment Benefits",
    "Conclusion",
    "Author Bios",
    "FAQs"
  ]

  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = links.map(link => {
        const id = link.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-')
        return document.getElementById(id)
      }).filter(Boolean) as HTMLElement[]

      // Find the heading that is closest to the top of the viewport
      let currentActiveId = ""
      for (const el of headingElements) {
        const rect = el.getBoundingClientRect()
        // Highlight active section when it is near the top of the screen (adjust 150 offset as needed)
        if (rect.top <= 200) { 
          currentActiveId = el.id
        }
      }

      if (currentActiveId) {
        setActiveId(currentActiveId)
      } else {
        // Fallback to first if scrolled at very top
        setActiveId(links[0].toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-'))
      }
    }

    // Initial check on mount
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [links])

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
      <h3 className="text-[20px] font-bold text-slate-900 mb-6">Table of Contents</h3>
      <ul className="space-y-4">
        {links.map((link, idx) => {
          const id = link.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-')
          const isActive = activeId === id

          return (
            <li key={idx} className="flex items-center gap-3 group">
              <div 
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isActive ? 'bg-brand-600' : 'bg-gray-200 group-hover:bg-brand-400'
                }`}
              ></div>
              <a 
                href={`#${id}`} 
                className={`text-[14px] transition-colors ${
                  isActive 
                    ? 'text-brand-700 font-bold' 
                    : 'text-slate-500 group-hover:text-slate-900 font-medium'
                }`}
              >
                {link}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
