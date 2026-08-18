import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FileCheck2,
  Calendar,
  Layers,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Search,
  Scale,
  Award,
  Users,
  Heart,
  Globe2,
  Laptop,
  Check,
  Star,
  Quote,
  Clock,
  ChevronDown,
  ChevronUp,
  MapPin,
  Building2,
  TrendingUp,
  FileText
} from 'lucide-react';
import { PHONE_NUMBER, MEET_MICHELLE_IMAGE, EMAIL_ADDRESS } from '../data/content';
import { REAL_REVIEWS } from '../data/reviews';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onExploreServices: () => void;
  onGoHome: () => void;
  onOpenHowItWorks: () => void;
}

export const WhyHtcPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onExploreServices,
  onGoHome,
  onOpenHowItWorks
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Comparison Matrix Data: Freelancer vs VA vs Inexperienced TC vs HTC
  const comparisonRows = [
    {
      feature: 'Florida Contract Specialization',
      freelancer: 'Varies; often generic multi-state',
      overseasVA: 'None; relies on rigid scripts',
      inexperiencedTC: 'Basic knowledge, prone to missing riders',
      htc: '30+ years Florida FAR/BAR contract mastery & statutory rider expertise',
      htcAdvantage: true
    },
    {
      feature: 'Single Point of Failure / Coverage',
      freelancer: 'High risk (sick days, vacations stall deals)',
      overseasVA: 'High turnover, time-zone disconnects',
      inexperiencedTC: 'Solo operator with no backup team',
      htc: 'Boutique agency model: dedicated coordinator + cross-trained team backup',
      htcAdvantage: true
    },
    {
      feature: 'Defensible Broker Compliance',
      freelancer: 'Basic doc checklist upload',
      overseasVA: 'Prone to upload errors & missed initials',
      inexperiencedTC: 'Reactive to broker rejections',
      htc: 'audit-ready
      htcAdvantage: true
    },
    {
      feature: 'Client & Stakeholder Communication',
      freelancer: 'Reactive; only replies when asked',
      overseasVA: 'Impersonal canned templates',
      inexperiencedTC: 'Hesitant in complex stakeholder talks',
      htc: 'Proactive, high-touch communication protecting your brand reputation',
      htcAdvantage: true
    },
    {
      feature: 'Bilingual Support (English & Spanish)',
      freelancer: 'Rarely available',
      overseasVA: 'Non-native or accent friction',
      inexperiencedTC: 'Rarely available',
      htc: 'Native bilingual coordinators across South Florida and statewide',
      htcAdvantage: true
    },
    {
      feature: 'Pricing & Accountability Model',
      freelancer: 'Hourly or
      overseasVA: 'Monthly subscriptions regardless of volume',
      inexperiencedTC: 'Inconsistent billing terms',
      htc: 'Performance-aligned: $0
      htcAdvantage: true
    }
  ];

  // Specific Florida Contract & Compliance Expertise Points
  const floridaExpertise = [
    {
      title: 'FAR/BAR "As Is" vs. Standard Contract Distinctions',
      desc: 'Accurate deadline calculation based on Standard repair limits vs. "As Is" inspection discretion, including proper notice delivery under Standard Section 12.'
    },
    {
      title: 'Statutory HOA & Condo Governance (Chapters 720 & 718)',
      desc: 'Rigorous tracking of HOA Disclosure Summary rights, Condo resale governance document delivery, and 3-day statutory rescission periods.'
    },
    {
      title: 'County-Specific Title & Closing Customs',
      desc: 'Understanding regional Florida closing cost customs — from Miami-Dade/Broward buyer-selects-title customs to Palm Beach/Central FL seller-pays traditions.'
    },
    {
      title: 'Florida Escrow & Deposit Verification',
      desc: 'Immediate follow-up for initial and additional escrow deposits, securing written escrow verification letters from title agents within statutory timelines.'
    },
    {
      title: 'Appraisal & Financing Contingency Windows',
      desc: 'Proactive tracking of loan commitment dates, appraisal contingency notifications, and prompt preparation of extension addenda when lender delays arise.'
    },
    {
      title: 'Municipal Lien Search & Permit Follow-Up',
      desc: 'Monitoring title commitments, municipal lien searches, unpermitted structure disclosures, and open permit resolution timelines.'
    }
  ];

  // Tech-Enabled Systems Matrix
  const supportedPortals = [
    'SkySlope',
    'Dotloop',
    'Brokermint',
    'Paperless Pipeline',
    'Lone Wolf / zipForm',
    'reZEN (Real Broker)',
    'KW Command',
    'eXp Enterprise'
  ];

  // Top Selected Verified Reviews
  const featuredReviews = REAL_REVIEWS.slice(0, 4);

  const whyFaqs = [
    {
      q: 'Why should I choose a boutique agency over a solo freelance TC?',
      a: 'A solo freelance coordinator is a single point of failure. If they get sick, take a vacation, or experience a personal emergency, your active contracts and critical deadlines stall. HTC operates as a boutique agency: you get a dedicated point of contact backed by a cohesive team of experienced Florida coordinators who cross-cover files without missing a beat.'
    },
    {
      q: 'How is HTC different from an overseas virtual assistant (VA)?',
      a: 'Overseas VAs typically lack deep understanding of Florida FAR/BAR contract law, statutory HOA/Condo disclosures, and regional title customs. They follow rigid task checklists rather than taking proactive ownership. HTC coordinators are Florida real estate professionals with decades of combined experience who anticipate problems before they become closing roadblocks.'
    },
    {
      q: 'Do you work in my specific brokerage compliance system?',
      a: 'Yes. We are fluent across all major brokerage platforms including SkySlope, Dotloop, Brokermint, Paperless Pipeline, reZEN, and KW Command. We build audit-ready files according to your broker\'s exact compliance requirements so your Commission Disbursement Authorization (CDA) is approved without delay.'
    },
    {
      q: 'Are your coordinators based in Florida?',
      a: 'HTC was founded in South Florida in 2018 with roots extending back to 1995. Our team understands Florida contracts, Florida lenders, Florida title companies, and the unique pace of Florida transactions.'
    },
    {
      q: 'What is Hometown Honors?',
      a: 'Hometown Honors is our commitment to the communities we serve. A portion of our agency proceeds and team time is dedicated to honoring and supporting local Florida families, first responders, educators, and community initiatives.'
    }
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* ------------------------------------------------------------------ */}
      {/* HERO & POSITIONING (PROOF OVER ADJECTIVES) */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-gradient-to-b from-[#3A2E29] to-[#2B221E] text-white overflow-hidden border-b border-[#0D9BA3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-300">
            <button
              onClick={onGoHome}
              className="hover:text-white transition flex items-center space-x-1 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-[#0D9BA3]">/</span>
            <span className="text-white font-bold">Why HTC</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>THE BOUTIQUE REAL ESTATE SUPPORT ADVANTAGE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
              A partner, not a processor.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              HTC combines 30+ years of Florida contract experience, defensible-file standards, proactive client care, and dedicated team accountability.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookCall}
                className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition inline-flex items-center space-x-2.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Fit Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onSubmitDeal}
                className="bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-xl font-bold text-sm border border-white/20 transition inline-flex items-center space-x-2 cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#0D9BA3]" />
                <span>Submit an Executed File</span>
              </button>
            </div>
          </div>

          {/* Hard Numbers Proof Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-medium text-slate-300">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-white">1995</div>
              <div className="text-slate-300 font-medium">Serving Florida Realtors Since</div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#0D9BA3]">2018</div>
              <div className="text-slate-300 font-medium">HTC Agency Founded</div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-white">5.0 ★</div>
              <div className="text-slate-300 font-medium">Verified Google Reviews</div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#FE7311]">Bilingual</div>
              <div className="text-slate-300 font-medium">Native English & Spanish Support</div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 1. A PARTNER, NOT A PROCESSOR (SIDE-BY-SIDE COMPARISON) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Scale className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>THE COMPARISON MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              Why Florida Agents Choose HTC Over Other Options
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              Real estate transaction coordination is not data entry. It is risk mitigation, timeline enforcement, and brand protection.
            </p>
          </div>

          {/* Detailed Responsive Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#D8D2D4] shadow-md bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#3A2E29] text-white text-xs sm:text-sm font-montserrat font-extrabold">
                  <th className="p-4 sm:p-5 border-r border-white/10 w-1/4">Key Operational Dimension</th>
                  <th className="p-4 sm:p-5 border-r border-white/10 text-slate-300 font-medium w-1/5">Solo Freelancer</th>
                  <th className="p-4 sm:p-5 border-r border-white/10 text-slate-300 font-medium w-1/5">Overseas VA</th>
                  <th className="p-4 sm:p-5 bg-[#0D9BA3] text-white font-extrabold w-1/3">HTC Boutique Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8D2D4] text-xs sm:text-sm font-medium">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#EEEAEB]/40' : 'bg-white'}>
                    <td className="p-4 sm:p-5 font-bold text-[#3A2E29] border-r border-[#D8D2D4]">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 border-r border-[#D8D2D4]">
                      <div className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{row.freelancer}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600 border-r border-[#D8D2D4]">
                      <div className="flex items-start space-x-2">
                        <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{row.overseasVA}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 bg-[#0D9BA3]/10 font-bold text-[#3A2E29]">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                        <span className="text-[#3A2E29]">{row.htc}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 rounded-2xl bg-[#EEEAEB] border border-[#D8D2D4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm font-bold text-[#3A2E29]">
              Want to see how our file flow works step by step?
            </div>
            <button
              onClick={onOpenHowItWorks}
              className="text-[#0D9BA3] hover:text-[#0b8288] font-bold text-xs sm:text-sm underline underline-offset-4 transition flex items-center space-x-1 cursor-pointer"
            >
              <span>Explore How HTC Works</span>
              <ArrowRight className="w-4 h-4 text-[#FE7311]" />
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. SERVING REALTORS SINCE 1995 / HTC FOUNDED 2018 */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 border border-[#0D9BA3]/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Founder Visual Card */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                <div className="relative">
                  <img
                    src={MEET_MICHELLE_IMAGE}
                    alt="Michelle Martinez Founder"
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover border-4 border-[#0D9BA3] shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-[#FE7311] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg border border-white/20">
                    Est. 2018
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold text-white">
                    Michelle Martinez
                  </h3>
                  <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
                    Founder & Managing Director
                  </div>
                  <div className="text-xs text-slate-300">
                    Serving Florida Realtors Since 1995
                  </div>
                </div>
              </div>

              {/* History & Scale Story */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/30">
                  <Award className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>DEEP FLORIDA REAL ESTATE HERITAGE</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-white leading-tight">
                  Built on 30+ Years of Real-World Florida Real Estate Experience.
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  <p>
                    Michelle Martinez started supporting Florida real estate professionals in 1995. Over three decades of market cycles — through the dot-com shifts, the 2008 financial crisis, the post-pandemic market acceleration, and the modern digital transaction era — Michelle observed a persistent pain point: top-producing Florida Realtors spending 
                  </p>
                  <p>
                    In 2018, Hometown Transaction Coordinators was founded as a dedicated boutique agency to solve this problem permanently. Instead of an isolated freelancer with zero backup or an overseas assistant unfamiliar with Florida laws, HTC was engineered with proven checklists, structured team redundancies, and the proprietary H.O.M.E. Close Method™.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div className="p-3 bg-black/30 rounded-xl border border-white/10">
                    <div className="font-extrabold text-white text-base">30+ Years</div>
                    <div className="text-slate-400">Florida Industry Roots</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-xl border border-white/10">
                    <div className="font-extrabold text-[#0D9BA3] text-base">Agency Model</div>
                    <div className="text-slate-400">redundant oversight</div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-xl border border-white/10">
                    <div className="font-extrabold text-[#FE7311] text-base">100% Focused</div>
                    <div className="text-slate-400">Florida Contracts & Rules</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. FLORIDA-SPECIFIC CONTRACT AND COMPLIANCE AWARENESS */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <FileCheck2 className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>FLORIDA STATUTORY MASTERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              Florida-Specific Contract & Compliance Awareness
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              Florida real estate contracts contain unique statutory requirements, strict contingency timelines, and regional customs. We manage them with exact precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floridaExpertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-3 hover:border-[#0D9BA3] transition shadow-sm"
              >
                <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3]">
                  <CheckCircle2 className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                  <span>Florida Standard #{idx + 1}</span>
                </div>
                <h3 className="text-base font-montserrat font-extrabold text-[#3A2E29]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3A2E29]/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. TECH-ENABLED, HUMAN-REVIEWED OPERATIONS */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
                <Laptop className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>SYSTEMS & HUMAN EXPERTISE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29] leading-tight">
                Tech-Enabled, Human-Reviewed Operations
              </h2>

              <p className="text-sm sm:text-base text-[#3A2E29]/80 font-medium leading-relaxed">
                Technology powers our timeline tracking, calendar locks, and automated milestone reminders — but experienced human coordinators audit every signature, review every disclosure, and personally coordinate with your title agents and lenders.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs sm:text-sm font-semibold text-[#3A2E29]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <span>Audit-Ready Broker Submissions: Organized to your brokerage checklist on Day 1.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm font-semibold text-[#3A2E29]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <span>Automated Deadline Synchronization: Google Calendar, Outlook, and iCal timeline sync.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm font-semibold text-[#3A2E29]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <span>redundant oversight</span>
                </div>
              </div>
            </div>

            {/* Supported Platforms Grid */}
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-lg space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3]">
                  BROKERAGE PLATFORMS WE SUPPORT
                </div>
                <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                  Fluent in Your Existing Compliance Stack
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  We log directly into your transaction portal to organize documents and upload compliance records.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {supportedPortals.map((portal, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#EEEAEB] border border-[#D8D2D4] text-xs sm:text-sm font-bold text-[#3A2E29] flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0D9BA3]" />
                    <span>{portal}</span>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-slate-400 font-medium text-center">
                + Custom Brokerage Google Drive / Dropbox Compliance Repositories
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. BILINGUAL SOUTH FLORIDA SUPPORT */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 border border-[#0D9BA3]/40 shadow-xl space-y-8">
            
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/30">
                <Globe2 className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>SEAMLESS MULTILINGUAL CARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-white">
                Bilingual South Florida Support (English & Spanish)
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                South Florida is a dynamic international marketplace. Clear, culturally fluent communication in both English and Spanish prevents misunderstandings, calms anxious buyers and sellers, and accelerates closing documents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div className="bg-black/30 p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                  Direct Client Comfort
                </div>
                <h3 className="text-base font-montserrat font-extrabold text-white">
                  Spanish-Speaking Buyers & Sellers
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  We answer administrative questions and guide clients through escrow wiring instructions and HOA applications in their preferred language.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                  Stakeholder Speed
                </div>
                <h3 className="text-base font-montserrat font-extrabold text-white">
                  Title, Escrow & Co-Agents
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Fluent collaboration across Miami-Dade, Broward, Palm Beach, and Latin American international investor transactions.
                </p>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">
                  Statewide Reach
                </div>
                <h3 className="text-base font-montserrat font-extrabold text-white">
                  Florida-Wide Coverage
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  From South Florida to Orlando, Tampa Bay, Jacksonville, and the Panhandle — unified standards across all Florida markets.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. H.O.M.E. VALUES AND HOMETOWN HONORS */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Heart className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>CORE VALUES & COMMUNITY IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              H.O.M.E. Values™ & Hometown Honors
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              We believe a business should stand for clear principles and give back meaningfully to the communities where our Realtors live and work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* H.O.M.E. Values Breakdown */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3]">
                  THE 4 HTC PILLARS
                </div>
                <h3 className="text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                  The H.O.M.E. Values Framework
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-1">
                    <div className="text-base font-extrabold text-[#0D9BA3]">H — Honor</div>
                    <p className="text-xs text-[#3A2E29]/80 font-medium">Honor the client relationship, the contract terms, and the agent's professional reputation.</p>
                  </div>
                  <div className="p-4 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-1">
                    <div className="text-base font-extrabold text-[#0D9BA3]">O — Order</div>
                    <p className="text-xs text-[#3A2E29]/80 font-medium">Maintain systematic organization, visible calendar deadlines, and defensible audit trails.</p>
                  </div>
                  <div className="p-4 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-1">
                    <div className="text-base font-extrabold text-[#0D9BA3]">M — Mastery</div>
                    <p className="text-xs text-[#3A2E29]/80 font-medium">Deep expertise in Florida FAR/BAR contracts, statutory addenda, escrow rules, and title workflows.</p>
                  </div>
                  <div className="p-4 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-1">
                    <div className="text-base font-extrabold text-[#0D9BA3]">E — Ease</div>
                    <p className="text-xs text-[#3A2E29]/80 font-medium">Deliver a calm, organized closing experience for buyers, sellers, lenders, and closing agents.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4] text-xs font-bold text-slate-500">
                Every transaction coordinator on our team is evaluated against these four standards on every file.
              </div>
            </div>

            {/* Hometown Honors Initiative */}
            <div className="lg:col-span-5 bg-[#3A2E29] text-white p-8 rounded-3xl border border-[#0D9BA3]/40 shadow-md space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3 py-1 rounded-full border border-[#0D9BA3]/30">
                  <Award className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>COMMUNITY GIVING</span>
                </div>
                <h3 className="text-2xl font-montserrat font-extrabold text-white">
                  Hometown Honors Initiative
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Real estate happens in hometowns. Through Hometown Honors, HTC actively supports local Florida initiatives, recognizing outstanding community contributors, teachers, first responders, and families in need.
                </p>
                <div className="p-4 bg-black/30 rounded-2xl border border-white/10 text-xs text-slate-300 space-y-1.5">
                  <div className="font-bold text-white">Our Community Promise:</div>
                  <p>When you close files with HTC, you are supporting a Florida-founded agency that actively reinvests into our local hometowns.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-bold text-[#0D9BA3] flex items-center space-x-2">
                <Heart className="w-4 h-4 text-[#FE7311]" />
                <span>Giving back with every closing</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 7. PROOF AND CTA (LEAD WITH PROOF) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Star className="w-3.5 h-3.5 text-[#FE7311] fill-[#FE7311]" />
              <span>VERIFIED AGENT PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              What Florida Realtors Say About HTC
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              Unfiltered feedback from active producing agents and title professionals across Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] space-y-5 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-[#D8D2D4]">
                      {rev.source}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3A2E29] font-medium leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D8D2D4] flex items-center space-x-3">
                  <img
                    src={rev.image}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#0D9BA3]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-montserrat font-extrabold text-xs sm:text-sm text-[#3A2E29]">
                      {rev.name}
                    </div>
                    {rev.brokerage && (
                      <div className="text-[11px] text-slate-500 font-medium">
                        {rev.brokerage}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ SECTION */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              Frequently Asked Questions About Choosing HTC
            </h2>
          </div>

          <div className="space-y-4">
            {whyFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#D8D2D4] overflow-hidden transition shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-montserrat font-extrabold text-sm sm:text-base text-[#3A2E29] hover:text-[#0D9BA3] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#FE7311] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#3A2E29]/80 font-medium leading-relaxed border-t border-[#D8D2D4]/50 pt-4 bg-[#EEEAEB]/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FINAL PRIMARY CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#3A2E29] to-[#241C19] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
            <span>THE DEFENSIVE CLOSING PARTNER YOU DESERVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
            Elevate your real estate business with HTC.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Schedule a 15-minute fit call to discuss your transaction volume, or submit your next executed Florida contract directly to our team.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto bg-[#FE7311] hover:bg-[#e05f03] text-white px-9 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-2xl hover:shadow-orange-500/20 transition flex items-center justify-center space-x-2.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Fit Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onSubmitDeal}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm border border-white/20 transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4 text-[#0D9BA3]" />
              <span>Submit an Executed File</span>
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center space-x-6 text-xs text-slate-400 font-medium">
            <span>Direct Phone: <strong className="text-white">{PHONE_NUMBER}</strong></span>
            <span>·</span>
            <button
              onClick={onExploreServices}
              className="text-[#0D9BA3] hover:underline cursor-pointer"
            >
              Explore Services & Pricing
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
