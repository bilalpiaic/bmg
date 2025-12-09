import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section', () => {
  const mockProps = {
    title: 'Test Section Title',
    contentHtml: '<div>This is some section content.</div>',
  };

  it('renders the title correctly', () => {
    render(<Section {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the content HTML correctly', () => {
    render(<Section {...mockProps} />);
    expect(screen.getByText('This is some section content.')).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    const { container } = render(<Section {...mockProps} />);
    // Check for classes on the main div
    expect(container.firstChild).toHaveClass('my-8');
    // Check for classes on the title
    expect(screen.getByText(mockProps.title)).toHaveClass('text-3xl font-playfair-display mb-4');
  });
});
