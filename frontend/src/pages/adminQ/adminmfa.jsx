// ---BEGIN CODE---
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AdminMFA() {
  const navigate = useNavigate();
  const { adminTempToken, saveAdminToken } = useAuth();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://your-backend-url.com/admin/verify-mfa", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminTempToken}`
        },
        body: JSON.stringify({ code })
      });

      if (!res.ok) {
        setLoading(false);
        setError("Invalid MFA code.");
        return;
      }

      const data = await res.json();

      // Final admin token
      saveAdminToken(data.finalToken);

      navigate("/admin/dashboard");

    } catch (err) {
      setError("Network error. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="admin-mfa-container">
      <div className="admin-mfa-box">
        <h2 className="admin-mfa-title">Multi-Factor Authentication</h2>

        <p className="admin-mfa-info">
          Enter the 6-digit code from your authenticator app.
        </p>

        {error && <p className="admin-mfa-error">{error}</p>}

        <form onSubmit={handleSubmit} className="admin-mfa-form">

          <label className="admin-mfa-label">MFA Code</label>
          <input
            className="admin-mfa-input"
            type="text"
            maxLength="6"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="123456"
            required
          />

          <button
            type="submit"
            className="admin-mfa-button"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
// ---END CODE---
