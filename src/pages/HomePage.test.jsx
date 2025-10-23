import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, it, describe } from 'vitest';
import HomePage from '../pages/HomePage';

// Import the MOCKED posts data (using .js extension)
import posts from '../data/posts.js'; 

const setup = () => {
  render(
    // Wrap HomePage with BrowserRouter for routing context
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe('HomePage Component Tests', () => {

  it('1. Renders the title of every post in the mock data', () => {
    setup();
    
    // Iterate through each post in the mocked posts data
    posts.forEach(post => {
      // Assertion: Check that the title text is visible in the document
      const postTitle = screen.getByText(post.title);
      expect(postTitle).toBeInTheDocument();
    });
  });

  it('2. Renders a "Read More" button for every post', () => {
    setup();

    // Query all "Read More" buttons
    const readMoreButtons = screen.queryAllByRole('link', { name: /Read More/i });
    
    // Assertion: The number of "Read More" buttons should equal the number of posts
    expect(readMoreButtons.length).toBe(posts.length);
  });
});