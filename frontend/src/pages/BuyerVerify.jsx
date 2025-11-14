import { useState } from "react";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import "./../styles/layout.css";

function BuyerVerify() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    console.log("Buyer verification submitted");
  };

  return (
    <div className="page">
      <h2>Verify Your Information</h2>

      <form className="form-box" onSubmit={handleVerify}>
        <InputField
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <InputField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <InputField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button type="submit" label="Submit Verification" />
      </form>
    </div>
  );
}

export default BuyerVerify;
