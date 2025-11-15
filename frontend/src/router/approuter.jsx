import React from "react";
import { Routes, Route } from "react-router-dom";

/* layouts */
import BuyerLayout from "../layouts/buyerlayout";
import DealerLayout from "../layouts/dealerlayout";
import AdminLayout from "../layouts/adminlayout";

/* home */
const Home = () => (
  <div style={{ color: "white", padding: "40px" }}>
    <h1>carbidx</h1>
    <p>reverse auctions for car buyers and dealers.</p>
  </div>
);

/* buyer pages */
import BuyerDashboard from "../pages/buyer/buyerdashboard";
import BuyerRequests from "../pages/buyer/buyerrequests";
import BuyerAuctions from "../pages/buyer/buyerauctions";
import BuyerAuctionDetail from "../pages/buyer/buyerauctiondetail";
import BuyerProfile from "../pages/buyer/buyerprofile";
import BuyerLogin from "../pages/buyer/buyerlogin";
import BuyerRegister from "../pages/buyer/buyerregister";
import BuyerVerify from "../pages/buyer/buyerverify";
import BuyerConfirm from "../pages/buyer/buyerconfirm";
import BuyerRequest from "../pages/buyer/buyerrequests";

/* dealer pages */
import DealerDashboard from "../pages/dealer/dealerdashboard";
import DealerRequests from "../pages/dealer/dealerrequests";
import DealerResults from "../pages/dealer/dealerresults";
import DealerProfile from "../pages/dealer/dealerprofile";
import DealerLogin from "../pages/dealer/dealerlogin";
import DealerBid from "../pages/dealer/dealerbid";

/* admin pages */
import AdminDashboard from "../pages/admin/admindashboard";
import AdminLogin from "../pages/admin/adminlogin";
import AdminApproveDealers from "../pages/admin/adminapprovedealers";
import AdminSuspendDealers from "../pages/admin/adminsuspenddealers";
import AdminSuspendBuyers from "../pages/admin/adminsuspendbuyers";
import AdminMaintenance from "../pages/admin/adminmaintenance";
import AdminDepositSettings from "../pages/admin/admindeposits";

export default function AppRouter() {
  return (
    <Routes>

      {/* public */}
      <Route path="/" element={<Home />} />

      {/* buyer auth */}
      <Route path="/buyer/login" element={<BuyerLogin />} />
      <Route path="/buyer/register" element={<BuyerRegister />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />

      {/* buyer */}
      <Route element={<BuyerLayout />}>
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
        <Route path="/buyer/requests" element={<BuyerRequests />} />
        <Route path="/buyer/request" element={<BuyerRequest />} />
        <Route path="/buyer/auctions" element={<BuyerAuctions />} />
        <Route path="/buyer/auction/:id" element={<BuyerAuctionDetail />} />
        <Route path="/buyer/profile" element={<BuyerProfile />} />
        <Route path="/buyer/confirm" element={<BuyerConfirm />} />
      </Route>

      {/* dealer auth */}
      <Route path="/dealer/login" element={<DealerLogin />} />

      {/* dealer */}
      <Route element={<DealerLayout />}>
        <Route path="/dealer/dashboard" element={<DealerDashboard />} />
        <Route path="/dealer/requests" element={<DealerRequests />} />
        <Route path="/dealer/results" element={<DealerResults />} />
        <Route path="/dealer/profile" element={<DealerProfile />} />
        <Route path="/dealer/bid/:id" element={<DealerBid />} />
      </Route>

      {/* admin auth */}
      <Route path="/securecmb" element={<AdminLogin />} />

      {/* admin */}
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
