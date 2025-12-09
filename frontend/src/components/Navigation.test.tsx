import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import '@testing-library/jest-dom';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href, className }: { children: React.ReactNode, href: string, className: string }) => {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
});

describe('Navigation', () => {
  const mockSections = [
    { id: 'about', title: 'About' },
    { id: 'services', title: 'Services' },
  ];

  it('renders Home link', () => {
    render(<Navigation sections={mockSections} currentPath="/" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders section links', () => {
    render(<Navigation sections={mockSections} currentPath="/" />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('highlights the Home link when currentPath is "/"', () => {
    render(<Navigation sections={mockSections} currentPath="/" />);
    expect(screen.getByText('Home')).toHaveClass('underline');
    expect(screen.getByText('About')).not.toHaveClass('underline');
  });

  it('highlights the correct section link when currentPath matches', () => {
    render(<Navigation sections={mockSections} currentPath="/profile/services" />);
    expect(screen.getByText('Home')).not.toHaveClass('underline');
    expect(screen.getByText('About')).not.toHaveClass('underline');
    expect(screen.getByText('Services')).toHaveClass('underline');
  });

  it('applies basic navigation styling', () => {
    const { container } = render(<Navigation sections={mockSections} currentPath="/" />);
    expect(container.firstChild).toHaveClass('flex justify-center space-x-8 py-4 bg-white/50 shadow-md rounded-lg');
  });
});
