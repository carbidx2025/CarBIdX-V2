// ---BEGIN CODE---
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { saveAdminTempToken } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://your-backend-url.com/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) {
        setLoading(false);
        setError("Invalid admin credentials.");
        return;
      }

      const data = await res.json();

      // Save temporary admin session token for MFA
      saveAdminTempToken(data.tempToken);

      // Redirect to MFA page
      navigate("/admin/mfa");

    } catch (err) {
      setError("Network error, try again.");
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Admin Login</h2>

        {error && <p className="admin-login-error">{error}</p>}

        <form onSubmit={handleSubmit} className="admin-login-form">

          <input
            type="text"
            placeholder="Username"
            className="admin-login-input"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="admin-login-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button className="admin-login-button" disabled={loading}>
            {loading ? "Authenticating…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
// ---END CODE---
