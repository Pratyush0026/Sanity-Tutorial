// Home.tsx
import BlogCard from "@/components/BlogCard";
import { client } from "@/sanity/lib/client";
import { Suspense } from "react";
import ErrorBoundaryWrapper from "@/components/ErrorBoundaryWrapper";
import { Post } from "../../typing"; 

export const revalidate = 10;

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
    summary, title, image,
    "slug": slug.current
  }`;

  const posts: Post[] = await client.fetch(query);

  return (
    <ErrorBoundaryWrapper>
      <main className="flex min-h-screen flex-col">
        <h1 className="text-2xl font-bold uppercase my-12 text-center text-red-950 dark:text-light sm:text-3xl lg:text-5xl">
          Upcoming Events
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Suspense fallback={<div>Loading posts...</div>}>
            {posts.map((post) => (
              <BlogCard post={post} key={post.slug.current} />
            ))}
          </Suspense>
        </section>
      </main>
    </ErrorBoundaryWrapper>
  );
}
