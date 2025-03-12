import React from 'react';
import tricImage from '../assets/tric.png';
import milestonesImage from '../assets/milestones.png';

const OurInfo = () => {
  return (
    <div className="bg-[#FFFBF8] py-16 px-4 sm:px-6 lg:px-8">
      {/* First Row - Text Left / Image Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="mb-8">
            <h1 className="font-dela-gothic-one text-4xl md:text-5xl mb-4">
              Founded
            </h1>
            <h2 className="font-dela-gothic-one text-3xl md:text-4xl">
              in Butuan
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-circe text-base md:text-lg leading-relaxed">
              Our journey began in the vibrant streets of Butuan, where our passion for crafting delicious Spud Potato flavors first took root. From humble beginnings, we’ve grown into a beloved brand, dedicated to bringing authentic taste and quality to every bite.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="md:w-1/2">
          <img 
            src={tricImage}
            alt="Founded in Butuan"
            className="w-full h-auto object-cover rounded-lg shadow-xl aspect-square"
          />
        </div>
      </div>

      {/* City Section */}
      <div className="text-center my-16">
        <h2 className="font-dela-gothic-one text-4xl md:text-5xl text-[#2A2A28]">
          BUTUAN
        </h2>
        <h3 className="font-dela-gothic-one text-4xl md:text-5xl text-[#2A2A28]">
          CITY
        </h3>
      </div>

      {/* Second Row - Image Left / Text Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Image Container */}
        <div className="md:w-1/2">
          <img 
            src={milestonesImage} 
            alt="Milestones"
            className="w-full h-auto object-cover rounded-lg shadow-xl aspect-square"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <div className="mb-8">
            <h1 className="font-dela-gothic-one text-4xl md:text-5xl mb-4">
              Our
            </h1>
            <h2 className="font-dela-gothic-one text-3xl md:text-4xl">
              Milestones
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-circe text-base md:text-lg leading-relaxed">
              Over the years, we’ve achieved remarkable milestones, from expanding our flavor range to reaching new customers across the region. Each step forward reflects our commitment to innovation and excellence in every Spud Potato we create.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;