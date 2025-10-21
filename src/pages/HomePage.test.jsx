import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, it, describe } from 'vitest';
import HomePage from '../pages/HomePage';

// Import the MOCKED posts data (using .js extension)
import posts from '../data/posts.js'; 

const setup = () => {
  render(
    // HomePage renders PostCard, which uses <Link>, so it must be wrapped
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe('HomePage Component Tests', () => {

  it('1. Renders the title of every post in the mock data', () => {
    setup();
    
    // Loop through the mock data and assert that each post's title is present
    posts.forEach(post => {
      // Assertion: Check that the title text is visible in the document
      const postTitle = screen.getByText(post.title);
      expect(postTitle).toBeInTheDocument();
    });
  });

  it('2. Renders a "Read More" button for every post', () => {
    setup();

    // Use queryAllByRole to find all elements that act as links/buttons containing the text "Read More"
    const readMoreButtons = screen.queryAllByRole('link', { name: /Read More/i });
    
    // Assertion: The number of "Read More" buttons should equal the total number of posts
    expect(readMoreButtons.length).toBe(posts.length);
  });
});