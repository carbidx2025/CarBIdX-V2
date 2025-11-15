import React from "react";
import ReactDOM from "react-dom/client";
import app from "./app.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <app />
  </BrowserRouter>
);
