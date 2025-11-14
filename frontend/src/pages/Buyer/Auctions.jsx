import React from "react";
import { useAuction } from "../../hooks/useAuction";
import BasicTable from "../../components/tables/BasicTable";

const BuyerAuctions = () => {
  const { myAuctions, loading } = useAuction();

  const columns = [
    { key: "requestId", label: "Request ID" },
    { key: "vehicle", label: "Vehicle" },
    { key: "createdAt", label: "Created" },
    { key: "closingAt", label: "Closing" },
    { key: "status", label: "Status" }
  ];

  return (
    <main className="min-h-screen w-full bg-[#0a0f24] text-white px-6 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-[#D5B628] mb-2">
          Your Auctions
        </h1>
        <p className="text-gray-300">
          History of every reverse auction you have created.
        </p>
      </header>

      <section className="bg-[#11182f] p-6 rounded-xl shadow-lg border border-[#1a2240]">
        <BasicTable
          columns={columns}
          data={myAuctions}
          loading={loading}
          emptyText="You have no auctions yet."
        />
      </section>
    </main>
  );
};

export default BuyerAuctions;
