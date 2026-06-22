import { FileText, Settings2 } from "lucide-react"

export function BottomCTA() {
  return (
    <div className="mt-12 mb-16 bg-[#f0fdf4] border border-brand-200 rounded-[20px] p-8 md:p-12 text-center shadow-sm">
      <h2 className="text-[22px] md:text-3xl font-bold text-brand-900 mb-4">
        Ready to make data-driven decisions?
      </h2>
      <p className="text-[15px] text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        Get immediate access to our comprehensive precision agriculture market data, or let our analysts tailor a custom report specifically aligned with your strategic objectives.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3.5 px-8 rounded-md transition-colors w-full sm:w-auto shadow-md">
          <FileText className="w-5 h-5" />
          Download Sample PDF
        </button>
        <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-900 font-bold py-3.5 px-8 rounded-md transition-colors border border-brand-200 w-full sm:w-auto shadow-sm">
          <Settings2 className="w-5 h-5" />
          Customize Report
        </button>
      </div>
    </div>
  )
}
