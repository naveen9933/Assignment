import React, { useState, useRef } from 'react';
import Card1 from './cards/card1';
import Card2 from './cards/card2';
import Card3 from './cards/card3';
import Card4 from './cards/card4';

const Slider: React.FC = () => {
  // State to manage current slide index
  const [slideIndex, setSlideIndex] = useState(0);
  // Reference to the slider container element
  const sliderRef = useRef<HTMLDivElement>(null);
  // Reference to the starting touch position
  const touchStartX = useRef(0);
  // Reference to the ending touch position
  const touchEndX = useRef(0);

  // Event handler for touch start event
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Event handler for touch move event
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Event handler for touch end event
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setSlideIndex((prevIndex) => (prevIndex === 3 ? 3 : prevIndex + 1));
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right
      setSlideIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    }
  };

  return (
    <div
      ref={sliderRef} // Attach reference to the slider container
      className="relative w-full h-[750px] overflow-hidden my-[100px]" // Styling for the slider container
      onTouchStart={handleTouchStart} // Attach touch start event handler
      onTouchMove={handleTouchMove} // Attach touch move event handler
      onTouchEnd={handleTouchEnd} // Attach touch end event handler
    >
      {/* Slider content */}
      <div
        className="flex transition-transform duration-500 ease-in-out" // Styling for the slider content with transition effect
        style={{ transform: `translateX(-${slideIndex * 100}%)` }} // Dynamically adjust transform property to slide content
      >
        <div className="w-full flex-shrink-0 h-full">
          <Card1 />
        </div>
        <div className="w-full flex-shrink-0 h-full">
          <Card2 />
        </div>
        <div className="w-full flex-shrink-0 h-full">
          <Card3 />
        </div>
        <div className="w-full flex-shrink-0 h-full">
          <Card4 />
        </div>
      </div>
      {/* Slider navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"> 
        <div
          className={`w-3 h-3 rounded-full shadow-drop-black ${slideIndex === 0 ? 'bg-[#ED6705]' : 'bg-black'}`} // Conditional styling for navigation dot
          onClick={() => setSlideIndex(0)} // Event handler to navigate to the first slide
        ></div>
        <div
          className={`w-3 h-3 rounded-full shadow-drop-black ${slideIndex === 1 ? 'bg-[#ED6705]' : 'bg-black'}`} // Conditional styling for navigation dot
          onClick={() => setSlideIndex(1)} // Event handler to navigate to the second slide
        ></div>
        <div
          className={`w-3 h-3 rounded-full shadow-drop-black ${slideIndex === 2 ? 'bg-[#ED6705]' : 'bg-black'}`} // Conditional styling for navigation dot
          onClick={() => setSlideIndex(2)} // Event handler to navigate to the third slide
        ></div>
        <div
          className={`w-3 h-3 rounded-full shadow-drop-black ${slideIndex === 3 ? 'bg-[#ED6705]' : 'bg-black'}`} // Conditional styling for navigation dot
          onClick={() => setSlideIndex(3)} // Event handler to navigate to the fourth slide
        ></div>
      </div>
    </div>
  );
};

export default Slider;
