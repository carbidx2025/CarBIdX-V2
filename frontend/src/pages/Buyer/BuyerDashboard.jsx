// ---BEGIN CODE---
import React from "react";
import "../../styles/buyerdashboard.css";

export default function BuyerDashboard() {
  return (
    <div className="buyer-dash-container">

      {/* PAGE TITLE */}
      <h1 className="buyer-dash-title">Buyer Dashboard</h1>

      {/* TOP SUMMARY CARDS */}
      <div className="buyer-dash-cards">

        <div className="buyer-dash-card">
          <h3 className="buyer-dash-card-title">Active Requests</h3>
          <p className="buyer-dash-card-value">0</p>
        </div>

        <div className="buyer-dash-card">
          <h3 className="buyer-dash-card-title">Live Auctions</h3>
          <p className="buyer-dash-card-value">0</p>
        </div>

        <div className="buyer-dash-card">
          <h3 className="buyer-dash-card-title">Pending Confirmations</h3>
          <p className="buyer-dash-card-value">0</p>
        </div>

        <div className="buyer-dash-card">
          <h3 className="buyer-dash-card-title">Deposit Status</h3>
          <p className="buyer-dash-card-value">No Holds</p>
        </div>

      </div>

      {/* ACTION SHORTCUTS */}
      <div className="buyer-dash-actions">
        <a href="/buyer/request" className="buyer-dash-button">
          Create New Request
        </a>

        <a href="/buyer/requests" className="buyer-dash-button">
          View My Requests
        </a>

        <a href="/buyer/auctions" className="buyer-dash-button">
          View My Auctions
        </a>
      </div>

      {/* UPCOMING OR ACTIVE AUCTIONS SECTION */}
      <div className="buyer-dash-section">
        <h2 className="buyer-dash-section-title">Active Auctions</h2>

        <div className="buyer-dash-empty">
          No active auctions.
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="buyer-dash-section">
        <h2 className="buyer-dash-section-title">Recent Activity</h2>

        <div className="buyer-dash-empty">
          No recent activity.
        </div>
      </div>

    </div>
  );
}
// ---END CODE---
