import React from "react";
import AppRouter from "./router/AppRouter.jsx";
import Sidebar from "./components/Sidebar.jsx";
import TopBar from "./components/TopBar.jsx";
import "./styles/global.css";

export default function App() {
  return (
    <div className="app-frame">
      <Sidebar />
      <div className="main-area">
        <TopBar />
        <div className="content-area">
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

