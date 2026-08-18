import React from 'react';
import {
  MapPin,
  Building2,
  Users,
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
  Compass,
  Star,
  Zap,
  Briefcase,
  Layers,
  FileSearch,
  FolderCheck,
  AlertCircle
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
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

export const BrowardTransactionCoordinatorPage: React.FC<Props> = ({
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
  onOpenSouthFloridaTc
}) => {
  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO & BROWARD COUNTY HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Broward County Transaction Coordinator</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <MapPin className="w-3.5 h-3.5" />
              <span>BROWARD COUNTY CONTRACT-TO-CLOSE EXPERTISE • (954) AREA ROOTS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              Broward County <br />
              <span className="text-[#0D9BA3]">Transaction Coordinator</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Structured contract-to-close coordination, rigorous association follow-up, clear milestone tracking, and broker-ready compliance built for Broward top producers, solo agents, and growing teams.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide transition shadow-xl hover:shadow-[#FE7311]/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Broward Fit Call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={onSubmitDeal}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
              >
                <FileCheck2 className="w-4 h-4 text-[#0D9BA3]" />
                <span>Submit a Broward Deal ($375)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BROWARD ANSWER BLOCK (SEO / AEO OPTIMIZATION) */}
      <section className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Broward Real Estate Operations & Answer Block</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            What Is a Broward County Transaction Coordinator?
          </h2>

          <div className="p-6 sm:p-8 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-[#3A2E29] text-base">
              A Broward County transaction coordinator is a dedicated administrative professional who manages real estate transactions from executed contract through funding, commission disbursement, and brokerage compliance across Broward County, Florida.
            </p>
            <p>
              In Broward County’s dynamic market, transaction coordination requires deep familiarity with <strong>Broward title and closing customs</strong> (where buyers traditionally select closing agents and pay title insurance on FAR/BAR Standard contracts), <strong>rigorous HOA and condominium estoppel tracking</strong> across gated communities and coastal towers, strict adherence to <strong>municipal unrecorded lien and permit verification protocols</strong> across Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Weston, and surrounding cities, and direct management of <strong>brokerage compliance systems</strong> (SkySlope, Command, Dotloop, Brokermint, and Paperless Pipeline).
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-[#3A2E29]">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ All Broward Municipalities & Enclaves</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ $375 Contract Base • $475 Pro</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Paid at Closing Table • Zero Retainer</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ 30+ Years South Florida Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SMALL-TEAM AND SOLO-AGENT CONTEXT */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Tailored for Broward Agents & Small Teams</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Reclaim 12–18 Hours per File Without Fixed Payroll Overhead
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are a solo agent closing 12–24 units annually or a boutique team scaling to 50+ deals across Broward, managing contract admin in-house drains your highest-value prospecting time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Solo Agent Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3A2E29]">For Broward Solo Producers</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Solo agents in Broward frequently get trapped in "the transaction roller-coaster": when deals close, prospecting stops because paperwork, lender calls, and inspection chasing consume the week.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                    <span><strong>Consistent Client Communication:</strong> Your buyers and sellers receive structured milestone updates without you typing emails at 10 PM.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                    <span><strong>No Fixed Salary or Benefits:</strong> Pay strictly per closed file. If you have a quiet month, your administrative overhead is $0.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                    <span><strong>Protect Critical Deadlines:</strong> Escrow deposits, loan applications, inspection cure periods, and title commitments tracked without error.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4]">
                <button
                  onClick={onBookCall}
                  className="text-xs font-bold text-[#0D9BA3] hover:text-[#0b8288] inline-flex items-center space-x-1.5 group cursor-pointer"
                >
                  <span>Discuss Solo Agent Workflow</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </button>
              </div>
            </div>

            {/* Small Team Card */}
            <div className="bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3A2E29]">For Broward Small Teams & Rainmakers</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  As team volume grows across Fort Lauderdale, Plantation, Weston, and Parkland, managing multiple buyer agents and listing pipelines creates compliance drift and missed closing dates.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                    <span><strong>Standardized Team Operating Standard:</strong> Every agent on your team follows the exact same intake, tracking, and compliance pipeline.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                    <span><strong>Instant Scalability:</strong> Handle 15 closings in spring and 5 in fall without hiring, training, or managing internal TC staff.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                    <span><strong>Commission Disbursement (CDA) Precision:</strong> Clean commission splits, broker fee deductions, and closing statements audited prior to settlement.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4]">
                <button
                  onClick={onBookCall}
                  className="text-xs font-bold text-[#FE7311] hover:text-[#d45e0c] inline-flex items-center space-x-1.5 group cursor-pointer"
                >
                  <span>Discuss Team Onboarding</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. ASSOCIATION & CLOSING-PARTY COORDINATION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Stakeholder Synchronization</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Association, Title & Lender Follow-Up Across Broward
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A transaction coordinator is only as good as their follow-up discipline. We actively manage every external party to eliminate last-minute closing delays.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Box 1: Broward HOA & Condo Management */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-bold shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">HOA & Condo Estoppels</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                From luxury beach condos in Fort Lauderdale & Pompano Beach to extensive master associations in Weston, Parkland, and Pembroke Pines, we order, track, and verify association estoppels, buyer approval packages, and building certifications early in the timeline.
              </p>
            </div>

            {/* Box 2: Title & Settlement Companies */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#FE7311] flex items-center justify-center font-bold shadow-sm">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Broward Title Partnerships</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                We work harmoniously with Broward closing attorneys and title agencies. We monitor title commitment delivery, municipal lien search results, survey orders, and settlement statement (ALTA/CD) reconciliations to ensure zero closing table friction.
              </p>
            </div>

            {/* Box 3: Lender & Brokerage Compliance */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#3A2E29] flex items-center justify-center font-bold shadow-sm">
                <FolderCheck className="w-6 h-6 text-[#0D9BA3]" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Lender & Broker Compliance</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                We audit loan commitment dates, appraisal contingency timelines, and insurance binders. Simultaneously, we upload fully executed disclosures, addenda, and commission agreements directly into your brokerage compliance portal.
              </p>
            </div>

          </div>

          {/* Active Broward Communities Breakdown */}
          <div className="p-6 sm:p-8 bg-[#3A2E29] text-white rounded-2xl border border-white/10 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#FE7311]" />
              <span>Actively Served Broward Markets & Communities</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We coordinate transactions throughout Fort Lauderdale (Las Olas, Coral Ridge, Victoria Park), Hollywood, Pembroke Pines, Coral Springs, Weston, Plantation, Davie, Pompano Beach, Parkland, Sunrise, Deerfield Beach, Coconut Creek, and Miramar.
            </p>
          </div>

        </div>
      </section>

      {/* 5. RELEVANT PROOF & LEADERSHIP */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5" />
              <span>Broward Market Reputation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              30+ Years of South Florida Real Estate Experience
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              Hometown TC is founded by Michelle Martinez, a lifelong South Florida resident with more than three decades of direct contract-to-close, title, and brokerage operations leadership.
            </p>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">Local Phone & Quick Responsiveness:</strong>
                <span>Direct reach via our local (954) Broward line. Questions, urgent addenda, or lender updates are handled quickly and professionally.</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">Bilingual English & Spanish Communication:</strong>
                <span>Over 35% of Broward transactions involve bilingual or Spanish-speaking parties. We keep all parties aligned in their preferred language.</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">audit-ready</strong>
                <span>Every required Florida DBPR disclosure, energy efficiency brochure, lead-based paint form, and wire fraud advisory verified before closing.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6">
              
              <div className="flex items-center space-x-1 text-[#FE7311]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-sm sm:text-base text-[#3A2E29] italic font-serif leading-relaxed">
                "Michelle and Hometown TC have been my secret weapon in Broward. When we have 6 deals pending across Fort Lauderdale and Weston, having a seasoned coordinator who knows every condo board rule and title contact keeps my sanity intact. My clients feel cared for and our closings happen right on schedule."
              </blockquote>

              <div className="flex items-center space-x-4 pt-4 border-t border-[#D8D2D4]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                  alt="Rachel Campbell - Broward Real Estate Agent"
                  className="w-12 h-12 rounded-full object-cover border border-[#D8D2D4]"
                />
                <div>
                  <strong className="block text-sm font-bold text-[#3A2E29]">Rachel Campbell</strong>
                  <span className="text-xs text-slate-500">Top Producer • Fort Lauderdale & East Broward</span>
                </div>
              </div>

            </div>

            {/* Meet Michelle Mini Card */}
            <div className="bg-[#3A2E29] text-white p-6 rounded-2xl border border-white/10 flex items-center space-x-4">
              <img
                src={MEET_MICHELLE_IMAGE}
                alt="Michelle Martinez"
                className="w-14 h-14 rounded-xl object-cover border border-[#D8D2D4]/20 flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-0.5">
                <span className="text-xs text-[#0D9BA3] font-bold uppercase tracking-wider">Your Broward Coordinator</span>
                <h4 className="text-sm font-bold text-white">Michelle Martinez • (954) 377-8330</h4>
                <p className="text-[11px] text-slate-300">Ready to take files off your plate today.</p>
              </div>
            </div>

          </div>

          {/* Cross-links to sister pages */}
          <div className="text-center pt-4 flex flex-wrap items-center justify-center gap-y-3 gap-x-4 text-xs text-slate-500">
            {onOpenMiamiDadeTc && (
              <div className="flex-shrink-0">
                Operating across Miami-Dade?{' '}
                <button
                  onClick={onOpenMiamiDadeTc}
                  className="text-[#FE7311] font-bold hover:underline cursor-pointer"
                >
                  Miami-Dade County TC →
                </button>
              </div>
            )}
            {onOpenMiamiDadeTc && onOpenMiamiTc && <span className="hidden sm:inline-block text-slate-300">•</span>}
            {onOpenMiamiTc && (
              <div className="flex-shrink-0">
                Downtown Miami Condos?{' '}
                <button
                  onClick={onOpenMiamiTc}
                  className="text-[#0D9BA3] font-bold hover:underline cursor-pointer"
                >
                  City of Miami TC →
                </button>
              </div>
            )}
            {onOpenSouthFloridaTc && <span className="hidden sm:inline-block text-slate-300">•</span>}
            {onOpenSouthFloridaTc && (
              <div className="flex-shrink-0">
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

      {/* 6. CTA & NEXT STEPS */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FE7311]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Seamless Contract-to-Close Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
              Ready to Upgrade Your Broward Transaction Operations?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Schedule a 15-minute fit call to discuss your file intake process, brokerage requirements, and how we can support your upcoming deals.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl hover:shadow-[#FE7311]/25 cursor-pointer"
              >
                Book a Broward Fit Call
              </button>
              <button
                onClick={onSubmitDeal}
                className="w-full sm:w-auto px-7 py-4 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md"
              >
                Submit a Broward Deal
              </button>
              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                View Plans ($375 / $475)
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
