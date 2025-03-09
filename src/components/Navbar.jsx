import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Debugging: Log state changes
  const toggleMenu = () => {
    console.log('Toggling menu. Current isOpen:', isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFFBF8] p-4 flex items-center justify-between shadow-md relative font-circe overflow-visible">
      {/* Logo Section */}
      <div className="text-xl font-bold">
        <a href="/">LOGO</a>
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
            <a
              href="/"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              HOME
            </a>
            <a
              href="/our-spuds"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              OUR SPUDS
            </a>
            <a
              href="/about-us"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              ABOUT US
            </a>
            <a
              href="/the-community"
              className="text-[#4B4B48] hover:text-[#2A2A28] transition"
            >
              THE COMMUNITY
            </a>
          </div>
        </div>

        {/* Icons Section (Right-aligned) */}
        <div className="flex space-x-4">
          <a href="/search" className="text-[#4B4B48] hover:text-[#2A2A28] transition">
            <FaSearch size={17} />
          </a>
          <a href="/profile" className="text-[#4B4B48] hover:text-[#2A2A28] transition">
            <FaUser size={17} />
          </a>
          <a href="/cart" className="text-[#4B4B48] hover:text-[#2A2A28] transition">
            <FaShoppingCart size={17} />
          </a>
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
          <a
            href="/"
            className="text-[#4B4B48] hover:text-[#2A2A28] transition py-2"
          >
            HOME
          </a>
          <a
            href="/our-spuds"
            className="text-[#4B4B48] hover:text-[#2A2A28] transition py-2"
          >
            OUR SPUDS
          </a>
          <a
            href="/about-us"
            className="text-[#4B4B48] hover:text-[#2A2A28] transition py-2"
          >
            ABOUT US
          </a>
          <a
            href="/the-community"
            className="text-[#4B4B48] hover:text-[#2A2A28] transition py-2"
          >
            THE COMMUNITY
          </a>
        </div>

        {/* Icons Section (Centered in dropdown) */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/search" className="text-[#4B4B48] hover:text-[#2A2A28] transition">
            <FaSearch size={17} />
          </a>
          <a href="/profile" className="text-[#4B4B48] hover:text-[#2A2A28] transition">
            <FaUser size={17} />
          </a>
          <a href="/cart" className="text-[#4B4B48] hover:text-[#2A2A28] transition">
            <FaShoppingCart size={17} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;