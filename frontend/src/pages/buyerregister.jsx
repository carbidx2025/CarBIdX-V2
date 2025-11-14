import React, { useState } from "react";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";

export default function BuyerRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: ""
  });

  const [status, setStatus] = useState("idle"); // idle | sending | error | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // TODO: Replace with backend registration endpoint
      await new Promise((res) => setTimeout(res, 1200));

      // Move user to verification step
      window.location.href = "/buyer/verify";
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0f24] text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Register as Buyer</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#11172f] p-8 rounded-xl shadow-xl border border-[#1a2240] flex flex-col gap-6"
      >
        <Input
          label="Full Name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <Input
          label="ZIP Code"
          name="zip"
          type="text"
          value={form.zip}
          onChange={handleChange}
          required
        />

        {status === "error" && (
          <p className="text-red-400 text-sm text-center -mt-3">
            Something went wrong. Try again.
          </p>
        )}

        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-[#D5B628] hover:bg-[#B69C20] text-black font-semibold py-3 rounded-lg transition"
        >
          {status === "sending" ? "Processing..." : "Continue"}
        </Button>
      </form>

      <p className="text-center text-gray-400 text-sm mt-6">
        Already have an account?{" "}
        <a
          href="/buyer/login"
          className="text-[#D5B628] hover:text-[#B69C20] font-medium"
        >
          Sign In
        </a>
      </p>
    </main>
  );
}
