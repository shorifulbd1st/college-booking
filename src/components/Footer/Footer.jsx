import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white mt-0">
      {/* Wave Shape */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-20 fill-green-600"
        >
          <path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row justify-between relative">
        {/* Brand Info */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-green-500">
            College Booking System
          </h2>
          <p className="mt-4 text-gray-400">
            Choose and book the perfect college that matches your dreams through
            our smooth and student-friendly booking system.
          </p>
          <div className="flex mt-4 space-x-4">
            <FaTwitter size={24} className="text-blue-400" />
            <FaFacebookF size={24} className="text-blue-400" />
            <FaInstagram size={24} className="text-red-300" />
            <FaYoutube size={24} className="text-red-600" />
          </div>
        </div>

        {/* Explore Links */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-green-500">Explore</h3>
          <ul className="mt-4 flex flex-col space-y-2 text-gray-400">
            <Link
              className="hover:underline underline-offset-2 decoration-red-600"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:underline underline-offset-2 decoration-red-600"
              to={"/colleges"}
            >
              Colleges
            </Link>
            <Link
              className="hover:underline underline-offset-2 decoration-red-600"
              to={"/admission"}
            >
              Admission
            </Link>
            <Link
              className="hover:underline underline-offset-2 decoration-red-600"
              to={"my-college"}
            >
              My College
            </Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-green-500">Contact Info</h3>
          <div className="mt-4 text-gray-400">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>Goldschmidtstraße 13, 04103 Leipzig</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt /> <span>+49078-039-23-11</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaPhoneAlt /> <span>+49078-028-55-60</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500">
        <p>
          <span className="text-green-500">College Booking System </span> © All
          Rights Reserved - 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
