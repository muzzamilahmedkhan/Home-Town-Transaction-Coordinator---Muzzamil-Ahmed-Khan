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
  FileText,
  AlertTriangle,
  FolderLock,
  Send,
  HelpCircle,
  DollarSign
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onExploreServices: () => void;
  onGoHome: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc: () => void;
}

export const TransactionCoordinationPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onExploreServices,
  onGoHome,
  onOpenHowItWorks,
  onOpenWhyHtc
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'intake' | 'timeline' | 'communication' | 'closing' | 'postClose'>('intake');

  // Detailed Scope by Category (Specific tasks, never "we handle everything")
  const scopeCategories = {
    intake: {
      title: '1. File Intake & Contract Audit',
      icon: FileCheck2,
      description: 'Systematic receipt and verification within 30 minutes during business hours.',
      tasks: [
        'Audit fully executed FAR/BAR contract, addenda, and riders for missing initials, signatures, and effective dates.',
        'Extract and verify contact information for buyer, seller, title/closing agent, lender, and cooperating agent.',
        'Confirm initial escrow deposit amount, statutory due date, and escrow agent contact details.',
        'Create secure cloud file repository and establish brokerage compliance loop/transaction.'
      ]
    },
    timeline: {
      title: '2. Critical Date Calculation & Timeline Enforcement',
      icon: Calendar,
      description: 'Florida statutory deadline calculations synchronized across calendars.',
      tasks: [
        'Calculate Florida statutory deadlines (inspection period, additional escrow deposit, loan commitment, title review, and HOA resale document windows).',
        'Distribute color-coded Critical Date Timeline to agent, title agent, lender, and client within 24 hours of intake.',
        'Provide Google Calendar / Outlook / iCal calendar integration for all milestone dates.',
        'Track contractual notification deadlines for repair requests and loan commitment delivery.'
      ]
    },
    communication: {
      title: '3. Stakeholder Communication & Milestone Monitoring',
      icon: Users,
      description: 'Proactive oversight and weekly digests with no chasing required.',
      tasks: [
        'Send professional introductory email welcoming client and establishing HTC as your administrative coordinator.',
        'Request and secure written Escrow Deposit Verification from title agent within statutory timeline.',
        'Follow up weekly with lender on appraisal scheduling, conditional approval, and clear-to-close status.',
        'Track HOA / Condominium application submission, board approval, and estoppel package delivery.',
        'Send Friday weekly status digest summarizing completed vs. upcoming milestones to agent and client.'
      ]
    },
    closing: {
      title: '4. Closing Preparation & Commission Defense',
      icon: FolderLock,
      description: 'Auditing settlement figures and securing broker authorization before closing day.',
      tasks: [
        'Obtain draft Settlement Statement / Closing Disclosure (CD) from title agent 48–72 hours prior to closing.',
        'Audit commission percentages, transaction fees, and administrative charges against listing/broker agreement.',
        'Prepare and submit Commission Disbursement Authorization (CDA / DA) for broker sign-off.',
        'Deliver broker-approved CDA directly to title/closing agent for same-day funding.',
        'Send final walkthrough reminders and utility transfer checklist to buyer/seller.'
      ]
    },
    postClose: {
      title: '5. Post-Close Archival & Defensible Broker File',
      icon: CheckCircle2,
      description: 'Complete archival and brokerage compliance closeout.',
      tasks: [
        'Collect final ALTA / Settlement Statement signed by all parties from title company.',
        'Upload all executed disclosures, riders, inspection addenda, escrow letters, and CDA into your broker portal (SkySlope, Dotloop, Brokermint, etc.).',
        'Resolve any broker compliance flags to ensure 100% complete and approved file status.',
        'Send congratulations email and review request link to client on behalf of your brand.',
        'Provide zipped cloud backup archive of the entire transaction history.'
      ]
    }
  };

  // Base vs Pro Comparison Matrix
  const planComparison = [
    {
      feature: 'Florida FAR/BAR Contract & Rider Audit',
      base: true,
      pro: true
    },
    {
      feature: 'Critical Date Timeline & Calendar Sync',
      base: true,
      pro: true
    },
    {
      feature: 'Escrow Verification & Written Title Receipt',
      base: true,
      pro: true
    },
    {
      feature: 'Weekly Friday Digest to Agent & Client',
      base: true,
      pro: true
    },
    {
      feature: 'CDA / Commission Disbursement Setup with Broker',
      base: true,
      pro: true
    },
    {
      feature: '100% Broker Compliance Portal Submission',
      base: true,
      pro: true
    },
    {
      feature: 'Pre-Closing CD / Settlement Statement Verification',
      base: true,
      pro: true
    },
    {
      feature: 'Utility Transfer Concierge Guide to Client',
      base: false,
      pro: true
    },
    {
      feature: 'Post-Close Client Google Review Generation Workflow',
      base: false,
      pro: true
    },
    {
      feature: 'Branded Milestone Progress Graphics for Social/Client',
      base: false,
      pro: true
    },
    {
      feature: '<15 min on business days)',
      base: false,
      pro: true
    }
  ];

  const tcResponsibilities = [
    {
      type: 'HTC Responsibilities (What We Do)',
      status: 'included',
      items: [
        'Document completeness audits & missing signature checks',
        'Florida contract deadline calculation & timeline distribution',
        'Written escrow deposit verification follow-up with Title',
        'Appraisal, loan commitment, & title commitment milestone tracking',
        'HOA / Condo application & estoppel follow-up',
        'CDA preparation, broker portal compliance, & settlement statement audit'
      ]
    },
    {
      type: 'Agent Retained Responsibilities (What Stays With You)',
      status: 'agentOnly',
      items: [
        'Negotiating purchase price, inspection repair credits, or contract terms',
        'Providing legal, tax, or investment advice to clients',
        'Drafting custom non-standard legal clauses or unilateral addenda',
        'Attending home inspections, appraisals, walkthroughs, or closing table',
        'Deciding whether to declare contract default or terminate an agreement'
      ]
    }
  ];

  const faqs = [
    {
      q: 'When do I pay for Transaction Coordination services?',
      a: 'Our contract-to-close coordination fee is paid directly on the Settlement Statement (CD) at the closing table, or invoiced upon successful closing. There are zero upfront fees, monthly subscriptions, or retainers.'
    },
    {
      q: 'What happens if a contract cancels during the inspection period?',
      a: 'If a deal cancels during contingencies and does not close, you are not charged our closing fee. We assist in collecting the signed Cancellation & Escrow Release agreement, archive the documents in your portal, and stand ready for your next contract.'
    },
    {
      q: 'Can HTC coordinate both Buyer and Seller sides of the same transaction?',
      a: 'Yes! When you represent both sides or when both agents utilize HTC, we manage dual compliance requirements, ensuring strict separation of client communications and broker file compliance for both parties.'
    },
    {
      q: 'How do you coordinate with my specific broker compliance portal?',
      a: 'We log directly into your brokerage platform (SkySlope, Dotloop, Brokermint, Paperless Pipeline, reZEN, Command, etc.) using your agent credentials or as an authorized admin assistant, organizing folders and submitting tasks for broker compliance approval.'
    },
    {
      q: 'How does HTC communicate with my clients?',
      a: 'We introduce ourselves as your professional transaction coordination team. We handle logistics, milestone reminders, and administrative documentation, keeping you copied on key correspondence while ensuring you remain the trusted advisor.'
    }
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* ------------------------------------------------------------------ */}
      {/* HERO & POSITIONING */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-gradient-to-b from-[#3A2E29] to-[#2B221E] text-white overflow-hidden border-b border-[#0D9BA3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-300">
            <button
              onClick={onGoHome}
              className="hover:text-white transition flex items-center space-x-1 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-[#0D9BA3]">/</span>
            <button
              onClick={onExploreServices}
              className="hover:text-white transition cursor-pointer"
            >
              <span>Services</span>
            </button>
            <span className="text-[#0D9BA3]">/</span>
            <span className="text-white font-bold">Transaction Coordination</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
                <FileCheck2 className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>FLORIDA CONTRACT-TO-CLOSE EXPERTISE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
                Florida Transaction Coordination Services
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
                HTC manages the timeline, file movement, milestone communication, and broker-ready documentation defined by your selected plan — from contract acceptance to completed closing.
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

              <div className="pt-4 flex items-center space-x-6 text-xs text-slate-300 font-medium">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
                  <span>$0</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
                  <span>FAR/BAR Specialists</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
                  <span>Bilingual Support</span>
                </div>
              </div>
            </div>

            {/* High-End Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#0D9BA3]/40 shadow-2xl bg-black/40 group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                    alt="Real estate closing and transaction documents"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E29]/90 via-[#3A2E29]/30 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#3A2E29]/90 backdrop-blur-md border border-white/10 text-white space-y-1">
                  <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
                    Defensible Closing Files
                  </div>
                  <div className="text-sm font-montserrat font-bold">
                    thorough signature tracking
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 1. DEFINITION: WHAT TC IS AND IS NOT */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Scale className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>CLEAR OPERATIONAL BOUNDARIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              What Transaction Coordination Is — and Is Not
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              Professional transaction coordination is a specialized administrative discipline. Understanding clear role boundaries ensures legal compliance, broker protection, and seamless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* What It IS */}
            <div className="bg-[#EEEAEB] p-8 rounded-3xl border border-[#D8D2D4] space-y-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 flex items-center justify-center text-[#0D9BA3]">
                  <CheckCircle2 className="w-6 h-6 text-[#0D9BA3]" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                    What Transaction Coordination IS
                  </h3>
                  <div className="text-xs text-[#0D9BA3] font-bold uppercase tracking-wider">
                    Operational & Compliance Management
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#3A2E29] font-medium">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <span><strong>Florida FAR/BAR Contract Auditing:</strong> Verifying all executed signatures, initials, dates, and mandatory statutory riders.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <span><strong>Critical Date Enforcement:</strong> Calculating inspection, loan commitment, escrow, and title deadlines with calendar synchronization.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <span><strong>Stakeholder Follow-up:</strong> Securing written escrow deposit verification from title agents and loan status updates from lenders.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <span><strong>Commission & Compliance Archiving:</strong> Preparing CDA requests for broker sign-off and uploading audit-ready files into broker portals.</span>
                </li>
              </ul>
            </div>

            {/* What It IS NOT */}
            <div className="bg-[#3A2E29] text-white p-8 rounded-3xl border border-[#0D9BA3]/40 space-y-6 shadow-md">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/20 flex items-center justify-center text-[#FE7311]">
                  <XCircle className="w-6 h-6 text-[#FE7311]" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-extrabold text-white">
                    What Transaction Coordination IS NOT
                  </h3>
                  <div className="text-xs text-[#FE7311] font-bold uppercase tracking-wider">
                    Fiduciary & Licensed Advisory Scope
                  </div>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-medium">
                <li className="flex items-start space-x-2.5">
                  <XCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                  <span><strong>Not Legal or Fiduciary Advice:</strong> We do not provide legal counsel, tax guidance, or interpret non-standard legal liabilities.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <XCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                  <span><strong>Not Deal Negotiation:</strong> We never negotiate purchase prices, repair requests, inspection credits, or contractual concessions.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <XCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                  <span><strong>Not Custom Contract Drafting:</strong> We do not draft custom legal clauses; agents prepare or select the standard approved Florida forms.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <XCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                  <span><strong>Not On-Site Property Representation:</strong> We do not host open houses, show properties, or attend home inspections in person.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. SPECIFIC SCOPE ORGANIZED BY 5 WORKFLOW STAGES */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Layers className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>DETAILED OPERATIONAL SCOPE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              Specific Tasks Delivered at Every File Stage
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              We define our service by exact, verifiable deliverables rather than vague promises. Explore the detailed scope across all five stages:
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {(Object.keys(scopeCategories) as Array<keyof typeof scopeCategories>).map((key) => {
              const tab = scopeCategories[key];
              const Icon = tab.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-5 py-3 rounded-xl font-montserrat font-bold text-xs sm:text-sm transition flex items-center space-x-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#3A2E29] text-white shadow-md border border-[#0D9BA3]'
                      : 'bg-white text-[#3A2E29] border border-[#D8D2D4] hover:border-[#0D9BA3]/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#0D9BA3]' : 'text-slate-400'}`} />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Details Card */}
          {(() => {
            const currentScope = scopeCategories[activeTab];
            const ScopeIcon = currentScope.icon;
            return (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-lg space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D8D2D4] pb-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                      {currentScope.title}
                    </h3>
                    <p className="text-sm text-[#3A2E29]/80 font-medium">
                      {currentScope.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EEEAEB] border border-[#D8D2D4] flex items-center justify-center text-[#0D9BA3] flex-shrink-0">
                    <ScopeIcon className="w-6 h-6 text-[#FE7311]" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Itemized Tasks Handled by HTC:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentScope.tasks.map((task, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-4 rounded-2xl bg-[#EEEAEB]/60 border border-[#D8D2D4] text-xs sm:text-sm font-medium text-[#3A2E29] flex items-start space-x-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. BASE VS PRO PLAN DIFFERENCES */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <DollarSign className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>PLAN COMPARISON</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              Base vs. Pro Plan Differences
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              Choose the level of support that aligns with your transaction workflow and client experience standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Base Plan Card */}
            <div className="lg:col-span-6 bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] space-y-6 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                    Essential Standard
                  </span>
                  <span className="text-xs font-bold text-[#3A2E29]">Paid at Closing</span>
                </div>

                <div>
                  <h3 className="text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                    Base Contract-to-Close
                  </h3>
                  <div className="text-3xl font-montserrat font-extrabold text-[#3A2E29] mt-2">
                    $425 <span className="text-xs font-bold text-slate-500">/ closed file</span>
                  </div>
                  <p className="text-xs text-[#3A2E29]/80 font-medium mt-1">
                    Complete statutory deadline management, escrow verification, CDA setup, and broker compliance.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#D8D2D4]">
                  {planComparison.slice(0, 7).map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-[#3A2E29]">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                      <span>{item.feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#D8D2D4]">
                <button
                  onClick={onSubmitDeal}
                  className="w-full bg-[#3A2E29] hover:bg-[#2B221E] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  Submit Base File
                </button>
              </div>
            </div>

            {/* Pro Plan Card */}
            <div className="lg:col-span-6 bg-[#3A2E29] text-white rounded-3xl p-8 border-2 border-[#0D9BA3] space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FE7311] bg-black/40 px-3 py-1 rounded-full border border-[#FE7311]/40">
                    White-Glove Tier
                  </span>
                  <span className="text-xs font-bold text-[#0D9BA3]">Most Popular for Top Producers</span>
                </div>

                <div>
                  <h3 className="text-2xl font-montserrat font-extrabold text-white">
                    Full Service Pro
                  </h3>
                  <div className="text-3xl font-montserrat font-extrabold text-white mt-2">
                    $495 <span className="text-xs font-bold text-slate-300">/ closed file</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium mt-1">
                    Includes everything in Base plus high-touch client concierge, utility guides, and automated review generation.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {planComparison.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                      <span className={!item.base ? 'text-[#FE7311] font-bold' : ''}>
                        {item.feature} {!item.base && '(Pro Exclusive)'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={onBookCall}
                  className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition cursor-pointer flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book a Fit Call to Discuss Plans</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. AGENT RESPONSIBILITIES & DECISIONS */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>FIDUCIARY PRESERVATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              Decisions That Remain With the Agent
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              We empower you to stay the trusted real estate advisor while we handle the operational framework. Here is how responsibilities divide:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tcResponsibilities.map((resp, rIdx) => {
              const isAgentOnly = resp.status === 'agentOnly';
              return (
                <div
                  key={rIdx}
                  className={`p-8 rounded-3xl border shadow-sm space-y-6 ${
                    isAgentOnly
                      ? 'bg-white border-[#D8D2D4]'
                      : 'bg-[#3A2E29] text-white border-[#0D9BA3]/40'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isAgentOnly ? 'bg-amber-100 text-amber-600' : 'bg-[#0D9BA3]/20 text-[#0D9BA3]'
                      }`}
                    >
                      {isAgentOnly ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-montserrat font-extrabold ${
                          isAgentOnly ? 'text-[#3A2E29]' : 'text-white'
                        }`}
                      >
                        {resp.type}
                      </h3>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {isAgentOnly ? 'Fiduciary & Strategic Role' : 'Operational & Administrative Role'}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {resp.items.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        className={`flex items-start space-x-2.5 text-xs sm:text-sm font-medium ${
                          isAgentOnly ? 'text-[#3A2E29]' : 'text-slate-200'
                        }`}
                      >
                        {isAgentOnly ? (
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. CANCELLATION HANDLING */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-[#EEEAEB] rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-sm space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FE7311]/10 border border-[#FE7311]/30 flex items-center justify-center text-[#FE7311]">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#FE7311]">
                  
                </div>
                <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                  How HTC Handles Contract Cancellations
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#D8D2D4] space-y-2">
                <div className="text-sm font-bold text-[#3A2E29]">
                  $0 Fee on Cancelled Deals
                </div>
                <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                  If a buyer exercises their inspection right or a transaction cancels before closing, you owe $0 for our coordination time. We succeed only when you close.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#D8D2D4] space-y-2">
                <div className="text-sm font-bold text-[#3A2E29]">
                  Cancellation Form Collection
                </div>
                <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                  We assist in circulating the Florida Release and Cancellation of Contract form to ensure earnest money deposits are returned promptly and cleanly.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#D8D2D4] space-y-2">
                <div className="text-sm font-bold text-[#3A2E29]">
                  Compliance File Archival
                </div>
                <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                  We archive the cancelled file and all executed termination records in your broker portal, ensuring your brokerage audit requirements are fully satisfied.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. FAQ SECTION */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <HelpCircle className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              Transaction Coordination FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
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
      {/* PRIMARY PAGE CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#3A2E29] to-[#241C19] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <Sparkles className="w-4 h-4 text-[#FE7311]" />
            <span>CALM, DEFENSIBLE CLOSINGS EVERY TIME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
            Ready to reclaim substantial time per file
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Book a 15-Minute Fit Call to compare plans and setup your intake preferences, or submit your active executed contract directly to our team today.
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
              onClick={onOpenHowItWorks}
              className="text-[#0D9BA3] hover:underline cursor-pointer"
            >
              See How HTC Works
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
