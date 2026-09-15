import {
  Sparkles,
  Upload,
  Search,
  Boxes,
  FileText,
  ArrowRight,
} from "lucide-react";

import Card from "../common/Card";

const actions = [
  {
    id: "new-task",
    title: "New AI Task",
    description: "Start a new AI-assisted workflow",
    icon: Sparkles,
  },
  {
    id: "upload",
    title: "Upload Document",
    description: "Add confidential files to the workspace",
    icon: Upload,
  },
  {
    id: "search",
    title: "Search Knowledge",
    description: "Find information across your knowledge base",
    icon: Search,
  },
  {
    id: "equipment",
    title: "Analyze Equipment",
    description: "Inspect equipment and related documents",
    icon: Boxes,
  },
  {
    id: "report",
    title: "Generate Report",
    description: "Create a report from verified evidence",
    icon: FileText,
  },
];

function QuickActions({ setActivePage }) {
  const handleAction = (id) => {
    if (id === "new-task") {
      setActivePage("workbench");
    }

    if (id === "upload") {
      setActivePage("documents");
    }

    if (id === "search") {
      setActivePage("knowledge");
    }

    if (id === "equipment") {
      setActivePage("equipment");
    }

    if (id === "report") {
      setActivePage("reports");
    }
  };

  return (
    <section className="overview-section">
      <div className="section-heading-row">
        <div>
          <h2>Quick Actions</h2>
          <p>Start common AI-assisted workflows</p>
        </div>
      </div>

      <div className="quick-actions-grid">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Card
              key={action.id}
              className="quick-action-card"
            >
              <button
                type="button"
                onClick={() => handleAction(action.id)}
              >
                <Icon
                  
                  size={20}
                  strokeWidth={1.8}
                />

                <span className="quick-action-content">
                  <strong>{action.title}</strong>
                  <span>{action.description}</span>
                </span>

                <ArrowRight
                  className="quick-action-arrow"
                  size={18}
                  strokeWidth={1.8}
                />
              </button>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;