import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';

const FoodSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // Function to determine slides per view based on screen width
  function getSlidesPerView() {
    return window.innerWidth < 640 ? 1 : 4; // 1 slide for small screens, 4 for large screens
  }

  // Update slidesPerView when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Array of FoodCard components
  const foodCards = [
    <FoodCard
      key="1"
      img="https://i.ibb.co.com/xJFLB18/Frame-1707478074-1.png"
      header="VEGETABLES BURGER"
      para="Barbecue Italian cuisine pizza"
    />,
    <FoodCard
      key="2"
      img="https://i.ibb.co.com/Qf4bC0b/pizza-1.png"
      header="SPECIAL PIZZA"
      para="Barbecue Italian cuisine pizza"
    />,
    <FoodCard
      key="3"
      img="https://i.ibb.co.com/J7BNYL9/french-fries-1.png"
      header="SPECIAL FRENCH FRIES"
      para="Barbecue Italian cuisine"
    />,
    <FoodCard
      key="4"
      img="https://i.ibb.co.com/CBPqyNz/fried-shrimp-prawn-cake-white-plate-1.png"
      header="CUISINE CHICKEN"
      para="Japanese Cuisine Chicken"
    />,
    <FoodCard
      key="5"
      img="https://i.ibb.co.com/xJFLB18/Frame-1707478074-1.png"
      header="VEGETABLES BURGER"
      para="Barbecue Italian cuisine pizza"
    />,
    <FoodCard
      key="6"
      img="https://i.ibb.co.com/Qf4bC0b/pizza-1.png"
      header="SPECIAL PIZZA"
      para="Barbecue Italian cuisine pizza"
    />,
    <FoodCard
      key="7"
      img="https://i.ibb.co.com/J7BNYL9/french-fries-1.png"
      header="SPECIAL FRENCH FRIES"
      para="Barbecue Italian cuisine"
    />,
    <FoodCard
      key="8"
      img="https://i.ibb.co.com/CBPqyNz/fried-shrimp-prawn-cake-white-plate-1.png"
      header="CUISINE CHICKEN"
      para="Japanese Cuisine Chicken"
    />
  ];

  // Function to move the slide
  const moveSlide = (direction) => {
    const totalSlides = foodCards.length;
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = totalSlides - slidesPerView; // Go to end if at the beginning
      } else if (newIndex > totalSlides - slidesPerView) {
        newIndex = 0; // Reset to start if at the end
      }
      return newIndex;
    });
  };

  // Autoplay effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlide(1); // Move to the next slide every 3 seconds
    }, 3000);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [currentIndex, slidesPerView]);

  return (
    <div className="relative w-full mt-5 mx-auto lg:mt-8">
      {/* Slider container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(currentIndex / slidesPerView) * 100}%)` }}
        >
          {foodCards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${slidesPerView === 1 ? 'w-full' : 'w-1/4'} p-2 shadow-lg`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div
        className={`absolute ${slidesPerView === 1 ? 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2' : '-top-28 right-0'} flex space-x-2`}
      >
        <button
          onClick={() => moveSlide(-1)}
          className={`${
            currentIndex === 0 ? 'text-[#BD1F17]' : 'text-black'
          } bg-white p-2 rounded-full shadow-md`}
        >
          {/* Left arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => moveSlide(1)}
          className={`${
            currentIndex === foodCards.length - slidesPerView ? 'text-[#BD1F17]' : 'text-black'
          } bg-white p-2 rounded-full shadow-md`}
        >
          {/* Right arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FoodSlides;
