// components/AboutUsSection.tsx
"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface AboutData {
  title: string;
  description: string;
  quote: string;
}

export default function AboutUsSection() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    client
      .fetch<AboutData>(`*[_type == "about"][0]{
      title,
      description,
      quote
    }`)
      .then((data: AboutData) => setAboutData(data));
  }, []);

  if (!aboutData) return null;

  return (
    <section className="bg-[#F9F4EC] py-8 sm:py-12 px-4 sm:px-6 md:px-20 lg:px-32 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8 text-[#423D33] italic">
        {aboutData.title}
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 xl:space-x-16">
        <div className="flex-1 flex flex-col items-center lg:items-start space-y-6 mb-8 lg:mb-0">
          {/* Left side with quote and logo */}
          <div className="w-full flex justify-center lg:justify-start">
            <img
              src="./about1.png" 
              alt="Logo"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover bg-transparent mb-4 lg:mb-6"
            />
          </div>
          <p className="italic text-base sm:text-lg text-gray-700 text-center lg:text-left px-4 sm:px-0">
            “{aboutData.quote}”
          </p>
        </div>

        <div className="flex-1 space-y-4 sm:space-y-6 text-gray-700">
          {/* Right side with description and images */}
          <p className="text-lg sm:text-xl font-medium">{aboutData.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="./abt2.png" 
              alt="Description Image 1"
              className="w-full h-52 sm:h-60 md:h-72 lg:h-80 rounded-md object-cover"
            />
            <img
              src="./abt3.png" 
              alt="Description Image 2"
              className="w-full h-52 sm:h-60 md:h-72 lg:h-80 rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
