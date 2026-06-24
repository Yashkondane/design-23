import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="site-footer-custom" role="contentinfo">
      <div className="container-custom">
        <div className="footer-grid-custom">

          <div className="footer-brand">
            <Link href="/" aria-label="Agriculture Industry Insights Homepage">
              <span className="footer-logo-name-custom">AII</span>
              <span className="footer-logo-sub-custom">Agriculture Industry Insights</span>
            </Link>
            <p className="footer-tagline-custom">
              Global agriculture market intelligence for strategic decisions. 20,000+ reports. 10+ industry verticals. 38 countries. Founded 2018.
            </p>
            <div className="footer-social-custom">
              <a href="https://linkedin.com" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h-2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 1 0-1.37-1.37 1.37 1.37 0 0 0 1.37 1.37M8 18.5V10.13H5.2v8.37H8z"/></svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter X" rel="noopener noreferrer" target="_blank">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1H13a4 4 0 0 0-4 4v3z"/></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" rel="noopener noreferrer" target="_blank">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-1-1.9-1-2.4-1.1C16.7 2.5 12 2.5 12 2.5s-4.7 0-8.2.2c-.5.1-1.5.1-2.4 1.1-.7.7-.9 2.4-.9 2.4S.3 8.2.3 10.1v1.8c0 1.9.2 3.9.2 3.9s.2 1.7.9 2.4c.9 1 2.1.9 2.6 1 2 .2 8 .2 8 .2s4.7 0 8.2-.2c.5-.1 1.5-.1 2.4-1.1.7-.7.9-2.4.9-2.4s.2-2 .2-3.9v-1.8c.1-1.9-.1-3.9-.1-3.9zM9.5 14.2V7.8l6.5 3.2-6.5 3.2z"/></svg>
              </a>
            </div>
            <div className="footer-contact-custom text-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <Mail size={12} className="text-emerald-500" />
                <a href="mailto:info@agricultureindustryinsights.com" className="hover:text-white transition-colors">info@agricultureindustryinsights.com</a>
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <Mail size={12} className="text-emerald-500" />
                <a href="mailto:sales@agricultureindustryinsights.com" className="hover:text-white transition-colors">sales@agricultureindustryinsights.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-emerald-500" />
                <span>100 State Street, Suite 900, Albany, NY 12207, US</span>
              </div>
            </div>
          </div>

          <div className="footer-col-custom">
            <h4>Agriculture Reports</h4>
            <ul>
              <li><Link href="/category/agritech-innovation">AgriTech &amp; Innovation</Link></li>
              <li><Link href="/category/precision-agriculture">Precision Agriculture</Link></li>
              <li><Link href="/category/farm-equipment-machinery">Farm Machinery &amp; Equipment</Link></li>
              <li><Link href="/category/irrigation-water-management">Irrigation &amp; Water</Link></li>
              <li><Link href="/category/livestock-monitoring">Livestock Monitoring</Link></li>
              <li><Link href="/reports" className="font-bold text-white">All Reports →</Link></li>
            </ul>
          </div>

          <div className="footer-col-custom">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About AII</Link></li>
              <li><Link href="/about#methodology">Research Methodology</Link></li>
              <li><Link href="/analysts">Our Analysts</Link></li>
              <li><Link href="/news">News &amp; Press</Link></li>
              <li><Link href="/blogs">Insights Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col-custom">
            <h4>Services</h4>
            <ul>
              <li><Link href="/custom-research">Custom Market Research</Link></li>
              <li><Link href="/free-sample">Free Report Sample</Link></li>
              <li><Link href="/enterprise">Enterprise License</Link></li>
              <li><Link href="/consulting">Strategy Consulting</Link></li>
              <li><Link href="/api">Data API Access</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom-custom text-xs">
          <p>© 2026 Agriculture Industry Insights. All Rights Reserved.</p>
          <div className="footer-legal-custom">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
