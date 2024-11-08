

import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";
import { Suspense } from "react";
import ErrorBoundaryWrapper from "@/components/ErrorBoundaryWrapper";
import { Post } from "../../typing"; 
import Link from "next/link";

export const revalidate = 10;

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
    summary, title, image,
    "slug": slug.current
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <ErrorBoundaryWrapper>
      <main className="flex flex-col items-center min-h-screen bg-[#f6dcb5] px-6 pt-5 pb-8">
        {/* Heading */}
        <h1 className="text-2xl font-serif  my-12 text-start text-[#5b4635] dark:text-light sm:text-3xl lg:text-5xl">
          Upcoming Events
        </h1>

        {/* Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl">
          <Suspense fallback={<div>Loading posts...</div>}>
            {posts.map((post) => (
              <BlogCard post={post} key={post.slug.current} />
            ))}
          </Suspense>
        </section>

        {/* "See All Events" Button */}
        <div className="mt-14">
          <Link
            href="/events"
            className="px-6 py-2 border border-dark/70 dark:border-light/70 rounded-full text-dark dark:text-light font-semibold hover:bg-dark/10 dark:hover:bg-light/10 transition"
          >
            See All Events →
          </Link>
        </div>
      </main>
    </ErrorBoundaryWrapper>
  );
}
