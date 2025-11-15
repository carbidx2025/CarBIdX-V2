// ---BEGIN CODE---
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function DealerLogin() {
  const navigate = useNavigate();
  const { saveDealerToken } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://your-backend-url.com/dealer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        setLoading(false);
        setError("Invalid credentials.");
        return;
      }

      const data = await res.json();
      saveDealerToken(data.token);

      navigate("/dealer/dashboard");

    } catch (err) {
      setError("Network error, try again.");
      setLoading(false);
    }
  }

  return (
    <div className="dealer-login-container">
      <div className="dealer-login-box">
        <h2 className="dealer-login-title">Dealer Login</h2>

        {error && <p className="dealer-login-error">{error}</p>}

        <form onSubmit={handleSubmit} className="dealer-login-form">
          <input
            type="email"
            placeholder="Enter email"
            className="dealer-login-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            className="dealer-login-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button className="dealer-login-button" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
// ---END CODE---
