import React from 'react';
import { Link } from 'react-router-dom';
import data from './data/post.js'; 

function PostCard() {
  // Using useState to manage posts state
  const [posts, setPosts] = useState(data);

  return (
    // Rendering the post cards
    <div className="post-container">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <img src={post.image} alt={post.title} className="post-image" />
          <div className="post-content">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-meta">
              <span className="post-author">{post.author}</span>
              <span className="post-date">{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;