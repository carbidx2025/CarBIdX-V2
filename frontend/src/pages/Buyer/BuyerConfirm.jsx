import React, { useState } from "react";
import Button from "../../components/ui/Button";

export default function BuyerConfirm() {
  const [status, setStatus] = useState("waiting");

  const handleConfirm = async () => {
    setStatus("sending");

    try {
      await new Promise((res) => setTimeout(res, 1200));

      setStatus("confirmed");

      setTimeout(() => {
        window.location.href = "/buyer/dashboard";
      }, 900);
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#0a0f24] flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-lg bg-[#11172f] border border-[#1a2240] rounded-xl shadow-xl p-10 text-white">

        <h1 className="text-3xl font-bold mb-4 text-center">
          Confirm Your Winning Dealer
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Please confirm the winning dealer to finalize your auction request.
          Your deposit hold will be released immediately after confirmation.
        </p>

        <div className="bg-[#0f142b] border border-[#1f2947] rounded-lg p-6 mb-8">
          <p className="text-lg font-semibold mb-1 text-white">Winning Dealer</p>
          <p className="text-gray-300">
            This will display real dealer info after backend connects.
          </p>

          <p className="text-lg font-semibold mt-4 mb-1 text-white">Winning Bid</p>
          <p className="text-gray-300">$XX,XXX — dynamic after backend.</p>
        </div>

        {status === "error" && (
          <p className="text-red-400 text-sm text-center mb-4">
            Something went wrong. Try again.
          </p>
        )}

        <Button
          className="w-full bg-[#D5B628] hover:bg-[#B69C20] text-black font-semibold py-3 rounded-lg transition"
          disabled={status === "sending"}
          onClick={handleConfirm}
        >
          {status === "sending" ? "Confirming..." : "Confirm Dealer"}
        </Button>

        {status === "confirmed" && (
          <p className="text-[#D5B628] text-center mt-6 font-medium">
            Confirmed. Redirecting…
          </p>
        )}
      </section>
    </main>
  );
}
