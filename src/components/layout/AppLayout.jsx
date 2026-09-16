import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout({ children, isAdmin, onLogout }) {
  const [activePage, setActivePage] = useState(
    isAdmin ? "admin-overview" : "overview"
  );

  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [accent, setAccent] = useState("red");
  const [density, setDensity] = useState("comfortable");
  const [reduceMotion, setReduceMotion] = useState(false);

  const [agentExecution, setAgentExecution] = useState(null);
  const [generatedResponse, setGeneratedResponse] = useState("");

  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      title: "Report generated",
      text: "PT-101 Inspection Report is ready.",
      time: "30 min ago",
    },
    {
      title: "Document processed",
      text: "P&ID_UnitA.png processing completed.",
      time: "22 min ago",
    },
    {
      title: "Equipment analysis completed",
      text: "P-204 findings are available.",
      time: "5 hrs ago",
    },
    {
      title: "Processing issue",
      text: "Instrumentation Standards.docx needs review.",
      time: "1 day ago",
    },
  ];

  const renderNotifications = () => (
    <div className="admin-notification-wrap">
      <button
        type="button"
        className="admin-notification-button"
        onClick={() =>
          setShowNotifications((value) => !value)
        }
        aria-label="Notifications"
      >
        <svg viewBox="0 0 24 24">
          <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>

        <span className="admin-notification-dot" />
      </button>

      {showNotifications && (
        <div className="admin-notification-dropdown">
          <div className="admin-notification-header">
            <strong>Notifications</strong>
          </div>

          <div className="admin-notification-list">
            {notifications.map((notification) => (
              <div
                className="admin-notification-item"
                key={notification.title}
              >
                <span className="admin-notification-mark">
                  !
                </span>

                <div>
                  <strong>{notification.title}</strong>

                  <p>{notification.text}</p>

                  <span>{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`app-layout ${isAdmin ? theme : ""} ${
        isAdmin ? "admin-layout" : ""
      } accent-${accent} density-${density} ${
        reduceMotion ? "reduce-motion" : ""
      }`}
    >
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isAdmin={isAdmin}
        onLogout={onLogout}
      />

      <div className="app-main">
        {isAdmin ? null : activePage === "overview" ? null : (
          <Topbar
            setActivePage={setActivePage}
            isAdmin={false}
            theme={theme}
            setTheme={setTheme}
            onLogout={onLogout}
          />
        )}

        {isAdmin && (
          <div className="admin-floating-header">
            {renderNotifications()}
          </div>
        )}

        {!isAdmin && (
          <div className="admin-floating-header">
            {renderNotifications()}
          </div>
        )}

        <main
          className={`page-content ${
            isAdmin ? "admin-page-content" : ""
          }`}
        >
          {children(
            activePage,
            setActivePage,
            theme,
            setTheme,
            collapsed,
            setCollapsed,
            accent,
            setAccent,
            density,
            setDensity,
            reduceMotion,
            setReduceMotion,
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
                  <span />
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