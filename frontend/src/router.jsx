import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BuyerRequest from "./pages/BuyerRequest.jsx";
import BuyerVerify from "./pages/BuyerVerify.jsx";
import AuctionLive from "./pages/AuctionLive.jsx";
import BuyerConfirm from "./pages/BuyerConfirm.jsx";
import DealerLogin from "./pages/DealerLogin.jsx";
import DealerRegister from "./pages/DealerRegister.jsx";
import DealerDashboard from "./pages/DealerDashboard.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/buyer/request" element={<BuyerRequest />} />
      <Route path="/buyer/verify" element={<BuyerVerify />} />
      <Route path="/buyer/auction" element={<AuctionLive />} />
      <Route path="/buyer/confirm" element={<BuyerConfirm />} />

      <Route path="/dealer/login" element={<DealerLogin />} />
      <Route path="/dealer/register" element={<DealerRegister />} />
      <Route path="/dealer/dashboard" element={<DealerDashboard />} />

      <Route path="/securecmb" element={<AdminLogin />} />
      <Route path="/securecmb/panel" element={<AdminPanel />} />
    </Routes>
  );
}

export default Router;
