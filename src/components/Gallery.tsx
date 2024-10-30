import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="bg-[#F9F4EC] py-12 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((image) => (
          <Image
            key={image}
            src={`https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.jpg?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=`}
            alt={`Gallery Image ${image}`}
            width={300}
            height={200}
            className="rounded-md"
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          href="/gallery"
          className="px-6 py-2 border border-gray-800 rounded-md hover:bg-gray-800 hover:text-white"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
