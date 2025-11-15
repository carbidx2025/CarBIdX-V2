import React, { useState } from "react";

export default function DealerRegister() {
  const [form, setForm] = useState({
    dealership: "",
    name: "",
    email: "",
    phone: "",
    licenseNumber: "",
    zip: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dealer registration submitted:", form);
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0f24] flex items-center justify-center px-6 py-16 text-white">
      <section className="w-full max-w-md bg-[#11172f] border border-[#1a2240] rounded-xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-3">
          Dealer Registration
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Create your verified CarBidX dealer account.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Dealership Name</span>
            <input
              type="text"
              name="dealership"
              required
              value={form.dealership}
              onChange={handleChange}
              className="p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Email Address</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Phone Number</span>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Dealer License Number</span>
            <input
              type="text"
              name="licenseNumber"
              required
              value={form.licenseNumber}
              onChange={handleChange}
              className="p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">ZIP Code</span>
            <input
              type="text"
              name="zip"
              required
              value={form.zip}
              onChange={handleChange}
              className="p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#D5B628] hover:bg-[#B69C20] text-black font-semibold py-3 rounded-lg transition"
          >
            Continue
          </button>

        </form>

      </section>
    </main>
  );
}
