function AdminOverview() {
  

  const activeTasks = [
    {
      name: "P-204 Inspection Analysis",
      description: "AI-assisted equipment inspection workflow",
      progress: "72%",
    },
    {
      name: "Maintenance Report Review",
      description: "Document validation and report generation",
      progress: "48%",
    },
    {
      name: "Safety Procedure Summary",
      description: "Knowledge base processing task",
      progress: "26%",
    },
  ];

  const activities = [
    {
      title: "AI task completed",
      time: "2 min ago",
      text: "P-203 inspection analysis completed successfully.",
    },
    {
      title: "Document uploaded",
      time: "8 min ago",
      text: "Maintenance_SOP_2026.pdf was added to the workspace.",
    },
    {
      title: "Knowledge base updated",
      time: "15 min ago",
      text: "Safety Inspection SOP finished indexing.",
    },
    {
      title: "Administrator login",
      time: "21 min ago",
      text: "System administrator signed in to the workspace.",
    },
  ];

  return (
    <div className="overview-page admin-overview-page">
      <div className="page-header">
        <div>
          <h1>Admin Overview</h1>
          <p>Monitor workspace activity, tasks and system operations.</p>
        </div>
      </div>

      <div className="stat-grid">
        <div className="app-card stat-card">
          <span className="stat-label">Active Users</span>
          <strong className="stat-value">24</strong>
          <span className="stat-detail">Currently active</span>
        </div>

        <div className="app-card stat-card">
          <span className="stat-label">Tasks Today</span>
          <strong className="stat-value">128</strong>
          <span className="stat-detail">Tasks processed</span>
        </div>

        <div className="app-card stat-card">
          <span className="stat-label">Documents</span>
          <strong className="stat-value">342</strong>
          <span className="stat-detail">Indexed documents</span>
        </div>

        <div className="app-card stat-card">
          <span className="stat-label">System Status</span>
          <strong className="stat-value">Online</strong>
          <span className="stat-detail">All services operational</span>
        </div>
      </div>


      <div className="overview-two-column">
        <div>
          <div className="section-heading-row">
            <div>
              <h2>Active Tasks</h2>
              <p>Currently running workspace operations.</p>
            </div>

            <button
              type="button"
              className="section-link"
              onClick={() => setActivePage("admin-tasks")}
            >
              View all
            </button>
          </div>

          <div className="active-tasks-list">
            {activeTasks.map((task) => (
              <div className="app-card task-card" key={task.name}>
                <div className="task-card-top">
                  <div>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                  </div>

                  <span className="status-badge in-progress">
                    Running
                  </span>
                </div>

                <div className="task-progress">
                  <div className="task-progress-track">
                    <div
                      className="task-progress-fill"
                      style={{ width: task.progress }}
                    />
                  </div>

                  <span>{task.progress}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="section-heading-row">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest workspace events.</p>
            </div>

            <button
              type="button"
              className="section-link"
              onClick={() => setActivePage("audit-logs")}
            >
              Audit logs
            </button>
          </div>

          <div className="app-card activity-card">
            <div className="activity-list">
              {activities.map((activity) => (
                <div className="activity-item" key={activity.title}>
                  <div className="activity-marker"></div>

                  <div className="activity-content">
                    <div className="activity-title-row">
                      <strong>{activity.title}</strong>
                      <span>{activity.time}</span>
                    </div>

                    <p>{activity.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOverview;