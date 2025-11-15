import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admin-sidebar.css";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin Panel</h2>

      <nav className="admin-sidebar-nav">
        <Link to="/admin/dashboard" className="admin-nav-item">Dashboard</Link>
        <Link to="/admin/approve-dealers" className="admin-nav-item">Approve Dealers</Link>
        <Link to="/admin/suspend-dealers" className="admin-nav-item">Suspend Dealers</Link>
        <Link to="/admin/suspend-buyers" className="admin-nav-item">Suspend Buyers</Link>
        <Link to="/admin/maintenance" className="admin-nav-item">Maintenance</Link>
        <Link to="/admin/deposits" className="admin-nav-item">Deposits</Link>
        <Link to="/securecmb" className="admin-nav-item">Logout</Link>
      </nav>
    </aside>
  );
}
