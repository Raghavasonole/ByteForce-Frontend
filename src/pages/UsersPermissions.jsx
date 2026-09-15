import { useState } from "react";

function UsersPermissions() {
  const [users, setUsers] = useState([
    {
      name: "Administrator",
      email: "admin@mrpl.local",
      role: "Administrator",
      status: "Active",
      access: "Full Access",
    },
    {
      name: "Arjun Sharma",
      email: "arjun@mrpl.local",
      role: "Process Engineer",
      status: "Active",
      access: "Standard",
    },
    {
      name: "Priya Nair",
      email: "priya@mrpl.local",
      role: "Maintenance Engineer",
      status: "Active",
      access: "Standard",
    },
    {
      name: "Rahul Verma",
      email: "rahul@mrpl.local",
      role: "Engineer",
      status: "Pending",
      access: "Awaiting Approval",
    },
    {
      name: "Neha Singh",
      email: "neha@mrpl.local",
      role: "Engineer",
      status: "Pending",
      access: "Awaiting Approval",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(users[1]);

  const updateUserStatus = (email, status) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.email === email
          ? {
              ...user,
              status,
              access:
                status === "Active"
                  ? "Standard"
                  : "Awaiting Approval",
            }
          : user
      )
    );
  };

  const updateRole = (event) => {
    const role = event.target.value;

    setSelectedUser((currentUser) => ({
      ...currentUser,
      role,
    }));

    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.email === selectedUser.email
          ? { ...user, role }
          : user
      )
    );
  };

  const togglePermission = (permission) => {
    alert(`${permission} permission changed - demo only`);
  };

  return (
    <div className="users-permissions-page">
      <div className="page-header">
        <div>
          <h1>Users & Permissions</h1>

          <p>
            Manage workspace users, roles and access permissions.
          </p>
        </div>
      </div>

      <div className="users-permissions-layout">
        <div className="users-list-panel">
          <div className="users-panel-header">
            <div>
              <h2>Workspace Users</h2>
              <p>Registered users and access status.</p>
            </div>

            <span>{users.length} users</span>
          </div>

          <div className="users-list">
            {users.map((user) => (
              <button
                type="button"
                className={`user-list-item ${
                  selectedUser.email === user.email
                    ? "active"
                    : ""
                }`}
                key={user.email}
                onClick={() => setSelectedUser(user)}
              >
                <div className="avatar">
                  {user.name.charAt(0)}
                </div>

                <div className="user-list-content">
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </div>

                <span
                  className={`user-status ${user.status.toLowerCase()}`}
                >
                  {user.status}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="user-details-panel">
          <div className="users-panel-header">
            <div>
              <h2>User Details</h2>
              <p>Manage role and workspace permissions.</p>
            </div>
          </div>

          <div className="selected-user-profile">
            <div className="avatar large">
              {selectedUser.name.charAt(0)}
            </div>

            <div>
              <strong>{selectedUser.name}</strong>
              <span>{selectedUser.email}</span>
            </div>

            <span
              className={`user-status ${selectedUser.status.toLowerCase()}`}
            >
              {selectedUser.status}
            </span>
          </div>

          <div className="user-setting-row">
            <div>
              <strong>Role</strong>
              <span>Controls the user's workspace access level.</span>
            </div>

            <select
              value={selectedUser.role}
              onChange={updateRole}
              disabled={selectedUser.role === "Administrator"}
            >
              <option>Administrator</option>
              <option>Process Engineer</option>
              <option>Maintenance Engineer</option>
              <option>Engineer</option>
              <option>Viewer</option>
            </select>
          </div>

          <div className="permissions-section">
            <div className="permissions-section-header">
              <h3>Permissions</h3>
              <span>Prototype controls</span>
            </div>

            <div className="permission-row">
              <div>
                <strong>Workbench</strong>
                <span>Use the AI workbench and submit tasks.</span>
              </div>

              <button
                type="button"
                className="permission-toggle enabled"
                onClick={() => togglePermission("Workbench")}
              >
                Enabled
              </button>
            </div>

            <div className="permission-row">
              <div>
                <strong>Knowledge Base</strong>
                <span>Search internal knowledge sources.</span>
              </div>

              <button
                type="button"
                className="permission-toggle enabled"
                onClick={() =>
                  togglePermission("Knowledge Base")
                }
              >
                Enabled
              </button>
            </div>

            <div className="permission-row">
              <div>
                <strong>Documents</strong>
                <span>Upload and review workspace documents.</span>
              </div>

              <button
                type="button"
                className="permission-toggle enabled"
                onClick={() => togglePermission("Documents")}
              >
                Enabled
              </button>
            </div>

            <div className="permission-row">
              <div>
                <strong>Reports</strong>
                <span>View generated reports and findings.</span>
              </div>

              <button
                type="button"
                className="permission-toggle enabled"
                onClick={() => togglePermission("Reports")}
              >
                Enabled
              </button>
            </div>

            <div className="permission-row">
              <div>
                <strong>Administration</strong>
                <span>Access users, permissions and audit logs.</span>
              </div>

              <button
                type="button"
                className={`permission-toggle ${
                  selectedUser.role === "Administrator"
                    ? "enabled"
                    : "disabled"
                }`}
                onClick={() => togglePermission("Administration")}
              >
                {selectedUser.role === "Administrator"
                  ? "Enabled"
                  : "Restricted"}
              </button>
            </div>
          </div>

          {selectedUser.status === "Pending" && (
            <div className="access-request">
              <div>
                <strong>Access request pending</strong>
                <p>
                  This user is waiting for administrator approval.
                </p>
              </div>

              <div className="access-request-actions">
                <button
                  type="button"
                  className="page-primary-button"
                  onClick={() =>
                    updateUserStatus(
                      selectedUser.email,
                      "Active"
                    )
                  }
                >
                  Approve
                </button>

                <button
                  type="button"
                  className="page-secondary-button"
                  onClick={() =>
                    updateUserStatus(
                      selectedUser.email,
                      "Rejected"
                    )
                  }
                >
                  Reject
                </button>
              </div>
            </div>
          )}

          {selectedUser.status === "Active" &&
            selectedUser.role !== "Administrator" && (
              <button
                type="button"
                className="remove-access-button"
                onClick={() =>
                  updateUserStatus(
                    selectedUser.email,
                    "Pending"
                  )
                }
              >
                Suspend access
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default UsersPermissions;