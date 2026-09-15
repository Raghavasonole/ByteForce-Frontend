function MyTasks() {
  return (
    <div className="tasks-page">
      <div className="page-header">
        <div>
          <h1>My Tasks</h1>
          <p>
            Track and manage your AI-assisted work across the workspace.
          </p>
        </div>

        <button type="button" className="page-primary-button">
          + New Task
        </button>
      </div>

      <div className="task-tabs">
        <button type="button" className="active">
          Active <span>04</span>
        </button>
        <button type="button">
          Pending <span>02</span>
        </button>
        <button type="button">
          Completed <span>18</span>
        </button>
        <button type="button">
          Failed <span>01</span>
        </button>
        <button type="button">
          Saved <span>06</span>
        </button>
      </div>

      <div className="tasks-list">
        <div className="task-list-card">
          <div className="task-list-icon">✦</div>

          <div className="task-list-content">
            <span className="task-list-type">AI ANALYSIS</span>
            <h2>Pump P-204 Failure Analysis</h2>
            <p>
              Analyze maintenance records, inspection reports, and related
              equipment information.
            </p>

            <div className="task-list-meta">
              <span>Started 12 min ago</span>
              <span>3 documents</span>
              <span>Equipment: P-204</span>
            </div>
          </div>

          <div className="task-list-status">
            <span className="status-indicator running" />
            <strong>In Progress</strong>
            <span>72%</span>
          </div>
        </div>

        <div className="task-list-card">
          <div className="task-list-icon">✦</div>

          <div className="task-list-content">
            <span className="task-list-type">DOCUMENT REVIEW</span>
            <h2>Crude Unit Inspection Review</h2>
            <p>
              Review inspection documentation and identify relevant findings
              across internal sources.
            </p>

            <div className="task-list-meta">
              <span>Started 34 min ago</span>
              <span>8 documents</span>
              <span>CDU Area</span>
            </div>
          </div>

          <div className="task-list-status">
            <span className="status-indicator running" />
            <strong>In Progress</strong>
            <span>48%</span>
          </div>
        </div>

        <div className="task-list-card">
          <div className="task-list-icon">▥</div>

          <div className="task-list-content">
            <span className="task-list-type">REPORT GENERATION</span>
            <h2>Monthly Operations Report</h2>
            <p>
              Generate a structured operations report from verified internal
              evidence.
            </p>

            <div className="task-list-meta">
              <span>Started 1 hr ago</span>
              <span>14 sources</span>
              <span>Report</span>
            </div>
          </div>

          <div className="task-list-status">
            <span className="status-indicator running" />
            <strong>In Progress</strong>
            <span>86%</span>
          </div>
        </div>

        <div className="task-list-card">
          <div className="task-list-icon">⌕</div>

          <div className="task-list-content">
            <span className="task-list-type">KNOWLEDGE SEARCH</span>
            <h2>Compressor Operating Procedures</h2>
            <p>
              Find relevant procedures and supporting evidence for compressor
              operation.
            </p>

            <div className="task-list-meta">
              <span>Started 2 hrs ago</span>
              <span>6 sources</span>
              <span>Knowledge Base</span>
            </div>
          </div>

          <div className="task-list-status">
            <span className="status-indicator pending" />
            <strong>Pending Review</strong>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTasks;