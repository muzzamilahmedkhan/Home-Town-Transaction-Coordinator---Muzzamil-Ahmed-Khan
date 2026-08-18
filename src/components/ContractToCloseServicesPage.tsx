import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
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
  Clock,
  ChevronDown,
  ChevronUp,
  MapPin,
  Building2,
  FileText,
  AlertTriangle,
  FolderLock,
  Send,
  HelpCircle,
  DollarSign,
  CheckSquare,
  Lock,
  FileSearch,
  Check,
  XCircle,
  Eye,
  Sliders,
  BellRing
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';

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
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

export const ContractToCloseServicesPage: React.FC<Props> = ({
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
  onOpenMiamiTc,
  onOpenMiamiDadeTc,
  onOpenBrowardTc,
  onOpenSouthFloridaTc
}) => {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 5 Process Phases (Timeline from Acceptance to Post-Close)
  const timelinePhases = [
    {
      step: 'Phase 1',
      title: 'Contract Acceptance & Immediate Intake',
      timeframe: 'Days 1 – 2',
      badge: 'Immediate Setup & Audit',
      summary: 'Establishing the master file, auditing executed contract terms, and locking critical dates across all parties.',
      tasks: [
        'Complete FAR/BAR contract audit for fully executed initials, dates, and mandatory Florida riders (Condo, HOA, Lead-Based Paint, Financing).',
        'Calculate statutory contract milestone dates (Escrow deposit, inspection period, title commitment, loan application, loan commitment, closing).',
        'Deploy Master Calendar and critical date summary to Agent, Client, Title/Closing Agent, Lender, and Cooperating Broker.',
        'Obtain and verify initial Earnest Money Deposit (EMD) escrow instructions and wire fraud safety warnings.'
      ]
    },
    {
      step: 'Phase 2',
      title: 'Inspection & Association Governance',
      timeframe: 'Days 3 – 15',
      badge: 'Contingency & Compliance',
      summary: 'Active tracking of the inspection period, repair addenda collection, and condominium/HOA application processing.',
      tasks: [
        'Monitor inspection window expiration and verify escrow deposit confirmation from holding escrow agent.',
        'Collect and distribute executed repair addenda, credit amendments, or release documentation as negotiated by the agent.',
        'Order, track, and verify HOA/Condominium estoppel certificate requests and buyer application packages.',
        'Verify SB 4-D / SB 154 structural integrity milestone disclosures and association meeting approval timelines.'
      ]
    },
    {
      step: 'Phase 3',
      title: 'Financing, Title & Municipal Clearance',
      timeframe: 'Days 16 – 30',
      badge: 'Underwriting & Clearing',
      summary: 'Proactive milestone check-ins with loan officers and title examiners to prevent closing day surprises.',
      tasks: [
        'Track appraisal scheduling, completion, and lender underwriting milestones leading to loan commitment deadline.',
        'Follow up on title commitment delivery, municipal unrecorded lien searches, open permit reports, and property surveys.',
        'Coordinate payoff requests, HOA resale packages, and FIRPTA withholding documentation for foreign sellers.',
        'Confirm homeowners, windstorm, and flood insurance binding with buyer and insurance agents.'
      ]
    },
    {
      step: 'Phase 4',
      title: 'Closing Prep, CD Review & Settlement',
      timeframe: 'Final 5 Days',
      badge: 'Balancing & Settlement',
      summary: 'Reviewing Closing Disclosures, issuing commission disbursements, and facilitating smooth funding.',
      tasks: [
        'Verify lender Clear to Close (CTC) issuance and buyer receipt of initial Closing Disclosure (CD).',
        'Review ALTA Settlement Statement / CD for commission accuracy, administrative broker fees, and tax prorations.',
        'Draft and submit Commission Disbursement Authorization (CDA) or DA to title company and brokerage.',
        'Schedule final walk-through inspection and coordinate buyer/seller signing appointments with title agent.'
      ]
    },
    {
      step: 'Phase 5',
      title: 'Post-Close & Brokerage Compliance',
      timeframe: 'Closing Day & Beyond',
      badge: 'Complete Archival',
      summary: 'Uploading the complete audited compliance packet to your broker portal so commissions disburse immediately.',
      tasks: [
        'Confirm final funding, recording, and disbursement of real estate commissions.',
        'Upload 100% complete, broker-compliant document package into SkySlope, Command, Dotloop, Brokermint, or Paperless Pipeline.',
        'Archive organized transaction cloud file and deliver permanent digital record to agent.',
        'Issue client review prompt on behalf of the agent to capture 5-star Google / Zillow recommendations.'
      ]
    }
  ];

  // Delegation Matrix Data
  const delegationMatrix = [
    {
      category: 'Contract Audit & Intake',
      htcExecutes: 'Audits signatures/dates on all FAR/BAR pages, identifies missing riders, sets up cloud folder, calculates critical dates.',
      agentRetains: 'Negotiates final purchase price, counteroffers, closing concessions, and special contract stipulations with client.'
    },
    {
      category: 'Escrow & Deadlines',
      htcExecutes: 'Distributes wire instructions, follows up with escrow agent for deposit receipt, sends calendar invites to all parties.',
      agentRetains: 'Advises client on financing strategy, lender selection, and earnest money deposit amounts.'
    },
    {
      category: 'Inspections & Repairs',
      htcExecutes: 'Tracks inspection period deadline, collects executed repair addenda / credits, and distributes to title/lender.',
      agentRetains: 'Attends physical home inspection, reviews inspector findings with buyers, and drafts repair requests/credits.'
    },
    {
      category: 'HOA / Condo Estoppels',
      htcExecutes: 'Orders estoppel certificates, tracks board application submission, monitors interview dates, verifies approval certificate.',
      agentRetains: 'Advises buyer on HOA rules/restrictions, pet policies, rental caps, and parking regulations.'
    },
    {
      category: 'Lender & Title Milestones',
      htcExecutes: 'Follows up on appraisal order, tracks loan commitment deadline, monitors title search, municipal lien & permit reports.',
      agentRetains: 'Addresses low appraisal negotiations, financing restructure decisions, and client fiduciary advice.'
    },
    {
      category: 'Settlement & CDA',
      htcExecutes: 'Reviews ALTA/CD numbers against contract, secures signed CDA, confirms signing schedules, uploads to broker portal.',
      agentRetains: 'Conducts final property walk-through with buyers, attends physical closing table, and hands over keys.'
    }
  ];

  const faqs = [
    {
      q: 'How is Contract-to-Close different from general transaction coordination?',
      a: 'Contract-to-close services focus specifically on the rigorous operational sequence required once a purchase offer becomes a legally binding, fully executed contract. While general coordination may encompass pre-listing tasks, marketing, or team administration, contract-to-close is the dedicated execution path that moves an active transaction through Florida statutory contingencies, escrow, title, financing, closing, and brokerage compliance.'
    },
    {
      q: 'When should I submit an accepted contract to HTC?',
      a: 'As soon as the contract is fully signed by all buyers and sellers. Submitting within 24 hours of effective acceptance allows us to audit every page for compliance, establish the critical milestone calendar, and deliver introductory wire instructions before Day 1 deadlines arrive.'
    },
    {
      q: 'What happens if a contract terminates during the inspection period?',
      a: 'Because our contract-to-close services operate strictly on a pay-at-closing basis, you pay $0 if a transaction cancels prior to closing. We collect the signed Cancellation and Release of Escrow agreement and archive the file cleanly.'
    },
    {
      q: 'Do you work directly with my broker compliance portal?',
      a: 'Yes. We integrate directly with all major brokerage compliance systems across Florida, including SkySlope, Keller Williams Command, Dotloop, Brokermint, Paperless Pipeline, and RealiTech, ensuring your files are 100% compliant before closing so your CDA is released without delay.'
    }
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Contract-to-Close Services</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>PROCESS-DRIVEN TRANSACTION EXECUTION • FLORIDA-WIDE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              Contract-to-Close <br />
              <span className="text-[#0D9BA3]">Services in Florida</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Once the offer is accepted, your transaction needs a controlled, predictable path through statutory deadlines, multi-party communications, title clearances, and broker compliance.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenPricing}
                className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide transition shadow-xl hover:shadow-[#FE7311]/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>Compare Plans ($375 / $475)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={onSubmitDeal}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
              >
                <Send className="w-4 h-4 text-[#0D9BA3]" />
                <span>Submit an Executed Deal ($375)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: WHAT "CONTRACT TO CLOSE" MEANS (SEO / AEO ANSWER BLOCK) */}
      <section className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Process Definition & Operational Scope</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            What Does "Contract to Close" Mean in Florida Real Estate?
          </h2>

          <div className="p-6 sm:p-8 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-[#3A2E29] text-base">
              Contract-to-close refers to the systematic end-to-end management of a real estate transaction from the exact moment a purchase agreement is fully executed by all parties until the deed records, funds disburse, and commission checks are paid.
            </p>
            <p>
              In Florida, an accepted contract triggers over <strong>30 distinct operational steps</strong> involving buyers, sellers, cooperating agents, escrow officers, title examiners, mortgage underwriters, appraisers, municipal permit offices, condominium boards, and brokerage compliance auditors.
            </p>
            <p>
              A professional <strong>contract-to-close coordinator</strong> manages this intricate workflow so real estate agents can eliminate 12–18 hours of back-office paperwork per deal, avoid missed statutory contingency deadlines, and remain 100% focused on dollar-productive client negotiations.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-[#3A2E29]">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Complete FAR/BAR Rider Audit</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Zero Retainers • $0 Fee if File Cancels</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Broker Compliance Portal Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: THE TIMELINE FROM ACCEPTANCE TO POST-CLOSE */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Step-by-Step Chronological Path</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              The Florida Contract-to-Close Timeline
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every accepted contract follows a controlled 5-phase execution roadmap designed to protect contingencies, align closing parties, and guarantee broker-ready compliance.
            </p>
          </div>

          {/* Phase Selector & Content Display */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Phase Navigation List */}
            <div className="lg:col-span-4 space-y-3">
              {timelinePhases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    activePhase === idx
                      ? 'bg-[#3A2E29] text-white border-[#3A2E29] shadow-lg'
                      : 'bg-white text-[#3A2E29] border-[#D8D2D4] hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider">
                      <span className={activePhase === idx ? 'text-[#0D9BA3]' : 'text-[#FE7311]'}>{phase.step}</span>
                      <span>•</span>
                      <span className={activePhase === idx ? 'text-slate-300' : 'text-slate-500'}>{phase.timeframe}</span>
                    </div>
                    <div className="font-bold text-sm sm:text-base">{phase.title}</div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition ${activePhase === idx ? 'text-[#0D9BA3] translate-x-1' : 'text-slate-300 group-hover:text-[#3A2E29]'}`} />
                </button>
              ))}
            </div>

            {/* Active Phase Card Detail */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D2D4] pb-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] block">
                    {timelinePhases[activePhase].step} • {timelinePhases[activePhase].timeframe}
                  </span>
                  <h3 className="text-2xl font-bold text-[#3A2E29] font-serif mt-1">
                    {timelinePhases[activePhase].title}
                  </h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#EEEAEB] text-[#3A2E29] border border-[#D8D2D4]">
                  {timelinePhases[activePhase].badge}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {timelinePhases[activePhase].summary}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E29]">
                  What HTC Executes During This Window:
                </h4>
                <div className="grid sm:grid-cols-1 gap-3">
                  {timelinePhases[activePhase].tasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start space-x-3 p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#3A2E29] font-medium leading-relaxed">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION 3: WHAT CAN BE DELEGATED VS WHAT REMAINS WITH THE AGENT */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Clear Division of Responsibility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              What Can Be Delegated vs. What Remains With the Agent
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              True leverage comes from knowing exactly who owns each part of the file. You retain client relationships and negotiation strategy; we execute the operational engine.
            </p>
          </div>

          {/* Side-by-Side Comparison Table */}
          <div className="overflow-hidden rounded-3xl border border-[#D8D2D4] shadow-sm bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#3A2E29] text-white p-6 border-b border-[#D8D2D4]">
              <div className="md:col-span-3 text-xs font-bold uppercase tracking-widest text-slate-300">Transaction Area</div>
              <div className="md:col-span-5 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] flex items-center space-x-1.5">
                <Check className="w-4 h-4" />
                <span>What HTC TC Executes (Delegated)</span>
              </div>
              <div className="md:col-span-4 text-xs font-bold uppercase tracking-widest text-[#FE7311] flex items-center space-x-1.5 mt-2 md:mt-0">
                <ShieldCheck className="w-4 h-4" />
                <span>What Agent Retains (Fiduciary)</span>
              </div>
            </div>

            <div className="divide-y divide-[#D8D2D4]">
              {delegationMatrix.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-[#EEEAEB]/50 transition gap-4 md:gap-6 items-center">
                  <div className="md:col-span-3 font-bold text-sm text-[#3A2E29]">
                    {item.category}
                  </div>
                  <div className="md:col-span-5 text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#0D9BA3]/5 p-3.5 rounded-xl border border-[#0D9BA3]/20">
                    <strong className="text-[#0D9BA3] block mb-1">HTC Coordination:</strong>
                    {item.htcExecutes}
                  </div>
                  <div className="md:col-span-4 text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#FE7311]/5 p-3.5 rounded-xl border border-[#FE7311]/20">
                    <strong className="text-[#FE7311] block mb-1">Agent Ownership:</strong>
                    {item.agentRetains}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-[#EEEAEB] p-6 rounded-2xl border border-[#D8D2D4] max-w-3xl mx-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#3A2E29] block mb-1 font-bold">Why Top Florida Producers Rely on This Division of Labor:</strong>
            By delegating 30+ repetitive operational check-ins and compliance uploads, you gain 12–18 hours per closed contract to generate new client appointments, host open houses, and negotiate high-value deals.
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: H.O.M.E. CLOSE METHOD™ */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proprietary 4-Stage Operating System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              The H.O.M.E. Close Method™
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our proven contract-to-close framework that guarantees every Florida real estate file moves with structure, absolute clarity, and proactive care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step H */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-black text-xl font-serif">
                  H
                </div>
                <h3 className="text-lg font-bold text-[#3A2E29]">Honor the Agreement</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We audit the executed contract for every signature, initial, and mandatory Florida rider, establishing mutual alignment and respect for the deal terms from Day 1.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#0D9BA3] pt-3 border-t border-[#D8D2D4]">
                Intake & Contract Audit
              </div>
            </div>

            {/* Step O */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-black text-xl font-serif">
                  O
                </div>
                <h3 className="text-lg font-bold text-[#3A2E29]">Organize the File</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We configure your digital repository, calculate Florida statutory milestone dates, issue Master Calendars, and align title, lender, and client communication channels.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#FE7311] pt-3 border-t border-[#D8D2D4]">
                Master Calendar & Cloud Setup
              </div>
            </div>

            {/* Step M */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-black text-xl font-serif">
                  M
                </div>
                <h3 className="text-lg font-bold text-[#3A2E29]">Monitor the Milestones</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We proactively follow up on earnest money deposits, inspection contingency windows, loan commitment milestones, HOA estoppels, and municipal lien searches.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#3A2E29] pt-3 border-t border-[#D8D2D4]">
                Contingency & Milestone Tracking
              </div>
            </div>

            {/* Step E */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-4 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-black text-xl font-serif">
                  E
                </div>
                <h3 className="text-lg font-bold text-[#3A2E29]">Ease the Close</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We review Closing Disclosures, balance settlement statements, issue Commission Disbursement Authorizations (CDA), and upload complete broker-compliant records.
                </p>
              </div>
              <div className="text-[11px] font-bold text-[#0D9BA3] pt-3 border-t border-[#D8D2D4]">
                CDA Review & Broker Compliance
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SECTION 5: BASE / PRO PLANS COMPARISON & PRIMARY CTA */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Transparent </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Choose Your Contract-to-Close Package
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Purely performance-based. Zero monthly subscription retainers, zero onboarding fees, and $0 owed if a contract terminates during contingencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Package 1: Base */}
            <div className="bg-[#EEEAEB] rounded-3xl p-8 sm:p-10 border border-[#D8D2D4] space-y-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                    Contract Services Base
                  </span>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black text-[#3A2E29] font-serif">$375</span>
                  <span className="text-xs text-slate-500 font-bold">/ per closed file</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete contract-to-close coordination starting with an executed purchase agreement and continuing through final closing and broker upload.
                </p>

                <div className="pt-2 space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                    <span>Executed FAR/BAR contract audit & rider check</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                    <span>Earnest money deposit (EMD) escrow opening verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                    <span>Master Calendar lock shared with all parties</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                    <span>Inspection, loan commitment & title milestone tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                    <span>HOA / Condo application & estoppel packet follow-up</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                    <span>Closing Disclosure (CD) & CDA review</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                    <span>Brokerage compliance portal upload & organized archive</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4] space-y-3">
                <button
                  onClick={onSubmitDeal}
                  className="w-full py-3.5 bg-[#3A2E29] hover:bg-[#2A211D] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md text-center"
                >
                  Submit a Base Contract ($375)
                </button>
              </div>
            </div>

            {/* Package 2: Pro */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#FE7311] space-y-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FE7311] text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                Full Listing + Contract Lane
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FE7311] bg-[#FE7311]/10 px-3 py-1 rounded-full">
                    Listing Launch + Contract Services Pro
                  </span>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black text-[#3A2E29] font-serif">$475</span>
                  <span className="text-xs text-slate-500 font-bold">/ per closed file</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Combines pre-listing preparation, disclosure assembly, and MLS draft setup with complete contract-to-close execution.
                </p>

                <div className="pt-2 space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center space-x-2 font-bold text-[#FE7311]">
                    <Sparkles className="w-4 h-4 flex-shrink-0" />
                    <span>Includes ALL Base Contract-to-Close Features PLUS:</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                    <span>Pre-listing document collection & SPDS disclosure prep</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                    <span>MLS draft listing input & syndication verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                    <span>Photography & vendor access scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                    <span>Lockbox & showing instruction setup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                    <span>Frictionless transition from Active Listing to Contract</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4] space-y-3">
                <button
                  onClick={onOpenPricing}
                  className="w-full py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md text-center"
                >
                  Compare All Pricing Plans
                </button>
              </div>
            </div>

          </div>

          {/* FAQs Accordion */}
          <div className="max-w-3xl mx-auto space-y-4 pt-8">
            <h3 className="text-xl font-bold text-[#3A2E29] text-center font-serif">
              Frequently Asked Questions About Contract-to-Close
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, fIdx) => (
                <div key={fIdx} className="bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-[#3A2E29] flex justify-between items-center cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === fIdx ? <ChevronUp className="w-4 h-4 text-[#0D9BA3]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {openFaq === fIdx && (
                    <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-[#D8D2D4]/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA & CONTACT BAR */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FE7311]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Structured Florida Real Estate Operations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
              Ready for a Controlled Path From Contract to Close?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Submit your next executed agreement or Book a Fit Call to see how our proven H.O.M.E. Close Method™ protects your time, eliminates compliance stress, and speeds up your commission disbursement.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl hover:shadow-[#FE7311]/25 cursor-pointer"
              >
                Compare Plans ($375 / $475)
              </button>
              <button
                onClick={onSubmitDeal}
                className="w-full sm:w-auto px-7 py-4 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md"
              >
                Submit a Deal ($375)
              </button>
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                Book a Fit Call
              </button>
            </div>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400">
              <span>Direct Dial: <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a></span>
              <span>•</span>
              <span>Email: <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white font-bold hover:underline">{EMAIL_ADDRESS}</a></span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
