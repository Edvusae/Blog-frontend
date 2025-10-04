import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts';

function PostPage() {
  // 1. Get the ID from the URL parameter
  const { id } = useParams();

  // 2. Find the post that matches the ID
  // ParseInt is crucial because URL params are strings, but your post.id is a number.
  const post = posts.find(p => p.id === parseInt(id));

  // 3. Conditional Rendering for "Not Found"
  if (!post) {
    return (
      <div className="container mt-5">
        <h1 className="text-danger">Post Not Found! (Error 404)</h1>
        <p>The post you are looking for does not exist.</p>
      </div>
    );
  }

  // 4. Display the full post content
  return (
    <div className="container mt-5">
      <h1 className="mb-3">{post.title}</h1>
      <p className="lead text-muted">
        By **{post.author}** on {post.date}
      </p>
      <hr className="my-4" />
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostPage;