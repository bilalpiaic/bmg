'use client';

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavigationProps {
  sections: { id: string; title: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const currentPath = usePathname();
  return (
    <nav className="flex justify-center space-x-8 py-4 bg-white/50 shadow-md rounded-lg">
      <Link href="/" className={`text-xl font-playfair-display ${currentPath === '/' ? 'underline' : ''}`}>
        Home
      </Link>
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`/profile/${section.id}`}
          className={`text-xl font-playfair-display ${
            currentPath === `/profile/${section.id}` ? "underline" : ""
          }`}
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
