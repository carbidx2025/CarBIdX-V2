// ---BEGIN CODE---
import { useState, useEffect } from "react";

export default function useAuth() {

  // BUYER TOKEN
  const [buyerToken, setBuyerToken] = useState(
    localStorage.getItem("buyerToken") || null
  );

  // DEALER TOKEN
  const [dealerToken, setDealerToken] = useState(
    localStorage.getItem("dealerToken") || null
  );

  // ADMIN TEMP TOKEN (for MFA step)
  const [adminTempToken, setAdminTempToken] = useState(
    localStorage.getItem("adminTempToken") || null
  );

  // FINAL ADMIN TOKEN (after MFA)
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken") || null
  );

  // BUYER TOKEN SAVE
  function saveBuyerToken(token) {
    localStorage.setItem("buyerToken", token);
    setBuyerToken(token);
  }

  // DEALER TOKEN SAVE
  function saveDealerToken(token) {
    localStorage.setItem("dealerToken", token);
    setDealerToken(token);
  }

  // ADMIN TEMP TOKEN SAVE
  function saveAdminTempToken(token) {
    localStorage.setItem("adminTempToken", token);
    setAdminTempToken(token);
  }

  // ADMIN FINAL TOKEN SAVE
  function saveAdminToken(token) {
    localStorage.setItem("adminToken", token);
    setAdminToken(token);

    // once final token is set, remove temp token
    localStorage.removeItem("adminTempToken");
    setAdminTempToken(null);
  }

  // UNIVERSAL LOGOUT CONTROLLER
  function logout(role) {
    if (role === "buyer") {
      localStorage.removeItem("buyerToken");
      setBuyerToken(null);
    }

    if (role === "dealer") {
      localStorage.removeItem("dealerToken");
      setDealerToken(null);
    }

    if (role === "admin") {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminTempToken");
      setAdminToken(null);
      setAdminTempToken(null);
    }
  }

  return {
    buyerToken,
    dealerToken,
    adminTempToken,
    adminToken,

    saveBuyerToken,
    saveDealerToken,
    saveAdminTempToken,
    saveAdminToken,

    logout
  };
}
// ---END CODE---
