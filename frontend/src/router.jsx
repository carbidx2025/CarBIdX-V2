// React Router configuration with protected routes
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Request from './pages/Request.jsx';
import Verify from './pages/Verify.jsx';
import AuctionLive from './pages/AuctionLive.jsx';
import Confirm from './pages/Confirm.jsx';

import DealerLogin from './pages/DealerLogin.jsx';
import DealerRegister from './pages/DealerRegister.jsx';
import DealerDashboard from './pages/DealerDashboard.jsx';

import AdminLogin from './pages/AdminLogin.jsx';
import AdminPanel from './pages/AdminPanel.jsx';

import { isDealerLoggedIn, isAdminLoggedIn } from './utils/auth.js';

function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/auction/:id" element={<AuctionLive />} />
        <Route path="/confirm" element={<Confirm />} />

        {/* Dealer */}
        <Route path="/dealer/login" element={<DealerLogin />} />
        <Route path="/dealer/register" element={<DealerRegister />} />
        <Route
          path="/dealer/dashboard"
          element={
            isDealerLoggedIn()
              ? <DealerDashboard />
              : <Navigate to="/dealer/login" replace />
          }
        />

        {/* Admin (hidden login) */}
        <Route path="/securecmb" element={<AdminLogin />} />

        <Route
          path="/admin/panel"
          element={
            isAdminLoggedIn()
              ? <AdminPanel />
              : <Navigate to="/securecmb" replace />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
