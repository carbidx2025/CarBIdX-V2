import RequestsGrid from "../components/requestsgrid";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-24 pb-10">

      {/* Hero Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
        AI-Assisted Reverse Car Auctions
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
        Dealers compete. Buyers save. Secure. Verified. Refundable deposits.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-col sm:flex-row mb-24">
        <a
          href="/buyer/register"
          className="bg-[#E8C225] hover:bg-[#C9A71E] text-black font-semibold px-8 py-3 rounded-lg text-lg transition"
        >
          Register as Buyer
        </a>

        <a
          href="/dealer/login"
          className="border border-[#E8C225] text-[#E8C225] hover:bg-[#E8C225] hover:text-black font-semibold px-8 py-3 rounded-lg text-lg transition"
        >
          Register as Dealer
        </a>
      </div>

      {/* Live Requests Grid */}
      <RequestsGrid />
    </div>
  );
}
