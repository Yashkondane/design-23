import { Leaf } from "lucide-react";
export function ReportFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand"><Leaf size={20} className="inline mr-2" /> Agriculture Industry Insights</div>
        <div className="footer-tagline">Global Agricultural Market Intelligence · 38 Countries · Trusted Research</div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#">About Us</a>
          <a href="#">All Reports</a>
          <a href="#">Methodology</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact</a>
        </nav>
        <div className="footer-copy">© 2026 Agriculture Industry Insights. All rights reserved. Report ID: AII-2274 · Precision Agriculture Market Research Report 2026–2035</div>
      </div>
    </footer>
  );
}
