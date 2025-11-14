import RequestsGrid from "../components/RequestsGrid";

function Home() {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-24 pb-10">

      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
        AI-Assisted Reverse Car Auctions
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
        Dealers compete. Buyers save. Secure. Verified. Refundable deposits.
      </p>

      <div className="flex gap-4 flex-col sm:flex-row mb-24">

        {/* Buyer Button */}
        <button
          className="bg-[#D5B628] hover:bg-[#B69C20] text-black font-semibold px-8 py-3 rounded-lg text-lg transition"
        >
          Register as Buyer
        </button>

        {/* Dealer Button */}
        <button
          className="border border-[#D5B628] text-[#D5B628] hover:bg-[#D5B628] hover:text-black font-semibold px-8 py-3 rounded-lg text-lg transition"
        >
          Register as Dealer
        </button>

      </div>

      {/* Live Requests Grid */}
      <RequestsGrid />
    </div>
  );
}

export default Home;
