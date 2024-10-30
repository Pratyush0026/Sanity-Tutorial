// components/NewsletterSection.tsx

import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section className="relative w-full h-[60vh] text-white flex items-center justify-center">
      <Image src="https://media.istockphoto.com/id/517235492/photo/cambridge-university-top-view.jpg?s=2048x2048&w=is&k=20&c=JK1DGIbnJ22wCojFj573QJEBmUbLiXfWrADzFXN2Vhk=" alt="Newsletter Background" layout="fill" objectFit="cover" className="brightness-50" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Newsletter</h2>
        <p className="mt-2 text-lg">Stay Updated with ISS</p>
        <div className="mt-6 flex">
          <input type="email" placeholder="Email" className="px-4 py-2 rounded-l-md outline-none text-gray-800" />
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
