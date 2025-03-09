import React from 'react';
import PreparationImage from '../assets/preparation.jpg'; // Replace with your image path

const Preparation = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="mb-8">
            <h1 className="font-dela-gothic-one text-4xl md:text-5xl mb-4">
              How we Prepare
            </h1>
            <h2 className="font-dela-gothic-one text-3xl md:text-4xl">
              it for You
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="font-circe text-base md:text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            
            <p className="font-circe text-base md:text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="md:w-1/2">
          <img 
            src={PreparationImage} 
            alt="Preparation Process" 
            className="w-full h-auto object-cover rounded-lg shadow-xl aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default Preparation;