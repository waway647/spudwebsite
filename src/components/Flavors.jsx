import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Flavors = ({ products }) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  // Take only the first two products
  const displayedFlavors = products.slice(0, 2);

  return (
    <div
      ref={ref}
      className={`bg-[#FFFBF8] py-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`max-w-7xl mx-auto text-center mb-12 ${isVisible ? 'animate-fade-in-up' : ''}`}>
        <h2 className="font-dela-gothic-one text-4xl md:text-5xl mb-4">
          Savor it in different Flavors
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {displayedFlavors.map((flavor, index) => (
          <div 
            key={flavor.id} // Use id for uniqueness
            className={`bg-[#FFFBF8] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              isVisible ? 'animate-scale-in' : ''
            }`}
            style={{ animationDelay: isVisible ? `${index * 200}ms` : '0ms' }}
          >
            <img 
              src={flavor.image} 
              alt={`${flavor.name} Flavor`} 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 md:p-8 text-center">
              <h3 className="font-dela-gothic-one text-2xl md:text-3xl mb-4">
                {flavor.name.replace("SPUD", "FLAVOR")}
              </h3>
              <p className="font-circe text-gray-600 mb-6">
              {flavor.description}
              </p>
              <a href="/spudwebsite/our-spuds/">
                <button className="font-dela-gothic-one bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 hover:scale-110 transition-all duration-300">
                  Explore
                </button>
              </a> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavors;