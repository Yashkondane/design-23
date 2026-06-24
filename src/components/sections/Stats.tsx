export function Stats() {
  const statsData = [
    { value: "20,000+", label: "Market Research Reports" },
    { value: "10+", label: "Industry Verticals" },
    { value: "38", label: "Countries Analyzed" },
    { value: "1,500+", label: "Enterprise Clients" },
  ];

  return (
    <section className="bg-white border-t border-gray-100" aria-label="AII Market Research Impact Statistics">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="stat-strip-grid-custom">
          {statsData.map((stat, idx) => (
            <div className="stat-strip-item-custom" key={idx}>
              <div className="stat-strip-val-custom">{stat.value}</div>
              <div className="stat-strip-lbl-custom">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
