import React from 'react';
import {
  User,
  Users,
  Home,
  Languages,
  Building2,
  XCircle,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Zap,
  TrendingUp,
  FileCheck2,
  DollarSign,
  AlertTriangle,
  Scale,
  Sparkles,
  Layers,
  Clock,
  Briefcase
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onGoHome: () => void;
  onOpenPricing: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc: () => void;
  onOpenRoi: () => void;
  onOpenTransactionCoordination: () => void;
  onOpenListingCoordination: () => void;
  onOpenRealtorTc?: () => void;
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

export const WhoWeSupportPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onGoHome,
  onOpenPricing,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenRoi,
  onOpenTransactionCoordination,
  onOpenListingCoordination,
  onOpenRealtorTc,
  onOpenMiamiTc,
  onOpenMiamiDadeTc,
  onOpenBrowardTc,
  onOpenSouthFloridaTc
}) => {
  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO / WHO WE SUPPORT */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Who We Support</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <Users className="w-3.5 h-3.5" />
              <span>CUSTOM-FIT TRANSACTION INFRASTRUCTURE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              Built for Florida Operators Who <br />
              <span className="text-[#0D9BA3]">Value Standards, Speed & Client Trust.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Different real estate models require different operational support — but every successful partnership shares the same demand for rigorous compliance, rapid responsiveness, and calm execution. Discover how Hometown TC fits your exact production model.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenPricing}
                className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide transition shadow-xl hover:shadow-[#FE7311]/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <DollarSign className="w-4 h-4" />
                <span>Find Your Plan</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#0D9BA3]" />
                <span>Schedule a Discovery Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SELECTOR JUMP BAR */}
      <section className="bg-white border-b border-[#D8D2D4] py-4 sticky top-16 z-20 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600">
            <span className="text-[#3A2E29] uppercase tracking-wider font-extrabold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9BA3]" />
              Select Your Profile:
            </span>
            <a href="#solo-agent" className="hover:text-[#0D9BA3] transition">1. Solo Agent</a>
            <a href="#growing-team" className="hover:text-[#0D9BA3] transition">2. Growing Team</a>
            <a href="#listing-heavy" className="hover:text-[#0D9BA3] transition">3. Listing Agent</a>
            <a href="#bilingual-agent" className="hover:text-[#0D9BA3] transition">4. Bilingual Specialist</a>
            <a href="#broker-partner" className="hover:text-[#0D9BA3] transition">5. Broker / Partner</a>
            <a href="#not-a-fit" className="text-[#FE7311] hover:underline">Who Is Not a Fit?</a>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: THE SOLO AGENT */}
      <section id="solo-agent" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>For Solo Real Estate Agents</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Break the Feast-or-Famine Cycle and Reclaim 20–40 Hours Per Deal
            </h2>

            {/* Pain */}
            <div className="p-5 bg-white border border-[#D8D2D4] rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center space-x-2 text-[#FE7311] font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#FE7311]" />
                <span>The Solo Producer's Trap</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                When you put 2 or 3 contracts into escrow, your days instantly vanish into lender follow-ups, escrow receipt chasing, inspection scheduling, and DBPR compliance uploads. Because you’re trapped behind a screen doing paperwork, prospecting stops — guaranteeing a dry income pipeline 60 days later.
              </p>
            </div>

            {/* Proof & Solution */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                The HTC Solo Solution:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                  <span><strong>Zero Payroll Overhead:</strong> No fixed monthly retainers, software licenses, or employee liabilities. You pay strictly $375 per closed file from settlement disbursement.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                  <span><strong>Instant Administrative Leverage:</strong> Hand off the executed contract in 5 minutes. HTC audits the FAR/BAR agreement, establishes the master timeline, and manages escrow lock.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                  <span><strong>Consistent Client Experience:</strong> Your buyers and sellers receive prompt, professional, proactive milestones so you look like a 10-person enterprise.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPricing}
                className="px-6 py-3.5 bg-[#0D9BA3] hover:bg-[#0b868d] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
              >
                View Base Plan ($375)
              </button>
              {onOpenRealtorTc && (
                <button
                  onClick={onOpenRealtorTc}
                  className="px-5 py-3.5 bg-white border border-[#D8D2D4] hover:border-[#0D9BA3] text-[#3A2E29] hover:text-[#0D9BA3] rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm"
                >
                  TC for Realtors® Workflow →
                </button>
              )}
              <button
                onClick={onOpenRoi}
                className="text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition underline cursor-pointer"
              >
                Calculate Time Savings →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-[#D8D2D4]">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Real Solo Transformation</span>
                <h3 className="text-lg font-bold text-[#3A2E29]">Before vs. After HTC</h3>
              </div>
              <span className="px-3 py-1 bg-[#0D9BA3]/10 text-[#0D9BA3] text-xs font-black rounded-full">+2–3 Deals / Qtr</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <strong className="text-slate-500 block uppercase tracking-wider text-[10px]">Without HTC (Trapped in Admin)</strong>
                <p className="text-slate-600 leading-relaxed">
                  Working 65+ hours/week, constantly anxious about missed loan commitment dates, filing broker uploads at 11 PM, and unable to take a real weekend off.
                </p>
              </div>

              <div className="p-4 bg-[#0D9BA3]/5 rounded-xl border border-[#0D9BA3]/20 space-y-1.5">
                <strong className="text-[#0D9BA3] block uppercase tracking-wider text-[10px]">With HTC (Operating with Senior Leverage)</strong>
                <p className="text-slate-800 font-medium leading-relaxed">
                  Every contract audited within 24 hours, master deadline calendar shared with title and lender, full brokerage compliance uploaded before closing, and 100% focus on client relationships.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: THE GROWING SMALL TEAM */}
      <section id="growing-team" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1 bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-[#D8D2D4]">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Team Economics</span>
                <h3 className="text-lg font-bold text-[#3A2E29]">In-House Salary vs. HTC On-Demand</h3>
              </div>
              <span className="px-3 py-1 bg-[#FE7311]/10 text-[#FE7311] text-xs font-black rounded-full">Save $45,000+/yr</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <strong className="text-slate-700 block">In-House Full-Time TC</strong>
                <ul className="space-y-1.5 text-slate-500">
                  <li>• $55,000–$75,000 salary</li>
                  <li>• Payroll taxes & benefits</li>
                  <li>• Paid during slow winter months</li>
                  <li>• Turnover & retraining risk</li>
                </ul>
              </div>

              <div className="p-4 bg-[#FE7311]/5 rounded-xl border border-[#FE7311]/20 space-y-2">
                <strong className="text-[#FE7311] block">HTC Team Infrastructure</strong>
                <ul className="space-y-1.5 text-slate-700 font-medium">
                  <li>• 100% Variable cost per deal</li>
                  <li>• $0 Fixed overhead liability</li>
                  <li>• 30+ Years Florida expertise</li>
                  <li>• Scale up/down seamlessly</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>For Growing Teams (3–10 Agents)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Scale Team Deal Volume Without Bloating Fixed Payroll
            </h2>

            {/* Pain */}
            <div className="p-5 bg-white border border-[#D8D2D4] rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center space-x-2 text-[#FE7311] font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#FE7311]" />
                <span>The Team Leader's Bottleneck</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                As your team scales past 30–50 transactions/year, junior agents submit sloppy contracts with missing riders, forget escrow verification, and neglect portal compliance. Team leaders end up babysitting paperwork instead of coaching agents and recruiting top talent.
              </p>
            </div>

            {/* Proof & Solution */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">
                The HTC Team Framework:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                  <span><strong>Standardized Team Playbook:</strong> We implement identical, high-standard checklists across all team members, regardless of who writes the contract.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                  <span><strong>Portal Integrity:</strong> Automated packaging and upload to KW Command, SkySlope, Brokermint, or Dotloop for instantaneous commission approval.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                  <span><strong>Brand Protection:</strong> Professional, branded communication so your team’s reputation shines across every title company and lender in Florida.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookCall}
                className="px-6 py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
              >
                Discuss Team Volume Workflow
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: THE LISTING-HEAVY AGENT */}
      <section id="listing-heavy" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#3A2E29]/10 text-[#3A2E29] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Home className="w-3.5 h-3.5 text-[#0D9BA3]" />
              <span>For Listing Specialists & Sellers' Agents</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Turnkey Pre-Market Listing Launches from Disclosure to MLS Draft
            </h2>

            {/* Pain */}
            <div className="p-5 bg-white border border-[#D8D2D4] rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center space-x-2 text-[#FE7311] font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#FE7311]" />
                <span>The 8-Hour Pre-Listing Time Drain</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Winning the listing is only half the battle. Pre-market setup takes 6–10 hours: chasing signed Florida Seller Property Disclosures (SPDS), Lead-Based Paint forms, HOA documents, typing 50+ granular property dimensions into MLS Matrix, sorting photos, and setting ShowingTime rules.
              </p>
            </div>

            {/* Proof & Solution */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3A2E29]">
                The HTC Pro Listing Protocol ($475):
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                  <span><strong>Turnkey Disclosure Dispatch:</strong> SPDS, Lead-Based Paint, HOA Addenda sent via DocuSign/Dotloop for prompt seller execution.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                  <span><strong>Flawless MLS Matrix Draft:</strong> 50+ property specs, tax ID verification, room dimensions, high-res photo ordering, and PDF supplement attachments.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                  <span><strong>Automatic Contract Bridge:</strong> As soon as an offer is executed, your listing instantly rolls over into full contract-to-close with zero delay.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenListingCoordination}
                className="px-6 py-3.5 bg-[#3A2E29] hover:bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
              >
                Explore Listing Coordination
              </button>
              <button
                onClick={onOpenPricing}
                className="text-xs font-bold text-[#0D9BA3] hover:text-[#3A2E29] transition underline cursor-pointer"
              >
                View Pro Plan Details →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-4">
            <h3 className="font-bold text-base text-[#3A2E29] pb-3 border-b border-[#D8D2D4]">
              What HTC Handles vs. What the Listing Agent Retains
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <span className="font-bold text-[#0D9BA3] uppercase tracking-wider block text-[11px]">
                  HTC Pre-Market Launch:
                </span>
                <ul className="space-y-1.5 text-slate-600">
                  <li>✓ Seller Disclosure Dispatch</li>
                  <li>✓ HOA / Condo Estoppel Prep</li>
                  <li>✓ Public Records Tax Audit</li>
                  <li>✓ 50+ Field MLS Matrix Entry</li>
                  <li>✓ Photo Upload & Sequencing</li>
                  <li>✓ ShowingTime & Lockbox Setup</li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-[#FE7311] uppercase tracking-wider block text-[11px]">
                  Agent Retains:
                </span>
                <ul className="space-y-1.5 text-slate-500">
                  <li>• CMA & Pricing Strategy</li>
                  <li>• Hiring Preferred Photographer</li>
                  <li>• In-Person Property Staging</li>
                  <li>• Reviewing Draft & Clicking "Active"</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: THE BILINGUAL SOUTH FLORIDA AGENT */}
      <section id="bilingual-agent" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1 bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-[#D8D2D4]">
              <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3A2E29]">South Florida Cultural Expertise</h3>
                <span className="text-xs text-slate-500">Miami-Dade • Broward • Palm Beach</span>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                <strong className="text-[#3A2E29] block mb-1">Bilingual Client Communication:</strong>
                <span>Fluent English and Spanish communication ensures Latin American buyers and foreign sellers understand inspection timeframes and wiring instructions clearly.</span>
              </div>
              <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                <strong className="text-[#3A2E29] block mb-1">FIRPTA & International Withholding:</strong>
                <span>Coordination with specialized title attorneys and CPAs to ensure Foreign Investment in Real Property Tax Act withholding packets are executed smoothly.</span>
              </div>
              <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                <strong className="text-[#3A2E29] block mb-1">Condo Association Diligence:</strong>
                <span>Navigating complex South Florida condo boards, milestone building inspections (SB 4-D / SB 154), and estoppel certificates.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Languages className="w-3.5 h-3.5" />
              <span>For Bilingual & International Agents</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Fluent Florida Execution for International and Spanish-Speaking Deals
            </h2>

            {/* Pain */}
            <div className="p-5 bg-white border border-[#D8D2D4] rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center space-x-2 text-[#FE7311] font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#FE7311]" />
                <span>The Cross-Border Coordination Gap</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                South Florida transactions frequently involve Spanish-dominant buyers, non-resident foreign investors, and international wiring logistics. Generic nationwide TC platforms lack the cultural nuance and specialized tax understanding required to guide these files without friction.
              </p>
            </div>

            {/* Proof & Solution */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                The HTC Bilingual Advantage:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                  <span><strong>Native Spanish & English Fluency:</strong> Respectful, clear communication with your clients, cross-agent partners, and title processors.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                  <span><strong>South Florida Market Acumen:</strong> Decades of experience in Miami-Dade, Broward, Palm Beach, and Treasure Coast condominium and luxury corridors.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookCall}
                className="px-6 py-3.5 bg-[#0D9BA3] hover:bg-[#0b868d] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
              >
                Connect With Michelle (Hablamos Español)
              </button>
              {onOpenMiamiTc && (
                <button
                  onClick={onOpenMiamiTc}
                  className="text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition underline cursor-pointer"
                >
                  City of Miami TC →
                </button>
              )}
              {onOpenMiamiDadeTc && (
                <button
                  onClick={onOpenMiamiDadeTc}
                  className="text-xs font-bold text-[#FE7311] hover:text-[#d45e0c] transition underline cursor-pointer"
                >
                  Miami-Dade County TC →
                </button>
              )}
              {onOpenBrowardTc && (
                <button
                  onClick={onOpenBrowardTc}
                  className="text-xs font-bold text-[#0D9BA3] hover:text-[#0b8288] transition underline cursor-pointer"
                >
                  Broward County TC →
                </button>
              )}
              {onOpenSouthFloridaTc && (
                <button
                  onClick={onOpenSouthFloridaTc}
                  className="text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition underline cursor-pointer"
                >
                  South Florida Regional TC →
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION 5: BROKERAGES & STRATEGIC PARTNERS */}
      <section id="broker-partner" className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>For Managing Brokers, Title Officers & Lenders</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Institutional Risk Mitigation & Clean Auditable Files for Brokers
            </h2>

            {/* Pain */}
            <div className="p-5 bg-white border border-[#D8D2D4] rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center space-x-2 text-[#FE7311] font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-[#FE7311]" />
                <span>The Managing Broker's Liability</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                DBPR license audits, escrow disputes, and incomplete brokerage files keep managing brokers up at night. Title companies waste dozens of hours chasing missing commission disbursement authorizations (CDAs) and unexecuted riders on closing day.
              </p>
            </div>

            {/* Proof & Solution */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">
                How HTC Safeguards Brokerages & Title Partners:
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                  <span><strong>100% DBPR Compliance:</strong> Every required Florida disclosure, HOA rider, and addendum is indexed, fully initialed, and archived.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                  <span><strong>Title & Settlement Harmony:</strong> Early delivery of CDA, title search follow-ups, and settlement statement (CD) verification prevent closing table delays.</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FE7311] mt-0.5 flex-shrink-0" />
                  <span><strong>Preferred Partner Alignment:</strong> We collaborate smoothly with your preferred title companies, escrow officers, and mortgage loan originators.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookCall}
                className="px-6 py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
              >
                Discuss Brokerage / Title Partnership
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-[#D8D2D4]">
              <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3A2E29]">Broker Audit Protection</h3>
                <span className="text-xs text-slate-500">Airtight records from Day 1 to Archive</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#EEEAEB] rounded-xl space-y-1">
                <strong className="text-[#3A2E29] block">Zero Missing Initials</strong>
                <p className="text-slate-600">Every FAR/BAR line audit verifies complete signatures before filing.</p>
              </div>
              <div className="p-4 bg-[#EEEAEB] rounded-xl space-y-1">
                <strong className="text-[#3A2E29] block">Timely CDA Delivery</strong>
                <p className="text-slate-600">Commission authorizations sent to title 48+ hours before closing.</p>
              </div>
              <div className="p-4 bg-[#EEEAEB] rounded-xl space-y-1">
                <strong className="text-[#3A2E29] block">Escrow Verification</strong>
                <p className="text-slate-600">Written binder deposit receipts logged immediately upon receipt.</p>
              </div>
              <div className="p-4 bg-[#EEEAEB] rounded-xl space-y-1">
                <strong className="text-[#3A2E29] block">Complete Vault</strong>
                <p className="text-slate-600">Full audit-ready zip archive uploaded to your broker software.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SECTION 6: WHO IS NOT A FIT */}
      <section id="not-a-fit" className="py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#3A2E29]/10 text-[#3A2E29] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <XCircle className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>Radical Transparency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              Who Is NOT a Fit for Hometown TC?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We protect our high standard of care by partnering exclusively with professional agents who value integrity, compliance, and proactive communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-[#EEEAEB] border border-[#D8D2D4] rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-[#3A2E29] font-bold text-sm">
                <XCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                <span>Bargain Shoppers Seeking Cheap "Data Entry"</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you are looking for a cut-rate $150 virtual assistant who blindly moves files without reading clauses or auditing FAR/BAR riders, HTC is not the right match. We are senior risk managers, not passive data entry workers.
              </p>
            </div>

            <div className="p-6 bg-[#EEEAEB] border border-[#D8D2D4] rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-[#3A2E29] font-bold text-sm">
                <XCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                <span>Agents Expecting Legal or Repair Negotiations</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly honor Florida licensing boundaries. HTC tracks inspection contingency deadlines and prepares addenda at your direction, but the agent retains all direct client negotiations and fiduciary advisory.
              </p>
            </div>

            <div className="p-6 bg-[#EEEAEB] border border-[#D8D2D4] rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-[#3A2E29] font-bold text-sm">
                <XCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                <span>Operating Without Executed Written Agreements</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We coordinate legitimate, fully executed Florida real estate transactions. We do not manage speculative verbal offers or unexecuted draft contracts without defined broker compliance.
              </p>
            </div>

            <div className="p-6 bg-[#EEEAEB] border border-[#D8D2D4] rounded-2xl space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-[#3A2E29] font-bold text-sm">
                <XCircle className="w-4 h-4 text-[#FE7311] flex-shrink-0" />
                <span>Unresponsive Communicators</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-stakes Florida deadlines require mutual responsiveness. When critical milestones arise (such as appraisal conditions or repair limits), we require timely confirmation from our partner agents.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SECTION 7: PRIMARY CTA */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FE7311]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started with HTC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
              Ready to elevate your real estate operations?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Choose the exact support level tailored to your business model. No subscription lock-in, no file quotas, and paid at settlement.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl hover:shadow-[#FE7311]/25 cursor-pointer"
              >
                Find Your Plan ($375 / $475)
              </button>
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                Schedule a 15-Min Discovery Call
              </button>
              <button
                onClick={onSubmitDeal}
                className="w-full sm:w-auto px-7 py-4 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md"
              >
                Submit a Transaction File
              </button>
            </div>

            <p className="text-xs text-slate-400 pt-4">
              Have questions? Call Michelle directly at <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
