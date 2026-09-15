import { useState } from "react";

function AdminKnowledgeBase() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Sources");

  const categories = [
    { name: "All Sources", count: 42 },
    { name: "Maintenance", count: 14 },
    { name: "Safety", count: 10 },
    { name: "Operations", count: 9 },
    { name: "Inspection", count: 6 },
    { name: "Standards", count: 3 },
  ];

  const documents = [
    {
      name: "P-204 Maintenance Manual",
      type: "MANUAL",
      category: "Maintenance",
      description: "Maintenance procedures, service intervals and component information.",
      updated: "2 hrs ago",
    },
    {
      name: "Crude Unit Operating Procedure",
      type: "PROCEDURE",
      category: "Operations",
      description: "Operating procedures and process guidelines for the crude unit.",
      updated: "5 hrs ago",
    },
    {
      name: "Safety Inspection SOP",
      type: "SOP",
      category: "Safety",
      description: "Standard procedures for equipment and workplace safety inspections.",
      updated: "Yesterday",
    },
    {
      name: "Pipeline Inspection Guidelines",
      type: "GUIDELINE",
      category: "Inspection",
      description: "Inspection checkpoints, findings and reporting requirements.",
      updated: "Yesterday",
    },
    {
      name: "Instrumentation Standards 2026",
      type: "STANDARD",
      category: "Standards",
      description: "Current instrumentation standards and reference requirements.",
      updated: "2 days ago",
    },
    {
      name: "Pump Maintenance Procedure",
      type: "PROCEDURE",
      category: "Maintenance",
      description: "Standard maintenance workflow for centrifugal pumps.",
      updated: "3 days ago",
    },
  ];

  const filteredDocuments = documents.filter((document) => {
    const matchesSearch =
      document.name.toLowerCase().includes(search.toLowerCase()) ||
      document.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All Sources" ||
      document.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="knowledge-page admin-knowledge-page">
      <div className="page-header">
        <div>
          <h1>Knowledge Base</h1>
          <p>Manage internal procedures, manuals and indexed knowledge.</p>
        </div>
      </div>

      <div className="knowledge-search">
        <span>⌕</span>

        <input
          type="text"
          placeholder="Search knowledge sources..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button type="button">Search</button>
      </div>

      <div className="knowledge-layout">
        <div className="knowledge-sidebar">
          <div className="knowledge-filter">
            <h3>Sources</h3>

            {categories.map((category) => (
              <button
                type="button"
                key={category.name}
                className={`knowledge-category ${
                  activeCategory === category.name ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span>{category.name}</span>
                <span>{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="knowledge-results-header">
            <div>
              <h2>{activeCategory}</h2>
              <p>{filteredDocuments.length} knowledge sources</p>
            </div>

            <span className="panel-count">Indexed</span>
          </div>

          <div className="knowledge-grid">
            {filteredDocuments.map((document) => (
              <div className="knowledge-card" key={document.name}>
                <div className="knowledge-card-icon">▤</div>

                <div>
                  <span className="knowledge-type">
                    {document.type}
                  </span>

                  <h3>{document.name}</h3>

                  <p>{document.description}</p>

                  <div className="knowledge-card-meta">
                    <span>Indexed</span>
                    <span>{document.updated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="app-card admin-empty-state">
              <strong>No sources found</strong>
              <p>Try a different search or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminKnowledgeBase;