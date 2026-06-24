import Link from "next/link"
import { 
  Tractor, 
  Cpu, 
  Settings, 
  Droplets, 
  FlaskConical, 
  Activity, 
  Truck, 
  Leaf, 
  Navigation, 
  Globe, 
  Factory, 
  LayoutGrid 
} from "lucide-react"

export function AboutUs() {
  const categories = [
    { name: "AgriTech & Innovation", icon: Tractor, count: "2,600+ Reports", href: "/category/agritech-innovation" },
    { name: "Precision Agriculture", icon: Cpu, count: "1,800+ Reports", href: "/category/precision-agriculture" },
    { name: "Farm Machinery & Equipment", icon: Settings, count: "2,200+ Reports", href: "/category/farm-equipment-machinery" },
    { name: "Irrigation & Water", icon: Droplets, count: "1,400+ Reports", href: "/category/irrigation-water-management" },
    { name: "Crop Protection & Agrochemicals", icon: FlaskConical, count: "1,900+ Reports", href: "/category/agrochemicals-fertilizers" },
    { name: "Livestock & Aquaculture", icon: Activity, count: "1,300+ Reports", href: "/category/livestock-monitoring" },
    { name: "Supply Chain & Logistics", icon: Truck, count: "1,100+ Reports", href: "/category/supply-chain-logistics" },
    { name: "Vertical & Indoor Farming", icon: Leaf, count: "850+ Reports", href: "/category/vertical-farming" },
    { name: "Drones & UAV Technology", icon: Navigation, count: "720+ Reports", href: "/category/drone-technology" },
    { name: "Climate & Soil Science", icon: Globe, count: "950+ Reports", href: "/category/climate-smart-agriculture" },
    { name: "Food Processing & Biofuels", icon: Factory, count: "2,150+ Reports", href: "/category/food-processing" },
  ];

  return (
    <section className="section-custom bg-white py-20" aria-label="About Agriculture Industry Insights">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="section-label-custom">Our Coverage</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
            Browse Agriculture Market Reports by Sector
          </h2>
          <p className="text-gray-500 max-w-2xl text-[15px] leading-relaxed">
            Explore our comprehensive library across all agribusiness domains, covering market size, forecasts, segmentation, and competitive intelligence.
          </p>
        </div>
        <div className="industry-grid-custom" role="list">
          {categories.map((cat, idx) => (
            <Link 
              href={cat.href} 
              className="industry-card-custom" 
              role="listitem" 
              aria-label={`${cat.name} Market Research Reports`}
              key={idx}
            >
              <div className="ind-icon-custom" aria-hidden="true">
                <cat.icon size={26} color="var(--leaf)" />
              </div>
              <span className="ind-name-custom">{cat.name}</span>
              <span className="ind-count-custom">{cat.count}</span>
            </Link>
          ))}
          <Link 
            href="/categories" 
            className="industry-card-custom industry-card--all-custom" 
            role="listitem" 
            aria-label="View all agriculture categories"
          >
            <div className="ind-icon-custom" aria-hidden="true">
              <LayoutGrid size={26} color="var(--white)" />
            </div>
            <span className="ind-name-custom">View All Verticals</span>
            <span className="ind-count-custom">10+ Categories →</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
