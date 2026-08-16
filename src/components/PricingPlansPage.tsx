import React, { useState } from 'react';
import {
  DollarSign,
  Check,
  XCircle,
  HelpCircle,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Building2,
  Lock,
  Layers,
  FileCheck2,
  Calendar,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Percent,
  Compass,
  FileText,
  BadgeAlert,
  Sparkles
} from 'lucide-react';
import { CENTRAL_SERVICES_PRICING, PRICING_CONFIG, PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onGoHome: () => void;
  onOpenTransactionCoordination: () => void;
  onOpenListingCoordination: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc: () => void;
  onOpenRoi: () => void;
}

export const PricingPlansPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onGoHome,
  onOpenTransactionCoordination,
  onOpenListingCoordination,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenRoi
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pricingFaqs = [
    {
      q: 'Are there any monthly subscription fees, retainers, or setup costs?',
      a: 'No. For solo agents and independent teams utilizing our standard per-file plans, there are zero monthly platform subscriptions, minimum monthly file quotas, or startup onboarding fees. You pay strictly per closed file upon successful closing.'
    },
    {
      q: 'How does the "Both-Sides" Dual Agency add-on work?',
      a: 'When you represent both the Buyer and Seller on the same executed contract, HTC manages both distinct file workflows, separate disclosures, dual communication channels, and respective brokerage compliance checklists. The fee is your standard base rate ($375) plus a $150 dual-side coordination add-on.'
    },
    {
      q: 'What happens if a contract terminates during the inspection or financing period?',
      a: 'If a transaction cancels prior to closing through no fault of the agent, zero fee is billed for contract-to-close files. We package and deliver the full cancellation record, release of escrow, and compliance audit trail directly to your broker for secure archival.'
    },
    {
      q: 'Can a new agent submit a contract immediately without prior registration?',
      a: 'To guarantee flawless coordination and compliance adherence, all agents must complete our quick 1-time onboarding registration prior to their first file submission. This ensures your communication preferences, e-signature tools, title partners, and broker portal requirements are pre-configured.'
    },
    {
      q: 'Are your prices negotiable or do you offer volume discounts for solo agents?',
      a: 'HTC operates on strict, published, non-negotiable per-file pricing. We do not offer arbitrary "off-the-record" discounts. This transparency guarantees that every agent receives the exact same dedicated senior attention, thoroughness, and standard of care without compromised service quality.'
    },
    {
      q: 'How is the TC fee collected at closing?',
      a: 'The TC fee is invoiced directly on the final ALTA Settlement Statement / Closing Disclosure (CD) and paid to HTC directly from escrow disbursement at closing, so you never have out-of-pocket administrative expenses.'
    }
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO & "YOUR PLANS. YOUR PACE." OPENING */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition">Home</button>
            <span>/</span>
            <span className="text-white">Pricing & Plans</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <DollarSign className="w-3.5 h-3.5" />
              <span>TRANSPARENT FLORIDA PER-FILE PRICING</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              Your Plans. Your Pace. <br />
              <span className="text-[#0D9BA3]">Senior TC Support Without Payroll Overhead.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Transparent, per-file pricing engineered for solo Florida agents and high-producing teams. Get dedicated contract-to-close and listing launch infrastructure without fixed salaries, employee benefits, training overhead, or idle payroll during quiet months.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide transition shadow-xl hover:shadow-[#FE7311]/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={onOpenRoi}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
              >
                <DollarSign className="w-4 h-4 text-[#0D9BA3]" />
                <span>Calculate Your Agent ROI</span>
              </button>
            </div>

            {/* Micro Guarantees */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-xs text-slate-300 font-medium">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                <span>Paid at Settlement (CD/ALTA)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                <span>Zero File Minimums</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                <span>No Monthly Software Subscriptions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                <span>No-Fee Deal Cancellation Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BASE & PRO CARDS WITH BEST IF / INCLUDED / AGENT RETAINS */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Service Levels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
            Clear, Predictable Support Tiers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Choose the exact scope your production requires. All plans pull from our standardized Florida operational guidelines with zero ambiguity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* BASE CARD */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D8D2D4] shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-8 relative">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-3 py-1 bg-[#0D9BA3]/10 text-[#0D9BA3] text-xs font-bold rounded-full uppercase tracking-wider">
                    Contract-to-Close
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#3A2E29] mt-3 font-serif">
                    HTC Base Plan
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    End-to-end contract coordination from executed agreement through closing.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-black text-[#0D9BA3]">$375</div>
                  <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Per Closed File</div>
                </div>
              </div>

              {/* Best If */}
              <div className="p-4 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3A2E29] block">
                  Best If:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  You represent buyers or sellers with an already executed contract and need reliable timeline tracking, escrow management, title liaison, and broker compliance.
                </p>
              </div>

              {/* What is Included */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3] flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>What HTC Coordinates (Included):</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                    <span><strong>Executed Contract Audit:</strong> Full FAR/BAR agreement & rider compliance review.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                    <span><strong>Escrow & EMD Lock:</strong> Verification of escrow receipt & initial binder deposit.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                    <span><strong>Master Deadline Calendar:</strong> Shared with agent, client, lender, and title officer.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                    <span><strong>Contingency Milestones:</strong> Inspection window, appraisal, and loan commitment tracking.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                    <span><strong>Closing Settlement:</strong> Closing Disclosure (CD) review & CDA delivery to title.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                    <span><strong>Broker Archival:</strong> Full compliance document upload to your brokerage portal.</span>
                  </li>
                </ul>
              </div>

              {/* What Agent Retains */}
              <div className="space-y-3 pt-2 border-t border-[#D8D2D4]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#3A2E29] flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
                  <span>What the Agent Retains:</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-500">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FE7311] font-bold">•</span>
                    <span>Direct repair credit negotiations & contract addenda terms.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FE7311] font-bold">•</span>
                    <span>Client legal, tax, or property advisory.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FE7311] font-bold">•</span>
                    <span>Attending physical walk-throughs and closing table representation.</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-4 border-t border-[#D8D2D4] space-y-2">
              <button
                onClick={onBookCall}
                className="w-full py-3.5 bg-[#0D9BA3] hover:bg-[#0b868d] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition text-center block cursor-pointer shadow-md"
              >
                Get Started on Base Plan
              </button>
              <p className="text-[11px] text-center text-slate-400">Paid from escrow at settlement. $0 due if deal cancels.</p>
            </div>
          </div>

          {/* PRO CARD */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#FE7311] shadow-xl hover:shadow-2xl transition flex flex-col justify-between space-y-8 relative">
            <div className="absolute -top-4 left-8 bg-[#FE7311] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
              Most Popular for Listing Agents
            </div>

            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex justify-between items-start pt-2">
                <div>
                  <span className="px-3 py-1 bg-[#FE7311]/10 text-[#FE7311] text-xs font-bold rounded-full uppercase tracking-wider">
                    Listing Launch + Contract Services
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#3A2E29] mt-3 font-serif">
                    HTC Pro Plan
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Pre-market listing launch preparation bundled with complete contract-to-close.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-black text-[#FE7311]">$475</div>
                  <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Per Closed File</div>
                </div>
              </div>

              {/* Best If */}
              <div className="p-4 bg-[#FE7311]/5 rounded-2xl border border-[#FE7311]/20 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FE7311] block">
                  Best If:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  You are a listing agent or team who wants a turnkey experience: pre-market MLS draft entry, SPDS disclosure dispatch, photo ordering, and seamless transition into contract closing.
                </p>
              </div>

              {/* What is Included */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FE7311] flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Everything in Base, PLUS Listing Launch:</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                    <span><strong>Pre-Listing Document Collection:</strong> Listing agreement audit & rider verification.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                    <span><strong>Seller Disclosure Dispatch:</strong> Florida SPDS & Lead-Based Paint sent for e-signature.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                    <span><strong>MLS Matrix Draft Entry:</strong> Complete entry of 50+ property fields & room dimensions.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                    <span><strong>Media & Supplements:</strong> High-res photo sequencing & PDF disclosure attachments.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                    <span><strong>Showing & Lockbox Setup:</strong> ShowingTime rules & lockbox information configuration.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                    <span><strong>Seamless Contract Bridge:</strong> Frictionless rollover to contract-to-close upon offer acceptance.</span>
                  </li>
                </ul>
              </div>

              {/* What Agent Retains */}
              <div className="space-y-3 pt-2 border-t border-[#D8D2D4]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#3A2E29] flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
                  <span>What the Agent Retains:</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-500">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FE7311] font-bold">•</span>
                    <span>Hiring and scheduling preferred real estate photographer.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FE7311] font-bold">•</span>
                    <span>Staging, cleaning, and property preparation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FE7311] font-bold">•</span>
                    <span>Pricing decisions, CMA valuations, and clicking "Make Active" on MLS.</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-4 border-t border-[#D8D2D4] space-y-2">
              <button
                onClick={onBookCall}
                className="w-full py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition text-center block cursor-pointer shadow-md"
              >
                Get Started on Pro Plan
              </button>
              <p className="text-[11px] text-center text-slate-400">Total pre-market and contract harmony in one package.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BOTH-SIDES (DUAL AGENCY / TRANSACTION BROKER) ADD-ON */}
      <section className="py-16 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EEEAEB] rounded-3xl p-8 sm:p-10 border border-[#D8D2D4] shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  <span>Dual Representation Workflow</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3A2E29] font-serif">
                  "Both-Sides" Dual Representation Add-On
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Representing both the Buyer and Seller in a single Florida transaction creates double the administrative load: dual disclosure files, separate timeline communications, independent compliance packages, and segregated document vaults.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                  <div className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-[#D8D2D4]">
                    <Check className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                    <span>Independent Buyer & Seller communication channels.</span>
                  </div>
                  <div className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-[#D8D2D4]">
                    <Check className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                    <span>Dual brokerage compliance loops & separate disclosures.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#D8D2D4] text-center space-y-3 shadow-sm">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Add-On Investment</span>
                <div className="text-4xl font-black text-[#3A2E29]">+$150</div>
                <span className="text-[11px] text-slate-500 block uppercase font-medium">Added to Standard File Rate</span>
                <div className="pt-2">
                  <button
                    onClick={onBookCall}
                    className="w-full py-2.5 bg-[#3A2E29] hover:bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    Discuss Dual Files
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. AGENT REGISTRATION & CANCELLATION RULES */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Agent Registration Protocol */}
          <div className="bg-white rounded-3xl p-8 border border-[#D8D2D4] shadow-sm space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-[#D8D2D4]">
              <div className="w-10 h-10 rounded-xl bg-[#0D9BA3] text-white flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3A2E29]">Agent Registration Protocol</h3>
                <span className="text-xs text-slate-500">1-Time onboarding required before first file</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              To safeguard your broker compliance and ensure seamless operations, an agent cannot simply drop an executed contract without prior profile setup. Our 3-step registration ensures our systems know your exact workflow:
            </p>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3 p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                <div className="w-6 h-6 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                  1
                </div>
                <div>
                  <strong className="text-[#3A2E29]">15-Minute Fit Call:</strong> We discuss your typical transaction volume, geographic focus, brokerage software, and preferred title partners.
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                <div className="w-6 h-6 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                  2
                </div>
                <div>
                  <strong className="text-[#3A2E29]">Partner & Tool Configuration:</strong> We log your e-sign preferences (DocuSign, Dotloop), brokerage portal logins (Command, SkySlope, Brokermint), and contact styles.
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                <div className="w-6 h-6 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                  3
                </div>
                <div>
                  <strong className="text-[#3A2E29]">Submit Portal Activation:</strong> You receive an active client portal login to submit new contracts 24/7 with guaranteed immediate triage.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookCall}
                className="inline-flex items-center space-x-2 text-xs font-bold text-[#0D9BA3] hover:text-[#3A2E29] transition uppercase tracking-wider cursor-pointer"
              >
                <span>Register as an HTC Agent</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Cancellation Terms */}
          <div className="bg-white rounded-3xl p-8 border border-[#D8D2D4] shadow-sm space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-[#D8D2D4]">
              <div className="w-10 h-10 rounded-xl bg-[#FE7311] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3A2E29]">Cancellation & Withdrawal Policy</h3>
                <span className="text-xs text-slate-500">Fair, defensible, and zero-risk</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Real estate transactions face genuine contingencies. If a transaction falls out of contract during the inspection period, financing contingency, or appraisal shortfall:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-4 bg-[#FE7311]/5 rounded-2xl border border-[#FE7311]/20 space-y-2">
                <div className="flex items-center space-x-2 text-[#FE7311] font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>$0 Fee for Cancelled Contract-to-Close Files</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  If the contract terminates prior to closing through no fault of the agent, you owe $0 for contract coordination.
                </p>
              </div>

              <div className="p-4 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-2">
                <div className="flex items-center space-x-2 text-[#3A2E29] font-bold">
                  <FileCheck2 className="w-4 h-4 text-[#0D9BA3]" />
                  <span>Defensible Audit Trail Handed to Broker</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  HTC packages all executed cancellation documents, mutual release of deposit agreements, and chronological communications for your brokerage compliance upload.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed pt-2">
              <em>Note: Standalone pre-market Listing Launch services or association research add-ons completed prior to listing withdrawal are non-refundable once draft deliverables have been issued.</em>
            </p>
          </div>

        </div>
      </section>

      {/* 5. APPROVED ADD-ONS MATRIX */}
      <section className="py-20 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#3A2E29]/10 text-[#3A2E29] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9BA3]" />
              <span>Specialized Coordination Modules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              Approved Add-On Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Enhance your file with specialized Florida transaction modules when your deal requires extra institutional diligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Add-On 1 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#3A2E29]">HOA & Condo Diligence Add-On</h4>
                <p className="text-xs text-slate-500 mt-1">For Condos & Mandatory HOA Communities</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active liaison with management companies for estoppel requests, master vs. sub-dues validation, pet/rental rules, and buyer board application packets.
              </p>
              <div className="pt-2 border-t border-[#D8D2D4] flex justify-between items-center text-xs">
                <span className="text-slate-500">Per property file:</span>
                <span className="font-bold text-[#0D9BA3]">$75 / file</span>
              </div>
            </div>

            {/* Add-On 2 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#3A2E29]">1-Day Rush Listing Launch</h4>
                <p className="text-xs text-slate-500 mt-1">24-Hour Expedited MLS Draft Entry</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emergency priority file triage. Complete public records audit, disclosure dispatch, photo sequencing, and MLS draft delivery within 24 business hours.
              </p>
              <div className="pt-2 border-t border-[#D8D2D4] flex justify-between items-center text-xs">
                <span className="text-slate-500">Per rush listing:</span>
                <span className="font-bold text-[#FE7311]">$100 / listing</span>
              </div>
            </div>

            {/* Add-On 3 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#3A2E29]">FIRPTA & Foreign Seller Module</h4>
                <p className="text-xs text-slate-500 mt-1">Non-Resident Seller Tax Coordination</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized disclosure assembly, title company FIRPTA specialist coordination, and CPA withholding escrow verification for international sellers.
              </p>
              <div className="pt-2 border-t border-[#D8D2D4] flex justify-between items-center text-xs">
                <span className="text-slate-500">Per foreign file:</span>
                <span className="font-bold text-[#3A2E29]">$125 / file</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. NO HIDDEN DISCOUNTS OR CUSTOM PRICING PROMISES */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Operational Integrity</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
              No Hidden Discounts. No Arbitrary Promises.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In real estate operations, cheap often means cutting corners on compliance, ignoring critical contract clauses, or outsourcing sensitive client data overseas. At HTC, our pricing is completely uniform and transparent.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4 text-xs text-slate-200">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <strong className="text-white block mb-1">Equal Standards</strong>
                <span>Every solo agent receives the exact same meticulous senior coordinator oversight as top-tier producers.</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <strong className="text-white block mb-1">Single Data Truth</strong>
                <span>All HTC systems and pages pull from one central pricing matrix approved directly by Michelle.</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <strong className="text-white block mb-1">No Bait-and-Switch</strong>
                <span>Zero sudden price hikes or hidden administrative surcharges on settlement statements.</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-lg"
              >
                Schedule 15-Minute Intro Call
              </button>
              <button
                onClick={onOpenWhyHtc}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                Explore Why HTC Wins
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING FAQ & FINAL CTA */}
      <section className="py-20 bg-white border-t border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              Frequently Asked Pricing Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Clear answers regarding payment disbursement, cancellations, and workflow scopes.
            </p>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] overflow-hidden transition"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 font-bold text-sm text-[#3A2E29] flex justify-between items-center cursor-pointer hover:text-[#0D9BA3] transition"
                >
                  <span className="pr-4">{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#0D9BA3] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#D8D2D4]/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom High-Impact CTA */}
          <div className="bg-[#EEEAEB] rounded-3xl p-8 sm:p-10 border border-[#D8D2D4] text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
              Ready to eliminate administrative drag on your next closing?
            </h3>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              Book a brief 15-minute Discovery Call to discuss your current pipeline, verify software compatibility, and activate your account.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg cursor-pointer"
              >
                Book a Discovery Call
              </button>
              <button
                onClick={onSubmitDeal}
                className="w-full sm:w-auto px-7 py-4 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
              >
                Submit a Transaction File
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Or call us directly at <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="font-bold text-[#3A2E29] hover:underline">{PHONE_NUMBER}</a>
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
