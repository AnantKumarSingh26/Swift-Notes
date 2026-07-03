import React, { useState } from 'react';
import Card from './Card'; // Import your existing Card component (modify prop names if data structure is different)
import './carousel.css';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"; // Use react-icons for arrows like image_1.png

const PerspectiveCarousel = ({ cardDataList }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the centered (big) card index

  // Simple navigation functions
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? cardDataList.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === cardDataList.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to apply position-based classes conditionally
  const getPositionClass = (index) => {
    const totalCards = cardDataList.length;
    
    // Middle Card (Big and Centered)
    if (index === activeIndex) return 'card-active'; 
    
    // Check if the card is immediately left of the active card (including circular cases)
    if ((index === activeIndex - 1) || (activeIndex === 0 && index === totalCards - 1)) {
        return 'card-side-left';
    }

    // Check if the card is immediately right of the active card (including circular cases)
    if ((index === activeIndex + 1) || (activeIndex === totalCards - 1 && index === 0)) {
        return 'card-side-right';
    }

    // Any other cards not visible should be hidden and shifted far
    return 'card-hidden';
  };

  return (
    <div className="carousel-container-outer">
        {/* Navigation Arrows - styled to float */}
        <button className="carousel-btn prev-btn" onClick={handlePrev}><LuChevronLeft /></button>
        <button className="carousel-btn next-btn" onClick={handleNext}><LuChevronRight /></button>
        
        {/* Container that defines the perspective scope */}
        <div className="carousel-perspective-wrapper">
          <div className="carousel-inner-track">
            {cardDataList.map((data, index) => {
              const positionClass = getPositionClass(index);
              
              return (
                <div key={data.id} className={`carousel-card-container ${positionClass}`}>
                    {/* The actual Card component from your code */}
                    <Card cardData={data} />
                    
                    {/* Add a dimming overlay like image_1.png for non-active cards */}
                    <div className="card-dim-overlay" />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Pagination Dots like reference UI */}
        <div className="carousel-pagination">
            {cardDataList.map((_, index) => (
                <span key={index} className={`dot ${index === activeIndex ? 'dot-active' : ''}`}></span>
            ))}
        </div>
    </div>
  );
};

export default PerspectiveCarousel;