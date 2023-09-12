import { fetchPosts, getComments } from "@/Services/api-jsonplacer";
import CardPost from "@/components/CardPost";
import { data } from "autoprefixer";
import React from "react";

async function page() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col  p-5 divide-y divide-gray-100  max-w-2xl">
        {posts.map((post) => (
          <CardPost
            key={post.id}
            title={post.title}
            description={post.body}
            nameuser={post.id}
            lengtComments={5}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
