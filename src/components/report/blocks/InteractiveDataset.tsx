import { BarChart2, Search } from "lucide-react";
export function InteractiveDataset() {
  return (
    <section className="content-section" id="dataset" aria-labelledby="ds-heading">
      <h2 id="ds-heading">Interactive Dataset: Drivers, Trends &amp; Restraints</h2>
      <div className="table-wrapper" style={{border:"none", marginTop:0}}>
        <div className="dataset-toolbar">
          <span className="dataset-title"><BarChart2 size={20} className="inline mr-2" /> Growth Catalyst &amp; Risk Assessment Matrix</span>
          <div className="dataset-search">
            <span className="s-icon" aria-hidden="true"><Search size={16} /></span>
            <input type="text" id="dataset-filter" placeholder="Search drivers, trends, restraints..." aria-label="Filter dataset" />
          </div>
        </div>
        <table className="data-table" id="dataset-table" aria-label="Growth Catalyst and Risk Assessment Matrix">
          <thead>
            <tr>
              <th>Driver / Trend / Restraint &#9650;</th>
              <th>Type</th>
              <th className="num">(+&minus;) % Impact on CAGR</th>
              <th>Geographic Focus</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Rising global food demand</td><td><span className="tag tag-driver">Driver</span></td><td className="num"><span className="impact-pos">+3.5%</span></td><td>Global</td><td>2026&ndash;2035</td></tr>
            <tr><td>Declining IoT sensor &amp; drone costs</td><td><span className="tag tag-driver">Driver</span></td><td className="num"><span className="impact-pos">+2.4%</span></td><td>Global</td><td>2026&ndash;2030</td></tr>
            <tr><td>Government mechanization subsidies</td><td><span className="tag tag-driver">Driver</span></td><td className="num"><span className="impact-pos">+1.9%</span></td><td>APAC, North America, EU</td><td>2026&ndash;2035</td></tr>
            <tr><td>Equipment-as-a-service business models</td><td><span className="tag tag-opportunity">Opportunity</span></td><td className="num"><span className="impact-pos">+2.1%</span></td><td>Emerging Markets</td><td>2027&ndash;2033</td></tr>
            <tr><td>Carbon credit &amp; sustainability programs</td><td><span className="tag tag-opportunity">Opportunity</span></td><td className="num"><span className="impact-pos">+1.6%</span></td><td>EU, North America</td><td>2026&ndash;2035</td></tr>
            <tr><td>Satellite connectivity expansion</td><td><span className="tag tag-opportunity">Opportunity</span></td><td className="num"><span className="impact-pos">+1.3%</span></td><td>Global, rural focus</td><td>2026&ndash;2032</td></tr>
            <tr><td>High initial capital investment</td><td><span className="tag tag-restraint">Restraint</span></td><td className="num"><span className="impact-neg">&minus;1.8%</span></td><td>APAC, Africa, LATAM</td><td>2026&ndash;2030</td></tr>
            <tr><td>Limited rural broadband connectivity</td><td><span className="tag tag-restraint">Restraint</span></td><td className="num"><span className="impact-neg">&minus;1.2%</span></td><td>Emerging Markets</td><td>2026&ndash;2031</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
