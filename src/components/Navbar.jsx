import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navbar = ({ toggleCart }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isUserLinksVisible, setIsUserLinksVisible] = useState(false); // State for user links visibility
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State for search input visibility

  // Toggle mobile menu
  const toggleMenu = () => {
    console.log('Toggling menu. Current isOpen:', isOpen);
    setIsOpen(!isOpen);
  };

  // Toggle user links visibility (sets search to false)
  const toggleUserLinks = () => {
    setIsUserLinksVisible(!isUserLinksVisible);
    setIsSearchVisible(false); // Ensure search is hidden when user links are toggled
  };

  // Toggle search input visibility (sets user links to false)
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setIsUserLinksVisible(false); // Ensure user links are hidden when search is toggled
  };

  return (
    <nav className="bg-[#FFFBF8] p-4 flex items-center justify-between shadow-md font-circe overflow-visible relative">
      {/* Logo Section */}
      <div className="w-20">
        <Link to="/spudwebsite">
          <img 
            src={Logo} 
            alt="Flavor 1" 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Hamburger Menu Button (Visible on mobile) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[#2A2A28] focus:outline-none"
        >
          {isOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
        </button>
      </div>

      {/* Desktop Navigation (Hidden on mobile, visible on desktop) */}
      <div className="hidden md:flex md:items-center md:w-full">
        {/* Navigation Links (Centered) */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-8">
            <Link to="/spudwebsite"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              HOME
            </Link>
            <Link to="/spudwebsite/our-spuds"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              OUR SPUDS
            </Link>
            <a href="/spudwebsite/aboutus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              ABOUT US
            </a>
          </div>
        </div>

        {/* Icons Section (Right-aligned) */}
        <div className="flex items-center space-x-4">
          {/* Search Icon with Input Form */}
          <div className="flex items-center">
            <button
              onClick={toggleSearch}
              className="text-[#4B4B48] hover:text-[#2A2A28] transition focus:outline-none"
            >
              <FaSearch size={17} />
            </button>
            <div
              className={`flex items-center ml-2 transition-transform duration-300 transform ${
                isSearchVisible ? 'translate-x-0' : '-translate-x-4 hidden'
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border-b border-[#4B4B48] bg-transparent focus:outline-none"
              />
            </div>
          </div>
          {/* User Icon with Sliding Links */}
          <div className="flex items-center">
            <button
              onClick={toggleUserLinks}
              className="text-[#4B4B48] hover:text-[#2A2A28] transition focus:outline-none"
            >
              <FaUser size={17} />
            </button>
            <div
              className={`flex items-center space-x-4 ml-2 transition-transform duration-300 transform ${
                isUserLinksVisible ? 'translate-x-0' : '-translate-x-4 hidden'
              }`}
            >
              <Link
                to="/spudwebsite/login"
                className="text-[#4B4B48] hover:text-[#2A2A28] transition"
                onClick={toggleUserLinks} // Hide links on click
              >
                Login
              </Link>
              <Link
                to="/spudwebsite/signup"
                className="text-[#4B4B48] hover:text-[#2A2A28] transition"
                onClick={toggleUserLinks} // Hide links on click
              >
                Sign Up
              </Link>
            </div>
          </div>
          <button onClick={toggleCart} className="text-[#4B4B48] hover:text-[#2A2A28] transition">
            <FaShoppingCart size={17} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (Visible only on mobile when isOpen is true) */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 right-0 bg-[#FFFBF8] p-4 rounded-md shadow-md z-10 transition-all duration-300`}
      >
        {/* Navigation Links (Centered in dropdown) */}
        <div className="flex flex-col items-center space-y-2 mb-4">
          <Link to="/spudwebsite"
            className="text-[#4B4B48] hover:text-[#2A2A28] transition py-2"
            onClick={toggleMenu} // Close menu on click
          >
            HOME
          </Link>
          <Link to="/spudwebsite/our-spuds"
            className="text-[#4B4B48] hover:text-[#2A2A28] transition py-2"
            onClick={toggleMenu} // Close menu on click
          >
            OUR SPUDS
          </Link>
          <a href="/spudwebsite/aboutus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4B4B48] hover:text-[#2A2A28] transition py-2"
            onClick={toggleMenu} // Close menu on click
          >
            ABOUT US
          </a>
        </div>

        {/* Icons Section (Centered in dropdown) */}
        <div className="flex justify-center items-center space-x-4 mt-4">
          {/* Search Icon with Input Form in Mobile */}
          <div className="flex items-center">
            <button
              onClick={toggleSearch}
              className="text-[#4B4B48] hover:text-[#2A2A28] transition focus:outline-none"
            >
              <FaSearch size={17} />
            </button>
            <div
              className={`flex items-center ml-2 transition-transform duration-300 transform ${
                isSearchVisible ? 'translate-x-0' : '-translate-x-4 hidden'
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border-b border-[#4B4B48] bg-transparent focus:outline-none"
              />
            </div>
          </div>
          {/* User Icon with Sliding Links in Mobile */}
          <div className="flex items-center">
            <button
              onClick={toggleUserLinks}
              className="text-[#4B4B48] hover:text-[#2A2A28] transition focus:outline-none"
            >
              <FaUser size={17} />
            </button>
            <div
              className={`flex items-center space-x-4 ml-2 transition-transform duration-300 transform ${
                isUserLinksVisible ? 'translate-x-0' : '-translate-x-4 hidden'
              }`}
            >
              <Link
                to="/spudwebsite/login"
                className="text-[#4B4B48] hover:text-[#2A2A28] transition"
                onClick={() => {
                  toggleUserLinks();
                  toggleMenu(); // Close both links and mobile menu
                }}
              >
                Login
              </Link>
              <Link
                to="/spudwebsite/signup"
                className="text-[#4B4B48] hover:text-[#2A2A28] transition"
                onClick={() => {
                  toggleUserLinks();
                  toggleMenu(); // Close both links and mobile menu
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
          <button
            onClick={() => {
              toggleCart();
              toggleMenu(); // Close mobile menu when cart is toggled
            }}
            className="text-[#4B4B48] hover:text-[#2A2A28] transition"
          >
            <FaShoppingCart size={17} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;