import { useState } from "react";

function Topbar({ setActivePage, isAdmin, onLogout }) {
  const [search, setSearch] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const searchItems = isAdmin
    ? [
        {
          title: "P-204 Maintenance Manual",
          type: "Knowledge Base",
          page: "admin-knowledge",
        },
        {
          title: "Safety Inspection SOP",
          type: "Knowledge Base",
          page: "admin-knowledge",
        },
        {
          title: "Inspection_Report_P204.pdf",
          type: "Document",
          page: "admin-documents",
        },
        {
          title: "P&ID_UnitA.png",
          type: "Document",
          page: "admin-documents",
        },
        {
          title: "P-204 Inspection Analysis",
          type: "Task",
          page: "admin-tasks",
        },
        {
          title: "Maintenance Report Review",
          type: "Task",
          page: "admin-tasks",
        },
        {
          title: "Audit Logs",
          type: "System",
          page: "audit-logs",
        },
      ]
    : [
        {
          title: "P-204 Maintenance Manual",
          type: "Knowledge Base",
          page: "knowledge",
        },
        {
          title: "Safety Inspection SOP",
          type: "Knowledge Base",
          page: "knowledge",
        },
        {
          title: "Inspection_Report_P204.pdf",
          type: "Document",
          page: "documents",
        },
        {
          title: "P-204 Inspection Analysis",
          type: "Task",
          page: "tasks",
        },
        {
          title: "Reports",
          type: "Reports",
          page: "reports",
        },
      ];

  const filteredResults = searchItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const notifications = [
    {
      title: "Report generated",
      text: "PT-101 Inspection Report is ready.",
      time: "30 min ago",
    },
    {
      title: "Document processed",
      text: "P&ID_UnitA.png is 82% complete.",
      time: "22 min ago",
    },
    {
      title: "Equipment analysis completed",
      text: "P-204 findings are available.",
      time: "5 hrs ago",
    },
    {
      title: "Processing issue detected",
      text: "Instrumentation Standards.docx needs review.",
      time: "1 day ago",
    },
  ];

  const openSettings = () => {
    setShowProfile(false);

    if (isAdmin) {
      setActivePage("admin-settings");
    } else {
      setActivePage("settings");
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;

    setSearch(value);
    setShowSearchResults(value.trim() !== "");

    setShowNotifications(false);
    setShowProfile(false);
  };

  const handleSearchResult = (page) => {
    setActivePage(page);
    setSearch("");
    setShowSearchResults(false);
  };

  return (
    <header className="topbar">
      <div className="global-search search-wrapper">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search documents, tasks, knowledge..."
          value={search}
          onChange={handleSearchChange}
          onFocus={() => {
            if (search.trim() !== "") {
              setShowSearchResults(true);
            }
          }}
        />

        <button type="button" className="search-action">
          ◉
        </button>

        {showSearchResults && (
          <div className="search-results-dropdown">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <button
                  type="button"
                  className="search-result-item"
                  key={`${item.type}-${item.title}`}
                  onClick={() => handleSearchResult(item.page)}
                >
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.type}</span>
                  </div>

                  <span className="search-result-arrow">→</span>
                </button>
              ))
            ) : (
              <div className="search-no-results">
                <strong>No results found</strong>
                <span>Try another keyword.</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="topbar-actions">
        <div className="topbar-menu">
          <button
            type="button"
            className="topbar-icon"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
              setShowSearchResults(false);
            }}
          >
            ♢
            <span className="notification-dot"></span>
          </button>

          {showNotifications && (
            <div className="topbar-dropdown notification-dropdown">
              <div className="dropdown-header">
                <strong>Notifications</strong>
                <span>4 new</span>
              </div>

              {notifications.map((item) => (
                <div className="notification-row" key={item.title}>
                  <div className="notification-mark">✓</div>

                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="topbar-menu">
          <button
            type="button"
            className="profile"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
              setShowSearchResults(false);
            }}
          >
            <div className="avatar">
              {isAdmin ? "A" : "E"}
            </div>

            <div className="profile-info">
              <strong>
                {isAdmin ? "Administrator" : "Employee"}
              </strong>

              <span>
                {isAdmin ? "System Admin" : "Process Engineer"}
              </span>
            </div>

            <span className="profile-arrow">⌄</span>
          </button>

          {showProfile && (
            <div className="topbar-dropdown profile-dropdown">
              <button type="button" onClick={openSettings}>
                Manage account
              </button>

              <button type="button" onClick={openSettings}>
                Customize profile
              </button>

              <div className="dropdown-divider"></div>

              <button
  type="button"
  className="logout-option"
  onClick={onLogout}
>
  Sign out
</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;