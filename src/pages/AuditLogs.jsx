import { useState } from "react";

function AuditLogs() {
  const [search, setSearch] = useState("");

  const logs = [
    {
      time: "10:48 AM",
      user: "Administrator",
      action: "Report generated",
      target: "PT-101 Inspection Report",
      result: "Success",
    },
    {
      time: "10:46 AM",
      user: "Administrator",
      action: "Knowledge search completed",
      target: "Safety Inspection SOP",
      result: "Success",
    },
    {
      time: "10:45 AM",
      user: "Employee",
      action: "Document uploaded",
      target: "P&ID_UnitA.png",
      result: "Success",
    },
    {
      time: "10:44 AM",
      user: "Employee",
      action: "AI task started",
      target: "P-204 Inspection Analysis",
      result: "Success",
    },
    {
      time: "10:42 AM",
      user: "Administrator",
      action: "User login",
      target: "Admin workspace",
      result: "Success",
    },
    {
      time: "10:31 AM",
      user: "Employee",
      action: "Document processing",
      target: "Instrumentation Standards.docx",
      result: "Error",
    },
  ];

  const filteredLogs = logs.filter((log) => {
    const value = search.toLowerCase();

    return (
      log.user.toLowerCase().includes(value) ||
      log.action.toLowerCase().includes(value) ||
      log.target.toLowerCase().includes(value)
    );
  });

  return (
    <div className="notifications-page audit-logs-page">
      <div className="page-header">
        <div>
          <h1>Audit Logs</h1>
          <p>Track administrator, user and system activity.</p>
        </div>
      </div>

      <div className="audit-summary-grid">
        <div className="app-card">
          <span>Events Today</span>
          <strong>186</strong>
        </div>

        <div className="app-card">
          <span>Successful Actions</span>
          <strong>181</strong>
        </div>

        <div className="app-card">
          <span>Errors</span>
          <strong>5</strong>
        </div>

        <div className="app-card">
          <span>External Connections</span>
          <strong>0</strong>
        </div>
      </div>

      <div className="audit-toolbar">
        <div className="audit-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search audit events..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <select defaultValue="all">
          <option value="all">All Events</option>
          <option value="success">Successful</option>
          <option value="error">Errors</option>
        </select>
      </div>

      <div className="app-card audit-table-card">
        <div className="audit-table-header">
          <span>Time</span>
          <span>User</span>
          <span>Action</span>
          <span>Target</span>
          <span>Result</span>
        </div>

        {filteredLogs.map((log) => (
          <div className="audit-row" key={`${log.time}-${log.action}`}>
            <span>{log.time}</span>
            <strong>{log.user}</strong>
            <span>{log.action}</span>
            <span>{log.target}</span>
            <span
              className={`audit-result ${log.result.toLowerCase()}`}
            >
              {log.result}
            </span>
          </div>
        ))}
      </div>

      <div className="app-card security-status-card">
        <div>
          <h2>System Security</h2>
          <p>
            The prototype operates in offline mode with no external service
            connections.
          </p>
        </div>

        <span className="settings-status">Secure</span>
      </div>
    </div>
  );
}

export default AuditLogs;