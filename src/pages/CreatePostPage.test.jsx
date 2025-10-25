import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, describe, vi } from 'vitest';
import CreatePostPage from '../pages/CreatePostPage';

// --- 1. Mock External Dependencies ---

// Mock axios to control the network response
import axios from 'axios';
vi.mock('axios');
const mockedAxios = vi.mocked(axios);

// Mock useNavigate from react-router-dom to check for redirection
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// --- Test Setup ---
const setup = () => {
  render(<CreatePostPage />);
};

describe('CreatePostPage Component Tests', () => {

  // Reset the mock functions before each test to prevent cross-contamination
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('1. Renders the form fields and a submit button', () => {
    setup();
    
    // Check for the Title input field
    expect(screen.getByPlaceholderText(/Enter Post Title/i)).toBeInTheDocument();
    
    // Check for the Content textarea
    expect(screen.getByPlaceholderText(/Write your post content here/i)).toBeInTheDocument();
    
    // Check for the Submit button
    expect(screen.getByRole('button', { name: /Submit Post/i })).toBeInTheDocument();
  });

  it('2. Submitting the form calls the API with the correct data and redirects on success', async () => {
    // 2a. Set up the successful mock response from the server
    mockedAxios.post.mockResolvedValue({ data: { message: 'Post created successfully' } });

    setup();
    const user = userEvent.setup();

    // 2b. Simulate user input
    const titleInput = screen.getByPlaceholderText(/Enter Post Title/i);
    const contentInput = screen.getByPlaceholderText(/Write your post content here/i);
    const submitButton = screen.getByRole('button', { name: /Submit Post/i });

    await user.type(titleInput, 'Test Title for Interview');
    await user.type(contentInput, 'This is the test content body.');
    
    // 2c. Simulate form submission
    await user.click(submitButton);

    // 2d. Assert the Axios request was made correctly
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:5000/api/posts', // The API endpoint
      { title: 'Test Title for Interview', content: 'This is the test content body.' } // The payload
    );

    // 2e. Assert that navigation was called to redirect the user
    // The component should navigate to the home page ('/')
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});