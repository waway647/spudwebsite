import React from 'react';

const Infographic = () => {
  const features = [
    {
      title: "May help digestive health",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Source of vitamins and minerals",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore."
    },
    {
      title: "Incredibly filling",
      content: "Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      title: "May improve blood sugar control",
      content: "Duis aute irure dolor in reprehenderit in voluptate."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-dela-gothic-one text-4xl md:text-5xl mb-6">
            Why Potato?
          </h1>
          <p className="font-circe text-lg text-gray-600 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
          <hr className="border-t-2 border-gray-300 w-24 mx-auto" />
        </div>

        {/* Versatile Section */}
        <div className="mb-12">
          <h3 className="font-dela-gothic-one text-2xl md:text-3xl text-center mb-8">
            Extremely versatile
          </h3>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-4 bg-[#FFFBF8] rounded-lg shadow-sm">
                {/* Bullet Point */}
                <div className="bg-amber-500 w-3 h-3 rounded-full mt-2 mr-4"></div>
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