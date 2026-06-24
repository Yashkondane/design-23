"use client";

import { useState } from "react";
import { Globe, Pointer } from "lucide-react";

export function RegionalOutlook() {
  const [activeRegion, setActiveRegion] = useState<string>("na");
  return (
    <>
      
      <section className="content-section" id="regional" aria-labelledby="rg-heading">
        <h2 id="rg-heading">Precision Agriculture Market Regional Outlook</h2>
        <p style={{fontSize: "14px", color: "var(--muted)", marginBottom: "4px"}}><Pointer size={16} className="inline mr-1" /> Click a region to explore its key national markets and growth drivers.</p>

        
        <div className="region-selector" role="tablist" aria-label="Select a region">
          <button 
            className={`region-tab ${activeRegion === 'na' ? 'active' : ''}`} 
            role="tab" 
            aria-selected={activeRegion === 'na'} 
            onClick={() => setActiveRegion('na')}
          >
            <div className="region-name">North America</div>
            <div className="region-val">$10.3B by &apos;35</div>
          </button>
          <button 
            className={`region-tab ${activeRegion === 'eu' ? 'active' : ''}`} 
            role="tab" 
            aria-selected={activeRegion === 'eu'} 
            onClick={() => setActiveRegion('eu')}
          >
            <div className="region-name">Europe</div>
            <div className="region-val">$7.4B by &apos;35</div>
          </button>
          <button 
            className={`region-tab ${activeRegion === 'apac' ? 'active' : ''}`} 
            role="tab" 
            aria-selected={activeRegion === 'apac'} 
            onClick={() => setActiveRegion('apac')}
          >
            <div className="region-name">Asia-Pacific</div>
            <div className="region-val">$7.9B by &apos;35</div>
          </button>
          <button 
            className={`region-tab ${activeRegion === 'mea' ? 'active' : ''}`} 
            role="tab" 
            aria-selected={activeRegion === 'mea'} 
            onClick={() => setActiveRegion('mea')}
          >
            <div className="region-name">Middle East &amp; Africa</div>
            <div className="region-val">$1.8B by &apos;35</div>
          </button>
          <button 
            className={`region-tab ${activeRegion === 'latam' ? 'active' : ''}`} 
            role="tab" 
            aria-selected={activeRegion === 'latam'} 
            onClick={() => setActiveRegion('latam')}
          >
            <div className="region-name">Latin America</div>
            <div className="region-val">$1.2B by &apos;35</div>
          </button>
        </div>

        
        <div className={`region-detail ${activeRegion === 'na' ? 'active' : ''}`} id="region-na" role="tabpanel">
          <div className="region-detail-left">
            <div className="region-mini-stats">
              <div className="region-mini-stat"><div className="region-mini-label">2025 Size</div><div className="region-mini-val">$3.5B</div></div>
              <div className="region-mini-stat"><div className="region-mini-label">CAGR</div><div className="region-mini-val green">11.4%</div></div>
            </div>
            <p className="region-desc">North America is the dominant regional market, anchored by large-scale row-crop operations, advanced farm machinery adoption, and the headquartering of pivotal agritech players like John Deere, Trimble, and AGCO.</p>
            <div className="region-driver-box"><strong>Primary Driver:</strong> Large commercial farms, established dealer networks, mature equipment financing</div>
          </div>
          <div className="region-detail-right">
            <div className="key-markets-title"><Globe size={20} className="inline mr-2" /> Key National Markets</div>
            <div className="country-grid">
              <div className="country-card" tabIndex={0} role="button">
                <div className="country-head"><img src="https://flagcdn.com/us.svg" alt="" className="country-flag" /><span className="country-name">United States</span></div>
                <div className="country-desc">Commands over 85% of regional revenue. The largest base of precision-equipped commercial farms and deepest agritech R&amp;D ecosystem drive sustained demand.</div>
              </div>
              <div className="country-card" tabIndex={0} role="button">
                <div className="country-head"><img src="https://flagcdn.com/ca.svg" alt="" className="country-flag" /><span className="country-name">Canada</span></div>
                <div className="country-desc">Strong growth supported by large-scale prairie grain farming and increasing adoption of variable rate and GPS-guided machinery.</div>
              </div>
            </div>
          </div>
        </div>

        
        <div className={`region-detail ${activeRegion === 'eu' ? 'active' : ''}`} id="region-eu" role="tabpanel">
          <div className="region-detail-left">
            <div className="region-mini-stats">
              <div className="region-mini-stat"><div className="region-mini-label">2025 Size</div><div className="region-mini-val">$2.6B</div></div>
              <div className="region-mini-stat"><div className="region-mini-label">CAGR</div><div className="region-mini-val green">11.0%</div></div>
            </div>
            <p className="region-desc">Europe&apos;s precision agriculture market is driven by the EU Common Agricultural Policy&apos;s digital farming incentives and stringent environmental regulations promoting input-efficient farming practices.</p>
            <div className="region-driver-box"><strong>Primary Driver:</strong> CAP digital subsidies, sustainability mandates, fertilizer-runoff regulation</div>
          </div>
          <div className="region-detail-right">
            <div className="key-markets-title"><Globe size={20} className="inline mr-2" /> Key National Markets</div>
            <div className="country-grid">
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/de.svg" alt="" className="country-flag" /><span className="country-name">Germany</span></div><div className="country-desc">Leading European market, supported by advanced agricultural machinery manufacturing and high mechanization rates.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/fr.svg" alt="" className="country-flag" /><span className="country-name">France</span></div><div className="country-desc">Largest EU agricultural producer with strong adoption of precision technology across cereal and vineyard operations.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/gb.svg" alt="" className="country-flag" /><span className="country-name">United Kingdom</span></div><div className="country-desc">Growing adoption driven by post-Brexit agricultural policy emphasizing productivity and environmental stewardship.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/nl.svg" alt="" className="country-flag" /><span className="country-name">Netherlands</span></div><div className="country-desc">High-intensity precision horticulture leader, with greenhouse and controlled-environment agriculture driving sensor demand.</div></div>
            </div>
          </div>
        </div>

        
        <div className={`region-detail ${activeRegion === 'apac' ? 'active' : ''}`} id="region-apac" role="tabpanel">
          <div className="region-detail-left">
            <div className="region-mini-stats">
              <div className="region-mini-stat"><div className="region-mini-label">2025 Size</div><div className="region-mini-val">$2.1B</div></div>
              <div className="region-mini-stat"><div className="region-mini-label">CAGR</div><div className="region-mini-val green">14.6%</div></div>
            </div>
            <p className="region-desc">Asia-Pacific is the fastest-growing region in the Precision Agriculture market, driven by food-security imperatives, government mechanization programs, and a rapidly expanding agritech startup ecosystem across China, India, and Australia.</p>
            <div className="region-driver-box"><strong>Primary Driver:</strong> Food security mandates, mechanization subsidies, agritech startups</div>
          </div>
          <div className="region-detail-right">
            <div className="key-markets-title"><Globe size={20} className="inline mr-2" /> Key National Markets</div>
            <div className="country-grid">
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/cn.svg" alt="" className="country-flag" /><span className="country-name">China</span></div><div className="country-desc">Largest APAC market, with state-backed agricultural modernization driving domestic drone and machinery adoption at scale.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/in.svg" alt="" className="country-flag" /><span className="country-name">India</span></div><div className="country-desc">Fastest-growing national market, supported by mechanization subsidies, agritech startup expansion, and drone-spraying policy liberalization.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/au.svg" alt="" className="country-flag" /><span className="country-name">Australia</span></div><div className="country-desc">Mature broadacre precision farming market with high GPS-guidance and variable rate adoption across large grain operations.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/jp.svg" alt="" className="country-flag" /><span className="country-name">Japan</span></div><div className="country-desc">Aging farmer population driving strong demand for autonomous and robotic farm machinery to offset labor shortages.</div></div>
            </div>
          </div>
        </div>

        
        <div className={`region-detail ${activeRegion === 'mea' ? 'active' : ''}`} id="region-mea" role="tabpanel">
          <div className="region-detail-left">
            <div className="region-mini-stats">
              <div className="region-mini-stat"><div className="region-mini-label">2025 Size</div><div className="region-mini-val">$0.7B</div></div>
              <div className="region-mini-stat"><div className="region-mini-label">CAGR</div><div className="region-mini-val green">10.0%</div></div>
            </div>
            <p className="region-desc">The Middle East &amp; Africa market is driven by water-scarcity-led precision irrigation adoption and large-scale commercial farming investments in Gulf states and South Africa.</p>
            <div className="region-driver-box"><strong>Primary Driver:</strong> Water-efficient irrigation, food-security investment, commercial agriculture</div>
          </div>
          <div className="region-detail-right">
            <div className="key-markets-title"><Globe size={20} className="inline mr-2" /> Key National Markets</div>
            <div className="country-grid">
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/za.svg" alt="" className="country-flag" /><span className="country-name">South Africa</span></div><div className="country-desc">Most advanced precision agriculture market in Africa, with commercial grain and fruit operations driving adoption.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/sa.svg" alt="" className="country-flag" /><span className="country-name">Saudi Arabia</span></div><div className="country-desc">Water-scarcity-driven precision irrigation investment under national food-security and Vision 2030 programs.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/ae.svg" alt="" className="country-flag" /><span className="country-name">UAE</span></div><div className="country-desc">Leading controlled-environment and vertical farming adoption driven by arid-climate food production goals.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/eg.svg" alt="" className="country-flag" /><span className="country-name">Egypt</span></div><div className="country-desc">Nile-delta precision irrigation adoption growing under government agricultural modernization initiatives.</div></div>
            </div>
          </div>
        </div>

        
        <div className={`region-detail ${activeRegion === 'latam' ? 'active' : ''}`} id="region-latam" role="tabpanel">
          <div className="region-detail-left">
            <div className="region-mini-stats">
              <div className="region-mini-stat"><div className="region-mini-label">2025 Size</div><div className="region-mini-val">$0.5B</div></div>
              <div className="region-mini-stat"><div className="region-mini-label">CAGR</div><div className="region-mini-val green">9.2%</div></div>
            </div>
            <p className="region-desc">Latin America&apos;s market is anchored by large-scale soybean and sugarcane operations in Brazil and Argentina, where precision technology drives yield optimization across vast farming areas.</p>
            <div className="region-driver-box"><strong>Primary Driver:</strong> Large-scale export agriculture, soybean &amp; sugarcane yield optimization</div>
          </div>
          <div className="region-detail-right">
            <div className="key-markets-title"><Globe size={20} className="inline mr-2" /> Key National Markets</div>
            <div className="country-grid">
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/br.svg" alt="" className="country-flag" /><span className="country-name">Brazil</span></div><div className="country-desc">Dominant regional market, driven by massive commercial soybean, corn, and sugarcane operations adopting precision at scale.</div></div>
              <div className="country-card" tabIndex={0} role="button"><div className="country-head"><img src="https://flagcdn.com/ar.svg" alt="" className="country-flag" /><span className="country-name">Argentina</span></div><div className="country-desc">Strong adoption across Pampas grain belt, with high penetration of GPS-guidance and yield monitoring technology.</div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}