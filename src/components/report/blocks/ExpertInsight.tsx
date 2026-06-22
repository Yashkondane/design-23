import { Quote } from "lucide-react"

export function ExpertInsight() {
  return (
    <div className="mt-12 mb-12 pt-8">
      {/* Title */}
      <h2 className="text-[22px] font-bold text-brand-600 mb-2">Expert Insights</h2>
      {/* Dark Card */}
      <div className="bg-brand-900 rounded-[20px] p-8 lg:p-10 shadow-lg relative overflow-hidden">
        
        {/* Large faint quote icon in top right */}
        <Quote className="absolute top-6 right-8 w-28 h-28 text-white/5 fill-white/5 rotate-180" />

        {/* Profile Section */}
        <div className="flex items-center gap-5 mb-8 relative z-10">
          <img 
            src="https://i.pravatar.cc/150?img=47" 
            alt="Sarah Jenkins" 
            className="w-[72px] h-[72px] rounded-full border border-white/20 object-cover shadow-sm ring-4 ring-white/5"
          />
          <div>
            <div className="text-[22px] font-bold text-white mb-1">Sarah Jenkins</div>
            <div className="text-[14px] font-bold text-[#86efac]">
              VP Hardware Engineering, Sensoriq
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-8 relative z-10">
          <p className="text-[17px] italic text-white/90 leading-relaxed font-light">
            "By combining our expertise in soil telemetry and AI models, we are enabling farm operators to create the next generation of smart autonomous harvesting solutions with ease."
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6 relative z-10"></div>

        {/* Market Interpretation */}
        <div className="relative z-10">
          <h4 className="text-[15px] font-bold text-white mb-2">Market Interpretation:</h4>
          <p className="text-[14px] text-white/70 leading-relaxed font-light">
            The comment highlights the increasing importance of integrated telemetry as a foundational connectivity technology in rural smart agriculture. As demand grows for resilient, interoperable, and low-power control systems, telemetry is becoming a critical component alongside complementary AI technologies. The statement also reflects a broader market trend toward multi-protocol connectivity platforms that enable seamless integration across smart farms, creating new growth opportunities for advanced sensor networks.
          </p>
        </div>

      </div>
    </div>
  )
}
