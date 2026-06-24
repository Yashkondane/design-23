import React from 'react'

export const NewsChart: React.FC = () => {
  return (
    <figure className="news-hero-figure" aria-label="Electric Vehicle Market Size Forecast Chart">
      <div className="news-hero-img" role="img" aria-label="Electric Vehicle Market Size & Forecast 2026–2035 (USD Billion) — NMSC">
        <div className="hero-chart-vis" aria-hidden="true">
          <div className="hero-chart-bars">
            <div className="hbar" style={{ height: '22%', background: 'rgba(255,255,255,0.25)' }}>
              <span className="hbar-val">$500B</span>
              <span className="hbar-lbl">2025</span>
            </div>
            <div className="hbar" style={{ height: '27%', background: 'rgba(255,255,255,0.28)' }}>
              <span className="hbar-val">$616B</span>
              <span className="hbar-lbl">2026</span>
            </div>
            <div className="hbar" style={{ height: '33%', background: 'rgba(255,255,255,0.31)' }}>
              <span className="hbar-lbl">2027</span>
            </div>
            <div className="hbar" style={{ height: '41%', background: 'rgba(255,255,255,0.34)' }}>
              <span className="hbar-lbl">2028</span>
            </div>
            <div className="hbar" style={{ height: '50%', background: 'rgba(255,255,255,0.37)' }}>
              <span className="hbar-lbl">2029</span>
            </div>
            <div className="hbar" style={{ height: '61%', background: 'rgba(255,255,255,0.40)' }}>
              <span className="hbar-lbl">2030</span>
            </div>
            <div className="hbar" style={{ height: '72%', background: 'rgba(255,255,255,0.43)' }}>
              <span className="hbar-lbl">2031</span>
            </div>
            <div className="hbar" style={{ height: '81%', background: 'rgba(255,255,255,0.46)' }}>
              <span className="hbar-lbl">2032</span>
            </div>
            <div className="hbar" style={{ height: '88%', background: 'rgba(255,255,255,0.49)' }}>
              <span className="hbar-lbl">2033</span>
            </div>
            <div className="hbar" style={{ height: '94%', background: 'rgba(255,255,255,0.52)' }}>
              <span className="hbar-lbl">2034</span>
            </div>
            <div className="hbar" style={{ height: '100%', background: 'var(--harvest)' }}>
              <span className="hbar-val" style={{ color: 'var(--forest)' }}>$3.9T</span>
              <span className="hbar-lbl" style={{ color: 'var(--wheat)' }}>2035</span>
            </div>
          </div>
          <div className="hero-chart-title">Electric Vehicle Market Size (USD Billion), 2025–2035 · CAGR: 23.1%</div>
        </div>
      </div>
      <figcaption>Electric Vehicle Market Size Forecast, 2026–2035 (USD Billion) — Source: NMSC Analysis, 2025</figcaption>
    </figure>
  )
}
