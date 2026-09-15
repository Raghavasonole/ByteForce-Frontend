import { useState } from "react";

import AppLayout from "./components/layout/AppLayout";

import UsersPermissions from "./pages/UsersPermissions";
import Overview from "./pages/Overview";
import Workbench from "./pages/Workbench";
import KnowledgeBase from "./pages/KnowledgeBase";
import Equipment from "./pages/Equipment";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import MyTasks from "./pages/MyTasks";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

import Login from "./pages/Login";

import AdminOverview from "./pages/AdminOverview";
import AdminWorkbench from "./pages/AdminWorkbench";
import AdminKnowledgeBase from "./pages/AdminKnowledgeBase";
import AdminTasks from "./pages/AdminTasks";
import AdminDocuments from "./pages/AdminDocuments";
import AuditLogs from "./pages/AuditLogs";
import AdminSettings from "./pages/AdminSettings";

import DWGIntelligence from "./pages/DWGIntelligence";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  if (!isLoggedIn) {
    return (
      <Login
        onLogin={(admin) => {
          setIsAdmin(admin);
          setIsLoggedIn(true);
        }}
      />
    );
  }

  const renderPage = (
    activePage,
    setActivePage,
    theme,
    setTheme,
    agentExecution,
    setAgentExecution,
    generatedResponse,
    setGeneratedResponse
  ) => {
    if (isAdmin) {
      switch (activePage) {
        case "admin-overview":
          return (
            <AdminOverview
              setAgentExecution={setAgentExecution}
              agentExecution={agentExecution}
              generatedResponse={generatedResponse}
              setGeneratedResponse={setGeneratedResponse}
            />
          );

        case "admin-inspection-agent":
          return (
            <AdminOverview
              setAgentExecution={setAgentExecution}
              agentExecution={agentExecution}
              generatedResponse={generatedResponse}
              setGeneratedResponse={setGeneratedResponse}
            />
          );

        case "admin-workbench":
          return <AdminWorkbench />;

        case "admin-knowledge":
          return <AdminKnowledgeBase />;

        case "admin-tasks":
          return <AdminTasks />;

        case "admin-documents":
          return <AdminDocuments />;

        case "audit-logs":
          return <AuditLogs />;

        case "users-permissions":
          return <UsersPermissions />;

        case "admin-settings":
          return (
            <AdminSettings
              theme={theme}
              setTheme={setTheme}
            />
          );

        default:
          return (
            <AdminOverview
              setAgentExecution={setAgentExecution}
              agentExecution={agentExecution}
              generatedResponse={generatedResponse}
              setGeneratedResponse={setGeneratedResponse}
            />
          );
      }
    }

    switch (activePage) {
      case "workbench":
        return <Workbench />;

      case "knowledge":
        return <KnowledgeBase />;

      case "equipment":
        return <Equipment />;

      case "documents":
        return <Documents />;

      case "dwg-intelligence":
        return <DWGIntelligence />;

      case "reports":
        return <Reports />;

      case "tasks":
        return <MyTasks />;

      case "notifications":
        return <Notifications />;

      case "settings":
        return <Settings />;

      default:
        return <Overview setActivePage={setActivePage} />;
    }
  };

  return (
    <AppLayout
      isAdmin={isAdmin}
      onLogout={handleLogout}
    >
      {(
        activePage,
        setActivePage,
        theme,
        setTheme,
        agentExecution,
        setAgentExecution,
        generatedResponse,
        setGeneratedResponse
      ) =>
        renderPage(
          activePage,
          setActivePage,
          theme,
          setTheme,
          agentExecution,
          setAgentExecution,
          generatedResponse,
          setGeneratedResponse
        )
      }
    </AppLayout>
  );
}

export default App;