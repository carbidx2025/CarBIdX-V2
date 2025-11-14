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
    // API integration will be added when backend endpoints are connected
    console.log("Buyer registration submitted:", form);
  };

  return (
    <div className="min-h-screen bg-[#0a0f24] text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Register as Buyer</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#11172e] p-6 rounded-lg shadow-lg border border-[#1a2240]"
      >
        {/* Name */}
        <label className="block mb-4">
          <span className="text-sm font-medium">Full Name</span>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
          />
        </label>

        {/* Phone */}
        <label className="block mb-4">
          <span className="text-sm font-medium">Phone Number</span>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full mt-1 p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
          />
        </label>

        {/* ZIP */}
        <label className="block mb-6">
          <span className="text-sm font-medium">ZIP Code</span>
          <input
            type="text"
            name="zip"
            required
            value={form.zip}
            onChange={handleChange}
            className="w-full mt-1 p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white"
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#D5B628] hover:bg-[#B69C20] text-black font-semibold py-3 rounded-md transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default BuyerRegister;
