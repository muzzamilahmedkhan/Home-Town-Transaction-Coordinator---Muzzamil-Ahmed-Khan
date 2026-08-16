import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { HomeMethod } from './components/HomeMethod';
import { ChooseYourPath } from './components/ChooseYourPath';
import { AgentPain } from './components/AgentPain';
import { WhatMovesOffPlate } from './components/WhatMovesOffPlate';
import { PricingTiers } from './components/PricingTiers';
import { RealAgentProof } from './components/RealAgentProof';
import { MichelleFounder } from './components/MichelleFounder';
import { FloridaPositioning } from './components/FloridaPositioning';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SubmitDealModal } from './components/SubmitDealModal';
import { BookCallModal } from './components/BookCallModal';
import { AboutHtcModal } from './components/AboutHtcModal';
import { ServicesAndPricingModal } from './components/ServicesAndPricingModal';
import { AgentCalculatorPage } from './components/AgentCalculatorPage';
import { HowHtcWorksPage } from './components/HowHtcWorksPage';
import { WhyHtcPage } from './components/WhyHtcPage';
import { TransactionCoordinationPage } from './components/TransactionCoordinationPage';
import { ListingCoordinationPage } from './components/ListingCoordinationPage';
import { PricingPlansPage } from './components/PricingPlansPage';
import { AboutMichellePage } from './components/AboutMichellePage';
import { WhoWeSupportPage } from './components/WhoWeSupportPage';
import { MiamiTransactionCoordinatorPage } from './components/MiamiTransactionCoordinatorPage';
import { MiamiDadeTransactionCoordinatorPage } from './components/MiamiDadeTransactionCoordinatorPage';
import { BrowardTransactionCoordinatorPage } from './components/BrowardTransactionCoordinatorPage';
import { SouthFloridaTransactionCoordinatorPage } from './components/SouthFloridaTransactionCoordinatorPage';
import { ContractToCloseServicesPage } from './components/ContractToCloseServicesPage';
import { RealtorTransactionCoordinatorPage } from './components/RealtorTransactionCoordinatorPage';
import { FaqPage } from './components/FaqPage';
import { BookDiscoveryCallPage } from './components/BookDiscoveryCallPage';
import { SubmitDealPage } from './components/SubmitDealPage';
import { ReviewsPage } from './components/ReviewsPage';
import { BlogResourcesPage } from './components/BlogResourcesPage';
import { BlogPostPage } from './components/BlogPostPage';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [submitDealOpen, setSubmitDealOpen] = useState(false);
  const [bookCallOpen, setBookCallOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesPricingOpen, setServicesPricingOpen] = useState(false);

  // Client-side router path state
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isCalculatorPage = currentPath.includes('agent-business-calculator');
  const isHowItWorksPage = currentPath.includes('how-htc-works') || currentPath.includes('how-it-works');
  const isWhyHtcPage = currentPath.includes('why-htc');
  const isTransactionCoordinationPage = currentPath.includes('transaction-coordination') && !currentPath.includes('miami') && !currentPath.includes('broward') && !currentPath.includes('south-florida') && !currentPath.includes('contract-to-close') && !currentPath.includes('realtor');
  const isContractToClosePage = currentPath.includes('contract-to-close') || currentPath.includes('contract-to-close-services');
  const isRealtorTcPage = currentPath.includes('transaction-coordinator-for-realtors') || currentPath.includes('realtor-transaction-coordinator') || currentPath.includes('realtors');
  const isListingCoordinationPage = currentPath.includes('listing-coordination');
  const isPricingPage = currentPath.includes('pricing') || currentPath.includes('plans');
  const isAboutPage = currentPath.includes('about') || currentPath.includes('michelle');
  const isWhoWeSupportPage = (currentPath.includes('who-we-support') || currentPath.includes('audience')) && !isRealtorTcPage;
  const isMiamiDadeTcPage = currentPath.includes('miami-dade-transaction-coordinator') || currentPath.includes('miami-dade');
  const isMiamiTcPage = !isMiamiDadeTcPage && (currentPath.includes('miami-transaction-coordinator') || currentPath.includes('miami'));
  const isBrowardTcPage = currentPath.includes('broward-transaction-coordinator') || currentPath.includes('broward');
  const isSouthFloridaTcPage = currentPath.includes('south-florida-transaction-coordinator') || currentPath.includes('south-florida');
  const isFaqPage = currentPath.includes('faq') || currentPath.includes('frequently-asked-questions');
  const isBookCallPage = currentPath.includes('book') || currentPath.includes('discovery-call') || currentPath.includes('schedule');
  const isSubmitDealPage = currentPath.includes('submit-deal') || currentPath.includes('submit-a-deal') || currentPath.includes('contract-intake');
  const isReviewsPage = currentPath.includes('reviews') || currentPath.includes('testimonials');

  const pathParts = currentPath.split('/').filter(Boolean);
  const isBlogRoute = pathParts[0] === 'blog' || pathParts[0] === 'resources';
  const isBlogPostPage = isBlogRoute && pathParts.length > 1;
  const isBlogIndexPage = isBlogRoute && pathParts.length === 1;
  const currentPostSlug = isBlogPostPage ? pathParts[1] : '';

  const scrollToHomeMethod = () => {
    if (isCalculatorPage || isHowItWorksPage || isWhyHtcPage || isTransactionCoordinationPage || isContractToClosePage || isRealtorTcPage || isListingCoordinationPage || isPricingPage || isAboutPage || isWhoWeSupportPage || isMiamiTcPage || isMiamiDadeTcPage || isBrowardTcPage || isSouthFloridaTcPage || isFaqPage || isBookCallPage || isSubmitDealPage) {
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById('home-method');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('home-method');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#EEEAEB] text-[#3A2E29]">
      
      {/* Top Contact & Quick Action Bar */}
      <TopBar
        language={language}
        onLanguageChange={setLanguage}
        onSubmitDeal={() => navigateTo('/submit-deal/')}
      />

      {/* Header Navigation */}
      <Navbar
        onBookCall={() => navigateTo('/book-discovery-call/')}
        onSubmitDeal={() => navigateTo('/submit-deal/')}
        onOpenRoi={() => navigateTo('/agent-business-calculator/')}
        onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
        onOpenWhyHtc={() => navigateTo('/why-htc/')}
        onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
        onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
        onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
        onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
        onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
        onOpenContractToClose={() => navigateTo('/contract-to-close-services/')}
        onOpenRealtorTc={() => navigateTo('/transaction-coordinator-for-realtors/')}
        onOpenFaq={() => navigateTo('/faq/')}
        onOpenAbout={() => navigateTo('/about/')}
        onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
        onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
        onOpenPricingPlans={() => navigateTo('/pricing/')}
        onOpenServicesPricing={() => navigateTo('/pricing/')}
        onOpenReviews={() => navigateTo('/reviews/')}
        onOpenBlog={() => navigateTo('/resources/')}
        onGoHome={() => navigateTo('/')}
      />

      {/* RENDER DEDICATED PAGES OR HOMEPAGE */}
      <main className="flex-grow">
        {isCalculatorPage ? (
          <AgentCalculatorPage
            onBookCall={() => setBookCallOpen(true)}
            onExploreServices={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
          />
        ) : isHowItWorksPage ? (
          <HowHtcWorksPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onExploreServices={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
          />
        ) : isWhyHtcPage ? (
          <WhyHtcPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onExploreServices={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
          />
        ) : isTransactionCoordinationPage ? (
          <TransactionCoordinationPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onExploreServices={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
          />
        ) : isContractToClosePage ? (
          <ContractToCloseServicesPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
            onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
            onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
            onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
          />
        ) : isRealtorTcPage ? (
          <RealtorTransactionCoordinatorPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenContractToClose={() => navigateTo('/contract-to-close-services/')}
            onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
            onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
            onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
            onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
          />
        ) : isListingCoordinationPage ? (
          <ListingCoordinationPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onExploreServices={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
          />
        ) : isSouthFloridaTcPage ? (
          <SouthFloridaTransactionCoordinatorPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
            onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
            onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
          />
        ) : isBrowardTcPage ? (
          <BrowardTransactionCoordinatorPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
            onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
            onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
          />
        ) : isMiamiDadeTcPage ? (
          <MiamiDadeTransactionCoordinatorPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
            onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
            onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
          />
        ) : isMiamiTcPage ? (
          <MiamiTransactionCoordinatorPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
            onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
            onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
          />
        ) : isPricingPage ? (
          <PricingPlansPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
          />
        ) : isAboutPage ? (
          <AboutMichellePage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
          />
        ) : isWhoWeSupportPage ? (
          <WhoWeSupportPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenRealtorTc={() => navigateTo('/transaction-coordinator-for-realtors/')}
            onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
            onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
            onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
            onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
          />
        ) : isFaqPage ? (
          <FaqPage
            onBookCall={() => navigateTo('/book-discovery-call/')}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenContractToClose={() => navigateTo('/contract-to-close-services/')}
            onOpenRealtorTc={() => navigateTo('/transaction-coordinator-for-realtors/')}
            onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
            onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
            onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
            onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
          />
        ) : isBookCallPage ? (
          <BookDiscoveryCallPage
            onGoHome={() => navigateTo('/')}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenFaq={() => navigateTo('/faq/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
          />
        ) : isSubmitDealPage ? (
          <SubmitDealPage
            onGoHome={() => navigateTo('/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenFaq={() => navigateTo('/faq/')}
            onBookCall={() => setBookCallOpen(true)}
          />
        ) : isReviewsPage ? (
          <ReviewsPage
            onGoHome={() => navigateTo('/')}
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
          />
        ) : isBlogIndexPage ? (
          <BlogResourcesPage
            onGoHome={() => navigateTo('/')}
            onOpenPost={(slug) => navigateTo(`/resources/${slug}/`)}
            onBookCall={() => setBookCallOpen(true)}
          />
        ) : isBlogPostPage ? (
          <BlogPostPage
            slug={currentPostSlug}
            onBackToBlog={() => navigateTo('/resources/')}
            onBookCall={() => setBookCallOpen(true)}
          />
        ) : (
          <>
            {/* 1. HERO */}
            <Hero
              onBookCall={() => setBookCallOpen(true)}
              onSubmitDeal={() => navigateTo('/submit-deal/')}
              onSeeHowItWorks={() => navigateTo('/how-htc-works/')}
              onExploreServices={() => setServicesPricingOpen(true)}
            />

            {/* 2. PROOF BAR */}
            <ProofBar />

            {/* 3. INTRODUCE H.O.M.E. EARLY */}
            <HomeMethod
              onOpenAbout={() => setAboutOpen(true)}
              onBookCall={() => setBookCallOpen(true)}
            />

            {/* 4. CHOOSE YOUR PATH */}
            <ChooseYourPath
              onBookCall={() => setBookCallOpen(true)}
              onSubmitDeal={() => navigateTo('/submit-deal/')}
              onOpenRoi={() => navigateTo('/agent-business-calculator/')}
              onExploreServices={() => setServicesPricingOpen(true)}
            />

            {/* 5. AGENT PAIN / RECOGNITION */}
            <AgentPain
              onBookCall={() => setBookCallOpen(true)}
            />

            {/* 6. WHAT MOVES OFF YOUR PLATE */}
            <WhatMovesOffPlate
              onSubmitDeal={() => navigateTo('/submit-deal/')}
              onExploreServices={() => setServicesPricingOpen(true)}
            />

            {/* 7. BASE + PRO PREVIEW */}
            <PricingTiers
              onBookCall={() => setBookCallOpen(true)}
              onSubmitDeal={() => navigateTo('/submit-deal/')}
              onOpenRoi={() => navigateTo('/agent-business-calculator/')}
              onExploreServices={() => setServicesPricingOpen(true)}
            />

            {/* 8. REAL AGENT PROOF */}
            <RealAgentProof />

            {/* 11. MEET THE TEAM (Agency & Founder Authority) */}
            <MichelleFounder
              onBookCall={() => setBookCallOpen(true)}
              onOpenAbout={() => setAboutOpen(true)}
            />

            {/* 12. FLORIDA-WIDE POSITIONING */}
            <FloridaPositioning
              onBookCall={() => setBookCallOpen(true)}
              onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
              onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
              onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
              onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
            />

            {/* 13. FINAL CTA */}
            <FinalCTA
              onBookCall={() => setBookCallOpen(true)}
              onSubmitDeal={() => navigateTo('/submit-deal/')}
            />
          </>
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onBookCall={() => setBookCallOpen(true)}
        onSubmitDeal={() => navigateTo('/submit-deal/')}
        onOpenRoi={() => navigateTo('/agent-business-calculator/')}
        onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
        onOpenWhyHtc={() => navigateTo('/why-htc/')}
        onOpenWhoWeSupport={() => navigateTo('/who-we-support/')}
        onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
        onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
        onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
        onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
        onOpenContractToClose={() => navigateTo('/contract-to-close-services/')}
        onOpenRealtorTc={() => navigateTo('/transaction-coordinator-for-realtors/')}
        onOpenFaq={() => navigateTo('/faq/')}
        onOpenBookCallPage={() => navigateTo('/book-discovery-call/')}
        onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
        onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
        onOpenPricingPlans={() => navigateTo('/pricing/')}
        onOpenAbout={() => navigateTo('/about/')}
        onOpenServicesPricing={() => navigateTo('/pricing/')}
        onOpenReviews={() => navigateTo('/reviews/')}
        onOpenBlog={() => navigateTo('/resources/')}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* INTERACTIVE MODALS */}
      <SubmitDealModal
        isOpen={submitDealOpen}
        onClose={() => setSubmitDealOpen(false)}
      />

      <BookCallModal
        isOpen={bookCallOpen}
        onClose={() => setBookCallOpen(false)}
      />

      <AboutHtcModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
        onBookCall={() => setBookCallOpen(true)}
      />

      <ServicesAndPricingModal
        isOpen={servicesPricingOpen}
        onClose={() => setServicesPricingOpen(false)}
        onBookCall={() => setBookCallOpen(true)}
        onSubmitDeal={() => navigateTo('/submit-deal/')}
      />

    </div>
  );
}

