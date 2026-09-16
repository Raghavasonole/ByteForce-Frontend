import { useState } from "react";

function AdminSettings() {
  const [activeSection, setActiveSection] = useState("General");

  const [sessionTimeout, setSessionTimeout] = useState("30 minutes");
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [loginProtection, setLoginProtection] = useState(true);
  const [rbacEnabled, setRbacEnabled] = useState(true);
  const [privilegedApproval, setPrivilegedApproval] = useState(true);
  const [guestAccess, setGuestAccess] = useState(false);
  const [auditLogging, setAuditLogging] = useState(true);

  const [externalTransfer, setExternalTransfer] = useState(false);
  const [cloudProcessing, setCloudProcessing] = useState(false);
  const [localStorage, setLocalStorage] = useState(true);
  const [dataEncryption, setDataEncryption] = useState(true);

  const [documentRetention, setDocumentRetention] = useState("90 days");
  const [auditRetention, setAuditRetention] = useState("1 year");

  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [automaticBackups, setAutomaticBackups] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState("Daily");

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [adminPassword, setAdminPassword] = useState("admin123");

  const sections = [
    "General",
    "Security & Access",
    "Data Governance",
    "System & Infrastructure",
    "Help",
  ];

  const toggleLabel = (enabled) =>
    enabled ? "Enabled" : "Disabled";

  const handlePasswordChange = () => {
    setPasswordMessage("");
    setPasswordSuccess(false);

    if (
      !currentPassword ||
      !newPassword ||
      !confirmPassword
    ) {
      setPasswordMessage(
        "Please complete all password fields."
      );
      return;
    }

    if (currentPassword !== adminPassword) {
      setPasswordMessage(
        "Current password is incorrect."
      );
      return;
    }

    if (newPassword.length < 8) {
      setPasswordMessage(
        "New password must contain at least 8 characters."
      );
      return;
    }

    if (newPassword === currentPassword) {
      setPasswordMessage(
        "New password must be different from the current password."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage(
        "New password and confirmation do not match."
      );
      return;
    }

    setAdminPassword(newPassword);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordMessage(
      "Administrator password updated successfully."
    );
    setPasswordSuccess(true);
  };

  const handlePasswordCancel = () => {
    setShowPasswordForm(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordMessage("");
    setPasswordSuccess(false);
  };

  return (
    <div className="settings-page admin-settings-page">
      <div className="page-header">
        <div>
          <h1>Admin Settings</h1>
          <p>
            Manage workspace, security, data governance and
            system controls.
          </p>
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
                  <p>
                    Core configuration for the industrial AI
                    workspace.
                  </p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Workspace Name</strong>
                    <span>
                      Primary workspace identifier.
                    </span>
                  </div>
                  <span className="settings-status">
                    MRPL prototype
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Organization</strong>
                    <span>
                      Organization owning this environment.
                    </span>
                  </div>
                  <span className="settings-status">
                    MRPL
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Environment</strong>
                    <span>
                      Deployment environment.
                    </span>
                  </div>
                  <span className="settings-status">
                    On-Premise
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Deployment</strong>
                    <span>
                      Network deployment model.
                    </span>
                  </div>
                  <span className="settings-status">
                    Private Industrial Network
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Region</strong>
                    <span>
                      Workspace operating region.
                    </span>
                  </div>
                  <span className="settings-status">
                    India
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Time Zone</strong>
                    <span>
                      Workspace operating time zone.
                    </span>
                  </div>
                  <span className="settings-status">
                    Asia/Kolkata
                  </span>
                </div>
              </div>

              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Administrator Account</h2>
                  <p>
                    Current administrator identity and
                    workspace access.
                  </p>
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

          {activeSection === "Security & Access" && (
            <>
              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Authentication</h2>
                  <p>
                    Configure administrator and workspace
                    authentication.
                  </p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Change Password</strong>
                    <span>
                      Update the administrator account
                      password.
                    </span>
                  </div>

                  <button
                    type="button"
                    className="permission-toggle enabled"
                    onClick={() => {
                      if (showPasswordForm) {
                        handlePasswordCancel();
                      } else {
                        setShowPasswordForm(true);
                        setPasswordMessage("");
                        setPasswordSuccess(false);
                      }
                    }}
                  >
                    {showPasswordForm
                      ? "Cancel"
                      : "Change"}
                  </button>
                </div>

                {showPasswordForm && (
                  <div className="password-change-panel">
                    <div className="password-field">
                      <label>
                        Current Password
                      </label>

                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(event) =>
                          setCurrentPassword(
                            event.target.value
                          )
                        }
                        placeholder="Enter current password"
                      />
                    </div>

                    <div className="password-field">
                      <label>New Password</label>

                      <input
                        type="password"
                        value={newPassword}
                        onChange={(event) =>
                          setNewPassword(
                            event.target.value
                          )
                        }
                        placeholder="Enter new password"
                      />
                    </div>

                    <div className="password-field">
                      <label>
                        Confirm New Password
                      </label>

                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(event) =>
                          setConfirmPassword(
                            event.target.value
                          )
                        }
                        placeholder="Confirm new password"
                      />
                    </div>

                    {passwordMessage && (
                      <p
                        className={`password-message ${
                          passwordSuccess
                            ? "success"
                            : ""
                        }`}
                      >
                        {passwordMessage}
                      </p>
                    )}

                    <button
                      type="button"
                      className="page-primary-button"
                      onClick={handlePasswordChange}
                    >
                      Update Password
                    </button>
                  </div>
                )}

                <div className="settings-row">
                  <div>
                    <strong>
                      Session Timeout
                    </strong>
                    <span>
                      Automatically expire inactive
                      sessions.
                    </span>
                  </div>

                  <select
                    value={sessionTimeout}
                    onChange={(event) =>
                      setSessionTimeout(
                        event.target.value
                      )
                    }
                  >
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>60 minutes</option>
                    <option>120 minutes</option>
                  </select>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Multi-Factor Authentication
                    </strong>
                    <span>
                      Require an additional authentication
                      factor.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      mfaEnabled
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setMfaEnabled(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(mfaEnabled)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Failed Login Protection
                    </strong>
                    <span>
                      Protect accounts against repeated
                      failed attempts.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      loginProtection
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setLoginProtection(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(loginProtection)}
                  </button>
                </div>
              </div>

              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Access Control</h2>
                  <p>
                    Control privileged access within the
                    workspace.
                  </p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Role-Based Access Control
                    </strong>
                    <span>
                      Apply permissions according to
                      assigned roles.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      rbacEnabled
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setRbacEnabled(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(rbacEnabled)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Privileged Action Approval
                    </strong>
                    <span>
                      Require administrator approval for
                      sensitive actions.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      privilegedApproval
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setPrivilegedApproval(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(privilegedApproval)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Guest Access</strong>
                    <span>
                      Allow temporary guest accounts in
                      the workspace.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      guestAccess
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setGuestAccess(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(guestAccess)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Audit Logging</strong>
                    <span>
                      Record administrator and workspace
                      activity.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      auditLogging
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setAuditLogging(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(auditLogging)}
                  </button>
                </div>
              </div>
            </>
          )}

          {activeSection === "Data Governance" && (
            <>
              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Data Residency</h2>
                  <p>
                    Controls for confidential industrial
                    information.
                  </p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Processing Location
                    </strong>
                    <span>
                      Location where workspace data is
                      processed.
                    </span>
                  </div>
                  <span className="settings-status">
                    On-Premise
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      External Data Transfer
                    </strong>
                    <span>
                      Permit data to leave the private
                      environment.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      externalTransfer
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setExternalTransfer(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(externalTransfer)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Cloud Processing
                    </strong>
                    <span>
                      Allow documents to be processed by
                      cloud services.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      cloudProcessing
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setCloudProcessing(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(cloudProcessing)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Local Data Storage
                    </strong>
                    <span>
                      Keep workspace documents and records
                      locally.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      localStorage
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setLocalStorage(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(localStorage)}
                  </button>
                </div>
              </div>

              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>
                    Data Protection & Retention
                  </h2>
                  <p>
                    Manage storage protection and
                    retention periods.
                  </p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Data Encryption</strong>
                    <span>
                      Protect stored workspace data.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      dataEncryption
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setDataEncryption(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(dataEncryption)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Document Retention
                    </strong>
                    <span>
                      Retention period for workspace
                      documents.
                    </span>
                  </div>

                  <select
                    value={documentRetention}
                    onChange={(event) =>
                      setDocumentRetention(
                        event.target.value
                      )
                    }
                  >
                    <option>30 days</option>
                    <option>90 days</option>
                    <option>180 days</option>
                    <option>1 year</option>
                  </select>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Audit Data Retention
                    </strong>
                    <span>
                      Retention period for audit records.
                    </span>
                  </div>

                  <select
                    value={auditRetention}
                    onChange={(event) =>
                      setAuditRetention(
                        event.target.value
                      )
                    }
                  >
                    <option>90 days</option>
                    <option>1 year</option>
                    <option>2 years</option>
                    <option>5 years</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {activeSection === "System & Infrastructure" && (
            <>
              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>System Status</h2>
                  <p>
                    Current state of core workspace services.
                  </p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Workbench</strong>
                    <span>
                      AI workspace availability.
                    </span>
                  </div>
                  <span className="settings-status">
                    Operational
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Knowledge Base</strong>
                    <span>
                      Indexed internal references.
                    </span>
                  </div>
                  <span className="settings-status">
                    Available
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Document Processing
                    </strong>
                    <span>
                      Workspace document processing
                      service.
                    </span>
                  </div>
                  <span className="settings-status">
                    Operational
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Database</strong>
                    <span>
                      Local workspace database health.
                    </span>
                  </div>
                  <span className="settings-status">
                    Healthy
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Storage</strong>
                    <span>
                      Current local storage utilisation.
                    </span>
                  </div>
                  <span className="settings-status">
                    68% Used
                  </span>
                </div>
              </div>

              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Maintenance & Backup</h2>
                  <p>
                    Control system maintenance and backup
                    behaviour.
                  </p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Maintenance Mode</strong>
                    <span>
                      Temporarily restrict normal
                      workspace activity.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      maintenanceMode
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setMaintenanceMode(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(maintenanceMode)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Automatic Backups</strong>
                    <span>
                      Automatically create workspace
                      backups.
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`permission-toggle ${
                      automaticBackups
                        ? "enabled"
                        : "disabled"
                    }`}
                    onClick={() =>
                      setAutomaticBackups(
                        (value) => !value
                      )
                    }
                  >
                    {toggleLabel(automaticBackups)}
                  </button>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Backup Frequency
                    </strong>
                    <span>
                      Frequency of automatic workspace
                      backups.
                    </span>
                  </div>

                  <select
                    value={backupFrequency}
                    onChange={(event) =>
                      setBackupFrequency(
                        event.target.value
                      )
                    }
                  >
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Last Backup</strong>
                    <span>
                      Most recent workspace backup.
                    </span>
                  </div>
                  <span className="settings-status">
                    Today, 09:42 AM
                  </span>
                </div>
              </div>

              <div className="settings-section">
                <div className="settings-section-header">
                  <h2>Version & Deployment</h2>
                  <p>
                    Current deployment information.
                  </p>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>
                      Workbench Version
                    </strong>
                    <span>
                      Current application release.
                    </span>
                  </div>
                  <span className="settings-status">
                    v1.0.0
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Network</strong>
                    <span>
                      Workspace network configuration.
                    </span>
                  </div>
                  <span className="settings-status">
                    Private
                  </span>
                </div>

                <div className="settings-row">
                  <div>
                    <strong>Compute Node</strong>
                    <span>
                      Local processing availability.
                    </span>
                  </div>
                  <span className="settings-status">
                    Available
                  </span>
                </div>
              </div>
            </>
          )}

          {activeSection === "Help" && (
            <div className="settings-section">
              <div className="settings-section-header">
                <h2>Help & Guidance</h2>
                <p>
                  Resources for administering the MRPL AI
                  Workbench.
                </p>
              </div>

              <div className="help-list">
                <div className="help-item">
                  <strong>
                    Workbench Documentation
                  </strong>
                  <p>
                    Guidance for operating the AI workbench
                    and reviewing execution activity.
                  </p>
                </div>

                <div className="help-item">
                  <strong>Administrator Guide</strong>
                  <p>
                    Reference information for workspace
                    administration, users and system
                    controls.
                  </p>
                </div>

                <div className="help-item">
                  <strong>Security Guidelines</strong>
                  <p>
                    Guidance for maintaining secure
                    on-premise workspace operation.
                  </p>
                </div>

                <div className="help-item">
                  <strong>System Information</strong>
                  <p>
                    View deployment, environment and
                    version information.
                  </p>
                </div>

                <div className="help-item">
                  <strong>Contact Support</strong>
                  <p>
                    Access support information for
                    workspace issues.
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