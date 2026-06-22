export function ReportStatsGrid() {
  const STATS = [
    { label: "BASE YEAR (2025)", value: "USD 8.7B" },
    { label: "FORECAST (2035)", value: "USD 22.6B", textClass: "text-brand-600" },
    { label: "CAGR (2026-2035)", value: "11.2%", textClass: "text-amber-500" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16 lg:-mt-20 mb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {STATS.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col justify-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{stat.label}</span>
            <span className={`text-2xl md:text-3xl font-bold ${stat.textClass || 'text-gray-900'}`}>{stat.value}</span>
          </div>
        ))}
        {/* Top Region Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col justify-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">TOP REGION</span>
          <span className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">North America</span>
          <span className="text-xs text-gray-500 mt-1">Largest Market Share</span>
        </div>
      </div>
    </div>
  )
}
