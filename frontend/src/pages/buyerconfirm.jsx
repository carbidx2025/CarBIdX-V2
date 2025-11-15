import Button from "../components/Button.jsx";
import "./../styles/layout.css";

function BuyerConfirm() {
  const handleConfirm = () => {
    console.log("Buyer confirmed auction result");
  };

  const handleDecline = () => {
    console.log("Buyer declined the result");
  };

  return (
    <div className="page">
      <h2>Confirm Your Winning Bid</h2>

      <div className="confirm-box">
        <p>You are the winning buyer. Please confirm to proceed.</p>

        <div className="confirm-actions">
          <Button label="Confirm Purchase" onClick={handleConfirm} />
          <Button label="Cancel" onClick={handleDecline} style={{ background: "#ccc" }} />
        </div>
      </div>
    </div>
  );
}

export default BuyerConfirm;
