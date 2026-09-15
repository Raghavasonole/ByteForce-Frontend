import { useState } from "react";

function Overview({
  setAgentExecution,
  agentExecution,
  generatedResponse,
  setGeneratedResponse,
}) {
  const [question, setQuestion] = useState("");
  const [showAttachments, setShowAttachments] = useState(false);

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
    if (!question.trim()) return;

    setGeneratedResponse("");
    setShowAttachments(false);

    setAgentExecution({
      question,
      steps: workflowSteps,
      currentStep: 1,
      running: true,
    });

    setTimeout(() => {
      setAgentExecution((current) => current && { ...current, currentStep: 2 });
    }, 700);

    setTimeout(() => {
      setAgentExecution((current) => current && { ...current, currentStep: 3 });
    }, 1400);

    setTimeout(() => {
      setAgentExecution((current) => current && { ...current, currentStep: 4 });
    }, 2100);

    setTimeout(() => {
      setAgentExecution((current) =>
        current ? { ...current, currentStep: 5, running: false } : current
      );

      setGeneratedResponse(
        "The requested task was completed using the available internal workspace information. Relevant procedures, documents and previous findings were considered while preparing the response."
      );
    }, 2800);
  };

  return (
    <div className={`admin-agent-page ${agentExecution ? "execution-open" : ""}`}>
      <div className="admin-agent-main">
        <div className="admin-agent-layout">
          <div className="admin-agent-left">
            <div className="workbench-card admin-ask-card">
              <div className="card-eyebrow">ASK AI</div>

              <div className="admin-agent-input">
                <textarea
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Ask the local agent to analyze a document, inspect equipment, search the knowledge base or prepare a report..."
                />

                <button
                  type="button"
                  className="admin-agent-mic"
                  onClick={() => alert("Voice input - demo only")}
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
                      onClick={() => setShowAttachments(!showAttachments)}
                    >
                      +
                    </button>

                    {showAttachments && (
                      <div className="admin-agent-menu-dropdown">
                        <button
                          type="button"
                          onClick={() => alert("Image upload - demo only")}
                        >
                          Image Upload
                        </button>
                        <button
                          type="button"
                          onClick={() => alert("File upload - demo only")}
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
                  disabled={agentExecution?.running}
                >
                  {agentExecution?.running ? "Running..." : "Run agent →"}
                </button>
              </div>
            </div>

            {generatedResponse && (
              <div className="workbench-card admin-response-card">
                <div className="admin-response-header">
                  <div>
                    <h2>Generated response</h2>
                  </div>
                  <span className="admin-response-status">Verified</span>
                </div>

                <p>{generatedResponse}</p>

                <div className="evidence-panel">
                  <span className="card-eyebrow">EVIDENCE &amp; SOURCES</span>
                  <p>PT-101 Manual.pdf · p. 18–24</p>
                  <p>Unit-A Inspection Report.pdf · p. 6</p>
                  <p>Instrumentation Standards.docx · section 4.2</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
