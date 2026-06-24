"use client";

import { useEffect, useState } from "react";

export function NewsAnchorNav() {
  const [activeId, setActiveId] = useState<string>("summary");

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
      'segments', 'regions', 'companies', 'developments', 'faq'
    ];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="anchor-nav" aria-label="Page sections">
      <div className="anchor-nav-inner">
        <a href="#summary" className={activeId === 'summary' ? 'active' : ''} onClick={(e) => handleScroll(e, 'summary')}>Summary</a>
        <a href="#key-findings" className={activeId === 'key-findings' ? 'active' : ''} onClick={(e) => handleScroll(e, 'key-findings')}>Key Findings</a>
        <a href="#market-size" className={activeId === 'market-size' ? 'active' : ''} onClick={(e) => handleScroll(e, 'market-size')}>Market Size</a>
        <a href="#trends" className={activeId === 'trends' ? 'active' : ''} onClick={(e) => handleScroll(e, 'trends')}>Trends</a>
        <a href="#drivers" className={activeId === 'drivers' ? 'active' : ''} onClick={(e) => handleScroll(e, 'drivers')}>Drivers</a>
        <a href="#segments" className={activeId === 'segments' ? 'active' : ''} onClick={(e) => handleScroll(e, 'segments')}>Segments</a>
        <a href="#regions" className={activeId === 'regions' ? 'active' : ''} onClick={(e) => handleScroll(e, 'regions')}>Regions</a>
        <a href="#companies" className={activeId === 'companies' ? 'active' : ''} onClick={(e) => handleScroll(e, 'companies')}>Companies</a>
        <a href="#developments" className={activeId === 'developments' ? 'active' : ''} onClick={(e) => handleScroll(e, 'developments')}>Developments</a>
        <a href="#faq" className={activeId === 'faq' ? 'active' : ''} onClick={(e) => handleScroll(e, 'faq')}>FAQ</a>
      </div>
    </nav>
  );
}
