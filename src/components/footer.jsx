import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideYoutube,
  TwitterIcon,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 p-8 text-white">
      <div className="mx-auto max-w-screen-xl px-6 xl:px-0">
        <div className="flex flex-col gap-10 sm:px-10 md:flex-row justify-between md:px-14">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <h1 className="text-4xl font-extrabold text-blue-500 tracking-tight transition-transform transform hover:scale-105">
              Asah Makerspace
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed opacity-80 transition-opacity duration-300 hover:opacity-100">
              Innovating technology with a focus on providing exceptional services and delivering remarkable results.
            </p>

            <div className="mt-6 flex space-x-6 text-blue-400">
              <a
                className="hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a
                className="hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a
                className="hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                className="hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a
                className="hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3">
            <div className="flex items-center mt-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="20"
                  height="20"
                >
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <a href="tel:+233-54865151" className="text-lg font-medium text-gray-200 hover:text-blue-500 transition-colors">
                  +233(0)-000-000-000
                </a>
                <p className="text-sm text-gray-400">Contact Support</p>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="20"
                  height="20"
                >
                  <path d="M2.5 2.5h19m-19 19h19" />
                </svg>
              </div>
              <div className="ml-4">
                <a href="mailto:Assah Makerspace@gmail.com" className="text-lg font-medium text-gray-200 hover:text-blue-500 transition-colors">
                  asahmakerspace@gmail.com
                </a>
                <p className="text-sm text-gray-400">Support Email</p>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-blue-500">Important Links</h3>
            <div className="mt-6 flex flex-col space-y-3">
              <a href="#" className="text-lg text-gray-300 hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-lg text-gray-300 hover:text-blue-500 transition-colors">
                Terms and Conditions
              </a>
              <a href="/contact" className="text-lg text-gray-300 hover:text-blue-500 transition-colors">
                Contact Us
              </a>
              <a href="/about" className="text-lg text-gray-300 hover:text-blue-500 transition-colors">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-600 opacity-50" />

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          Copyright © 2024 AssahMakerspace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
