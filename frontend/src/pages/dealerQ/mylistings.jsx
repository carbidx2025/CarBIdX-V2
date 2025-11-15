import React from "react";
import { useAuction } from "../../hooks/useAuction";
import BasicTable from "../../components/tables/BasicTable";

const DealerMyListings = () => {
  const { dealerListings, loading } = useAuction();

  const columns = [
    { key: "listingId", label: "Listing ID" },
    { key: "vehicle", label: "Vehicle" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created" },
  ];

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <h1>My listings</h1>
          <p>Vehicles and offers you have sent to buyers.</p>
        </div>
      </header>

      <section className="card">
        <BasicTable
          columns={columns}
          data={dealerListings}
          loading={loading}
          emptyText="You have not submitted any offers yet."
        />
      </section>
    </main>
  );
};

export default DealerMyListings;
