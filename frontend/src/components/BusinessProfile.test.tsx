import React from 'react';
import { render, screen } from '@testing-library/react';
import BusinessProfile from './BusinessProfile';

describe('BusinessProfile', () => {
  const mockProps = {
    title: 'Test Business Title',
    tagline: 'Test Tagline',
    descriptionHtml: '<p>This is a test description.</p>',
  };

  it('renders the title correctly', () => {
    render(<BusinessProfile {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the tagline correctly', () => {
    render(<BusinessProfile {...mockProps} />);
    expect(screen.getByText(mockProps.tagline)).toBeInTheDocument();
  });

  it('renders the description HTML correctly', () => {
    render(<BusinessProfile {...mockProps} />);
    expect(screen.getByText('This is a test description.')).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    const { container } = render(<BusinessProfile {...mockProps} />);
    // Check for classes on the main div
    expect(container.firstChild).toHaveClass('text-center');
    // Check for classes on the title
    expect(screen.getByText(mockProps.title)).toHaveClass('text-5xl font-playfair-display mb-4');
    // Check for classes on the tagline
    expect(screen.getByText(mockProps.tagline)).toHaveClass('text-xl font-merriweather italic mb-8');
  });
});
