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
  Globe,
  Landmark,
  FileSearch,
  CheckSquare,
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
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

export const MiamiDadeTransactionCoordinatorPage: React.FC<Props> = ({
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
  onOpenBrowardTc,
  onOpenSouthFloridaTc
}) => {
  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO & COUNTY LOCATION HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Miami-Dade Transaction Coordinator</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <Landmark className="w-3.5 h-3.5" />
              <span>COUNTY-WIDE TRANSACTION COORDINATION • 34 MUNICIPALITIES</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              Miami-Dade County <br />
              <span className="text-[#0D9BA3]">Transaction Coordinator</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Navigating Miami-Dade’s 34 distinct municipalities, countywide environmental regulations, diverse title customs, and high-volume association workflows requires seasoned, regional contract-to-close expertise.
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
                onClick={onSubmitDeal}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
              >
                <FileCheck2 className="w-4 h-4 text-[#0D9BA3]" />
                <span>Submit a Miami-Dade File ($375)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COUNTY-LEVEL DIRECT ANSWER BLOCK (SEO / AEO OPTIMIZATION) */}
      <section className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>County-Level Authority for Florida Brokers & Agents</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            What Is a Miami-Dade Transaction Coordinator?
          </h2>

          <div className="p-6 sm:p-8 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-[#3A2E29] text-base">
              A Miami-Dade transaction coordinator manages the comprehensive contract-to-close operational lifecycle for real estate transactions spanning all 34 incorporated municipalities and unincorporated communities throughout Miami-Dade County.
            </p>
            <p>
              Unlike generic statewide or national transaction services, a true Miami-Dade TC brings county-specific operational depth: understanding <strong>Miami-Dade regional title closing cost customs</strong> (where buyers traditionally select title and pay title insurance on FAR/BAR Standard files), handling <strong>Miami-Dade Water & Sewer Department (WASD)</strong> / DERM transfer verifications, coordinating <strong>municipal unrecorded lien and open permit searches</strong> across varying city building departments, facilitating <strong>FIRPTA foreign seller tax withholdings</strong>, managing <strong>Florida condominium and master association estoppels</strong>, and conducting <strong>fluent bilingual English/Spanish client milestone communication</strong>.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-[#3A2E29]">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ All 34 Municipalities & Unincorporated</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Flat $375 / $475 Fee</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ No Retainer • Paid at Closing</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Native English & Spanish Fluency</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE AREA EXAMPLES WITHOUT KEYWORD STUFFING */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Regional Coverage & Submarket Depth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Executing Across Miami-Dade’s Diverse Property Corridors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every submarket across the county operates under different municipal rules, property types, and resident profiles. We adapt our coordination workflows to match each specific pocket.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Area 1: North County & Condominium Strips */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Aventura, Sunny Isles & Bal Harbour</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-rise luxury oceanfront corridors with mandatory building milestone inspections, foreign investor wire protocols, multi-tier condo associations, and private dock/slip verifications.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#0D9BA3]">
                Workflow: Luxury Condos, Estoppels & SIRS Audits
              </div>
            </div>

            {/* Area 2: West County & Commercial Hubs */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Doral, Hialeah & Miami Lakes</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-transaction suburban single-family and townhouse communities with strong Hispanic buyer demographics, master master association rules, and tight financing turnarounds.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#FE7311]">
                Workflow: Bilingual Buyer Milestone Tracking & CDAs
              </div>
            </div>

            {/* Area 3: Central Historic & Coastal */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
                  <Landmark className="w-5 h-5 text-[#0D9BA3]" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Coral Gables, Coconut Grove & Miami Beach</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Historic residential enclaves requiring strict municipal permit histories, board of architectural review records, coastal flood certifications, and strict escrow deadlines.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#3A2E29]">
                Workflow: Municipal Lien Searches & Code Clearances
              </div>
            </div>

            {/* Area 4: South Suburbs & Acreage */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Pinecrest, Palmetto Bay & Kendall</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Established single-family estates, public and private school district relocations, private septic-to-sewer transition disclosures, and complex property survey boundary reconciliations.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#0D9BA3]">
                Workflow: Boundary Surveys, Septic & Flood Disclosures
              </div>
            </div>

            {/* Area 5: Agricultural & Growing Corridors */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Homestead, Florida City & Redland</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast-growing new construction subdivisions and agricultural acreage, agricultural zoning tax classifications, builder warranties, and FHA/VA financing inspection requirements.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#FE7311]">
                Workflow: New Construction Addenda & FHA/VA Appraisals
              </div>
            </div>

            {/* Area 6: Unincorporated Miami-Dade County */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
                  <FileSearch className="w-5 h-5 text-[#FE7311]" />
                </div>
                <h3 className="font-bold text-lg text-[#3A2E29]">Unincorporated Miami-Dade (UMSA)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Spanning nearly 1.2 million residents governed directly by county departments, requiring direct navigation of Miami-Dade County Regulatory & Economic Resources (RER) for open permits.
                </p>
              </div>
              <div className="pt-3 border-t border-[#D8D2D4] text-[11px] font-semibold text-[#3A2E29]">
                Workflow: Miami-Dade RER & Countywide Property Appraiser
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. REGIONAL TITLE, ASSOCIATION & DOCUMENTATION CONTEXT */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Regional Technical Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Mastering Miami-Dade Title Customs & Local Regulations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real estate protocols in Miami-Dade differ notably from Central and North Florida. Here is how Hometown TC protects your transactions at every step:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Box 1: Title Customs & Closing Splits */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-bold shadow-sm">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Miami-Dade Title Customs</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                In Miami-Dade and Broward, the FAR/BAR Paragraph 9(c) custom is that the <strong>Buyer designates the closing agent and pays for the Owner’s Title Policy</strong>, whereas in other Florida counties, the Seller often pays. We verify exact box selections and custom attorney riders immediately upon contract ingestion.
              </p>
            </div>

            {/* Box 2: Environmental & Water Regulations */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#FE7311] flex items-center justify-center font-bold shadow-sm">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">WASD & Environmental Transfers</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Miami-Dade Water and Sewer Department (WASD) and Division of Environmental Resources Management (DERM) enforce strict sewer/well connection disclosures and final meter read procedures. We ensure final utility clearances do not delay closing day disbursements.
              </p>
            </div>

            {/* Box 3: Association Documents & SB 4-D */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#3A2E29] flex items-center justify-center font-bold shadow-sm">
                <Building2 className="w-6 h-6 text-[#0D9BA3]" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Condo & Master Estoppel Audits</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                With thousands of active condominium and HOA associations across the county, estoppel delays are the #1 cause of postponed closings. We track application submittals, interview dates, and structural integrity reserve study documents from day one.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BILINGUAL SUPPORT & MULTI-CULTURAL OPERATIONS */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Languages className="w-3.5 h-3.5" />
              <span>Native Bilingual Fluency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Bilingual Contract-to-Close Support in English and Spanish
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              Miami-Dade County is a multicultural, international gateway. Over 68% of local real estate transactions involve Spanish-speaking buyers, sellers, lenders, or foreign nationals.
            </p>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">Clear Client Explanations in Spanish:</strong>
                <span>We communicate escrow deposit instructions, inspection timelines, and closing day instructions in native Spanish, ensuring clients understand requirements without anxiety.</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">FIRPTA & International Investor Alignment:</strong>
                <span>We work closely with South Florida closing attorneys to facilitate foreign seller withholding forms (1042-S / 8288), passport verifications, and cross-border bank wire verifications.</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">Seamless Cross-Brokerage Collaboration:</strong>
                <span>We comfortably interface with Spanish-dominant cooperating agents and title processors across Miami-Dade and Broward County.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center space-x-4">
                <img
                  src={MEET_MICHELLE_IMAGE}
                  alt="Michelle Martinez - South Florida Transaction Coordinator"
                  className="w-20 h-20 rounded-2xl object-cover border border-[#D8D2D4]/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Michelle Martinez</h3>
                  <p className="text-xs text-[#0D9BA3] font-bold">Founder & Lead Coordinator</p>
                  <span className="text-xs text-slate-300">South Florida Born & Raised • 30+ Years FL Real Estate</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic font-serif">
                "Real estate in Miami-Dade County is fast, multilingual, and highly nuanced. Whether you're closing a townhouse in Doral, a luxury condo in Sunny Isles, or acreage in Homestead, our job is to protect your time, keep your clients calm, and guarantee 100% brokerage compliance."
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Pricing Structure:</span>
                  <strong className="text-white text-sm">$375 Flat / $475 Pro</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Payment Terms:</span>
                  <strong className="text-[#0D9BA3] text-sm">Paid at Closing Table</strong>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onBookCall}
                  className="w-full py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
                >
                  Schedule a Miami-Dade Call
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PROOF & TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1 text-[#FE7311]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
              Trusted by Top Miami-Dade Agents & Teams
            </h2>
          </div>

          <div className="bg-[#EEEAEB] p-8 sm:p-10 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-6 relative">
            <p className="text-base sm:text-lg text-[#3A2E29] italic font-serif leading-relaxed">
              "Managing transactions across multiple Miami-Dade cities used to give me headaches — dealing with different city permit portals, bilingual buyers, and strict condo boards. Hometown TC stepped in and completely organized our backend. Our files are always compliant and our clients rave about the communication."
            </p>

            <div className="flex items-center space-x-4 pt-4 border-t border-[#D8D2D4]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                alt="Carlos Mendoza - Miami-Dade Team Leader"
                className="w-12 h-12 rounded-full object-cover border border-[#D8D2D4]"
              />
              <div>
                <strong className="block text-sm font-bold text-[#3A2E29]">Carlos Mendoza</strong>
                <span className="text-xs text-slate-500">Managing Broker & Team Leader • Miami-Dade & Coral Gables</span>
              </div>
            </div>
          </div>

          {/* Quick links to sister pages */}
          <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
            {onOpenMiamiTc && (
              <div>
                Focusing on downtown condo towers?{' '}
                <button
                  onClick={onOpenMiamiTc}
                  className="text-[#0D9BA3] font-bold hover:underline cursor-pointer"
                >
                  City of Miami TC →
                </button>
              </div>
            )}
            {onOpenMiamiTc && onOpenBrowardTc && <span>•</span>}
            {onOpenBrowardTc && (
              <div>
                Operating in Broward?{' '}
                <button
                  onClick={onOpenBrowardTc}
                  className="text-[#FE7311] font-bold hover:underline cursor-pointer"
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
              <span>Full County Coverage • 34 Municipalities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
              Scale Your Miami-Dade Real Estate Business
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Partner with Hometown TC for stress-free contract-to-close management across Miami-Dade County. No monthly overhead, no retainers — just senior coordination paid at settlement.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl hover:shadow-[#FE7311]/25 cursor-pointer"
              >
                Book a Discovery Call
              </button>
              <button
                onClick={onSubmitDeal}
                className="w-full sm:w-auto px-7 py-4 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md"
              >
                Submit a Miami-Dade Deal
              </button>
              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                View Plans ($375 / $475)
              </button>
            </div>

            <p className="text-xs text-slate-400 pt-4">
              Questions? Call Michelle Martinez directly at <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
