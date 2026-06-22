import { DownloadCloud } from "lucide-react"

export function SidebarPromoCards() {
  return (
    <div className="flex flex-col gap-4">
      {/* Promo 1 */}
      <div className="bg-brand-900 rounded-lg p-6 text-white border border-brand-800">
        <h3 className="text-xl font-bold mb-2">Get the 2035 Dataset</h3>
        <p className="text-sm text-brand-100 mb-5 leading-relaxed">
          Unlock all 33 countries, 20 company profiles, and granular 2026-2035 segments.
        </p>
        <button className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors text-sm">
          <DownloadCloud className="w-4 h-4" />
          Request Sample
        </button>
      </div>

      {/* Promo 2 */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Need a Tailored Report?</h3>
        <p className="text-sm text-gray-600 mb-3">
          Customize this report to your exact needs.
        </p>
        <p className="text-sm font-bold text-brand-600 mb-4">
          Get 30% FREE Customization
        </p>
        <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-4 rounded-md flex items-center justify-center transition-colors text-sm shadow-sm">
          Customize This Report
        </button>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
            <div className="w-2 h-2 rounded-full bg-brand-500"></div>
            Fact-checked
          </div>
          <a href="#" className="text-gray-500 hover:text-gray-900 text-xs font-medium underline transition-colors">
            Cite this Research
          </a>
        </div>
      </div>
    </div>
  )
}
