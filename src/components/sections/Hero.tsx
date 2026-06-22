import Image from "next/image"
import { Search, FileText, Globe, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-8 lg:py-12 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Agriculture Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay - Sophisticated dark green/black gradient for text legibility */}
      <div className="absolute inset-0 bg-brand-900/20 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Premium Typography with Gradient Highlight */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-3 tracking-tight drop-shadow-lg">
          Agriculture Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-300 drop-shadow-none">Intelligence</span> <br className="hidden md:block" />
          &amp; Industry Insights
        </h1>
        
        {/* Subtext with high-contrast shadow */}
        <p className="text-base md:text-lg text-brand-50 mb-6 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
          Real-time agriculture news, market analysis, technology trends and industry research covering
          AgriTech, Precision Agriculture, Farm Equipment, Irrigation, Livestock and Food Processing.
        </p>

        {/* Premium Glassmorphic Search Bar */}
        <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/40 flex items-center mb-6 max-w-2xl w-full mx-auto transition-transform hover:scale-[1.015] duration-300">
          <div className="pl-4 pr-2 text-brand-600">
            <Search className="w-5 h-5 lg:w-6 lg:h-6" />
          </div>
          <input
            type="text"
            placeholder="Search reports, articles, news..."
            className="flex-1 bg-transparent py-3 focus:outline-none text-gray-800 placeholder-gray-500 font-medium text-base lg:text-lg"
          />
          <button className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white px-6 lg:px-8 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-[0_4px_15px_rgba(34,197,94,0.4)]">
            Search
          </button>
        </div>

        {/* Soft Glass Tags */}
        <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-3 text-xs md:text-sm">
          <span className="font-semibold text-white drop-shadow-md mr-1">Popular Searches:</span>
          {["AgriTech", "Precision Agriculture", "Drones", "Sustainability"].map((tag) => (
            <a
              key={tag}
              href="#"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-brand-500 hover:border-brand-400 text-white backdrop-blur-md border border-white/20 transition-all duration-300 shadow-sm"
            >
              {tag}
            </a>
          ))}
        </div>

        {/* Refined Glassmorphic Key Stats */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 mt-8 w-full max-w-4xl">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-5 lg:px-6 py-3.5 shadow-xl hover:bg-white/20 transition-colors duration-300">
            <div className="bg-white/20 text-white rounded-full p-2.5 border border-white/20 shadow-inner">
              <FileText className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="text-left">
              <p className="text-xl lg:text-2xl font-bold text-white leading-none mb-1 drop-shadow-sm">1,200+</p>
              <p className="text-[11px] lg:text-xs text-brand-100 font-semibold uppercase tracking-wider drop-shadow-sm">Reports</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-5 lg:px-6 py-3.5 shadow-xl hover:bg-white/20 transition-colors duration-300">
            <div className="bg-white/20 text-white rounded-full p-2.5 border border-white/20 shadow-inner">
              <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="text-left">
              <p className="text-xl lg:text-2xl font-bold text-white leading-none mb-1 drop-shadow-sm">50+</p>
              <p className="text-[11px] lg:text-xs text-brand-100 font-semibold uppercase tracking-wider drop-shadow-sm">Countries Covered</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-5 lg:px-6 py-3.5 shadow-xl hover:bg-white/20 transition-colors duration-300">
            <div className="bg-white/20 text-white rounded-full p-2.5 border border-white/20 shadow-inner">
              <Users className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="text-left">
              <p className="text-xl lg:text-2xl font-bold text-white leading-none mb-1 drop-shadow-sm">10,000+</p>
              <p className="text-[11px] lg:text-xs text-brand-100 font-semibold uppercase tracking-wider drop-shadow-sm">Monthly Readers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
