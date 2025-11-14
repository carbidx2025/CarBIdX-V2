import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#0a0f24] border-b border-white/10">
      <div className="text-xl font-bold">
        <Link to="/">CarBidX</Link>
      </div>

      <div className="hidden md:flex items-center gap-6 text-white text-sm">
        <Link to="/" className="hover:text-yellow-400">How It Works</Link>
        <Link to="/" className="hover:text-yellow-400">Buyers</Link>
        <Link to="/" className="hover:text-yellow-400">Dealers</Link>
        <Link to="/" className="hover:text-yellow-400">Contact</Link>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
