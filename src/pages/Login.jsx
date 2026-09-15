import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
  event.preventDefault();

  const enteredUsername = username.trim().toLowerCase();
  const enteredPassword = password.trim();

  if (
    enteredUsername === "admin" &&
    enteredPassword === "admin123"
  ) {
    onLogin(true);
    return;
  }

  if (
    enteredUsername === "user" &&
    enteredPassword === "user123"
  ) {
    onLogin(false);
    return;
  }

  setError("Invalid username or password.");
};

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">MRPL prototype</div>

        <div className="login-header">
          <span>SECURE WORKSPACE</span>
          <h1>Sign in</h1>
          <p>
            Access the industrial AI workspace.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="login-field">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="login-field">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button type="submit" className="login-button">
            Sign in
          </button>
        </form>

        <div className="login-demo">
          <strong>Demo credentials</strong>

          <span>Admin: admin / admin123</span>
          <span>User: user / user123</span>
        </div>
      </div>
    </div>
  );
}

export default Login;