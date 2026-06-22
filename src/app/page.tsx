import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ClientMarquee } from "@/components/sections/ClientMarquee"
import { FeaturedReports } from "@/components/sections/FeaturedReports"

import { LatestNews } from "@/components/sections/LatestNews"
import { LatestBlogs } from "@/components/sections/LatestBlogs"
import { AboutUs } from "@/components/sections/AboutUs"
export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <FeaturedReports />
        <AboutUs />
        <LatestNews />
        <LatestBlogs />
        <ClientMarquee />
      </main>
      <Footer />
    </div>
  )
}
