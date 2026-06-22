import { ReportStatsGrid } from "./ReportStatsGrid"
import { ReportSidebar } from "./ReportSidebar"
import { ReportContent } from "./ReportContent"

export function ReportLayout() {
  return (
    <div className="bg-gray-50 pb-24">
      <ReportStatsGrid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <ReportContent />
          </div>
          <div className="lg:col-span-4 self-start sticky top-24">
            <ReportSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
