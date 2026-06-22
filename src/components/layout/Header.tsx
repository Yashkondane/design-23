"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Reports", href: "/reports" },
    { name: "News", href: "/news" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isCategoriesActive = pathname?.startsWith('/categor');

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <svg
              className="h-8 w-8 text-brand-700"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 22v-6"></path>
              <path d="M12 8v8"></path>
              <path d="M12 8c-3.3 0-6 2.7-6 6 0 1.7.7 3.2 1.8 4.2"></path>
              <path d="M12 8c3.3 0 6 2.7 6 6 0 1.7-.7 3.2-1.8 4.2"></path>
              <path d="M12 2A10 10 0 1 0 22 12"></path>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-gray-900 tracking-tight">Agriculture</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Industry Insights
              </span>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              className={`${pathname === "/" ? "text-brand-700 font-semibold border-b-2 border-brand-700 pb-1" : "text-gray-600 hover:text-brand-700 font-medium transition-colors"}`} 
              href="/"
            >
              Home
            </Link>
            <Link 
              className={`${pathname === "/reports" ? "text-brand-700 font-semibold border-b-2 border-brand-700 pb-1" : "text-gray-600 hover:text-brand-700 font-medium transition-colors"}`} 
              href="/reports"
            >
              Reports
            </Link>
            <div className="relative group cursor-pointer">
              <span className={`${isCategoriesActive ? "text-brand-700 font-semibold border-b-2 border-brand-700 pb-1" : "text-gray-600 group-hover:text-brand-700 font-medium transition-colors"} flex items-center gap-1 py-2`}>
                Categories
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:-rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </span>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-4 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 p-2 space-y-1">
                  <Link
                    href="/category/agritech-innovation"
                    className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                  >
                    AgriTech &amp; Innovation
                  </Link>
                  <Link
                    href="/category/precision-agriculture"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Precision Agriculture
                  </Link>
                  <Link
                    href="/category/farm-equipment-machinery"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Farm Equipment &amp; Machinery
                  </Link>
                  <Link
                    href="/category/irrigation-water-management"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Irrigation &amp; Water Management
                  </Link>
                  <Link
                    href="/category/livestock-monitoring"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Livestock Monitoring
                  </Link>
                  <Link
                    href="/category/agrochemicals-fertilizers"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Agrochemicals &amp; Fertilizers
                  </Link>
                  <div className="pt-2 pb-1 mt-2 border-t border-gray-100">
                    <Link
                      href="/categories"
                      className="block px-4 py-2 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors flex items-center gap-1"
                    >
                      View all categories
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7-7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link 
              className={`${pathname === "/news" ? "text-brand-700 font-semibold border-b-2 border-brand-700 pb-1" : "text-gray-600 hover:text-brand-700 font-medium transition-colors"}`} 
              href="/news"
            >
              News
            </Link>
            <Link 
              className={`${pathname === "/blogs" ? "text-brand-700 font-semibold border-b-2 border-brand-700 pb-1" : "text-gray-600 hover:text-brand-700 font-medium transition-colors"}`} 
              href="/blogs"
            >
              Blogs
            </Link>
            <Link 
              className={`${pathname === "/about" ? "text-brand-700 font-semibold border-b-2 border-brand-700 pb-1" : "text-gray-600 hover:text-brand-700 font-medium transition-colors"}`} 
              href="/about"
            >
              About Us
            </Link>
            <Link 
              className={`${pathname === "/contact" ? "text-brand-700 font-semibold border-b-2 border-brand-700 pb-1" : "text-gray-600 hover:text-brand-700 font-medium transition-colors"}`} 
              href="/contact"
            >
              Contact Us
            </Link>
          </nav>
          
          {/* Search Icon */}
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
