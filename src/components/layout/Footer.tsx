import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#14532d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Newsletter */}
        <div className="mb-12 pb-12 border-b border-brand-500/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-[22px] font-bold text-white mb-2">Stay Updated</h2>
              <p className="text-[13px] text-green-50/80">
                Get the latest agriculture industry news, reports and insights delivered directly to your inbox.
              </p>
            </div>
            <div className="flex-1 max-w-md w-full">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  className="flex-1 py-3 px-6 rounded-full bg-black/20 border border-transparent text-white placeholder-green-50/50 focus:outline-none focus:border-brand-400 focus:bg-black/30 transition-all duration-300 text-[13px]"
                  placeholder="Enter your email address"
                  type="email"
                />
                <button
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 whitespace-nowrap text-[14px]"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-[11px] text-green-50/60 mt-3">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand Info & Contact */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22v-6"></path>
                  <path d="M12 8v8"></path>
                  <path d="M12 8c-3.3 0-6 2.7-6 6 0 1.7.7 3.2 1.8 4.2"></path>
                  <path d="M12 8c3.3 0 6 2.7 6 6 0 1.7-.7 3.2-1.8 4.2"></path>
                  <path d="M12 2A10 10 0 1 0 22 12"></path>
                </svg>
                <div className="flex flex-col leading-tight">
                  <span className="text-[18px] font-bold tracking-tight">
                    Agriculture <span className="font-normal text-white/90">Industry Insights.</span>
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-green-50/80 mb-6 max-w-xs">
                Smarter decisions for a better future in agriculture.
              </p>
              
              <div className="flex space-x-4 mb-10">
                <Link className="text-green-50/80 hover:text-white transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </Link>
                <Link className="text-green-50/80 hover:text-white transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link className="text-green-50/80 hover:text-white transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[15px] text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-[13px] text-green-50/80">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a className="hover:text-white transition-colors" href="mailto:info@agricultureindustryinsights.com">
                    info@agricultureindustryinsights.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-bold text-[15px] text-white mb-6">Company</h4>
            <ul className="space-y-4 text-[13px] text-green-50/80">
              <li><Link className="hover:text-white transition-colors" href="#">About Us</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Contact Us</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Advertise With Us</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-bold text-[15px] text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-[13px] text-green-50/80">
              <li><Link className="hover:text-white transition-colors" href="#">Articles</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">News</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Blogs</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Categories</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-bold text-[15px] text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-[13px] text-green-50/80">
              <li><Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Disclaimer</Link></li>
              <li><Link className="hover:text-white transition-colors" href="#">Sitemap</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 text-center text-[12px] text-green-50/60">
          © 2026 Agriculture Industry Insights. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
