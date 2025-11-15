import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";

const RegisterBuyer = () => {
  const { registerBuyer, loading, error } = useAuth();
  const [form, setForm] = useState({
    name: "",
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
    await registerBuyer(form);
  };

  return (
    <main className="page auth-page">
      <section className="auth-card">
        <h1>Create buyer account</h1>
        <p className="auth-subtitle">
          One profile, multiple dealers competing for your business.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <Input
            label="Full name"
            name="name"
            value={form.name}
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
            {loading ? "Creating account..." : "Create buyer account"}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default RegisterBuyer;
