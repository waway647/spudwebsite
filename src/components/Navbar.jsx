import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navbar = ({ toggleCart }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isUserLinksVisible, setIsUserLinksVisible] = useState(false); // State for user links visibility
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State for search input visibility
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar
  const navbarRef = useRef(null); // Ref to track navbar height

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle user links visibility (sets search to false)
  const toggleUserLinks = () => {
    setIsUserLinksVisible(!isUserLinksVisible);
    setIsSearchVisible(false);
  };

  // Toggle search input visibility (sets user links to false)
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setIsUserLinksVisible(false);
  };

  // Handle cart click: close menu first, then toggle cart
  const handleCartClick = () => {
    toggleMenu(); // Close the menu first
    toggleCart(); // Then toggle the cart
  };

  // Handle scroll event to toggle sticky state
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current.getBoundingClientRect().height;
      const scrollPosition = window.scrollY;

      if (scrollPosition > navbarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`bg-[#FFFBF8] p-4 flex items-center justify-between font-circe overflow-visible z-20 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 shadow-md' : ''
      }`}
    >
      {/* Logo Section */}
      <div className="w-20">
        <a href="/spudwebsite/">
          <img src={Logo} alt="Flavor 1" className="w-full h-full object-cover" />
        </a>
      </div>

      {/* Hamburger Menu Button (Visible on mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#2A2A28] focus:outline-none">
          <FaBars size={17} />
        </button>
      </div>

      {/* Desktop Navigation (Hidden on mobile, visible on desktop) */}
      <div className="hidden md:flex md:items-center md:w-full">
        {/* Navigation Links (Centered) */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-8">
            <a
              href="/spudwebsite/"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              HOME
            </a>
            <Link
              to="/spudwebsite/our-spuds"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              OUR SPUDS
            </Link>
            <Link
              to="/spudwebsite/aboutus"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              ABOUT US
            </Link>
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
                onClick={toggleUserLinks}
              >
                Login
              </Link>
              <Link
                to="/spudwebsite/signup"
                className="text-[#4B4B48] hover:text-[#2A2A28] transition"
                onClick={toggleUserLinks}
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

      {/* Mobile Menu Panel (Full-screen when isOpen is true) */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden fixed top-0 left-0 w-full h-full bg-[#FFFBF8] p-6 z-30 transition-transform duration-300 flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div>
          {/* Top Section with Logo and Close Button */}
          <div className="flex justify-between items-center mb-8">
            <div className="w-20">
              <a href="/spudwebsite/" onClick={toggleMenu}>
                <img src={Logo} alt="Flavor 1" className="w-full h-full object-cover" />
              </a>
            </div>
            <button onClick={toggleMenu} className="text-[#2A2A28] focus:outline-none">
              <FaTimes size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6">
            {/* Search Bar with Icon */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 pl-10 border-b border-[#4B4B48] bg-transparent focus:outline-none text-[#4B4B48]"
              />
              <FaSearch
                size={17}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#4B4B48]"
              />
            </div>

            {/* Main Navigation Links */}
            <a
              href="/spudwebsite/"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition text-md"
              onClick={toggleMenu}
            >
              HOME
            </a>
            <Link
              to="/spudwebsite/our-spuds"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition text-md"
              onClick={toggleMenu}
            >
              OUR SPUDS
            </Link>
            <Link
              to="/spudwebsite/aboutus"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition text-md"
              onClick={toggleMenu}
            >
              ABOUT US
            </Link>
            <p
              className="text-[#4B4B48] hover:text-[#2A2A28] transition text-md"
              onClick={handleCartClick}
            >
              CART
            </p>

            {/* Divider */}
            <hr className="border-t border-[#aaaaaa] my-4" />

            {/* User Navigation Links */}
            <Link
              to="/spudwebsite/login"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition text-md"
              onClick={toggleMenu}
            >
              LOGIN
            </Link>
            <Link
              to="/spudwebsite/signup"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition text-md"
              onClick={toggleMenu}
            >
              SIGN UP
            </Link>
          </div>
        </div>
        

          {/* Bottom Section */}
          <div className=''>
            {/* Follow Us Section */}
            <div className="space-y-4 mt-6">
              <h3 className="font-circe text-xs text-[#4B4B48]">FOLLOW US</h3>
              <div className='flex flex-row text-center items-center gap-2'>
                    <a
                      href="https://instagram.com"
                      className="h-full text-[#4B4B48] hover:text-[#2A2A28] transition-colors duration-300"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="https://facebook.com"
                      className="h-full text-[#4B4B48] hover:text-[#2A2A28] transition-colors duration-300"
                    >
                      <FaFacebookF className="text-xl" />
                    </a>
                    <a
                      href="https://twitter.com"
                      className="text-[#4B4B48] hover:text-[#2A2A28] transition-colors duration-300"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#aaaaaa] pt-6 mt-6">
              <p className="font-circe text-gray-400 text-sm">
                © {new Date().getFullYear()} SPUDRADISE. All rights reserved.
              </p>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;