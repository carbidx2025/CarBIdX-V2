// Protects dealer/admin pages
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, allowed }) {
  return allowed ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;