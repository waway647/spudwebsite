import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Menu Section */}
          <div className="space-y-4">
            <h3 className="font-circe text-lg mb-4">MENU</h3>
            <ul className="font-circe space-y-3">
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms and Condition</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Contacts</a></li>
            </ul>
          </div>

          {/* Our Spud Section */}
          <div className="space-y-4">
            <h3 className="font-circe text-lg mb-4">OUR SPUD</h3>
            <ul className="font-circe space-y-3">
              <li><a href="#" className="hover:text-gray-300">Menu</a></li>
              <li><a href="#" className="hover:text-gray-300">Products</a></li>
              <li><a href="#" className="hover:text-gray-300">Story</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="font-circe text-lg mb-4">RESOURCES</h3>
            <ul className="font-circe space-y-3">
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="font-circe text-lg mb-4">SUPPORT</h3>
            <ul className="font-circe space-y-3">
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Feedback</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter Section */}
          <div className="space-y-6 col-span-2 md:col-span-4 lg:col-span-1">
            {/* Contact Info */}
            <div className="space-y-3">
              <p className="font-circe text-lg">CONTACT US</p>
              <div className="font-circe space-y-2">
                <p>+63-XXX-XXX-XXXX</p>
                <p>spud@gmail.com</p>
                <p>Butuan, Philippines</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <p className="font-circe text-lg">SIGN UP FOR SPECIAL OFFER</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL" 
                  className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 w-full"
                />
              </div>
              <label className="flex items-center space-x-2 font-circe text-sm">
                <input type="checkbox" className="rounded border-gray-400" />
                <span>I AGREE TO THE PROCESSING OF PERSONAL DATA</span>
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="w-20">
            <Link to="/">
              <img 
                src={Logo} 
                alt="Flavor 1" 
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          {/* <div className="mb-4 md:mb-0">
            <img 
              src={Logo} 
              alt="Spud Logo" 
              className="h-12 w-auto" 
            />
          </div> */}

          {/* Copyright */}
          <p className="font-circe text-gray-400 text-sm">
            © {new Date().getFullYear()} SPUDRADISE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;