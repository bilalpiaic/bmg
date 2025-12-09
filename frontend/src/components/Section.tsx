import React from "react";

interface SectionProps {
  title: string;
  contentHtml: string;
}

const Section: React.FC<SectionProps> = ({ title, contentHtml }) => {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-playfair-display mb-4">{title}</h2>
      <div
        className="prose prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};

export default Section;
