// PATH: frontend/src/pages/Buyer/buyerrequest.jsx

import React, { useState } from "react";
import "../../styles/buyerrequest.css";

export default function BuyerRequest() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [zip, setZip] = useState("");
  const [radius, setRadius] = useState("");
  const [requirements, setRequirements] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Backend connect later
    console.log({
      year,
      make,
      model,
      trim,
      zip,
      radius,
      requirements
    });
  }

  return (
    <div className="buyerrequest-container">
      <div className="buyerrequest-content">

        {/* HEADER */}
        <h1 className="buyerrequest-title">Create New Car Request</h1>
        <p classname="buyerrequest-subtitle">
          Provide details so verified dealers can bid.
        </p>

        {/* FORM */}
        <form className="buyerrequest-form" onSubmit={handleSubmit}>

          {/* YEAR */}
          <label>Year</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />

          {/* MAKE */}
          <label>Make</label>
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />

          {/* MODEL */}
          <label>Model</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />

          {/* TRIM */}
          <label>Trim</label>
          <input
            type="text"
            value={trim}
            onChange={(e) => setTrim(e.target.value)}
          />

          {/* ZIP */}
          <label>ZIP Code</label>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />

          {/* RADIUS */}
          <label>Dealer Radius (Miles)</label>
          <select
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="10">10 miles</option>
            <option value="20">20 miles</option>
            <option value="30">30 miles</option>
            <option value="50">50 miles</option>
            <option value="100">100 miles</option>
          </select>

          {/* ADDITIONAL REQUIREMENTS */}
          <label>Additional Requirements</label>
          <textarea
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            rows={4}
          ></textarea>

          {/* BUTTON ROW */}
          <div className="buyerrequest-buttons">
            <button type="submit" className="buyerrequest-submit">
              Create Car Request
            </button>
            <button
              type="button"
              className="buyerrequest-cancel"
              onClick={() => (window.location.href = "/buyer/dashboard")}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
