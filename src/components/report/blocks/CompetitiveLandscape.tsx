export function CompetitiveLandscape() {
  const companies = [
    "John Deere", "Trimble Inc.", "Agco Corporation", "Topcon Positioning Systems",
    "CNH Industrial N.V.", "Kubota Corporation", "Yara International", "Bayer CropScience",
    "DJI Agriculture", "Raven Industries", "Corteva Agriscience", "Lindsay Corporation",
    "Valmont Industries", "AgJunction", "DeLaval"
  ]

  const developments = [
    {
      company: "John Deere",
      type: "STRATEGY",
      target: "Autonomous Expansion",
      date: "Oct 2025",
      detail: "Unveiled the new autonomous 8R tractor equipped with 6 stereo cameras for 360-degree obstacle detection.",
    },
    {
      company: "Trimble Inc.",
      type: "ACQUISITION",
      target: "Bilberry",
      date: "Aug 2025",
      detail: "Acquired Bilberry, a French AI startup specializing in targeted weed spraying systems.",
    },
    {
      company: "Corteva Agriscience",
      type: "PARTNERSHIP",
      target: "Microsoft",
      date: "Jun 2025",
      detail: "Partnered with Microsoft to deploy advanced machine learning models for predictive crop yield analytics globally.",
    },
    {
      company: "DJI Agriculture",
      type: "PRODUCT LAUNCH",
      target: "Agras T40",
      date: "Mar 2025",
      detail: "Launched the Agras T40 agricultural drone with a 40kg payload capacity and dual-rotor mapping system.",
    },
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      {/* Title */}
      <h2 className="text-[22px] font-bold text-brand-600 mb-2">Competitive Landscape</h2>
      <h3 className="text-[17px] font-bold text-brand-900 mb-6">Competitive Dynamics and M&A Landscape</h3>

      {/* Top Summary Table */}
      <div className="border border-gray-100 rounded-lg mb-10 overflow-hidden shadow-sm">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-brand-900 text-white">
              <th className="py-4 px-6 font-bold w-1/4">Key Takeaways ▲</th>
              <th className="py-4 px-6 font-bold">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6 font-bold text-brand-900">Innovation Focus</td>
              <td className="py-4 px-6 text-gray-600">Innovation in the Precision Agriculture Market centers on AI-driven sensor fusion, autonomous robotics, and multi-protocol IoT architectures integrating satellite imagery with ground-level soil diagnostics.</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6 font-bold text-brand-900">M&A Activity</td>
              <td className="py-4 px-6 text-gray-600">Major OEMs are aggressively acquiring specialized AgriTech startups to consolidate capabilities. Notable moves include John Deere's strategic acquisitions to bolster full-autonomy stacks across broadacre farming.</td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="py-4 px-6 font-bold text-brand-900">Market Structure</td>
              <td className="py-4 px-6 text-gray-600">The market features multi-tiered competition among global agricultural machinery majors (John Deere, CNH), specialized IoT sensor vendors (Trimble), and enterprise software providers offering holistic Farm Management Systems.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Vertical Insight Cards */}
      <div className="space-y-6 mb-12">
        <div className="bg-white border-y border-r border-gray-200 border-l-[3px] border-l-brand-600 rounded-xl p-6 shadow-sm">
          <h4 className="text-[16px] font-bold text-brand-900 mb-4">How Do Companies Compete in the Precision Agriculture Market?</h4>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            The Precision Agriculture Market is characterized by multi-tiered competition across heavy machinery majors, specialized agricultural IoT vendors, and software-centric farm management integrators. Global machinery leaders compete on hardware integration breadth, autonomous capability, and global dealership scale. Specialized AgriTech vendors differentiate on hyper-accurate positioning, specialized sensor quality, and dedicated agronomic expertise. Software platforms compete on cross-brand interoperability, AI predictability, and supply chain tracking.
          </p>
        </div>
        <div className="bg-white border-y border-r border-gray-200 border-l-[3px] border-l-brand-600 rounded-xl p-6 shadow-sm">
          <h4 className="text-[16px] font-bold text-brand-900 mb-4">Which Kind of Companies Dominate the Precision Agriculture Market?</h4>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Three distinct categories of companies dominate. First, global equipment conglomerates like John Deere and CNH Industrial leverage existing hardware footprints to upsell integrated precision suites. Second, pure-play geospatial and connectivity specialists like Trimble and Topcon dominate aftermarket retrofitting and high-precision guidance. Third, agricultural chemical and seed giants like Bayer and Corteva are heavily pivoting into digital agronomy, utilizing their massive biological datasets to offer prescriptive planting algorithms.
          </p>
        </div>
        <div className="bg-white border-y border-r border-gray-200 border-l-[3px] border-l-brand-600 rounded-xl p-6 shadow-sm">
          <h4 className="text-[16px] font-bold text-brand-900 mb-4">AI-Native Differentiation and Open Standards Drive Market Success</h4>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Innovation leadership is increasingly defined by the ability to integrate artificial intelligence processing directly at the farm edge. Vendors that successfully embed machine learning inference engines for weed identification and predictive weather modeling are capturing design wins. Furthermore, open development ecosystems and ISOBUS standardization are becoming strategic differentiation tools that heavily influence equipment selection across the global farming community.
          </p>
        </div>
      </div>

      {/* Market Players Pills */}
      <h3 className="text-[17px] font-bold text-brand-900 mb-6">Who Are the Key Market Players in the Precision Agriculture Market?</h3>
      <div className="flex flex-wrap gap-3 mb-12">
        {companies.map((company, idx) => (
          <div key={idx} className="border border-gray-200 rounded-full px-5 py-2.5 text-[13px] font-medium text-gray-700 bg-white hover:border-brand-500 hover:text-brand-600 transition-colors cursor-default shadow-sm">
            {company}
          </div>
        ))}
      </div>

      {/* Latest Developments Table */}
      <h3 className="text-[17px] font-bold text-brand-900 mb-6">What Are the Latest Developments?</h3>
      <div className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-brand-900 text-white">
              <th className="py-4 px-6 font-bold w-32">Date ▲</th>
              <th className="py-4 px-6 font-bold w-48">Company</th>
              <th className="py-4 px-6 font-bold w-64">Activity / Target</th>
              <th className="py-4 px-6 font-bold">Event</th>
            </tr>
          </thead>
          <tbody>
            {developments.map((dev, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-gray-500">{dev.date}</td>
                <td className="py-4 px-6 font-bold text-brand-900">{dev.company}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-wider">
                      {dev.type}
                    </span>
                    <span className="text-gray-700 font-medium">{dev.target}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-600">{dev.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
