import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.webp?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=",
    "https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.webp?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=",
    "https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.webp?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk="
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover brightness-90"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0">
        <div className="h-full flex flex-col justify-end pb-32 px-8 md:px-16">
          <div className="relative">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between items-start space-y-4 md:space-y-0">
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. Mauris ipsum sed tincidunt vel.
              </p>
              <a 
                href="#rsvp" 
                className="px-6 md:px-8 py-2 md:py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded text-sm md:text-base"
              >
                RSVP
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
