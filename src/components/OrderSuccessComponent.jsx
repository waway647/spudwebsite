import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const OrderSuccessComponent = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`min-h-screen bg-[#FFFBF8] flex flex-col items-center justify-center p-4 relative transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`bg-white rounded-lg shadow-lg max-w-md w-full p-8 text-center ${isVisible ? 'animate-scale-in' : ''}`}>
        <h1 className={`text-3xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          THANK YOU FOR ORDERING!
        </h1>
        <p className={`text-gray-600 mb-8 ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
          You will soon receive an order confirmation email to
          <br />
          the email address you specified.
        </p>

        <Link 
          to="/spudwebsite"
          className={`inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}
        >
          BACK TO HOME
        </Link>

        <div className={`flex justify-center mt-12 ${isVisible ? 'animate-fade-in-up animation-delay-600' : ''}`}>
          <img 
            src={Logo} 
            alt="Logo" 
            className="h-16 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessComponent;