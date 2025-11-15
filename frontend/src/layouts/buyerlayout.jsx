import React from "react";
import { Outlet } from "react-router-dom";
import BuyerSidebar from "../components/sidebar/BuyerSidebar";
import "../styles/buyerlayout.css";

export default function BuyerLayout() {
  return (
    <div className="buyer-layout">
      <BuyerSidebar />
      <main className="buyer-main">
        <Outlet />
      </main>
    </div>
  );
}
