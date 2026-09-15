import { useState } from "react";

function AdminSettings({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState("General");

  const sections = ["General", "Appearance", "Security", "Help"];

  return (
    <div className="settings-page admin-settings-page">
      <div className="page-header">
        <div>
          <h1>Admin Settings</h1>
          <p>Manage workspace preferences and administrator controls.</p>
        </div>
      </div>

      <div className="settings-layout">
        <div className="settings-navigation">
          {sections.map((section) => (
            <button
              type="button"
              key={section}
              className={
                activeSection === section ? "active" : ""
              }
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="settings-content">
          {activeSection === "General" && (
            <>
              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Workspace</h2>
                  <p>Basic administrative workspace information.</p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Workspace Name</strong>
                    <span>Primary prototype workspace.</span>
                  </div>

                  <span className="settings-status">
                    MRPL prototype
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Environment</strong>
                    <span>Current application environment.</span>
                  </div>

                  <span className="settings-status">On-Premise</span>
                </div>
              </div>

              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Administrator Account</h2>
                  <p>Current administrator information.</p>
                </div>

                <div className="account-profile">
                  <div className="avatar large">A</div>

                  <div>
                    <strong>Administrator</strong>
                    <span>System Admin</span>
                  </div>
                </div>

                <div className="settings-account-grid">
                  <div>
                    <span>Role</span>
                    <strong>Administrator</strong>
                  </div>

                  <div>
                    <span>Access</span>
                    <strong>Full Workspace</strong>
                  </div>

                  <div>
                    <span>Status</span>
                    <strong>Active</strong>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "Appearance" && (
            <div className="settings-section">
              <div className="settings-section-header">
                <h2>Appearance</h2>
                <p>Choose how the Admin workspace looks.</p>
              </div>

              <div className="settings-row">
                <div>
                  <strong>Theme</strong>
                  <span>
                    Switch between the dark and light interface.
                  </span>
                </div>

                <select
                  value={theme}
                  onChange={(event) =>
                    setTheme(event.target.value)
                  }
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
            </div>
          )}

          {activeSection === "Security" && (
            <>
              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Security</h2>
                  <p>Workspace security and connection status.</p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Offline Mode</strong>
                    <span>
                      External connections are disabled.
                    </span>
                  </div>

                  <span className="settings-status">Enabled</span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>External Connections</strong>
                    <span>
                      No external services are connected.
                    </span>
                  </div>

                  <span className="settings-status">0</span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Audit Logging</strong>
                    <span>
                      Administrative and workspace events are recorded.
                    </span>
                  </div>

                  <span className="settings-status">Enabled</span>
                </div>
              </div>
            </>
          )}

          {activeSection === "Help" && (
            <div className="settings-section">
              <div className="settings-section-header">
                <h2>Help & Guidance</h2>
                <p>Quick guidance for the Admin workspace.</p>
              </div>

              <div className="help-list">
                <div className="help-item">
                  <strong>Workbench</strong>
                  <p>
                    Use the Workbench to submit AI tasks and monitor
                    execution activity.
                  </p>
                </div>

                <div className="help-item">
                  <strong>Knowledge Base</strong>
                  <p>
                    Search indexed manuals, procedures, safety documents
                    and operational references.
                  </p>
                </div>

                <div className="help-item">
                  <strong>Tasks</strong>
                  <p>
                    Review active, pending, completed and failed workspace
                    tasks.
                  </p>
                </div>

                <div className="help-item">
                  <strong>Documents</strong>
                  <p>
                    Upload documents and review their processing status.
                  </p>
                </div>

                <div className="help-item">
                  <strong>Audit Logs</strong>
                  <p>
                    Review important system, administrator and user
                    activity.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;