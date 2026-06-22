export function SWOTAnalysis() {
  const swotData = [
    { type: "Strengths", hex: "bg-green-100 text-green-700", border: "border-t-green-500", letter: "S", desc: "Enhanced crop yield forecasting doubles productivity metrics for connected agricultural hardware." },
    { type: "Weaknesses", hex: "bg-red-100 text-red-700", border: "border-t-red-500", letter: "W", desc: "Signal attenuation increases significantly when transmitting through dense crop canopies." },
    { type: "Opportunities", hex: "bg-teal-100 text-teal-700", border: "border-t-teal-500", letter: "O", desc: "Rapidly growing drone adoption drives massive wireless node deployment across large farms." },
    { type: "Threats", hex: "bg-amber-100 text-amber-700", border: "border-t-amber-500", letter: "T", desc: "Emerging next-generation alternative protocols threaten to displace existing traditional standards." },
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-[22px] font-bold text-brand-600 mb-2">SWOT Analysis of the Market</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {swotData.map((item, idx) => (
          <div key={idx} className={`relative overflow-hidden bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-t-[4px] ${item.border} hover:shadow-md transition-shadow`}>
            {/* Background large letter */}
            <div className="absolute -right-2 -bottom-6 text-[120px] font-black text-gray-50/80 leading-none select-none z-0">
              {item.letter}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[15px] ${item.hex}`}>
                  {item.letter}
                </div>
                <h4 className="text-[15px] font-bold text-brand-900">{item.type}</h4>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
