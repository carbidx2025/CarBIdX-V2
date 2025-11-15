// ---BEGIN CODE---
import React from "react";
import "../../styles/dealerdashboard.css";

export default function DealerDashboard() {
  return (
    <div className="dealer-dash-container">

      {/* PAGE TITLE */}
      <h1 className="dealer-dash-title">Dealer Dashboard</h1>

      {/* TOP METRIC CARDS */}
      <div className="dealer-dash-cards">

        <div className="dealer-dash-card">
          <h3 className="dealer-dash-card-title">Live Requests</h3>
          <p className="dealer-dash-card-value">0</p>
        </div>

        <div className="dealer-dash-card">
          <h3 className="dealer-dash-card-title">Active Bids</h3>
          <p className="dealer-dash-card-value">0</p>
        </div>

        <div className="dealer-dash-card">
          <h3 className="dealer-dash-card-title">Won Auctions</h3>
          <p className="dealer-dash-card-value">0</p>
        </div>

        <div className="dealer-dash-card">
          <h3 className="dealer-dash-card-title">Payouts Pending</h3>
          <p className="dealer-dash-card-value">$0</p>
        </div>

      </div>

      {/* SHORTCUT ACTIONS */}
      <div className="dealer-dash-actions">
        <a href="/dealer/requests" className="dealer-dash-button">
          View Live Buyer Requests
        </a>

        <a href="/dealer/bids" className="dealer-dash-button">
          View My Bids
        </a>

        <a href="/dealer/results" className="dealer-dash-button">
          Auction Results
        </a>
      </div>

      {/* LIVE REQUESTS PREVIEW */}
      <div className="dealer-dash-section">
        <h2 className="dealer-dash-section-title">Live Buyer Requests</h2>

        <div className="dealer-dash-empty">
          No live requests available.
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="dealer-dash-section">
        <h2 className="dealer-dash-section-title">Recent Bidding Activity</h2>

        <div className="dealer-dash-empty">
          No recent activity.
        </div>
      </div>

    </div>
  );
}
// ---END CODE---
