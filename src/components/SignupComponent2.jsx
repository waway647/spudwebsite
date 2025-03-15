import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowLeft } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SignupComponent2 = ({ onBack }) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`min-h-screen bg-[#FFFBF8] flex items-center justify-center p-4 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`bg-white rounded-lg shadow-lg max-w-md w-full p-8 ${isVisible ? 'animate-scale-in' : ''}`}>
        <button className={`mb-4 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <FaArrowLeft size={20} onClick={onBack} className="hover:scale-110 transition-transform duration-300" />
        </button>

        <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Step 2 of 2</span>
            <h1 className="text-4xl font-bold mt-2">CREATE ACCOUNT</h1>
          </div>
        </div>

        <form className="space-y-6">
          
          <div className={`${isVisible ? 'animate-fade-in-up animation-delay-1000' : ''}`}>
            <input
              type="text"
              placeholder="First name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400 transition-all duration-300"
            />
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-up animation-delay-1200' : ''}`}>
            <input
              type="text"
              placeholder="Last name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400 transition-all duration-300"
            />
          </div>

          <div className={`${isVisible ? 'animate-fade-in-up animation-delay-1400' : ''}`}>
            <input
              type="text"
              placeholder="Middle name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400 transition-all duration-300"
            />
          </div>

          <button className={`w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up animation-delay-1600' : ''}`}>
            CREATE
          </button>
        </form>

        <div className={`mt-8 text-center space-y-2 ${isVisible ? 'animate-fade-in-up animation-delay-1800' : ''}`}>
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/spudwebsite/login" className="text-yellow-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent2;