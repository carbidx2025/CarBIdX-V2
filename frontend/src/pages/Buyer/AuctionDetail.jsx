import React from "react";
import { useParams } from "react-router-dom";
import { useAuction } from "../../hooks/useAuction";
import BasicTable from "../../components/tables/BasicTable";

const BuyerAuctionDetail = () => {
  const { id } = useParams();
  const { getAuctionById, loading } = useAuction();

  const auction = getAuctionById(id);

  const bidColumns = [
    { key: "dealerName", label: "Dealer" },
    { key: "price", label: "Offer price" },
    { key: "expiresIn", label: "Valid for" },
    { key: "notes", label: "Notes" }
  ];

  if (!auction && !loading) {
    return (
      <main className="min-h-screen bg-[#0a0f24] text-white flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-3xl font-bold mb-4">Auction not found</h1>
        <p className="text-gray-300">Check the link or return to your dashboard.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0f24] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Request {auction?.requestId || id}</h1>
          <p className="text-gray-300 text-lg">{auction?.vehicle}</p>
        </header>

        <section className="bg-[#111b3a] p-6 rounded-xl border border-[#1f2a4d]">
          <h2 className="text-2xl font-semibold mb-4 text-[#D5B628]">Dealer Bids</h2>

          <BasicTable
            columns={bidColumns}
            data={auction?.bids || []}
            loading={loading}
            emptyText="No bids yet. Dealers will see this request as soon as it goes live."
          />
        </section>
      </div>
    </main>
  );
};

export default BuyerAuctionDetail;
