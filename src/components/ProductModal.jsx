import React, { useState } from 'react';

const ProductModal = ({ product, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(product?.quantity || 1);

  if (!product) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleQuantityChangeLocal = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id, // Use the existing product ID
      name: product.name,
      price: product.price, // Price is already a number
      image: product.image,
      quantity: quantity,
    };
    addToCart(productToAdd); // Pass the product to the cart
    onClose(); // Close the modal after adding
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 hover:scale-110 transition-transform duration-300"
        >
          ✕
        </button>

        <div className="w-full h-auto mb-4 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h2 className="text-2xl font-bold uppercase mb-2">{product.name}</h2>

        <p className="text-gray-600 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl font-bold">₱{product.price}</p> {/* Add currency symbol here */}
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105 transition-all duration-300"
              onClick={() => handleQuantityChangeLocal(quantity - 1)}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105 transition-all duration-300"
              onClick={() => handleQuantityChangeLocal(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        <button
          className="w-full font-dela-gothic-one bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductModal;