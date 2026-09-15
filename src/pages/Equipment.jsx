function Equipment() {
  return (
    <div className="equipment-page">
      <div className="page-header">
        <div>
          <h1>Equipment</h1>
          <p>
            Search equipment tags and explore their related industrial
            information.
          </p>
        </div>
      </div>

      <div className="equipment-search">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search equipment tag, description, or location..."
        />
        <button type="button">Search</button>
      </div>

      <div className="equipment-layout">
        <aside className="equipment-list-panel">
          <div className="panel-header">
            <div>
              <h2>Equipment Tags</h2>
              <p>Recently accessed equipment</p>
            </div>

            <span className="panel-count">24</span>
          </div>

          <div className="equipment-list">
            <button type="button" className="equipment-list-item active">
              <span className="equipment-status" />
              <div>
                <strong>P-204</strong>
                <span>Crude Feed Pump</span>
              </div>
            </button>

            <button type="button" className="equipment-list-item">
              <span className="equipment-status" />
              <div>
                <strong>P-205</strong>
                <span>Crude Feed Pump</span>
              </div>
            </button>

            <button type="button" className="equipment-list-item">
              <span className="equipment-status" />
              <div>
                <strong>C-301</strong>
                <span>Process Compressor</span>
              </div>
            </button>

            <button type="button" className="equipment-list-item">
              <span className="equipment-status" />
              <div>
                <strong>E-102</strong>
                <span>Heat Exchanger</span>
              </div>
            </button>

            <button type="button" className="equipment-list-item">
              <span className="equipment-status" />
              <div>
                <strong>V-401</strong>
                <span>Separator Vessel</span>
              </div>
            </button>
          </div>
        </aside>

        <main className="equipment-details">
          <div className="equipment-hero">
            <div>
              <span className="card-eyebrow">EQUIPMENT DOSSIER</span>
              <h2>P-204</h2>
              <p>Crude Feed Pump · CDU Area</p>
            </div>

            <button type="button" className="equipment-ai-button">
              Analyze with AI →
            </button>
          </div>

          <div className="equipment-info-grid">
            <div className="equipment-info-card">
              <span>Equipment Type</span>
              <strong>Centrifugal Pump</strong>
            </div>

            <div className="equipment-info-card">
              <span>Service</span>
              <strong>Crude Feed</strong>
            </div>

            <div className="equipment-info-card">
              <span>Location</span>
              <strong>CDU Area</strong>
            </div>

            <div className="equipment-info-card">
              <span>Status</span>
              <strong className="equipment-operational">
                Operational
              </strong>
            </div>
          </div>

          <div className="equipment-content-grid">
            <section className="equipment-section">
              <div className="equipment-section-header">
                <div>
                  <h3>Related Documents</h3>
                  <p>Documents associated with P-204</p>
                </div>
              </div>

              <div className="equipment-document">
                <span className="document-icon">□</span>
                <div>
                  <strong>P-204 Maintenance Manual</strong>
                  <span>PDF · 84 pages</span>
                </div>
                <span>→</span>
              </div>

              <div className="equipment-document">
                <span className="document-icon">□</span>
                <div>
                  <strong>P-204 Inspection Report</strong>
                  <span>PDF · 26 pages</span>
                </div>
                <span>→</span>
              </div>

              <div className="equipment-document">
                <span className="document-icon">□</span>
                <div>
                  <strong>CDU Piping & Instrument Diagram</strong>
                  <span>Drawing · Sheet 12</span>
                </div>
                <span>→</span>
              </div>
            </section>

            <section className="equipment-section">
              <div className="equipment-section-header">
                <div>
                  <h3>Equipment Relationships</h3>
                  <p>Connected assets and systems</p>
                </div>
              </div>

              <div className="relationship-list">
                <div>
                  <strong>P-205</strong>
                  <span>Parallel Pump</span>
                </div>

                <div>
                  <strong>E-102</strong>
                  <span>Upstream Heat Exchanger</span>
                </div>

                <div>
                  <strong>V-401</strong>
                  <span>Downstream Separator</span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Equipment;