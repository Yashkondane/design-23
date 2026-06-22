import { Download, ListTree } from "lucide-react"

export function ReportHero() {
  return (
    <div className="relative bg-[#14532d] text-white pt-20 pb-32 lg:pt-24 lg:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        {/* Glowing Orbs */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-green-400/20 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-5xl leading-tight text-white tracking-tight">
          Precision Agriculture Market Size, Share &amp; Forecast 2026–2035
        </h1>
        <p className="text-green-50 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-medium opacity-90">
          The Global Precision Agriculture Market was valued at USD 8.7 billion in 2025 and is projected to reach USD 22.6 billion by 2035, at a CAGR of 11.2% from 2026 to 2035.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3.5 px-8 rounded-md transition-colors w-full sm:w-auto shadow-lg shadow-green-500/20">
            <Download className="w-5 h-5" />
            Download Free Sample PDF
          </button>
          <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-md transition-colors border border-white/30 w-full sm:w-auto">
            <ListTree className="w-5 h-5" />
            View Table of Contents
          </button>
        </div>
      </div>
    </div>
  )
}
