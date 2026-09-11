import React from 'react';
import { NewsletterSignup } from './NewsletterSignup';

interface NewsletterConnectionSectionProps {
  viewMode?: 'blueprint' | 'live' | 'production';
}

export const NewsletterConnectionSection: React.FC<NewsletterConnectionSectionProps> = ({
  viewMode = 'live'
}) => {
  return (
    <NewsletterSignup 
      variant="full-section"
      title="New tools should come to you."
      subtitle="Get new Briefs, tools, templates, and free resources as we release them."
      eyebrow="STAY IN THE LOOP"
      sourceLocation="free-guides-downloads-section-9"
      viewMode={viewMode === 'blueprint' ? 'blueprint' : 'live'}
    />
  );
};
