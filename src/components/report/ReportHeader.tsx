import { Leaf, Search } from "lucide-react";
export function ReportHeader() {
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <a href="https://www.agricultureindustryinsights.com" className="site-logo" aria-label="Agriculture Industry Insights — Home">
          <div className="logo-mark" aria-hidden="true"><Leaf size={24} color="#FFF" /></div>
          Agriculture Industry Insights
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#">Reports</a>
          <a href="#">Sectors</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className="nav-search" aria-label="Search"><Search size={20} /></button>
      </div>
    </header>
  );
}
