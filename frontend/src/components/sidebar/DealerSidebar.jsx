import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dealer-sidebar.css";

export default function DealerSidebar() {
  return (
    <aside className="dealer-sidebar">
      <h2 className="dealer-sidebar-title">Dealer Menu</h2>

      <nav className="dealer-sidebar-nav">
        <Link to="/dealer/dashboard" className="dealer-nav-item">Dashboard</Link>
        <Link to="/dealer/requests" className="dealer-nav-item">Live Requests</Link>
        <Link to="/dealer/bids" className="dealer-nav-item">My Bids</Link>
        <Link to="/dealer/results" className="dealer-nav-item">Results</Link>
        <Link to="/dealer/profile" className="dealer-nav-item">Profile</Link>
        <Link to="/dealer/login" className="dealer-nav-item">Logout</Link>
      </nav>
    </aside>
  );
}
