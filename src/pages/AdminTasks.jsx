import { useState } from "react";

function AdminTasks() {
  const [activeTab, setActiveTab] = useState("Active");

  const tasks = [
    {
      name: "P-204 Inspection Analysis",
      type: "Equipment Analysis",
      status: "Running",
      started: "10:42 AM",
      progress: "72%",
    },
    {
      name: "Maintenance Report Review",
      type: "Report Generation",
      status: "Completed",
      started: "09:58 AM",
      progress: "100%",
    },
    {
      name: "Safety Procedure Summary",
      type: "Knowledge Search",
      status: "Pending",
      started: "—",
      progress: "0%",
    },
    {
      name: "P&ID Unit A Processing",
      type: "Document Processing",
      status: "Running",
      started: "10:31 AM",
      progress: "82%",
    },
    {
      name: "Instrumentation Standards Review",
      type: "Knowledge Search",
      status: "Failed",
      started: "09:40 AM",
      progress: "41%",
    },
  ];

  const tabs = ["Active", "Pending", "Completed", "Failed", "Saved"];

  const getVisibleTasks = () => {
    if (activeTab === "Active") {
      return tasks.filter(
        (task) =>
          task.status === "Running" || task.status === "Pending"
      );
    }

    if (activeTab === "Pending") {
      return tasks.filter((task) => task.status === "Pending");
    }

    if (activeTab === "Completed") {
      return tasks.filter((task) => task.status === "Completed");
    }

    if (activeTab === "Failed") {
      return tasks.filter((task) => task.status === "Failed");
    }

    return [];
  };

  const visibleTasks = getVisibleTasks();

  return (
    <div className="tasks-page admin-tasks-page">
      <div className="page-header">
        <div>
          <h1>Tasks</h1>
          <p>Monitor and review workspace task execution.</p>
        </div>
      </div>

      <div className="task-tabs">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {tab === "Active" && <span>4</span>}
          </button>
        ))}
      </div>

      <div className="app-card task-table-card">
        <div className="admin-table-header">
          <span>Task</span>
          <span>Type</span>
          <span>Status</span>
          <span>Started</span>
          <span>Progress</span>
        </div>

        {visibleTasks.map((task) => (
          <div className="admin-task-row" key={task.name}>
            <div>
              <strong>{task.name}</strong>
            </div>

            <span>{task.type}</span>

            <span
              className={`admin-task-status ${task.status.toLowerCase()}`}
            >
              {task.status}
            </span>

            <span>{task.started}</span>

            <span>{task.progress}</span>
          </div>
        ))}

        {visibleTasks.length === 0 && (
          <div className="admin-empty-state">
            <strong>No tasks in this category</strong>
            <p>There are currently no tasks to display.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminTasks;