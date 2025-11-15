// PATH: frontend/src/pages/Dealer/dealerrequests.jsx

import React, { useEffect, useState } from "react";
import "../../styles/dealerrequests.css";

export default function DealerRequests() {
  const [requests, setRequests] = useState([]);

  // Backend connection will be added later
  useEffect(() => {
    setRequests([]);
  }, []);

  return (
    <div className="dealerrequests-container">

      <h1 className="dealerrequests-title">Live Buyer Requests</h1>
      <p className="dealerrequests-subtitle">
        These buyers are looking for vehicles within your radius.
      </p>

      {/* EMPTY STATE */}
      {requests.length === 0 && (
        <div className="dealerrequests-empty">
          No buyer requests available.
        </div>
      )}

      {/* LIST */}
      <div className="dealerrequests-list">
        {requests.map((req) => (
          <div key={req.id} className="dealerrequests-card">

            <div className="dealerrequests-row">
              <span className="dealerrequests-label">Vehicle</span>
              <span className="dealerrequests-value">
                {req.year} {req.make} {req.model} {req.trim}
              </span>
            </div>

            <div className="dealerrequests-row">
              <span className="dealerrequests-label">ZIP</span>
              <span className="dealerrequests-value">{req.zip}</span>
            </div>

            <div className="dealerrequests-row">
              <span className="dealerrequests-label">Radius</span>
              <span className="dealerrequests-value">{req.radius} miles</span>
            </div>

            <div className="dealerrequests-row">
              <span className="dealerrequests-label">Requirements</span>
              <span className="dealerrequests-value">
                {req.requirements || "None"}
              </span>
            </div>

            <button
              className="dealerrequests-bidbtn"
              onClick={() => (window.location.href = `/dealer/bid/${req.id}`)}
            >
              Place Bid
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
