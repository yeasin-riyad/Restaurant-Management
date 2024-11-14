import { useState, useEffect } from 'react';
import Heading from '../Heading';

const Testimonials = () => {
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
  const testimonials = [
    { id: 1, name: "Sarah", review: "An unforgettable experience with amazing flavors!", image: "https://i.ibb.co.com/qkCsQsY/pexels-ali-dashti-506667798-17650197-1.jpg" },
    { id: 2, name: "James", review: "The ambiance was incredible, and the food was perfect.", image: "https://i.ibb.co.com/ydQ181k/pexels-bertellifotografia-16120160-1.jpg" },
    { id: 3, name: "Korim", review: "The ambiance was incredible, and the food was perfect.", image: "  https://i.ibb.co.com/b5kNxmm/pexels-alejandro-aznar-155337093-29389694-1.jpg" },
    { id: 4, name: "Rahim", review: "The ambiance was incredible, and the food was perfect.", image: "https://i.ibb.co.com/ydQ181k/pexels-bertellifotografia-16120160-1.jpg" },
    { id: 5, name: "Sarah", review: "An unforgettable experience with amazing flavors!", image: "https://i.ibb.co.com/qkCsQsY/pexels-ali-dashti-506667798-17650197-1.jpg" },
    { id: 6, name: "James", review: "The ambiance was incredible, and the food was perfect.", image: "https://i.ibb.co.com/ydQ181k/pexels-bertellifotografia-16120160-1.jpg" },
    { id: 7, name: "Korim", review: "The ambiance was incredible, and the food was perfect.", image: "  https://i.ibb.co.com/b5kNxmm/pexels-alejandro-aznar-155337093-29389694-1.jpg" },
    { id: 8, name: "Rahim", review: "The ambiance was incredible, and the food was perfect.", image: "https://i.ibb.co.com/ydQ181k/pexels-bertellifotografia-16120160-1.jpg" },

  ];

  // Function to move the slide
  const moveSlide = (direction) => {
    const totalSlides = testimonials.length;
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
      <Heading className={"lg:text-4xl text-center"} header={"CUSTOMER TESTIMONIALS"}/>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(currentIndex / slidesPerView) * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 ${slidesPerView === 1 ? 'w-full' : 'w-1/4'} p-2 shadow-lg`}
            >
              <div className="text-center bg-white shadow-md rounded-lg p-6 mt-3 lg:mt-6 ">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto" />
                <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
                <p className="mt-2 text-gray-600">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div
        className={`absolute ${slidesPerView === 1 ? 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2' : 'top-1 right-10'} flex space-x-2`}
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
            currentIndex === testimonials.length - slidesPerView ? 'text-[#BD1F17]' : 'text-black'
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

export default Testimonials;
