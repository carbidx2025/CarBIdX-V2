// PATH: frontend/src/pages/Dealer/dealerbid.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/dealerbid.css";

export default function DealerBid() {
  const { id } = useParams();

  const [request, setRequest] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    // Backend wiring will be added later
    setRequest(null);
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      auction_id: id,
      bidAmount,
      notes
    });
  }

  return (
    <div className="dealerbid-container">
      <div className="dealerbid-content">

        <h1 className="dealerbid-title">Submit Your Bid</h1>
        <p className="dealerbid-subtitle">
          Review the buyer request and enter your bid.
        </p>

        {/* BUYER REQUEST DETAILS */}
        <div className="dealerbid-requestbox">
          <h2 className="dealerbid-sectiontitle">Buyer Request Details</h2>

          {request === null && (
            <p className="dealerbid-nodata">
              Request details unavailable.
            </p>
          )}

          {request && (
            <div className="dealerbid-details">
              <div className="dealerbid-row">
                <span className="dealerbid-label">Vehicle</span>
                <span className="dealerbid-value">
                  {request.year} {request.make} {request.model} {request.trim}
                </span>
              </div>

              <div className="dealerbid-row">
                <span className="dealerbid-label">ZIP</span>
                <span className="dealerbid-value">{request.zip}</span>
              </div>

              <div className="dealerbid-row">
                <span className="dealerbid-label">Radius</span>
                <span className="dealerbid-value">{request.radius} miles</span>
              </div>

              <div className="dealerbid-row">
                <span className="dealerbid-label">Requirements</span>
                <span className="dealerbid-value">
                  {request.requirements || "None"}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* BID FORM */}
        <form className="dealerbid-form" onSubmit={handleSubmit}>
          <h2 className="dealerbid-sectiontitle">Your Bid</h2>

          <label>Bid Amount (USD)</label>
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            required
          />

          <label>Notes (Optional)</label>
          <textarea
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

          <div className="dealerbid-buttons">
            <button type="submit" className="dealerbid-submit">
              Submit Bid
            </button>

            <button
              type="button"
              className="dealerbid-cancel"
              onClick={() => (window.location.href = "/dealer/requests")}
            >
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
