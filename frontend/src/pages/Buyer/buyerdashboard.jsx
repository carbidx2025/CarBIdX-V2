import { Link } from "react-router-dom";

function BuyerDashboard() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f24] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#11172f] border-r border-[#1a2240] p-6 hidden md:block">
        <h2 className="text-lg font-bold mb-8 text-[#E8C225]">Buyer Panel</h2>

        <nav className="space-y-4 text-sm">

          <Link
            to="/buyer/dashboard"
            className="block px-3 py-2 rounded bg-[#1a2240] text-[#E8C225] font-semibold"
          >
            Dashboard
          </Link>

          <Link
            to="/buyer/auctions"
            className="block px-3 py-2 rounded hover:bg-[#1a2240] transition"
          >
            My Auctions
          </Link>

          <Link
            to="/buyer/request"
            className="block px-3 py-2 rounded hover:bg-[#1a2240] transition"
          >
            New Request
          </Link>

          <Link
            to="/buyer/profile"
            className="block px-3 py-2 rounded hover:bg-[#1a2240] transition"
          >
            Profile
          </Link>

          <Link
            to="/buyer/logout"
            className="block px-3 py-2 rounded hover:bg-[#1a2240] transition"
          >
            Logout
          </Link>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 p-6">

        <h1 className="text-2xl font-bold mb-6">Welcome Back</h1>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Active Requests */}
          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-5">
            <h3 className="text-[#E8C225] font-semibold text-lg mb-2">
              Active Requests
            </h3>
            <p className="text-gray-300 text-sm">
              Your currently active car purchase requests.
            </p>
            <Link
              to="/buyer/auctions"
              className="inline-block mt-4 text-sm text-[#E8C225] hover:underline"
            >
              View Requests
            </Link>
          </div>

          {/* Winning Bids */}
          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-5">
            <h3 className="text-[#E8C225] font-semibold text-lg mb-2">
              Winning Bids
            </h3>
            <p className="text-gray-300 text-sm">
              See dealers you selected and pending confirmations.
            </p>
            <Link
              to="/buyer/auctions"
              className="inline-block mt-4 text-sm text-[#E8C225] hover:underline"
            >
              View Auctions
            </Link>
          </div>

          {/* Deposit Holds */}
          <div className="bg-[#11172f] border border-[#1a2240] rounded-lg p-5">
            <h3 className="text-[#E8C225] font-semibold text-lg mb-2">
              Deposit Holds
            </h3>
            <p className="text-gray-300 text-sm">
              Track your $25 authorization holds and releases.
            </p>
            <span className="inline-block mt-4 text-sm text-gray-400">
              Coming Soon
            </span>
          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="mt-10 bg-[#11172f] border border-[#1a2240] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#E8C225]">
            Recent Activity
          </h2>

          <p className="text-gray-400 text-sm">
            Once backend integration goes live, your bids, confirmations,
            and dealer interactions will appear here in a timeline format.
          </p>
        </div>

      </main>
    </div>
  );
}

export default BuyerDashboard;
