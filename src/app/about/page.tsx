import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AboutUs } from "@/components/sections/AboutUs"
import { Target, Users, ShieldCheck, Globe } from "lucide-react"

export const metadata = {
  title: "About Us | Agriculture Industry Insights",
  description: "Learn more about our mission, methodology, and the team behind Agriculture Industry Insights."
}

const VALUES = [
  {
    title: "Global Reach",
    icon: Globe,
    desc: "We analyze agricultural trends and data across continents to provide a truly global perspective."
  },
  {
    title: "Uncompromising Quality",
    icon: ShieldCheck,
    desc: "Our data is rigorously vetted and our reports are peer-reviewed by industry experts."
  },
  {
    title: "Actionable Insights",
    icon: Target,
    desc: "We don&apos;t just provide data; we provide strategic recommendations that drive business growth."
  },
  {
    title: "Client-Centric",
    icon: Users,
    desc: "Your success is our success. We tailor our custom research to meet your specific strategic needs."
  }
]

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-900 text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">Empowering Agriculture <br className="hidden md:block" /> Through Data</h1>
            <p className="text-lg md:text-xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
              We are the premier destination for market intelligence, forecasting, and strategic consulting in the global agriculture and agritech sectors.
            </p>
          </div>
        </section>

        {/* Existing About Section (Features/Methodology) */}
        <div className="bg-white">
          <AboutUs />
        </div>

        {/* Mission & Values Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-900 mb-6 tracking-tight">Our Core Values</h2>
              <p className="text-gray-600 text-lg">
                We believe that accurate data is the foundation of a sustainable and prosperous agricultural future. Our core values reflect our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((val, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-6">
                    <val.icon className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{val.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
