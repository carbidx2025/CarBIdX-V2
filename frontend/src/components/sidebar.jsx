import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-title">CarBidX V2</div>
      <ul className="sidebar-menu">
        {menu.map((item) => (
          <li
            key={item.path}
            className={
              location.pathname === item.path ? "active-menu-item" : "menu-item"
            }
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

