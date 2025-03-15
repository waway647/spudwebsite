import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SignupComponent1 = ({ onContinue }) => {
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
        <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Step 1 of 2</span>
            <h1 className="text-4xl font-bold mt-2">CREATE ACCOUNT</h1>
          </div>
        </div>

        <button className={`w-full flex items-center justify-center space-x-2 border-2 border-gray-300 py-3 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>

        <div className={`flex items-center my-6 ${isVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}>
          <div className={`flex-1 border-t border-gray-300 ${isVisible ? 'animate-[grow_0.5s_ease-out]' : ''}`}></div>
          <span className="px-4 text-gray-500 text-sm">Or</span>
          <div className={`flex-1 border-t border-gray-300 ${isVisible ? 'animate-[grow_0.5s_ease-out]' : ''}`}></div>
        </div>

        <form className="space-y-6">
          <p className={`text-gray-600 text-center mb-6 ${isVisible ? 'animate-fade-in-up animation-delay-600' : ''}`}>
            Sign up with email
          </p>
          
          <div className={`${isVisible ? 'animate-fade-in-up animation-delay-800' : ''}`}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400 transition-all duration-300"
            />
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in-up animation-delay-1000' : ''}`}>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:border-yellow-400 transition-all duration-300"
            />
          </div>

          <button
            type="button"
            onClick={onContinue}
            className={`w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up animation-delay-1200' : ''}`}
          >
            CONTINUE
          </button>
        </form>

        <div className={`mt-8 text-center space-y-2 ${isVisible ? 'animate-fade-in-up animation-delay-1400' : ''}`}>
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

export default SignupComponent1;