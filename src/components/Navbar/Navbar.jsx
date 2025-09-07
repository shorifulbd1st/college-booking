import React, { useContext, useState, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleLogout } = useContext(AuthContext);
  // console.log(user);
  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className="sticky top-0 z-[900] ">
      <nav className="relative bg-[#C70039] shadow dark:bg-gray-800">
        <div className="w-11/12 py-3 mx-auto">
          <div className="lg:flex justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center justify-between">
              <div className="relative flex justify-center items-center">
                <img
                  className="w-12 h-12 mr-2 rounded-full"
                  src="https://i.ibb.co.com/6whQTLm/hotel-Rose.png"
                  alt="Hotel Rose Logo"
                  loading="lazy"
                />
                <h1 className="text-2xl font-extrabold text-white">
                  College Booking System
                </h1>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-white focus:outline-none"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 30 30"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7h24M3 14h24M3 21h24"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div
              className={`absolute inset-x-0 bg-[#C70039] z-20 w-full px-6 py-4 transition-all duration-700 ease-in-out dark:bg-gray-800 lg:static lg:w-auto lg:p-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
              }`}
            >
              {/* Left side links */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-green-500"
                        : "hover:bg-gray-200 hover:text-black"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/colleges"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-green-500"
                        : "hover:bg-gray-200 hover:text-black"
                    }`
                  }
                >
                  Colleges
                </NavLink>
                <NavLink
                  to="/admission"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-green-500"
                        : "hover:bg-gray-200 hover:text-black"
                    }`
                  }
                >
                  Admission
                </NavLink>
                <NavLink
                  to="/my-college"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-green-500"
                        : "hover:bg-gray-200 hover:text-black"
                    }`
                  }
                >
                  My College
                </NavLink>
              </div>

              {/* Search Box */}
              <div className="relative mt-4 lg:mt-0 lg:ml-6 text-white">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 
                      17C6.13401 17 3 13.866 3 10C3 6.13401 
                      6.13401 3 10 3C13.866 3 17 6.13401 
                      17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full lg:w-64 py-2 pl-10 pr-4 rounded-lg border focus:ring focus:ring-blue-300 focus:outline-none"
                />
              </div>

              {/* User Actions */}
              <div className="flex cursor-pointer items-center mt-4 lg:mt-0 lg:ml-6 gap-3">
                {user && user?.email ? (
                  <div className="flex items-center gap-3">
                    <a id="not-clickable">
                      <div className=" w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                        <img
                          referrerPolicy="no-referrer"
                          src={user?.photoURL}
                          className="object-cover w-full h-full"
                          alt="avatar"
                        />
                      </div>
                    </a>
                    <Tooltip anchorSelect="#not-clickable">
                      <div className="px-2 py-1 rounded text-sm cursor-pointer">
                        {user?.displayName}
                      </div>
                    </Tooltip>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-3 cursor-pointer text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Link
                      to="/registration"
                      className="px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="px-4 py-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);
