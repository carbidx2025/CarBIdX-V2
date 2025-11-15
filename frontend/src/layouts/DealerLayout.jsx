import React from "react";
import { Outlet } from "react-router-dom";
import DealerSidebar from "../components/sidebar/DealerSidebar";
import "../styles/dealerlayout.css";

export default function DealerLayout() {
  return (
    <div className="dealer-layout">
      <DealerSidebar />
      <main className="dealer-main">
        <Outlet />
      </main>
    </div>
  );
}
