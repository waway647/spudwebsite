import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Products = ({ addToCart, products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div
      ref={ref}
      className={`min-h-screen bg-[#FFFBF8] py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-4xl font-bold text-center mb-12 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          Our Spuds
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((spud, index) => (
            <div 
              key={spud.id} // Use id for uniqueness
              className={`border-2 border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-lg p-6 ${
                isVisible ? 'animate-scale-in' : ''
              }`}
              style={{ animationDelay: isVisible ? `${index * 200}ms` : '0ms' }}
              onClick={() => handleProductClick(spud)}
            >
              <div className="flex flex-col h-full">
                <div className="w-full h-auto mb-4 rounded-lg overflow-hidden">
                  <img
                    src={spud.image}
                    alt={spud.name}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-bold uppercase mb-2">{spud.name}</h2>
                  <p>WITH CHEESE</p>
                  <div className={`border-t border-gray-200 my-4 ${isVisible ? 'animate-[grow_0.5s_ease-out]' : ''}`}></div>
                </div>
                <p className="text-2xl font-bold text-right">₱{spud.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Products;