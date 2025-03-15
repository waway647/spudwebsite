import React, { useRef } from 'react';
import potatoImage from '../assets/spud.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Hero = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`bg-[#FFFBF8] min-h-[80vh] flex items-center justify-center relative py-12 md:py-16 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center justify-center relative w-full max-w-5xl px-4 md:px-8">
        <h1 className={`font-dela-gothic-one text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-circe absolute top-0 left-4 sm:left-6 md:left-8 ${
          isVisible ? 'animate-slide-in-left' : ''
        }`}>
          FOUNDED IN
        </h1>
        <div className={`z-10 my-8 md:my-12 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <img
            src={potatoImage}
            alt="Loaded Baked Potato"
            className="w-80 sm:w-80 md:w-96 lg:w-[600px] xl:w-[720px] h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className={`font-dela-gothic-one text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-circe absolute bottom-0 right-4 sm:right-6 md:right-8 ${
          isVisible ? 'animate-slide-in-right' : ''
        }`}>
          BUTUAN
        </h2>
      </div>
    </section>
  );
};

export default Hero;