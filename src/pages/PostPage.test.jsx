import { render, screen } from '@testing-library/react';
import { expect, it, describe, vi } from 'vitest';
import PostPage from '../pages/PostPage';

// --- MOCKING SETUP ---

// 1. MOCK THE useParams FUNCTION FROM react-router-dom
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual, 
    // This defines the mocked function
    useParams: vi.fn(), 
  };
});

// 2. GET THE MOCKED useParams FUNCTION
// Using vi.mocked to get the typed mocked function
const mockUseParams = vi.mocked(require('react-router-dom').useParams);

// 3. Import the MOCKED posts data (using .js extension)
import posts from '../data/posts.js'; 

// --- TEST SUITE ---

describe('PostPage Component Tests', () => {
    
  // --- Test 1: Successful Render ---
  it('1. Renders the correct post content for a valid ID (ID 1)', () => {
    // Set the return value for THIS specific test
    mockUseParams.mockReturnValue({ id: '1' });

    render(<PostPage />);
    
    const expectedPost = posts.find(p => p.id === 1);
    
    // Check if the post title is on the screen
    expect(screen.getByRole('heading', { name: expectedPost.title })).toBeInTheDocument();
  });

  // --- Test 2: Not Found State ---
  it('2. Renders "Post Not Found" for an invalid ID', () => {
    // Set the return value for THIS specific test
    mockUseParams.mockReturnValue({ id: '999' });

    render(<PostPage />);
    
    // Check if the "Post Not Found!" heading is on the screen
    const notFoundMessage = screen.getByRole('heading', { name: /Post Not Found!/i });
    expect(notFoundMessage).toBeInTheDocument();
  });
});