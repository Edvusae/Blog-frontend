import { data } from "react-router-dom";
import PostCard from "../components/PostCard";
import React from "react";

function HomePage() {
  const posts = data;

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
