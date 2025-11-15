import React from "react";
import BuyerSidebar from "../../components/buyer/BuyerSidebar";

export default function BuyerDashboard() {
  return (
    <div className="flex min-h-screen bg-[#0a0f24] text-white">
      {/* Sidebar */}
      <BuyerSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Buyer Dashboard</h1>
          <p className="text-gray-300 mt-2">
            Find your dream car through reverse auctions
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-[#10172f] p-6 rounded-xl shadow">
            <p className="text-gray-400">Active Requests</p>
            <h2 className="text-4xl font-bold mt-2">12</h2>
          </div>

          <div className="bg-[#10172f] p-6 rounded-xl shadow">
            <p className="text-gray-400">Total Offers</p>
            <h2 className="text-4xl font-bold mt-2">8</h2>
          </div>

          <div className="bg-[#10172f] p-6 rounded-xl shadow">
            <p className="text-gray-400">Completed</p>
            <h2 className="text-4xl font-bold mt-2">3</h2>
          </div>

        </div>

        {/* Create Request Button */}
        <button className="bg-[#1d4ed8] px-6 py-3 rounded-lg font-semibold hover:bg-[#2255e6] transition">
          + Create New Car Request
        </button>
      </div>
    </div>
  );
}
