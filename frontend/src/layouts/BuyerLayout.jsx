import React from "react";
import { Link } from "react-router-dom";
import "../styles/buyerlayout.css";

export default function BuyerLayout({ children }) {
  return (
    <div className="buyer-layout">
      <aside className="buyer-sidebar">
        <h2 className="buyer-sidebar-title">Buyer Menu</h2>

        <nav className="buyer-sidebar-nav">
          <Link to="/buyer/dashboard" className="buyer-nav-item">Dashboard</Link>
          <Link to="/buyer/requests" className="buyer-nav-item">My Requests</Link>
          <Link to="/buyer/auctions" className="buyer-nav-item">My Auctions</Link>
          <Link to="/buyer/profile" className="buyer-nav-item">Profile</Link>
          <Link to="/buyer/login" className="buyer-nav-item">Logout</Link>
        </nav>
      </aside>

      <main className="buyer-main">{children}</main>
    </div>
  );
}
