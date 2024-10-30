"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.webp?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=", 
  "https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.webp?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=", 
  "https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.webp?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=", 

];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Slider */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Campus view ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
          </div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-lg md:text-xl mt-4 text-white">
          Lorem ipsum dolor sit amet consectetur. Mauris ipsum sed tincidunt vel.
        </p>
        <Link href="/apply" className="mt-6 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
          RSVP
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
