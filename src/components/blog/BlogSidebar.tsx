"use client";

import React, { useEffect, useState } from 'react'
import { Folder, ImageIcon, BarChart2, User, ClipboardList, Link as LinkIcon, Mail, Search, FileText, Calendar, ArrowRight } from "lucide-react"

export const BlogSidebar = () => {
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
      'introduction', 'current-landscape', 'key-technologies', 'economic-impact', 'regional-adoption', 'challenges', 'future-outlook'
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
    <aside className="sidebar" aria-label="Blog sidebar">
      
      {/* Table of Contents */}
      <div className="sidebar-card toc-card">
        <div className="sidebar-card-header"><ClipboardList size={18} className="inline mr-2" /> Table of Contents</div>
        <div className="sidebar-card-body" style={{ padding: "0 18px" }}>
          <ol className="toc-list">
            <li><a href="#introduction" className={activeId === 'introduction' ? 'active' : ''} onClick={(e) => handleScroll(e, 'introduction')}>Introduction</a></li>
            <li><a href="#current-landscape" className={activeId === 'current-landscape' ? 'active' : ''} onClick={(e) => handleScroll(e, 'current-landscape')}>The Current Landscape</a></li>
            <li><a href="#key-technologies" className={activeId === 'key-technologies' ? 'active' : ''} onClick={(e) => handleScroll(e, 'key-technologies')}>Key Technologies Driving Adoption</a></li>
            <li><a href="#economic-impact" className={activeId === 'economic-impact' ? 'active' : ''} onClick={(e) => handleScroll(e, 'economic-impact')}>Economic Impact on Farm Operations</a></li>
            <li><a href="#regional-adoption" className={activeId === 'regional-adoption' ? 'active' : ''} onClick={(e) => handleScroll(e, 'regional-adoption')}>Regional Adoption Patterns</a></li>
            <li><a href="#challenges" className={activeId === 'challenges' ? 'active' : ''} onClick={(e) => handleScroll(e, 'challenges')}>Challenges & Barriers</a></li>
            <li><a href="#future-outlook" className={activeId === 'future-outlook' ? 'active' : ''} onClick={(e) => handleScroll(e, 'future-outlook')}>Future Outlook</a></li>
          </ol>
        </div>
      </div>

      {/* Author Bio */}
      <div className="sidebar-card">
        <div className="sidebar-card-header"><User size={18} className="inline mr-2" /> About the Author</div>
        <div className="sidebar-card-body">
          <div className="analyst-profile">
            <img src="https://i.pravatar.cc/150?img=11" alt="Author" className="w-12 h-12 rounded-full object-cover shrink-0" />
            <div>
              <div className="analyst-profile-name">Sarah Chen</div>
              <div className="analyst-profile-title">Senior Market Researcher</div>
              <div className="analyst-profile-bio text-xs mt-1">Specializes in software ecosystem analysis, cloud adoption in rural networks, and farm management platforms.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="sidebar-card" style={{ background: "var(--forest)", color: "#fff", borderColor: "var(--forest)" }}>
        <div className="sidebar-card-header" style={{ borderBottomColor: "rgba(255,255,255,0.1)", color: "#fff" }}><Mail size={18} className="inline mr-2" /> Stay Updated</div>
        <div className="sidebar-card-body">
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", marginBottom: "12px" }}>Get the latest insights and analysis delivered to your inbox.</p>
          <input
            type="email"
            placeholder="Your email address"
            style={{ width: "100%", padding: "8px 12px", borderRadius: "6px", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", fontSize: "13px", marginBottom: "12px" }}
          />
          <button style={{ width: "100%", background: "var(--leaf)", color: "#fff", fontWeight: "bold", padding: "8px 12px", borderRadius: "6px", fontSize: "13px", transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = "#148c40"} onMouseOut={(e) => e.currentTarget.style.background = "var(--leaf)"}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Related Posts */}
      <div className="sidebar-card">
        <div className="sidebar-card-header"><FileText size={18} className="inline mr-2" /> Related Posts</div>
        <div className="sidebar-card-body" style={{ padding: "0 18px" }}>
          <ul className="flex flex-col gap-4 mt-2 pb-2">
            <li>
              <a href="#" className="flex items-start gap-3 group" style={{textDecoration: 'none'}}>
                <div className="shrink-0 w-20 aspect-video rounded overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="" className="w-full transition-transform group-hover:scale-105" style={{ height: "100%", objectFit: "cover" }} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-800 transition-colors leading-snug line-clamp-3" style={{margin: 0}}>
                    How AI is Transforming Agriculture
                  </h4>
                  <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                    <Calendar size={12} />
                    <span>June 5, 2026</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-start gap-3 group" style={{textDecoration: 'none'}}>
                <div className="shrink-0 w-20 aspect-video rounded overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="" className="w-full transition-transform group-hover:scale-105" style={{ height: "100%", objectFit: "cover" }} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-800 transition-colors leading-snug line-clamp-3" style={{margin: 0}}>
                    Sustainable Agriculture: A Path Forward
                  </h4>
                  <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                    <Calendar size={12} />
                    <span>June 3, 2026</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-start gap-3 group" style={{textDecoration: 'none'}}>
                <div className="shrink-0 w-20 aspect-video rounded overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="" className="w-full transition-transform group-hover:scale-105" style={{ height: "100%", objectFit: "cover" }} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-gray-800 transition-colors leading-snug line-clamp-3" style={{margin: 0}}>
                    Innovations in Vertical Farming Systems
                  </h4>
                  <div className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                    <Calendar size={12} />
                    <span>June 2, 2026</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Share This Article */}
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
