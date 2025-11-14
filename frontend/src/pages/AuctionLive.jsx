import { useState } from "react";
import CountdownTimer from "../components/CountdownTimer.jsx";
import "./../styles/layout.css";

function AuctionLive() {
  const [bids, setBids] = useState([
    { dealer: "Dealer A", amount: 22500 },
    { dealer: "Dealer B", amount: 22350 }
  ]);

  const lowestBid = bids.reduce((min, b) => (b.amount < min ? b.amount : min), bids[0].amount);

  return (
    <div className="page">
      <h2>Live Auction</h2>

      <div className="auction-box">
        <p className="timer-label">Time Remaining</p>
        <CountdownTimer seconds={300} onComplete={() => console.log("Auction Ended")} />

        <h3>Dealer Bids</h3>

        <div className="bids-list">
          {bids.map((b, i) => (
            <div
              key={i}
              className="bid-row"
              style={{
                color: b.amount === lowestBid ? "green" : "black",
                fontWeight: b.amount === lowestBid ? "bold" : "normal"
              }}
            >
              <span>Bid: ${b.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuctionLive;
