import React from "react";

export function PortersFiveForces() {
  return (
    <div className="mb-16">
      <div className="mb-10 relative pb-4">
        <h2 className="text-[22px] font-bold text-brand-600 mb-2">Porter's Five Forces Analysis</h2>
        <p className="text-[14px] text-gray-500 font-medium">Evaluation of competitive intensity and attractiveness within the global Precision Agriculture Market.</p>
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-brand-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Threat of New Entrants */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-bold text-[#1e293b]">Threat of New Entrants</h3>
            <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded-md">Low</span>
          </div>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            High capital requirements and technical expertise create significant barriers. Building integrated precision ag platforms requires advanced AI capabilities, satellite data access, and extensive field trials.
          </p>
        </div>

        {/* Buyer's Power */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-bold text-[#1e293b]">Buyer's Power</h3>
            <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2.5 py-1 rounded-md">High</span>
          </div>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Large commercial farm operators and agricultural cooperatives hold significant leverage, demanding interoperable solutions and proven ROI before committing to expensive hardware and software ecosystems.
          </p>
        </div>

        {/* Supplier's Power */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-bold text-[#1e293b]">Supplier's Power</h3>
            <span className="bg-yellow-100 text-yellow-700 text-[11px] font-bold px-2.5 py-1 rounded-md">Moderate</span>
          </div>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            While hardware components (sensors, drones) are becoming commoditized, specialized suppliers of high-resolution satellite imagery and agricultural machine learning datasets maintain considerable pricing power.
          </p>
        </div>
      </div>

      {/* Bottom Row: 2 items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3">
        {/* Threat of Substitute */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-bold text-[#1e293b]">Threat of Substitute</h3>
            <span className="bg-orange-100 text-orange-700 text-[11px] font-bold px-2.5 py-1 rounded-md">Low</span>
          </div>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Traditional farming methods are becoming obsolete due to climate pressures and resource constraints. There are currently no viable technological substitutes for data-driven precision agriculture.
          </p>
        </div>

        {/* Competitive Rivalry */}
        <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-100 p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-bold text-[#1e293b]">Competitive Rivalry</h3>
            <span className="bg-red-100 text-red-700 text-[11px] font-bold px-2.5 py-1 rounded-md">High</span>
          </div>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Intense competition exists between legacy agricultural machinery giants expanding into software, and pure-play agritech startups attempting to disrupt the data analytics value chain.
          </p>
        </div>
      </div>
    </div>
  );
}
