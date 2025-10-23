import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { expect, it, describe, vi } from 'vitest';
import App from './App';

// Mock the child components so we can check if they were rendered
// We only need to check for the H1 tag on the HomePage and PostPage.
const MockHomePage = () => <h1>Home Page Content</h1>;
const MockPostPage = () => <h1>Post Page Content</h1>;

// Mock the components in the actual App.jsx to use our simplified mock versions
vi.mock('./pages/HomePage', () => ({ default: MockHomePage }));
vi.mock('./pages/PostPage', () => ({ default: MockPostPage }));
// Mock the Header since its rendering is verified in Header.test.jsx
vi.mock('./components/Header', () => ({ default: () => <nav>Header Nav</nav> }));


// Use a setup function to render App within MemoryRouter for testing routes
const setup = (initialRoute = '/') => {
  // MemoryRouter simulates the browser's URL bar, allowing us to control the route
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>
  );
};

describe('App Component (Routing) Tests', () => {

  it('1. Renders the Home Page content when navigating to the root path ("/")', () => {
    setup('/');
    
    // Assertion: Check for the unique H1 text from the MockHomePage
    expect(screen.getByText('Home Page Content')).toBeInTheDocument();
    
    // Double-check: Ensure the Post Page content is NOT rendered
    expect(screen.queryByText('Post Page Content')).not.toBeInTheDocument();
  });

  it('2. Renders the Post Page content when navigating to a dynamic post path ("/posts/:id")', () => {
    // We pass a specific post path to the MemoryRouter
    setup('/posts/123'); 
    
    // Assertion: Check for the unique H1 text from the MockPostPage
    expect(screen.getByText('Post Page Content')).toBeInTheDocument();
    
    // Double-check: Ensure the Home Page content is NOT rendered
    expect(screen.queryByText('Home Page Content')).not.toBeInTheDocument();
  });
});