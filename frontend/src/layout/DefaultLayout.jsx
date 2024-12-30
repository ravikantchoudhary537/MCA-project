import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Outlet, useNavigate } from "react-router-dom";




const DefaultLayout = () => {
   const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // const isTokenExpired = () => {
    //   const expirationTime = localStorage.getItem("tokenExpirationTime");
    //   const currentTime = new Date().getTime();
    
    //   return !expirationTime || currentTime > expirationTime;
    // };

    // useEffect(() => {
    //   if (isTokenExpired()) {
    //     localStorage.removeItem("accessToken");
    //     localStorage.removeItem("tokenExpirationTime");
    //     alert("Session has expired. Please log in again.");
    //     navigate("/login"); 
    //   }
    // }, [navigate]); 


  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="grow">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  </div>
  );
};

export default DefaultLayout;
