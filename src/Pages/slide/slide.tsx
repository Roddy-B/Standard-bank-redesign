"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/slide1.png', alt: 'Image 1' },
  { src: '/slide2.jpg', alt: 'Image 2' },
  { src: '/slide3.jpg', alt: 'Image 3' },
  // ... more slides
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden"> {/* Full screen container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Slide;