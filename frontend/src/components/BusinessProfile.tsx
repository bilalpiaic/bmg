import React from "react";

interface BusinessProfileProps {
  title: string;
  tagline: string;
  descriptionHtml: string;
}

const BusinessProfile: React.FC<BusinessProfileProps> = ({
  title,
  tagline,
  descriptionHtml,
}) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-playfair-display mb-4">{title}</h1>
      <p className="text-xl font-merriweather italic mb-8">{tagline}</p>
      <div
        className="prose prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />
    </div>
  );
};

export default BusinessProfile;
