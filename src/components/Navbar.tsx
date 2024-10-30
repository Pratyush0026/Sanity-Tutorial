// components/Navbar.tsx

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#F9F4EC] dark:bg-[#1A1A1A] sticky top-0 z-10 backdrop-blur-md">
      <div className="flex items-center space-x-6">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          ISS Club
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 font-semibold text-gray-600 dark:text-gray-300">
          <Link href="/events">Events</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/games">Games</Link>
        </nav>
      </div>

      {/* Social Media and Theme Toggle */}
      <div className="flex items-center space-x-6">
        <ThemeToggle />
        <Link href="/apply" className="bg-yellow-500 text-white py-1 px-3 rounded-md font-medium hover:bg-yellow-600">
          Apply Now
        </Link>
      </div>
    </header>
  );
}
