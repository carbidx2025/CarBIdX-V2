import { useState } from "react";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import "./../styles/layout.css";

function DealerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Dealer login submitted");
  };

  return (
    <div className="page">
      <h2>Dealer Login</h2>

      <form className="form-box" onSubmit={handleLogin}>
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" label="Login" />
      </form>

      <p className="alt-link">
        <a href="/dealer/register">Create Dealer Account</a>
      </p>
    </div>
  );
}

export default DealerLogin;
