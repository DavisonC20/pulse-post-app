import { fetchPosts, getComments } from "@/Services/api-jsonplacer";
import CardPost from "@/components/CardPost";
import { data } from "autoprefixer";
import React from "react";
// Utilizamos server components
async function page() {
  //llamado de api
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col  p-5 divide-y divide-gray-100  max-w-2xl">
        {/* Se llama el componete para renderizarlo N veces de la data y le pasamos props */}
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
