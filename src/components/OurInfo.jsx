import React, { useRef } from 'react';
import tricImage from '../assets/tric.png';
import milestonesImage from '../assets/milestones.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const OurInfo = () => {
  const refFounded = useRef(null);
  const refMilestones = useRef(null);
  const isFoundedVisible = useIntersectionObserver(refFounded, { threshold: 0.2 });
  const isMilestonesVisible = useIntersectionObserver(refMilestones, { threshold: 0.2 });

  return (
    <div className="bg-[#FFFBF8] py-16 px-4 sm:px-6 lg:px-8">
      {/* First Row - Text Left / Image Right */}
      <div
        ref={refFounded}
        className={`max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center transition-opacity duration-700 ${
          isFoundedVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`md:w-1/2 space-y-6 ${isFoundedVisible ? 'animate-slide-in-left' : ''}`}>
          <div className="mb-8">
            <h1 className={`font-dela-gothic-one text-4xl md:text-5xl mb-4 ${isFoundedVisible ? 'animate-fade-in-up' : ''}`}>
              Founded
            </h1>
            <h2 className={`font-dela-gothic-one text-3xl md:text-4xl ${isFoundedVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
              in Butuan
            </h2>
          </div>
          <div className={`space-y-6 ${isFoundedVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}>
            <p className="font-circe text-base md:text-lg leading-relaxed">
              Nestled in the vibrant heart of Butuan City, Spud Potato was born from a vision to turn a local staple into something extraordinary. In our modest garage, we experimented with flavors and techniques, drawing inspiration from the community’s warmth and the region’s rich culinary heritage. That first crispy spud marked the start of a journey fueled by dedication and a dream to share our creation with the world.
            </p>
          </div>
        </div>

        <div className={`md:w-1/2 ${isFoundedVisible ? 'animate-slide-in-right' : ''}`}>
          <img 
            src={tricImage}
            alt="Founded in Butuan"
            className="w-full h-auto object-cover rounded-lg shadow-xl aspect-square hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>

      {/* City Section */}
      <div className="text-center my-16">
        <h2 className={`font-dela-gothic-one text-4xl md:text-5xl text-[#2A2A28] ${isFoundedVisible ? 'animate-fade-in-up' : ''}`}>
          BUTUAN
        </h2>
        <h3 className={`font-dela-gothic-one text-4xl md:text-5xl text-[#2A2A28] ${isFoundedVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
          CITY
        </h3>
      </div>

      {/* Second Row - Image Left / Text Right */}
      <div
        ref={refMilestones}
        className={`max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center transition-opacity duration-700 ${
          isMilestonesVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className={`md:w-1/2 ${isMilestonesVisible ? 'animate-slide-in-left' : ''}`}>
          <img 
            src={milestonesImage} 
            alt="Milestones"
            className="w-full h-auto object-cover rounded-lg shadow-xl aspect-square hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        <div className={`md:w-1/2 space-y-6 ${isMilestonesVisible ? 'animate-slide-in-right' : ''}`}>
          <div className="mb-8">
            <h1 className={`font-dela-gothic-one text-4xl md:text-5xl mb-4 ${isMilestonesVisible ? 'animate-fade-in-up' : ''}`}>
              Our
            </h1>
            <h2 className={`font-dela-gothic-one text-3xl md:text-4xl ${isMilestonesVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
              Milestones
            </h2>
          </div>
          <div className={`space-y-6 ${isMilestonesVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}>
            <p className="font-circe text-base md:text-lg leading-relaxed">
              From our first sale in 2025 to opening our flagship stall a year later, Spud Potato’s journey is paved with proud moments. We’ve since expanded to local markets, earned a loyal following, and introduced new flavors that celebrate our roots. Each milestone reflects our commitment to quality, community, and the simple joy of a perfectly crafted spud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurInfo;