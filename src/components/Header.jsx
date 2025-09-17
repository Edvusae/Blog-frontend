import React from 'react';
import { Link } from 'react-router-dom'; // <-- ADD THIS LINE

function Header() {
  return (
    <header>
      {/* Blog Title/Logo */}
      <h1>My Awesome Blog</h1>

      {/* Navigation Links */}
      <nav>
        {/* Use the Link component instead of <a> */}
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;