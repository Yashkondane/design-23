import { Tractor, TrendingUp, Settings } from "lucide-react";
export function Stakeholders() {
  return (
    <>
      
      <section className="content-section" id="stakeholders" aria-labelledby="sh-heading">
        <h2 id="sh-heading">Key Benefits for Stakeholders</h2>
        <div className="stakeholder-grid">
          <div className="stakeholder-card"><div className="stakeholder-icon"><Tractor size={32} /></div><div className="stakeholder-title">What Does This Report Offer Agribusiness Leaders and Farm Operators?</div><div className="stakeholder-body">This report provides agribusiness decision-makers with a validated technology adoption roadmap through 2035. The segmentation analysis and regional sizing data enable direct comparison of technology ROI, while the competitive landscape identifies the vendor ecosystems best aligned with specific farm scales and crop types.</div></div>
          <div className="stakeholder-card"><div className="stakeholder-icon"><TrendingUp size={32} /></div><div className="stakeholder-title">What Does This Report Offer Investors and Financial Analysts?</div><div className="stakeholder-body">Investors will find quantified, 10-year segment and regional forecast data verified through AII&apos;s triangulation methodology. The investment opportunities section maps capital flow patterns and M&amp;A activity through 2026, providing a structured framework for evaluating the USD 18.9 billion cumulative opportunity window.</div></div>
          <div className="stakeholder-card"><div className="stakeholder-icon"><Settings size={32} /></div><div className="stakeholder-title">What Does This Report Offer Technology Vendors and Product Teams?</div><div className="stakeholder-body">Vendors can use the segmentation analysis and latest developments data to benchmark positioning against the 17 profiled competitors and identify white-space opportunities in high-growth segments including Variable Rate Technology (13.8% CAGR) and the Asia-Pacific region (14.6% CAGR).</div></div>
        </div>
      </section>
    </>
  );
}