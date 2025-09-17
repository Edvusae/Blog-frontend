import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [posts, setPosts] = useState([]); // This is a state variable to hold our posts. It starts as an empty list.

  useEffect(() => {
    // This function runs right after the component first appears on the screen.
    const fetchPosts = async () => {
      try {
        // Tell Axios to make a GET request to your backend's API endpoint.
        const response = await axios.get('http://localhost:5000/api/posts'); 

        // The data from the server is in response.data. We use setPosts to save it.
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); // Call the function to fetch the posts.
  }, []); // The empty array here means this effect only runs once when the component loads.

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recent Blog Posts</h2>
      {/* This is where we will loop through our posts and display them! */}
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;