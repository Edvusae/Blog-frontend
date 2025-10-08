import React from 'react';
import { Link } from 'react-router-dom';

// This component renders a card for an individual blog post
function PostCard({ post }) {
  // Destructure the post prop to get individual post details
  const { title, author, date, content, id } = post;

  return (
    <div className="card mb-4">
      {<img src={post.image} alt={title} className="card-img-top" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          By {author} on {date}
        </h6>
        <p className="card-text">
          {content.substring(0, 100)}... {/* Display a short snippet */}
        </p>
        <Link to={`/posts/${id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;