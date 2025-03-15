import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const OurStory = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`min-h-screen bg-[#FFFBF8] flex flex-col items-center justify-center p-4 text-center transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className={`text-sm text-[#4B4B48] mb-2 tracking-widest ${isVisible ? 'animate-fade-in-up' : ''}`}>
        EST.2025
      </p>

      <h1 className={`text-4xl font-bold text-[#2A2A28] mb-4 uppercase ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
        Our Story
      </h1>

      <p className={`text-xl text-[#4B4B48] uppercase tracking-wide ${isVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}>
        OLD FASHIONED GARAGE STALL
      </p>

      <div className={`mt-8 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up animation-delay-600' : ''}`}>
        {/* Add your story paragraphs here if needed */}
        <p className="font-circe text-base md:text-lg leading-relaxed text-[#4B4B48]">
          It all began in 2025, in a small garage in Butuan City, where a love for potatoes and a passion for flavor sparked the first Spud Potato. What started as a simple stall—serving crispy, hand-crafted spuds to neighbors and passersby—quickly grew into a local sensation. With every batch, we poured our hearts into perfecting the recipe, blending tradition with a twist of creativity that’s now loved far beyond our humble beginnings.
        </p>
      </div>
    </div>
  );
};

export default OurStory;