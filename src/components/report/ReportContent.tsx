import { MarketSize } from "./blocks/MarketSize"
import { AISummarizer } from "./blocks/AISummarizer"
import { MarketOverview } from "./blocks/MarketOverview"
import { KeyTakeaways } from "./blocks/KeyTakeaways"
import { EmergingTrends } from "./blocks/EmergingTrends"
import { MarketDynamics } from "./blocks/MarketDynamics"
import { InteractiveDataset } from "./blocks/InteractiveDataset"
import { SegmentationAnalysis } from "./blocks/SegmentationAnalysis"
import { InvestmentOpportunities } from "./blocks/InvestmentOpportunities"
import { SWOTAnalysis } from "./blocks/SWOTAnalysis"
import { RegionalOutlook } from "./blocks/RegionalOutlook"
import { CompetitiveLandscape } from "./blocks/CompetitiveLandscape"
import { CompanyPills } from "./blocks/CompanyPills"
import { DevelopmentsTable } from "./blocks/DevelopmentsTable"
import { ExpertInsight } from "./blocks/ExpertInsight"
import { InvestmentBenefits } from "./blocks/InvestmentBenefits"
import { Stakeholders } from "./blocks/Stakeholders"
import { Conclusion } from "./blocks/Conclusion"
import { FAQAccordion } from "./blocks/FAQAccordion"
import { SourcesGrid } from "./blocks/SourcesGrid"

export function ReportContent() {
  return (
    <>
      <MarketSize />
      <AISummarizer />
      <MarketOverview />
      <KeyTakeaways />
      <EmergingTrends />
      <MarketDynamics />
      <InteractiveDataset />
      <SegmentationAnalysis />
      <InvestmentOpportunities />
      <SWOTAnalysis />
      <RegionalOutlook />
      <CompetitiveLandscape />
      <CompanyPills />
      <DevelopmentsTable />
      <ExpertInsight />
      <InvestmentBenefits />
      <Stakeholders />
      <Conclusion />
      <FAQAccordion />
      <SourcesGrid />
    </>
  )
}
