"use client"

import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      q: "What types of market research reports does AII provide?",
      a: "AII provides syndicated market research reports, custom research studies, and competitive intelligence across 10+ agriculture industry verticals. Each report includes market size (USD), CAGR forecasts 2026–2035, segmentation by type/application/end-use, regional analysis across 38 countries, and a competitive landscape with company profiles."
    },
    {
      q: "How many market research reports does AII publish?",
      a: "AII publishes 20,000+ market research reports covering global, regional, and country-level markets across agriculture, updated continuously as new data and industry shifts occur."
    },
    {
      q: "What is the forecast period covered in AII reports?",
      a: "AII reports cover a 10-year forecast period from 2026 to 2035, base year 2025. Historical data from 2020 to 2025 is included for trend analysis and CAGR calculations."
    },
    {
      q: "How much does an AII market research report cost?",
      a: "Reports are priced from USD 4,990 for a single-user PDF license. Multi-user and enterprise licenses are available. A free sample can be requested on any report page at no cost."
    },
    {
      q: "Does AII offer custom market research services?",
      a: "Yes. AII offers fully custom studies tailored to specific geographic markets, technology segments, or competitive questions. Projects are typically delivered within 4–6 weeks. Contact sales@agricultureindustryinsights.com."
    },
    {
      q: "In what formats are AII reports delivered?",
      a: "All AII reports are delivered in PDF and Excel formats. PDF includes full narrative analysis, charts, and tables. Excel contains all underlying data tables for modeling and integration."
    },
    {
      q: "How many countries does AII cover in its reports?",
      a: "AII covers 38 countries across 6 regions: North America (U.S., Canada, Mexico), Europe (UK, Germany, France, Italy, Spain + others), Asia-Pacific (China, Japan, India, South Korea, Australia + others), Latin America, and Middle East & Africa."
    },
    {
      q: "Can I get a free sample before purchasing a report?",
      a: "Yes. A free sample is available for every AII report — including the table of contents, executive summary, and sample data tables. Click 'Free Sample' on any report page."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6" aria-label="Frequently Asked Questions">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-label-custom">FAQs</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
            Frequently Asked Questions About AII Market Research
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px]">
            Common questions about our reports, pricing, formats, and custom research services.
          </p>
        </div>
        
        <div className="faq-list-custom" role="list">
          {faqs.map((faq, idx) => (
            <div 
              className={`faq-item-custom ${openIndex === idx ? "open" : ""}`} 
              role="listitem" 
              key={idx}
            >
              <button 
                className="faq-btn-custom" 
                aria-expanded={openIndex === idx} 
                onClick={() => toggleFAQ(idx)}
              >
                {faq.q}
                <span className="faq-chevron-custom">▾</span>
              </button>
              <div className="faq-body-custom">
                <div className="faq-body-inner-custom">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
