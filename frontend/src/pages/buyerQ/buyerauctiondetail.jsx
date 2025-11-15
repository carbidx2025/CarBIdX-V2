import React from "react";
import { useParams } from "react-router-dom";

export default function BuyerAuctionDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1>Auction Detail</h1>
      <p>Auction ID: {id}</p>
      <p>No details available.</p>
    </div>
  );
}
