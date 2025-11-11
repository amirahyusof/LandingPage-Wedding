import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full bg-[#FFF8E3] text-[#E6A4B4] py-10 px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <FaFacebookSquare
            size={32}
            className="hover:scale-110 transition text-[#E6A4B4]"
          />
          <FaInstagramSquare
            size={32}
            className="hover:scale-110 transition text-[#E6A4B4]"
          />
          <FaTwitterSquare
            size={32}
            className="hover:scale-110 transition text-[#E6A4B4]"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-3">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <MdOutlineEmail size={24} />
            <p className="text-gray-700">timelessElegance@studio.com</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaPhoneAlt size={20} />
            <p className="text-gray-700">+604-1234567</p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} All Rights Reserved — Elegance Studio
      </p>
    </footer>
  );
}

export default Footer;
