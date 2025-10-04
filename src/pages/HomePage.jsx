import React from 'react';
import posts from '../data/posts'; // Your mock data
import PostCard from '../components/PostCard'; // Your reusable card component

function HomePage() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Map through the posts array and render a PostCard for each one */}
        {posts.map(post => (
          <div className="col-md-6 col-lg-4" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;