import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout({ children, isAdmin, onLogout }) {
  const [activePage, setActivePage] = useState(
    isAdmin ? "admin-overview" : "overview"
  );

  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("dark");

  const [agentExecution, setAgentExecution] = useState(null);
  const [generatedResponse, setGeneratedResponse] = useState("");

  return (
    <div className={`app-layout ${isAdmin ? theme : ""}`}>
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isAdmin={isAdmin}
      />

      <div className="app-main">
        <Topbar
          setActivePage={setActivePage}
          isAdmin={isAdmin}
          theme={theme}
          setTheme={setTheme}
          onLogout={onLogout}
        />

        <main className="page-content">
          {children(
            activePage,
            setActivePage,
            theme,
            setTheme,
            agentExecution,
            setAgentExecution,
            generatedResponse,
            setGeneratedResponse
          )}
        </main>
      </div>

      {isAdmin && agentExecution && (
        <div className="persistent-agent-execution">
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
                onClick={() => setAgentExecution(null)}
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
              {agentExecution.steps.map((item, index) => {
                const number = index + 1;

                if (number > agentExecution.currentStep) {
                  return null;
                }

                return (
                  <div
                    className="execution-line"
                    key={item.title}
                  >
                    <span>✓</span>

                    <div>
                      <strong>{item.title}</strong>
                      <small> · {item.text}</small>
                    </div>
                  </div>
                );
              })}

              {agentExecution.running && (
                <div className="execution-thinking">
                  <span></span>
                  <p>Working...</p>
                </div>
              )}

              {!agentExecution.running && (
                <div className="execution-complete">
                  ✓ Reasoning complete · response verified
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
  );
}

export default AppLayout;