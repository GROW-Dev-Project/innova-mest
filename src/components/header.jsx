import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";  
import { Link } from "react-router-dom";  
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import icon from "../assets/images/icon.jpg";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); 

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

 
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex flex-col items-center p-6 bg-gray-300 shadow-lg">
      <nav className="flex flex-col md:flex-row justify-between items-center w-full">
      {/* <a href="#" className="text-3xl font-extrabold tracking-wide text-center">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            InnovaMest
          </span>
        </a> */}
      <a href="#" className="text-3xl font-extrabold tracking-wide text-center flex items-center">
        <img 
          src={icon}
          alt="Asah Makerspace Logo" 
          className="h-10 w-10 mr-2" 
        />
        <span className="bg-gradient-to-r from-blue-900 to-purple-500 bg-clip-text text-transparent">
            Asah Makerspace
          </span>
      </a>
      {/* <a href="#" className="text-3xl font-extrabold tracking-wide text-center"> */}
          {/* <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Assah Makerspace
          </span> */}
        {/* </a> */}
      {/* <span className="sr-only">Asah Makerspace</span> */}

        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden p-2 text-blue-900 focus:outline-none"
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>

        <div 
          ref={menuRef}  
          className={`flex-col md:flex-row ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex space-x-8 text-lg text-blue-900`}
        >
          <ScrollLink 
            to="hero" 
            smooth={true} 
            duration={500} 
            className="flex items-center hover:text-pink-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl p-2 rounded"
            onClick={closeMobileMenu}
          >
            <FaHome className="mr-2" /> Home
          </ScrollLink>
          <ScrollLink 
            to="whyUs" 
            smooth={true} 
            duration={500} 
            className="flex items-center hover:text-pink-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl p-2 rounded"
            onClick={closeMobileMenu}
          >
            <FaInfoCircle className="mr-2" /> About Us
          </ScrollLink>
          <ScrollLink 
            to="video2" 
            smooth={true} 
            duration={500} 
            className="flex items-center hover:text-pink-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl p-2 rounded"
            onClick={closeMobileMenu}
          >
            <FaServicestack className="mr-2" /> Services
          </ScrollLink>

          <Link 
            to="/contact" 
            className="flex items-center hover:text-pink-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl p-2 rounded"
            onClick={closeMobileMenu}
          >
            <FaEnvelope className="mr-2" /> Contact
          </Link>
          <Link 
            to="/signup" 
            className="flex items-center hover:text-pink-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl p-2 rounded"
            onClick={closeMobileMenu}
          >
            <FaUserPlus className="mr-2" /> Sign Up
          </Link>
          <Link 
            to="/login" 
            className="flex items-center hover:text-pink-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl p-2 rounded"
            onClick={closeMobileMenu}
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
