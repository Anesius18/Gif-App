import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://cdn.worldvectorlogo.com/logos/giphy-logo-1.svg"
                  alt="Gif"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-white text-gray-300 hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-gray-900" : ""
                      }`
                    }
                    to="/"
                  >
                    Gif
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-white text-gray-300 hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-gray-900" : ""
                      }`
                    }
                    to="/trending"
                  >
                    Trending Gifs
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `hover:text-white text-gray-300 hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium ${
                        isActive ? "bg-gray-900" : ""
                      }`
                    }
                    to="/search"
                  >
                    Search Gifs
                  </NavLink>
                </div>
              </div>
            </div>
            <span className="nav-item nav-link text-primary text-blue font-mono">
              {user?.name}
            </span>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 "
                    onClick={onLogout}
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-gray-900"
                exact
                to="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gif
              </NavLink>
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-gray-900"
                to="/trending"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trending Gifs
              </NavLink>
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-gray-900"
                to="/search"
                onClick={() => setMobileMenuOpen(false)}
              >
                Search Gifs
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
