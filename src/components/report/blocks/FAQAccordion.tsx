"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQAccordion() {
  const faqs = [
    {
      q: "What is the projected value of the Precision Agriculture Market by 2035?",
      a: "The market is projected to reach USD 22.6 billion by 2035, growing at a CAGR of 11.2% from 2026 to 2035, primarily driven by rapid AI integration and global adoption of smart irrigation systems."
    },
    {
      q: "Which application segment is expected to grow the fastest?",
      a: "Smart Irrigation is expected to be the fastest-growing application segment, fueled by increasing water scarcity concerns and stringent environmental regulations worldwide."
    },
    {
      q: "How do governmental subsidies affect this market?",
      a: "Governmental programs such as the European Union's CAP and various USDA conservation grants significantly incentivize the adoption of precision farming equipment by offsetting high initial capital costs for farm operators."
    },
    {
      q: "Which region currently dominates the market?",
      a: "North America currently holds the largest market share (over 35% in 2025), owing to the heavy concentration of large-scale commercial farms and early technological adoption."
    },
    {
      q: "How does IoT contribute to Precision Agriculture?",
      a: "Internet of Things (IoT) sensors enable real-time collection of microclimate data, soil moisture levels, and crop health metrics, allowing farm operators to make precise, data-driven decisions that minimize waste."
    },
    {
      q: "What role do drones play in modern farming?",
      a: "Drones, or Unmanned Aerial Vehicles (UAVs), are critical for crop scouting, multispectral imaging, and targeted aerial spraying, vastly reducing manual labor while covering thousands of acres efficiently."
    },
    {
      q: "Are small-scale farmers adopting precision agriculture?",
      a: "While initial adoption was driven by large corporate farms, falling hardware costs and the rise of subscription-based Software-as-a-Service (SaaS) models are rapidly accelerating adoption among small and medium-sized enterprises (SMEs)."
    },
    {
      q: "What are the main barriers to market growth?",
      a: "The primary restraints include the high initial capital investment required for autonomous machinery, a lack of technical expertise in rural areas, and insufficient broadband connectivity in remote farming regions."
    },
    {
      q: "How does AI enhance yield forecasting?",
      a: "Artificial Intelligence algorithms process vast datasets—including historical yields, real-time weather patterns, and satellite imagery—to generate highly accurate harvest predictions, optimizing supply chain logistics."
    },
    {
      q: "What is Variable Rate Technology (VRT)?",
      a: "VRT allows farmers to apply precise amounts of water, fertilizers, or pesticides exactly where needed across a field, rather than uniformly, maximizing yield potential while minimizing environmental impact."
    },
    {
      q: "Which companies are the key players in this market?",
      a: "Major incumbents include John Deere, Trimble Inc., AGCO Corporation, Topcon Positioning Systems, and CNH Industrial, alongside a rapidly growing ecosystem of specialized AgriTech startups."
    },
    {
      q: "How is blockchain being integrated into this sector?",
      a: "Blockchain technology is increasingly used for supply chain traceability, ensuring the origin, quality, and organic certification of crops from the farm directly to the retail shelf."
    },
    {
      q: "What impact does climate change have on market adoption?",
      a: "Increasing climate volatility and unpredictable weather patterns are accelerating the demand for localized weather modeling and smart irrigation systems to mitigate crop failure risks."
    },
    {
      q: "What is the expected CAGR for autonomous farming equipment?",
      a: "Autonomous tractors and robotic harvesters represent one of the fastest-growing hardware segments, anticipated to expand at a CAGR of over 15% through 2035 due to persistent agricultural labor shortages."
    },
    {
      q: "How are livestock monitoring systems evolving?",
      a: "Livestock monitoring is shifting from basic RFID tracking to advanced biometric sensors and AI-driven behavior analysis, capable of predicting illnesses and optimizing feeding schedules in real-time."
    },
    {
      q: "What is the future outlook for 5G in agriculture?",
      a: "The rollout of rural 5G networks will be a massive catalyst, providing the ultra-low latency and high bandwidth required to support fleets of autonomous robots and live-streaming drone video analytics."
    }
  ]

  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-[22px] font-bold text-brand-600 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx
          return (
            <div key={idx} className="border border-gray-200">
              <button 
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[15px] font-bold text-brand-900 pr-4">{faq.q}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />}
              </button>
              {isOpen && (
                <div className="p-4 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100">
                  <p className="mt-2 text-[13px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
