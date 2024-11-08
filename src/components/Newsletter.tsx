import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section className="relative bg-[#E9DFD1] py-16 px-6 md:px-20 lg:px-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.webp?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk="
          alt="Newsletter Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
      </div>

      {/* Overlay and Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-2 text-white">
          Newsletter
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 mt-3">
          Stay Updated with ISS
        </h3>
        <p className="text-sm md:text-lg mb-6 text-white font-bold">
          Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate.
        </p>

        {/* Responsive Subscription Form */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-lg space-y-3 sm:space-y-0 sm:space-x-2">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:flex-grow px-4 py-3 text-[#5a3c2e] bg-[#F8F4EC] rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-[#5a3c2e] text-white font-semibold rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-[#3e2b1d] transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
