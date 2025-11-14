import { Link } from "react-router-dom";
import logo from "/logo.png";

function Navbar() {
  return (
    <nav className="w-full bg-[#0a0f24] border-b border-[#1a2240]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left: Logo only */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="CarBidX Logo"
            className="h-20 w-auto object-contain select-none"
          />
        </Link>

        {/* Right: Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium text-white">
          <Link to="/how-it-works" className="hover:text-[#D5B628] transition">
            How It Works
          </Link>

          <Link to="/buyers" className="hover:text-[#D5B628] transition">
            Buyers
          </Link>

          <Link to="/dealers" className="hover:text-[#D5B628] transition">
            Dealers
          </Link>

          <Link to="/contact" className="hover:text-[#D5B628] transition">
            Contact Us
          </Link>

          <Link
            to="/login"
            className="bg-[#D5B628] text-[#0a0f24] px-4 py-2 rounded-md font-semibold hover:bg-[#B69C20] transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
