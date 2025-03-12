import React from 'react';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF8] flex flex-col items-center justify-center p-4 text-center">
      {/* Establishment Year */}
      <p className="text-sm text-[#4B4B48] mb-2 tracking-widest">
        EST.2025
      </p>

      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-[#2A2A28] mb-4 uppercase">
        Our Story
      </h1>

      {/* Subheading */}
      <p className="text-xl text-[#4B4B48] uppercase tracking-wide">
        OLD FASHIONED GARAGE STALL
      </p>

      {/* Optional: Add your story content below */}
      <div className="mt-8 max-w-2xl mx-auto">
        {/* Add your story paragraphs here */}
      </div>
    </div>
  );
};

export default OurStory;