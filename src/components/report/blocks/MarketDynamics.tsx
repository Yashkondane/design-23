import { Zap, AlertTriangle } from "lucide-react";
export function MarketDynamics() {
  return (
    <section className="content-section" id="drivers" aria-labelledby="dr-heading">
      <h2 id="dr-heading">Growth Drivers, Restraints &amp; Opportunities</h2>

      <div className="dro-q-grid">
        <div>
          <div className="dro-q-head">
            <div className="dro-q-icon driver" aria-hidden="true"><Zap size={24} /></div>
            <div className="dro-q-title">What Are the Growth Drivers?</div>
          </div>
          <ul className="dro-list drivers">
            <li>Rising global food demand requiring yield optimization on finite arable land</li>
            <li>Declining cost of IoT sensors, drones, and GPS hardware</li>
            <li>Government subsidies for farm mechanization and sustainable practices</li>
            <li>Acute agricultural labor shortages driving automation</li>
          </ul>
        </div>
        <div>
          <div className="dro-q-head">
            <div className="dro-q-icon inhibitor" aria-hidden="true"><AlertTriangle size={24} /></div>
            <div className="dro-q-title">What Are the Growth Inhibitors?</div>
          </div>
          <ul className="dro-list inhibitors">
            <li>High initial capital investment for smallholder farmers</li>
            <li>Limited rural broadband and data connectivity in emerging markets</li>
            <li>Fragmented land holdings reducing per-farm ROI</li>
            <li>Digital literacy gaps among aging farmer populations</li>
          </ul>
        </div>
      </div>

      <h3>Why Is Rising Global Food Demand the Primary Growth Driver for the Precision Agriculture Market?</h3>
      <p>As of 2026, the United Nations Food and Agriculture Organization projects that global food production must increase by approximately 60% by 2050 to feed a growing population, with limited expansion possible in arable land. This structural demand is driving farms to adopt precision technologies that increase yield per acre. AII&apos;s findings suggest this driver alone contributes approximately 3.5 percentage points to the market&apos;s CAGR through 2035.</p>

      <h3>What Is Restraining Broader Adoption of Precision Agriculture?</h3>
      <p>The primary adoption restraint is the high initial capital investment required for precision equipment relative to farm income in developing economies. As of Q1 2026, a fully equipped precision agriculture system can cost between USD 25,000 and USD 150,000 depending on farm scale, representing a significant barrier for smallholder farmers who constitute the majority of farms in Asia-Pacific and Sub-Saharan Africa.</p>

      <h3>How Are Agritech Startups Creating Market Opportunities?</h3>
      <p>Through our market assessment, we observed that agritech startups offering equipment-as-a-service and pay-per-acre models are removing the upfront capital barrier, attracting over USD 1.8 billion in venture funding in 2025 according to publicly available investment announcements. This business model innovation creates significant commercial opportunity in the mid-sized and smallholder farm segments previously considered uneconomical.</p>
    </section>
  );
}
