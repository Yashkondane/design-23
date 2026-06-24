"use client";

import { useEffect, useState } from "react";
import { FileText, CheckCircle2, Leaf, Calendar, Globe, Building, BarChart, Hash, ShoppingCart, Phone, User, ClipboardList, Link, Mail, Search } from "lucide-react";

interface ReportSidebarProps {
  hideBuyCard?: boolean;
}

export function ReportSidebar({ hideBuyCard = false }: ReportSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    const sectionIds = [
      'market-size', 'overview', 'key-takeaways', 'trends', 'drivers',
      'dataset', 'segmentation', 'opportunities', 'swot', 'regional',
      'competitive', 'companies', 'developments', 'expert', 'investment',
      'conclusion', 'faq', 'sources'
    ];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeId) return;
    const activeLink = document.querySelector(`.toc-list a[href="#${activeId}"]`);
    const sidebar = document.querySelector(`.sidebar`) as HTMLElement;
    const tocList = document.querySelector(`.toc-list`);
    
    if (activeLink && sidebar && tocList) {
      const links = Array.from(tocList.querySelectorAll('a'));
      const index = links.indexOf(activeLink as HTMLAnchorElement);
      if (index === -1) return;

      const total = links.length;
      
      // Top boundary: fully reveal top cards
      if (index <= 1) {
        sidebar.scrollTo({ top: 0, behavior: "smooth" });
        return;
      } 
      // Bottom boundary: fully reveal bottom cards
      if (index >= total - 2) {
        sidebar.scrollTo({ top: sidebar.scrollHeight, behavior: "smooth" });
        return;
      } 
      
      // Middle boundary check: ensure the active link is strictly visible!
      const linkRect = activeLink.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();

      // We calculate an ABSOLUTE target top. 
      // This mathematically guarantees a smooth scroll that won't "bounce" even if triggered rapidly mid-animation.
      if (linkRect.bottom > sidebarRect.bottom) {
        const targetTop = sidebar.scrollTop + (linkRect.bottom - sidebarRect.bottom) + 60;
        sidebar.scrollTo({ top: targetTop, behavior: "smooth" });
      } else if (linkRect.top < sidebarRect.top) {
        const targetTop = sidebar.scrollTop + (linkRect.top - sidebarRect.top) - 60;
        sidebar.scrollTo({ top: targetTop, behavior: "smooth" });
      }
    }
  }, [activeId]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <>
      <aside className="sidebar" aria-label="Report details and navigation">


        {!hideBuyCard && (
          <div className="sidebar-card" id="buy">
            <div className="sidebar-card-header"><Leaf size={18} className="inline mr-2" /> Get This Report</div>
            <div className="sidebar-card-body">
              <div className="report-price">USD 4,490 <sub>/ license</sub></div>
              <div className="price-note">Single-user PDF + Excel data file</div>
              <ul className="report-meta">
                <li><span className="meta-icon"><FileText size={16} className="inline mr-2" /></span> <strong>Pages:</strong> 295</li>
                <li><span className="meta-icon"><Calendar size={16} className="inline mr-2" /></span> <strong>Updated:</strong> June 2026</li>
                <li><span className="meta-icon"><Globe size={16} className="inline mr-2" /></span> <strong>Coverage:</strong> 38 Countries</li>
                <li><span className="meta-icon"><Building size={16} className="inline mr-2" /></span> <strong>Companies:</strong> 17 Profiled</li>
                <li><span className="meta-icon"><BarChart size={16} className="inline mr-2" /></span> <strong>Format:</strong> PDF + Excel</li>
                <li><span className="meta-icon"><Hash size={16} className="inline mr-2" /></span> <strong>Report ID:</strong> AII-2274</li>
              </ul>
              <div className="sidebar-btns">
                <a href="#" className="sb-btn sb-btn-primary" id="sample"><ShoppingCart size={16} className="inline mr-2" /> Buy Report — USD 4,490</a>
                <a href="#" className="sb-btn sb-btn-secondary"><FileText size={16} className="inline mr-2" /> Download Free Sample</a>
                <a href="#" className="sb-btn sb-btn-ghost"><Phone size={16} className="inline mr-2" /> Speak to an Analyst</a>
              </div>
            </div>
          </div>
        )}


        <div className="tailored-card" id="enquire">
          <div className="tailored-body">
            <h3>Need a Tailored Report?</h3>
            <div className="sub">Customize this report to your needs</div>
            <div className="tailored-offer">Get 30% FREE <span>Customization</span></div>
            <a href="#" className="tailored-cta">Customize This Report</a>
          </div>
          <div className="tailored-footer">
            <span className="fact-checked"><CheckCircle2 size={14} className="inline mr-1" color="#10B981" /> Fact-Checked</span>
            <span className="cite-link" onClick={() => console.log('citeResearch()')}>Cite this Research</span>
          </div>
        </div>


        <div className="sidebar-card">
          <div className="sidebar-card-header"><User size={18} className="inline mr-2" /> Report Author</div>
          <div className="sidebar-card-body">
            <div className="analyst-profile">
              <div className="analyst-photo" aria-hidden="true">MK</div>
              <div>
                <div className="analyst-profile-name">Meera Krishnan</div>
                <div className="analyst-profile-title">Senior Research Analyst, AgriTech</div>
                <div className="analyst-profile-bio">9+ years of experience in agricultural technology and food-systems market intelligence. Specializes in precision farming, agri-inputs, and sustainable agriculture markets for global clients.</div>
              </div>
            </div>
          </div>
        </div>


        <div className="sidebar-card toc-card">
          <div className="sidebar-card-header"><ClipboardList size={18} className="inline mr-2" /> Table of Contents</div>
          <div className="sidebar-card-body" style={{ padding: "0 18px" }}>
            <ol className="toc-list">
              <li><a href="#market-size" className={activeId === 'market-size' ? 'active' : ''} onClick={(e) => handleScroll(e, 'market-size')}>What Is the Precision Agriculture Market Size?</a></li>
              <li><a href="#overview" className={activeId === 'overview' ? 'active' : ''} onClick={(e) => handleScroll(e, 'overview')}>Market Overview</a></li>
              <li><a href="#key-takeaways" className={activeId === 'key-takeaways' ? 'active' : ''} onClick={(e) => handleScroll(e, 'key-takeaways')}>Key Takeaways</a></li>
              <li><a href="#trends" className={activeId === 'trends' ? 'active' : ''} onClick={(e) => handleScroll(e, 'trends')}>Key Emerging Trends</a></li>
              <li><a href="#drivers" className={activeId === 'drivers' ? 'active' : ''} onClick={(e) => handleScroll(e, 'drivers')}>Growth Drivers &amp; Restraints</a></li>
              <li><a href="#dataset" className={activeId === 'dataset' ? 'active' : ''} onClick={(e) => handleScroll(e, 'dataset')}>Interactive Dataset</a></li>
              <li><a href="#segmentation" className={activeId === 'segmentation' ? 'active' : ''} onClick={(e) => handleScroll(e, 'segmentation')}>Segmentation Analysis</a></li>
              <li><a href="#opportunities" className={activeId === 'opportunities' ? 'active' : ''} onClick={(e) => handleScroll(e, 'opportunities')}>Growth Opportunities</a></li>
              <li><a href="#swot" className={activeId === 'swot' ? 'active' : ''} onClick={(e) => handleScroll(e, 'swot')}>SWOT Analysis</a></li>
              <li><a href="#regional" className={activeId === 'regional' ? 'active' : ''} onClick={(e) => handleScroll(e, 'regional')}>Regional Outlook</a></li>
              <li><a href="#competitive" className={activeId === 'competitive' ? 'active' : ''} onClick={(e) => handleScroll(e, 'competitive')}>Competitive Landscape</a></li>
              <li><a href="#companies" className={activeId === 'companies' ? 'active' : ''} onClick={(e) => handleScroll(e, 'companies')}>Key Market Players</a></li>
              <li><a href="#developments" className={activeId === 'developments' ? 'active' : ''} onClick={(e) => handleScroll(e, 'developments')}>Latest Developments</a></li>
              <li><a href="#expert" className={activeId === 'expert' ? 'active' : ''} onClick={(e) => handleScroll(e, 'expert')}>Expert Insights</a></li>
              <li><a href="#investment" className={activeId === 'investment' ? 'active' : ''} onClick={(e) => handleScroll(e, 'investment')}>Investment Opportunities</a></li>
              <li><a href="#conclusion" className={activeId === 'conclusion' ? 'active' : ''} onClick={(e) => handleScroll(e, 'conclusion')}>Conclusion</a></li>
              <li><a href="#faq" className={activeId === 'faq' ? 'active' : ''} onClick={(e) => handleScroll(e, 'faq')}>FAQ</a></li>
              <li><a href="#sources" className={activeId === 'sources' ? 'active' : ''} onClick={(e) => handleScroll(e, 'sources')}>Sources</a></li>
            </ol>
          </div>
        </div>


        <div className="sidebar-card">
          <div className="sidebar-card-header"><Link size={18} className="inline mr-2" /> Share This Report</div>
          <div className="sidebar-card-body">
            <div className="share-row">
              <button className="share-btn" onClick={() => { window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(location.href), '_blank') }} aria-label="Share on LinkedIn">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="inline mr-2" aria-hidden="true">
                  <path d="M0 1.146C0 .513.52 0 1.146 0H13.85c.627 0 1.146.513 1.146 1.146v12.708c0 .633-.52 1.146-1.146 1.146H1.146C.52 15 0 14.487 0 13.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.983 0 1.585-.65 1.585-1.464-.018-.83-.602-1.464-1.568-1.464-.966 0-1.585.633-1.585 1.464 0 .814.602 1.464 1.568 1.464h.018zM11.148 13.3v-4.102c0-2.197-1.173-3.218-2.735-3.218-1.251 0-1.815.687-2.128 1.173v-.998H3.882c.04.1.015 1.096 0 7.225h1.74V9.267c0-.435.031-.87.159-1.182.351-.869 1.145-1.77 2.483-1.77 1.753 0 2.454 1.336 2.454 3.292v3.714z" />
                </svg>
                LinkedIn
              </button>
              <button className="share-btn" onClick={() => { window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(location.href), '_blank') }} aria-label="Share on X">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="inline mr-2" aria-hidden="true" style={{ marginBottom: "2px" }}>
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
                X
              </button>
              <button className="share-btn" onClick={() => { window.open('mailto:?subject=Precision Agriculture Market Report&body=' + encodeURIComponent(location.href)) }} aria-label="Share via Email"><Mail size={16} className="inline mr-2" /> Email</button>
            </div>
          </div>
        </div>


        <div className="sidebar-card">
          <div className="sidebar-card-header"><Search size={18} className="inline mr-2" /> Related Market Reports</div>
          <div className="sidebar-card-body" style={{ padding: "0 18px" }}>
            <ul className="related-list">
              <li><a href="/agricultural-drones-market">Agricultural Drones Market <span className="related-arrow">›</span></a></li>
              <li><a href="/smart-farming-market">Smart Farming Market <span className="related-arrow">›</span></a></li>
              <li><a href="/agriculture-iot-market">Agriculture IoT Market <span className="related-arrow">›</span></a></li>
              <li><a href="/farm-management-software-market">Farm Management Software Market <span className="related-arrow">›</span></a></li>
              <li><a href="/agricultural-robots-market">Agricultural Robots Market <span className="related-arrow">›</span></a></li>
            </ul>
          </div>
        </div>

      </aside>
    </>
  );
}