import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
  // These state variables will store the title and content from the form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // useNavigate is a tool to help us go to a new page after a post is created
  const navigate = useNavigate();

  // This function will run when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // This stops the page from reloading when the form is submitted

    const newPost = { title, content }; // Create an object with our form data

    try {
      // Send a POST request to your backend's API endpoint
      await axios.post('http://localhost:5000/api/posts', newPost);

      // If successful, navigate back to the homepage
      navigate('/');
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePostPage;