import { Link } from "react-router-dom";
import logo from "/logo.png";

function Contact() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f24] text-white flex flex-col items-center px-6 pt-24 pb-16">

      {/* Logo */}
      <img
        src={logo}
        alt="CarBidX Logo"
        className="h-20 w-auto mb-10 select-none"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#D5B628]">
        Contact Us
      </h1>

      {/* Description Box */}
      <div className="max-w-2xl bg-[#11172e] px-8 py-8 rounded-xl text-gray-300 text-lg leading-relaxed shadow-lg">
        Need help, have a question, or want to learn more about how CarBidX works? 
        Our support team is ready to assist. Reach out and we will respond as 
        quickly as possible.
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-10 bg-[#D5B628] hover:bg-[#B69C20] text-[#0a0f24] px-8 py-3 rounded-lg font-semibold text-lg transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Contact;
