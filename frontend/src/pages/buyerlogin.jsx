import React, { useState } from "react";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";

export default function BuyerLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // TODO: connect backend login endpoint
      await new Promise((res) => setTimeout(res, 1200));

      window.location.href = "/buyer/dashboard";
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0f24] flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md bg-[#11172f] border border-[#1a2240] rounded-xl shadow-xl p-8 text-white">

        <h1 className="text-3xl font-bold mb-3 text-center">Buyer Login</h1>
        <p className="text-gray-300 text-center mb-8">
          Access your CarBidX buyer account.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
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

          {status === "error" && (
            <p className="text-red-400 text-sm text-center -mt-3">
              Incorrect credentials. Try again.
            </p>
          )}

          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-[#D5B628] hover:bg-[#B69C20] text-black font-semibold py-3 rounded-lg transition"
          >
            {status === "sending" ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="/buyer/register"
            className="text-[#D5B628] hover:text-[#B69C20] font-medium"
          >
            Register as Buyer
          </a>
        </p>
      </section>
    </main>
  );
}
