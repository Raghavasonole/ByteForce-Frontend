import { useState } from "react";

import {
  navigation,
  settingsNavigation,
  adminNavigation,
  adminSettingsNavigation,
} from "../../data/navigation";

const icons = {
  home: (
    <svg viewBox="0 0 24 24">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  ),

  work: (
    <svg viewBox="0 0 24 24">
      <path d="M4 6h16v14H4z" />
      <path d="M8 6V4h8v2" />
      <path d="M4 11h16" />
      <path d="M10 11v3h4v-3" />
    </svg>
  ),

  book: (
    <svg viewBox="0 0 24 24">
      <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4z" />
      <path d="M7 20V6a2 2 0 0 1 2-2" />
      <path d="M10 8h6" />
      <path d="M10 12h6" />
    </svg>
  ),

  equipment: (
    <svg viewBox="0 0 24 24">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 5V3" />
      <path d="M15 5V3" />
      <path d="M9 21v-2" />
      <path d="M15 21v-2" />
      <path d="M5 9H3" />
      <path d="M5 15H3" />
      <path d="M21 9h-2" />
      <path d="M21 15h-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),

  document: (
    <svg viewBox="0 0 24 24">
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v5h4" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  ),

  report: (
    <svg viewBox="0 0 24 24">
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
    </svg>
  ),

  tasks: (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  ),

  notifications: (
    <svg viewBox="0 0 24 24">
      <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  ),

  settings: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6.4v-2.6h.1A1.7 1.7 0 0 0 8 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 .3 1.9 1.7 1.7 0 0 0 1.5 1h.1v2.6h-.1a1.7 1.7 0 0 0-1.5 1.4z" />
    </svg>
  ),
};

function Sidebar({
  activePage,
  setActivePage,
  collapsed,
  setCollapsed,
  isAdmin,
  onLogout,
}) {
  const [showProfileMenu, setShowProfileMenu] =
    useState(false);

  const currentNavigation = isAdmin
    ? adminNavigation
    : navigation;

  const currentSettings = isAdmin
    ? adminSettingsNavigation
    : settingsNavigation;

  const handleNavigation = (page) => {
    setActivePage(page);
    setShowProfileMenu(false);
  };

  const handleProfileClick = (event) => {
    event.stopPropagation();

    setShowProfileMenu((current) => !current);
  };

  const handleAccountClick = (event) => {
    event.stopPropagation();
    setShowProfileMenu(false);

    setActivePage(
      isAdmin ? "admin-settings" : "settings"
    );
  };

  const handleCustomizeProfile = (event) => {
    event.stopPropagation();
    setShowProfileMenu(false);

    setActivePage(
      isAdmin ? "admin-profile" : "settings"
    );
  };

  const handleLogout = (event) => {
    event.stopPropagation();
    setShowProfileMenu(false);
    onLogout();
  };

  return (
    <aside
      className={`sidebar ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <div className="sidebar-inner">
        <div className="brand">
          <span>MRPL prototype</span>
        </div>

        <nav className="sidebar-nav">
          {currentNavigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${
                activePage === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleNavigation(item.id)
              }
              title={
                collapsed ? item.label : ""
              }
            >
              <span className="nav-icon">
                {icons[item.icon]}
              </span>

              <span className="nav-label">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button
            type="button"
            className={`nav-item ${
              activePage === currentSettings.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleNavigation(currentSettings.id)
            }
            title={
              collapsed
                ? currentSettings.label
                : ""
            }
          >
            <span className="nav-icon">
              {icons[currentSettings.icon]}
            </span>

            <span className="nav-label">
              {currentSettings.label}
            </span>
          </button>

          <div className="sidebar-user-wrap">
            <button
              type="button"
              className="sidebar-user"
              onClick={handleProfileClick}
            >
              <div className="avatar">
                {isAdmin ? "A" : "E"}
              </div>

              <div className="user-info">
                <strong>
                  {isAdmin
                    ? "Administrator"
                    : "Employee"}
                </strong>

                <span>
                  {isAdmin
                    ? "System Admin"
                    : "Process Engineer"}
                </span>
              </div>

              <span className="sidebar-profile-arrow">
                {showProfileMenu ? "⌃" : "⌄"}
              </span>
            </button>

            {showProfileMenu && (
              <div
                className="sidebar-profile-menu sidebar-profile-menu-force"
                onClick={(event) =>
                  event.stopPropagation()
                }
              >
                <button
                  type="button"
                  onClick={handleAccountClick}
                >
                  <span>👤</span>
                  <span>Manage account</span>
                </button>

                <button
                  type="button"
                  onClick={
                    handleCustomizeProfile
                  }
                >
                  <span>✦</span>
                  <span>Customize</span>
                </button>

                <div className="sidebar-profile-divider" />

                <button
                  type="button"
                  className="logout-option"
                  onClick={handleLogout}
                >
                  <span>↪</span>
                  <span>Sign out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="sidebar-toggle"
        onClick={() =>
          setCollapsed((value) => !value)
        }
        aria-label="Toggle sidebar"
      >
        <svg viewBox="0 0 24 24">
          <path d="m14 6-6 6 6 6" />
        </svg>
      </button>
    </aside>
  );
}

export default Sidebar;