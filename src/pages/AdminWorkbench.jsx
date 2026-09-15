import { useState } from "react";

function AdminWorkbench() {
  const [question, setQuestion] = useState(
    "Analyze the inspection requirements for PT-101 and identify the relevant internal procedures."
  );

  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);

  const workflow = [
    {
      title: "Read gauge photo",
      detail: "detected 4.1 bar",
    },
    {
      title: "Searched knowledge base",
      detail: "3 passages retrieved",
    },
    {
      title: "Matched",
      detail: "SOP-114 §4.2 · rated spec",
    },
    {
      title: "Cross-referenced incident history",
      detail: "matched Incident-2024-11",
    },
    {
      title: "Verified findings",
      detail: "extraction, spec and incident pattern agree",
    },
  ];

  const runAgent = () => {
    if (!question.trim()) {
      return;
    }

    setRunning(true);
    setStep(1);

    setTimeout(() => {
      setStep(2);
    }, 1000);

    setTimeout(() => {
      setStep(3);
    }, 2000);

    setTimeout(() => {
      setStep(4);
    }, 3000);

    setTimeout(() => {
      setStep(5);
      setRunning(false);
    }, 4000);
  };

  return (
    <div className="workbench-page admin-workbench-page">
      <div className="page-header">
        <div>
          <h1>Workbench</h1>

          <p>
            Run confidential industrial analysis with
            evidence-backed results.
          </p>
        </div>
      </div>

      <div className="workbench-layout">
        <div className="workbench-main">
          <div className="workbench-card">
            <div className="workbench-card-header">
              <div>
                <span className="page-eyebrow">ASK AI</span>
              </div>
            </div>

            <textarea
              value={question}
              onChange={(event) =>
                setQuestion(event.target.value)
              }
            />

            <div className="workbench-actions">
              <button
                className="workbench-action"
                type="button"
              >
                ＋ Attach
              </button>

              <button
                className="workbench-action"
                type="button"
              >
                Evidence-backed
              </button>

              <button
                className="workbench-action"
                type="button"
              >
                Internal KB
              </button>

              <button
                className="workbench-submit"
                type="button"
                onClick={runAgent}
              >
                {running ? "Running..." : "Run agent →"}
              </button>
            </div>
          </div>

          <div className="workbench-card">
            <div className="workbench-card-header">
              <div>
                <h2>Generated response</h2>
              </div>

              <span className="execution-status">
                Verified
              </span>
            </div>

            <p>
              PT-101 inspection should reference the internal
              pressure-instrument maintenance procedure and the
              Unit-A inspection standard. The relevant evidence is
              available in the indexed maintenance manual and
              inspection report.
            </p>

            <div className="workbench-card evidence-panel">
              <span className="page-eyebrow">
                EVIDENCE & SOURCES
              </span>

              <p>PT-101 Manual.pdf · p. 18–24</p>
              <p>Unit-A Inspection Report.pdf · p. 6</p>
              <p>
                Instrumentation Standards.docx · section 4.2
              </p>
            </div>
          </div>
        </div>

        <div className="agent-execution-panel">
          <div className="workbench-card">
            <div className="workbench-card-header">
              <div>
                <h2>Agent execution</h2>
              </div>
            </div>

            <div className="agent-status">
              <span
                className={
                  running
                    ? "agent-status-dot active"
                    : "agent-status-dot"
                }
              ></span>

              {running
                ? "THINKING · Local agent orchestration"
                : "READY · Verified · Local"}
            </div>

            <div className="execution-list">
              {step === 0 && (
                <p className="execution-empty">
                  Run the agent to see the workflow.
                </p>
              )}

              {workflow.map((item, index) => {
                const number = index + 1;

                if (number > step) {
                  return null;
                }

                if (item.title === "Matched") {
                  return (
                    <div
                      className="execution-match"
                      key={item.title}
                    >
                      <span>✓</span>

                      <div>
                        <small>Matched</small>
                        <strong>{item.detail}</strong>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    className="execution-line"
                    key={item.title}
                  >
                    <span>✓</span>

                    <div>
                      <strong>{item.title}</strong>
                      <small> · {item.detail}</small>
                    </div>
                  </div>
                );
              })}

              {running && (
                <div className="execution-thinking">
                  <span></span>
                  <p>Working...</p>
                </div>
              )}

              {!running && step === 5 && (
                <div className="execution-complete">
                  ✓ Reasoning complete · sources linked above
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminWorkbench;