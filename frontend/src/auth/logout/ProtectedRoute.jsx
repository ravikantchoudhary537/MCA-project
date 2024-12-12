import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Render protected content if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
