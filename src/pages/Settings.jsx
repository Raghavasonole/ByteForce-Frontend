function Settings() {
  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">WORKSPACE CONFIGURATION</span>
          <h1>Settings</h1>
          <p>
            Manage your interface, notifications, and account preferences.
          </p>
        </div>
      </div>

      <div className="settings-layout">
        <aside className="settings-navigation">
          <button type="button" className="active">
            Interface
          </button>

          <button type="button">
            Notifications
          </button>

          <button type="button">
            Account
          </button>
        </aside>

        <main className="settings-content">
          <section className="settings-section">
            <div className="settings-section-header">
              <div>
                <span className="card-eyebrow">INTERFACE</span>
                <h2>Interface Preferences</h2>
                <p>Customize how your workspace is displayed.</p>
              </div>
            </div>

            <div className="settings-row">
              <div>
                <strong>Default View</strong>
                <span>Choose the page shown when you open MRPL AI.</span>
              </div>

              <select defaultValue="overview">
                <option value="overview">Overview</option>
                <option value="workbench">Workbench</option>
                <option value="knowledge">Knowledge Base</option>
              </select>
            </div>

            <div className="settings-row">
              <div>
                <strong>Compact Navigation</strong>
                <span>Use a collapsed sidebar to maximize workspace area.</span>
              </div>

              <label className="settings-toggle">
                <input type="checkbox" />
                <span />
              </label>
            </div>
          </section>

          <section className="settings-section">
            <div className="settings-section-header">
              <div>
                <span className="card-eyebrow">NOTIFICATIONS</span>
                <h2>Notification Preferences</h2>
                <p>Choose which workspace updates you receive.</p>
              </div>
            </div>

            <div className="settings-row">
              <div>
                <strong>Task Updates</strong>
                <span>Receive updates when AI tasks change status.</span>
              </div>

              <label className="settings-toggle">
                <input type="checkbox" defaultChecked />
                <span />
              </label>
            </div>

            <div className="settings-row">
              <div>
                <strong>Document Processing</strong>
                <span>Receive notifications when documents finish processing.</span>
              </div>

              <label className="settings-toggle">
                <input type="checkbox" defaultChecked />
                <span />
              </label>
            </div>

            <div className="settings-row">
              <div>
                <strong>Report Generation</strong>
                <span>Receive notifications when reports are ready.</span>
              </div>

              <label className="settings-toggle">
                <input type="checkbox" defaultChecked />
                <span />
              </label>
            </div>
          </section>

          <section className="settings-section">
            <div className="settings-section-header">
              <div>
                <span className="card-eyebrow">ACCOUNT</span>
                <h2>Account Information</h2>
                <p>Your current employee workspace information.</p>
              </div>
            </div>

            <div className="account-profile">
              <div className="avatar large">E</div>

              <div>
                <strong>Employee</strong>
                <span>Process Engineer</span>
              </div>
            </div>

            <div className="settings-account-grid">
              <div>
                <span>Role</span>
                <strong>Process Engineer</strong>
              </div>

              <div>
                <span>Workspace</span>
                <strong>MRPL AI Workbench</strong>
              </div>

              <div>
                <span>Access</span>
                <strong>Employee</strong>
              </div>
            </div>
          </section>

          <button type="button" className="logout-button">
            Log out
          </button>
        </main>
      </div>
    </div>
  );
}

export default Settings;