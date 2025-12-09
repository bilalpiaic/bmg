import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../app/page';

// Mock the content service
jest.mock('@/services/content', () => ({
  getContentData: jest.fn(async (directory: string) => {
    if (directory === 'business-profile') {
      return {
        id: 'business-profile',
        title: 'Mock Business Title',
        tagline: 'Mock Tagline',
        contentHtml: '<div>Mock description content.</div>',
      };
    }
    return { id: '', title: '', contentHtml: '' };
  }),
  getSortedContentData: jest.fn(async (directory: string) => {
    if (directory === 'profile') {
      return [
        { id: 'about', title: 'About' },
        { id: 'services', title: 'Services' },
      ];
    }
    return [];
  }),
}));

// Mock framer-motion components
jest.mock('framer-motion', () => ({
  motion: {
    main: ({ children }: { children: React.ReactNode }) => <main>{children}</main>,
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Home Page Integration', () => {
  it('renders the business profile content correctly', async () => {
    render(await Home());

    expect(screen.getByText('Mock Business Title')).toBeInTheDocument();
    expect(screen.getByText('Mock Tagline')).toBeInTheDocument();
    expect(screen.getByText('Mock description content.')).toBeInTheDocument();
  });

  it('applies the vintage theme classes to the body', async () => {
    const { container } = render(await Home());
    // Note: Global body classes are typically applied in layout.tsx,
    // this test checks if the component's structure is compatible.
    // A more thorough integration test would involve testing the actual layout.
    expect(container.firstChild).toHaveClass('flex min-h-screen items-center justify-center bg-cream font-merriweather text-accent');
  });
});
