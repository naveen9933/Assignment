import React, { useState, useRef } from 'react';
import Explore1 from './explore/explore1';
import Explore2 from './explore/explore2';

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
      setSlideIndex((prevIndex) => (prevIndex === 1 ? 1 : prevIndex + 1));
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right
      setSlideIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    }
  };

  return (
    <div
      ref={sliderRef} // Attach reference to the slider container
      className="relative w-full h-[750px] overflow-hidden mt-[100px]" // Styling for the slider container
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
          <Explore1 /> {/* First slide component */}
        </div>
        <div className="w-full flex-shrink-0 h-full">
          <Explore2 /> {/* Second slide component */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
