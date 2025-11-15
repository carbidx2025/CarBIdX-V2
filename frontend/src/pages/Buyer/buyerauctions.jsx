import React from "react";
import "./buyerauctions.css";

function BuyerAuctions() {
  return (
    <div className="buyer-auctions-container">
      <h1 className="buyer-auctions-title">My Active Auctions</h1>

      <div className="buyer-auctions-list">
        {/* Example auction card */}
        <div className="buyer-auction-card">
          <div className="buyer-auction-header">
            <h2 className="buyer-auction-car">2023 BMW 330i</h2>
            <span className="buyer-auction-status active">Active</span>
          </div>

          <div className="buyer-auction-details">
            <p><strong>Offers Received:</strong> 5</p>
            <p><strong>Current Lowest Offer:</strong> $41,900</p>
            <p><strong>Time Remaining:</strong> 2 days 4 hrs</p>
          </div>

          <button className="buyer-auction-btn">
            View Auction Details
          </button>
        </div>

        {/* Duplicate cards can be removed later — dynamic API data will replace them */}
        <div className="buyer-auction-card">
          <div className="buyer-auction-header">
            <h2 className="buyer-auction-car">2022 Audi A4 Premium</h2>
            <span className="buyer-auction-status completed">Completed</span>
          </div>

          <div className="buyer-auction-details">
            <p><strong>Offers Received:</strong> 8</p>
            <p><strong>Winning Price:</strong> $35,500</p>
          </div>

          <button className="buyer-auction-btn">
            View Auction Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyerAuctions;

