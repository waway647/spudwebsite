import React from 'react';
import FeatureImage from '../assets/feature.jpg';

const Feature = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Image Container (Left Side) */}
        <div className="md:w-1/2">
          <img 
            src={FeatureImage} 
            alt="Spud Potato Feature" 
            className="w-full h-auto object-cover rounded-lg shadow-xl" 
          />
        </div>

        {/* Text Content Container (Right Side) */}
        <div className="md:w-1/2 p-4 md:p-8 flex flex-col items-start">
          {/* Title */}
          <h1 className="font-dela-gothic-one text-4xl md:text-5xl mb-4 md:mb-6">
            SPUD POTATO
          </h1>

          {/* Description */}
          <div className="space-y-6">
            <p className="font-circe text-base md:text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-t-2 border-gray-300 w-full my-6 md:my-8" />

          {/* Call-to-Action Button */}
          <button className="font-dela-gothic-one bg-black text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg hover:bg-gray-800 transition-colors">
            ORDER NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;