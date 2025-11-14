import { useState } from "react";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import "./../styles/layout.css";

function DealerRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Dealer registration submitted");
  };

  return (
    <div className="page">
      <h2>Create Dealer Account</h2>

      <form className="form-box" onSubmit={handleRegister}>
        <InputField
          label="Dealership Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <InputField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" label="Register Account" />
      </form>
    </div>
  );
}

export default DealerRegister;
