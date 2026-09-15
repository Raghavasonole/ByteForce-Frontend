function Workbench() {
  return (
    <div className="workbench-page">
      <div className="page-header">
        <div>
          <h1>Workbench</h1>
          <p>
            Ask AI, analyze confidential documents, inspect equipment, and
            generate verified outputs.
          </p>
        </div>
      </div>

      <div className="workbench-layout">
        <section className="workbench-main">
          <div className="workbench-card">
            <div className="workbench-card-header">
              <div>
                <span className="card-eyebrow">ASK AI</span>
                <h2>What would you like to work on?</h2>
              </div>
            </div>

            <textarea
              placeholder="Ask a question or describe the task you want MRPL AI to perform..."
            />

            <div className="workbench-actions">
              <button type="button" className="workbench-action">
                + Upload Files
              </button>

              <button type="button" className="workbench-action">
                Equipment
              </button>

              <button type="button" className="workbench-action">
                Knowledge Search
              </button>

              <button type="button" className="workbench-submit">
                Run AI Task →
              </button>
            </div>
          </div>

          <div className="workbench-card">
            <div className="workbench-card-header">
              <div>
                <span className="card-eyebrow">AGENT EXECUTION</span>
                <h2>Current Workflow</h2>
              </div>

              <span className="execution-status">Ready</span>
            </div>

            <div className="execution-steps">
              <div className="execution-step completed">
                <span className="execution-dot" />
                <div>
                  <strong>Task classification</strong>
                  <p>Identify the requested workflow</p>
                </div>
              </div>

              <div className="execution-step completed">
                <span className="execution-dot" />
                <div>
                  <strong>Knowledge retrieval</strong>
                  <p>Search relevant internal sources</p>
                </div>
              </div>

              <div className="execution-step">
                <span className="execution-dot" />
                <div>
                  <strong>Evidence verification</strong>
                  <p>Validate retrieved information</p>
                </div>
              </div>

              <div className="execution-step">
                <span className="execution-dot" />
                <div>
                  <strong>Generate response</strong>
                  <p>Produce an evidence-grounded answer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="workbench-side">
          <div className="workbench-card">
            <div className="workbench-card-header">
              <div>
                <span className="card-eyebrow">EVIDENCE</span>
                <h2>Sources</h2>
              </div>
            </div>

            <div className="source-empty">
              <span>◇</span>
              <p>Sources will appear here when an AI task is executed.</p>
            </div>
          </div>

          <div className="workbench-card">
            <div className="workbench-card-header">
              <div>
                <span className="card-eyebrow">RECENT</span>
                <h2>Previous Sessions</h2>
              </div>
            </div>

            <div className="session-list">
              <div className="session-item">
                <strong>Pump P-204 analysis</strong>
                <span>Today · 11:42 PM</span>
              </div>

              <div className="session-item">
                <strong>Inspection report review</strong>
                <span>Today · 09:18 PM</span>
              </div>

              <div className="session-item">
                <strong>Compressor procedure search</strong>
                <span>Yesterday · 04:26 PM</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Workbench;