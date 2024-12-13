// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ children }) => {
//   const location = useLocation();
//   const {authenticate} = useSelector((state) => state.authenticate);
//   if (!authenticate) {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }
//   return <>{children}</>;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('accessToken');  

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
