// Logout.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
const Logout = () => {
  const navigate = useNavigate();

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken"); 
    navigate("/login");
  };

  return (
    <div
      className="pl-4 pr-3 py-2 rounded-lg text-gray-800 dark:text-gray-100 flex items-center gap-4 transition duration-150 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={handleLogout}
    >
      <FaSignOutAlt className="text-red-500" />
      <span className="text-sm font-medium text-red-500">Logout</span>
    </div>
  );
};

export default Logout;
