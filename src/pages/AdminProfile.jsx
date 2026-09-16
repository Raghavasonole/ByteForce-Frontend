function AdminProfile({
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
}) {
  const handleSidebarLayout = (value) => {
    if (value === "collapsed") {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  return (
    <div className="settings-page admin-profile-page">
      <div className="page-header">
        <div>
          <h1>Customize Profile</h1>
          <p>
            Manage your administrator profile and interface
            preferences.
          </p>
        </div>
      </div>

      <div className="admin-profile-content">
        <div className="settings-section">
          <div className="settings-section-header">
            <h2>Profile</h2>
            <p>
              Personal information displayed in the workspace.
            </p>
          </div>

          <div className="account-profile">
            <div className="avatar large">A</div>

            <div>
              <strong>Administrator</strong>
              <span>System Administrator</span>
            </div>
          </div>

          <div className="profile-form-grid">
            <label>
              <span>Display Name</span>

              <input
                type="text"
                defaultValue="Administrator"
              />
            </label>

            <label>
              <span>Job Title</span>

              <input
                type="text"
                defaultValue="System Administrator"
              />
            </label>

            <label>
              <span>Department</span>

              <input
                type="text"
                defaultValue="Industrial Operations"
              />
            </label>

            <label>
              <span>Role</span>

              <input
                type="text"
                value="System Administrator"
                disabled
                readOnly
              />
            </label>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-section-header">
            <h2>Appearance</h2>
            <p>
              Customize how the administrator workspace
              looks and behaves.
            </p>
          </div>

          <div className="settings-row">
            <div>
              <strong>Theme</strong>
              <span>
                Select the interface theme.
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

          <div className="settings-row">
            <div>
              <strong>Accent Color</strong>
              <span>
                Choose the interface highlight color.
              </span>
            </div>

            <select
              value={accent}
              onChange={(event) =>
                setAccent(event.target.value)
              }
            >
              <option value="red">MRPL Red</option>
              <option value="neutral">Neutral</option>
              <option value="blue">
                Industrial Blue
              </option>
            </select>
          </div>

          <div className="settings-row">
            <div>
              <strong>Sidebar Layout</strong>
              <span>
                Choose the default sidebar presentation.
              </span>
            </div>

            <select
              value={
                collapsed ? "collapsed" : "expanded"
              }
              onChange={(event) =>
                handleSidebarLayout(
                  event.target.value
                )
              }
            >
              <option value="expanded">
                Expanded
              </option>

              <option value="collapsed">
                Collapsed
              </option>
            </select>
          </div>

          <div className="settings-row">
            <div>
              <strong>Interface Density</strong>
              <span>
                Adjust spacing across the workspace.
              </span>
            </div>

            <select
              value={density}
              onChange={(event) =>
                setDensity(event.target.value)
              }
            >
              <option value="comfortable">
                Comfortable
              </option>

              <option value="compact">
                Compact
              </option>
            </select>
          </div>

          <div className="settings-row">
            <div>
              <strong>Reduce Motion</strong>
              <span>
                Reduce interface animations and
                transitions.
              </span>
            </div>

            <button
              type="button"
              className={`permission-toggle ${
                reduceMotion
                  ? "enabled"
                  : "disabled"
              }`}
              onClick={() =>
                setReduceMotion(
                  (value) => !value
                )
              }
            >
              {reduceMotion
                ? "Enabled"
                : "Disabled"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;