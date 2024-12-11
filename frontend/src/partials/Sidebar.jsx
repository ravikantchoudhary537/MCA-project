import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaMoneyBill,
  FaCogs,
} from "react-icons/fa"; // React Icons
import { MdOutlineAssignment } from "react-icons/md";
import Logout from "../auth/logout/Logout";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  // Sidebar menu items array
  const sidebarItems = [
    { name: "Overview", icon: <FaTachometerAlt />, path: "/overview" },
    { name: "Fill Form", icon: <MdOutlineAssignment />, path: "/fillform" },
    { name: "Payment", icon: <FaMoneyBill />, path: "/payment" },
    { name: "Status", icon: <FaFileAlt />, path: "/status" },
    { name: "Settings", icon: <FaCogs />, path: "/settings" },
  ];

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:w-64 2xl:w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <div className="flex">
              <div className="flex items-center justify-center bg-violet-500 rounded-full h-8 w-8">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex items-center justify-center bg-yellow-500 rounded-full h-8 w-8">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="flex items-center justify-center bg-violet-500 rounded-full h-8 w-8">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              {/* <h1 className="text-2xl font-bold dark:text-white">CA</h1> */}
            </div>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8 flex-1">
          {/* Pages group */}
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index} className="mb-1">
                <NavLink
                  to={item.path}
                  className={`pl-4 pr-3 py-2 rounded-lg text-gray-800 dark:text-gray-100 flex items-center gap-4 transition duration-150 ${
                    pathname.includes(item.path)
                      ? "bg-violet-500 text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Logout */}
        <div className="mt-auto">
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

{
  /* Dashboard */
}
//  <SidebarLinkGroup activecondition={pathname === "/dashboard"}>
//  {(handleClick, open) => {
//      return (
//        <React.Fragment>
//          <a
//            href="#0"
//            className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
//              pathname === "/" || pathname.includes("dashboard") ? "" : "hover:text-gray-900 dark:hover:text-white"
//            }`}
//            onClick={(e) => {
//              e.preventDefault();
//              handleClick();
//              setSidebarExpanded(true);
//            }}
//          >
//            <div className="flex items-center justify-between">
//              <div className="flex items-center">
//                <svg className={`shrink-0 fill-current ${pathname === "/" || pathname.includes("dashboard") ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
//                  <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Z" />
//                  <path d="M6.068 7.482A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
//                </svg>
//                <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
//                  Dashboard
//                </span>
//              </div>
//              {/* Icon */}
//              <div className="flex shrink-0 ml-2">
//                <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${open && "rotate-180"}`} viewBox="0 0 12 12">
//                  <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
//                </svg>
//              </div>
//            </div>
//          </a>
//          <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
//            <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
//              <li className="mb-1 last:mb-0">
//                <NavLink
//                  end
//                  to="/dashboard"
//                  className={({ isActive }) =>
//                    "block transition duration-150 truncate " + (isActive ? "text-violet-500" : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
//                  }
//                >
//                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
//                    Main
//                  </span>
//                </NavLink>
//              </li>
//            </ul>
//          </div>
//        </React.Fragment>
//      );
//    }}
//  </SidebarLinkGroup>
