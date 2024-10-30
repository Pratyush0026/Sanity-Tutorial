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
    // Fetch text content from Sanity
    client.fetch<AboutData>(`*[_type == "about"][0]{
      title,
      description,
      quote
    }`).then((data: AboutData) => setAboutData(data));
  }, []);

  if (!aboutData) return null;

  return (
    <section className="bg-[#F9F4EC] py-12 px-6 md:px-20 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-8">{aboutData.title}</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
        <div className="flex-1 text-gray-700 space-y-6">
          <p className="italic text-lg">“{aboutData.quote}”</p>
          <p>{aboutData.description}</p>
        </div>

        {/* Static Images */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-0">
          <img src="https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.jpg?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=" alt="Image 1" className="rounded-md" />
          <img src="https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.jpg?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=" alt="Image 2" className="rounded-md" />
        </div>
      </div>
    </section>
  );
}
