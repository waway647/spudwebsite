import React, { useRef } from 'react';
import FeatureImage from '../assets/feature.jpg';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Feature = () => {
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
        <div className={`md:w-1/2 ${isVisible ? 'animate-slide-in-left' : ''}`}>
          <img 
            src={FeatureImage} 
            alt="Spud Potato Feature" 
            className="w-full h-auto object-cover rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
        <div className={`md:w-1/2 p-4 md:p-8 flex flex-col items-start ${isVisible ? 'animate-slide-in-right' : ''}`}>
          <h1 className={`font-dela-gothic-one text-4xl md:text-5xl mb-4 md:mb-6 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            SPUD POTATO
          </h1>
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
            <p className="font-circe text-base md:text-lg leading-relaxed">
            Indulge in the crispy, golden goodness of Spud Potato, where every bite bursts with flavor and satisfaction. Crafted from the finest farm-fresh potatoes, our signature spuds are seasoned to perfection and cooked to a delightful crunch. Whether you’re craving a quick snack or a tasty side, Spud Potato brings comfort and joy to every occasion. Discover your new favorite treat today!
            </p>
          </div>
          <hr className={`border-t-2 border-gray-300 w-full my-6 md:my-8 ${isVisible ? 'animate-[grow_0.5s_ease-out]' : ''}`} />
          <a href="/spudwebsite/our-spuds">
            <button className={`font-dela-gothic-one bg-yellow-500 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg hover:bg-yellow-600 hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}>
              ORDER NOW!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;