import { ChartVisualizations } from "./blocks/ChartVisualizations"
import { MarketOverview } from "./blocks/MarketOverview"
import { KeyTakeaways } from "./blocks/KeyTakeaways"
import { EmergingTrends } from "./blocks/EmergingTrends"
import { EcosystemAnalysis } from "./blocks/EcosystemAnalysis"
import { SWOTAnalysis } from "./blocks/SWOTAnalysis"
import { MarketDynamics } from "./blocks/MarketDynamics"
import { SegmentationAnalysis } from "./blocks/SegmentationAnalysis"
import { RegionalOutlook } from "./blocks/RegionalOutlook"
import { CompetitiveLandscape } from "./blocks/CompetitiveLandscape"
import { ExpertInsight } from "./blocks/ExpertInsight"
import { InvestmentOpportunities } from "./blocks/InvestmentOpportunities"
import { Conclusion } from "./blocks/Conclusion"
import { AuthorBios } from "./blocks/AuthorBios"
import { FAQAccordion } from "./blocks/FAQAccordion"
import { SourcesGrid } from "./blocks/SourcesGrid"
import { AISummarizer } from "./blocks/AISummarizer"
import { BottomCTA } from "./blocks/BottomCTA"
import { PortersFiveForces } from "./blocks/PortersFiveForces"

export function ReportContent() {
  return (
    <div className="flex flex-col">
      {/* 1. Market Size & Forecast */}
      <div id="market-size-&-forecast" className="pt-8 mt-[-32px]">
        <div className="mt-12 mb-12">
          <h2 className="text-[22px] font-bold tracking-tight text-brand-600 mb-2">What Is the Precision Agriculture Market Size?</h2>
          <div className="text-[13px] text-gray-600 leading-relaxed">
            <p className="mb-4">
              The global Precision Agriculture Market was valued at USD 8.7 billion in 2025 and is expected to reach USD 10.2 billion in 2026. Continuous expansion in IoT deployments, surging adoption of connected farm machinery, and the rapid proliferation of satellite imagery analysis are projected to propel the market to USD 22.6 billion by 2035, advancing at a CAGR of 11.2% from 2026 to 2035.
            </p>
            <p>
              Key growth drivers include the widespread integration of predictive analytics into farming ecosystems, advanced soil diagnostics, and autonomous drone platforms, all underpinned by superior data processing and AI capabilities compared with earlier traditional agricultural standards.
            </p>
          </div>
        </div>
      </div>

      <ChartVisualizations />

      {/* 2. Market Overview */}
      <div id="market-overview" className="pt-8 mt-[-32px]">
        <MarketOverview />
      </div>

      <KeyTakeaways />

      {/* 3. Trends & Dynamics */}
      <div id="trends-&-dynamics" className="pt-8 mt-[-32px]">
        <EmergingTrends />
      </div>

      {/* 4. Ecosystem Analysis */}
      <div id="ecosystem-analysis" className="pt-8 mt-[-32px]">
        <EcosystemAnalysis />
      </div>

      {/* 5. SWOT Analysis */}
      <div id="swot-analysis" className="pt-8 mt-[-32px]">
        <SWOTAnalysis />
      </div>

      {/* 5.25 Porter's Five Forces Analysis */}
      <div id="porter's-five-forces-analysis" className="pt-8 mt-[-32px]">
        <PortersFiveForces />
      </div>

      {/* 5.5 Market Drivers & Dynamics */}
      <div id="market-drivers-&-dynamics" className="pt-8 mt-[-32px]">
        <MarketDynamics />
      </div>

      {/* 6. Segmentation Analysis */}
      <div id="segmentation-analysis" className="pt-8 mt-[-32px]">
        <SegmentationAnalysis />
      </div>

      {/* 7. Regional Outlook */}
      <div id="regional-outlook" className="pt-8 mt-[-32px]">
        <RegionalOutlook />
      </div>

      {/* 8. Competitive Landscape */}
      <div id="competitive-landscape" className="pt-8 mt-[-32px]">
        <CompetitiveLandscape />
      </div>

      {/* 9. Expert Insights */}
      <div id="expert-insights" className="pt-8 mt-[-32px]">
        <ExpertInsight />
      </div>

      {/* 10. Investment Benefits */}
      <div id="investment-benefits" className="pt-8 mt-[-32px]">
        <InvestmentOpportunities />
      </div>

      {/* 11. Conclusion */}
      <div id="conclusion" className="pt-8 mt-[-32px]">
        <Conclusion />
      </div>

      {/* 12. Author Bios */}
      <div id="author-bios" className="pt-8 mt-[-32px]">
        <AuthorBios />
      </div>

      {/* 13. FAQs */}
      <div id="faqs" className="pt-8 mt-[-32px]">
        <FAQAccordion />
      </div>

      <SourcesGrid />
      <AISummarizer />
      <BottomCTA />

    </div>
  )
}
