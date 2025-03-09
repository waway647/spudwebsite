import React from 'react';
import potatoImage from '../assets/spud.png'; // Replace with the actual path to your potato image
import '../index.css';

const Hero = () => {
  return (
    <section className="bg-[#FFFBF8] min-h-[80vh] flex items-center justify-center relative py-12 md:py-16">
      {/* Text and Image Container */}
      <div className="flex flex-col items-center justify-center relative w-full max-w-5xl px-4 md:px-8">
        {/* FOUNDED IN Text */}
        <h1 className="font-dela-gothic-one text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-circe absolute top-0 left-4 sm:left-6 md:left-8">
          FOUNDED IN
        </h1>

        {/* Potato Image */}
        <div className="z-10 my-8 md:my-12">
          <img
            src={potatoImage}
            alt="Loaded Baked Potato"
            className="w-64 sm:w-80 md:w-96 lg:w-[600px] xl:w-[720px] h-auto"
          />
        </div>

        {/* BUTUAN Text */}
        <h2 className="font-dela-gothic-one text-yellow-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-circe absolute bottom-0 right-4 sm:right-6 md:right-8">
          BUTUAN
        </h2>
      </div>
    </section>
  );
};

export default Hero;