export function SourcesGrid() {
  return (
    <>
      
      <section className="content-section" id="sources" aria-labelledby="src-heading">
        <h2 id="src-heading">Consolidated Source Table</h2>
        <div className="table-wrapper">
          <table className="source-table" aria-label="Consolidated Sources">
            <thead><tr><th>Source / Organization</th><th>URL</th><th>Section(s)</th></tr></thead>
            <tbody>
              <tr><td>UN Food and Agriculture Organization (FAO)</td><td><a href="https://www.fao.org" target="_blank" rel="noopener">fao.org</a></td><td>§5, §10</td></tr>
              <tr><td>U.S. Department of Agriculture (USDA)</td><td><a href="https://www.usda.gov" target="_blank" rel="noopener">usda.gov</a></td><td>§2, §14</td></tr>
              <tr><td>Deere &amp; Company — Investor &amp; Press</td><td><a href="https://www.deere.com" target="_blank" rel="noopener">deere.com</a></td><td>§8, §10</td></tr>
              <tr><td>Trimble Inc. — Newsroom</td><td><a href="https://www.trimble.com" target="_blank" rel="noopener">trimble.com</a></td><td>§10, §9</td></tr>
              <tr><td>AGCO Corporation — Press Releases</td><td><a href="https://www.agcocorp.com" target="_blank" rel="noopener">agcocorp.com</a></td><td>§10, §11</td></tr>
              <tr><td>Bayer / Climate LLC — Product Blog</td><td><a href="https://www.climate.com" target="_blank" rel="noopener">climate.com</a></td><td>§10, §4</td></tr>
              <tr><td>European Commission — Common Agricultural Policy</td><td><a href="https://agriculture.ec.europa.eu" target="_blank" rel="noopener">agriculture.ec.europa.eu</a></td><td>§2, §14</td></tr>
              <tr><td>Govt. of India — Ministry of Agriculture</td><td><a href="https://agricoop.gov.in" target="_blank" rel="noopener">agricoop.gov.in</a></td><td>§5, §14</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{fontSize: "13px", color: "var(--muted)", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--border)"}}><strong>Methodology Note:</strong> Market sizing figures are AII industry-derived estimates based on triangulated supply-side vendor revenue analysis, demand-side adoption surveys, and macro-level investment tracking across publicly available corporate disclosures, government agricultural statistics, and regulatory filings. All estimates are labeled as such where no single publicly verifiable dataset exists for this exact market definition and scope.</p>
      </section>
    </>
  );
}