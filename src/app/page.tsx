import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { AboutUs } from "@/components/sections/AboutUs"
import { FeaturedReports } from "@/components/sections/FeaturedReports"
import { WhyUs } from "@/components/sections/WhyUs"
import { Testimonials } from "@/components/sections/Testimonials"
import { Methodology } from "@/components/sections/Methodology"
import { FAQ } from "@/components/sections/FAQ"
import { LatestBlogs } from "@/components/sections/LatestBlogs"
import { LatestNews } from "@/components/sections/LatestNews"
import { Newsletter } from "@/components/sections/Newsletter"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Stats />
        <AboutUs />
        <FeaturedReports />
        <WhyUs />
        <Testimonials />
        <Methodology />
        <FAQ />
        <LatestBlogs />
        <LatestNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
