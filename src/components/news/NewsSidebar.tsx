"use client";

import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { User, ClipboardList, Link as LinkIcon, FileText, Calendar } from "lucide-react"

export const NewsSidebar = () => {
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
      'summary', 'key-findings', 'market-size', 'trends', 'drivers',
      'segments', 'regions', 'companies', 'developments', 'faq', 'sources'
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
      
      if (index <= 1) {
        sidebar.scrollTo({ top: 0, behavior: "smooth" });
        return;
      } 
      if (index >= total - 2) {
        sidebar.scrollTo({ top: sidebar.scrollHeight, behavior: "smooth" });
        return;
      } 
      
      const linkRect = activeLink.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();

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
    <aside className="sidebar" aria-label="Article sidebar">
      
      <div className="sidebar-card toc-card">
        <div className="sidebar-card-header"><ClipboardList size={18} className="inline mr-2" /> In This Article</div>
        <div className="sidebar-card-body" style={{ padding: "0 18px" }}>
          <ol className="toc-list">
            <li><a href="#summary" className={activeId === 'summary' ? 'active' : ''} onClick={(e) => handleScroll(e, 'summary')}>Market Summary</a></li>
            <li><a href="#key-findings" className={activeId === 'key-findings' ? 'active' : ''} onClick={(e) => handleScroll(e, 'key-findings')}>Key Findings</a></li>
            <li><a href="#market-size" className={activeId === 'market-size' ? 'active' : ''} onClick={(e) => handleScroll(e, 'market-size')}>Market Size &amp; Forecast</a></li>
            <li><a href="#trends" className={activeId === 'trends' ? 'active' : ''} onClick={(e) => handleScroll(e, 'trends')}>Key Trends</a></li>
            <li><a href="#drivers" className={activeId === 'drivers' ? 'active' : ''} onClick={(e) => handleScroll(e, 'drivers')}>Drivers &amp; Restraints</a></li>
            <li><a href="#segments" className={activeId === 'segments' ? 'active' : ''} onClick={(e) => handleScroll(e, 'segments')}>Segmentation</a></li>
            <li><a href="#regions" className={activeId === 'regions' ? 'active' : ''} onClick={(e) => handleScroll(e, 'regions')}>Regional Highlights</a></li>
            <li><a href="#companies" className={activeId === 'companies' ? 'active' : ''} onClick={(e) => handleScroll(e, 'companies')}>Key Players</a></li>
            <li><a href="#developments" className={activeId === 'developments' ? 'active' : ''} onClick={(e) => handleScroll(e, 'developments')}>Latest Developments</a></li>
            <li><a href="#faq" className={activeId === 'faq' ? 'active' : ''} onClick={(e) => handleScroll(e, 'faq')}>FAQ</a></li>
                        <li><a href="#sources" className={activeId === 'sources' ? 'active' : ''} onClick={(e) => handleScroll(e, 'sources')}>Sources</a></li>
          </ol>
        </div>
      </div>

      <div className="sidebar-card">
        <div className="sidebar-card-header"><User size={18} className="inline mr-2" /> About the Analyst</div>
        <div className="sidebar-card-body">
          <div className="analyst-profile">
            <div className="analyst-photo" aria-hidden="true" style={{ background: "linear-gradient(135deg, #2E5496, #1F3864)", color: "#fff", fontSize: "18px" }}>AM</div>
            <div>
              <div className="analyst-profile-name">Aarav Mehta</div>
              <div className="analyst-profile-title">Senior Research Analyst</div>
              <div className="analyst-profile-bio">9+ years covering automotive and clean-energy markets across APAC and Europe.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-card">
        <div className="sidebar-card-header"><FileText size={18} className="inline mr-2" /> More Market News</div>
        <div className="sidebar-card-body" style={{ padding: "0 18px" }}>
          <ul className="flex flex-col gap-4 mt-2 pb-2">
              <li>
                <NextLink href="/news/ev-battery-market-forecast" className="flex items-start gap-3 group" style={{textDecoration: 'none'}}>
                  <div className="shrink-0 w-24 aspect-video rounded overflow-hidden bg-gray-100">
                    <img src="/ev-market.jpeg" alt="" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-800 transition-colors leading-snug line-clamp-2" style={{margin: 0}}>
                      EV Battery Market to Reach USD 612 Bn by 2035
                    </h4>
                    <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>June 22, 2026</span>
                    </div>
                  </div>
                </NextLink>
              </li>
              <li>
                <NextLink href="/news/ev-charging-infrastructure-cagr" className="flex items-start gap-3 group" style={{textDecoration: 'none'}}>
                  <div className="shrink-0 w-24 aspect-video rounded overflow-hidden bg-gray-100">
                    <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-800 transition-colors leading-snug line-clamp-2" style={{margin: 0}}>
                      EV Charging Infrastructure — 21.4% CAGR Forecast
                    </h4>
                    <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>June 18, 2026</span>
                    </div>
                  </div>
                </NextLink>
              </li>
              <li>
                <NextLink href="/news/autonomous-vehicle-market-size" className="flex items-start gap-3 group" style={{textDecoration: 'none'}}>
                  <div className="shrink-0 w-24 aspect-video rounded overflow-hidden bg-gray-100">
                    <img src="/hero-visual.png" alt="" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-800 transition-colors leading-snug line-clamp-2" style={{margin: 0}}>
                      Autonomous Vehicle Market Hits USD 84 Bn in 2025
                    </h4>
                    <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>June 15, 2026</span>
                    </div>
                  </div>
                </NextLink>
              </li>
              <li>
                <NextLink href="/news/lithium-ion-battery-market-growth" className="flex items-start gap-3 group" style={{textDecoration: 'none'}}>
                  <div className="shrink-0 w-24 aspect-video rounded overflow-hidden bg-gray-100">
                    <img src="/smart-irrigation.png" alt="" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-800 transition-colors leading-snug line-clamp-2" style={{margin: 0}}>
                      Lithium-Ion Battery Market Driven by EV Demand
                    </h4>
                    <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                      <Calendar size={12} />
                      <span>June 10, 2026</span>
                    </div>
                  </div>
                </NextLink>
              </li>
            </ul>
        </div>
      </div>

      <div className="sidebar-card">
        <div className="sidebar-card-header"><LinkIcon size={18} className="inline mr-2" /> Share This Article</div>
        <div className="sidebar-card-body">
          <div className="share-row">
            <button className="share-btn" onClick={() => { window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(typeof location !== 'undefined' ? location.href : ''), '_blank') }} aria-label="Share on LinkedIn">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="inline mr-2" aria-hidden="true">
                <path d="M0 1.146C0 .513.52 0 1.146 0H13.85c.627 0 1.146.513 1.146 1.146v12.708c0 .633-.52 1.146-1.146 1.146H1.146C.52 15 0 14.487 0 13.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.983 0 1.585-.65 1.585-1.464-.018-.83-.602-1.464-1.568-1.464-.966 0-1.585.633-1.585 1.464 0 .814.602 1.464 1.568 1.464h.018zM11.148 13.3v-4.102c0-2.197-1.173-3.218-2.735-3.218-1.251 0-1.815.687-2.128 1.173v-.998H3.882c.04.1.015 1.096 0 7.225h1.74V9.267c0-.435.031-.87.159-1.182.351-.869 1.145-1.77 2.483-1.77 1.753 0 2.454 1.336 2.454 3.292v3.714z" />
              </svg>
              LinkedIn
            </button>
            <button className="share-btn" onClick={() => { window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(typeof location !== 'undefined' ? location.href : ''), '_blank') }} aria-label="Share on X">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="inline mr-2" aria-hidden="true" style={{ marginBottom: "2px" }}>
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
              X
            </button>
          </div>
        </div>
      </div>
    
    </aside>
  )
}
