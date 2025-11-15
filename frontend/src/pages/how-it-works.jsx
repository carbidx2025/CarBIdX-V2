import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="w-full min-h-screen bg-[#0a0f24] text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">How CarBidX Works</h1>

        <p className="text-gray-300 text-sm mb-6">
          CarBidX is a reverse-auction platform where verified dealers compete to win your car request.
        </p>

        <div className="space-y-6">

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-5">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">1. Create Your Car Request</h2>
            <p className="text-gray-300 text-sm">
              Enter your exact year, make, model, trim, color preferences, budget strategy, and buying timeframe.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-5">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">2. Deposit Hold</h2>
            <p className="text-gray-300 text-sm">
              A $25 authorization hold is placed on your card. This prevents ghosting and protects dealers who bid.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-5">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">3. Dealers Bid</h2>
            <p className="text-gray-300 text-sm">
              Verified dealers compete publicly. They see only each other’s bid amounts, not identities.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-5">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">4. Choose the Winner</h2>
            <p className="text-gray-300 text-sm">
              You select the winning offer and confirm the deal within 2 hours.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-5">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">5. Deposit Release or Capture</h2>
            <p className="text-gray-300 text-sm">
              If you confirm, the hold is released. If you ghost, the deposit is captured and paid to the winning dealer (minus $5 to CarBidX).
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/buyer/register"
            className="px-6 py-2.5 bg-[#E8C225] text-black font-semibold rounded-md hover:bg-[#d5b628]"
          >
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
