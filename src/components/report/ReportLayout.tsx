import { ReportSidebar } from "./ReportSidebar"
import { ReportContent } from "./ReportContent"
import { ReportAnchorNav } from "./ReportAnchorNav"

export function ReportLayout() {
  return (
    <>
      {/* ANCHOR NAV */}
      <ReportAnchorNav />

      <div className="page-body">
        <div className="content-grid">
          <main className="main-col" id="main-content">
            <ReportContent />
          </main>
          <ReportSidebar />
        </div>
      </div>
    </>
  )
}
