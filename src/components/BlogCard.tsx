

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../../typing";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <section className="flex flex-col h-[520px] rounded bg-[#f4e9d7] dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section */}
      <div className="relative h-[40%]">
        <Image
          src={urlFor(post.image).url()} 
          alt={post.title || "Blog Image"} 
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title, Summary, and Event Details */}
      <div className="flex flex-col justify-between gap-2 p-4 h-[40%]">
        <h2 className="text-lg font-semibold text-dark dark:text-light leading-tight mb-1">
          {post.title || "Et viverra odio vulputate."}
        </h2>
        <p className="text-dark/70 dark:text-light/70 text-sm mb-3">
          {post.summary || "Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate."}
        </p>

        {/* Static Event Details */}
        <div className="flex items-center text-xs font-medium text-dark/70 dark:text-light/70">
          <div className="text-center mr-4">
            <p className="text-xl font-bold">28</p>
            <p>Sept</p>
          </div>
          <div>
            <p>Conference Room, Berkley</p>
            <p>8:00 AM - 12:00 PM</p>
          </div>
        </div>

        {/* RSVP Button */}
        <Link
          href={`/events/${post.slug}`}
          className="block px-4 py-2 mt-4 text-center bg-transparent border border-dark/70 dark:border-light/70 rounded text-dark dark:text-light font-semibold hover:bg-dark/10 dark:hover:bg-light/10"
        >
          RSVP
        </Link>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-2 block px-4 py-2 text-center bg-accentDarkSecondary rounded text-dark font-semibold"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
