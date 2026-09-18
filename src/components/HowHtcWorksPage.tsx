import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  Play,
  Volume2,
  VolumeX,
  Clock,
  Sparkles,
  FileText
} from 'lucide-react';
import { PHONE_NUMBER } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onExploreServices: () => void;
  onOpenListingCoordination?: () => void;
  onOpenContractToClose?: () => void;
  onOpenBrokerCompliance?: () => void;
  onCompareBasePro?: () => void;
  onGoHome: () => void;
}

export const HowHtcWorksPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onExploreServices,
  onOpenListingCoordination,
  onOpenContractToClose,
  onOpenBrokerCompliance,
  onCompareBasePro,
  onGoHome
}) => {
  const [showTranscript, setShowTranscript] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // SEO & AEO dynamic document title and meta description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'How HTC Works | Florida Transaction Coordination';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalMetaContent = metaDesc ? metaDesc.getAttribute('content') : '';
    
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'See how Hometown Transaction Coordinators works with Florida Realtors, from Fit Call and Setup to Listing Launch, Contract-to-Close, Broker Compliance, and Post-Close support.'
      );
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute(
        'content',
        'See how Hometown Transaction Coordinators works with Florida Realtors, from Fit Call and Setup to Listing Launch, Contract-to-Close, Broker Compliance, and Post-Close support.'
      );
      document.head.appendChild(metaDesc);
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalMetaContent) {
        metaDesc.setAttribute('content', originalMetaContent);
      }
    };
  }, []);

  // The 3 Getting Started Steps
  const gettingStartedSteps = [
    {
      num: '01',
      title: '01 — Book a Fit Call',
      description:
        'We learn what you need and determine whether HTC is the right fit for the way you do business.',
      ctaType: 'bookCall',
      ctaText: 'BOOK A 15-MINUTE FIT CALL →',
      action: onBookCall
    },
    {
      num: '02',
      title: '02 — Register + Setup',
      description:
        'Once you register, we’ll schedule your Setup Call and build your brokerage requirements, templates, communication preferences, and unique client touches into the HTC workflow.',
      ctaType: 'pricingLink',
      ctaText: 'See Setup Investment + Pricing →',
      action: onExploreServices
    },
    {
      num: '03',
      title: '03 — Quick File Drop',
      description:
        'Once setup is complete, use Quick File Drop whenever you need Listing Launch, Contract-to-Close, or Broker Compliance support.',
      ctaType: 'submitDeal',
      ctaText: 'CURRENT CLIENT? SUBMIT A NEW DEAL →',
      action: onSubmitDeal
    }
  ];

  // The H.O.M.E. Close Method Steps
  const homeMethodSteps = [
    {
      letter: 'H',
      title: 'H — Honor the Agreement',
      description:
        'Review the executed agreement, parties, dates, and documents that drive the file.',
      color: '#0D9BA3',
      bgBadge: 'bg-[#0D9BA3]',
      borderBadge: 'border-[#0D9BA3]'
    },
    {
      letter: 'O',
      title: 'O — Organize the File',
      description:
        'Build the working timeline, organize contacts and documents, and identify what is missing.',
      color: '#FE7311',
      bgBadge: 'bg-[#FE7311]',
      borderBadge: 'border-[#FE7311]'
    },
    {
      letter: 'M',
      title: 'M — Monitor the Milestones',
      description:
        'Track administrative milestones, follow up, document updates, and bring anything that needs your attention back to you.',
      color: '#0D9BA3',
      bgBadge: 'bg-[#0D9BA3]',
      borderBadge: 'border-[#0D9BA3]'
    },
    {
      letter: 'E',
      title: 'E — Ease the Close',
      description:
        'Support the final administrative steps, closing coordination, broker file completion, and Post-Close.',
      color: '#3A2E29',
      bgBadge: 'bg-[#3A2E29]',
      borderBadge: 'border-[#3A2E29]'
    }
  ];

  // The FAQs (Section 5)
  const faqs = [
    {
      q: 'Do I have to complete Setup every time I send a file?',
      a: 'No. Setup is completed once. If your brokerage, preferences, templates, or business needs change, we can update your setup.'
    },
    {
      q: 'How do I submit a new file?',
      a: 'Existing HTC clients use Quick File Drop to submit Listing Launch, Contract-to-Close, and Broker Compliance files.',
      linkText: 'SUBMIT A NEW DEAL →',
      linkAction: onSubmitDeal
    },
    {
      q: 'Can I use different HTC services for different files?',
      a: 'Yes. Choose the service that fits the support you need for that particular file.',
      linkText: 'VIEW SERVICES + PRICING →',
      linkAction: onExploreServices
    },
    {
      q: 'Who communicates with my clients during Contract-to-Close?',
      a: 'That depends on the plan you choose. With Base, you remain the primary point of contact for your clients. Pro includes additional direct client communication and support from HTC.',
      linkText: 'COMPARE BASE + PRO →',
      linkAction: onCompareBasePro || onExploreServices
    },
    {
      q: 'What if something changes in my business after Setup?',
      a: 'Tell us. We can update your templates, brokerage requirements, communication preferences, and other workflow details as your business changes.'
    }
  ];

  const transcriptText = `Hi, I'm Michelle with Hometown Transaction Coordinators. When you decide to partner with HTC, the process is built to be seamless, predictable, and stress-free from day one.

It starts with a simple 15-Minute Fit Call to ensure we're aligned on your volume and market area. Next, we complete your one-time Agent Setup—integrating your brokerage compliance guidelines, preferred title and lending partners, and communication cadences into our custom workflow.

From that point on, whenever you get a listing or an accepted FAR/BAR contract, you simply submit the package to us. Our Florida team immediately audits the file, builds your critical date timeline, communicates with all parties, tracks statutory milestones, and delivers a 100% compliant broker file through closing.

You stay in control of client relationships and negotiations, while we handle every deadline and detail behind the scenes.`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hometowntc.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'How HTC Works',
        item: 'https://hometowntc.com/how-htc-works/'
      }
    ]
  };

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'How HTC Works | Florida Transaction Coordination',
    description:
      'See how Hometown Transaction Coordinators works with Florida real estate agents from Fit Call and Setup to Listing Launch, Contract-to-Close, and Broker Compliance.',
    thumbnailUrl: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
    ],
    uploadDate: '2026-01-15T08:00:00-05:00',
    duration: 'PT1M45S',
    contentUrl: 'https://hometowntc.com/assets/HTC_VSL_03_How-HTC-Works_v1.mp4',
    embedUrl: 'https://hometowntc.com/how-htc-works/',
    transcript: transcriptText
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How HTC Works: Florida Transaction Coordination Process',
    description:
      'Hometown Transaction Coordinators supports Florida Realtors with Listing Launch, Contract-to-Close, and Broker Compliance.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Book a Fit Call',
        text: 'We learn what you need and determine whether HTC is the right fit for the way you do business.'
      },
      {
        '@type': 'HowToStep',
        name: 'Register + Setup',
        text: 'Once you register, we schedule your Setup Call and build your brokerage requirements, templates, communication preferences, and unique client touches into the HTC workflow.'
      },
      {
        '@type': 'HowToStep',
        name: 'Quick File Drop',
        text: 'Once setup is complete, use Quick File Drop whenever you need Listing Launch, Contract-to-Close, or Broker Compliance support.'
      }
    ]
  };

  return (
    <main className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      {/* Schema.org Structured Data for SEO & AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 — HERO + VSL (SPLIT LAYOUT ON DESKTOP, STACKED ON MOBILE) */}
      {/* ------------------------------------------------------------------ */}
      <header className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Home Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-bold text-slate-500 mb-8">
            <button
              onClick={onGoHome}
              className="hover:text-[#0D9BA3] transition cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400">→</span>
            <span className="text-[#3A2E29]">How HTC Works</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline, Supporting Copy, CTAs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/20">
                <span>HOW HTC WORKS</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
                Here’s what happens when you work with HTC.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                Hometown Transaction Coordinators (HTC) supports Florida Realtors with Listing Launch, Contract-to-Close, and Broker Compliance. Start with a Fit Call, set up your business once, then submit files whenever you need support.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  onClick={onBookCall}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#FE7311] hover:bg-[#e06209] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition cursor-pointer group"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>BOOK A 15-MINUTE FIT CALL</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onExploreServices}
                  className="inline-flex items-center justify-center sm:justify-start space-x-1.5 text-[#0D9BA3] hover:text-[#0a7f86] font-bold text-sm tracking-wide transition py-2 cursor-pointer group"
                >
                  <span>VIEW SERVICES + PRICING</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Column: 16:9 VSL Video (Reserved for HTC_VSL_03_How-HTC-Works_v1.mp4) */}
            <div className="lg:col-span-6">
              <div className="space-y-3">
                
                {/* 16:9 Video Player Container */}
                <div className="relative w-full aspect-video bg-[#3A2E29] rounded-2xl overflow-hidden shadow-2xl border border-[#D8D2D4] group">
                  
                  {/* Subtle Poster / Video Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#241C19] via-[#3A2E29] to-[#4D3E38] flex flex-col justify-between p-6">
                    
                    {/* Top Bar inside Video */}
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-semibold text-slate-200 border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-[#0D9BA3] animate-pulse" />
                        <span>HTC_VSL_03_How-HTC-Works_v1.mp4</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-white/90">
                        1:45
                      </div>
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="flex flex-col items-center justify-center space-y-3 my-auto z-10">
                      <button
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        aria-label="Play VSL video"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FE7311] hover:bg-[#e06209] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition transform cursor-pointer"
                      >
                        {isVideoPlaying ? (
                          <div className="w-6 h-6 flex items-center justify-center space-x-1.5">
                            <span className="w-2 h-6 bg-white rounded-xs" />
                            <span className="w-2 h-6 bg-white rounded-xs" />
                          </div>
                        ) : (
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                        )}
                      </button>
                      <div className="text-center">
                        <div className="text-white font-bold text-sm sm:text-base">
                          {isVideoPlaying ? 'Playing VSL Video' : 'Watch: How HTC Works (1:45)'}
                        </div>
                        <div className="text-slate-300 text-xs font-medium">
                          Florida Transaction Coordination Customer Journey
                        </div>
                      </div>
                    </div>

                    {/* Bottom Controls Bar */}
                    <div className="flex items-center justify-between z-10 pt-2 border-t border-white/10">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="text-slate-300 hover:text-white transition p-1 cursor-pointer"
                          title={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <span className="text-[11px] font-medium text-slate-300">
                          {isMuted ? 'Muted by default' : 'Sound active'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-[11px] font-bold text-[#0D9BA3] bg-[#0D9BA3]/20 px-2 py-0.5 rounded">
                        <span>CC Captions Ready</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Video Info & View Transcript Option */}
                <div className="flex items-center justify-between text-xs px-1">
                  <span className="text-slate-500 font-medium">
                    Video: <span className="text-slate-700 font-semibold">Customer Journey Walkthrough</span>
                  </span>

                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="text-[#0D9BA3] hover:text-[#0a7f86] font-bold inline-flex items-center space-x-1 cursor-pointer hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{showTranscript ? 'Hide Transcript' : 'View Transcript'}</span>
                    {showTranscript ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Collapsible Transcript Box */}
                {showTranscript && (
                  <div className="p-4 sm:p-5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed animate-in fade-in duration-200">
                    <div className="font-bold text-[#3A2E29] flex items-center space-x-1.5 pb-1 border-b border-[#D8D2D4]">
                      <FileText className="w-4 h-4 text-[#0D9BA3]" />
                      <span>Video Transcript · HTC_VSL_03_How-HTC-Works_v1.mp4</span>
                    </div>
                    <p className="whitespace-pre-line text-slate-700 text-xs leading-relaxed pt-1">
                      {transcriptText}
                    </p>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 — GETTING STARTED */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <span>GETTING STARTED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight">
              Set up once. Submit when you need us.
            </h2>
          </div>

          {/* 3-Step Horizontal Process on Desktop / Stacked on Mobile (Numbered Rail) */}
          <div className="relative">
            
            {/* Horizontal Rail Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#D8D2D4] -z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
              
              {/* Step 01 */}
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#0D9BA3] text-[#0D9BA3] flex items-center justify-center font-black text-xl shadow-sm flex-shrink-0">
                      01
                    </div>
                    <div className="h-0.5 flex-grow bg-[#D8D2D4] lg:hidden" />
                  </div>

                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                      01 — Book a Fit Call
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      We learn what you need and determine whether HTC is the right fit for the way you do business.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onBookCall}
                    className="inline-flex items-center space-x-2 text-[#FE7311] hover:text-[#e06209] font-bold text-sm uppercase tracking-wider transition cursor-pointer group"
                  >
                    <span>BOOK A 15-MINUTE FIT CALL</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#FE7311] text-[#FE7311] flex items-center justify-center font-black text-xl shadow-sm flex-shrink-0">
                      02
                    </div>
                    <div className="h-0.5 flex-grow bg-[#D8D2D4] lg:hidden" />
                  </div>

                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                      02 — Register + Setup
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      Once you register, new HTC clients complete the one-time $399 Agent Setup Investment before the Setup Call. We build your brokerage requirements, templates, communication preferences, and unique client touches into the HTC workflow.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onExploreServices}
                    className="inline-flex items-center space-x-1.5 text-[#0D9BA3] hover:text-[#0a7f86] font-bold text-sm tracking-wide transition cursor-pointer group"
                  >
                    <span>See Setup Investment + Pricing</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#3A2E29] text-[#3A2E29] flex items-center justify-center font-black text-xl shadow-sm flex-shrink-0">
                      03
                    </div>
                    <div className="h-0.5 flex-grow bg-[#D8D2D4] lg:hidden" />
                  </div>

                  <div className="space-y-2 pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                      03 — Quick File Drop
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      Once setup is complete, use Quick File Drop whenever you need Listing Launch, Contract-to-Close, or Broker Compliance support.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onSubmitDeal}
                    className="inline-flex items-center space-x-2 text-[#FE7311] hover:text-[#e06209] font-bold text-sm uppercase tracking-wider transition cursor-pointer group"
                  >
                    <span>CURRENT CLIENT? SUBMIT A NEW DEAL</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 — CHOOSE THE SUPPORT YOU NEED */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <span>YOUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight">
              Choose the support the file needs.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              You do not have to use every HTC service on every file. Send us the work you want supported.
            </p>
          </div>

          {/* Three Equal Service Cards (Desktop 3-col, Mobile Stacked) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* Card 1: LISTING LAUNCH */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] flex flex-col justify-between space-y-6 hover:border-[#0D9BA3] transition shadow-sm hover:shadow-md group">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3] bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                  <span>Listing Support</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                    LISTING LAUNCH
                  </h3>
                  <div className="text-xs font-semibold text-[#FE7311] mt-1">
                    Getting ready to list?
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  We prepare the listing pieces for your review and approval.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4]">
                <button
                  onClick={onOpenListingCoordination || onExploreServices}
                  className="inline-flex items-center space-x-1.5 text-[#0D9BA3] hover:text-[#0a7f86] font-bold text-xs uppercase tracking-wider transition cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>EXPLORE LISTING SERVICES</span>
                  <ArrowRight className="w-4 h-4 text-[#FE7311] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2: CONTRACT-TO-CLOSE */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] flex flex-col justify-between space-y-6 hover:border-[#0D9BA3] transition shadow-sm hover:shadow-md group">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#FE7311] bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                  <span>Under Contract</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                    CONTRACT-TO-CLOSE
                  </h3>
                  <div className="text-xs font-semibold text-[#FE7311] mt-1">
                    Have an executed agreement?
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Choose Base or Pro support from agreement through Post-Close.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4]">
                <button
                  onClick={onOpenContractToClose || onExploreServices}
                  className="inline-flex items-center space-x-1.5 text-[#0D9BA3] hover:text-[#0a7f86] font-bold text-xs uppercase tracking-wider transition cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>EXPLORE CONTRACT-TO-CLOSE</span>
                  <ArrowRight className="w-4 h-4 text-[#FE7311] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3: BROKER COMPLIANCE */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] flex flex-col justify-between space-y-6 hover:border-[#0D9BA3] transition shadow-sm hover:shadow-md group">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#3A2E29] bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                  <span>Compliance Only</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                    BROKER COMPLIANCE
                  </h3>
                  <div className="text-xs font-semibold text-[#FE7311] mt-1">
                    Already managing the lease or sale?
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Send us the file when you need help getting it through brokerage compliance.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4]">
                <button
                  onClick={onOpenBrokerCompliance || onExploreServices}
                  className="inline-flex items-center space-x-1.5 text-[#0D9BA3] hover:text-[#0a7f86] font-bold text-xs uppercase tracking-wider transition cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>SEE BROKER COMPLIANCE PRICING</span>
                  <ArrowRight className="w-4 h-4 text-[#FE7311] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 — WHAT HAPPENS AFTER YOU SUBMIT A CONTRACT (H.O.M.E. CLOSE METHOD) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <span>CONTRACT-TO-CLOSE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight">
              What happens after you send us the contract?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              For Contract-to-Close, HTC uses the H.O.M.E. Close Method to organize the work from executed agreement through Post-Close.
            </p>
          </div>

          {/* Continuous Four-Part Horizontal Progression on Desktop / Vertical Progression on Mobile */}
          <div className="relative">
            
            {/* Horizontal Continuous Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-10 right-10 h-0.5 bg-[#D8D2D4] -z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
              {homeMethodSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    {/* Anchor Letter Node & Mobile Track */}
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-14 h-14 rounded-2xl bg-white border-2 flex items-center justify-center font-black text-2xl shadow-sm flex-shrink-0"
                        style={{ borderColor: step.color, color: step.color }}
                      >
                        {step.letter}
                      </div>
                      <div className="h-0.5 flex-grow bg-[#D8D2D4] lg:hidden" />
                    </div>

                    <div className="space-y-2 pt-1">
                      <h3 className="text-xl font-bold text-[#3A2E29] font-serif">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Link Under Process */}
          <div className="pt-2">
            <button
              onClick={onCompareBasePro || onExploreServices}
              className="inline-flex items-center space-x-2 text-[#FE7311] hover:text-[#e06209] font-bold text-sm uppercase tracking-wider transition cursor-pointer group"
            >
              <span>COMPARE BASE + PRO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5 — FAQ */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <span>HOW IT WORKS · FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight">
              A few things agents ask us.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#3A2E29] hover:text-[#0D9BA3] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#FE7311] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-700 font-normal leading-relaxed border-t border-[#D8D2D4] pt-4 bg-white space-y-3">
                      <p>{faq.a}</p>
                      {faq.linkText && faq.linkAction && (
                        <div className="pt-2">
                          <button
                            onClick={faq.linkAction}
                            className="inline-flex items-center space-x-1.5 text-[#FE7311] hover:text-[#e06209] font-bold text-xs uppercase tracking-wider transition cursor-pointer group"
                          >
                            <span>{faq.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Have More Questions Prompt Block */}
          <div className="pt-6 p-8 rounded-2xl bg-[#EEEAEB] border border-[#D8D2D4] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-[#3A2E29] font-serif">
                Have more questions?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-normal">
                Book a 15-Minute Fit Call and we’ll talk through what you need.
              </p>
            </div>
            <button
              onClick={onBookCall}
              className="bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer flex-shrink-0 group"
            >
              <span>BOOK A 15-MINUTE FIT CALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6 — PRIMARY PAGE CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#3A2E29] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
            <span>PROTECT THE AGENT · PROTECT THE BROKER · PROTECT THE CLIENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight leading-tight">
            Ready to see if HTC fits the way you work?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Start with a focused 15-minute conversation. We’ll learn what you need and determine whether HTC is the right fit for your business.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto bg-[#FE7311] hover:bg-[#e06209] text-white px-9 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-2xl hover:shadow-orange-500/20 transition flex items-center justify-center space-x-2.5 cursor-pointer group"
            >
              <PhoneCall className="w-4 h-4" />
              <span>BOOK A 15-MINUTE FIT CALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm border border-white/20 transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>VIEW SERVICES + PRICING</span>
              <ArrowRight className="w-4 h-4 text-[#0D9BA3]" />
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center space-x-6 text-xs text-slate-400 font-medium">
            <span>Direct Phone: <strong className="text-white">{PHONE_NUMBER}</strong></span>
          </div>

        </div>
      </section>

    </main>
  );
};

