import React from 'react';
import { WelcomeSection } from '@/types/home';

interface WelcomeHeroProps {
  content: WelcomeSection;
}

const WelcomeHero: React.FC<WelcomeHeroProps> = ({ content }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-nest-dark mb-4">
        {content.title}
      </h1>
      <p className="text-nest-gray text-lg mb-8">
        {content.subtitle}
      </p>
    </div>
  );
};

export default WelcomeHero;