import React from "react";
import { Routes, Route } from "react-router-dom";

/* Layouts */
import BuyerLayout from "../layouts/BuyerLayout";
import DealerLayout from "../layouts/DealerLayout";
import AdminLayout from "../layouts/AdminLayout";

/* LOCAL HOME COMPONENT (removes path problems) */
const Home = () => (
  <div style={{ color: "white", padding: "40px" }}>
    <h1>CarBidX</h1>
    <p>Reverse auctions for car buyers and dealers.</p>
  </div>
);

/* Buyer Pages */
import BuyerDashboard from "../pages/Buyer/buyerdashboard";
import BuyerRequests from "../pages/Buyer/buyerrequests";
import BuyerAuctions from "../pages/Buyer/buyerauctions";
import BuyerAuctionDetail from "../pages/Buyer/buyerauctiondetail";
import BuyerProfile from "../pages/Buyer/buyerprofile";
import BuyerLogin from "../pages/Buyer/buyerlogin";
import BuyerRegister from "../pages/Buyer/buyerregister";
import BuyerVerify from "../pages/Buyer/buyerverify";
import BuyerConfirm from "../pages/Buyer/buyerconfirm";
import BuyerRequest from "../pages/Buyer/buyerrequests";

/* Dealer Pages */
import DealerDashboard from "../pages/Dealer/dealerdashboard";
import DealerRequests from "../pages/Dealer/dealerrequests";
import DealerBids from "../pages/Dealer/dealerbids";
import DealerResults from "../pages/Dealer/dealerresults";
import DealerProfile from "../pages/Dealer/dealerprofile";
import DealerLogin from "../pages/Dealer/dealerlogin";
import DealerBid from "../pages/Dealer/dealerbid";

/* Admin Pages */
import AdminDashboard from "../pages/Admin/admindashboard";
import AdminLogin from "../pages/Admin/adminlogin";
import AdminApproveDealers from "../pages/Admin/adminapprovedealers";
import AdminSuspendDealers from "../pages/Admin/adminsuspenddealers";
import AdminSuspendBuyers from "../pages/Admin/adminsuspendbuyers";
import AdminMaintenance from "../pages/Admin/adminmaintenance";
import AdminDepositSettings from "../pages/Admin/admindeposits";

export default function AppRouter() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<Home />} />

      {/* BUYER AUTH */}
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/buyer/register" element={<BuyerRegister />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />

      {/* BUYER */}
      <Route element={<BuyerLayout />}>
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/buyer/requests" element={<BuyerRequests />} />
        <Route path="/buyer/request" element={<BuyerRequest />} />
        <Route path="/buyer/auctions" element={<BuyerAuctions />} />
        <Route path="/buyer/auction/:id" element={<BuyerAuctionDetail />} />
        <Route path="/buyer/profile" element={<BuyerProfile />} />
        <Route path="/buyer/confirm" element={<BuyerConfirm />} />
      </Route>

      {/* DEALER AUTH */}
      <Route path="/dealer/login" element={<DealerLogin />} />

      {/* DEALER */}
      <Route element={<DealerLayout />}>
        <Route path="/dealer/dashboard" element={<DealerDashboard />} />
        <Route path="/dealer/requests" element={<DealerRequests />} />
        <Route path="/dealer/bids" element={<DealerBids />} />
        <Route path="/dealer/results" element={<DealerResults />} />
        <Route path="/dealer/profile" element={<DealerProfile />} />
        <Route path="/dealer/bid/:id" element={<DealerBid />} />
      </Route>

      {/* ADMIN AUTH */}
      <Route path="/securecmb" element={<AdminLogin />} />

      {/* ADMIN */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/approve-dealers" element={<AdminApproveDealers />} />
        <Route path="/admin/suspend-dealers" element={<AdminSuspendDealers />} />
        <Route path="/admin/suspend-buyers" element={<AdminSuspendBuyers />} />
        <Route path="/admin/maintenance" element={<AdminMaintenance />} />
        <Route path="/admin/deposits" element={<AdminDepositSettings />} />
      </Route>

    </Routes>
  );
}
