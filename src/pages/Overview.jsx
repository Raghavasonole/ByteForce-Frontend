import { useState } from "react";

function Overview() {
  const [question, setQuestion] = useState("");
  const [showAttachments, setShowAttachments] = useState(false);
  const [agentExecution, setAgentExecution] = useState(null);
  const [generatedResponse, setGeneratedResponse] = useState("");

  const workflowSteps = [
    {
      title: "Understanding request",
      text: "Interpreting the requested industrial task.",
    },
    {
      title: "Searching knowledge base",
      text: "Retrieving relevant internal procedures and manuals.",
    },
    {
      title: "Matching evidence",
      text: "Comparing available documents and findings.",
    },
    {
      title: "Checking history",
      text: "Reviewing previous inspection and maintenance records.",
    },
    {
      title: "Preparing response",
      text: "Combining verified workspace information.",
    },
  ];

  const runAgent = () => {
    if (!question.trim()) {
      return;
    }

    setGeneratedResponse("");
    setShowAttachments(false);

    setAgentExecution({
      question: question,
      steps: workflowSteps,
      currentStep: 1,
      running: true,
    });

    setTimeout(() => {
      setAgentExecution((current) => {
        if (!current) return current;

        return {
          ...current,
          currentStep: 2,
        };
      });
    }, 700);

    setTimeout(() => {
      setAgentExecution((current) => {
        if (!current) return current;

        return {
          ...current,
          currentStep: 3,
        };
      });
    }, 1400);

    setTimeout(() => {
      setAgentExecution((current) => {
        if (!current) return current;

        return {
          ...current,
          currentStep: 4,
        };
      });
    }, 2100);

    setTimeout(() => {
      setAgentExecution((current) => {
        if (!current) return current;

        return {
          ...current,
          currentStep: 5,
          running: false,
        };
      });

      setGeneratedResponse(
        "The requested task was completed using the available internal workspace information. Relevant procedures, documents and previous findings were considered while preparing the response."
      );
    }, 2800);
  };

  return (
    <div
      className={`admin-agent-page ${
        agentExecution ? "execution-open" : ""
      }`}
    >
      <div className="admin-agent-main">
        <div className="admin-overview-tagline">
          Confidential Intelligence. Built On-Premise.
        </div>

        <div className="admin-agent-layout">
          <div className="admin-agent-left">
            <div className="workbench-card admin-ask-card">
              <div className="card-eyebrow">
                ASK AI
              </div>

              <div className="admin-agent-input">
                <textarea
                  value={question}
                  onChange={(event) =>
                    setQuestion(event.target.value)
                  }
                  placeholder="Ask the local agent to analyze a document, inspect equipment, search the knowledge base or prepare a report..."
                />

                <button
                  type="button"
                  className="admin-agent-mic"
                  onClick={() =>
                    alert("Voice input - demo only")
                  }
                  aria-label="Voice input"
                >
                  🎙
                </button>
              </div>

              <div className="admin-ask-actions">
                <div className="admin-ask-tools">
                  <div className="admin-agent-menu">
                    <button
                      type="button"
                      className="admin-agent-plus"
                      onClick={() =>
                        setShowAttachments(!showAttachments)
                      }
                    >
                      +
                    </button>

                    {showAttachments && (
                      <div className="admin-agent-menu-dropdown">
                        <button
                          type="button"
                          onClick={() =>
                            alert("Image upload - demo only")
                          }
                        >
                          Image Upload
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            alert("File upload - demo only")
                          }
                        >
                          File Upload
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  className="workbench-submit"
                  onClick={runAgent}
                >
                  Run agent →
                </button>
              </div>
            </div>

            {generatedResponse && (
              <div className="workbench-card admin-response-card">
                <div className="admin-response-header">
                  <div>
                    <h2>Generated response</h2>
                  </div>

                  <span className="admin-response-status">
                    Verified
                  </span>
                </div>

                <p>{generatedResponse}</p>

                <div className="evidence-panel">
                  <span className="card-eyebrow">
                    EVIDENCE & SOURCES
                  </span>

                  <p>
                    PT-101 Manual.pdf · p. 18–24
                  </p>

                  <p>
                    Unit-A Inspection Report.pdf · p. 6
                  </p>

                  <p>
                    Instrumentation Standards.docx · section 4.2
                  </p>
                </div>
              </div>
            )}
          </div>

          {agentExecution && (
            <div className="user-agent-execution">
              <div className="persistent-agent-card">
                <div className="persistent-agent-header">
                  <div>
                    <span className="page-eyebrow">
                      AGENT EXECUTION
                    </span>

                    <h2>Agent execution</h2>
                  </div>

                  <button
                    type="button"
                    className="persistent-agent-close"
                    onClick={() =>
                      setAgentExecution(null)
                    }
                  >
                    ×
                  </button>
                </div>

                <div className="agent-status">
                  <span
                    className={
                      agentExecution.running
                        ? "agent-status-dot active"
                        : "agent-status-dot"
                    }
                  />

                  {agentExecution.running
                    ? "THINKING · Local"
                    : "READY · Verified · Local"}
                </div>

                <div className="execution-list">
                  {agentExecution.steps.map(
                    (item, index) => {
                      const number = index + 1;

                      if (
                        number >
                        agentExecution.currentStep
                      ) {
                        return null;
                      }

                      return (
                        <div
                          className="execution-line"
                          key={item.title}
                        >
                          <span>✓</span>

                          <div>
                            <strong>
                              {item.title}
                            </strong>

                            <small>
                              {" "}
                              · {item.text}
                            </small>
                          </div>
                        </div>
                      );
                    }
                  )}

                  {agentExecution.running && (
                    <div className="execution-thinking">
                      <span />
                      <p>Working...</p>
                    </div>
                  )}

                  {!agentExecution.running && (
                    <div className="execution-complete">
                      ✓ Reasoning complete · response
                      verified
                    </div>
                  )}
                </div>

                <div className="persistent-agent-task">
                  <span>TASK</span>
                  <p>{agentExecution.question}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overview;