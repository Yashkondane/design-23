import { SidebarPromoCards } from "./SidebarPromoCards"
import { SidebarTOC } from "./SidebarTOC"
import { SidebarDetails } from "./SidebarDetails"

export function ReportSidebar() {
  return (
    <div className="flex flex-col gap-6 max-h-[calc(100vh-8rem)] overflow-y-auto pb-8 pr-2 custom-scrollbar">
      <SidebarPromoCards />
      <SidebarTOC />
      <SidebarDetails />
    </div>
  )
}
