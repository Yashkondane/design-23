import { Sparkles, MessageSquare, Hexagon, Network } from "lucide-react"

export function AISummarizer() {
  const options = [
    { name: "Google AI", icon: <Sparkles className="w-5 h-5 text-white" /> },
    { name: "ChatGPT", icon: <MessageSquare className="w-5 h-5 text-white" /> },
    { name: "Grok", icon: <Hexagon className="w-5 h-5 text-white" /> },
    { name: "Perplexity", icon: <Network className="w-5 h-5 text-white" /> }
  ]

  return (
    <div className="mt-12 mb-12 bg-brand-50 border border-brand-100 rounded-2xl py-12 px-6 flex flex-col items-center justify-center">
      <h3 className="text-[20px] font-bold text-[#14532d] mb-8">
        Summarize This Report:
      </h3>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {options.map((opt, idx) => (
          <button key={idx} className="flex flex-col items-center group cursor-pointer focus:outline-none">
            <div className="w-[52px] h-[52px] bg-[#14532d] rounded-full flex items-center justify-center mb-3 transition-transform group-hover:-translate-y-1 group-hover:shadow-lg shadow-sm">
              {opt.icon}
            </div>
            <div className="bg-white border border-gray-300 px-4 py-1.5 shadow-sm transition-colors group-hover:border-[#14532d]">
              <span className="text-[13px] font-bold text-[#14532d]">{opt.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
