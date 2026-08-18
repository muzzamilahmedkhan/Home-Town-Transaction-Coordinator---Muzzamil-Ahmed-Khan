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
  Eye,
  Sliders,
  Send,
  BellRing,
  ClipboardList,
  FolderLock,
  MessageSquare,
  Scale,
  Clock,
  ChevronDown,
  ChevronUp,
  FileText
} from 'lucide-react';
import { PHONE_NUMBER } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onExploreServices: () => void;
  onGoHome: () => void;
}

export const HowHtcWorksPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onExploreServices,
  onGoHome
}) => {
  const [activeStageTab, setActiveStageTab] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // The 5 Core Workflow Stages
  const workflowStages = [
    {
      step: '1',
      homeMethodLetter: 'H',
      homeMethodTitle: 'Honor & Alignment',
      title: 'Register and Set Preferences',
      subtitle: 'One-time onboarding to capture your workflow, broker compliance guidelines, and communication style.',
      agentAction: 'Agent completes a quick 3-minute intake profile with preferred title companies, lenders, broker portals, and communication rules.',
      htcAction: 'HTC configures your agent profile, sets notification cadences, and aligns with your brokerage compliance checklist.',
      deliverables: [
        'Customized Agent Workflow Profile',
        'Direct Line & Dedicated Point of Contact',
        'Brokerage-Specific Compliance Audit Matrix',
        'Escrow & Title Contact Directory Integration'
      ],
      icon: Sliders
    },
    {
      step: '2',
      homeMethodLetter: 'O',
      homeMethodTitle: 'Order & Intake',
      title: 'Submit the Accepted File',
      subtitle: 'Send the executed contract or listing package through our 60-second submission portal or email.',
      agentAction: 'Agent uploads or emails the fully executed FAR/BAR contract, addenda, and contact sheet upon contract acceptance.',
      htcAction: 'HTC receives the package, confirms receipt within 30 minutes during business hours, and begins the initial file audit.',
      deliverables: [
        'Instant File Receipt & Queue Confirmation',
        'Initial Document Completeness Verification',
        'Key Party Contact Extraction (Buyer, Seller, Title, Lender, Co-Agent)',
        'Cloud File Repository Creation'
      ],
      icon: Send
    },
    {
      step: '3',
      homeMethodLetter: 'O',
      homeMethodTitle: 'Order & Setup',
      title: 'HTC Reviews, Organizes, and Establishes the Timeline',
      subtitle: 'Comprehensive contract audit, deadline calculation, and introductory rollout to all transaction parties.',
      agentAction: 'Agent reviews the generated critical date summary and stays focused on client advisory and negotiations.',
      htcAction: 'HTC audits every page for signatures/initials, calculates statutory Florida contract deadlines, introduces ourselves to all parties, and requests title/escrow verification.',
      deliverables: [
        'Critical Date Timeline & Master Calendar Schedule',
        'Introductory Emails to Title, Lender, Co-Agent & Client',
        'Escrow Deposit Request & Wire Instruction Reminders',
        'Missing Initial / Signature Deficiency Log (if any)'
      ],
      icon: Calendar
    },
    {
      step: '4',
      homeMethodLetter: 'M',
      homeMethodTitle: 'Mastery & Monitoring',
      title: 'HTC Coordinates, Monitors, and Documents Milestones',
      subtitle: 'Proactive oversight of Florida statutory milestones, loan status, title commitments, and inspection periods.',
      agentAction: 'Agent negotiates repair requests and provides executed addenda as transaction conditions evolve.',
      htcAction: 'HTC monitors escrow receipt verification, tracks inspection contingency expiration, loan commitment deadlines, HOA/Condo estoppel packages, and municipal lien searches.',
      deliverables: [
        'Weekly Status Updates to Agent & Clients',
        'Escrow Receipt Verification from Title/Escrow Agent',
        'Financing / Appraisal Milestone Tracking',
        'HOA / Condo Document & Estoppel Follow-ups'
      ],
      icon: Search
    },
    {
      step: '5',
      homeMethodLetter: 'E',
      homeMethodTitle: 'Ease & Completion',
      title: 'HTC Supports Closing and Completes the Broker File',
      subtitle: 'Closing Statement / CD review, Commission Disbursement Authorization (CDA) setup, and final compliance archiving.',
      agentAction: 'Agent attends walkthrough/closing, congratulates the client, and receives their commission directly at closing.',
      htcAction: 'HTC requests the draft Settlement Statement/CD, submits the CDA/DA for broker approval, coordinates with Title, and archives the complete compliance package in your broker portal.',
      deliverables: [
        'Executed CDA / DA Issued Directly to Title Agent',
        'Settlement Statement / CD Verification for Commission Accuracy',
        '100% Complete Broker Compliance Portal Submission',
        'Post-Close Client Review Request & Archive Backup'
      ],
      icon: FolderLock
    }
  ];

  // What the Agent Sees at Each Stage (Visibility Grid)
  const visibilityStages = [
    {
      stage: 'Intake & Setup (Hours 0 – 24)',
      homeStage: 'Honor & Order',
      agentExperience: 'Calm Confirmation & Clear Schedule',
      whatYouSee: [
        'Immediate confirmation that your file is actively being handled.',
        'A clean, color-coded Critical Date Timeline sent to you and key transaction parties.',
        'Initial document check indicating missing initials or riders before they become audit issues.',
        'Professional introductory email welcoming your buyer/seller and introducing HTC as your support team.'
      ],
      tag: 'Day 1 Visibility'
    },
    {
      stage: 'Contingency & Inspection Period',
      homeStage: 'Order & Mastery',
      agentExperience: 'Proactive Guardrails & Visible Deadlines',
      whatYouSee: [
        'Escrow deposit receipt secured from title and uploaded to compliance.',
        'Clear countdown to inspection period expiration.',
        'Pre-drafted extension or addenda formatting support if repairs are negotiated.',
        'Lender contact logs confirming appraisal order and loan processing milestones.'
      ],
      tag: 'Mid-Contract Clarity'
    },
    {
      stage: 'Financing & Title Clearance',
      homeStage: 'Mastery & Follow-Through',
      agentExperience: 'Continuous Progress Without Chasing',
      whatYouSee: [
        'Loan commitment status alerts before contingency expiration.',
        'HOA/Condo application and approval verification.',
        'Title commitment and municipal lien search follow-up confirmations.',
        'Weekly Friday summary digest keeping you and your client completely in sync.'
      ],
      tag: 'Zero Chasing'
    },
    {
      stage: 'Final Week to Closing Table',
      homeStage: 'Ease & Closing Defense',
      agentExperience: 'Seamless Commission & Full Compliance',
      whatYouSee: [
        'Draft Closing Disclosure / ALTA Settlement Statement reviewed for accurate commission splits.',
        'Broker-approved Commission Disbursement Authorization (CDA/DA) sent directly to closing agent.',
        'Final walkthrough reminder checklist sent to buyer/seller.',
        'All documents uploaded, organized, and approved in your broker portal (Dotloop, SkySlope, Brokermint, etc.).'
      ],
      tag: 'Payday Peace of Mind'
    }
  ];

  const faqs = [
    {
      q: 'How quickly does HTC start working once I submit an executed contract?',
      a: 'We confirm receipt within 30 minutes during standard business hours (Mon–Fri, 8 AM–6 PM EST). Your Critical Date Timeline and introduction rollout are dispatched within 24 business hours of full file intake.'
    },
    {
      q: 'Do you communicate directly with my buyers and sellers?',
      a: 'Yes, as a professional extension of your brand! We introduce ourselves as your transaction coordinator, keep clients updated on key milestones, and handle administrative logistics, while leaving all fiduciary advice, negotiations, and pricing discussions exclusively to you.'
    },
    {
      q: 'What real estate platforms and broker compliance portals do you support?',
      a: 'We operate across all major Florida brokerage systems including SkySlope, Dotloop, Brokermint, Paperless Pipeline, Lone Wolf / Transactions (zipForm), Command (KW), Real (reZEN), eXp Enterprise, and custom brokerage cloud drives.'
    },
    {
      q: 'What happens if a contract cancels during the inspection period?',
      a: 'If a transaction cancels during contingencies and does not close, you are not charged our standard closing fee. We assist in securing the cancellation & escrow release form and archiving the file. We succeed when you succeed.'
    },
    {
      q: 'Can I start using HTC on an existing contract that is already mid-stream?',
      a: 'Yes! We frequently onboard active contracts. We conduct an immediate audit of completed vs. remaining milestones and integrate directly with Title and Lender to guide the file through a smooth closing.'
    }
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO & POSITIONING */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-gradient-to-b from-[#3A2E29] to-[#2B221E] text-white overflow-hidden border-b border-[#0D9BA3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Breadcrumb / Back Link */}
          <div className="flex items-center space-x-3 text-xs font-semibold text-slate-300">
            <button
              onClick={onGoHome}
              className="hover:text-white transition flex items-center space-x-1 cursor-pointer"
            >
              <span>Home</span>
            </button>
            <span className="text-[#0D9BA3]">/</span>
            <span className="text-white font-bold">How HTC Works</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>THE H.O.M.E. CLOSE METHOD™ WORKFLOW</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
              A repeatable path from accepted agreement to completed file.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              See the exact step-by-step process HTC uses to audit contracts, monitor Florida statutory milestones, keep everyone informed, and deliver a defensible broker file.
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

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-medium text-slate-300">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-white">30 Min</div>
              <div className="text-slate-300 font-medium">Business Intake Confirmation</div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-white">24 Hours</div>
              <div className="text-slate-300 font-medium">Timeline & Introduction Rollout</div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#0D9BA3]">100%</div>
              <div className="text-slate-300 font-medium">Florida FAR/BAR Contract Alignment</div>
            </div>
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#FE7311]">$0</div>
              <div className="text-slate-300 font-medium">Paid at Closing Table (Contract)</div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. THE H.O.M.E. CLOSE METHOD™ ORGANIZING SYSTEM */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>THE HTC ORGANIZING SYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              How the H.O.M.E. Close Method™ Structures Every File
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              Every Florida transaction moves through four disciplined stages designed to eliminate surprises, enforce deadlines, and ensure a calm closing.
            </p>
          </div>

          {/* 4-Stage Graphic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stage H */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] relative flex flex-col justify-between hover:border-[#0D9BA3] transition group shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-montserrat font-extrabold text-[#0D9BA3] group-hover:scale-110 transition-transform">
                    H
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-[#D8D2D4]">
                    Stage 1
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-montserrat font-extrabold text-[#3A2E29]">
                    Honor the Agreement
                  </h3>
                  <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                    Review the executed contract, verify party details, and establish the ground rules for compliance and communication.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#D8D2D4] text-[11px] font-bold text-[#0D9BA3] flex items-center space-x-1">
                <span>Intake & Verification</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FE7311]" />
              </div>
            </div>

            {/* Stage O */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] relative flex flex-col justify-between hover:border-[#0D9BA3] transition group shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-montserrat font-extrabold text-[#0D9BA3] group-hover:scale-110 transition-transform">
                    O
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-[#D8D2D4]">
                    Stage 2
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-montserrat font-extrabold text-[#3A2E29]">
                    Organize the File
                  </h3>
                  <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                    Calculate critical Florida dates, build the master timeline, introduce the team, and establish the shared repository.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#D8D2D4] text-[11px] font-bold text-[#0D9BA3] flex items-center space-x-1">
                <span>Timelines & Introductions</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FE7311]" />
              </div>
            </div>

            {/* Stage M */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] relative flex flex-col justify-between hover:border-[#0D9BA3] transition group shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-montserrat font-extrabold text-[#0D9BA3] group-hover:scale-110 transition-transform">
                    M
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-[#D8D2D4]">
                    Stage 3
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-montserrat font-extrabold text-[#3A2E29]">
                    Monitor the Milestones
                  </h3>
                  <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                    Track escrow receipts, inspection windows, appraisal updates, loan commitments, and title municipal searches.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#D8D2D4] text-[11px] font-bold text-[#0D9BA3] flex items-center space-x-1">
                <span>Escrow, Loans & Contingencies</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FE7311]" />
              </div>
            </div>

            {/* Stage E */}
            <div className="bg-[#3A2E29] text-white rounded-2xl p-6 border border-[#0D9BA3]/40 relative flex flex-col justify-between hover:border-[#0D9BA3] transition group shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-montserrat font-extrabold text-[#FE7311] group-hover:scale-110 transition-transform">
                    E
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D9BA3] bg-black/40 px-2.5 py-1 rounded-full border border-[#0D9BA3]/30">
                    Stage 4
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-montserrat font-extrabold text-white">
                    Ease the Close
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    Review draft settlement statements, secure broker CDA approval, coordinate closing packages, and archive the broker file.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-bold text-[#0D9BA3] flex items-center space-x-1">
                <span>CDA & Compliance Archive</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FE7311]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. STEP-BY-STEP PROCESS BREAKDOWN (REQUIRED SECTION ORDER) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Layers className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>THE 5-STEP TRANSACTION ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              How Your File Moves Through HTC
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              Click through each step to see what the agent does, what HTC handles behind the scenes, and the exact deliverables produced.
            </p>
          </div>

          {/* Desktop/Tablet Stepper Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {workflowStages.map((stg, idx) => {
              const Icon = stg.icon;
              const isActive = activeStageTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStageTab(idx)}
                  className={`p-4 rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between space-y-3 ${
                    isActive
                      ? 'bg-[#3A2E29] text-white border-[#0D9BA3] shadow-lg scale-[1.02]'
                      : 'bg-white text-[#3A2E29] border-[#D8D2D4] hover:border-[#0D9BA3]/60'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-[#FE7311] text-white' : 'bg-[#EEEAEB] text-[#3A2E29]'
                      }`}
                    >
                      {stg.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#0D9BA3]' : 'text-slate-400'}`} />
                  </div>
                  <div className="font-montserrat font-extrabold text-xs leading-snug">
                    {stg.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          {(() => {
            const current = workflowStages[activeStageTab];
            const StepIcon = current.icon;
            return (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-xl space-y-8 animate-in fade-in duration-300">
                
                {/* Header of Active Step */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D8D2D4] pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="bg-[#0D9BA3] text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        Step {current.step}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        H.O.M.E. Stage: <strong className="text-[#3A2E29]">{current.homeMethodTitle}</strong>
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                      {current.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#3A2E29]/80 font-medium">
                      {current.subtitle}
                    </p>
                  </div>

                  <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-[#EEEAEB] border border-[#D8D2D4] items-center justify-center flex-shrink-0 text-[#0D9BA3]">
                    <StepIcon className="w-8 h-8 text-[#FE7311]" />
                  </div>
                </div>

                {/* Split: Agent Role vs HTC Execution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Agent Role */}
                  <div className="bg-[#EEEAEB] p-6 rounded-2xl border border-[#D8D2D4] space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#3A2E29]">
                      <span className="w-2 h-2 rounded-full bg-[#FE7311]" />
                      <span>What the Agent Does</span>
                    </div>
                    <p className="text-sm text-[#3A2E29] font-medium leading-relaxed">
                      {current.agentAction}
                    </p>
                  </div>

                  {/* HTC Execution */}
                  <div className="bg-[#3A2E29] text-white p-6 rounded-2xl border border-[#0D9BA3]/40 space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3]">
                      <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
                      <span>What HTC Handles</span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium leading-relaxed">
                      {current.htcAction}
                    </p>
                  </div>

                </div>

                {/* Deliverables List */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Tangible Deliverables & System Outputs at Step {current.step}:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#EEEAEB]/60 border border-[#D8D2D4]/70 text-xs sm:text-sm font-semibold text-[#3A2E29]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Step Switcher */}
                <div className="flex items-center justify-between pt-4 border-t border-[#D8D2D4]">
                  <button
                    disabled={activeStageTab === 0}
                    onClick={() => setActiveStageTab((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-bold text-slate-500 hover:text-[#3A2E29] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    ← Previous Step
                  </button>
                  <div className="text-xs font-bold text-slate-400">
                    Step {activeStageTab + 1} of {workflowStages.length}
                  </div>
                  <button
                    disabled={activeStageTab === workflowStages.length - 1}
                    onClick={() => setActiveStageTab((prev) => Math.min(workflowStages.length - 1, prev + 1))}
                    className="text-xs font-bold text-[#0D9BA3] hover:text-[#0b8288] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center space-x-1"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FE7311]" />
                  </button>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. WHAT THE AGENT SEES AT EACH STAGE (VISIBILITY MATRIX) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Eye className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>TRANSPARENCY & PEACE OF MIND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              What the Agent Sees at Each Stage
            </h2>
            <p className="text-base text-[#3A2E29]/80 font-medium leading-relaxed">
              No black boxes. No wondering if an email was sent. Here is the exact visibility and communication cadence you experience throughout the contract lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibilityStages.map((vis, vIdx) => (
              <div
                key={vIdx}
                className="bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] space-y-6 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0D9BA3] bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                      {vis.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {vis.homeStage}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                      {vis.stage}
                    </h3>
                    <div className="text-xs font-bold text-[#FE7311] uppercase tracking-wider mt-1">
                      {vis.agentExperience}
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {vis.whatYouSee.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#3A2E29]/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#D8D2D4] flex items-center justify-between text-xs font-bold text-[#3A2E29]">
                  <span className="text-slate-500">Documented Communication Trail</span>
                  <span className="text-[#0D9BA3] flex items-center space-x-1">
                    <MessageSquare className="w-4 h-4" />
                    <span>Visible in Real Time</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. FREQUENTLY ASKED PROCESS QUESTIONS */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <ClipboardList className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              How It Works: Questions & Answers
            </h2>
            <p className="text-sm sm:text-base text-[#3A2E29]/80 font-medium">
              Everything you need to know about our onboarding, turnaround times, and contract management flow.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-white rounded-2xl border border-[#D8D2D4] overflow-hidden transition shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
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
      {/* 6. PRIMARY PAGE CTA */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#3A2E29] to-[#241C19] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
            <span>PROTECT THE AGENT · PROTECT THE BROKER · PROTECT THE CLIENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
            Ready to experience a predictable, calm closing flow?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Book a 15-Minute Fit Call to discuss your current volume, walk through our intake system, or submit your next executed file directly.
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
              <span>Submit a Deal</span>
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center space-x-6 text-xs text-slate-400 font-medium">
            <span>Direct Phone: <strong className="text-white">{PHONE_NUMBER}</strong></span>
            <span>·</span>
            <button
              onClick={onExploreServices}
              className="text-[#0D9BA3] hover:underline cursor-pointer"
            >
              View Services & Pricing
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
