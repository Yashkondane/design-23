import { TrendingUp, Globe, Users, Search, FileText, ShieldCheck } from "lucide-react"

export function WhyUs() {
  const valueProps = [
    {
      icon: TrendingUp,
      title: "10-Year Market Forecasts",
      desc: "All reports include market size projections from 2026 to 2035, base year 2025, with CAGR analysis at segment and regional level."
    },
    {
      icon: Globe,
      title: "38-Country Coverage",
      desc: "Regional and country-level analysis across North America, Europe, Asia-Pacific, Latin America, and Middle East & Africa."
    },
    {
      icon: Users,
      title: "Direct Analyst Access",
      desc: "Every report purchase includes 30 minutes of complimentary analyst consultation. Our senior analysts are agribusiness specialists."
    },
    {
      icon: Search,
      title: "Custom Market Research",
      desc: "Bespoke research tailored to your geography, segment, or specific strategic question. Delivered in 4–6 weeks."
    },
    {
      icon: FileText,
      title: "PDF + Excel Delivery",
      desc: "Reports in PDF (full narrative, charts, tables) and Excel (raw data for modeling). Immediate download on purchase."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Verified Data",
      desc: "All market estimates triangulated through primary interviews, secondary sources, and multi-step analyst validation."
    }
  ];

  return (
    <section className="section-custom section-custom--cream" aria-label="Why Choose Agriculture Industry Insights">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="section-label-custom mx-auto justify-center">Why AII</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
            Why Choose Agriculture Industry Insights?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Trusted by Fortune 500 companies, government agencies, and agribusiness leaders for actionable market intelligence since 2018.
          </p>
        </div>
        <div className="value-grid-custom">
          {valueProps.map((val, idx) => (
            <div className="value-card-custom" key={idx}>
              <div className="value-icon-wrap-custom" aria-hidden="true">
                <val.icon size={24} color="var(--leaf)" />
              </div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
