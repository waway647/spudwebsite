import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Infographic = () => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });
  const features = [
    { title: "May help digestive health", content: "Rich in fiber, potatoes aid digestion and promote a healthy gut, keeping you feeling light and energized." },
    { title: "Source of vitamins and minerals", content: "Packed with vitamin C, potassium, and B6, potatoes support immunity, heart health, and energy production." },
    { title: "Incredibly filling", content: "With their natural starch content, potatoes satisfy hunger longer, making them a hearty addition to any meal." },
    { title: "May improve blood sugar control", content: "When prepared right, potatoes’ resistant starch can help regulate blood sugar, offering a smart carb choice." }
  ];

  return (
    <div
      ref={ref}
      className={`bg-[#FFFBF8] py-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="font-dela-gothic-one text-4xl md:text-5xl mb-6">
            Why Potato?
          </h1>
          <p className="font-circe text-lg text-gray-600 mb-8">
          Potatoes are more than just a comfort food—they’re a powerhouse of nutrition and versatility. From boosting your health to satisfying your taste buds, discover why this humble spud is a staple worth celebrating!
          </p>
          <hr className={`border-t-2 border-gray-300 w-24 mx-auto ${isVisible ? 'animate-[grow_0.5s_ease-out]' : ''}`} />
        </div>
        <div className="mb-12">
          <h3 className={`font-dela-gothic-one text-2xl md:text-3xl text-center mb-8 ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
            Extremely versatile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-start p-4 bg-[#FFFBF8] rounded-lg shadow-lg hover:bg-amber-50 transition-colors duration-300 ${
                  isVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                <div className={`bg-amber-500 w-3 h-3 rounded-full mt-2 mr-4 ${isVisible ? 'animate-pulse-slow' : ''}`} />
                <div>
                  <h4 className="font-dela-gothic-one text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="font-circe text-gray-600">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographic;