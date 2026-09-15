import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AppLayout({ children, isAdmin, onLogout }) {
  const [activePage, setActivePage] = useState(
    isAdmin ? "admin-overview" : "overview"
  );

  const [collapsed, setCollapsed] = useState(false);

  const [theme, setTheme] = useState("dark");

  return (
    <div className={`app-layout ${isAdmin ? theme : ""}`}>
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isAdmin={isAdmin}
      />

      <div className="app-main">
        <Topbar
  setActivePage={setActivePage}
  isAdmin={isAdmin}
  theme={theme}
  setTheme={setTheme}
  onLogout={onLogout}
/>

        <main className="page-content">
          {children(
            activePage,
            setActivePage,
            theme,
            setTheme
          )}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;