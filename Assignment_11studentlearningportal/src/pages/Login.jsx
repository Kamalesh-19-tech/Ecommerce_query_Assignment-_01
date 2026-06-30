import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const VALID_USERNAME = "student";
const VALID_PASSWORD = "student123";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from?.pathname || "/dashboard";

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required.");
      return;
    }
    if (!password.trim()) {
      setError("Password is required.");
      return;
    }
    if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
      setError("Invalid username or password.");
      return;
    }

    setError("");
    login(username);
    navigate(redirectTo, { replace: true });
  }

  return (
    <div className="container login-container">
      <p className="eyebrow">Index Card 05 — Sign In</p>
      <h1>Login</h1>

      <form className="card login-card" onSubmit={handleSubmit}>
        <div className="field-group">
          <label className="field-label" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className="field-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="student"
            autoComplete="username"
          />
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="field-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="student123"
            autoComplete="current-password"
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="btn btn-accent login-submit">
          Login
        </button>

        <p className="login-hint">Try username “student” and password “student123”.</p>
      </form>
    </div>
  );
}
