import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function AppRouter() {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<Home />} />

      {/* Placeholder pages (will replace later) */}
      <Route path="/login" element={<div className="p-10">Login Page</div>} />
      <Route path="/register" element={<div className="p-10">Register Page</div>} />
      <Route path="*" element={<div className="p-10">Page Not Found</div>} />
    </Routes>
  );
}

export default AppRouter;
