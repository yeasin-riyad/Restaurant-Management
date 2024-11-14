import React, { useState } from 'react';

const About = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <section className="py-12 lg:py-20 bg-customColor dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <h2 className="text-3xl lg:text-5xl font-bold font-bebas text-gray-800 dark:text-white">
          About Our Restaurant
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-roboto">
          Experience the rich flavors and warm hospitality of Saudi Arabia, where every dish tells a story.
        </p>

        {/* About content */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-8 lg:space-y-0">
          {/* About Image with Loading Spinner */}
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg relative">
            {isImageLoading && (
          
            <div className='text-black dark:text-white'>Image Loading......</div>
            )}
            <img
              src="https://i.ibb.co.com/b7GvL4P/pexels-igor-starkov-233202-1307698.jpg"
              alt="Authentic Saudi Arabian Dishes"
              className={`w-full h-full object-cover ${isImageLoading ? 'hidden' : 'block'}`}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>

          {/* About Description */}
          <div className="w-full font-roboto lg:w-1/2">
            <h3 className="text-2xl font-semibold font-bebas text-gray-800 dark:text-white">
              Welcome to Our Culinary Journey
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              At our restaurant, we blend traditional Saudi Arabian flavors with a modern twist. We are dedicated to delivering an exceptional dining experience, using fresh, locally sourced ingredients that highlight the essence of our rich culinary heritage.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Our chefs bring a passion for innovation to the table, presenting dishes that celebrate Saudi culture, while offering a menu that caters to diverse tastes.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              From mouth-watering Kabsa to perfectly spiced Shawarma, every bite captures the warmth and richness of our land. Join us for a culinary adventure that stays with you.
            </p>

            {/* Signature/Highlighting Saudi Hospitality */}
            <div className="mt-8 font-roboto">
              <h4 className="text-lg font-medium font-bebas text-gray-800 dark:text-white">
                Bringing You the Heart of Saudi Arabia
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Join us and experience Saudi Arabia's renowned hospitality where our guests are treated as family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
