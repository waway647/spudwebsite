import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const LoginComponent = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF8] flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">LOGIN</h1>
          <p className="text-gray-600 mb-6">
          Logging into your account allows you to seamlessly explore our delicious range of Spud Potato flavors, track your orders, and manage your preferences with ease.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors">
            LOGIN
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">Or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center space-x-2 border-2 border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          <FcGoogle className="text-xl" />
          <span>Continue with Google</span>
        </button>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm">
            New user?{' '}
            <Link to="/signup" 
            className="text-yellow-600 hover:underline">
              Create an account
            </Link>
          </p>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            Get help signing in
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;