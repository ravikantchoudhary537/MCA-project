import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import DefaultLayout from './layout/DefaultLayout';
import Login from './pages/loginPage/Login';
import Overview from './pages/overview/Overview';
import FillaForm from './pages/FillForm/FillaForm';
import Payment from './pages/payment/Payment';
import Status from './pages/status/Status';
import Setting from './pages/settings/Setting';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
        <Route path="/" element={<DefaultLayout />} >
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard/overview" element={<Overview />} />
          <Route path="/Dashboard/fillform" element={<FillaForm />} />
          <Route path="/Dashboard/payment" element={<Payment />} />
          <Route path="/Dashboard/status" element={<Status />} />
          <Route path="/settings" element={<Setting />} />
          {/* <Route path="/Customer" element={<Customer />} />
          <Route path="/People" element={<People />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;