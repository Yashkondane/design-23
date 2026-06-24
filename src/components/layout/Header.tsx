"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Leaf, Search, Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const navLinks = [
    { name: "Reports", href: "/reports" },
    { name: "Sectors", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/reports?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="site-logo" aria-label="Agriculture Industry Insights — Home">
            <div className="logo-mark" aria-hidden="true">
              <Leaf size={22} fill="white" color="white" />
            </div>
            <span className="serif-font brand-text">Agriculture Industry Insights</span>
          </Link>

          {/* Desktop Search Bar (Expandable) */}
          {searchOpen ? (
            <form onSubmit={handleSearchSubmit} className="header-search-form">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="header-search-input"
              />
              <button type="submit" className="header-search-submit-btn" aria-label="Search">
                <Search size={16} />
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="header-search-close-btn"
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </form>
          ) : (
            <nav className="site-nav" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}

          <div className="header-actions">
            {!searchOpen && (
              <button
                className="nav-search"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={18} />
              </button>
            )}

            <button
              className="hamburger"
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <nav className={`mobile-nav ${mobileOpen ? "open" : ""}`} aria-label="Mobile Navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        {/* Mobile Search Form */}
        <form onSubmit={handleSearchSubmit} className="mobile-search-form">
          <input
            type="text"
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mobile-search-input"
          />
          <button type="submit" className="mobile-search-submit-btn" aria-label="Search">
            <Search size={18} />
          </button>
        </form>
      </nav>
    </>
  )
}
