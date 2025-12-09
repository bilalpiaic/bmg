import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, usePathname } from 'next/navigation';
import RootLayout from '../../app/layout'; // Adjust path as necessary
import Home from '../../app/page';
import SectionPage from '../../app/profile/[section]/page';


// Mock Next.js router and path to control navigation within tests
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  notFound: jest.fn(),
}));

// Mock the content service to return consistent data
jest.mock('@/services/content', () => ({
  getContentData: jest.fn(async (directory: string, id?: string) => {
    if (directory === 'business-profile') {
      return {
        id: 'business-profile',
        title: 'Mock Business Profile',
        tagline: 'A tagline',
        contentHtml: 'Main content',
      };
    }
    if (directory === 'profile') {
      if (id === 'about') {
        return { id: 'about', title: 'About Us', contentHtml: 'About content' };
      }
      if (id === 'services') {
        return { id: 'services', title: 'Our Services', contentHtml: 'Services content' };
      }
    }
    throw new Error('Content not found');
  }),
  getSortedContentData: jest.fn(async (directory: string) => {
    if (directory === 'profile') {
      return [
        { id: 'about', title: 'About Us' },
        { id: 'services', title: 'Our Services' },
      ];
    }
    return [];
  }),
}));

// Mock framer-motion components
jest.mock('framer-motion', () => ({
  motion: {
    main: ({ children }: { children: React.ReactNode }) => <main>{children}</main>,
    div: ({ children, className }: { children: React.ReactNode, className?: string }) => <div className={className}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Navigation Integration', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    (usePathname as jest.Mock).mockReturnValue('/'); // Default path
    mockPush.mockClear(); // Clear mock calls before each test
  });

  it('renders navigation links and highlights home on root path', async () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    render(await RootLayout({ children: await Home() }));

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Our Services')).toBeInTheDocument();

    expect(screen.getByText('Home')).toHaveClass('underline');
    expect(screen.getByText('About Us')).not.toHaveClass('underline');
  });

  it('navigates to the About Us page and highlights it', async () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    const { rerender } = render(await RootLayout({ children: await Home() }));

    const aboutLink = screen.getByText('About Us');
    fireEvent.click(aboutLink);

    // Simulate navigation by changing pathname and rerendering with the new page
    (usePathname as jest.Mock).mockReturnValue('/profile/about');
    rerender(await RootLayout({ children: await SectionPage({ params: { section: 'about' } }) }));

    expect(screen.getByText('About Us')).toHaveClass('underline');
    expect(screen.getByText('Home')).not.toHaveClass('underline');
    expect(screen.getByText('About content')).toBeInTheDocument();
  });

  it('navigates to the Our Services page and highlights it', async () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    const { rerender } = render(await RootLayout({ children: await Home() }));

    const servicesLink = screen.getByText('Our Services');
    fireEvent.click(servicesLink);

    // Simulate navigation by changing pathname and rerendering with the new page
    (usePathname as jest.Mock).mockReturnValue('/profile/services');
    rerender(await RootLayout({ children: await SectionPage({ params: { section: 'services' } }) }));

    expect(screen.getByText('Our Services')).toHaveClass('underline');
    expect(screen.getByText('Home')).not.toHaveClass('underline');
    expect(screen.getByText('Services content')).toBeInTheDocument();
  });
});
