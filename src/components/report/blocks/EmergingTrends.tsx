export function EmergingTrends() {
  const trends = [
    { title: "Convergence of AI with Edge Devices", desc: "AI is increasingly deployed alongside on-device inference engines to create intelligent edge endpoints in farm equipment." },
    { title: "Autonomous Robotics Reshaping Logistics", desc: "Autonomous tractors and harvesting robots spanning thousands of acres in single deployments, enabling centralized yield management." },
    { title: "Satellite Imagery Accelerating Insights", desc: "Advanced capabilities that enable sub-meter crop monitoring accuracy, allowing precise localized chemical deployment." },
    { title: "Ultra-Low-Power Sensor Networks", desc: "Advances in IoT power architecture are enabling coin-cell and energy-harvesting designs that support multi-year operational lifespans for soil sensors." }
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      <h2 className="text-2xl font-bold text-brand-600 mb-6">
        Key Emerging Trends in the Precision Agriculture Market
      </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trends.map((trend, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 border-l-[4px] border-l-brand-600 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:border-l-brand-500 transition-all">
            <h4 className="text-[15px] font-bold text-brand-900 mb-3 leading-snug">{trend.title}</h4>
            <p className="text-[13px] text-gray-600 leading-relaxed">{trend.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
