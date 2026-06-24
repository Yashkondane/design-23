import { TrendingUp, Sprout } from "lucide-react";
export function MarketSize() {
  return (
    <section className="content-section" id="market-size" aria-labelledby="ms-heading">
      <h2 id="ms-heading">What Is the Precision Agriculture Market Size?</h2>

      <p>The global <strong>Precision Agriculture market</strong> was valued at USD 9.7 billion in 2025 and is projected to grow from USD 10.8 billion in 2026 to USD 28.6 billion by 2035, at a CAGR of 11.4% from 2026&ndash;2035. North America led the market with approximately 36% revenue share in 2025. By technology, GPS/GNSS guidance systems accounted for the largest share of approximately 31% in 2025.</p>

      <div className="quick-stats" role="list" aria-label="Key market highlights">
        <div className="qs-item"><span className="qs-label">By Technology:</span><span className="qs-value">GPS/GNSS guidance systems held the largest revenue share of approximately 31% in 2025.</span></div>
        <div className="qs-item"><span className="qs-label">By Technology:</span><span className="qs-value">Variable Rate Technology (VRT) is projected to register the highest CAGR of 13.8% from 2026&ndash;2035.</span></div>
        <div className="qs-item"><span className="qs-label">By Application:</span><span className="qs-value">Yield monitoring accounted for approximately 27% of revenue in 2025.</span></div>
        <div className="qs-item"><span className="qs-label">Regional Leader:</span><span className="qs-value">North America dominated with approximately 36% revenue share in 2025.</span></div>
        <div className="qs-item"><span className="qs-label">Fastest-Growing Region:</span><span className="qs-value">Asia-Pacific is expected to register the highest CAGR of 14.6% during 2026&ndash;2035.</span></div>
      </div>

      <div className="opportunity-callout" role="note">
        <span className="icon"><Sprout size={24} /></span>
        <span><strong>Market Opportunity:</strong> The Precision Agriculture market is expected to create an absolute dollar opportunity of <strong>USD 18.9 billion</strong> between 2026 and 2035, presenting significant investment potential across the agricultural technology value chain.</span>
      </div>

      <p className="nmsc-attr">According to Agriculture Industry Insights analysis, the convergence of satellite-driven field mapping, AI-powered crop analytics, and autonomous machinery is accelerating precision agriculture adoption beyond large commercial farms into mid-sized operations across emerging economies, fundamentally reshaping the addressable market.</p>

      <table className="params-table" aria-label="Precision Agriculture Market Parameters">
        <tbody>
          <tr><td>Market Size in 2025</td><td className="highlight">USD 9.7 Billion</td></tr>
          <tr><td>Market Size in 2026</td><td className="highlight">USD 10.8 Billion</td></tr>
          <tr><td>Revenue Forecast in 2035</td><td className="highlight">USD 28.6 Billion</td></tr>
          <tr><td>Growth Rate</td><td className="highlight">CAGR of 11.4% from 2026 to 2035</td></tr>
          <tr><td>Analysis Period</td><td>2025&ndash;2035</td></tr>
          <tr><td>Base Year Considered</td><td>2025</td></tr>
          <tr><td>Forecast Period</td><td>2026&ndash;2035</td></tr>
          <tr><td>Market Size Estimation</td><td>Revenue (USD Billion) &mdash; AII Industry-Derived Estimate</td></tr>
          <tr><td>Companies Profiled</td><td>17</td></tr>
          <tr><td>Countries Covered</td><td>38</td></tr>
          <tr><td>Market Share Available</td><td>Top 10 Companies</td></tr>
        </tbody>
      </table>
      <p className="source-line">Source: AII Analysis, 2026</p>

      <figure className="chart-container" aria-label="Precision Agriculture Market Size, 2026–2035">
        <div className="chart-header"><TrendingUp size={20} className="inline mr-2" /> Precision Agriculture Market Size, 2026&ndash;2035 (USD Billion)</div>
        <div className="chart-body" role="img" aria-label="Bar chart showing market growth from 10.8 billion in 2026 to 28.6 billion in 2035">
          <div className="chart-bar-group"><span className="chart-bar-val">10.8</span><div className="chart-bar" style={{height:"46px"}}></div><span className="chart-bar-label">2026</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val">12.0</span><div className="chart-bar" style={{height:"51px"}}></div><span className="chart-bar-label">2027</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val">13.4</span><div className="chart-bar" style={{height:"57px"}}></div><span className="chart-bar-label">2028</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val">14.9</span><div className="chart-bar" style={{height:"64px"}}></div><span className="chart-bar-label">2029</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val">16.6</span><div className="chart-bar" style={{height:"71px"}}></div><span className="chart-bar-label">2030</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val">18.5</span><div className="chart-bar" style={{height:"79px"}}></div><span className="chart-bar-label">2031</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val">20.6</span><div className="chart-bar" style={{height:"88px"}}></div><span className="chart-bar-label">2032</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val">23.0</span><div className="chart-bar" style={{height:"99px"}}></div><span className="chart-bar-label">2033</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val">25.6</span><div className="chart-bar" style={{height:"110px"}}></div><span className="chart-bar-label">2034</span></div>
          <div className="chart-bar-group"><span className="chart-bar-val" style={{color:"var(--harvest)"}}>28.6</span><div className="chart-bar" style={{height:"122px", background:"linear-gradient(180deg,var(--harvest),var(--leaf))"}}></div><span className="chart-bar-label" style={{color:"var(--harvest)",fontWeight:600}}>2035</span></div>
        </div>
        <figcaption>Precision Agriculture Market Size Forecast, 2026&ndash;2035 (USD Billion) &mdash; Source: AII Analysis, 2026</figcaption>
      </figure>
    </section>
  );
}
