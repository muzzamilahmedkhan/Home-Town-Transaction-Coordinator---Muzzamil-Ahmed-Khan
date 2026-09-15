import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { HomeMethod } from './components/HomeMethod';
import { ChooseYourPath } from './components/ChooseYourPath';
import { AgentPain } from './components/AgentPain';
import { WhatMovesOffPlate } from './components/WhatMovesOffPlate';
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
import { MeetTheTribePage } from './components/MeetTheTribePage';
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
import { CategoryArchivePage } from './components/CategoryArchivePage';
import { BlogPostPage } from './components/BlogPostPage';
import { TcWorkshopPage } from './components/TcWorkshopPage';
import { FreeGuidesPage } from './components/FreeGuidesPage';
import { ResourceLandingPage } from './components/ResourceLandingPage';
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
      const hashIndex = path.indexOf('#');
      if (hashIndex !== -1) {
        const hash = path.substring(hashIndex + 1);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
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
  const isMeetTheTribePage = currentPath.includes('tribe') || currentPath.includes('/team') || currentPath.includes('meet-the-tribe');
  const isAboutPage = !isMeetTheTribePage && (currentPath.includes('about') || currentPath.includes('michelle'));
  const isWhoWeSupportPage = (currentPath.includes('who-we-support') || currentPath.includes('audience')) && !isRealtorTcPage;
  const isMiamiDadeTcPage = currentPath.includes('miami-dade-transaction-coordinator') || currentPath.includes('miami-dade');
  const isMiamiTcPage = !isMiamiDadeTcPage && (currentPath.includes('miami-transaction-coordinator') || currentPath.includes('miami'));
  const isBrowardTcPage = currentPath.includes('broward-transaction-coordinator') || currentPath.includes('broward');
  const isSouthFloridaTcPage = currentPath.includes('south-florida-transaction-coordinator') || currentPath.includes('south-florida');
  const isFaqPage = currentPath.includes('faq') || currentPath.includes('frequently-asked-questions');
  const isBookCallPage = currentPath.includes('book') || currentPath.includes('discovery-call') || currentPath.includes('schedule');
  const isSubmitDealPage = currentPath.includes('submit-deal') || currentPath.includes('submit-a-deal') || currentPath.includes('contract-intake');
  const isReviewsPage = currentPath.includes('reviews') || currentPath.includes('testimonials');
  const isTcWorkshopPage = currentPath.includes('tcworkshop') || currentPath.includes('workshop') || currentPath.includes('training');
  const isGuidesPage = currentPath.includes('guides') || currentPath.includes('downloads');

  const pathParts = currentPath.split('/').filter(Boolean);

  // Dedicated Resource Landing Page (Option B) vs Main Free Guides Library:
  // Supported URL structures:
  // /resources/free-guides-downloads/[resource-slug]/
  // /free-guides-downloads/[resource-slug]/
  // /resources/guides/[resource-slug]/
  const isResourceDetailPage = (() => {
    if (!isGuidesPage) return false;
    if (pathParts[0] === 'resources' && (pathParts[1] === 'free-guides-downloads' || pathParts[1] === 'guides' || pathParts[1] === 'downloads') && pathParts.length >= 3) {
      return true;
    }
    if ((pathParts[0] === 'free-guides-downloads' || pathParts[0] === 'guides' || pathParts[0] === 'downloads') && pathParts.length >= 2) {
      return true;
    }
    return false;
  })();

  const currentResourceSlug = isResourceDetailPage ? pathParts[pathParts.length - 1] : '';

  // Blog route must NOT capture guides or downloads
  const isBlogRoute = (pathParts[0] === 'blog' || pathParts[0] === 'resources') && !isGuidesPage;
  const subSlug = pathParts[1] || '';
  const knownCategorySlugs = [
    'contracts-forms',
    'transaction-operations',
    'broker-compliance',
    'condo-hoa',
    'agent-growth',
    'florida-updates',
    'agent-growth-leverage',
    'florida-real-estate-updates',
    'florida-contracts-forms'
  ];
  const isCategoryArchivePage = isBlogRoute && pathParts.length > 1 && knownCategorySlugs.includes(subSlug);
  const isBlogPostPage = isBlogRoute && pathParts.length > 1 && !knownCategorySlugs.includes(subSlug);
  const isBlogIndexPage = isBlogRoute && pathParts.length === 1;
  const currentPostSlug = isBlogPostPage ? subSlug : '';
  const currentCategorySlug = isCategoryArchivePage ? subSlug : '';

  const scrollToHomeMethod = () => {
    if (isCalculatorPage || isHowItWorksPage || isWhyHtcPage || isTransactionCoordinationPage || isContractToClosePage || isRealtorTcPage || isListingCoordinationPage || isPricingPage || isAboutPage || isMeetTheTribePage || isWhoWeSupportPage || isMiamiTcPage || isMiamiDadeTcPage || isBrowardTcPage || isSouthFloridaTcPage || isFaqPage || isBookCallPage || isSubmitDealPage || isTcWorkshopPage || isGuidesPage || isResourceDetailPage) {
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
        onOpenMeetMichelle={() => navigateTo('/about/')}
        onOpenMeetTheTribe={() => navigateTo('/team/')}
        onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
        onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
        onOpenPricingPlans={() => navigateTo('/pricing/')}
        onOpenServicesPricing={() => navigateTo('/pricing/')}
        onOpenReviews={() => navigateTo('/reviews/')}
        onOpenBlog={() => navigateTo('/resources/')}
        onOpenGuides={() => navigateTo('/free-guides-downloads/')}
        onGoHome={() => navigateTo('/')}
      />

      {/* RENDER DEDICATED PAGES OR HOMEPAGE */}
      <main className="flex-grow">
        {isCalculatorPage ? (
          <AgentCalculatorPage
            onBookCall={() => navigateTo('/book/')}
            onExploreServices={() => navigateTo('/pricing/#contract-to-close')}
            onGoHome={() => navigateTo('/')}
            onOpenResources={() => navigateTo('/resources/')}
          />
        ) : isHowItWorksPage ? (
          <HowHtcWorksPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onExploreServices={() => navigateTo('/pricing/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenContractToClose={() => navigateTo('/contract-to-close-services/')}
            onOpenBrokerCompliance={() => {
              navigateTo('/pricing/');
              setTimeout(() => {
                const el = document.getElementById('broker-compliance');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            onCompareBasePro={() => {
              navigateTo('/pricing/');
              setTimeout(() => {
                const el = document.getElementById('contract-to-close');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            onGoHome={() => navigateTo('/')}
          />
        ) : isWhyHtcPage ? (
          <WhyHtcPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onExploreServices={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenAbout={() => navigateTo('/about/')}
            onOpenSpanish={() => setLanguage('es')}
            onOpenReviews={() => navigateTo('/reviews/')}
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
            onOpenTcWorkshop={() => navigateTo('/tcworkshop/')}
            onOpenFaq={() => navigateTo('/faq/')}
          />
        ) : isMeetTheTribePage ? (
          <MeetTheTribePage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onGoHome={() => navigateTo('/')}
            onOpenAboutMichelle={() => navigateTo('/about/')}
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenWhyHtc={() => navigateTo('/why-htc/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenFaq={() => navigateTo('/faq/')}
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
            onOpenMeetTheTribe={() => navigateTo('/team/')}
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
            onOpenCalculator={(hash?: string) =>
              navigateTo(hash ? (hash.startsWith('#') ? `/agent-business-calculator/${hash}` : `/agent-business-calculator/#${hash}`) : '/agent-business-calculator/')
            }
            onOpenGuides={() => navigateTo('/free-guides-downloads/')}
            onExploreServices={() => navigateTo('/pricing/')}
            onNavigate={(path) => navigateTo(path)}
          />
        ) : isCategoryArchivePage ? (
          <CategoryArchivePage
            categorySlug={currentCategorySlug}
            onNavigate={(path) => navigateTo(path)}
            onBookCall={() => setBookCallOpen(true)}
          />
        ) : isBlogPostPage ? (
          <BlogPostPage
            slug={currentPostSlug}
            onBackToBlog={() => navigateTo('/resources/')}
            onBookCall={() => setBookCallOpen(true)}
            onOpenCalculator={(hash?: string) =>
              navigateTo(hash ? `/agent-business-calculator/#${hash}` : '/agent-business-calculator/')
            }
            onOpenHowItWorks={() => navigateTo('/how-htc-works/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenContractToClose={() => navigateTo('/contract-to-close-services/')}
            onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
            onOpenGuides={() => navigateTo('/resources/free-guides-downloads/')}
            onOpenTcWorkshop={() => navigateTo('/tcworkshop/')}
            onOpenArticle={(slug) => navigateTo(`/resources/${slug}/`)}
          />
        ) : isResourceDetailPage ? (
          <ResourceLandingPage
            slug={currentResourceSlug}
            onBackToLibrary={() => navigateTo('/resources/free-guides-downloads/')}
            onNavigate={(path) => navigateTo(path)}
            onBookCall={() => setBookCallOpen(true)}
            onExploreServices={() => navigateTo('/pricing/')}
            onGoHome={() => navigateTo('/')}
            onOpenCalculator={() => navigateTo('/agent-business-calculator/')}
          />
        ) : isGuidesPage ? (
          <FreeGuidesPage
            onGoHome={() => navigateTo('/')}
            onBackToBlog={() => navigateTo('/resources/')}
            onBookCall={() => setBookCallOpen(true)}
            onOpenCalculator={() => navigateTo('/agent-business-calculator/')}
            onNavigate={(path) => navigateTo(path)}
          />
        ) : isTcWorkshopPage ? (
          <TcWorkshopPage
            onGoHome={() => navigateTo('/')}
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

            {/* 3. INTRODUCE H.O.M.E. CLOSE METHOD */}
            <HomeMethod
              onSeeHowItWorks={() => navigateTo('/how-htc-works/')}
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

            {/* 7. REAL AGENT PROOF */}
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
        onOpenMeetMichelle={() => navigateTo('/about/')}
        onOpenMeetTheTribe={() => navigateTo('/team/')}
        onOpenServicesPricing={() => navigateTo('/pricing/')}
        onOpenReviews={() => navigateTo('/reviews/')}
        onOpenBlog={() => navigateTo('/resources/')}
        onOpenGuides={() => navigateTo('/free-guides-downloads/')}
        onOpenTcWorkshop={() => navigateTo('/tcworkshop/')}
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

