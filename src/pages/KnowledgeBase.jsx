function KnowledgeBase() {
  return (
    <div className="knowledge-page">
      <div className="page-header">
        <div>
          <h1>Knowledge Base</h1>
          <p>
            Search and explore information from approved internal sources.
          </p>
        </div>
      </div>

      <div className="knowledge-search">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search documents, procedures, equipment, reports..."
        />
        <button type="button">Search</button>
      </div>

      <div className="knowledge-layout">
        <aside className="knowledge-sidebar">
          <div className="knowledge-filter">
            <h3>Categories</h3>

            <button type="button" className="knowledge-category active">
              All Sources
              <span>342</span>
            </button>

            <button type="button" className="knowledge-category">
              Engineering
              <span>96</span>
            </button>

            <button type="button" className="knowledge-category">
              Operations
              <span>74</span>
            </button>

            <button type="button" className="knowledge-category">
              Maintenance
              <span>68</span>
            </button>

            <button type="button" className="knowledge-category">
              Safety
              <span>51</span>
            </button>

            <button type="button" className="knowledge-category">
              Procedures
              <span>32</span>
            </button>

            <button type="button" className="knowledge-category">
              Reports
              <span>21</span>
            </button>
          </div>
        </aside>

        <main className="knowledge-results">
          <div className="knowledge-results-header">
            <div>
              <h2>Knowledge Sources</h2>
              <p>Recently added and frequently referenced sources</p>
            </div>

            <select defaultValue="recent">
              <option value="recent">Recently added</option>
              <option value="relevant">Most relevant</option>
              <option value="name">Name</option>
            </select>
          </div>

          <div className="knowledge-grid">
            <article className="knowledge-card">
              <div className="knowledge-card-icon">□</div>

              <div className="knowledge-card-content">
                <span className="knowledge-type">ENGINEERING</span>
                <h3>P-204 Pump Maintenance Manual</h3>
                <p>
                  Maintenance procedures, inspection requirements and
                  troubleshooting information.
                </p>

                <div className="knowledge-card-meta">
                  <span>PDF · 84 pages</span>
                  <span>Updated 2 days ago</span>
                </div>
              </div>
            </article>

            <article className="knowledge-card">
              <div className="knowledge-card-icon">□</div>

              <div className="knowledge-card-content">
                <span className="knowledge-type">OPERATIONS</span>
                <h3>Crude Distillation Unit Procedures</h3>
                <p>
                  Standard operating procedures and operating guidelines for
                  CDU processes.
                </p>

                <div className="knowledge-card-meta">
                  <span>PDF · 126 pages</span>
                  <span>Updated 5 days ago</span>
                </div>
              </div>
            </article>

            <article className="knowledge-card">
              <div className="knowledge-card-icon">□</div>

              <div className="knowledge-card-content">
                <span className="knowledge-type">MAINTENANCE</span>
                <h3>Rotating Equipment Inspection Report</h3>
                <p>
                  Inspection findings, equipment condition records and
                  recommended actions.
                </p>

                <div className="knowledge-card-meta">
                  <span>PDF · 48 pages</span>
                  <span>Updated 1 week ago</span>
                </div>
              </div>
            </article>

            <article className="knowledge-card">
              <div className="knowledge-card-icon">□</div>

              <div className="knowledge-card-content">
                <span className="knowledge-type">SAFETY</span>
                <h3>Process Safety Management Guidelines</h3>
                <p>
                  Internal safety procedures, inspection guidelines and
                  operational controls.
                </p>

                <div className="knowledge-card-meta">
                  <span>PDF · 72 pages</span>
                  <span>Updated 2 weeks ago</span>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}

export default KnowledgeBase;