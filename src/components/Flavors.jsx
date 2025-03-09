import React from 'react';
import FlavorImage1 from '../assets/flavor1.jpg'; // Replace with actual image paths
import FlavorImage2 from '../assets/flavor1.jpg';

const Flavors = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="font-dela-gothic-one text-4xl md:text-5xl mb-4">
          Savor it in different Flavors
        </h2>
      </div>

      {/* Flavor Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Flavor 1 */}
        <div className="bg-[#FFFBF8] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src={FlavorImage1} 
            alt="Flavor 1" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6 md:p-8 text-center">
            <h3 className="font-dela-gothic-one text-2xl md:text-3xl mb-4">
              Flavor
            </h3>
            <p className="font-circe text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <button className="font-dela-gothic-one bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Explore
            </button>
          </div>
        </div>

        {/* Flavor 2 */}
        <div className="bg-[#FFFBF8] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src={FlavorImage2} 
            alt="Flavor 2" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6 md:p-8 text-center">
            <h3 className="font-dela-gothic-one text-2xl md:text-3xl mb-4">
              Flavor
            </h3>
            <p className="font-circe text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="font-dela-gothic-one bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flavors;