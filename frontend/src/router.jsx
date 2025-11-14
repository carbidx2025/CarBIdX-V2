import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import HowItWorks from "./pages/howitworks";

// Buyer pages
import BuyerLogin from "./pages/buyer/buyerlogin";
import BuyerRegister from "./pages/buyer/buyerregister";
import BuyerVerify from "./pages/buyer/buyerverify";
import BuyerDashboard from "./pages/buyer/buyer-dashboard";
import BuyerAuctions from "./pages/buyer/buyer-auctions";
import BuyerAuctionDetail from "./pages/buyer/buyer-auctiondetail";
import BuyerConfirm from "./pages/buyer/buyer-confirm";

// Dealer pages
import DealerLogin from "./pages/dealer/dealerlogin";
import DealerRegister from "./pages/dealer/dealerregister";
import DealerDashboard from "./pages/dealer/dealer-dashboard";
import DealerCreateListing from "./pages/dealer/dealer-createlisting";
import DealerMyListings from "./pages/dealer/dealer-mylistings";

// Admin pages
import AdminLogin from "./pages/admin/adminlogin";
import AdminDashboard from "./pages/admin/admindashboard";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />

      {/* Buyer */}
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/buyer/register" element={<BuyerRegister />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />
      <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route path="/buyer/auctions" element={<BuyerAuctions />} />
      <Route path="/buyer/auction/:id" element={<BuyerAuctionDetail />} />
      <Route path="/buyer/confirm" element={<BuyerConfirm />} />

      {/* Dealer */}
      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/register" element={<DealerRegister />} />
      <Route path="/dealer/dashboard" element={<DealerDashboard />} />
      <Route path="/dealer/offer" element={<DealerCreateListing />} />
      <Route path="/dealer/listings" element={<DealerMyListings />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
