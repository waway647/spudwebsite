import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CheckoutForm = ({ cartItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [gcashNumber, setGcashNumber] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);

  // Trigger animation once on mount
  useEffect(() => {
    setIsAnimated(true);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Calculate subtotal, delivery fee, and total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 100; // Fixed delivery fee (adjust as needed)
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-[#FFFBF8] p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Order Form */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md transition-opacity duration-700 ${
            isAnimated ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className={`text-2xl font-bold mb-6 ${isAnimated ? 'animate-fade-in-up' : ''}`}>
            CHECKOUT
          </h1>

          <div className={`mb-8 ${isAnimated ? 'animate-fade-in-up animation-delay-200' : ''}`}>
            <h2 className="text-lg font-bold mb-4">CONTACT</h2>
            <input
              type="email"
              placeholder="E-MAIL"
              className="w-full p-3 border rounded-lg mb-4 hover:border-yellow-400 transition-all duration-300"
            />
          </div>

          <div className={`mb-8 ${isAnimated ? 'animate-fade-in-up animation-delay-400' : ''}`}>
            <h2 className="text-lg font-bold mb-4">DELIVERY</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input placeholder="FIRST NAME" className="p-3 border rounded-lg hover:border-yellow-400 transition-all duration-300" />
              <input placeholder="LAST NAME" className="p-3 border rounded-lg hover:border-yellow-400 transition-all duration-300" />
            </div>
            <select className="w-full p-3 border rounded-lg mb-4 hover:border-yellow-400 transition-all duration-300">
              <option>COUNTRY/REGION</option>
            </select>
            <input placeholder="STREET ADDRESS" className="w-full p-3 border rounded-lg mb-4 hover:border-yellow-400 transition-all duration-300" />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input placeholder="POSTCODE/ZIP" className="p-3 border rounded-lg hover:border-yellow-400 transition-all duration-300" />
              <input placeholder="TOWN/CITY" className="p-3 border rounded-lg hover:border-yellow-400 transition-all duration-300" />
            </div>
            <input placeholder="PHONE" className="w-full p-3 border rounded-lg hover:border-yellow-400 transition-all duration-300" />
          </div>

          <div className={`mb-8 ${isAnimated ? 'animate-fade-in-up animation-delay-600' : ''}`}>
            <h2 className="text-lg font-bold mb-4">PAYMENT</h2>
            <div className="space-y-4">
              <div className={`border p-4 rounded-lg hover:shadow-md transition-all duration-300 ${isAnimated ? 'animate-fade-in-up animation-delay-800' : ''}`}>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={handlePaymentChange}
                    className="mr-2"
                  />
                  CREDIT/DEBIT CARDS
                </label>
                {paymentMethod === 'credit' && (
                  <>
                    <input
                      placeholder="CARD NUMBER"
                      className="w-full p-2 border rounded-lg mb-2 hover:border-yellow-400 transition-all duration-300"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input placeholder="MM/YY" className="p-2 border rounded-lg hover:border-yellow-400 transition-all duration-300" />
                      <input placeholder="CVC" className="p-2 border rounded-lg hover:border-yellow-400 transition-all duration-300" />
                    </div>
                  </>
                )}
              </div>

              <label className={`flex items-center border p-4 rounded-lg hover:shadow-md transition-all duration-300 ${isAnimated ? 'animate-fade-in-up animation-delay-1000' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="gcash"
                  checked={paymentMethod === 'gcash'}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                GCASH
              </label>
              {paymentMethod === 'gcash' && (
                <div className={`border p-4 rounded-lg ${isAnimated ? 'animate-fade-in-up animation-delay-1200' : ''}`}>
                  <input
                    type="text"
                    placeholder="GCASH NUMBER"
                    value={gcashNumber}
                    onChange={(e) => setGcashNumber(e.target.value)}
                    className="w-full p-2 border rounded-lg mb-2 hover:border-yellow-400 transition-all duration-300"
                  />
                </div>
              )}

              <label className={`flex items-center border p-4 rounded-lg hover:shadow-md transition-all duration-300 ${isAnimated ? 'animate-fade-in-up animation-delay-1400' : ''}`}>
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                CASH ON DELIVERY (COD)
              </label>

              <label className={`flex items-center mt-4 ${isAnimated ? 'animate-fade-in-up animation-delay-1600' : ''}`}>
                <input type="checkbox" className="mr-2" />
                I accept the Terms & Conditions
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div
          className={`bg-white p-6 rounded-lg shadow-md h-fit transition-opacity duration-700 ${
            isAnimated ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className={`text-lg font-bold mb-6 ${isAnimated ? 'animate-fade-in-up' : ''}`}>
            YOUR ORDER ({cartItems.length})
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty. Please add items to your cart before checking out.</p>
          ) : (
            <div className={`space-y-4 mb-6 ${isAnimated ? 'animate-fade-in-up animation-delay-200' : ''}`}>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start border-b pb-4">
                  <div className='flex flex-row gap-4'>
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                    </div>
                  </div>
                  <p className="font-bold">₱{item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          )}

          <div className={`mb-6 ${isAnimated ? 'animate-fade-in-up animation-delay-400' : ''}`}>
            <input
              placeholder="COUPON CODE"
              className="w-full p-3 border rounded-lg mb-2 hover:border-yellow-400 transition-all duration-300"
            />
            <button className="w-full bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition-all duration-300">
              APPLY
            </button>
          </div>

          <div className={`space-y-4 mb-6 ${isAnimated ? 'animate-fade-in-up animation-delay-600' : ''}`}>
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span className="font-bold">₱{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>DELIVERY FEE</span>
              <span className="font-bold">₱{deliveryFee}</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>TOTAL</span>
              <span>₱{total}</span>
            </div>
          </div>

          <Link to="/spudwebsite/ordersuccess">
            <button
              className={`w-full bg-yellow-400 py-4 rounded-lg font-bold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 disabled:opacity-50 ${
                isAnimated ? 'animate-fade-in-up animation-delay-800' : ''
              }`}
              disabled={cartItems.length === 0}
            >
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;