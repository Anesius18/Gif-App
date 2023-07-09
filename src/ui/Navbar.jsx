import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const OnLogout = () => {
    logout();
    navigate("/login"),
      {
        replace: true,
      };
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            
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
                  <span className='nav-item nav-link text-primary text-blue font-mono'> {user?.name}</span>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 "
                    onClick={OnLogout}
                  >
                    <span >Logout</span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        
      </nav>
    </>
  );
};
