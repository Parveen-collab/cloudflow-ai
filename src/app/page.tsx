"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
}

export default function Home() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error instanceof Error) {
    return <p>{error.message}</p>;
  }

  return (
    <main
      style={{
        padding: 40,
      }}
    >
      <h1>TanStack Query Working ✅</h1>

      {data?.map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </main>
  );
}