// src/components/HorizontalScrollComponent.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollComponent = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Calculate the total width of the scroll container
    const totalWidth = scrollContainer.scrollWidth - window.innerWidth;

    // Set up GSAP ScrollTrigger
    gsap.to(scrollContainer, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top top',
        end: `+=${totalWidth}`,
        scrub: 1, // Controls the smoothness of the scroll animation
      },
    });
  }, []);

  return (
    <div className="horizontal-scroll-container" ref={scrollContainerRef}>
      {/* Images go here */}
        
      {/* Add more images as needed */}
    </div>
  );
};

export default HorizontalScrollComponent;
