import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  // State for payment method and form data
  const [paymentMethod, setPaymentMethod] = useState('credit'); // Default to Credit/Debit Cards
  const [gcashNumber, setGcashNumber] = useState(''); // State for GCASH input

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF8] p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Order Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">CHECKOUT</h1>

          {/* Contact Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">CONTACT</h2>
            <input
              type="email"
              placeholder="E-MAIL"
              className="w-full p-3 border rounded-lg mb-4"
            />
          </div>

          {/* Delivery Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">DELIVERY</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input placeholder="FIRST NAME" className="p-3 border rounded-lg" />
              <input placeholder="LAST NAME" className="p-3 border rounded-lg" />
            </div>
            <select className="w-full p-3 border rounded-lg mb-4">
              <option>COUNTRY/REGION</option>
            </select>
            <input placeholder="STREET ADDRESS" className="w-full p-3 border rounded-lg mb-4" />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input placeholder="POSTCODE/ZIP" className="p-3 border rounded-lg" />
              <input placeholder="TOWN/CITY" className="p-3 border rounded-lg" />
            </div>
            <input placeholder="PHONE" className="w-full p-3 border rounded-lg" />
          </div>

          {/* Payment Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">PAYMENT</h2>
            <div className="space-y-4">
              {/* Credit/Debit Cards */}
              <div className="border p-4 rounded-lg">
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
                      className="w-full p-2 border rounded-lg mb-2"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input placeholder="MM/YY" className="p-2 border rounded-lg" />
                      <input placeholder="CVC" className="p-2 border rounded-lg" />
                    </div>
                  </>
                )}
              </div>

              {/* GCASH */}
              <label className="flex items-center border p-4 rounded-lg">
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
                <div className="border p-4 rounded-lg">
                  <input
                    type="text"
                    placeholder="GCASH NUMBER"
                    value={gcashNumber}
                    onChange={(e) => setGcashNumber(e.target.value)}
                    className="w-full p-2 border rounded-lg mb-2"
                  />
                  {/* You can add more GCASH-specific fields here if needed */}
                </div>
              )}

              {/* Cash on Delivery (COD) */}
              <label className="flex items-center border p-4 rounded-lg">
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
              {/* No additional input forms for COD */}
            </div>

            <label className="flex items-center mt-4">
              <input type="checkbox" className="mr-2" />
              I accept the Terms & Conditions
            </label>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-lg font-bold mb-6">YOUR ORDER (2)</h2>

          {/* Order Items */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-bold">SPUD POTATO ORIGINAL</h3>
                <p className="text-sm text-gray-600">FLAVOR</p>
                <div className="flex items-center mt-2">
                  <button className="px-3 py-1 border">-</button>
                  <span className="mx-2">1</span>
                  <button className="px-3 py-1 border">+</button>
                </div>
              </div>
              <p className="font-bold">1000 ₽</p>
            </div>

            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-bold">SPUD POTATO SPICY</h3>
                <p className="text-sm text-gray-600">FLAVOR</p>
                <div className="flex items-center mt-2">
                  <button className="px-3 py-1 border">-</button>
                  <span className="mx-2">1</span>
                  <button className="px-3 py-1 border">+</button>
                </div>
              </div>
              <p className="font-bold">1000 ₽</p>
            </div>
          </div>

          {/* Coupon Section */}
          <div className="mb-6">
            <input
              placeholder="COUPON CODE"
              className="w-full p-3 border rounded-lg mb-2"
            />
            <button className="w-full bg-gray-200 p-2 rounded-lg">APPLY</button>
          </div>

          {/* Totals */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span className="font-bold">3 000 ₽</span>
            </div>
            <div className="flex justify-between">
              <span>DELIVERY FEE</span>
              <span className="font-bold">100 ₽</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>TOTAL</span>
              <span>3 100 ₽</span>
            </div>
          </div>

          {/* Place Order Button */}
          <Link to="/spudwebsite/ordersuccess">
          <button className="w-full bg-yellow-400 py-4 rounded-lg font-bold hover:bg-yellow-500 transition">
            PLACE ORDER
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;