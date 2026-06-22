export function DriversTable() {
  const drivers = [
    { title: "Rapid IoT Deployment", impact: "High", timeframe: "Short-Term" },
    { title: "Government Subsidies for AgTech", impact: "High", timeframe: "Mid-Term" },
    { title: "Declining Cost of Soil Sensors", impact: "Medium", timeframe: "Long-Term" },
  ]
  const restraints = [
    { title: "Lack of Rural Broadband Infrastructure", impact: "High", timeframe: "Short-Term" },
    { title: "High Initial Capital Expenditure", impact: "High", timeframe: "Mid-Term" },
    { title: "Data Privacy & Security Concerns", impact: "Medium", timeframe: "Long-Term" },
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-2xl font-bold text-brand-600 mb-6">Market Drivers & Restraints</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-1/2">Market Drivers</th>
              <th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200">Impact</th>
              <th className="py-3 px-4 text-sm font-bold text-gray-900">Timeframe</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50">
                <td className="py-3 px-4 text-sm text-gray-700 border-r border-gray-200">{item.title}</td>
                <td className="py-3 px-4 text-sm font-medium text-brand-600 border-r border-gray-200">{item.impact}</td>
                <td className="py-3 px-4 text-sm text-gray-500">{item.timeframe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200 w-1/2">Market Restraints</th>
              <th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200">Impact</th>
              <th className="py-3 px-4 text-sm font-bold text-gray-900">Timeframe</th>
            </tr>
          </thead>
          <tbody>
            {restraints.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50">
                <td className="py-3 px-4 text-sm text-gray-700 border-r border-gray-200">{item.title}</td>
                <td className="py-3 px-4 text-sm font-medium text-red-600 border-r border-gray-200">{item.impact}</td>
                <td className="py-3 px-4 text-sm text-gray-500">{item.timeframe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
