import { Routes, Route } from "react-router-dom";

/* Root pages */
import Home from "./pages/home";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Buyers from "./pages/Buyers";
import Dealers from "./pages/Dealers";
import Request from "./pages/Request";
import Verify from "./pages/Verify";
import Confirm from "./pages/Confirm";
import AuctionLive from "./pages/AuctionLive";

/* Buyer */
import BuyerLogin from "./pages/Buyer/BuyerLogin";
import BuyerRegister from "./pages/Buyer/BuyerRegister";
import BuyerVerify from "./pages/Buyer/BuyerVerify";
import BuyerRequest from "./pages/Buyer/BuyerRequest";
import BuyerDashboard from "./pages/Buyer/BuyerDashboard";
import BuyerAuctions from "./pages/Buyer/BuyerAuctions";
import BuyerAuctionDetail from "./pages/Buyer/BuyerAuctionDetail";
import BuyerConfirm from "./pages/Buyer/BuyerConfirm";

/* Dealer */
import DealerLogin from "./pages/Dealer/DealerLogin";
import DealerDashboard from "./pages/Dealer/DealerDashboard";
import DealerCreateListing from "./pages/Dealer/DealerCreateListing";
import DealerMyListings from "./pages/Dealer/DealerMyListings";

/* Admin */
import AdminLogin from "./pages/Admin/Login";
import AdminDashboard from "./pages/Admin/Dashboard";

export default function AppRouter() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/buyers" element={<Buyers />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/request" element={<Request />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/auction-live" element={<AuctionLive />} />

      {/* Buyer */}
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/buyer/register" element={<BuyerRegister />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />
      <Route path="/buyer/request" element={<BuyerRequest />} />
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route path="/buyer/auctions" element={<BuyerAuctions />} />
      <Route path="/buyer/auction/:id" element={<BuyerAuctionDetail />} />
      <Route path="/buyer/confirm" element={<BuyerConfirm />} />

      {/* Dealer */}
      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/dashboard" element={<DealerDashboard />} />
      <Route path="/dealer/create-listing" element={<DealerCreateListing />} />
      <Route path="/dealer/listings" element={<DealerMyListings />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
