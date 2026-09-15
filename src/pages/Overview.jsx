import StatCards from "../components/overview/StatCards";
import QuickActions from "../components/overview/QuickActions";
import ActiveTasks from "../components/overview/ActiveTasks";
import RecentActivity from "../components/overview/RecentActivity";

function Overview({ setActivePage }) {
  return (
    <div className="overview-page">
      <div className="page-header">
        <div>
          <h1>Welcome back</h1>
          <p>
            Your workspace for confidential AI-assisted industrial work.
          </p>
        </div>
      </div>

      <StatCards />

      <QuickActions setActivePage={setActivePage} />

      <div className="overview-two-column">
        <ActiveTasks setActivePage={setActivePage} />
        <RecentActivity />
      </div>
    </div>
  );
}

export default Overview;