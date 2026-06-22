export function SourcesGrid() {
  const primarySources = ["OEM Executives", "Hardware Distributors", "Independent Farm Operators", "Agricultural Cooperative Managers", "Agronomy Software Developers"]
  const secondarySources = ["Annual Reports & SEC Filings", "USDA & FAO Publications", "Venture Capital Activity Tracking", "Academic IoT & AgTech Journals", "Patent Filings & Regulatory Mandates"]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-2xl font-bold text-brand-600 mb-6">Research Methodology & Sources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Primary Sources</h4>
          <ul className="space-y-3">
            {primarySources.map((s, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full shrink-0"></div>
                <span className="text-gray-700 text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Secondary Sources</h4>
          <ul className="space-y-3">
            {secondarySources.map((s, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full shrink-0"></div>
                <span className="text-gray-700 text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
