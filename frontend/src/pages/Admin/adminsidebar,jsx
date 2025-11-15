// PATH: frontend/src/components/Admin/adminsidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Dealer Approvals", path: "/admin/approve-dealers" },
    { name: "Suspend Dealers", path: "/admin/suspend-dealers" },
    { name: "Suspend Buyers", path: "/admin/suspend-buyers" },
    { name: "Deposit Settings", path: "/admin/deposits" },
    { name: "Maintenance Mode", path: "/admin/maintenance" },
    { name: "MFA Settings", path: "/admin/mfa" }
  ];

  return (
    <div className="admin-sidebar">

      <div className="admin-sidebar-header">
        <p className="admin-title">Master Admin</p>
        <p className="admin-role">aspb</p>
      </div>

      <nav className="admin-menu">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`admin-menu-item ${
              pathname === item.path ? "admin-menu-active" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="admin-logout-section">
        <Link to="/logout" className="admin-logout-btn">
          Logout
        </Link>
      </div>
    </div>
  );
}
