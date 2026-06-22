import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { 
  Tractor, 
  Droplets, 
  Activity, 
  FlaskConical, 
  Truck, 
  Sprout, 
  Plane, 
  CloudSun,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const CATEGORIES = [
  { name: "AgriTech & Innovation", icon: Tractor, count: 24, desc: "Explore the latest technological advancements shaping the future of farming.", imgUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Precision Agriculture", icon: Tractor, count: 18, desc: "Data-driven farming solutions for optimized yields and resource management.", imgUrl: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Farm Equipment & Machinery", icon: Tractor, count: 32, desc: "Market analysis on tractors, harvesters, and autonomous farming vehicles.", imgUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Irrigation & Water Management", icon: Droplets, count: 15, desc: "Smart irrigation systems and water conservation technologies in agriculture.", imgUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Livestock Monitoring", icon: Activity, count: 12, desc: "IoT sensors and health tracking solutions for modern animal husbandry.", imgUrl: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Agrochemicals & Fertilizers", icon: FlaskConical, count: 45, desc: "Comprehensive reports on crop protection, bio-pesticides, and soil health.", imgUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Supply Chain & Logistics", icon: Truck, count: 21, desc: "End-to-end analysis of agricultural cold chain and distribution networks.", imgUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Vertical Farming", icon: Sprout, count: 9, desc: "Urban agriculture trends, hydroponics, and indoor farming market forecasts.", imgUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Drone Technology", icon: Plane, count: 14, desc: "UAV applications for crop monitoring, spraying, and field analysis.", imgUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Climate-Smart Agriculture", icon: CloudSun, count: 27, desc: "Regenerative practices and climate adaptation strategies for global farming.", imgUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
]

export const metadata = {
  title: "Browse Categories | Agriculture Industry Insights",
  description: "Browse our comprehensive collection of agriculture industry reports by category."
}

export default function CategoriesPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pb-20">
        {/* Header */}
        <section className="bg-brand-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Browse Categories</h1>
            <p className="text-brand-100 max-w-2xl mx-auto text-lg">
              Explore our extensive library of reports, news, and analysis across all major agricultural segments.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <Link 
                key={idx} 
                href={`/category/${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-500 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <Image src={cat.imgUrl} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-500/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <cat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-bold text-white text-lg leading-tight truncate">{cat.name}</h3>
                      <p className="text-xs font-medium text-brand-100 mt-0.5">{cat.count} Reports</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                    {cat.desc}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-bold text-brand-600 group-hover:text-brand-800 transition-colors">
                    Explore Category
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
