import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, it, describe } from 'vitest';
import Header from './Header'; // Adjust path if necessary

// Helper function to wrap the component in a Router context
const setup = () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe('Header Component Tests', () => {

  it('1. Renders the correct blog title text', () => {
    setup();
    // Get the element by its text content
    const titleElement = screen.getByText(/My Awesome Frontend Blog/i); 
    
    // Assert that the element is visible in the document
    expect(titleElement).toBeInTheDocument();
  });

  it('2. The blog title links correctly to the home path ("/")', () => {
    setup();
    // Get the element by its role (link) and the text content
    const homeLink = screen.getByRole('link', { name: /My Awesome Frontend Blog/i });
    
    // Assert that the 'href' attribute of the link is set to the root path
    expect(homeLink).toHaveAttribute('href', '/');
  });

});