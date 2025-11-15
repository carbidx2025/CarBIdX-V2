import { Link } from "react-router-dom";

function Dealers() {
  return (
    <div className="min-h-screen bg-[#0a0f24] text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">For Dealers</h1>
        <p className="text-gray-300 text-sm mb-6">
          CarBidX brings motivated buyers directly to your dealership. Compete transparently for real purchase intent.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">Verified Buyers</h2>
            <p className="text-gray-300 text-sm">
              Every buyer is phone and email verified before posting a request, reducing tire-kickers.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">Fair Bidding</h2>
            <p className="text-gray-300 text-sm">
              Dealers see only bid amounts, not the identity of competitors.
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">Ghosting Protection</h2>
            <p className="text-gray-300 text-sm">
              If a buyer ghosts, the deposit is captured and paid to you (minus $5).
            </p>
          </div>

          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
            <h2 className="text-lg font-semibold text-[#E8C225] mb-2">Higher Closing Rates</h2>
            <p className="text-gray-300 text-sm">
              Buyers who confirm are genuinely ready to move forward, saving your team time.
            </p>
          </div>

        </div>

        <div className="mt-10">
          <Link
            to="/dealer/login"
            className="px-6 py-2.5 bg-[#E8C225] text-black font-semibold rounded-md hover:bg-[#d5b628]"
          >
            Dealer Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dealers;
