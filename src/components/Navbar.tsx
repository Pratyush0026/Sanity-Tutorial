import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image 
        src="/background-image.jpg" 
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Navbar */}
      <header className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl mt-4 px-4 py-2 bg-[#f6dcb5] dark:bg-gray-900/70 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-between z-10">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="ISS Club Logo" width={40} height={40} />
          <Link href="/" className="text-lg md:text-2xl font-bold text-amber-900 dark:text-white">
            ISS Club
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8 font-semibold text-gray-600 dark:text-gray-300">
          <Link href="/home">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/games">Games</Link>
        </nav>

        {/* Right Side: Search Icon, Language Toggle, Apply Button */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 dark:text-gray-300">
            <FaSearch size={20} />
          </button>
          <Link href="/games" className="font-bold text-gray-600 dark:text-gray-300">
            EN
          </Link>
          <Link href="/apply"  className="hidden sm:flex bg-yellow-500 text-white py-1 px-4 rounded-md font-medium hover:bg-yellow-600">
            Apply Now
          </Link>
        </div>
      </header>
    </div>
  );
}
