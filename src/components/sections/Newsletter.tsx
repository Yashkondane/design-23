"use client"

import { useState } from "react"

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [industry, setIndustry] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="newsletter-section-custom" aria-label="Subscribe to AII Market Research Updates">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="newsletter-inner-custom">
          
          {/* Left Column: Benefits checklist */}
          <div className="nl-copy-custom">
            <div className="section-label-custom" style={{ color: "var(--wheat)" }}>Stay Informed</div>
            <h2>Get Free Agriculture Market Updates Every Week</h2>
            <p>Join 10,000+ strategy professionals and agribusiness leaders receiving weekly market intelligence, CAGR forecast summaries, and newly published report alerts — directly to their inbox. Free, always.</p>
            <ul className="nl-benefits-custom" aria-label="Newsletter benefits">
              <li><span className="nl-check-custom">✓</span> Weekly market size updates across key agricultural sectors</li>
              <li><span className="nl-check-custom">✓</span> Instant alerts for newly published syndicated reports</li>
              <li><span className="nl-check-custom">✓</span> Exclusive analyst commentary &amp; agribusiness briefings</li>
              <li><span className="nl-check-custom">✓</span> No spam — one-click unsubscribe at any time</li>
            </ul>
          </div>

          {/* Right Column: Form Card */}
          <div className="nl-form-card-custom">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-sm text-gray-600">You have successfully subscribed to Agriculture Industry Insights updates.</p>
              </div>
            ) : (
              <>
                <h3 className="text-gray-900">Subscribe for Free</h3>
                <p className="nl-sub-custom">Join 10,000+ professionals already subscribed.</p>
                <form className="nl-form-custom" onSubmit={handleSubmit} aria-label="Newsletter subscription form">
                  <div className="nl-field-custom">
                    <label htmlFor="nl-name">Full Name</label>
                    <input 
                      type="text" 
                      id="nl-name" 
                      name="name" 
                      placeholder="Your full name" 
                      required 
                      autoComplete="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="nl-field-custom">
                    <label htmlFor="nl-email">Work Email</label>
                    <input 
                      type="email" 
                      id="nl-email" 
                      name="email" 
                      placeholder="you@company.com" 
                      required 
                      autoComplete="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="nl-field-custom">
                    <label htmlFor="nl-industry">Your Sector</label>
                    <select 
                      id="nl-industry" 
                      name="industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    >
                      <option value="">Select your sector</option>
                      <option value="agritech">AgriTech &amp; Innovation</option>
                      <option value="precision">Precision Agriculture</option>
                      <option value="machinery">Farm Machinery</option>
                      <option value="irrigation">Irrigation &amp; Water</option>
                      <option value="chemicals">Agrochemicals</option>
                      <option value="livestock">Livestock Tech</option>
                      <option value="other">Other Agribusiness</option>
                    </select>
                  </div>
                  <button type="submit" className="nl-submit-custom">Subscribe for Free →</button>
                  <p className="text-[11px] text-gray-400 text-center mt-3">
                    By subscribing you agree to our <a href="/privacy-policy" className="text-emerald-700 hover:underline">Privacy Policy</a>. Unsubscribe at any time.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
