import { Building2, LineChart, Cpu, Landmark } from "lucide-react"

export function InvestmentOpportunities() {
  const opportunities = [
    { 
      title: "Capital Inflows and Venture Activity", 
      desc: "The Precision Agriculture Market continues to attract significant strategic corporate investment and venture capital activity, particularly at the intersection of AI-enabled crop monitoring, industrial IoT robotics, and location intelligence. Leading agricultural OEMs and specialized AgriTech startups have maintained substantial R&D investment programs targeting next-generation autonomous architecture. Sustained investor interest in autonomous tractors and drone analytics reflects healthy royalty-based investment returns." 
    },
    { 
      title: "Infrastructure Investment", 
      desc: "Infrastructure investment in the Precision Agriculture Market encompasses rural broadband expansion, edge-computing network deployments, and specialized IoT platform cloud infrastructure. Telecom and government bodies are making capital investments in rural 5G and satellite infrastructure specifically to support low-latency precision farming applications. Our assessment indicates that these infrastructure investment flows create durable multi-year hardware procurement demand across the AgTech component supply chain." 
    },
    { 
      title: "ESG and Sustainable Connectivity", 
      desc: "Environmental, Social, and Governance (ESG) considerations are increasingly relevant to investment decisions. Precision Agriculture, delivering sub-millimeter targeted spraying and optimized water usage, positions itself as an inherently eco-efficient framework aligned with enterprise sustainability mandates. Regulatory incentives favoring low-emission and high-yield farming alternatives are driving institutional investors to assign positive screening criteria to companies with strong precision agriculture roadmaps." 
    },
    { 
      title: "Digital Transformation Enablement", 
      desc: "Precision platforms serve as critical digital transformation enablers across the entire global food supply chain. Massive corporate farms digitizing their yield monitoring, logistics companies tracking cold-chain agricultural produce, and food manufacturers implementing condition monitoring all require precision hardware and software infrastructure as foundational components. These enterprise digital transformation investment cycles create predictable multi-year demand." 
    },
    { 
      title: "Private Equity and Strategic M&A Activity", 
      desc: "Private equity and strategic M&A activity represent significant investment themes within the market. Large agricultural equipment manufacturers are actively acquiring specialized AI developers, ultra-low-power SoC designers, and autonomous robotics platform providers to expand their vertical market reach. Technology-focused PE firms have historically demonstrated strong appetite for high-margin SaaS farm management companies offering premium valuation multiples for established customer relationships." 
    }
  ]

  const benefits = [
    {
      icon: <Building2 className="w-5 h-5 text-brand-600" />,
      title: "For Enterprise Buyers and Equipment Manufacturers",
      desc: "Enterprise buyers and equipment manufacturers gain comprehensive, vendor-neutral intelligence on the Precision Agriculture Market. This analysis supports product roadmap planning, sensor vendor evaluation, and market entry strategy development. Procurement teams can benchmark chipset pricing, development tool quality, and support ecosystem depth across the full range of autonomous machinery and IoT components."
    },
    {
      icon: <LineChart className="w-5 h-5 text-brand-600" />,
      title: "For Investors and Financial Analysts",
      desc: "Investors and financial analysts access a structured, data-rich assessment of the market's growth trajectory, competitive dynamics, and segment-level revenue forecasts through 2035. Detailed coverage of all profiled companies, including latest product development tracking and M&A activity, provides an early-signal framework for identifying acquisition targets and at-risk incumbents within the global AgriTech ecosystem."
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-600" />,
      title: "For AgriTech Vendors and Software Integrators",
      desc: "AgriTech vendors and protocol stack developers gain actionable intelligence on white-space application opportunities, fastest-growing end-user verticals, and emerging geographic markets. Segmentation analysis identifies underserved areas including healthcare-grade livestock monitoring and industrial mesh networking. Regional outlook sections provide regulatory context for international expansion prioritization."
    },
    {
      icon: <Landmark className="w-5 h-5 text-brand-600" />,
      title: "For Government and Standards Bodies",
      desc: "Government agencies and standard bodies, including national telecommunications regulators and agricultural approval authorities, gain structured market intelligence on how autonomous farming adoption patterns are evolving across application verticals. Country-level insights provide evidence-based context for policymakers developing rural IoT spectrum management frameworks and equipment certification standards."
    }
  ]

  return (
    <div className="mt-12 mb-12 pt-8">
      {/* 1. Investment Opportunities */}
      <div className="mb-16">
        <h2 className="text-[22px] font-bold text-brand-600 mb-2">What Are the Investment Opportunities in the Precision Agriculture Market?</h2>
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {opportunities.map((opp, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow break-inside-avoid">
              <h4 className="text-[15px] font-bold text-brand-900 mb-4">{opp.title}</h4>
              <p className="text-[13px] text-gray-600 leading-relaxed">{opp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Key Benefits */}
      <div className="mb-16">
        <h2 className="text-[22px] font-bold text-brand-600 mb-2">Key Benefits for Stakeholders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white border border-gray-200 border-t-[4px] border-t-brand-900 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <h4 className="text-[15px] font-bold text-brand-900 leading-tight">{benefit.title}</h4>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Key Market Segments */}
      <div>
        <h2 className="text-[22px] font-bold text-brand-600 mb-2">Key Market Segments Evaluated</h2>
      <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="space-y-10">
              <div>
                <h4 className="text-[15px] font-bold text-brand-900 mb-4 pb-2 border-b border-gray-200">By Component</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Hardware</li>
                  <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Software</li>
                  <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Services</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-brand-900 mb-4 pb-2 border-b border-gray-200">By Organisation Size</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Large Corporate Farms</li>
                  <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Small & Medium Enterprises (SMEs)</li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-[15px] font-bold text-brand-900 mb-4 pb-2 border-b border-gray-200">By Application</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Yield Monitoring & Forecasting</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Smart Irrigation Systems</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Crop Scouting & Phenotyping</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Variable Rate Technology (VRT)</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Livestock Health Tracking</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Autonomous Equipment Routing</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Weather Modeling</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Others</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-[15px] font-bold text-brand-900 mb-4 pb-2 border-b border-gray-200">By End-User</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Independent Farmers / Growers</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Agricultural Cooperatives</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Government & Research Entities</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Logistics & Cold-Chain Operators</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Retailers & Food Processors</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-600"><div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>Others</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
