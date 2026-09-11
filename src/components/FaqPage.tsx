import React, { useState, useMemo } from 'react';
import {
  Search,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  Mail,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  FileCheck2
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';
import { usePageSeo } from '../hooks/usePageSeo';

interface Props {
  onBookCall: () => void;
  onSubmitDeal?: () => void; // Kept in interface for props compatibility, strictly not rendered on page
  onGoHome: () => void;
  onOpenPricing: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc?: () => void;
  onOpenWhoWeSupport?: () => void;
  onOpenRoi?: () => void;
  onOpenTransactionCoordination?: () => void;
  onOpenListingCoordination?: () => void;
  onOpenContractToClose?: () => void;
  onOpenRealtorTc?: () => void;
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

interface FAQItem {
  id: string;
  categoryId: string;
  question: string;
  answerParagraphs: string[];
  actionLink?: {
    label: string;
    action: () => void;
  };
  tags: string[];
}

interface CategoryDefinition {
  id: string;
  name: string;
  subtitle: string;
}

export const FaqPage: React.FC<Props> = ({
  onBookCall,
  onGoHome,
  onOpenPricing,
  onOpenHowItWorks,
  onOpenSouthFloridaTc
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('services');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'services-what-does-htc-do': true
  });

  // ONLY the 6 specified categories
  const categories: CategoryDefinition[] = [
    {
      id: 'services',
      name: 'SERVICES',
      subtitle: 'What do you do?'
    },
    {
      id: 'pricing',
      name: 'PRICING',
      subtitle: 'What does it cost?'
    },
    {
      id: 'getting-started',
      name: 'GETTING STARTED',
      subtitle: 'How do we set this up?'
    },
    {
      id: 'working-together',
      name: 'WORKING TOGETHER',
      subtitle: 'Who does what and what should I expect?'
    },
    {
      id: 'your-clients',
      name: 'YOUR CLIENTS',
      subtitle: 'What will my client experience?'
    },
    {
      id: 'trust-technology',
      name: 'TRUST + TECHNOLOGY',
      subtitle: 'How do you use technology and protect our information?'
    }
  ];

  // MOST ASKED quick links mapping to specific FAQs
  const mostAskedLinks = [
    {
      id: 'services-what-does-htc-do',
      categoryId: 'services',
      question: 'What does HTC do?'
    },
    {
      id: 'pricing-how-much-does-htc-cost',
      categoryId: 'pricing',
      question: 'How much does HTC cost?'
    },
    {
      id: 'pricing-base-vs-pro',
      categoryId: 'pricing',
      question: 'What’s the difference between Base and Pro?'
    },
    {
      id: 'working-together-htc-vs-agent-handle',
      categoryId: 'working-together',
      question: 'What does HTC handle vs. what do I still handle?'
    },
    {
      id: 'your-clients-communicate-with-clients',
      categoryId: 'your-clients',
      question: 'Will HTC communicate directly with my buyers or sellers?'
    },
    {
      id: 'getting-started-customize-business',
      categoryId: 'getting-started',
      question: 'How much can HTC customize for my business?'
    },
    {
      id: 'trust-tech-what-does-tech-enabled-mean',
      categoryId: 'trust-technology',
      question: 'What do you mean when you say HTC is “tech-enabled”?'
    },
    {
      id: 'trust-tech-protect-information',
      categoryId: 'trust-technology',
      question: 'What happens to the information and data I provide to HTC?'
    }
  ];

  // Complete FAQ content categorized strictly into the 6 categories
  const faqItems: FAQItem[] = [
    // =========================================================================
    // 1. SERVICES (What do you do?)
    // =========================================================================
    {
      id: 'services-what-does-htc-do',
      categoryId: 'services',
      question: 'What does HTC do?',
      answerParagraphs: [
        'Hometown Transaction Coordinators is a boutique real estate support agency for Florida Realtors.',
        'We support the operational work behind the transaction — from Listing Launch through Contract-to-Close and Post-Close — including file organization, milestone tracking, administrative follow-up, communication, and brokerage file support.'
      ],
      actionLink: {
        label: 'SEE SERVICES + PRICING →',
        action: onOpenPricing
      },
      tags: ['services', 'overview', 'listing launch', 'contract to close', 'what we do']
    },
    {
      id: 'services-work-throughout-florida',
      categoryId: 'services',
      question: 'Do you work throughout Florida?',
      answerParagraphs: [
        'Yes. HTC is South Florida-founded and supports Realtors across Florida from coast to coast.'
      ],
      tags: ['florida', 'coverage', 'miami', 'broward', 'palm beach', 'statewide']
    },
    {
      id: 'services-handle-listings',
      categoryId: 'services',
      question: 'Do you handle listings?',
      answerParagraphs: [
        'Yes. Our Listing Launch service handles the administrative work needed to help get a listing launched and organized.',
        'Your licensed agent responsibilities, including the listing agreement, pricing, representation, and negotiations, remain with you.'
      ],
      tags: ['listings', 'listing launch', 'pre-listing', 'mls']
    },
    {
      id: 'services-buyer-seller-transactions',
      categoryId: 'services',
      question: 'Do you handle buyer and seller transactions?',
      answerParagraphs: [
        'Yes. HTC supports both buyer-side and seller-side transactions.'
      ],
      tags: ['buyers', 'sellers', 'transactions']
    },
    {
      id: 'services-wholesale-transactions',
      categoryId: 'services',
      question: 'Do you handle wholesale transactions?',
      answerParagraphs: [
        'Yes. We can support wholesale transactions when the file and administrative scope fit within our services.'
      ],
      tags: ['wholesale', 'investors', 'assignment']
    },
    {
      id: 'services-commercial-transactions',
      categoryId: 'services',
      question: 'Do you handle commercial transactions?',
      answerParagraphs: [
        'Yes, on a case-by-case basis.',
        'Commercial files are quoted based on the complexity and anticipated length of the transaction.'
      ],
      tags: ['commercial', 'case by case', 'quote']
    },
    {
      id: 'services-broker-compliance-support',
      categoryId: 'services',
      question: 'What is Broker Compliance support?',
      answerParagraphs: [
        'Broker Compliance is for a transaction or rental you are already managing but need help getting through your brokerage’s file-review process.',
        'HTC can review the file against the brokerage requirements, identify missing documents, help circulate approved documents for signature, organize and upload the file, and follow the file through the compliance process.',
        'You remain responsible for the transaction, licensed activities, and any decisions requiring your broker or legal counsel.'
      ],
      tags: ['broker compliance', 'compliance', 'skyslope', 'dotloop', 'command', 'cda']
    },

    // =========================================================================
    // 2. PRICING (What does it cost?)
    // =========================================================================
    {
      id: 'pricing-how-much-does-htc-cost',
      categoryId: 'pricing',
      question: 'How much does HTC cost?',
      answerParagraphs: [
        'Our primary Contract-to-Close plans are:',
        'Base — $375 per closed file',
        'Pro — $475 per closed file',
        'We also offer Listing Launch, Broker Compliance, and additional services.'
      ],
      actionLink: {
        label: 'SEE ALL SERVICES + PRICING →',
        action: onOpenPricing
      },
      tags: ['pricing', 'cost', 'fee', 'base', 'pro', 'rates', 'pay at closing']
    },
    {
      id: 'pricing-base-vs-pro',
      categoryId: 'pricing',
      question: 'What’s the difference between Base and Pro?',
      answerParagraphs: [
        'Both plans give you HTC’s Contract-to-Close process and the support of your Lead TC and Dedicated Hometown Team.',
        'With Base, you remain the primary point of contact for your buyer or seller.',
        'With Pro, HTC provides more direct client communication and support as part of the file.'
      ],
      actionLink: {
        label: 'COMPARE BASE + PRO →',
        action: onOpenPricing
      },
      tags: ['base vs pro', 'base', 'pro', 'difference', 'compare', 'plans']
    },
    {
      id: 'pricing-setup-fee',
      categoryId: 'pricing',
      question: 'Is there a setup fee?',
      answerParagraphs: [
        'Yes.',
        'New HTC clients complete a one-time $399 Agent Setup Investment at registration.',
        'That setup allows us to build your brokerage requirements, forms, communication preferences, service preferences, and client touches into the way HTC supports your files.'
      ],
      tags: ['setup fee', 'agent setup', 'registration', 'investment']
    },
    {
      id: 'pricing-cancellation-policy',
      categoryId: 'pricing',
      question: 'What happens if my transaction cancels?',
      answerParagraphs: [
        'If a Contract-to-Close file cancels during the inspection period, there is no cancellation fee.',
        'After the inspection period, an administrative support fee applies for work already completed on the file.'
      ],
      tags: ['cancellation', 'cancels', 'inspection contingency', 'deposit release']
    },
    {
      id: 'pricing-window-coverage',
      categoryId: 'pricing',
      question: 'How long does the standard Contract-to-Close fee cover?',
      answerParagraphs: [
        'Our residential Contract-to-Close pricing is based on a typical 45-day processing window.'
      ],
      tags: ['processing window', 'timeline', '45 days', 'contract duration']
    },
    {
      id: 'pricing-longer-than-expected',
      categoryId: 'pricing',
      question: 'What happens if my residential transaction takes longer than expected?',
      answerParagraphs: [
        'When a residential Contract-to-Close file extends beyond 60 days, an additional $100 timing fee is assessed.'
      ],
      tags: ['extensions', '60 days', 'timing fee', 'extended transaction']
    },
    {
      id: 'pricing-commercial-transactions',
      categoryId: 'pricing',
      question: 'How are commercial transactions priced?',
      answerParagraphs: [
        'Commercial transaction support starts at $595 and is quoted case by case based on the complexity and anticipated length of the transaction.',
        'Commercial files extending beyond 90 days require a $200 deposit.'
      ],
      tags: ['commercial', 'pricing', 'commercial fee', 'deposit', 'case by case']
    },

    // =========================================================================
    // 3. GETTING STARTED (How do we set this up?)
    // =========================================================================
    {
      id: 'getting-started-what-needed',
      categoryId: 'getting-started',
      question: 'What do I need to get started with HTC?',
      answerParagraphs: [
        'Start with a 15-Minute Fit Call.',
        'If HTC is a fit, you will register, complete the one-time Agent Setup Investment, and schedule your Setup Call.',
        'Once setup is complete, you can begin submitting files through the Quick File Drop.'
      ],
      actionLink: {
        label: 'SCHEDULE A 15-MINUTE FIT CALL →',
        action: onBookCall
      },
      tags: ['getting started', 'fit call', 'onboarding', 'quick file drop']
    },
    {
      id: 'getting-started-setup-call',
      categoryId: 'getting-started',
      question: 'What happens during my Setup Call?',
      answerParagraphs: [
        'This is where we learn how your business works.',
        'We review your brokerage requirements, forms, communication preferences, service preferences, client experience, and any unique touches you want HTC to understand before we begin supporting your files.'
      ],
      tags: ['setup call', 'onboarding call', 'preferences', 'client experience']
    },
    {
      id: 'getting-started-customize-business',
      categoryId: 'getting-started',
      question: 'How much can HTC customize for my business?',
      answerParagraphs: [
        'A lot.',
        'HTC has a structured process, but your business does not have to look like everyone else’s.',
        'During setup, we build your approved brokerage requirements, communication preferences, templates, service choices, and client touches into your HTC workflow.'
      ],
      tags: ['customize', 'workflow', 'personalization', 'checklists', 'templates']
    },
    {
      id: 'getting-started-brokerage-forms',
      categoryId: 'getting-started',
      question: 'Can HTC use my brokerage’s forms and requirements?',
      answerParagraphs: [
        'Yes.',
        'We will need access to the appropriate brokerage form library, compliance checklist, and instructions necessary to support your files.'
      ],
      tags: ['brokerage forms', 'compliance checklist', 'broker requirements']
    },
    {
      id: 'getting-started-underway-transaction',
      categoryId: 'getting-started',
      question: 'Can I send HTC a transaction that is already underway?',
      answerParagraphs: [
        'Usually, yes.',
        'We will first review where the file currently stands, what milestones have already passed, and what remains outstanding so we can determine the cleanest way to step in.'
      ],
      tags: ['underway', 'mid contract', 'active transaction', 'takeover']
    },

    // =========================================================================
    // 4. WORKING TOGETHER (Who does what and what should I expect?)
    // =========================================================================
    {
      id: 'working-together-htc-vs-agent-handle',
      categoryId: 'working-together',
      question: 'What does HTC handle vs. what do I still handle?',
      answerParagraphs: [
        'HTC handles the administrative transaction work within our service scope: organizing the file, tracking milestones, administrative follow-up, coordinating information, and keeping the transaction workflow moving.',
        'You remain responsible for licensed representation, client advice, negotiations, pricing, showings, and decisions requiring your professional judgment or broker involvement.'
      ],
      tags: ['what we handle', 'responsibilities', 'duties', 'realtor role', 'scope']
    },
    {
      id: 'working-together-prepare-offers',
      categoryId: 'working-together',
      question: 'Do you prepare offers?',
      answerParagraphs: [
        'No. Preparing and negotiating offers remains with the licensed Realtor.'
      ],
      tags: ['offers', 'licensed activity', 'realtor role']
    },
    {
      id: 'working-together-prepare-listing-agreements',
      categoryId: 'working-together',
      question: 'Do you prepare listing agreements?',
      answerParagraphs: [
        'No. Listing agreements remain with the licensed Realtor.'
      ],
      tags: ['listing agreements', 'licensed activity', 'realtor role']
    },
    {
      id: 'working-together-addenda-extensions',
      categoryId: 'working-together',
      question: 'Can HTC prepare addenda or extensions?',
      answerParagraphs: [
        'HTC can assist with routine administrative addenda or extensions using approved forms and the agent’s written instructions.',
        'The agent remains responsible for the terms, negotiations, client direction, and any legal or licensed decisions.'
      ],
      tags: ['addenda', 'extensions', 'routine administrative', 'written instructions']
    },
    {
      id: 'working-together-communication-lead-tc',
      categoryId: 'working-together',
      question: 'How does HTC communicate with me?',
      answerParagraphs: [
        'Your Lead TC is your main day-to-day point of contact.',
        'Behind your Lead TC is your Dedicated Hometown Team, supported by HTC’s systems and technology so the file does not depend on one person working alone.'
      ],
      tags: ['communication', 'lead tc', 'dedicated team', 'point of contact']
    },
    {
      id: 'working-together-nights-weekends',
      categoryId: 'working-together',
      question: 'Are you available on nights or weekends?',
      answerParagraphs: [
        'Standard Base and Pro support is provided Monday through Friday during HTC business hours.',
        'Routine night and weekend support is not included in those plans.',
        'Expanded-hours support is part of the service direction we are building through SCALE.'
      ],
      tags: ['nights', 'weekends', 'hours', 'business hours', 'scale']
    },
    {
      id: 'working-together-htc-honors',
      categoryId: 'working-together',
      question: 'What is HTC Honors?',
      answerParagraphs: [
        'HTC Honors is our client loyalty and community-impact program.',
        'Qualifying activity earns points that can be used toward rewards, including opportunities to turn those rewards into charitable giving that HTC matches.',
        'It is one of the ways we thank the agents who support Hometown while turning good business into something bigger than the closing itself.'
      ],
      tags: ['htc honors', 'loyalty', 'rewards', 'charitable giving', 'giving match']
    },

    // =========================================================================
    // 5. YOUR CLIENTS (What will my client experience?)
    // =========================================================================
    {
      id: 'your-clients-communicate-with-clients',
      categoryId: 'your-clients',
      question: 'Will HTC communicate directly with my buyers or sellers?',
      answerParagraphs: [
        'It depends on your plan.',
        'With Base, you remain the primary point of contact for your client.',
        'With Pro, HTC provides more direct client communication and support during the transaction.'
      ],
      tags: ['client communication', 'buyers', 'sellers', 'base', 'pro', 'direct communication']
    },
    {
      id: 'your-clients-how-communicate',
      categoryId: 'your-clients',
      question: 'How does HTC communicate with my clients?',
      answerParagraphs: [
        'We communicate professionally, clearly, and as an extension of the client experience you established during setup.',
        'Your communication preferences and approved client touches are part of how we build your HTC workflow.'
      ],
      tags: ['communication style', 'client experience', 'setup', 'workflow']
    },
    {
      id: 'your-clients-weekly-seller-followup',
      categoryId: 'your-clients',
      question: 'Will HTC follow up with my seller every week?',
      answerParagraphs: [
        'Direct recurring client communication is part of the additional client-support experience available through Pro and follows the communication plan established during your setup.'
      ],
      tags: ['weekly follow up', 'sellers', 'recurring communication', 'pro plan']
    },
    {
      id: 'your-clients-contact-htc-directly',
      categoryId: 'your-clients',
      question: 'Can my client contact HTC directly?',
      answerParagraphs: [
        'With Pro, yes — HTC can serve as a more direct administrative point of contact for transaction-related questions within our scope.',
        'Licensed advice, negotiations, and decisions are always redirected to the Realtor.'
      ],
      tags: ['contact directly', 'inquiries', 'licensed advice', 'realtor boundary']
    },
    {
      id: 'your-clients-english-spanish',
      categoryId: 'your-clients',
      question: 'Does HTC communicate in English and Spanish?',
      answerParagraphs: [
        'Yes. HTC provides bilingual English and Spanish support.'
      ],
      tags: ['english', 'spanish', 'bilingual', 'espanol', 'language']
    },
    {
      id: 'your-clients-ask-for-reviews',
      categoryId: 'your-clients',
      question: 'Will HTC ask my clients for reviews?',
      answerParagraphs: [
        'HTC does not use your clients as our marketing list.',
        'Any review or feedback touchpoint involving your client must fit the client experience and communication preferences established with you.'
      ],
      tags: ['reviews', 'feedback', 'marketing list', 'preferences']
    },
    {
      id: 'your-clients-market-to-database',
      categoryId: 'your-clients',
      question: 'Does HTC market to my client database?',
      answerParagraphs: [
        'No.',
        'Your client relationships belong to you. HTC does not use your client database to market our services.'
      ],
      tags: ['client database', 'privacy', 'non-solicitation', 'relationships']
    },

    // =========================================================================
    // 6. TRUST + TECHNOLOGY (How do you use technology and protect our information?)
    // =========================================================================
    {
      id: 'trust-tech-what-does-tech-enabled-mean',
      categoryId: 'trust-technology',
      question: 'What do you mean when you say HTC is “tech-enabled”?',
      answerParagraphs: [
        'It means your transaction is supported by people + systems + technology working together.',
        'Your Lead TC remains your main point of contact, while the Dedicated Hometown Team uses HTC’s systems, automation, and technology to help organize information, maintain consistency, track work, and support the file.',
        'Technology supports the team. It does not replace the team.'
      ],
      tags: ['tech-enabled', 'systems', 'automation', 'technology', 'lead tc', 'team']
    },
    {
      id: 'trust-tech-use-ai',
      categoryId: 'trust-technology',
      question: 'How does HTC use AI?',
      answerParagraphs: [
        'HTC uses AI and automation as internal tools to help reduce repetitive administrative work, organize information, support workflows, and improve consistency.',
        'AI does not replace the judgment, review, communication, or responsibility of the HTC team, and it does not make licensed or legal decisions.'
      ],
      tags: ['ai', 'automation', 'internal tools', 'consistency', 'human judgment']
    },
    {
      id: 'trust-tech-protect-information',
      categoryId: 'trust-technology',
      question: 'What happens to the information and data I provide to HTC?',
      answerParagraphs: [
        'We use the information you provide to perform the services you have asked HTC to provide and within the systems required to support the file.',
        'We do not sell or market your client database.',
        'Sensitive and confidential information is handled differently from routine transaction information and is not casually distributed through third-party requests.'
      ],
      tags: ['information', 'data privacy', 'confidentiality', 'security', 'client data']
    },
    {
      id: 'trust-tech-insurance',
      categoryId: 'trust-technology',
      question: 'Does HTC carry insurance?',
      answerParagraphs: [
        'Yes.',
        'HTC carries Errors & Omissions coverage and liability coverage, including limited cybersecurity coverage.'
      ],
      tags: ['insurance', 'errors and omissions', 'e&o', 'liability', 'cybersecurity']
    },
    {
      id: 'trust-tech-licensed-brokerage',
      categoryId: 'trust-technology',
      question: 'Is HTC a licensed real estate brokerage?',
      answerParagraphs: [
        'No.',
        'HTC provides administrative transaction coordination support within Florida guidelines for unlicensed real estate support.',
        'Licensed representation, negotiations, legal advice, and other licensed activities remain with the Realtor and broker.'
      ],
      tags: ['brokerage', 'unlicensed support', 'guidelines', 'florida', 'licensed representation']
    },
    {
      id: 'trust-tech-wire-instructions',
      categoryId: 'trust-technology',
      question: 'Does HTC send or distribute wire instructions?',
      answerParagraphs: [
        'No.',
        'HTC does not distribute wire instructions.',
        'Wire information should be obtained directly from the appropriate title, escrow, or closing provider using their verified process.'
      ],
      tags: ['wire instructions', 'wire fraud', 'title', 'escrow', 'security']
    },
    {
      id: 'trust-tech-third-party-sensitive-forms',
      categoryId: 'trust-technology',
      question: 'What happens if HTC receives a third-party form requesting sensitive or confidential information from my client?',
      answerParagraphs: [
        'HTC does not distribute third-party forms requesting sensitive or confidential client information.',
        'If one is received by email, we delete it rather than forwarding it to your client.',
        'The requesting party should contact the client directly through its own secure process.'
      ],
      tags: ['third-party forms', 'sensitive information', 'confidential', 'wire security', 'phishing']
    }
  ];

  // Quick suggestion queries matching prompt
  const quickSuggestions = [
    'pricing',
    'weekends',
    'Base vs. Pro',
    'AI',
    'Spanish',
    'wholesale',
    'Broker Compliance'
  ];

  // Filter items:
  // "Only show the selected category’s questions."
  // If user is actively searching via the text box, show matching items within the active category,
  // or provide a direct search experience across categories if user searched.
  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      // Strictly show ONLY the selected category's questions
      return faqItems.filter((item) => item.categoryId === activeCategory);
    }
    // When searching, find matches across all categories
    return faqItems.filter((item) => {
      const qMatch = item.question.toLowerCase().includes(query);
      const aMatch = item.answerParagraphs.some((p) => p.toLowerCase().includes(query));
      const tMatch = item.tags.some((t) => t.toLowerCase().includes(query));
      return qMatch || aMatch || tMatch;
    });
  }, [searchQuery, activeCategory]);

  // Jump to specific FAQ from MOST ASKED quick links
  const handleJumpToFaq = (categoryId: string, faqId: string) => {
    setSearchQuery('');
    setActiveCategory(categoryId);
    setOpenItems((prev) => ({
      ...prev,
      [faqId]: true
    }));

    // Smooth scroll to the target question
    setTimeout(() => {
      const element = document.getElementById(faqId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 80);
  };

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    filteredItems.forEach((item) => {
      all[item.id] = true;
    });
    setOpenItems(all);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  // Structured Data (JSON-LD) for FAQ Rich Snippets (AEO / SEO)
  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answerParagraphs.join(' ')
      }
    }))
  };

  // Apply page SEO
  usePageSeo({
    title: 'Frequently Asked Questions | Hometown TC',
    description:
      'Quick answers about working with Hometown TC: services, pricing ($375 Base / $475 Pro), client communication, technology, and what to expect.',
    canonicalUrl: 'https://hometowntc.com/faq/',
    breadcrumbs: [
      { name: 'Home', url: 'https://hometowntc.com/' },
      { name: 'Frequently Asked Questions', url: 'https://hometowntc.com/faq/' }
    ],
    structuredData: [faqSchemaData]
  });

  const activeCategoryObj = categories.find((c) => c.id === activeCategory);

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO — COMPACT, SEARCH-FIRST, NO KNOWLEDGE BASE, NO SUBMIT DEAL CTA   */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-[#D8D2D4] pt-28 pb-10 sm:pt-32 sm:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center space-x-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
            <button onClick={onGoHome} className="hover:text-[#0D9BA3] transition cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span className="text-[#3A2E29]">FAQ</span>
          </nav>

          {/* Eyebrow strictly matching prompt */}
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
            FREQUENTLY ASKED QUESTIONS
          </div>

          {/* Main H1 Title strictly matching prompt */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight leading-tight">
            Got a question? Start here.
          </h1>

          {/* Subheading strictly matching prompt */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Quick answers about working with HTC, our services, pricing, client communication, technology, and what to expect.
          </p>

          {/* Search field strictly matching prompt:
              Label: Search FAQs
              Placeholder: Try “pricing,” “weekends,” “Base vs. Pro,” “AI,” “Spanish”... */}
          <div className="pt-2 max-w-2xl mx-auto">
            <label htmlFor="faq-search-input" className="sr-only">
              Search FAQs
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                id="faq-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Try “pricing,” “weekends,” “Base vs. Pro,” “AI,” “Spanish”...'
                className="w-full bg-[#FAF8F5] text-[#3A2E29] placeholder:text-slate-400 pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl text-sm font-medium border border-[#D8D2D4] focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] focus:bg-white shadow-xs transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-[#3A2E29] transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Suggestion Chips */}
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-600">
              <span className="text-[11px] font-mono uppercase text-slate-400 mr-1">Popular searches:</span>
              {quickSuggestions.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => {
                    setSearchQuery(term);
                  }}
                  className="inline-flex items-center px-2 py-0.5 rounded-lg bg-[#EEEAEB] hover:bg-[#0D9BA3]/10 hover:text-[#0D9BA3] transition text-[11px] font-medium cursor-pointer border border-[#D8D2D4]/60"
                >
                  {term}
                </button>
              ))}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* MOST ASKED — SIMPLE QUICK LINKS (NOT CARDS)                              */}
          {/* ========================================================================= */}
          <div className="mt-8 pt-6 border-t border-[#D8D2D4]/70 max-w-3xl mx-auto text-left">
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9BA3]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                MOST ASKED
              </span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm">
              {mostAskedLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleJumpToFaq(item.categoryId, item.id)}
                    className="group flex items-start text-left text-slate-700 hover:text-[#0D9BA3] transition cursor-pointer font-medium py-1"
                  >
                    <span className="text-[#0D9BA3] mr-2 font-mono group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                      →
                    </span>
                    <span className="underline decoration-[#D8D2D4] underline-offset-4 group-hover:decoration-[#0D9BA3]">
                      {item.question}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FAQ CATEGORIES — USE ONLY THESE SIX, SHOW SELECTED CATEGORY QUESTIONS */}
      {/* ========================================================================= */}
      <section className="sticky top-16 sm:top-20 z-20 bg-white/95 backdrop-blur-md border-b border-[#D8D2D4] py-3.5 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid of the 6 Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id && !searchQuery;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery('');
                  }}
                  className={`p-2.5 rounded-xl text-left transition cursor-pointer flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-[#3A2E29] text-white border-[#3A2E29] shadow-sm'
                      : 'bg-[#FAF8F5] text-[#3A2E29] border-[#D8D2D4] hover:border-[#0D9BA3] hover:bg-white'
                  }`}
                >
                  <span className={`text-[11px] font-montserrat font-extrabold tracking-wider block ${
                    isSelected ? 'text-[#FE7311]' : 'text-[#3A2E29]'
                  }`}>
                    {cat.name}
                  </span>
                  <span className={`text-[10px] leading-tight mt-1 font-medium line-clamp-1 ${
                    isSelected ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {cat.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. QUESTIONS & ANSWERS — ONLY SHOW SELECTED CATEGORY'S QUESTIONS          */}
      {/* ========================================================================= */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Active Category Header when not searching */}
        {!searchQuery && activeCategoryObj && (
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#D8D2D4] pb-4 gap-2">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
                CATEGORY: {activeCategoryObj.name}
              </span>
              <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                {activeCategoryObj.subtitle}
              </h2>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono font-bold text-slate-500 flex-shrink-0">
              <button
                onClick={expandAll}
                className="hover:text-[#0D9BA3] transition cursor-pointer"
              >
                Expand all
              </button>
              <span>•</span>
              <button
                onClick={collapseAll}
                className="hover:text-[#0D9BA3] transition cursor-pointer"
              >
                Collapse all
              </button>
            </div>
          </div>
        )}

        {/* Search Feedback Bar when searching */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-[#D8D2D4] text-xs">
            <div className="text-slate-600">
              Found <strong className="text-[#3A2E29]">{filteredItems.length}</strong> {filteredItems.length === 1 ? 'answer' : 'answers'} matching “<strong className="text-[#0D9BA3]">{searchQuery}</strong>”
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#0D9BA3] font-bold hover:underline cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#D8D2D4] p-10 text-center space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#EEEAEB] flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-montserrat font-bold text-[#3A2E29]">
                No answers found for “{searchQuery}”
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Try searching for “pricing”, “weekends”, “Base vs. Pro”, or click any category above.
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 bg-[#EEEAEB] hover:bg-[#D8D2D4] text-[#3A2E29] rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Reset Search
              </button>
              <button
                onClick={onBookCall}
                className="px-4 py-2 bg-[#0D9BA3] hover:bg-[#087177] text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Ask Michelle Directly
              </button>
            </div>
          </div>
        ) : (
          /* Accordion List for the Selected Category */
          <div className="space-y-3">
            {filteredItems.map((item) => {
              const isOpen = !!openItems[item.id] || (searchQuery.trim().length > 0);
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className={`bg-white rounded-2xl border transition shadow-xs overflow-hidden scroll-mt-32 ${
                    isOpen ? 'border-[#0D9BA3] ring-1 ring-[#0D9BA3]/20' : 'border-[#D8D2D4] hover:border-slate-400'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div className="space-y-1 pr-2">
                      {searchQuery && (
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0D9BA3] block">
                          {categories.find((c) => c.id === item.categoryId)?.name}
                        </span>
                      )}
                      <h3 className="text-sm sm:text-base font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#EEEAEB] flex items-center justify-center flex-shrink-0 text-[#3A2E29] group-hover:bg-[#0D9BA3] group-hover:text-white transition">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#D8D2D4]/50 bg-[#FAF8F5]/40 space-y-3">
                      {/* Formatted Customer-Facing Answer Paragraphs */}
                      <div className="pt-3 space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {item.answerParagraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>

                      {/* Explicit Action Links (e.g., SEE SERVICES + PRICING →) */}
                      {item.actionLink && (
                        <div className="pt-2">
                          <button
                            onClick={item.actionLink.action}
                            className="inline-flex items-center space-x-1.5 text-xs font-montserrat font-extrabold uppercase tracking-wider text-[#0D9BA3] hover:text-[#FE7311] transition cursor-pointer"
                          >
                            <span>{item.actionLink.label}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* 4. FAST TOPIC JUMPS — HELPFUL EXPLORATION WITHOUT OVERWHELM               */}
      {/* ========================================================================= */}
      <section className="bg-white border-y border-[#D8D2D4] py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-lg font-montserrat font-bold text-[#3A2E29]">
              Explore Detailed Pages
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Need deeper breakdowns of our plans, timelines, and regional coverage?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <button
              onClick={onOpenPricing}
              className="p-4 bg-[#FAF8F5] rounded-xl border border-[#D8D2D4] hover:border-[#0D9BA3] transition text-left space-y-1.5 group cursor-pointer shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition">
                  Plans & Pricing Matrix
                </span>
                <Layers className="w-4 h-4 text-[#0D9BA3]" />
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Full feature comparison for Base ($375) vs. Pro ($475).
              </p>
            </button>

            <button
              onClick={onOpenHowItWorks}
              className="p-4 bg-[#FAF8F5] rounded-xl border border-[#D8D2D4] hover:border-[#0D9BA3] transition text-left space-y-1.5 group cursor-pointer shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition">
                  How HTC Works
                </span>
                <Clock className="w-4 h-4 text-[#0D9BA3]" />
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                The onboarding flow from contract execution to funding day.
              </p>
            </button>

            <button
              onClick={onOpenSouthFloridaTc}
              className="p-4 bg-[#FAF8F5] rounded-xl border border-[#D8D2D4] hover:border-[#0D9BA3] transition text-left space-y-1.5 group cursor-pointer shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition">
                  Florida Coverage
                </span>
                <FileCheck2 className="w-4 h-4 text-[#0D9BA3]" />
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Tri-County Miami-Dade, Broward, Palm Beach, and statewide.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STILL HAVE A QUESTION? (STRICTLY NO SUBMIT AN EXECUTED DEAL CTA)      */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl relative overflow-hidden text-center space-y-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D9BA3]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FE7311]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center space-x-1.5 bg-white/10 text-[#0D9BA3] px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STILL HAVE A QUESTION?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white">
              Can’t find your answer? Let’s talk.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Michelle Martinez and our transaction team are happy to answer any questions about your workflow, broker compliance, or upcoming deals.
            </p>

            {/* ONLY Book a Call & Direct Contacts — STRICTLY NO SUBMIT DEAL CTA */}
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white font-montserrat font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md hover:shadow-[#FE7311]/25 cursor-pointer flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Quick Fit Call</span>
              </button>

              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                <span>View Plans & Pricing</span>
              </button>
            </div>

            {/* Direct Phone and Email */}
            <div className="pt-3 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center space-x-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#0D9BA3]" />
                <span>Direct: <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a></span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0D9BA3]" />
                <span>Email: <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white font-bold hover:underline">{EMAIL_ADDRESS}</a></span>
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
