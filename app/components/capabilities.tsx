import React, { useState, useRef } from 'react';
import Capabilities1 from './capabilities/capabilities1';
import Capabilities2 from './capabilities/capabilities2';
import Capabilities3 from './capabilities/capabilities3';

const Slider: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0); // State to manage current slide index
  const sliderRef = useRef<HTMLDivElement>(null); // Reference to the slider container element
  const touchStartX = useRef(0); // Reference to the starting touch position
  const touchEndX = useRef(0); // Reference to the ending touch position

  // Event handler for touch start event
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX; // Update starting touch position
  };

  // Event handler for touch move event
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX; // Update ending touch position
  };

  // Event handler for touch end event
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setSlideIndex((prevIndex) => (prevIndex === 2 ? 2 : prevIndex + 1)); // Update slide index
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right
      setSlideIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1)); // Update slide index
    }
  };

  return (
    <div
      ref={sliderRef} // Attach reference to the slider container
      className="relative w-full h-[750px] overflow-hidden"
      onTouchStart={handleTouchStart} // Attach touch start event handler
      onTouchMove={handleTouchMove} // Attach touch move event handler
      onTouchEnd={handleTouchEnd} // Attach touch end event handler
    >
      {/* Slider content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }} // Dynamically adjust transform property to slide content
      >
        <div className="w-full flex-shrink-0 h-full">
          <Capabilities1 />
        </div>
        <div className="w-full flex-shrink-0 h-full">
          <Capabilities2 />
        </div>
        <div className="w-full flex-shrink-0 h-full">
          <Capabilities3 />
        </div>
      </div>
      {/* Slider navigation */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div
          className={`w-3 h-3 rounded-full shadow-drop-black ${slideIndex === 0 ? 'bg-[#ED6705]' : 'bg-black'}`}
          onClick={() => setSlideIndex(0)} // Event handler to navigate to the first slide
        ></div>
        <div
          className={`w-3 h-3 rounded-full shadow-drop-black ${slideIndex === 1 ? 'bg-[#ED6705]' : 'bg-black'}`}
          onClick={() => setSlideIndex(1)} // Event handler to navigate to the second slide
        ></div>
        <div
          className={`w-3 h-3 rounded-full shadow-drop-black ${slideIndex === 2 ? 'bg-[#ED6705]' : 'bg-black'}`}
          onClick={() => setSlideIndex(2)} // Event handler to navigate to the third slide
        ></div>
      </div>
    </div>
  );
};

export default Slider;
