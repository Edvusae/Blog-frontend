import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          By {post.author} on {post.date}
        </h6>
        <p className="card-text">
          {post.content.substring(0, 100)}... {/* Display a short snippet */}
        </p>
        <Link to={`/posts/${post.id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;