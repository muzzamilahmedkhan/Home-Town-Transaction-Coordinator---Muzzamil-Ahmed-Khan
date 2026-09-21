import React from 'react';
import { Hero } from './Hero';
import { ProofBar } from './ProofBar';
import { HomeMethod } from './HomeMethod';
import { ChooseYourPath } from './ChooseYourPath';
import { AgentPain } from './AgentPain';
import { WhatMovesOffPlate } from './WhatMovesOffPlate';
import { RealAgentProof } from './RealAgentProof';
import { MichelleFounder } from './MichelleFounder';
import { FloridaPositioning } from './FloridaPositioning';
import { FinalCTA } from './FinalCTA';
import { usePageSeo } from '../hooks/usePageSeo';
import { getOrganizationSchema } from '../utils/seoUtils';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onSeeHowItWorks: () => void;
  onExploreServices: () => void;
  onOpenAbout: () => void;
  onOpenRoi: () => void;
  onOpenMeetTheTribe?: () => void;
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

export const EnglishHomeView: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onSeeHowItWorks,
  onExploreServices,
  onOpenAbout,
  onOpenRoi,
  onOpenMeetTheTribe,
  onOpenMiamiTc,
  onOpenMiamiDadeTc,
  onOpenBrowardTc,
  onOpenSouthFloridaTc
}) => {
  usePageSeo({
    title: 'Hometown TC | Boutique Real Estate Support Agency for Florida Realtors',
    description: 'Boutique real estate support for Florida Realtors — from Listing Launch to Contract-to-Close and Post-Close. South Florida-founded, serving statewide.',
    canonicalUrl: 'https://hometowntc.com/',
    language: 'en',
    alternates: [
      { lang: 'en', url: 'https://hometowntc.com/' },
      { lang: 'es', url: 'https://hometowntc.com/es/' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://hometowntc.com/' }
    ],
    structuredData: [
      getOrganizationSchema('en'),
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Hometown Transaction Coordinators',
        url: 'https://hometowntc.com/',
        inLanguage: 'en-US'
      }
    ]
  });

  return (
    <>
      {/* 1. HERO */}
      <Hero
        onBookCall={onBookCall}
        onSubmitDeal={onSubmitDeal}
        onSeeHowItWorks={onSeeHowItWorks}
        onExploreServices={onExploreServices}
      />

      {/* 2. PROOF BAR */}
      <ProofBar />

      {/* 3. INTRODUCE H.O.M.E. CLOSE METHOD */}
      <HomeMethod
        onSeeHowItWorks={onSeeHowItWorks}
        onOpenAbout={onOpenAbout}
        onBookCall={onBookCall}
      />

      {/* 4. CHOOSE YOUR PATH */}
      <ChooseYourPath
        onBookCall={onBookCall}
        onSubmitDeal={onSubmitDeal}
        onOpenRoi={onOpenRoi}
        onExploreServices={onExploreServices}
      />

      {/* 5. AGENT PAIN / RECOGNITION */}
      <AgentPain
        onBookCall={onBookCall}
      />

      {/* 6. WHAT MOVES OFF YOUR PLATE */}
      <WhatMovesOffPlate
        onSubmitDeal={onSubmitDeal}
        onExploreServices={onExploreServices}
      />

      {/* 7. REAL AGENT PROOF */}
      <RealAgentProof />

      {/* 8. MICHELLE MARTINEZ FOUNDER SPOTLIGHT & TEAM */}
      <MichelleFounder
        onOpenAbout={onOpenAbout}
        onBookCall={onBookCall}
        onOpenMeetTheTribe={onOpenMeetTheTribe}
      />

      {/* 9. FLORIDA POSITIONING */}
      <FloridaPositioning
        onBookCall={onBookCall}
        onOpenMiamiTc={onOpenMiamiTc}
        onOpenMiamiDadeTc={onOpenMiamiDadeTc}
        onOpenBrowardTc={onOpenBrowardTc}
        onOpenSouthFloridaTc={onOpenSouthFloridaTc}
      />

      {/* 10. FINAL CTA */}
      <FinalCTA
        onBookCall={onBookCall}
        onSubmitDeal={onSubmitDeal}
      />
    </>
  );
};
