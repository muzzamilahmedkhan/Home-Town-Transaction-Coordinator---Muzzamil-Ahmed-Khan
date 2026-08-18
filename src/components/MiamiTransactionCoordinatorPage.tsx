import React from 'react';
import {
  MapPin,
  Building2,
  Languages,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  DollarSign,
  Calendar,
  FileText,
  Clock,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Scale,
  Users,
  Compass,
  Star,
  Zap,
  Globe
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, MEET_MICHELLE_IMAGE } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onGoHome: () => void;
  onOpenPricing: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc: () => void;
  onOpenWhoWeSupport: () => void;
  onOpenRoi: () => void;
  onOpenTransactionCoordination: () => void;
  onOpenListingCoordination: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

export const MiamiTransactionCoordinatorPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onGoHome,
  onOpenPricing,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenWhoWeSupport,
  onOpenRoi,
  onOpenTransactionCoordination,
  onOpenListingCoordination,
  onOpenMiamiDadeTc,
  onOpenBrowardTc,
  onOpenSouthFloridaTc
}) => {
  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO & LOCATION HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Miami Transaction Coordinator</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <MapPin className="w-3.5 h-3.5" />
              <span>LOCAL MIAMI & MIAMI-DADE TRANSACTION COORDINATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              Miami Transaction Coordinator <br />
              <span className="text-[#0D9BA3]">Built for High-Density Condos, Associations & Global Capital.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Miami real estate deals are rarely standard. Between strict condominium board approvals, SB 4-D building safety reserve studies, bilingual Latin American buyers, and tight escrow deadlines, you need an experienced, Florida-native TC team that executes with absolute precision.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide transition shadow-xl hover:shadow-[#FE7311]/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Miami Fit Call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={onSubmitDeal}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
              >
                <FileCheck2 className="w-4 h-4 text-[#0D9BA3]" />
                <span>Submit a Miami File ($375)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT ANSWER BLOCK (SEO / AEO OPTIMIZATION) */}
      <section className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Direct Overview for Miami Agents</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            What Does a Miami Transaction Coordinator Do?
          </h2>

          <div className="p-6 sm:p-8 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-[#3A2E29] text-base">
              A Miami transaction coordinator is a specialized contract-to-close professional who manages the operational, administrative, and compliance workflow for residential real estate transactions across the City of Miami and Miami-Dade County.
            </p>
            <p>
              Unlike generic, out-of-state virtual assistant companies, a dedicated Miami TC understands local Florida real estate mechanics: managing <strong>FAR/BAR As-Is & Standard contracts</strong>, tracking complex <strong>Florida condominium and HOA board approvals</strong>, monitoring <strong>Senate Bill 4-D milestone inspections and Structural Integrity Reserve Studies (SIRS)</strong>, coordinating <strong>FIRPTA foreign seller withholding</strong>, providing <strong>fluent English and Spanish communication</strong>, and securing complete <strong>DBPR brokerage portal compliance</strong> from contract execution through closing disbursement.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-[#3A2E29]">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Flat Fee ($375 / $475)</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Paid at Closing</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Fluent English & Español</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ 30+ Years FL Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MIAMI-SPECIFIC TRANSACTION PATTERNS */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Hyper-Local Market Realities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Miami Submarket Dynamics Require Specialized Execution
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From Brickell luxury towers to historic Coral Gables estates and Edgewater resales, each Miami neighborhood presents distinct operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pattern 1: Brickell & Downtown */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Brickell & Downtown Towers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-density residential towers with strict 20–30 day board application timelines, elevator move-in deposits, master association estoppel rush fees, and deeded parking space title verification.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#0D9BA3]">
                Focus: Master HOA & Condo Estoppel Speed
              </div>
            </div>

            {/* Pattern 2: Coconut Grove & Coral Gables */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Coral Gables & Coconut Grove</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Historic single-family properties with extensive municipal code requirements, tree preservation ordinances, open permit/lien searches, septic/sewer verification, and high-value escrow schedules.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#FE7311]">
                Focus: Municipal Liens & Code Compliance
              </div>
            </div>

            {/* Pattern 3: Edgewater, Wynwood & Midtown */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 text-[#0D9BA3]" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Edgewater, Wynwood & Midtown</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast-moving urban resales, short-term rental bylaw verifications, developer-to-buyer transitions, and rapid 15–21 day cash or fast non-QM financing closes.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#3A2E29]">
                Focus: Rapid Timeline & Short-Term Rental Bylaws
              </div>
            </div>

            {/* Pattern 4: Global & Latin American Capital */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">International Buyers & FIRPTA</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Foreign buyers and non-resident sellers requiring FIRPTA tax withholding coordination with specialized CPAs, remote online notarization (RON), and cross-border bank wire verifications.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#0D9BA3]">
                Focus: FIRPTA Withholding & International Escrow
              </div>
            </div>

            {/* Pattern 5: South Beach & Sunny Isles */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Coastal & Luxury Waterfront</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Coastal flood zone insurance certifications, condominium milestone inspections, special assessment riders, and high-limit earnest money deposit tracking.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#FE7311]">
                Focus: Wind/Flood Insurance & Milestone Safety
              </div>
            </div>

            {/* Pattern 6: Investor Portfolios & Fast Cash */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5 text-[#FE7311]" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">1031 Exchange & Portfolios</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Time-sensitive 45-day identification and 180-day closing deadlines for 1031 exchange intermediaries, multi-unit purchases, and tenant lease assignment reviews.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#3A2E29]">
                Focus: 1031 Intermediary Coordination
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CONDO/ASSOCIATION AND BILINGUAL CONTEXT */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Condo Law & Association Mastery</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
                Navigating Miami's Complex Condominium & Association Requirements
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                With post-Surfside legislation reshaping Florida real estate, managing condo transactions in Miami requires acute legal awareness and meticulous document tracking.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-4 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] space-y-1">
                  <strong className="text-[#3A2E29] block">SB 4-D / SB 154 Milestone Inspections & SIRS:</strong>
                  <span>We ensure all mandatory Structural Integrity Reserve Study disclosures, milestone inspection reports, and special assessment riders are properly documented and signed.</span>
                </div>
                <div className="p-4 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] space-y-1">
                  <strong className="text-[#3A2E29] block">Dual-Association Estoppel Management:</strong>
                  <span>Many Miami units feature both a Master Community Association and a Sub-Condo Association. We order and track both estoppel certificates to prevent closing surprises.</span>
                </div>
                <div className="p-4 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] space-y-1">
                  <strong className="text-[#3A2E29] block">Condominium Questionnaire & Lender Approval:</strong>
                  <span>We follow up with management companies for completed condo questionnaires, budget documents, and insurance master policies to protect your buyer's loan commitment.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Languages className="w-3.5 h-3.5" />
                <span>Bilingual Communication</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
                Fluent Spanish & English Coordination for Multicultural Closings
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Over 70% of Miami transactions involve Spanish-speaking buyers, sellers, or international family offices. Hometown TC bridges every communication gap with native fluency and warmth.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-4 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] space-y-1">
                  <strong className="text-[#3A2E29] block">Native Spanish Client Milestones:</strong>
                  <span>Clear, polite Spanish updates explaining inspection windows, deposit dates, and closing logistics so international clients feel secure and respected.</span>
                </div>
                <div className="p-4 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] space-y-1">
                  <strong className="text-[#3A2E29] block">Bilingual Title & Escrow Alignment:</strong>
                  <span>Seamless coordination with South Florida title attorneys, bilingual escrow officers, and cross-brokerage agents across Miami-Dade.</span>
                </div>
                <div className="p-4 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] space-y-1">
                  <strong className="text-[#3A2E29] block">Professional Representation of Your Brand:</strong>
                  <span>Your clients experience a high-touch, cultured, and responsive transaction coordinator representing your real estate business.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. RELEVANT HTC SERVICE & PROOF */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-[#D8D2D4] shadow-sm space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={MEET_MICHELLE_IMAGE}
                  alt="Michelle Martinez - Founder of Hometown TC"
                  className="w-20 h-20 rounded-2xl object-cover border border-[#D8D2D4] shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#3A2E29]">Michelle Martinez</h3>
                  <p className="text-xs text-[#0D9BA3] font-bold">Founder & Lead Coordinator</p>
                  <span className="text-[11px] text-slate-500">South Florida Native • 30+ Years Experience</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                "Miami real estate moves fast and carries zero tolerance for missed association deadlines or unreviewed FAR/BAR riders. We give Miami Realtors the senior administrative backbone they need to protect their clients and scale with confidence."
              </p>

              <div className="pt-2 border-t border-[#D8D2D4] space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Contract Services Base:</span>
                  <strong className="text-[#3A2E29]">$375 / closed file</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Listing Launch + Contract Pro:</span>
                  <strong className="text-[#3A2E29]">$475 / closed file</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Payment Timing:</span>
                  <strong className="text-[#0D9BA3]">At Closing Table Only</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full-Stack Miami TC Infrastructure</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Why Top Miami Producers Choose Hometown TC
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-2">
                <div className="flex items-center space-x-2 text-[#0D9BA3] font-bold">
                  <FileText className="w-4 h-4" />
                  <span>FAR/BAR Contract Audits</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Line-by-line verification of executed contracts, HOA addenda, financing contingencies, and deposit timeframes within 24 hours.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-2">
                <div className="flex items-center space-x-2 text-[#0D9BA3] font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>Master Calendar Lock</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A centralized, shared deadline calendar sent to you, your client, lender, and title officer so everyone stays synchronized.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-2">
                <div className="flex items-center space-x-2 text-[#FE7311] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Broker Portal Compliance</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Seamless upload to SkySlope, KW Command, Dotloop, Brokermint, or Paperless Pipeline for rapid commission disbursement approval.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-2">
                <div className="flex items-center space-x-2 text-[#FE7311] font-bold">
                  <DollarSign className="w-4 h-4" />
                  <span>Zero Retainers or Risk</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  No monthly subscriptions or
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPricing}
                className="px-6 py-3.5 bg-[#0D9BA3] hover:bg-[#0b868d] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
              >
                View Miami Pricing Plans
              </button>
              <button
                onClick={onOpenTransactionCoordination}
                className="text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition underline cursor-pointer"
              >
                Explore Full Contract Services →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. LOCAL MIAMI TESTIMONIAL */}
      <section className="py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1 text-[#FE7311]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
              Trusted by Top Miami & South Florida Producers
            </h2>
          </div>

          <div className="bg-[#EEEAEB] p-8 sm:p-10 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6 relative">
            <p className="text-base sm:text-lg text-[#3A2E29] italic font-serif leading-relaxed">
              "HTC brings structure and complete clarity to every Miami transaction. In a market where condo board approvals, foreign buyers, and bilingual communications can easily derail a closing, Michelle Martinez and her team are always ten steps ahead. My clients feel supported, and I can stay focused on closing luxury deals."
            </p>

            <div className="flex items-center space-x-4 pt-4 border-t border-[#D8D2D4]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                alt="Sophia Sterling - Luxury Real Estate Agent Miami"
                className="w-12 h-12 rounded-full object-cover border border-[#D8D2D4]"
              />
              <div>
                <strong className="block text-sm font-bold text-[#3A2E29]">Sophia Sterling</strong>
                <span className="text-xs text-slate-500">Luxury Real Estate Agent • ONE Sotheby's International Realty (Miami)</span>
              </div>
            </div>
          </div>

          {/* Cross-links to Countywide & Regional Pages */}
          <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
            {onOpenMiamiDadeTc && (
              <div>
                Looking for countywide coverage?{' '}
                <button
                  onClick={onOpenMiamiDadeTc}
                  className="text-[#FE7311] font-bold hover:underline cursor-pointer"
                >
                  Miami-Dade County TC →
                </button>
              </div>
            )}
            {onOpenMiamiDadeTc && onOpenBrowardTc && <span>•</span>}
            {onOpenBrowardTc && (
              <div>
                Operating in Broward?{' '}
                <button
                  onClick={onOpenBrowardTc}
                  className="text-[#0D9BA3] font-bold hover:underline cursor-pointer"
                >
                  Broward County TC (Team & Solo) →
                </button>
              </div>
            )}
            {onOpenSouthFloridaTc && <span>•</span>}
            {onOpenSouthFloridaTc && (
              <div>
                Regional Hub:{' '}
                <button
                  onClick={onOpenSouthFloridaTc}
                  className="text-[#3A2E29] font-bold hover:underline cursor-pointer"
                >
                  South Florida Regional TC →
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FE7311]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Partner with Hometown TC in Miami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
              Ready to streamline your Miami transactions?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Join leading Miami Realtors who trust Hometown TC for seamless contract-to-close coordination, rapid condo approvals, and bilingual client care.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl hover:shadow-[#FE7311]/25 cursor-pointer"
              >
                Book a Miami Fit Call
              </button>
              <button
                onClick={onSubmitDeal}
                className="w-full sm:w-auto px-7 py-4 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md"
              >
                Submit a Miami Transaction File
              </button>
              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                View Plans ($375 / $475)
              </button>
            </div>

            <p className="text-xs text-slate-400 pt-4">
              Direct Phone: <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a> • Hablamos Español
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
