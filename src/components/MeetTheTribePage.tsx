import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Clock,
  Heart,
  Globe2,
  Star,
  FileCheck2
} from 'lucide-react';
import { PHONE_NUMBER, MEET_MICHELLE_IMAGE, FOUNDER_IMAGE } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal?: () => void;
  onExploreServices?: () => void;
  onOpenPricing?: () => void;
  onOpenTransactionCoordination?: () => void;
  onOpenListingCoordination?: () => void;
  onOpenFaq?: () => void;
  onGoHome: () => void;
  onOpenHowItWorks: () => void;
  onOpenAboutMichelle: () => void;
  onOpenWhyHtc: () => void;
  onOpenSpanish?: () => void;
  onOpenReviews?: () => void;
}

export const MeetTheTribePage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onExploreServices,
  onOpenPricing,
  onOpenTransactionCoordination,
  onOpenListingCoordination,
  onOpenFaq,
  onGoHome,
  onOpenHowItWorks,
  onOpenAboutMichelle,
  onOpenWhyHtc,
  onOpenSpanish,
  onOpenReviews
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // SEO & AEO title and description
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Meet the HTC Team | Florida Transaction Coordinators';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalMetaContent = metaDesc ? metaDesc.getAttribute('content') : '';
    const targetMetaContent =
      'Meet the team behind Hometown Transaction Coordinators and learn how Florida Realtors work with one experienced Lead TC backed by a Dedicated Hometown Team.';

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
        name: 'Meet the HTC Team',
        item: 'https://hometowntc.com/team/'
      }
    ]
  };

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Meet the HTC Team | Florida Transaction Coordinators',
    description:
      'Meet the team behind Hometown Transaction Coordinators and learn how Florida Realtors work with one experienced Lead TC backed by a Dedicated Hometown Team.',
    url: 'https://hometowntc.com/team/'
  };

  const teamOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hometown Transaction Coordinators',
    alternateName: 'HTC',
    url: 'https://hometowntc.com',
    description:
      'Boutique Florida real estate support agency. Each agent works with an experienced Lead Transaction Coordinator who serves as their primary day-to-day contact, backed by a Dedicated Hometown Team.',
    member: [
      {
        '@type': 'Person',
        name: 'Michelle Martinez',
        jobTitle: 'Founder + Owner',
        worksFor: {
          '@type': 'Organization',
          name: 'Hometown Transaction Coordinators'
        }
      },
      {
        '@type': 'Person',
        name: 'Mary Martinez',
        jobTitle: 'Trainer',
        worksFor: {
          '@type': 'Organization',
          name: 'Hometown Transaction Coordinators'
        }
      },
      {
        '@type': 'Person',
        name: 'Angela Paniagua',
        jobTitle: 'HTC Billing Department',
        worksFor: {
          '@type': 'Organization',
          name: 'Hometown Transaction Coordinators'
        }
      },
      {
        '@type': 'Person',
        name: 'Laura Villalobos',
        jobTitle: 'Executive Assistant to Michelle Martinez',
        worksFor: {
          '@type': 'Organization',
          name: 'Hometown Transaction Coordinators'
        }
      }
    ]
  };

  const teamFaqs = [
    {
      id: 'who-communicate',
      q: 'Who will I communicate with day to day?',
      a: 'Your Lead TC. You’ll meet them during Setup, and they become your main HTC contact.'
    },
    {
      id: 'what-is-dedicated-team',
      q: 'What is a Dedicated Hometown Team?',
      a: 'It’s the tech-enabled HTC team supporting the work behind your Lead TC to help keep your files organized and moving.'
    },
    {
      id: 'communicate-whole-team',
      q: 'Do I have to communicate with the whole team?',
      a: 'No. Your Lead TC is your main point of contact. We coordinate the rest internally.'
    },
    {
      id: 'lead-tc-unavailable',
      q: 'What happens if my Lead TC is unavailable?',
      a: 'Your Dedicated Hometown Team already supports the work, so if your Lead TC is temporarily unavailable, another team member familiar with the file can step in and help keep things moving without you starting over.'
    },
    {
      id: 'talk-to-michelle',
      q: 'Can I talk to Michelle?',
      a: 'Yes. Your Lead TC handles the day-to-day, but Michelle is available if you want to share feedback or if something unusual needs her perspective.',
      linkText: 'MEET MICHELLE →',
      linkAction: 'about'
    },
    {
      id: 'when-meet-lead-tc',
      q: 'When do I meet my Lead TC?',
      a: 'During Setup. Once we learn how you do business, we’ll introduce you to the Lead TC who will be your day-to-day HTC contact.',
      linkText: 'SEE HOW SETUP WORKS →',
      linkAction: 'how-it-works-setup'
    }
  ];

  return (
    <main className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      {/* Schema.org Breadcrumb, AboutPage, Organization/Person, and FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamOrganizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: teamFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          })
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 — HERO */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-white border-b border-[#D8D2D4] pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase">
            <button
              onClick={onGoHome}
              className="hover:text-[#3A2E29] transition cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#D8D2D4]">/</span>
            <span className="text-[#3A2E29]">Meet the Tribe</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Headline & Intro */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Pill */}
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
                <Users className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>MEET THE TRIBE</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-[1.15]">
                You’ll know who is handling your files.
              </h1>

              {/* Subheading Body / Primary AEO Answer */}
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
                Hometown Transaction Coordinators is a boutique Florida real estate support agency. Each agent works with an experienced Lead Transaction Coordinator who serves as their primary day-to-day contact. That Lead TC is backed by a Dedicated Hometown Team that uses people, systems, and technology to support the work behind the scenes and help keep files moving.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onBookCall}
                  className="bg-[#FE7311] hover:bg-[#e06209] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2 cursor-pointer group"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>BOOK A 15-MINUTE FIT CALL</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenHowItWorks}
                  className="inline-flex items-center justify-center space-x-1.5 text-[#0D9BA3] hover:text-[#0a7f86] font-bold text-sm uppercase tracking-wider transition py-2 cursor-pointer group"
                >
                  <span>SEE HOW HTC WORKS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* 4 Fast Facts Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#D8D2D4]/60 text-xs">
                <div className="space-y-0.5">
                  <div className="font-extrabold text-[#3A2E29]">1 Lead TC</div>
                  <div className="text-slate-500 text-[11px]">Main Point of Contact</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-extrabold text-[#0D9BA3]">Dedicated Team</div>
                  <div className="text-slate-500 text-[11px]">Shared Support</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-extrabold text-[#3A2E29]">Tech-Enabled</div>
                  <div className="text-slate-500 text-[11px]">People + Systems + Technology</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-extrabold text-[#FE7311]">Bilingual</div>
                  <div className="text-slate-500 text-[11px]">English + Spanish</div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#EEEAEB] rounded-3xl p-6 sm:p-8 border border-[#D8D2D4] space-y-6">
                
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3]">
                    THE HTC PUBLIC MODEL
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                    Lead TC + Dedicated Hometown Team
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    You get the personalized, high-touch care of a dedicated relationship coordinator combined with the operational stability of a Florida boutique agency.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Lead TC Card */}
                  <div className="bg-white p-4 rounded-2xl border border-[#0D9BA3]/40 space-y-1.5">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-[#FE7311]" />
                      <span>Your Lead Transaction Coordinator</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-normal">
                      Direct phone, text, and email partner. Coordinates the communication and follow-up included in the service you selected.
                    </p>
                  </div>

                  {/* Hometown Team Card */}
                  <div className="bg-white p-4 rounded-2xl border border-[#D8D2D4] space-y-1.5">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#3A2E29] uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
                      <span>Dedicated Hometown Team</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-normal">
                      Behind-the-scenes quality audit, brokerage compliance upload, timeline calendar locks, and built-in absence coverage.
                    </p>
                  </div>

                  {/* Leadership Card */}
                  <div className="bg-[#3A2E29] text-white p-4 rounded-2xl border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
                        <Award className="w-4 h-4 text-[#FE7311]" />
                        <span>Founder Standards & Oversight</span>
                      </div>
                      <span className="text-[10px] text-slate-300">Est. 2018</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-normal">
                      Michelle Martinez sets operational standards and remains accessible whenever an agent or file requires escalation perspective.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 — THE PEOPLE BEHIND HOMETOWN (OPERATIONS TEAM) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Users className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>HTC OPERATIONS TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              The people behind Hometown.
            </h2>
            <p className="text-base text-slate-700 font-normal leading-relaxed">
              Who they are and why you might see or hear from them across your account, training, and files.
            </p>
          </div>

          {/* 4 Operations Profiles: 4 across desktop, 2x2 tablet, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Profile 1: Michelle Martinez */}
            <div className="bg-white rounded-3xl p-6 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-4 transition hover:shadow-md hover:border-[#0D9BA3]/40">
              <div className="space-y-4">
                <div className="relative w-full aspect-square max-w-[200px] mx-auto overflow-hidden rounded-2xl border-2 border-[#D8D2D4]">
                  <img
                    src={MEET_MICHELLE_IMAGE}
                    alt="Michelle Martinez — Founder + Owner"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-[#3A2E29] font-serif">
                    Michelle Martinez
                  </h3>
                  <div className="text-xs font-extrabold text-[#0D9BA3] uppercase tracking-wider">
                    Founder + Owner
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal pt-1">
                    Michelle founded HTC and sets the standard for how our team supports agents and their files.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D8D2D4]/60">
                <button
                  onClick={onOpenAboutMichelle}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
                >
                  <span>MEET MICHELLE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Profile 2: Mary Martinez */}
            <div className="bg-white rounded-3xl p-6 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-4 transition hover:shadow-md hover:border-[#0D9BA3]/40">
              <div className="space-y-4">
                <div className="relative w-full aspect-square max-w-[200px] mx-auto overflow-hidden rounded-2xl border-2 border-[#D8D2D4] bg-[#EEEAEB] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold text-lg font-serif">
                      MM
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HTC Team</span>
                  </div>
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-[#3A2E29] font-serif">
                    Mary Martinez
                  </h3>
                  <div className="text-xs font-extrabold text-[#0D9BA3] uppercase tracking-wider">
                    Trainer
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal pt-1">
                    Mary trains the HTC team on the H.O.M.E. standard and how we support our agents and their files.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D8D2D4]/60 text-[11px] font-semibold text-slate-500">
                Operational Excellence & Team Training
              </div>
            </div>

            {/* Profile 3: Angela Paniagua */}
            <div className="bg-white rounded-3xl p-6 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-4 transition hover:shadow-md hover:border-[#0D9BA3]/40">
              <div className="space-y-4">
                <div className="relative w-full aspect-square max-w-[200px] mx-auto overflow-hidden rounded-2xl border-2 border-[#D8D2D4] bg-[#EEEAEB] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold text-lg font-serif">
                      AP
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HTC Billing</span>
                  </div>
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-[#3A2E29] font-serif">
                    Angela Paniagua
                  </h3>
                  <div className="text-xs font-extrabold text-[#0D9BA3] uppercase tracking-wider">
                    HTC Billing Department
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal pt-1">
                    Angela supports HTC billing and account-related questions for our agents.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D8D2D4]/60 text-[11px] font-semibold text-slate-500">
                Invoicing, CDA & Account Inquiries
              </div>
            </div>

            {/* Profile 4: Laura Villalobos */}
            <div className="bg-white rounded-3xl p-6 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-4 transition hover:shadow-md hover:border-[#0D9BA3]/40">
              <div className="space-y-4">
                <div className="relative w-full aspect-square max-w-[200px] mx-auto overflow-hidden rounded-2xl border-2 border-[#D8D2D4] bg-[#EEEAEB] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold text-lg font-serif">
                      LV
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Executive Support</span>
                  </div>
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-[#3A2E29] font-serif">
                    Laura Villalobos
                  </h3>
                  <div className="text-xs font-extrabold text-[#0D9BA3] uppercase tracking-wider">
                    Executive Assistant to Michelle Martinez
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal pt-1">
                    Laura supports Michelle and the day-to-day executive operations of HTC.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#D8D2D4]/60 text-[11px] font-semibold text-slate-500">
                Executive Coordination & Operations
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 — YOUR DEDICATED HOMETOWN TEAM */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Layers className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>HOW YOUR SUPPORT WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              One point of contact. A Dedicated Hometown Team working the file.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              You’ll meet your Lead TC during Setup. They are your main point of contact, learn how you do business, and keep you connected to what is happening across your files.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Behind that relationship is a tech-enabled HTC team working together to keep the administrative work organized and moving throughout the work you hire us to handle.
            </p>
          </div>

          {/* VISUAL ARCHITECTURE DIAGRAM: YOU <-> LEAD TC <-> HTC TEAM + SYSTEMS */}
          <div className="bg-[#EEEAEB] rounded-3xl p-6 sm:p-10 border border-[#D8D2D4] shadow-xs space-y-8">
            <div className="text-center space-y-1">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
                THE RELATIONSHIP & EXECUTION MODEL
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                How work moves between you and Hometown
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 lg:gap-2 items-center">
              
              {/* Box 1: YOU (The Agent) */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-6 border-2 border-[#D8D2D4] text-center space-y-3 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#3A2E29] text-white mx-auto flex items-center justify-center font-bold text-lg font-serif">
                  YOU
                </div>
                <div className="space-y-1">
                  <div className="text-base font-bold text-[#3A2E29] font-serif">The Agent</div>
                  <div className="text-xs text-[#FE7311] font-extrabold uppercase tracking-wider">Client & File Owner</div>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Focus on clients, showings, negotiations, and growing your pipeline.
                </p>
              </div>

              {/* Connector 1: Bi-directional Arrow */}
              <div className="lg:col-span-1 flex items-center justify-center py-2 lg:py-0">
                <div className="flex lg:flex-row flex-col items-center justify-center gap-1 text-[#0D9BA3] font-extrabold text-xs">
                  <div className="hidden lg:flex items-center space-x-1">
                    <span className="text-lg">◀</span>
                    <div className="h-0.5 w-6 bg-[#0D9BA3]"></div>
                    <span className="text-lg">▶</span>
                  </div>
                  <div className="flex lg:hidden flex-col items-center">
                    <span className="text-sm">▲</span>
                    <div className="w-0.5 h-6 bg-[#0D9BA3]"></div>
                    <span className="text-sm">▼</span>
                  </div>
                </div>
              </div>

              {/* Box 2: YOUR LEAD TC */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-6 border-2 border-[#0D9BA3] text-center space-y-3 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0D9BA3]"></div>
                <div className="w-12 h-12 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#0D9BA3]" />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-bold text-[#3A2E29] font-serif">Your Lead TC</div>
                  <div className="text-xs text-[#0D9BA3] font-extrabold uppercase tracking-wider">Main Point of Contact</div>
                </div>
                <p className="text-xs text-slate-700 leading-normal font-medium">
                  Learns your business and preferences, communicates with you, oversees the work, and surfaces items needing your attention.
                </p>
              </div>

              {/* Connector 2: Bi-directional Arrow */}
              <div className="lg:col-span-1 flex items-center justify-center py-2 lg:py-0">
                <div className="flex lg:flex-row flex-col items-center justify-center gap-1 text-[#0D9BA3] font-extrabold text-xs">
                  <div className="hidden lg:flex items-center space-x-1">
                    <span className="text-lg">◀</span>
                    <div className="h-0.5 w-6 bg-[#0D9BA3]"></div>
                    <span className="text-lg">▶</span>
                  </div>
                  <div className="flex lg:hidden flex-col items-center">
                    <span className="text-sm">▲</span>
                    <div className="w-0.5 h-6 bg-[#0D9BA3]"></div>
                    <span className="text-sm">▼</span>
                  </div>
                </div>
              </div>

              {/* Box 3: DEDICATED HOMETOWN TEAM + SYSTEMS */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-6 border-2 border-[#D8D2D4] text-center space-y-3 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#FE7311]/10 text-[#FE7311] mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#FE7311]" />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-bold text-[#3A2E29] font-serif">Dedicated Hometown Team + Systems</div>
                  <div className="text-xs text-[#FE7311] font-extrabold uppercase tracking-wider">Supporting The File</div>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  People, systems, and technology working together with shared processes and cross-coverage.
                </p>
              </div>

            </div>
          </div>

          {/* TWO MAIN COLUMN CARDS: YOUR LEAD TC vs YOUR DEDICATED HOMETOWN TEAM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: YOUR LEAD TC */}
            <div className="bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3] bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>YOUR LEAD TC</span>
                </div>
                <h3 className="text-2xl font-bold text-[#3A2E29] font-serif">
                  Your main day-to-day point of contact.
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  Your Lead TC learns your business and preferences, communicates directly with you, oversees the work, and surfaces items needing your attention.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4] space-y-2 text-xs text-slate-700">
                <div className="flex items-center space-x-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>Main day-to-day point of contact</span>
                </div>
                <div className="flex items-center space-x-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>Learns your business and preferences</span>
                </div>
                <div className="flex items-center space-x-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>Communicates with the agent and oversees the work</span>
                </div>
                <div className="flex items-center space-x-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>Surfaces items needing the agent's attention</span>
                </div>
              </div>
            </div>

            {/* Card 2: YOUR DEDICATED HOMETOWN TEAM */}
            <div className="bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3] bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                  <Users className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>YOUR DEDICATED HOMETOWN TEAM</span>
                </div>
                <h3 className="text-2xl font-bold text-[#3A2E29] font-serif">
                  The team working behind the file.
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  People, systems, and technology working together to support the work through a shared process and built-in cross-coverage.
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4] space-y-2 text-xs text-slate-700">
                <div className="flex items-center space-x-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>People + systems + technology supporting the work</span>
                </div>
                <div className="flex items-center space-x-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>Built-in cross-coverage so another team member can step in when needed.</span>
                </div>
                <div className="flex items-center space-x-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>Structured milestone tracking supported by shared HTC systems.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Link to H.O.M.E. Close Method */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenHowItWorks}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
            >
              <span>SEE THE H.O.M.E. CLOSE METHOD</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 — YOUR DAY-TO-DAY */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center sm:text-left">
            
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <PhoneCall className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>YOUR DAY-TO-DAY</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
                You always know who to call.
              </h2>

              <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed">
                Your Lead TC is your main point of contact. You do not need to figure out who inside HTC handles which part of the file. Start with your Lead TC, and the HTC team takes it from there.
              </p>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#D8D2D4]">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0D9BA3] font-serif italic">
                “One relationship for you. A team behind it.”
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5 — OUR PROMISE */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>OUR PROMISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Collaborative. Predictable. Transparent.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Every file we support is built around the same promise: work together, follow a clear process, and make it easy to see where things stand.
            </p>
          </div>

          {/* 3 Core Experience Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Collaborative */}
            <div className="bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-serif font-extrabold text-lg border border-[#D8D2D4]">
                  01
                </div>
                <h3 className="text-2xl font-bold text-[#3A2E29] font-serif">
                  Collaborative
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  We work alongside you and the people involved in the transaction to keep the administrative pieces moving.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D2D4] text-xs font-bold text-[#0D9BA3] flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FE7311]" />
                <span>True partnership with you & your partners</span>
              </div>
            </div>

            {/* Pillar 2: Predictable */}
            <div className="bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-serif font-extrabold text-lg border border-[#D8D2D4]">
                  02
                </div>
                <h3 className="text-2xl font-bold text-[#3A2E29] font-serif">
                  Predictable
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  Your file follows a structured HTC process, so you know how the work will move from one stage to the next.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D2D4] text-xs font-bold text-[#0D9BA3] flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FE7311]" />
                <span>Repeatable, reliable stage progression</span>
              </div>
            </div>

            {/* Pillar 3: Transparent */}
            <div className="bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-serif font-extrabold text-lg border border-[#D8D2D4]">
                  03
                </div>
                <h3 className="text-2xl font-bold text-[#3A2E29] font-serif">
                  Transparent
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  You can see what is moving, what is outstanding, and when something needs your attention.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D2D4] text-xs font-bold text-[#0D9BA3] flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FE7311]" />
                <span>Full visibility into timeline and action items</span>
              </div>
            </div>

          </div>

          {/* Supporting Information: Communication Standard */}
          <div className="bg-[#EEEAEB] rounded-3xl p-6 sm:p-8 border border-[#D8D2D4] flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0D9BA3] flex items-center justify-center flex-shrink-0 border border-[#D8D2D4]">
              <Clock className="w-6 h-6 text-[#0D9BA3]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#3A2E29]">
                Communication Standard
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Most requests are answered within one business hour. During high-volume days and peak season, please allow up to two business hours.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6 — FOUNDER-LED, TEAM-DELIVERED */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Michelle's Portrait */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 border-[#D8D2D4] shadow-xs">
                  <img
                    src={MEET_MICHELLE_IMAGE}
                    alt="Michelle Martinez — Founder + Owner"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg font-bold text-[#3A2E29] font-serif">
                    Michelle Martinez
                  </div>
                  <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
                    Founder + Owner
                  </div>
                </div>
              </div>

              {/* Founder-Led Content */}
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
                  <Award className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>FOUNDER-LED</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
                  Experience is built into the team.
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  <p>
                    Michelle Martinez founded HTC and sets the standards behind how our team supports agents and their files. Your Lead TC is your main point of contact, backed by the systems, team, and experience behind HTC.
                  </p>
                  <p>
                    If something unusual comes up and the team needs a second set of experienced eyes, or you want to share feedback about your HTC experience, Michelle is available.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenAboutMichelle}
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
                  >
                    <span>MEET MICHELLE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

            {/* ------------------------------------------------------------------ */}
      {/* BILINGUAL SUPPORT */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-3xl border border-[#D8D2D4] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center flex-shrink-0">
                <Globe2 className="w-6 h-6 text-[#0D9BA3]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-[#3A2E29] font-serif">
                  Bilingual Transaction Support in English & Spanish
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-normal">
                  HTC provides English + Spanish support for agents and transaction communication.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (onOpenSpanish) {
                  onOpenSpanish();
                } else {
                  window.location.hash = '#/es/';
                }
              }}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition flex-shrink-0 cursor-pointer group"
            >
              <span>VER HTC EN ESPAÑOL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

{/* ------------------------------------------------------------------ */}
      {/* SECTION 7 — FAQ */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center sm:text-left space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <MessageSquare className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>WORKING WITH YOUR HTC TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              What agents usually want to know.
            </h2>
          </div>

          <div className="space-y-4">
            {teamFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={faq.id || idx}
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
                    <div className="px-6 pb-6 text-sm sm:text-base text-slate-700 font-normal leading-relaxed border-t border-[#D8D2D4]/50 pt-4 bg-white space-y-3">
                      <p>{faq.a}</p>
                      {faq.linkAction === 'about' && (
                        <div>
                          <button
                            onClick={onOpenAboutMichelle}
                            className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
                          >
                            <span>{faq.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      )}
                      {faq.linkAction === 'how-it-works-setup' && (
                        <div>
                          <button
                            onClick={onOpenHowItWorks}
                            className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
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

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 8 — FINAL CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#D8D2D4] text-[#3A2E29]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight max-w-3xl mx-auto">
            Meet the people who will know your business.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
            Start with a 15-Minute Fit Call. If HTC is the right fit, Setup is where we learn how you work and introduce you to the Lead TC who will become your day-to-day contact.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
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
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#EEEAEB] hover:bg-[#D8D2D4]/70 text-[#3A2E29] px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider border border-[#D8D2D4] transition cursor-pointer group"
            >
              <span>SEE HOW HTC WORKS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-500 font-normal">
            Direct Office Line: <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-[#3A2E29] font-bold hover:underline">{PHONE_NUMBER}</a> · Mon – Fri: 8:00 AM – 6:00 PM EST
          </div>

        </div>
      </section>

    </main>
  );
};
