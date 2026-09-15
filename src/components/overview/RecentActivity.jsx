import Card from "../common/Card";

const activities = [
  {
    time: "2 min ago",
    title: "AI analysis started",
    description: "Pump P-204 Failure Analysis",
    type: "task",
  },
  {
    time: "18 min ago",
    title: "Document processed",
    description: "P-204 Maintenance History.pdf",
    type: "document",
  },
  {
    time: "42 min ago",
    title: "Report generated",
    description: "Crude Unit Inspection Summary",
    type: "report",
  },
  {
    time: "1 hr ago",
    title: "Knowledge search completed",
    description: "Compressor operating procedures",
    type: "search",
  },
];

function RecentActivity() {
  return (
    <section className="overview-section">
      <div className="section-heading-row">
        <div>
          <h2>Recent Activity</h2>
          <p>Latest activity across your workspace</p>
        </div>
      </div>

      <Card className="activity-card">
        <div className="activity-list">
          {activities.map((activity) => (
            <div className="activity-item" key={`${activity.time}-${activity.title}`}>
              <div className={`activity-marker ${activity.type}`} />

              <div className="activity-content">
                <div className="activity-title-row">
                  <strong>{activity.title}</strong>
                  <span>{activity.time}</span>
                </div>

                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

export default RecentActivity;