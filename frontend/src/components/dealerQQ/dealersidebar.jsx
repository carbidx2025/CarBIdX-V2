// PATH: frontend/src/components/Dealer/dealersidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function DealerSidebar() {
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dealer/dashboard" },
    { name: "Live Buyer Requests", path: "/dealer/requests" },
    { name: "My Bids", path: "/dealer/bids" },
    { name: "Results / Won Deals", path: "/dealer/results" },
    { name: "Profile & Settings", path: "/dealer/profile" }
  ];

  return (
    <div className="dealer-sidebar">

      {/* WELCOME */}
      <div className="dealer-welcome">
        <p className="dealer-welcome-title">Welcome Dealer</p>
        <p className="dealer-welcome-role">Verified Dealer</p>
      </div>

      {/* MENU */}
      <nav className="dealer-menu">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`dealer-menu-item ${
              pathname === item.path ? "dealer-menu-active" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* LOGOUT */}
      <div className="dealer-logout-section">
        <Link to="/logout" className="dealer-logout-btn">
          Logout
        </Link>
      </div>

    </div>
  );
}
