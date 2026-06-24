import { ShoppingCart, FileText, Mail, RefreshCw } from "lucide-react";
import { ReportStatsGrid } from "./ReportStatsGrid"

export function ReportHero() {
  return (
    <section className="hero" aria-label="Report overview">
      <div className="hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="https://www.agricultureindustryinsights.com">Home</a>
          <span className="sep" aria-hidden="true">&rsaquo;</span>
          <a href="https://www.agricultureindustryinsights.com/agritech">AgriTech</a>
          <span className="sep" aria-hidden="true">&rsaquo;</span>
          <span className="current">Precision Agriculture Market</span>
        </nav>

        <h1>Precision Agriculture Market <em>Size, Share &amp; Forecast</em> 2026&ndash;2035</h1>

        <div className="analyst-meta">
          <div className="analyst-avatar" aria-hidden="true">MK</div>
          <div className="analyst-info">
            <span className="analyst-byline">By <strong style={{color:"white"}}>Meera Krishnan</strong>, Senior Research Analyst</span>
            <div className="analyst-meta-row">
              <span>Reviewed by Daniel Okonkwo</span>
              <span className="sep">|</span>
              <span className="badge"><RefreshCw size={14} className="inline mr-1" /> Updated: June 2026</span>
              <span className="sep">|</span>
              <span>Report ID: AII-2274</span>
            </div>
          </div>
        </div>

        <ReportStatsGrid />

        <div className="cta-row">
          <a href="#buy" className="btn btn-primary"><span className="btn-icon"><ShoppingCart size={18} className="inline mr-2" /></span> Buy Report <span className="price-hint">USD 4,490</span></a>
          <a href="#sample" className="btn btn-secondary"><span className="btn-icon"><FileText size={18} className="inline mr-2" /></span> Free Sample</a>
          <a href="#enquire" className="btn btn-ghost"><span className="btn-icon"><Mail size={18} className="inline mr-2" /></span> Enquire</a>
        </div>
      </div>
    </section>
  );
}
