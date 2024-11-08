import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  const galleryRows = [
    [
      { size: "small", alt: "Students cheering in library", id: 1 },
      { size: "large", alt: "Conference meeting with diverse group", id: 2 },
      { size: "small", alt: "Audience members", id: 3 }
    ],
    [
      { size: "small", alt: "Meeting attendees", id: 4 },
      { size: "large", alt: "Group discussion", id: 5 },
      { size: "small", alt: "Students in hallway", id: 6 }
    ]
  ];

  return (
    <section className="bg-[#F9F4EC] py-8 px-4 md:py-12 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#2C1810] text-4xl font-serif mb-8 ml-2">Gallery</h2>
        
        {/* Gallery Grid */}
        <div className="flex flex-col gap-4">
          {galleryRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col md:flex-row gap-4 w-full h-[250px] md:h-[300px]">
              {row.map((image, imageIndex) => (
                <div 
                  key={`${rowIndex}-${imageIndex}`} 
                  className={`relative rounded-lg overflow-hidden h-full ${
                    image.size === "large" 
                      ? "w-full md:w-[50%]" 
                      : "w-full md:w-[25%]"
                  }`}
                >
                  <img
                    src={`https://picsum.photos/800/600?random=${image.id}`}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#2C1810] hover:text-[#4A3428] transition-colors"
          >
            VIEW ALL
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="translate-y-[1px]"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
