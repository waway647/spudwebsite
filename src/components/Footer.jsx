import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Footer = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });

  return (
    <footer
      ref={ref}
      className={`bg-[#1A1A1A] text-white py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* About Us Section */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up animation-delay-100' : ''}`}>
            <h3 className="font-circe text-lg mb-4">ABOUT US</h3>
            <ul className="font-circe space-y-3">
              <li>
                <Link to="/spudwebsite/aboutus" className="hover:text-gray-300 transition-colors duration-300">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Spud Section */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up animation-delay-300' : ''}`}>
            <h3 className="font-circe text-lg mb-4">OUR SPUD</h3>
            <ul className="font-circe space-y-3">
              <li>
                <Link to="/spudwebsite/our-spuds" className="hover:text-gray-300 transition-colors duration-300">
                  Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section with Icons */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up animation-delay-500' : ''}`}>
            <h3 className="font-circe text-lg mb-4">FOLLOW US</h3>
            <ul className="font-circe space-y-3">
              <li>
                <a href="https://instagram.com" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
                  <FaInstagram className="text-xl hover:scale-110 transition-transform duration-300" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
                  <FaFacebookF className="text-xl hover:scale-110 transition-transform duration-300" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
                  <FaTwitter className="text-xl hover:scale-110 transition-transform duration-300" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`space-y-3 ${isVisible ? 'animate-fade-in-up animation-delay-700' : ''}`}>
            <p className="font-circe text-lg">CONTACT US</p>
            <div className="font-circe space-y-2">
              <p>+63-XXX-XXX-XXXX</p>
              <p>spud@gmail.com</p>
              <p>Butuan, Philippines</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up animation-delay-900' : ''}`}>
            <p className="font-circe text-lg">SIGN UP FOR SPECIAL OFFER</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 w-full hover:border-yellow-400 transition-all duration-300"
              />
            </div>
            <label className="flex space-x-2 font-circe text-sm items-start">
              <input type="checkbox" className="rounded border-gray-400 mt-1" />
              <span>I AGREE TO THE PROCESSING OF PERSONAL DATA</span>
            </label>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${isVisible ? 'animate-fade-in-up animation-delay-1200' : ''}`}>
          <div className="w-20">
            <a href="/spudwebsite/">
              <img 
                src={Logo} 
                alt="Spud Logo" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
          <p className="font-circe text-gray-400 text-sm">
            © {new Date().getFullYear()} SPUDRADISE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;