import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Import pages
import DefaultLayout from './layout/DefaultLayout';
import Login from './pages/loginPage/Login';
import Overview from './pages/overview/Overview';
import FillaForm from './pages/FillForm/FillaForm';
import Payment from './pages/payment/Payment';
import Status from './pages/status/Status';
import Setting from './pages/settings/Setting';
import Logout from './auth/logout/Logout';
import SingUp from './pages/signup/SingUp';
// import ProtectedRoute from './auth/ProtectedRoute';
import ProtectedRoute from './auth/logout/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with real auth logic

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SingUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DefaultLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/overview" element={<Overview />} />
          <Route path="/fillform" element={<FillaForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/status" element={<Status />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
