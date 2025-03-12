import React, { useState } from 'react';
import Spud from '../assets/spud.png'; // Import images
import ProductModal from './ProductModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const spuds = [
    { name: "CHICKEN SPUD", price: "100 ₽", image: Spud },
    { name: "BEEF SPUD", price: "100 ₽", image: Spud },
    { name: "BACON SPUD", price: "100 ₽", image: Spud }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  

  return (
    <div className="min-h-screen bg-[#FFFBF8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Spuds</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spuds.map((spud, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 hover:border-yellow-400 transition-colors duration-100 cursor-pointer rounded-lg p-6"
              onClick={() => handleProductClick(spud)}
            >
              <div className="flex flex-col h-full">
                {/* Product Image */}
                <div className="w-full h-auto mb-4 rounded-lg">
                  <img
                    src={spud.image}
                    alt={spud.name}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                  <h2 className="text-xl font-bold uppercase mb-2">{spud.name}</h2>
                  <p className="text-sm lowercase">potato</p>
                  <div className="border-t border-gray-200 my-4"></div>
                </div>

                {/* Price */}
                <p className="text-2xl font-bold text-right">{spud.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render ProductModal if a product is selected */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Products;