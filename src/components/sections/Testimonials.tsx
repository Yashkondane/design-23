export function Testimonials() {
  const logos = [
    "John Deere",
    "Cargill",
    "Bayer CropScience",
    "Syngenta",
    "Archer Daniels Midland",
    "BASF Agriculture",
    "Nutrien",
    "Kubota",
    "Tyson Foods",
    "Bunge"
  ];

  const testimonialList = [
    {
      text: "AII's precision agriculture reports gave our investment team the clarity needed to commit $15M to new autonomous tractor technologies. The analyst walkthrough was stellar.",
      stars: "★★★★★",
      avatar: "AV",
      name: "James Richardson",
      role: "VP Strategy, Apex AgTech Ventures"
    },
    {
      text: "The granularity of crop protection and biopesticide segmentations in AII's reports is unmatched. We rely on them for all our annual strategic planning cycles.",
      stars: "★★★★★",
      avatar: "SM",
      name: "Sarah Mitchell",
      role: "Director of Market Intelligence, CropVantage Global"
    },
    {
      text: "Quick delivery, highly structured datasets, and analysts who actually reply and clarify points. AII is our core partner for market forecasting.",
      stars: "★★★★★",
      avatar: "DK",
      name: "David Kim",
      role: "Chief Strategy Officer, GreenPath Bio-Energy"
    }
  ];

  return (
    <section className="section-custom bg-white border-t border-gray-100" aria-label="Client Testimonials">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="section-label-custom">Client Trust</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Trusted by Leading Organizations Worldwide
          </h2>
        </div>

        <div className="logo-strip-custom" aria-label="Client company logos">
          {logos.map((logo, idx) => (
            <div className="logo-chip-custom" key={idx}>{logo}</div>
          ))}
        </div>

        <div className="testimonials-grid-custom">
          {testimonialList.map((t, idx) => (
            <blockquote className="testimonial-card-custom" key={idx}>
              <div className="t-stars-custom" aria-label="5 star rating">{t.stars}</div>
              <p className="t-text-custom">&quot;{t.text}&quot;</p>
              <footer className="t-attr-custom">
                <div className="t-avatar-custom" aria-hidden="true">{t.avatar}</div>
                <div>
                  <strong className="t-name-custom">{t.name}</strong>
                  <span className="t-role-custom">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
