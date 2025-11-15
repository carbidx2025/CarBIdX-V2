import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";

const RegisterDealer = () => {
  const { registerDealer, loading, error } = useAuth();
  const [form, setForm] = useState({
    dealershipName: "",
    contactName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerDealer(form);
  };

  return (
    <main className="page auth-page">
      <section className="auth-card">
        <h1>Dealer enrollment</h1>
        <p className="auth-subtitle">
          Join CarBidX and start receiving live, qualified buyer requests.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <Input
            label="Dealership name"
            name="dealershipName"
            value={form.dealershipName}
            onChange={handleChange}
            required
          />
          <Input
            label="Primary contact"
            name="contactName"
            value={form.contactName}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Complete enrollment"}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default RegisterDealer;
