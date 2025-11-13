import React from "react";
import "./Input.css";

export default function Input({ label, ...props }) {
  return (
    <div className="cbx-input-wrapper">
      {label && <label className="cbx-label">{label}</label>}
      <input className="cbx-input" {...props} />
    </div>
  );
}

