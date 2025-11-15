// ---BEGIN CODE---
import React from "react";
import "../../styles/admindashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dash-container">

      {/* PAGE TITLE */}
      <h1 className="admin-dash-title">Admin Dashboard</h1>

      {/* TOP METRIC CARDS */}
      <div className="admin-dash-cards">

        <div className="admin-dash-card">
          <h3 className="admin-dash-card-title">Pending Dealer Approvals</h3>
          <p className="admin-dash-card-value">0</p>
        </div>

        <div className="admin-dash-card">
          <h3 className="admin-dash-card-title">Suspended Users</h3>
          <p className="admin-dash-card-value">0</p>
        </div>

        <div className="admin-dash-card">
          <h3 className="admin-dash-card-title">Active Auctions</h3>
          <p className="admin-dash-card-value">0</p>
        </div>

        <div className="admin-dash-card">
          <h3 className="admin-dash-card-title">Deposits Held</h3>
          <p className="admin-dash-card-value">$0</p>
        </div>

      </div>

      {/* ACTION SHORTCUTS */}
      <div className="admin-dash-actions">

        <a href="/admin/approve-dealers" className="admin-dash-button">
          Approve Dealers
        </a>

        <a href="/admin/suspend-dealers" className="admin-dash-button">
          Suspend Dealers
        </a>

        <a href="/admin/suspend-buyers" className="admin-dash-button">
          Suspend Buyers
        </a>

        <a href="/admin/deposits" className="admin-dash-button">
          Deposit Settings
        </a>

        <a href="/admin/maintenance" className="admin-dash-button">
          Maintenance Mode
        </a>

      </div>

      {/* SYSTEM STATUS SECTION */}
      <div className="admin-dash-section">
        <h2 className="admin-dash-section-title">System Status</h2>

        <div className="admin-dash-empty">
          All systems stable.
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="admin-dash-section">
        <h2 className="admin-dash-section-title">Recent Audit Log</h2>

        <div className="admin-dash-empty">
          No audit entries available.
        </div>
      </div>

    </div>
  );
}
// ---END CODE---
