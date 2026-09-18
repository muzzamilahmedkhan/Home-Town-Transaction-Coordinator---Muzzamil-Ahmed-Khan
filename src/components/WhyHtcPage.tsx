import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  PhoneCall,
  Star,
  ChevronDown,
  ChevronUp,
  FileText,
  Play,
  Volume2,
  VolumeX,
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { PHONE_NUMBER } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal?: () => void;
  onExploreServices: () => void;
  onGoHome: () => void;
  onOpenHowItWorks: () => void;
  onOpenAbout?: () => void;
  onOpenSpanish?: () => void;
  onOpenReviews?: () => void;
}

export const WhyHtcPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onExploreServices,
  onGoHome,
  onOpenHowItWorks,
  onOpenAbout,
  onOpenSpanish,
  onOpenReviews
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // SEO & AEO dynamic document title and meta description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Why HTC | Florida Transaction Coordinator Support';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalMetaContent = metaDesc ? metaDesc.getAttribute('content') : '';
    const targetMetaContent =
      'See why Florida Realtors choose Hometown Transaction Coordinators for experienced, boutique transaction support built around their brokerage, workflow, communication preferences and clients.';

    if (metaDesc) {
      metaDesc.setAttribute('content', targetMetaContent);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', targetMetaContent);
      document.head.appendChild(metaDesc);
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalMetaContent) {
        metaDesc.setAttribute('content', originalMetaContent);
      }
    };
  }, []);

  const transcriptText = `Hi, I'm Michelle Martinez, founder of Hometown Transaction Coordinators.

I started supporting Florida real estate professionals back in 1995. Over three decades of Florida market shifts, I saw firsthand how hard top agents work to win listings, negotiate contracts, and protect their clients. Yet too often, behind the scenes, agents were stuck chasing missing initials, calculating statutory deadlines, and uploading compliance files late into the night.

In 2018, I founded HTC to give Florida Realtors a better standard of support.

We are not an isolated solo freelancer who disappears on sick days, nor an overseas virtual assistant reading scripts. HTC is a boutique Florida support agency built around experienced people, structured team redundancies, and deep Florida FAR/BAR contract mastery.

When you partner with HTC, your business gets dedicated coordinators backed by a cohesive team, bilingual English and Spanish support, audit-ready broker files, and a calm, proactive closing experience for your clients.

We invite you to book a 15-Minute Fit Call to see how HTC can support your business.`;

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
        name: 'Why HTC',
        item: 'https://hometowntc.com/why-htc/'
      }
    ]
  };

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Why HTC | Michelle Martinez on the Boutique TC Advantage',
    description:
      'Founder Michelle Martinez shares why Florida Realtors choose Hometown Transaction Coordinators — 30+ years of Florida contract heritage, dedicated team accountability, and boutique operational excellence.',
    thumbnailUrl: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
    ],
    uploadDate: '2026-01-15T08:00:00-05:00',
    duration: 'PT2M10S',
    contentUrl: 'https://hometowntc.com/assets/HTC_VSL_05_Why-HTC_Michelle_v1.mp4',
    embedUrl: 'https://hometowntc.com/why-htc/',
    transcript: transcriptText
  };

  // Structured visible FAQs for direct AEO question matching & Schema.org FAQPage
  const faqData = [
    {
      q: 'Why choose Hometown Transaction Coordinators?',
      a: 'Florida Realtors choose Hometown Transaction Coordinators because we combine experienced transaction coordination with a boutique agency model. Rather than relying on a single solo freelancer or a rigid overseas assistant, HTC builds your brokerage compliance, templates, communication preferences, and client touches directly into an organized workflow backed by an experienced team.',
      linkAction: null,
      linkLabel: null
    },
    {
      q: 'What makes HTC different from another transaction coordinator?',
      a: 'HTC combines experienced Florida real estate support with a boutique team model and a setup built around the way you do business. We do not expect every agent, brokerage or client experience to fit one generic workflow.',
      linkAction: null,
      linkLabel: null
    },
    {
      q: 'Does HTC customize its transaction coordination process?',
      a: 'Yes. Where our standard defaults work for you, we use them. Where you have specific brokerage requirements, custom templates, communication preferences or personalized client touches, we build those into your Setup during onboarding so future files flow seamlessly.',
      linkAction: onOpenHowItWorks,
      linkLabel: 'SEE HOW SETUP WORKS'
    },
    {
      q: 'Is Hometown Transaction Coordinators a solo TC or an agency?',
      a: 'HTC is a boutique real estate support agency. You receive the personal service and dedicated attention of a boutique partner, backed by the stability, redundancies, and standards of an established Florida team structure.',
      linkAction: onOpenAbout,
      linkLabel: 'MEET THE TEAM'
    },
    {
      q: 'Does HTC work with Florida Realtors statewide?',
      a: 'Yes. HTC was founded in South Florida in 2018 with roots dating back to 1995, and we provide transaction coordination for Florida Realtors across the entire state of Florida.',
      linkAction: null,
      linkLabel: null
    },
    {
      q: 'Does HTC provide Spanish transaction coordination support?',
      a: 'Yes. HTC provides professional bilingual transaction support in English and Spanish, ensuring clear and comfortable communication with your Spanish-speaking clients, cooperating agents, and transaction partners.',
      linkAction: onOpenSpanish || (() => { window.location.hash = '#/es/'; }),
      linkLabel: 'VER HTC EN ESPAÑOL'
    },
    {
      q: 'What services can I use with HTC?',
      a: 'HTC supports Listing Launch, Contract-to-Close, Broker Compliance, and customized support for Florida teams and brokerages.',
      linkAction: onExploreServices,
      linkLabel: 'VIEW SERVICES + PRICING'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
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

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 — HERO + VSL (SPLIT COPY/VIDEO DESKTOP, STACKED ON MOBILE) */}
      {/* ------------------------------------------------------------------ */}
      <header className="pt-10 pb-14 sm:pt-14 sm:pb-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-bold text-slate-500 mb-8">
            <button
              onClick={onGoHome}
              className="hover:text-[#0D9BA3] transition cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400">→</span>
            <span className="text-[#3A2E29]">Why HTC</span>
          </nav>

          {/* Grid Layout: Desktop Split Copy / Video, Mobile Stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Eyebrow, H1, Body, CTAs */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/20">
                <span>WHY HTC</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
                Built around your business. Backed by experience.
              </h1>

              {/* Body Copy */}
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                Hometown Transaction Coordinators is a boutique Florida real estate support agency built for Realtors who want experienced people, a dependable team, and support that reflects the way they actually do business.
              </p>

              {/* Primary CTA & Secondary Link */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <button
                  onClick={onBookCall}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#FE7311] hover:bg-[#e06209] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition cursor-pointer group"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>BOOK A 15-MINUTE FIT CALL</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenHowItWorks}
                  className="inline-flex items-center justify-center sm:justify-start space-x-1.5 text-[#0D9BA3] hover:text-[#0a7f86] font-bold text-sm tracking-wide transition py-2 cursor-pointer group"
                >
                  <span>SEE HOW HTC WORKS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Column: 16:9 VSL Player (Reserved for HTC_VSL_05_Why-HTC_Michelle_v1.mp4) */}
            <div className="lg:col-span-6">
              <div className="space-y-3">
                
                {/* 16:9 Aspect Video Container */}
                <div className="relative w-full aspect-video bg-[#3A2E29] rounded-2xl overflow-hidden shadow-2xl border border-[#D8D2D4] group">
                  
                  {/* Subtle Poster / Video Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#241C19] via-[#3A2E29] to-[#4D3E38] flex flex-col justify-between p-6">
                    
                    {/* Top Bar inside Video */}
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-semibold text-slate-200 border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-[#0D9BA3] animate-pulse" />
                        <span>HTC_VSL_05_Why-HTC_Michelle_v1.mp4</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-white/90">
                        2:10
                      </div>
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="flex flex-col items-center justify-center space-y-3 my-auto z-10">
                      <button
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        aria-label="Play Why HTC video"
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
                        <div className="text-white font-bold text-sm sm:text-base font-serif">
                          {isVideoPlaying ? 'Playing Why HTC Video' : 'Watch: Why Choose HTC (2:10)'}
                        </div>
                        <div className="text-slate-300 text-xs font-normal">
                          Michelle Martinez on the Boutique Agency Difference
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

                {/* Accessible Transcript Toggle */}
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs text-slate-500 font-normal">
                    Video: Michelle Martinez, Founder
                  </span>
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="text-xs font-bold text-[#0D9BA3] hover:text-[#0a7f86] flex items-center space-x-1 transition cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{showTranscript ? 'Hide Transcript' : 'View Transcript'}</span>
                    {showTranscript ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Collapsible HTML Transcript Box */}
                {showTranscript && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#EEEAEB] border border-[#D8D2D4] text-xs sm:text-sm text-slate-700 font-normal leading-relaxed space-y-2.5 animate-in fade-in duration-200">
                    <div className="font-bold text-[#3A2E29] uppercase tracking-wider text-[11px]">
                      Full Video Transcript:
                    </div>
                    {transcriptText.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* Proof line beneath hero (Elegant & Compact) */}
          <div className="mt-12 pt-8 border-t border-[#D8D2D4]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
              
              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-[#3A2E29] font-serif">
                  Since 1995
                </div>
                <div className="text-xs text-slate-600 font-normal">
                  Michelle serving Realtors
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-[#0D9BA3] font-serif">
                  Est. 2018
                </div>
                <div className="text-xs text-slate-600 font-normal">
                  HTC agency founded
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-[#3A2E29] font-serif">
                  20,000+
                </div>
                <div className="text-xs text-slate-600 font-normal">
                  Contracts across founder experience
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-lg sm:text-xl font-bold text-[#FE7311] font-serif">
                  Bilingual
                </div>
                <div className="text-xs text-slate-600 font-normal">
                  English + Spanish support
                </div>
              </div>

            </div>
          </div>

        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 — THE HTC DIFFERENCE (EDITORIAL & PREMIUM 2x2 LAYOUT) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header: Eyebrow, Heading, Supporting Copy */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <span>THE HTC STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
              Not all transaction support is built the same.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              The difference is not a longer checklist. It is the experience, structure and care behind how the work gets done.
            </p>
          </div>

          {/* 4 Feature Columns (2x2 Layout with Refined Number Accents) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Block 01 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D8D2D4] space-y-5 shadow-xs transition hover:border-[#0D9BA3]/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D8D2D4]/60 pb-4">
                  <span className="text-xs font-mono font-bold text-[#0D9BA3] tracking-widest uppercase">
                    CORE PILLAR
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#0D9BA3]">
                    01
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif leading-snug">
                  Experience Comes First
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  Technology helps us work efficiently, but it does not replace the experience behind the work. HTC combines established workflows with experienced human review, communication and follow-through.
                </p>
              </div>
            </div>

            {/* Block 02 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D8D2D4] space-y-5 shadow-xs transition hover:border-[#0D9BA3]/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D8D2D4]/60 pb-4">
                  <span className="text-xs font-mono font-bold text-[#0D9BA3] tracking-widest uppercase">
                    CORE PILLAR
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#0D9BA3]">
                    02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif leading-snug">
                  Your Business Is Not a Template
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  We have HTC defaults when you need them, but we do not assume every real estate business works the same way. Your brokerage requirements, templates, communication preferences and unique client touches are built into your Setup so the support feels like an extension of your business.
                </p>
              </div>
            </div>

            {/* Block 03 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D8D2D4] space-y-5 shadow-xs transition hover:border-[#0D9BA3]/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D8D2D4]/60 pb-4">
                  <span className="text-xs font-mono font-bold text-[#0D9BA3] tracking-widest uppercase">
                    CORE PILLAR
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#0D9BA3]">
                    03
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif leading-snug">
                  Boutique by Design
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  HTC gives you the relationship and personal attention of a boutique company with the structure of a team behind it. Your business does not have to depend on one person remembering how you like things done. Your setup and standards become part of the way HTC supports your files.
                </p>
              </div>
              <div className="pt-3">
                <button
                  onClick={onOpenAbout}
                  className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
                >
                  <span>MEET THE HTC TEAM</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Block 04 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#D8D2D4] space-y-5 shadow-xs transition hover:border-[#0D9BA3]/60 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D8D2D4]/60 pb-4">
                  <span className="text-xs font-mono font-bold text-[#0D9BA3] tracking-widest uppercase">
                    CORE PILLAR
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#0D9BA3]">
                    04
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif leading-snug">
                  Florida Is Our Lane
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  HTC was built around supporting Florida real estate professionals. Our transaction workflows, forms, brokerage requirements and training are designed around the work Florida Realtors handle every day.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 — WHY SETUP MATTERS (BUILT AROUND YOU) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Copy & Strong Callout */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/20">
                <span>BUILT AROUND YOU</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
                We learn how you work before we work your files.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                We can absolutely support a business using HTC defaults. But real estate businesses are not all the same.
              </p>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                During Setup, we bring your brokerage requirements, templates, communication preferences and client touches into our workflow. That intentional work upfront allows future files to plug into a system already built around the way you do business.
              </p>

              {/* Strong Callout Box */}
              <div className="p-6 rounded-2xl bg-[#EEEAEB] border-l-4 border-[#0D9BA3] border-y border-r border-[#D8D2D4]">
                <p className="text-lg sm:text-xl font-bold text-[#3A2E29] font-serif tracking-tight">
                  Set it up once. Carry your standard forward.
                </p>
              </div>

              {/* Text Link */}
              <div className="pt-2">
                <button
                  onClick={onOpenHowItWorks}
                  className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
                >
                  <span>SEE HOW GETTING STARTED WORKS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Column: Simple, Elegant Visual Showing Custom Elements into HTC Workflow */}
            <div className="lg:col-span-6">
              <div className="bg-[#EEEAEB] rounded-3xl p-8 sm:p-10 border border-[#D8D2D4] shadow-xs space-y-6">
                
                <div className="text-xs font-mono font-bold text-[#0D9BA3] uppercase tracking-widest">
                  YOUR BUSINESS ARCHITECTURE
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] flex items-center space-x-3 shadow-2xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FE7311] flex-shrink-0" />
                    <span className="text-sm font-bold text-[#3A2E29]">Your Brokerage</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] flex items-center space-x-3 shadow-2xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0D9BA3] flex-shrink-0" />
                    <span className="text-sm font-bold text-[#3A2E29]">Your Templates</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] flex items-center space-x-3 shadow-2xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0D9BA3] flex-shrink-0" />
                    <span className="text-sm font-bold text-[#3A2E29]">Your Communication</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] flex items-center space-x-3 shadow-2xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FE7311] flex-shrink-0" />
                    <span className="text-sm font-bold text-[#3A2E29]">Your Client Touches</span>
                  </div>
                </div>

                {/* Transition Indicator */}
                <div className="flex items-center justify-center py-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 bg-white/70 px-4 py-1.5 rounded-full border border-[#D8D2D4]">
                    <span>integrated seamlessly</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FE7311]" />
                  </div>
                </div>

                {/* Destination Box: HTC Workflow */}
                <div className="bg-[#3A2E29] text-white p-6 rounded-2xl border border-[#0D9BA3]/40 shadow-sm text-center space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                    THE RESULT
                  </div>
                  <div className="text-lg sm:text-xl font-bold font-serif">
                    Built directly into the HTC workflow.
                  </div>
                  <p className="text-xs text-slate-300 font-normal">
                    Your preferences and requirements become part of the HTC workflow so future files can be supported more consistently.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 — WHAT WE ARE BUILT TO PROTECT */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-[#3A2E29] text-white border-b border-[#241C19] relative overflow-hidden">
        {/* Subtle radial glow background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/30">
              <span>OUR STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-[1.1]">
              Protect the Agent. Protect the Broker. Protect the Client.
            </h2>
          </div>

          {/* Three Equal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-4">
            
            {/* Column 1: Protect the Agent */}
            <div className="space-y-4 pt-6 border-t-2 border-[#0D9BA3]">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">
                Protect the Agent
              </h3>
              <p className="text-base text-slate-300 font-normal leading-relaxed">
                Keep the administrative work organized, the written trail clear, and anything requiring the agent’s attention visible.
              </p>
            </div>

            {/* Column 2: Protect the Broker */}
            <div className="space-y-4 pt-6 border-t-2 border-[#FE7311]">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">
                Protect the Broker
              </h3>
              <p className="text-base text-slate-300 font-normal leading-relaxed">
                Work within the brokerage’s file requirements and help maintain an organized transaction record for review.
              </p>
            </div>

            {/* Column 3: Protect the Client */}
            <div className="space-y-4 pt-6 border-t-2 border-white/40">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">
                Protect the Client
              </h3>
              <p className="text-base text-slate-300 font-normal leading-relaxed">
                Support a professional, organized experience with communication and follow-through appropriate to the service selected.
              </p>
            </div>

          </div>

          {/* Bottom Link Underneath */}
          <div className="pt-6 border-t border-white/10">
            <button
              onClick={onOpenHowItWorks}
              className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#2dd4bf] transition cursor-pointer group"
            >
              <span>SEE HOW HTC WORKS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5 — BOUTIQUE DOES NOT MEAN LIMITED */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/20">
              <span>SUPPORT THAT CAN GROW WITH YOU</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
              One relationship. More ways to use it.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Your support needs may change as your business changes. HTC can meet you at different points in the work — from getting a listing ready to launch, to managing a contract through Post-Close, to brokerage compliance and customized team support.
            </p>
          </div>

          {/* Simple Horizontal Service Line & Secondary Capabilities */}
          <div className="bg-[#EEEAEB] rounded-2xl p-8 sm:p-10 border border-[#D8D2D4] space-y-8 shadow-xs">
            
            {/* Primary Horizontal Service Line */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-[#0D9BA3] uppercase tracking-widest">
                CORE TRANSACTION LIFECYCLE
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="bg-white p-5 rounded-xl border border-[#D8D2D4] flex items-center justify-between shadow-2xs">
                  <span className="text-base font-bold text-[#3A2E29] font-serif">Listing Launch</span>
                  <ArrowRight className="w-4 h-4 text-[#FE7311] hidden md:block" />
                </div>
                
                <div className="bg-white p-5 rounded-xl border border-[#D8D2D4] flex items-center justify-between shadow-2xs">
                  <span className="text-base font-bold text-[#3A2E29] font-serif">Contract-to-Close</span>
                  <ArrowRight className="w-4 h-4 text-[#FE7311] hidden md:block" />
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#D8D2D4] flex items-center justify-between shadow-2xs">
                  <span className="text-base font-bold text-[#3A2E29] font-serif">Post-Close</span>
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
                </div>
              </div>
            </div>

            {/* Secondary Capabilities Beneath It */}
            <div className="pt-6 border-t border-[#D8D2D4] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-[#3A2E29]">
                <span className="bg-white px-3.5 py-2 rounded-lg border border-[#D8D2D4]">Broker Compliance</span>
                <span className="text-slate-400">·</span>
                <span className="bg-white px-3.5 py-2 rounded-lg border border-[#D8D2D4]">Teams + Brokerages</span>
                <span className="text-slate-400">·</span>
                <span className="bg-white px-3.5 py-2 rounded-lg border border-[#D8D2D4]">Staff Training</span>
              </div>

              {/* Primary Link */}
              <button
                onClick={onExploreServices}
                className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
              >
                <span>EXPLORE SERVICES + PRICING</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6 — ENGLISH + SPANISH SUPPORT */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#0D9BA3]/40 shadow-xl space-y-8">
            
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/30">
                <Globe2 className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>BILINGUAL SUPPORT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight leading-tight">
                Communication that feels comfortable.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                HTC supports real estate communication in English and Spanish, helping agents serve clients and transaction parties in the language that works best for the conversation.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                Professional bilingual coordination across Florida buyers, sellers, cooperating agents, and title teams.
              </div>

              <button
                onClick={() => {
                  if (onOpenSpanish) {
                    onOpenSpanish();
                  } else {
                    window.location.hash = '#/es/';
                  }
                }}
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider transition cursor-pointer group flex-shrink-0"
              >
                <span>VER HTC EN ESPAÑOL</span>
                <ArrowRight className="w-4 h-4 text-[#0D9BA3] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7 — SOCIAL PROOF */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/20">
              <Star className="w-3.5 h-3.5 text-[#FE7311] fill-[#FE7311]" />
              <span>FROM THE AGENTS WE SUPPORT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
              The work should speak for itself.
            </h2>
          </div>

          {/* Three Testimonials: 3 columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1: Gaby Martinez */}
            <div className="bg-[#EEEAEB] rounded-2xl p-8 border border-[#D8D2D4] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#0D9BA3]/50 transition">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#3A2E29] font-normal leading-relaxed italic">
                  “Michelle and Mary are absolutely amazing Transaction Coordinators! Their attention to detail, organization, and communication are truly unmatched. They keep every file on track and make the entire process smooth and stress-free. So grateful to have them on our team!”
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4] space-y-0.5">
                <div className="font-bold text-sm sm:text-base text-[#3A2E29] font-serif">
                  Gaby Martinez
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Xtreme By LPT Realty
                </div>
              </div>
            </div>

            {/* Testimonial 2: Zuzel Gonzalez */}
            <div className="bg-[#EEEAEB] rounded-2xl p-8 border border-[#D8D2D4] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#0D9BA3]/50 transition">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#3A2E29] font-normal leading-relaxed italic">
                  “Michelle is my go to transaction coordinator for all of my real estate deals. She is always organized, professional, and on top of every detail from start to finish. I honestly couldn’t do my transactions without her support.”
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4] space-y-0.5">
                <div className="font-bold text-sm sm:text-base text-[#3A2E29] font-serif">
                  Zuzel Gonzalez
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Florida Realtor
                </div>
              </div>
            </div>

            {/* Testimonial 3: Cindy Rios */}
            <div className="bg-[#EEEAEB] rounded-2xl p-8 border border-[#D8D2D4] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#0D9BA3]/50 transition">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#3A2E29] font-normal leading-relaxed italic">
                  “Michelle takes so much weight off my shoulders and keeps everything running smoothly at all times. Her understanding of real estate laws and compliance gives me complete peace of mind because I know nothing is being overlooked.”
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4] space-y-0.5">
                <div className="font-bold text-sm sm:text-base text-[#3A2E29] font-serif">
                  Cindy Rios
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Florida Realtor
                </div>
              </div>
            </div>

          </div>

          {/* Under Them: READ MORE AGENT REVIEWS → */}
          <div className="pt-4 border-t border-[#D8D2D4] flex items-center justify-start">
            <button
              onClick={() => {
                if (onOpenReviews) {
                  onOpenReviews();
                } else {
                  window.location.hash = '#/reviews/';
                }
              }}
              className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
            >
              <span>READ MORE AGENT REVIEWS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 8 — FAQ */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <span>WHY HTC · FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
              A few things you may want to know.
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#D8D2D4] overflow-hidden transition shadow-2xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#3A2E29] hover:text-[#0D9BA3] transition cursor-pointer font-serif"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#FE7311] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-700 font-normal leading-relaxed border-t border-[#D8D2D4]/50 pt-4 bg-white space-y-4">
                      <p>{faq.a}</p>
                      {faq.linkAction && faq.linkLabel && (
                        <div>
                          <button
                            onClick={faq.linkAction}
                            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
                          >
                            <span>{faq.linkLabel}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Card: Still deciding if HTC is right for you? */}
          <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-10 border border-[#0D9BA3]/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Still deciding if HTC is right for you?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Book a 15-Minute Fit Call. We’ll learn how you work, what you need, and determine whether we’re the right fit.
              </p>
            </div>
            
            <button
              onClick={onBookCall}
              className="bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center space-x-2.5 cursor-pointer group flex-shrink-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>BOOK A 15-MINUTE FIT CALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 9 — FINAL CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 sm:py-32 bg-white border-t border-[#D8D2D4] text-[#3A2E29]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight max-w-3xl mx-auto">
            Your business already has a standard. Your support should meet it.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
            If you are looking for experienced, relationship-driven real estate support built around the way you work, let’s see if HTC is the right fit.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
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
              className="inline-flex items-center justify-center space-x-1.5 text-[#0D9BA3] hover:text-[#0a7f86] font-bold text-sm uppercase tracking-wider transition py-2 cursor-pointer group"
            >
              <span>EXPLORE SERVICES + PRICING</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

    </main>
  );
};

