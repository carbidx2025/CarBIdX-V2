import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0a0f24] text-white border-b border-[#1a2240]">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="CarBidX Logo"
            className="h-8 w-auto"
            draggable="false"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-[#E8C225] transition">Home</Link>
          <Link to="/how-it-works" className="hover:text-[#E8C225] transition">
            How It Works
          </Link>
          <Link to="/buyers" className="hover:text-[#E8C225] transition">
            Buyers
          </Link>
          <Link to="/dealers" className="hover:text-[#E8C225] transition">
            Dealers
          </Link>
          <Link to="/contact" className="hover:text-[#E8C225] transition">
            Contact
          </Link>

          <Link
            to="/buyer/login"
            className="px-4 py-1.5 rounded-md bg-[#E8C225] text-black font-medium hover:bg-[#d5b628] transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0a0f24] border-t border-[#1a2240] px-4 py-3 space-y-3 text-sm">
          <Link to="/" className="block hover:text-[#E8C225]" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/how-it-works" className="block hover:text-[#E8C225]" onClick={() => setOpen(false)}>
            How It Works
          </Link>
          <Link to="/buyers" className="block hover:text-[#E8C225]" onClick={() => setOpen(false)}>
            Buyers
          </Link>
          <Link to="/dealers" className="block hover:text-[#E8C225]" onClick={() => setOpen(false)}>
            Dealers
          </Link>
          <Link to="/contact" className="block hover:text-[#E8C225]" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link
            to="/buyer/login"
            className="block w-full text-center px-4 py-2 rounded-md bg-[#E8C225] text-black font-medium hover:bg-[#d5b628]"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
