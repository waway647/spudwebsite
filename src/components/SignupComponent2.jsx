import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowLeft } from 'react-icons/fa';

const SignupComponent2 = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#FFFBF8] flex items-center justify-center p-4">
      {/* Signup Card */}
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        {/* Back Icon (Top-Left Corner) */}
        <button>
        <FaArrowLeft size={20} onClick={onBack}/>
        </button>
        

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="text-gray-600 text-sm">Step 2 of 2</span>
            <h1 className="text-4xl font-bold mt-2">CREATE ACCOUNT</h1>
          </div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center space-x-2 border-2 border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors mb-6">
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Email Signup */}
        <form className="space-y-6">
          <p className="text-gray-600 text-center mb-6">Sign up with email</p>
          
          <div>
            <input
              type="text" // Changed to text for first name
              placeholder="First name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          
          <div>
            <input
              type="text" // Changed to text for last name
              placeholder="Last name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <input
              type="text" // Changed to text for middle name
              placeholder="Middle name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors">
            CREATE
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent2;