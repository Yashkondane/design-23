"use client";

import { useEffect, useState } from "react";

export function ReportAnchorNav() {
  const [activeId, setActiveId] = useState<string>("market-size");

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
      'market-size', 'key-takeaways', 'trends', 'drivers',
      'dataset', 'segmentation', 'swot', 'regional',
      'companies', 'developments', 'faq'
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
        <a href="#market-size" className={activeId === 'market-size' ? 'active' : ''} onClick={(e) => handleScroll(e, 'market-size')}>Overview</a>
        <a href="#key-takeaways" className={activeId === 'key-takeaways' ? 'active' : ''} onClick={(e) => handleScroll(e, 'key-takeaways')}>Takeaways</a>
        <a href="#trends" className={activeId === 'trends' ? 'active' : ''} onClick={(e) => handleScroll(e, 'trends')}>Trends</a>
        <a href="#drivers" className={activeId === 'drivers' ? 'active' : ''} onClick={(e) => handleScroll(e, 'drivers')}>Drivers</a>
        <a href="#dataset" className={activeId === 'dataset' ? 'active' : ''} onClick={(e) => handleScroll(e, 'dataset')}>Dataset</a>
        <a href="#segmentation" className={activeId === 'segmentation' ? 'active' : ''} onClick={(e) => handleScroll(e, 'segmentation')}>Segments</a>
        <a href="#swot" className={activeId === 'swot' ? 'active' : ''} onClick={(e) => handleScroll(e, 'swot')}>SWOT</a>
        <a href="#regional" className={activeId === 'regional' ? 'active' : ''} onClick={(e) => handleScroll(e, 'regional')}>Regions</a>
        <a href="#companies" className={activeId === 'companies' ? 'active' : ''} onClick={(e) => handleScroll(e, 'companies')}>Players</a>
        <a href="#developments" className={activeId === 'developments' ? 'active' : ''} onClick={(e) => handleScroll(e, 'developments')}>Developments</a>
        <a href="#faq" className={activeId === 'faq' ? 'active' : ''} onClick={(e) => handleScroll(e, 'faq')}>FAQ</a>
      </div>
    </nav>
  );
}
