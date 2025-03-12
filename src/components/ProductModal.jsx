import React, { useState } from 'react';

const ProductModal = ({ product, onClose, onQuantityChange }) => {
  // Initialize quantity with product's quantity or 1 if undefined
  const [quantity, setQuantity] = useState(product?.quantity || 1);

  // Return null if no product (after hooks)
  if (!product) return null;

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) { // Prevent negative quantities
      setQuantity(newQuantity);
      onQuantityChange(product.id, newQuantity);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        <div className="w-full h-auto mb-4 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold uppercase mb-2">{product.name}</h2>

        <p className="text-gray-600 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
        </p>

        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl font-bold">{product.price}</p>
          <div className="flex items-center space-x-2">
            <button 
              className="px-3 py-1 bg-gray-200 rounded-lg" 
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button 
              className="px-3 py-1 bg-gray-200 rounded-lg" 
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition-colors">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductModal;