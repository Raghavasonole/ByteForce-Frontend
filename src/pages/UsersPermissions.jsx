import { useState } from "react";

const permissions = [
  {
    id: "documents",
    name: "Documents",
    description: "Upload and review workspace documents.",
  },
  {
    id: "knowledge",
    name: "Knowledge Base",
    description: "Search internal knowledge sources.",
  },
  {
    id: "inspection",
    name: "Inspection Agent",
    description: "Run inspection analysis workflows.",
  },
  {
    id: "workbench",
    name: "Workbench",
    description: "Use the AI workbench and submit tasks.",
  },
  {
    id: "tasks",
    name: "Tasks",
    description: "View and manage assigned tasks.",
  },
  {
    id: "reports",
    name: "Reports",
    description: "View generated reports and findings.",
  },
];

const initialUsers = [
  {
    id: 2,
    name: "Arjun Sharma",
    email: "arjun@mrpl.local",
    role: "Process Engineer",
    status: "Active",
    avatar: "A",
  },
  {
    id: 3,
    name: "Priya Nair",
    email: "priya@mrpl.local",
    role: "Inspection Engineer",
    status: "Active",
    avatar: "P",
  },
  {
    id: 4,
    name: "Rahul Verma",
    email: "rahul@mrpl.local",
    role: "Process Engineer",
    status: "Pending",
    avatar: "R",
  },
  {
    id: 5,
    name: "Neha Singh",
    email: "neha@mrpl.local",
    role: "Inspection Engineer",
    status: "Pending",
    avatar: "N",
  },
];

const defaultPermissions = {
  documents: true,
  knowledge: true,
  inspection: true,
  workbench: true,
  tasks: true,
  reports: true,
};

const emptyPermissions = {
  documents: false,
  knowledge: false,
  inspection: false,
  workbench: false,
  tasks: false,
  reports: false,
};

function UsersPermissions() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState(2);

  const [userPermissions, setUserPermissions] = useState({
    2: { ...defaultPermissions },
    3: { ...defaultPermissions },
    4: { ...emptyPermissions },
    5: { ...emptyPermissions },
  });

  const selectedUser = users.find(
    (user) => user.id === selectedUserId
  );

  const updatePermission = (permissionId) => {
    if (!selectedUser) return;

    if (selectedUser.status !== "Active") {
      return;
    }

    setUserPermissions((current) => ({
      ...current,
      [selectedUser.id]: {
        ...current[selectedUser.id],
        [permissionId]:
          !current[selectedUser.id][permissionId],
      },
    }));
  };

  const acceptRequest = (userId) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: "Active",
            }
          : user
      )
    );

    setUserPermissions((current) => ({
      ...current,
      [userId]: {
        ...defaultPermissions,
      },
    }));

    setSelectedUserId(userId);
  };

  const rejectRequest = (userId) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: "Rejected",
            }
          : user
      )
    );

    if (selectedUserId === userId) {
      setSelectedUserId(2);
    }
  };

  const deactivateUser = (userId) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: "Inactive",
            }
          : user
      )
    );

    setUserPermissions((current) => ({
      ...current,
      [userId]: {
        ...emptyPermissions,
      },
    }));
  };

  const reactivateUser = (userId) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: "Active",
            }
          : user
      )
    );
  };

  return (
    <div className="users-permissions-page">
      <div className="page-header">
        <div>
          <h1>Users & Permissions</h1>
          <p>
            Manage workspace users and access permissions.
          </p>
        </div>
      </div>

      <div className="users-permissions-layout">
        <div className="users-list-panel">
          <div className="users-panel-header">
            <div>
              <h2>Workspace Users</h2>
              <p>
                Registered users and access status.
              </p>
            </div>

            <span>{users.length} users</span>
          </div>

          <div className="users-list">
            {users.map((user) => (
              <button
                key={user.id}
                type="button"
                className={`user-list-item ${
                  selectedUserId === user.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedUserId(user.id)
                }
              >
                <div className="avatar">
                  {user.avatar}
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

          {users.some(
            (user) => user.status === "Pending"
          ) && (
            <div className="access-requests">
              <div className="permissions-section-header">
                <div>
                  <h3>Access Requests</h3>
                </div>

                <span>Pending</span>
              </div>

              {users
                .filter(
                  (user) => user.status === "Pending"
                )
                .map((user) => (
                  <div
                    className="access-request"
                    key={user.id}
                  >
                    <div>
                      <strong>{user.name}</strong>
                      <p>{user.role}</p>
                    </div>

                    <div className="access-request-actions">
                      <button
                        type="button"
                        className="page-primary-button"
                        onClick={() =>
                          acceptRequest(user.id)
                        }
                      >
                        Accept
                      </button>

                      <button
                        type="button"
                        className="page-secondary-button"
                        onClick={() =>
                          rejectRequest(user.id)
                        }
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="user-details-panel">
          {selectedUser && (
            <>
              <div className="users-panel-header">
                <div>
                  <h2>User Details</h2>
                  <p>
                    Manage workspace access permissions.
                  </p>
                </div>
              </div>

              <div className="selected-user-profile">
                <div className="avatar">
                  {selectedUser.avatar}
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
                  <span>
                    Assigned workspace role.
                  </span>
                </div>

                <div className="read-only-role">
                  {selectedUser.role}
                </div>
              </div>

              <div className="permissions-section">
                <div className="permissions-section-header">
                  <div>
                    <h3>Workspace Permissions</h3>
                  </div>

                  <span>
                    Operational workspace access
                  </span>
                </div>

                <div className="permissions-list-scroll">
                  {permissions.map((permission) => {
                    const enabled =
                      userPermissions[
                        selectedUser.id
                      ]?.[permission.id];

                    return (
                      <div
                        className="permission-row"
                        key={permission.id}
                      >
                        <div>
                          <strong>
                            {permission.name}
                          </strong>

                          <span>
                            {permission.description}
                          </span>
                        </div>

                        <button
                          type="button"
                          className={`permission-toggle ${
                            enabled
                              ? "enabled"
                              : "disabled"
                          }`}
                          onClick={() =>
                            updatePermission(
                              permission.id
                            )
                          }
                          disabled={
                            selectedUser.status !==
                            "Active"
                          }
                        >
                          {enabled
                            ? "Enabled"
                            : "Restricted"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {selectedUser.status === "Active" && (
                <div className="user-action-footer">
                  <div>
                    <strong>Deactivate User</strong>

                    <span>
                      Remove this user's access to the
                      workspace.
                    </span>
                  </div>

                  <button
                    type="button"
                    className="remove-access-button"
                    onClick={() =>
                      deactivateUser(
                        selectedUser.id
                      )
                    }
                  >
                    Deactivate User
                  </button>
                </div>
              )}

              {selectedUser.status === "Inactive" && (
                <div className="user-action-footer">
                  <div>
                    <strong>Reactivate User</strong>

                    <span>
                      Restore this user's workspace
                      access.
                    </span>
                  </div>

                  <button
                    type="button"
                    className="reactivate-access-button"
                    onClick={() =>
                      reactivateUser(
                        selectedUser.id
                      )
                    }
                  >
                    Reactivate User
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersPermissions;