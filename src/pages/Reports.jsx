function Reports() {
  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1>Reports</h1>
          <p>
            Review, preview, and manage reports generated from verified
            industrial evidence.
          </p>
        </div>

        <button type="button" className="page-primary-button">
          + Generate Report
        </button>
      </div>

      <div className="reports-toolbar">
        <div className="reports-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search reports..."
          />
        </div>

        <select defaultValue="all">
          <option value="all">All Reports</option>
          <option value="draft">Drafts</option>
          <option value="completed">Completed</option>
        </select>

        <select defaultValue="recent">
          <option value="recent">Recently updated</option>
          <option value="name">Name</option>
          <option value="type">Report type</option>
        </select>
      </div>

      <div className="reports-layout">
        <section className="reports-list">
          <div className="reports-section-header">
            <div>
              <h2>Recent Reports</h2>
              <p>Generated reports and saved drafts</p>
            </div>
          </div>

          <div className="report-item active">
            <div className="report-icon">▥</div>

            <div className="report-content">
              <span className="report-type">INSPECTION REPORT</span>
              <h3>Crude Unit Inspection Summary</h3>
              <p>Generated from 14 verified internal sources</p>

              <div className="report-meta">
                <span>Updated 42 min ago</span>
                <span>18 pages</span>
              </div>
            </div>

            <span className="report-status completed">Completed</span>
          </div>

          <div className="report-item">
            <div className="report-icon">▥</div>

            <div className="report-content">
              <span className="report-type">EQUIPMENT ANALYSIS</span>
              <h3>P-204 Failure Analysis</h3>
              <p>AI-assisted analysis of maintenance and inspection records</p>

              <div className="report-meta">
                <span>Updated 2 hours ago</span>
                <span>11 pages</span>
              </div>
            </div>

            <span className="report-status completed">Completed</span>
          </div>

          <div className="report-item">
            <div className="report-icon">▥</div>

            <div className="report-content">
              <span className="report-type">OPERATIONS REPORT</span>
              <h3>Monthly Operations Review</h3>
              <p>Operations data and internal knowledge sources</p>

              <div className="report-meta">
                <span>Updated yesterday</span>
                <span>24 pages</span>
              </div>
            </div>

            <span className="report-status draft">Draft</span>
          </div>
        </section>

        <aside className="report-preview">
          <div className="report-preview-header">
            <div>
              <span className="report-type">PREVIEW</span>
              <h2>Crude Unit Inspection Summary</h2>
            </div>

            <button type="button" className="preview-action">
              Export
            </button>
          </div>

          <div className="report-document-preview">
            <div className="preview-page">
              <div className="preview-title">
                <span>MRPL AI</span>
                <h3>Crude Unit Inspection Summary</h3>
                <p>Generated from verified internal evidence</p>
              </div>

              <div className="preview-divider" />

              <div className="preview-block">
                <strong>Executive Summary</strong>
                <p>
                  Inspection findings were reviewed against available
                  maintenance records, operating procedures, and equipment
                  documentation.
                </p>
              </div>

              <div className="preview-block">
                <strong>Key Findings</strong>

                <div className="preview-line" />
                <div className="preview-line short" />
                <div className="preview-line" />
                <div className="preview-line medium" />
              </div>

              <div className="preview-block">
                <strong>Evidence Sources</strong>
                <p>14 internal sources · 27 referenced passages</p>
              </div>
            </div>
          </div>

          <div className="report-preview-footer">
            <button type="button">Open Full Preview</button>
            <button type="button">Download</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Reports;