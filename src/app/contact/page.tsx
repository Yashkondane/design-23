"use client"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pb-24">
        {/* Header */}
        <section className="bg-[#14532d] text-white py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Contact Us</h1>
            <p className="text-lg text-brand-100 max-w-2xl mx-auto leading-relaxed">
              Have questions about our reports, consulting services, or need custom research? Our experts are here to help.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col lg:flex-row">

            {/* Contact Info (Left) */}
            <div className="lg:w-1/3 bg-brand-900 text-white p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-200" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-brand-100">Global Headquarters</h4>
                      <p className="text-brand-200 text-sm leading-relaxed">
                        123 Agriculture Avenue<br />
                        Suite 400<br />
                        Chicago, IL 60604, USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-200" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-brand-100">Phone</h4>
                      <p className="text-brand-200 text-sm">
                        +1 (555) 123-4567<br />
                        Mon-Fri, 9am - 5pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-200" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-brand-100">Email</h4>
                      <p className="text-brand-200 text-sm">
                        info@agri-insights.com<br />
                        sales@agri-insights.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-brand-800 text-sm text-brand-300">
                <p>We aim to respond to all inquiries within 24 hours during regular business days.</p>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:w-2/3 p-8 lg:p-12 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" id="first-name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="last-name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm bg-white">
                    <option>Report Inquiry</option>
                    <option>Custom Research</option>
                    <option>Consulting Services</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full md:w-auto px-8 py-3.5 bg-brand-700 hover:bg-brand-800 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-brand-700/20">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
