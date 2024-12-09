import React from "react";

export const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  >
    {children}
  </button>
);
