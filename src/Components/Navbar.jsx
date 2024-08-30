import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ToggleChange = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200 fixed top-0 z-10 w-full">
          <div className="container mx-auto flex p-5 items-center justify-between">
            <div>
              <h3 className="font-bold text-2xl">
                SAK<span className="text-red-500">HI</span>
              </h3>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-10 hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className="mr-10 hover:text-gray-900 cursor-pointer">
                    About
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="mr-10 hover:text-gray-900 cursor-pointer">
                    Contact
                  </li>
                </Link>
                <Link to="/login">
                  <li className="mr-10 hover:text-gray-900 cursor-pointer">
                    Login
                  </li>
                </Link>

                {/* Dropdown Menu for Additional Links */}
                <li className="relative hover:text-gray-900 cursor-pointer">
                  <div
                    onClick={handleDropdownToggle}
                    className="transition-colors duration-300 ease-in-out"
                  >
                    More
                  </div>
                  {isDropdownOpen && (
                    <ul
                      className="absolute mt-2 right-0 w-60 bg-white shadow-xl rounded-lg py-2 text-gray-700 transition-all duration-300 ease-in-out transform opacity-100"
                      style={{ animation: "fadeIn 0.3s ease-in-out" }}
                    >
                      <Link
                        to="/dashboard"
                        onClick={handleDropdownToggle}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/alerts"
                        onClick={handleDropdownToggle}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                      >
                        Alerts
                      </Link>
                      <Link
                        to="/gender-distribution"
                        onClick={handleDropdownToggle}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                      >
                        Gender Distribution
                      </Link>
                      <Link
                        to="/hotspot-analytics"
                        onClick={handleDropdownToggle}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                      >
                        Hotspot Analytics
                      </Link>
                      <Link
                        to="/incident-playback"
                        onClick={handleDropdownToggle}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                      >
                        Incident Playback
                      </Link>
                      <Link
                        to="/user-management"
                        onClick={handleDropdownToggle}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                      >
                        User Management
                      </Link>
                      <Link
                        to="/settings"
                        onClick={handleDropdownToggle}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 hover:text-red-500 transition-colors duration-200"
                      >
                        Settings
                      </Link>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div>

            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex items-center">
              <button onClick={ToggleChange} className="mr-5">
                <GiHamburgerMenu size={25} />
              </button>
            </div>
          </div>
        </header>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-red-500 z-20 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between p-5">
            <h3 className="text-white font-bold text-2xl">Menu</h3>
            <button onClick={ToggleChange} className="text-white">
              <RxCross2 size={30} />
            </button>
          </div>
          <ul className="flex flex-col text-white font-bold text-lg space-y-4 pl-5">
            <Link to="/" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Home</li>
            </Link>
            <Link to="/about" onClick={ToggleChange}>
              <li className="hover:text-gray-300">About</li>
            </Link>
            <Link to="/contact" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Contact</li>
            </Link>
            <Link to="/login" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Login</li>
            </Link>
            <Link to="/dashboard" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Dashboard</li>
            </Link>
            <Link to="/alerts" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Alerts</li>
            </Link>
            <Link to="/gender-distribution" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Gender Distribution</li>
            </Link>
            <Link to="/hotspot-analytics" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Hotspot Analytics</li>
            </Link>
            <Link to="/incident-playback" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Incident Playback</li>
            </Link>
            <Link to="/user-management" onClick={ToggleChange}>
              <li className="hover:text-gray-300">User Management</li>
            </Link>
            <Link to="/settings" onClick={ToggleChange}>
              <li className="hover:text-gray-300">Settings</li>
            </Link>
          </ul>
        </div>

        {/* Overlay when Sidebar is Open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={ToggleChange}
          ></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
