import Link from "next/link";
import React from "react";

interface NavigationProps {
  sections: { id: string; title: string }[];
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ sections, currentPath }) => {
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
