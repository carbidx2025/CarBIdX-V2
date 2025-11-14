import { Routes, Route } from "react-router-dom";

/* Home */
import Home from "./pages/home.jsx";

/* Buyer */
import BuyerLogin from "./pages/Buyer/BuyerLogin.jsx";
import BuyerRegister from "./pages/Buyer/BuyerRegister.jsx";
import BuyerVerify from "./pages/Buyer/BuyerVerify.jsx";
import BuyerRequest from "./pages/Buyer/BuyerRequest.jsx";
import BuyerDashboard from "./pages/Buyer/BuyerDashboard.jsx";
import BuyerAuctions from "./pages/Buyer/BuyerAuctions.jsx";
import BuyerAuctionDetail from "./pages/Buyer/BuyerAuctionDetail.jsx";
import BuyerConfirm from "./pages/Buyer/BuyerConfirm.jsx";

/* Dealer */
import DealerLogin from "./pages/Dealer/DealerLogin.jsx";
import DealerDashboard from "./pages/Dealer/DealerDashboard.jsx";
import DealerCreateListing from "./pages/Dealer/DealerCreateListing.jsx";
import DealerMyListings from "./pages/Dealer/DealerMyListings.jsx";

/* Admin */
import AdminLogin from "./pages/Admin/AdminLogin.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";

export default function AppRouter() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

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
