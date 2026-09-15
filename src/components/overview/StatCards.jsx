import Card from "../common/Card";

const stats = [
  {
    label: "Active Tasks",
    value: "04",
    detail: "2 require attention",
  },
  {
    label: "Documents",
    value: "128",
    detail: "12 processed today",
  },
  {
    label: "Reports",
    value: "16",
    detail: "3 generated this week",
  },
  {
    label: "Knowledge Sources",
    value: "342",
    detail: "Across all categories",
  },
];

function StatCards() {
  return (
    <div className="stat-grid">
      {stats.map((stat) => (
        <Card key={stat.label} className="stat-card">
          <span className="stat-label">{stat.label}</span>
          <strong className="stat-value">{stat.value}</strong>
          <span className="stat-detail">{stat.detail}</span>
        </Card>
      ))}
    </div>
  );
}

export default StatCards;