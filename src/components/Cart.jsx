import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Cart = ({ isOpen, toggleCart, cartItems, onQuantityChange, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed right-0 top-0 h-full 2xl:w-[25%] xl:w-[30%] lg:w-[35%] md:w-[50%] w-full bg-[#FFFBF8] shadow-xl transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full p-6">
        {/* Cart Header */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="font-dela-gothic-one text-2xl">YOUR CART ({cartItems.length})</h2>
          <button
            onClick={toggleCart}
            className="text-[#4B4B48] hover:text-[#2A2A28] hover:scale-110 transition-all duration-300"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto space-y-6">
          {cartItems.length === 0 ? (
            <p className="font-circe text-gray-600 text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between gap-10 items-start border-b border-gray-200 pb-6">
                <div className='flex flex-row gap-4'>
                  {/* Item Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Item Info */}
                  <div className="flex flex-col justify-between h-full flex-1">
                    <div>
                      <h3 className="font-dela-gothic-one text-lg">{item.name}</h3>
                      <p className="font-circe text-gray-600 text-sm mb-2">WITH CHEESE</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                        className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="font-circe">{item.quantity}</span>
                      <button
                        onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                        className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                

                {/* Price Section */}
                <div className="flex flex-col text-right">
                  <p className="font-dela-gothic-one text-lg">₱{item.price * item.quantity}</p>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="font-circe text-sm text-gray-600 hover:text-gray-800 transition-colors mt-5"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="font-circe">SUBTOTAL</span>
            <span className="font-dela-gothic-one text-xl">₱{subtotal}</span>
          </div>
          <Link to="/spudwebsite/checkout">
            <button
              onClick={toggleCart}
              className="w-full bg-black text-white py-4 rounded-full font-dela-gothic-one hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;