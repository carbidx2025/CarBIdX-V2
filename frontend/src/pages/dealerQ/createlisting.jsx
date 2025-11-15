import React, { useState } from "react";
import { useAuction } from "../../hooks/useAuction";
import Input from "../../components/forms/Input";
import Button from "../../components/ui/Button";

const DealerCreateListing = () => {
  const { createListing, loading, error } = useAuction();
  const [form, setForm] = useState({
    requestId: "",
    vin: "",
    price: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createListing(form);
  };

  return (
    <main className="page">
      <header className="page-header">
        <div>
          <h1>Submit an offer</h1>
          <p>Respond to a buyer request with a live, trackable offer.</p>
        </div>
      </header>

      <section className="card">
        <form onSubmit={handleSubmit} className="form-grid">
          <Input
            label="Buyer request ID"
            name="requestId"
            value={form.requestId}
            onChange={handleChange}
            required
          />
          <Input
            label="VIN"
            name="vin"
            value={form.vin}
            onChange={handleChange}
            required
          />
          <Input
            label="Offer price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
          <Input
            label="Notes for buyer"
            name="notes"
            value={form.notes}
            onChange={handleChange}
          />

          {error && <p className="form-error">{error}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Sending offer..." : "Send offer"}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default DealerCreateListing;
