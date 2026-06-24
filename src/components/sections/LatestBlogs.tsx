import Link from "next/link"
import { Droplets, Tractor, Leaf } from "lucide-react"

export function LatestBlogs() {
  const blogs = [
    {
      title: "Why the Global Smart Irrigation Market Will Exceed USD 4.2 Billion by 2035",
      category: "Irrigation",
      date: "June 20, 2026",
      readTime: "6 min read",
      excerpt: "IoT adoption, sensor pricing declines, and water conservation mandates are driving unprecedented CAGR growth across smart irrigation systems globally. We analyze key regional demand drivers.",
      author: "Dr. Priya Sharma",
      authorTitle: "Senior AgTech Analyst",
      avatar: "PS",
      icon: Droplets,
      image: "/smart-irrigation.png",
      url: "/blogs/smart-irrigation-market-2035"
    },
    {
      title: "EV Tractors: The USD 800 Million Market Opportunity in Precision Farming",
      category: "Machinery",
      date: "June 15, 2026",
      readTime: "5 min read",
      excerpt: "Regulatory emissions limits and fuel efficiency goals are driving rapid adoption of electric tractors and machinery across European and North American agribusinesses.",
      author: "Marcus Chen",
      authorTitle: "Lead Farm Machinery Analyst",
      avatar: "MC",
      icon: Tractor,
      image: "/ev-tractor.png",
      url: "/blogs/ev-tractors-precision-farming"
    },
    {
      title: "Vertical Farming: 5 Key Hubs Driving the 25.5% CAGR Surge",
      category: "Farming",
      date: "June 10, 2026",
      readTime: "7 min read",
      excerpt: "Urbanization, year-round demand for fresh leafy greens, and indoor environmental control advancements are reshaping vertical farm investments globally.",
      author: "Aisha Okonkwo",
      authorTitle: "Sustainable Farming Analyst",
      avatar: "AO",
      icon: Leaf,
      image: "/vertical-farming.png",
      url: "/blogs/vertical-farming-growth-hubs"
    }
  ];

  return (
    <section className="section-custom section-custom--white" aria-label="Market Research Insights Blog">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="mb-10">
          <div className="section-label-custom">From Our Analysts</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
            Market Research Insights &amp; Industry Analysis
          </h2>
          <p className="text-gray-500 max-w-2xl text-[15px] leading-relaxed">
            Expert commentary, emerging trend analysis, and market intelligence from AII senior research analysts. Updated weekly.
          </p>
        </div>
        <div className="blog-grid-custom">
          {blogs.map((blog, idx) => (
            <article className="blog-card-custom" key={idx}>
              <Link href={blog.url} className="blog-card__link-custom">
                <div className="blog-card__img-custom" aria-hidden="true">
                  <img src={blog.image} alt={blog.title} className="blog-card__cover-image" />
                  <div className="blog-card__icon-badge-custom">
                    <blog.icon size={18} />
                  </div>
                  <span className="blog-card__img-badge-custom">{blog.category}</span>
                </div>
                <div className="blog-card__body-custom">
                  <div className="blog-card__meta-top-custom">
                    <span className="blog-card__date-custom">{blog.date}</span>
                    <span className="blog-card__dot-custom"></span>
                    <span className="blog-card__read-time-custom">{blog.readTime}</span>
                  </div>
                  <h3 className="blog-card__title-custom">{blog.title}</h3>
                  <p className="blog-card__excerpt-custom">{blog.excerpt}</p>
                  <div className="blog-card__author-custom">
                    <div className="blog-card__author-avatar-custom" aria-hidden="true">
                      {blog.avatar}
                    </div>
                    <div>
                      <div className="blog-card__author-name-custom">{blog.author}</div>
                      <div className="blog-card__author-title-custom">{blog.authorTitle}</div>
                    </div>
                    <span className="blog-card__read-link-custom">Read →</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="cta-center-custom">
          <Link href="/blogs" className="btn-primary-custom">View All Insights &amp; Analysis →</Link>
        </div>
      </div>
    </section>
  )
}
