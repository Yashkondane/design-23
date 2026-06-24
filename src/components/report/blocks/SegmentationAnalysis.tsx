"use client";

import { Download, Target, Inbox } from "lucide-react";
export function SegmentationAnalysis() {
  return (
    <>
      
      <section className="content-section" id="segmentation" aria-labelledby="seg-heading">
        <div className="section-head-row">
          <h2 id="seg-heading" style={{border: "none", paddingBottom: "0"}}>Which Application Segments Are Driving the Highest Revenue Growth?</h2>
          <button className="export-btn" onClick={() => console.log('exportCSV')}><Download size={16} className="inline mr-2" /> Export CSV</button>
        </div>

        <h3>Segment Sizing: By Technology</h3>
        <div className="table-wrapper">
          <table className="data-table" id="seg-table" aria-label="Precision Agriculture Market by Technology, 2025–2035">
            <caption>Precision Agriculture Market by Technology, 2025–2035 (USD Billion)</caption>
            <thead><tr><th>Segment Item</th><th className="num">2025 (USD Bn)</th><th className="num">2035 (USD Bn)</th><th className="num">CAGR (26–35)</th></tr></thead>
            <tbody>
              <tr><td>GPS / GNSS Guidance Systems</td><td className="num">3.0</td><td className="num">8.4</td><td className="num"><span className="cagr-pill">10.8%</span></td></tr>
              <tr><td>Remote Sensing &amp; Drones</td><td className="num">2.1</td><td className="num">6.5</td><td className="num"><span className="cagr-pill high">12.0%</span></td></tr>
              <tr><td>Variable Rate Technology (VRT)</td><td className="num">1.6</td><td className="num">5.8</td><td className="num"><span className="cagr-pill high">13.8%</span></td></tr>
              <tr><td>IoT Sensors &amp; Telemetry</td><td className="num">1.5</td><td className="num">4.6</td><td className="num"><span className="cagr-pill high">11.9%</span></td></tr>
              <tr><td>Farm Management Software</td><td className="num">1.0</td><td className="num">2.6</td><td className="num"><span className="cagr-pill">10.0%</span></td></tr>
              <tr><td>Others</td><td className="num">0.5</td><td className="num">0.7</td><td className="num"><span className="cagr-pill">8.6%</span></td></tr>
              <tr className="total-row"><td>Total</td><td className="num">9.7</td><td className="num">28.6</td><td className="num">11.4%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="source-line">Source: AII Analysis, 2026</p>

        <h3>Which Technology Holds the Largest Share of the Precision Agriculture Market?</h3>
        <p>GPS/GNSS guidance systems dominated the Precision Agriculture market with approximately USD 3.0 billion in 2025, accounting for 31% of total revenue. Auto-steer and guidance technology remains the most widely adopted entry point for precision farming due to its immediate, measurable benefits in fuel savings and reduced field overlap. Variable Rate Technology, while smaller at USD 1.6 billion in 2025, is the fastest-growing sub-segment at 13.8% CAGR, driven by sustainability mandates and input-cost optimization pressures.</p>

        <h3>Segment Sizing: By Application</h3>
        <div className="table-wrapper">
          <table className="data-table" aria-label="Precision Agriculture Market by Application, 2025–2035">
            <caption>Precision Agriculture Market by Application, 2025–2035 (USD Billion)</caption>
            <thead><tr><th>Segment Item</th><th className="num">2025 (USD Bn)</th><th className="num">2035 (USD Bn)</th><th className="num">CAGR (26–35)</th></tr></thead>
            <tbody>
              <tr><td>Yield Monitoring</td><td className="num">2.6</td><td className="num">7.2</td><td className="num"><span className="cagr-pill">10.7%</span></td></tr>
              <tr><td>Field Mapping</td><td className="num">2.0</td><td className="num">5.9</td><td className="num"><span className="cagr-pill high">11.4%</span></td></tr>
              <tr><td>Variable Rate Application</td><td className="num">1.7</td><td className="num">6.2</td><td className="num"><span className="cagr-pill high">13.8%</span></td></tr>
              <tr><td>Crop Scouting</td><td className="num">1.5</td><td className="num">4.4</td><td className="num"><span className="cagr-pill high">11.4%</span></td></tr>
              <tr><td>Weather Tracking &amp; Forecasting</td><td className="num">1.1</td><td className="num">2.9</td><td className="num"><span className="cagr-pill">10.2%</span></td></tr>
              <tr><td>Others</td><td className="num">0.8</td><td className="num">2.0</td><td className="num"><span className="cagr-pill">9.6%</span></td></tr>
              <tr className="total-row"><td>Total</td><td className="num">9.7</td><td className="num">28.6</td><td className="num">11.4%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="source-line">Source: AII Analysis, 2026</p>
      </section>
    </>
  );
}