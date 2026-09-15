import Card from "../common/Card";
import StatusBadge from "../common/StatusBadge";

const tasks = [
  {
    name: "Pump P-204 Failure Analysis",
    stage: "Analyzing equipment records",
    progress: 72,
    status: "In Progress",
  },
  {
    name: "Crude Unit Inspection Review",
    stage: "Retrieving relevant documents",
    progress: 48,
    status: "In Progress",
  },
  {
    name: "Monthly Operations Report",
    stage: "Generating report",
    progress: 86,
    status: "In Progress",
  },
];

function ActiveTasks({ setActivePage }) {
  return (
    <section className="overview-section">
      <div className="section-heading-row">
        <div>
          <h2>Active Tasks</h2>
          <p>AI workflows currently running</p>
        </div>

        <button
          type="button"
          className="section-link"
          onClick={() => setActivePage("tasks")}
        >
          View all →
        </button>
      </div>

      <div className="active-tasks-list">
        {tasks.map((task) => (
          <Card key={task.name} className="task-card">
            <div className="task-card-top">
              <div>
                <h3>{task.name}</h3>
                <p>{task.stage}</p>
              </div>

              <StatusBadge status={task.status} />
            </div>

            <div className="task-progress">
              <div className="task-progress-track">
                <div
                  className="task-progress-fill"
                  style={{ width: `${task.progress}%` }}
                />
              </div>

              <span>{task.progress}%</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ActiveTasks;