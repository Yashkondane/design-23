export function ReportStatsGrid() {
  return (
    <div className="stat-grid" role="list" aria-label="Key market statistics">
      <div className="stat-card" role="listitem">
        <div className="stat-year">2025 &middot; Base Year</div>
        <div className="stat-value">9.7 <span>USD Bn</span></div>
        <div className="stat-label">Market Size</div>
      </div>
      <div className="stat-card" role="listitem">
        <div className="stat-year">2026 &middot; Current Estimate</div>
        <div className="stat-value">10.8 <span>USD Bn</span></div>
        <div className="stat-label">Revised Projection</div>
      </div>
      <div className="stat-card" role="listitem">
        <div className="stat-year">2035 &middot; Forecast</div>
        <div className="stat-value">28.6 <span>USD Bn</span></div>
        <div className="stat-label">Revenue Forecast</div>
      </div>
      <div className="stat-card cagr-card" role="listitem">
        <div className="stat-year">2026&ndash;2035 &middot; Period</div>
        <div className="stat-value">11.4 <span>%</span></div>
        <div className="stat-label">CAGR</div>
      </div>
    </div>
  );
}
