export function CompanyPills() {
  const companies = [
    "John Deere", "Trimble Inc.", "Agco Corporation", "Topcon Positioning Systems",
    "CNH Industrial N.V.", "Kubota Corporation", "Yara International", "Bayer CropScience",
    "DJI Agriculture", "Raven Industries", "Corteva Agriscience", "Lindsay Corporation",
    "Valmont Industries", "AgJunction", "DeLaval"
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-2xl font-bold text-brand-600 mb-6">Key Market Players</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
        {companies.map((company, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <span className="text-base text-gray-700">{company}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
