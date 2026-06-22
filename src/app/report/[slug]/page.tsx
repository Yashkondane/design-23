import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ReportLayout } from "@/components/report/ReportLayout"
import { ReportHero } from "@/components/report/ReportHero"

export default function ReportPage({ params }: { params: { slug: string } }) {
  // Placeholder data for layout building
  return (
    <div className="bg-gray-50 text-gray-800 font-sans selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ReportHero />
        <ReportLayout />
      </main>
      <Footer />
    </div>
  )
}
