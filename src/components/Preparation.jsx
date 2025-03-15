import React, { useRef } from 'react';
import PreparationImage from '../assets/preparation.jpg';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Preparation = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-[#FFFBF8] py-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className={`md:w-1/2 space-y-6 ${isVisible ? 'animate-slide-in-left' : ''}`}>
          <div className="mb-8">
            <h1 className="font-dela-gothic-one text-4xl md:text-5xl mb-4">
              How we Prepare
            </h1>
            <h2 className="font-dela-gothic-one text-3xl md:text-4xl">
              it for You
            </h2>
          </div>
          <div className="space-y-6">
            <p className={`font-circe text-base md:text-lg leading-relaxed ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
              We start by hand-selecting the finest potatoes, ensuring each one meets our high standards for size, texture, and freshness. After a thorough wash, they’re sliced with precision to achieve that perfect balance of crispiness and flavor in every bite.
            </p>
            <p className={`font-circe text-base md:text-lg leading-relaxed ${isVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}>
              Next, our spuds are seasoned with a special blend of spices and cooked to golden perfection using time-honored techniques. This careful process locks in the natural goodness, delivering a treat that’s as wholesome as it is delicious—just for you!
            </p>
          </div>
        </div>
        <div className={`md:w-1/2 ${isVisible ? 'animate-slide-in-right' : ''}`}>
          <img 
            src={PreparationImage} 
            alt="Preparation Process" 
            className="w-full h-auto object-cover rounded-lg shadow-xl aspect-square hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Preparation;