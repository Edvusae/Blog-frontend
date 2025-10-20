import { render, screen } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import PostPage from '../pages/PostPage';

// --- MOCKING SETUP ---

// 1. Mock the useParams hook to control the ID returned by the Router.
// We are mocking the entire 'react-router-dom' module.
vi.mock('react-router-dom', async (importOriginal) => {
  // Use a mock function that we can control in each test
  const actual = await importOriginal();
  return {
    ...actual, // Keep all other original exports (like BrowserRouter, Link)
    useParams: vi.fn(), // Mock only the useParams function
  };
});

// 2. Import the MOCKED posts data (for convenience in assertions)
// In a real scenario, you'd mock the data import as well to isolate the test, 
// but for this exercise, we'll use the real imported data for simplicity.
import posts from '../data/posts.js'; 

// --- TEST SUITE ---

describe('PostPage Component Tests', () => {

  // Get the mocked useParams function to set its return value
  const mockUseParams = vi.mocked(require('react-router-dom').useParams);

  it('1. Renders the correct post content for a valid ID (ID 1)', () => {
    // Tell useParams to return an ID that exists in our mock data
    mockUseParams.mockReturnValue({ id: '1' });

    render(<PostPage />);
    
    // Find the post object we expect to be displayed
    const expectedPost = posts.find(p => p.id === 1);
    
    // Assertion 1: Check if the post title is on the screen
    expect(screen.getByRole('heading', { name: expectedPost.title })).toBeInTheDocument();
    
    // Assertion 2: Check if the post content is on the screen (use a small part of the content)
    expect(screen.getByText(new RegExp(expectedPost.content.substring(0, 50), 'i'))).toBeInTheDocument();
  });

  it('2. Renders "Post Not Found" for an invalid ID', () => {
    // Tell useParams to return an ID that does NOT exist
    mockUseParams.mockReturnValue({ id: '999' });

    render(<PostPage />);
    
    // Check for the "Post Not Found" message
    const notFoundMessage = screen.getByRole('heading', { name: /Post Not Found!/i });
    expect(notFoundMessage).toBeInTheDocument();
    
    // Additionally, ensure that no post titles are displayed
    expect(screen.queryByText(posts[0].title)).not.toBeInTheDocument();
  });
});