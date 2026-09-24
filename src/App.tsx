import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
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
import { NotFoundPage } from './components/NotFoundPage';
import { SpanishHomePage } from './components/SpanishHomePage';
import { SpanishPricingPage } from './components/SpanishPricingPage';
import { SpanishSubmitDealPage } from './components/SpanishSubmitDealPage';
import { EnglishHomeView } from './components/EnglishHomeView';
import { getResourceBySlug } from './data/resourceLibraryData';
import { DEMO_BLOG_POSTS } from './data/blog';
import { Language } from './types';

interface AppProps {
  initialPath?: string;
  initialLanguage?: Language;
}

export default function App({ initialPath, initialLanguage }: AppProps = {}) {
  const [submitDealOpen, setSubmitDealOpen] = useState(false);
  const [bookCallOpen, setBookCallOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesPricingOpen, setServicesPricingOpen] = useState(false);

  // Client-side router path state with SSR and instant hydration support
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return initialPath || '/';
  });

  const rawPath = currentPath.split('?')[0].split('#')[0];
  const normalizedPath = rawPath.replace(/\/+$/, '') || '/';
  const pathParts = normalizedPath.split('/').filter(Boolean);

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return (p === '/es' || p.startsWith('/es/')) ? 'es' : 'en';
    }
    if (initialLanguage) return initialLanguage;
    const p = initialPath || '/';
    return (p === '/es' || p.startsWith('/es/')) ? 'es' : 'en';
  });

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      setCurrentPath(p);
      setLanguage((p === '/es' || p.startsWith('/es/')) ? 'es' : 'en');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      const isEs = path === '/es' || path.startsWith('/es/');
      setLanguage(isEs ? 'es' : 'en');
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

  const handleLanguageToggle = (targetLang: Language) => {
    setLanguage(targetLang);
    if (targetLang === 'es') {
      if (normalizedPath === '/pricing' || normalizedPath === '/services-and-pricing' || normalizedPath === '/services') {
        navigateTo('/es/precios/');
      } else if (normalizedPath === '/submit-deal') {
        navigateTo('/es/enviar-transaccion/');
      } else if (normalizedPath === '/') {
        navigateTo('/es/');
      }
    } else {
      if (normalizedPath === '/es/precios') {
        navigateTo('/pricing/');
      } else if (normalizedPath === '/es/enviar-transaccion') {
        navigateTo('/submit-deal/');
      } else if (normalizedPath === '/es') {
        navigateTo('/');
      }
    }
  };

  // Exact / normalized route matchers
  const isHomePage = normalizedPath === '/';
  const isSpanishHomePage = normalizedPath === '/es';
  const isSpanishPricingPage = normalizedPath === '/es/precios';
  const isSpanishSubmitDealPage = normalizedPath === '/es/enviar-transaccion';

  const isCalculatorPage = normalizedPath === '/agent-business-calculator';
  const isHowItWorksPage = normalizedPath === '/how-htc-works' || normalizedPath === '/how-it-works';
  const isWhyHtcPage = normalizedPath === '/why-htc';
  const isTransactionCoordinationPage = normalizedPath === '/transaction-coordination';
  const isContractToClosePage = normalizedPath === '/contract-to-close' || normalizedPath === '/contract-to-close-services';
  const isRealtorTcPage = normalizedPath === '/transaction-coordinator-for-realtors' || normalizedPath === '/realtor-transaction-coordinator';
  const isListingCoordinationPage = normalizedPath === '/listing-coordination';
  const isPricingPage = normalizedPath === '/pricing' || normalizedPath === '/services-and-pricing' || normalizedPath === '/services';
  const isMeetTheTribePage = normalizedPath === '/team' || normalizedPath === '/meet-the-tribe';
  const isAboutPage = normalizedPath === '/about' || normalizedPath === '/michelle';
  const isWhoWeSupportPage = normalizedPath === '/who-we-support';
  const isMiamiDadeTcPage = normalizedPath === '/miami-dade-transaction-coordinator';
  const isMiamiTcPage = normalizedPath === '/miami-transaction-coordinator';
  const isBrowardTcPage = normalizedPath === '/broward-transaction-coordinator';
  const isSouthFloridaTcPage = normalizedPath === '/south-florida-transaction-coordinator';
  const isFaqPage = normalizedPath === '/faq';
  const isBookCallPage = normalizedPath === '/book' || normalizedPath === '/book-call' || normalizedPath === '/book-discovery-call';
  const isSubmitDealPage = normalizedPath === '/submit-deal';
  const isReviewsPage = normalizedPath === '/reviews';
  const isTcWorkshopPage = normalizedPath === '/tcworkshop';

  // Guides & Resource Library
  const isGuidesHubPage = 
    normalizedPath === '/free-guides-downloads' || 
    normalizedPath === '/resources/free-guides-downloads' ||
    normalizedPath === '/guides' ||
    normalizedPath === '/resources/guides';

  // Dedicated Resource Landing Page:
  // /resources/free-guides-downloads/[resource-slug]
  // /free-guides-downloads/[resource-slug]
  // /resources/guides/[resource-slug]
  const isResourceDetailPage = (() => {
    if (pathParts[0] === 'resources' && (pathParts[1] === 'free-guides-downloads' || pathParts[1] === 'guides' || pathParts[1] === 'downloads') && pathParts.length === 3) {
      return Boolean(getResourceBySlug(pathParts[2]));
    }
    if ((pathParts[0] === 'free-guides-downloads' || pathParts[0] === 'guides' || pathParts[0] === 'downloads') && pathParts.length === 2) {
      return Boolean(getResourceBySlug(pathParts[1]));
    }
    return false;
  })();

  const currentResourceSlug = isResourceDetailPage ? pathParts[pathParts.length - 1] : '';

  // Blog / Resources routing
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

  const isBlogIndexPage = normalizedPath === '/resources' || normalizedPath === '/blog';
  
  const isCategoryArchivePage = (() => {
    if ((pathParts[0] === 'resources' || pathParts[0] === 'blog') && pathParts.length === 2) {
      return knownCategorySlugs.includes(pathParts[1]);
    }
    return false;
  })();

  const isBlogPostPage = (() => {
    if ((pathParts[0] === 'resources' || pathParts[0] === 'blog') && pathParts.length === 2 && !knownCategorySlugs.includes(pathParts[1])) {
      return DEMO_BLOG_POSTS.some(p => p.slug === pathParts[1]);
    }
    return false;
  })();

  const currentCategorySlug = isCategoryArchivePage ? pathParts[1] : '';
  const currentPostSlug = isBlogPostPage ? pathParts[1] : '';

  // Check if current route is a known valid route
  const isKnownRoute = 
    isHomePage ||
    isSpanishHomePage ||
    isSpanishPricingPage ||
    isSpanishSubmitDealPage ||
    isCalculatorPage ||
    isHowItWorksPage ||
    isWhyHtcPage ||
    isTransactionCoordinationPage ||
    isContractToClosePage ||
    isRealtorTcPage ||
    isListingCoordinationPage ||
    isPricingPage ||
    isMeetTheTribePage ||
    isAboutPage ||
    isWhoWeSupportPage ||
    isMiamiDadeTcPage ||
    isMiamiTcPage ||
    isBrowardTcPage ||
    isSouthFloridaTcPage ||
    isFaqPage ||
    isBookCallPage ||
    isSubmitDealPage ||
    isReviewsPage ||
    isTcWorkshopPage ||
    isGuidesHubPage ||
    isResourceDetailPage ||
    isBlogIndexPage ||
    isCategoryArchivePage ||
    isBlogPostPage;

  const is404Page = !isKnownRoute;

  const scrollToHomeMethod = () => {
    if (!isHomePage && !isSpanishHomePage) {
      navigateTo(language === 'es' ? '/es/' : '/');
      setTimeout(() => {
        const el = document.getElementById(language === 'es' ? 'metodo-home' : 'home-method');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(language === 'es' ? 'metodo-home' : 'home-method');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#EEEAEB] text-[#3A2E29]">
      
      {/* Top Contact & Quick Action Bar */}
      <TopBar
        language={language}
        onLanguageChange={handleLanguageToggle}
        onSubmitDeal={() => navigateTo(language === 'es' ? '/es/enviar-transaccion/' : '/submit-deal/')}
      />

      {/* Header Navigation */}
      <Navbar
        language={language}
        onBookCall={() => navigateTo('/book/')}
        onSubmitDeal={() => navigateTo(language === 'es' ? '/es/enviar-transaccion/' : '/submit-deal/')}
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
        onOpenPricingPlans={() => navigateTo(language === 'es' ? '/es/precios/' : '/pricing/')}
        onOpenServicesPricing={() => navigateTo(language === 'es' ? '/es/precios/' : '/pricing/')}
        onOpenReviews={() => navigateTo('/reviews/')}
        onOpenBlog={() => navigateTo('/resources/')}
        onOpenGuides={() => navigateTo('/free-guides-downloads/')}
        onGoHome={() => navigateTo(language === 'es' ? '/es/' : '/')}
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
        ) : isSpanishPricingPage ? (
          <SpanishPricingPage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/es/enviar-transaccion/')}
            onGoHome={() => navigateTo('/es/')}
            onOpenFaq={() => navigateTo('/faq/')}
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
            onBookCall={() => navigateTo('/book/')}
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
        ) : isSpanishSubmitDealPage ? (
          <SpanishSubmitDealPage
            onGoHome={() => navigateTo('/es/')}
            onOpenPricing={() => navigateTo('/es/precios/')}
            onOpenFaq={() => navigateTo('/faq/')}
            onBookCall={() => setBookCallOpen(true)}
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
        ) : isGuidesHubPage ? (
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
        ) : isSpanishHomePage ? (
          <SpanishHomePage
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/es/enviar-transaccion/')}
            onExploreServices={() => navigateTo('/es/precios/')}
            onSeeHowItWorks={() => {
              const el = document.getElementById('metodo-home');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ) : is404Page ? (
          <NotFoundPage
            onGoHome={() => navigateTo('/')}
            onOpenPricing={() => navigateTo('/pricing/')}
            onOpenFaq={() => navigateTo('/faq/')}
            onBookCall={() => setBookCallOpen(true)}
            requestedPath={currentPath}
          />
        ) : (
          <EnglishHomeView
            onBookCall={() => setBookCallOpen(true)}
            onSubmitDeal={() => navigateTo('/submit-deal/')}
            onSeeHowItWorks={() => navigateTo('/how-htc-works/')}
            onExploreServices={() => setServicesPricingOpen(true)}
            onOpenAbout={() => setAboutOpen(true)}
            onOpenRoi={() => navigateTo('/agent-business-calculator/')}
            onOpenMeetTheTribe={() => navigateTo('/team/')}
            onOpenMiamiTc={() => navigateTo('/miami-transaction-coordinator/')}
            onOpenMiamiDadeTc={() => navigateTo('/miami-dade-transaction-coordinator/')}
            onOpenBrowardTc={() => navigateTo('/broward-transaction-coordinator/')}
            onOpenSouthFloridaTc={() => navigateTo('/south-florida-transaction-coordinator/')}
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onBookCall={() => setBookCallOpen(true)}
        onSubmitDeal={() => navigateTo(language === 'es' ? '/es/enviar-transaccion/' : '/submit-deal/')}
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
        onOpenBookCallPage={() => navigateTo('/book/')}
        onOpenTransactionCoordination={() => navigateTo('/transaction-coordination/')}
        onOpenListingCoordination={() => navigateTo('/listing-coordination/')}
        onOpenPricingPlans={() => navigateTo(language === 'es' ? '/es/precios/' : '/pricing/')}
        onOpenAbout={() => navigateTo('/about/')}
        onOpenMeetMichelle={() => navigateTo('/about/')}
        onOpenMeetTheTribe={() => navigateTo('/team/')}
        onOpenServicesPricing={() => navigateTo(language === 'es' ? '/es/precios/' : '/pricing/')}
        onOpenReviews={() => navigateTo('/reviews/')}
        onOpenBlog={() => navigateTo('/resources/')}
        onOpenGuides={() => navigateTo('/free-guides-downloads/')}
        onOpenTcWorkshop={() => navigateTo('/tcworkshop/')}
        language={language}
        onLanguageChange={handleLanguageToggle}
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

