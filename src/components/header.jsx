import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 flex justify-between items-center p-6 bg-gray-300 shadow-lg">
      <nav>
        {/* Logo */}
        <a href="#" className="text-3xl font-extrabold tracking-wide">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            InnovaMest
          </span>
        </a>

        {/* Navigation Links */}
        <div className="space-x-8 text-lg text-blue-900">
          <Link
            to="/"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            About Us
          </Link>
          <Link
            to="/"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}; 

export default Header;
