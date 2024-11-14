import { useState, useEffect } from 'react';
import VideoSlider from './VideoSlider';

const VideoSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // Function to determine slides per view based on screen width
  function getSlidesPerView() {
    return window.innerWidth < 640 ? 1 : 2; // 1 slide for all screen sizes
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

  const videoCards = [
    <VideoSlider key={1} video={"https://www.youtube.com/embed/N9ufAQySCNg?si=Hx2v668NN7gtQGuj"}/>,
    <VideoSlider key={2} video={"https://www.youtube.com/embed/MpB8elsxbDI?si=Gr_MXqvyQyOmTsJ5" }/>,
    <VideoSlider key={3} video={"https://www.youtube.com/embed/rzkv6b_YEys?si=WZZY5h3vhBiX-Oz3" }/>,
    <VideoSlider key={4} video={"https://www.youtube.com/embed/iBkTVto3osE?si=VHgI8zPNl9e60OjF" }/>
  ];


   // Autoplay effect
  //  useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     moveSlide(1); // Move to the next slide every 3 seconds
  //   }, 3000);

  //   return () => clearInterval(intervalId); // Clear interval on unmount
  // }, [currentIndex, slidesPerView]);


  const moveSlide = (direction) => {
    const totalSlides = videoCards.length;
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = totalSlides - slidesPerView; // Go to end if at the beginning
      } else if (newIndex >= totalSlides) {
        newIndex = 0; // Reset to start if at the end
      }
      return newIndex;
    });
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Slider container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {videoCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-2 "
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div
        className={`absolute ${slidesPerView === 1 ? 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-2' : '-top-20 right-0'} flex space-x-2`}
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
            currentIndex === videoCards.length - slidesPerView ? 'text-[#BD1F17]' : 'text-black'
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

export default VideoSlides;
