import { CheckCircle2 } from "lucide-react"

export function KeyTakeaways() {
  const takeaways = [
    { text: "Hardware segment dominated the Precision Agriculture Market at USD 4.7 billion in 2025.", isBoldPrefix: "By Component," },
    { text: "Software segment is the fastest-growing category, led by AI analytics expanding at a CAGR of 13.3% from 2026 to 2035.", isBoldPrefix: "The Software segment" },
    { text: "Large Farms dominated the market at USD 4.9 billion in 2025.", isBoldPrefix: "By Organisation Size," },
    { text: "Smart Irrigation application is the fastest-growing segment at a CAGR of 14.8% from 2026 to 2035.", isBoldPrefix: "By Application," },
    { text: "North America dominated the market at USD 3.1 billion in 2025 and is forecast to reach USD 8.2 billion by 2035.", isBoldPrefix: "North America" },
    { text: "Asia-Pacific is the fastest-growing major region at a CAGR of 12.9% from 2026 to 2035.", isBoldPrefix: "Asia-Pacific" },
    { text: "Guidance Systems captured the largest revenue share, accounting for over 42% of the market in 2025.", isBoldPrefix: "By Technology," },
    { text: "Variable Rate Technology (VRT) segment is projected to witness substantial growth, accelerating at a CAGR of 12.4% during the forecast period.", isBoldPrefix: "The Variable Rate Technology (VRT)" },
    { text: "Cellular networks represented the dominant connectivity infrastructure, valued at USD 3.8 billion in 2025.", isBoldPrefix: "By Connectivity," },
    { text: "LPWAN (Low Power Wide Area Network) segment is anticipated to emerge as the fastest-growing connectivity protocol due to minimal power consumption requirements.", isBoldPrefix: "The LPWAN" },
    { text: "Europe held the second-largest market share globally, driven by stringent agricultural regulations and high sustainability targets set by the EU.", isBoldPrefix: "Europe" },
    { text: "Strategic partnerships and acquisitions are increasing, evidenced by a 24% year-over-year increase in ag-tech M&A activity in 2025.", isBoldPrefix: "Key market players" }
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-[22px] font-bold text-brand-600 mb-2">Key Takeaways</h2>
      <ul className="space-y-4">
        {takeaways.map((item, idx) => {
          const splitText = item.text.replace(item.isBoldPrefix, "")
          return (
            <li key={idx} className="flex items-start gap-3 border-b border-gray-100 pb-4 last:border-0">
              <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <p className="text-[13px] text-gray-600 leading-relaxed">
                <span className="font-bold text-brand-900">{item.isBoldPrefix}</span> {splitText}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
