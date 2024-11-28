import React from "react";
import "./Footer2.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-8 bg-[#09141b] text-[#065f46]">
      <div className="footer-content flex flex-wrap gap-8 justify-center px-4 py-8 md:px-12 lg:gap-12 lg:px-16">
        {/* Left Section */}
        <div className="footer-left flex flex-col items-start min-w-[240px] w-full lg:w-1/3">
          <h2 className="footer-title text-white text-2xl font-semibold">Shine Panjwani</h2>
          <div className="footer-info mt-6">
            {/* Address */}
            <address className="footer-address mb-4">
              <h3 className="footer-heading text-white font-medium">Address:</h3>
              <p className="footer-text mt-1">Level 1, 12 Sample St, Sydney NSW 2000</p>
            </address>
            {/* Contact */}
            <div className="footer-contact mb-4">
              <h3 className="footer-heading text-white font-medium">Contact:</h3>
              <p className="footer-text mt-1">
                9244001991
                <br />
                shinepanjwani18@gmail.com
              </p>
            </div>
            {/* Social Links */}
            <div className="footer-social flex gap-4 mt-4">
              <a href="#" aria-label="Facebook">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a1b29da7e5fa1d78937e2416e1048248423b7bd84edca9ac9f9d1c4bdbba7c"
                  alt="Facebook icon"
                  className="social-icon w-6 h-6"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/27c4cc1585468ee0879a7ac037654ec214fe8ee4f74de5179ab5b570b216dd0a"
                  alt="Twitter icon"
                  className="social-icon w-6 h-6"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00776960116fb2f10cff18144058d91fcc206c3a69843b3af584458e6a8a2cee"
                  alt="Instagram icon"
                  className="social-icon w-6 h-6"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9afcdaba2708f30de39ca2e72e195b1bd27b4c180057d48a210504ef952b78"
                  alt="LinkedIn icon"
                  className="social-icon w-6 h-6"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cb0fa97df7c76eef2fbd13aa0a2e9be6249003b99ce032585ecc36a4da80963"
                  alt="YouTube icon"
                  className="social-icon w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav flex flex-col items-start min-w-[200px] w-full lg:w-1/3">
          <h3 className="footer-heading text-white font-medium mb-4">Quick Links</h3>
          <div className="footer-links flex flex-col gap-2 text-sm">
            <Link to="/blog" className="hover:text-white transition duration-200">Blog</Link>
            <Link to="/help" className="hover:text-white transition duration-200">Help Center</Link>
            <Link to="/privacy" className="hover:text-white transition duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition duration-200">Terms of Service</Link>
          </div>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom flex flex-col items-center mt-8 px-4 py-4 border-t border-[#334155]">
        <p className="text-sm">© 2024 Shine Panjwani. All rights reserved.</p>
        <div className="footer-policy-links flex gap-4 mt-2 text-xs">
          <Link to="/privacy" className="hover:text-white transition duration-200">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition duration-200">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
