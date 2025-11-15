// BUYER DASHBOARD PAGE
// PATH: frontend/src/pages/Buyer/buyerdashboard.jsx

import React from "react";
import "../../styles/dashboard.css";

function BuyerDashboard() {
  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Buyer Dashboard</h1>
        <p>Manage your car requests and offers.</p>
      </div>

      {/* STATS ROW */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <span className="stat-label">Active Requests</span>
          <span className="stat-value">0</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Total Offers</span>
          <span className="stat-value">0</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Completed</span>
          <span className="stat-value">0</span>
        </div>
      </div>

      {/* ACTION BUTTON */}
      <div className="dashboard-actions">
        <button className="primary-btn">Create New Car Request</button>
      </div>

      {/* RECENT REQUESTS LIST */}
      <div className="recent-requests">
        <h2>Your Requests</h2>
        <p>You have no active requests.</p>
      </div>
    </div>
  );
}

export default BuyerDashboard;
