import React, { useState } from "react";

function BuyerRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zip: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buyer registration submitted:", form);
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0f24] flex items-center justify-center px-6 py-16 text-white">
      
      <section className="w-full max-w-md bg-[#11172f] border border-[#1a2240] rounded-xl shadow-xl p-8">
        
        <h1 className="text-3xl font-bold text-center mb-3">
          Register as Buyer
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Create your CarBidX buyer account.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Full Name</span>
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
            <span className="text-sm font-medium">Email</span>
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

export default BuyerRegister;
