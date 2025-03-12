import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Adjust path based on your project structure

const OrderSuccessComponent = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF8] flex flex-col items-center justify-center p-4 relative">
      {/* Success Card */}
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 text-center">
        {/* Success Message */}
        <h1 className="text-3xl font-bold mb-4">THANK YOU FOR ORDERING!</h1>
        <p className="text-gray-600 mb-8">
          You will soon receive an order confirmation email to
          <br />
          the email address you specified.
        </p>

        {/* Back to Home Button */}
        <Link 
          to="/"
          className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          BACK TO HOME
        </Link>

        {/* Logo at Bottom */}
        <div className="flex justify-center mt-12">
            <img 
            src={Logo} 
            alt="Logo" 
            className="h-16 w-auto" // Adjust size based on your logo
            />
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessComponent;