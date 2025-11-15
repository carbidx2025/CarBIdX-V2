// ---BEGIN CODE---
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function BuyerLogin() {
  const navigate = useNavigate();
  const { saveBuyerToken } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://your-backend-url.com/buyer/login", {
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
      saveBuyerToken(data.token);

      navigate("/buyer/dashboard");

    } catch (err) {
      setError("Network error, try again.");
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      <h2 className="auth-title">Buyer Login</h2>

      {error && <p className="auth-error">{error}</p>}

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Enter email"
          className="auth-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          className="auth-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button className="auth-button" disabled={loading}>
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
// ---END CODE---
