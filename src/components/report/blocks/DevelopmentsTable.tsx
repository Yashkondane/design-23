export function DevelopmentsTable() {
  const developments = [
    {
      company: "John Deere",
      type: "Product Launch",
      date: "October 2025",
      detail: "Unveiled the new autonomous 8R tractor equipped with 6 stereo cameras for 360-degree obstacle detection.",
    },
    {
      company: "Trimble Inc.",
      type: "Acquisition",
      date: "August 2025",
      detail: "Acquired Bilberry, a French AI startup specializing in targeted weed spraying systems.",
    },
    {
      company: "Corteva Agriscience",
      type: "Partnership",
      date: "June 2025",
      detail: "Partnered with Microsoft to deploy advanced machine learning models for predictive crop yield analytics globally.",
    },
    {
      company: "DJI Agriculture",
      type: "Product Launch",
      date: "March 2025",
      detail: "Launched the Agras T40 agricultural drone with a 40kg payload capacity and dual-rotor mapping system.",
    },
  ]

  return (
    <div className="mt-8 mb-12">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Strategic Developments</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200">Company</th>
              <th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200">Type</th>
              <th className="py-3 px-4 text-sm font-bold text-gray-900 border-r border-gray-200">Date</th>
              <th className="py-3 px-4 text-sm font-bold text-gray-900">Key Detail</th>
            </tr>
          </thead>
          <tbody>
            {developments.map((dev, idx) => (
              <tr key={idx} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">{dev.company}</td>
                <td className="py-3 px-4 text-sm text-gray-600 border-r border-gray-200 whitespace-nowrap">
                  <span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-sm text-xs font-semibold uppercase tracking-wide">
                    {dev.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-500 border-r border-gray-200 whitespace-nowrap">{dev.date}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{dev.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
