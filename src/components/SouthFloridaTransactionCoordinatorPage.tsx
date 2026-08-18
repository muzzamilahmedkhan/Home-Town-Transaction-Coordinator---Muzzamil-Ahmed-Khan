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
  Compass,
  Star,
  Zap,
  Globe,
  Layers,
  FileSearch,
  CheckSquare,
  Users
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
  onOpenBrowardTc?: () => void;
}

export const SouthFloridaTransactionCoordinatorPage: React.FC<Props> = ({
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
  onOpenBrowardTc
}) => {
  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO & REGIONAL HUB HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">South Florida Transaction Coordinator</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <Globe className="w-3.5 h-3.5" />
              <span>SOUTH FLORIDA REGIONAL HUB • FLORIDA-WIDE OPERATING CAPABILITY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              South Florida <br />
              <span className="text-[#0D9BA3]">Transaction Coordinator</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Founded in South Florida with over 30 years of localized title and contract experience. HTC delivers structured contract-to-close operations across the tri-county region and statewide Florida.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide transition shadow-xl hover:shadow-[#FE7311]/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Fit Call</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={onSubmitDeal}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
              >
                <FileCheck2 className="w-4 h-4 text-[#0D9BA3]" />
                <span>Submit a South Florida Deal ($375)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL ANSWER BLOCK (SEO / AEO OPTIMIZATION) */}
      <section className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Regional Authority & Operational Definition</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            What Is a South Florida Transaction Coordinator?
          </h2>

          <div className="p-6 sm:p-8 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-semibold text-[#3A2E29] text-base">
              A South Florida transaction coordinator manages the comprehensive contract-to-close pipeline for residential and commercial real estate transactions across Miami-Dade, Broward, and Palm Beach counties, bridging regional closing customs with statewide Florida compliance.
            </p>
            <p>
              South Florida represents one of the most complex, high-velocity real estate ecosystems in the United States. A regional TC navigates the distinct <strong>Miami-Dade/Broward regional title closing customs</strong> (where buyers traditionally pay for title insurance under FAR/BAR Section 9(c)), enforces <strong>strict association approval and estoppel timelines</strong> under Florida SB 4-D / SB 154, tracks <strong>municipal unrecorded lien and open permit searches</strong> across dozens of unique city jurisdictions, manages <strong>FIRPTA foreign seller withholding requirements</strong>, and delivers <strong>seamless bilingual English/Spanish client milestone tracking</strong>.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-[#3A2E29]">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Tri-County & Statewide Coverage</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Flat $375 Base / $475 Pro Fee</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ Paid at Closing Table • Zero Monthly Retainers</span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4]">✓ 30+ Years South Florida Proven Roots</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COUNTIES AND SERVICE MODEL */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Tri-County Footprint & Flat-Fee Service Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              South Florida Counties & Scalable Transaction Support
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We provide frictionless contract execution across South Florida's major counties, pairing regional market expertise with a straightforward, 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* County 1: Miami-Dade */}
            <div className="bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3A2E29]">Miami-Dade County</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  34 distinct municipalities and unincorporated UMSA. High concentration of urban high-rise condos, international buyers, FIRPTA withholdings, and WASD/DERM environmental verifications.
                </p>
                <div className="text-[11px] font-semibold text-[#0D9BA3] pt-2">
                  Specialties: Condos, Foreign Investors & 34 Cities
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4]">
                {onOpenMiamiDadeTc && (
                  <button
                    onClick={onOpenMiamiDadeTc}
                    className="text-xs font-bold text-[#0D9BA3] hover:text-[#0b8288] inline-flex items-center space-x-1 cursor-pointer group"
                  >
                    <span>Explore Miami-Dade TC Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                  </button>
                )}
              </div>
            </div>

            {/* County 2: Broward */}
            <div className="bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#3A2E29]">Broward County</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast-paced suburban and coastal corridors from Fort Lauderdale to Weston and Parkland. Heavy master association and HOA estoppel tracking with team/solo scalability.
                </p>
                <div className="text-[11px] font-semibold text-[#FE7311] pt-2">
                  Specialties: Gated HOAs, Solo Producers & Teams
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4]">
                {onOpenBrowardTc && (
                  <button
                    onClick={onOpenBrowardTc}
                    className="text-xs font-bold text-[#FE7311] hover:text-[#d45e0c] inline-flex items-center space-x-1 cursor-pointer group"
                  >
                    <span>Explore Broward TC Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                  </button>
                )}
              </div>
            </div>

            {/* County 3: Palm Beach & Statewide */}
            <div className="bg-white p-8 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
                  <Compass className="w-6 h-6 text-[#0D9BA3]" />
                </div>
                <h3 className="text-xl font-bold text-[#3A2E29]">Palm Beach & Beyond</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Luxury golf communities, country club equity addenda, and coastal estates across Boca Raton, Delray Beach, and West Palm Beach, with seamless coordination across all 67 Florida counties.
                </p>
                <div className="text-[11px] font-semibold text-[#3A2E29] pt-2">
                  Specialties: Country Clubs, Estates & Statewide FL
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8D2D4]">
                <button
                  onClick={onOpenPricing}
                  className="text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] inline-flex items-center space-x-1 cursor-pointer group"
                >
                  <span>View Flat-Fee Plans</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </button>
              </div>
            </div>

          </div>

          {/* Service Model Highlight */}
          <div className="bg-[#3A2E29] text-white p-8 rounded-3xl border border-white/10 shadow-lg grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#FE7311] uppercase tracking-wider">01. Purely Performance-Based</span>
              <h4 className="text-base font-bold text-white">Paid at Closing Table</h4>
              <p className="text-xs text-slate-300">No retainers, onboarding setup fees, or monthly subscription commitments. If a file cancels, our fee is waived.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">02. Broker-Ready File Audit</span>
              <h4 className="text-base font-bold text-white">100% DBPR Compliance</h4>
              <p className="text-xs text-slate-300">Direct integration with SkySlope, Dotloop, Command, Brokermint, and Paperless Pipeline so your commissions disburse on time.</p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#FE7311] uppercase tracking-wider">03. High-Touch Communication</span>
              <h4 className="text-base font-bold text-white">Proactive Milestone Updates</h4>
              <p className="text-xs text-slate-300">Lenders, title agents, co-op brokers, and clients receive structured, timely email summaries at every contract milestone.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY LOCAL OPERATING KNOWLEDGE MATTERS */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Regional Technical Depth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Why Local South Florida Operating Knowledge Matters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Generic national or out-of-state transaction coordination services often fail in South Florida because they misunderstand the region’s unique title rules, municipal bureaucracy, and association laws.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Box 1: Section 9(c) Title Customs */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-bold shadow-sm">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Paragraph 9(c) Title Customs</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                In Miami-Dade and Broward, the default standard is that the <strong>Buyer designates the closing agent and pays for the Owner’s Title Insurance Policy</strong> (unlike Palm Beach or Central FL where Seller often pays). We review contract boxes on day one to eliminate title disputes.
              </p>
            </div>

            {/* Box 2: HOA & SB 4-D Condominium Estoppels */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#FE7311] flex items-center justify-center font-bold shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">SB 4-D / SB 154 Condo Rules</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                South Florida’s post-Surfside legislation mandates Structural Integrity Reserve Studies (SIRS) and building milestone inspections. We know which disclosures are required, how to expedite estoppels, and how to verify association approval deadlines.
              </p>
            </div>

            {/* Box 3: Municipal Lien & Open Permit Clearances */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white text-[#3A2E29] flex items-center justify-center font-bold shadow-sm">
                <FileSearch className="w-6 h-6 text-[#0D9BA3]" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Municipal & County Code Searches</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Navigating open building permits, expired re-roofing finals, and unrecorded utility assessments across dozens of South Florida municipal building departments requires localized persistence to avoid closing day funding delays.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. ENGLISH / SPANISH BILINGUAL SUPPORT */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Languages className="w-3.5 h-3.5" />
              <span>Bilingual South Florida Operations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Native Bilingual Communication: English and Spanish
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              South Florida is an international capital. A significant percentage of contracts involve Spanish-speaking buyers, sellers, foreign nationals, lenders, and closing processors.
            </p>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">Stress-Free Spanish Milestone Explanations:</strong>
                <span>We clearly articulate escrow wire instructions, inspection deadlines, and closing logistics in native Spanish, ensuring clients feel secure throughout the process.</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">International Sellers & FIRPTA Alignment:</strong>
                <span>We coordinate with South Florida closing attorneys to facilitate foreign seller withholding documentation (IRS Forms 8288 / 1042-S) and international wire confirmations.</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                <strong className="text-[#3A2E29] block">Cross-Brokerage Rapport:</strong>
                <span>We maintain seamless, cordial collaboration with Spanish-dominant cooperating agents and title processors across Miami-Dade, Broward, and Palm Beach.</span>
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
                  <p className="text-xs text-[#0D9BA3] font-bold">Founder & Senior Coordinator</p>
                  <span className="text-xs text-slate-300">South Florida Born & Raised • 30+ Years FL Real Estate</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic font-serif">
                "South Florida real estate moves fast, involves multiple languages, and presents distinct legal nuances. We founded Hometown TC to provide local agents with high-touch, dependable contract-to-close execution that protects their time and their reputation."
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Direct Regional Line:</span>
                  <strong className="text-white text-sm">(954) 377-8330</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Fee Schedule:</span>
                  <strong className="text-[#0D9BA3] text-sm">Paid at Closing Table</strong>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onBookCall}
                  className="w-full py-3.5 bg-[#FE7311] hover:bg-[#e06209] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
                >
                  Book a Regional fit call
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. REGIONAL HUB INTERLINKING (LINKS TO MIAMI, MIAMI-DADE, AND BROWARD PAGES) */}
      <section className="py-20 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>South Florida Submarket Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Explore Our Dedicated South Florida Hubs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Looking for deep submarket insights and localized workflow breakdowns? Explore our specialized local transaction coordination guides:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Hub 1: City of Miami */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#3A2E29]">City of Miami TC</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Brickell, Downtown, Edgewater, Midtown & Coconut Grove high-density urban condo coordination and master associations.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D2D4]">
                {onOpenMiamiTc && (
                  <button
                    onClick={onOpenMiamiTc}
                    className="text-xs font-bold text-[#0D9BA3] hover:underline cursor-pointer inline-flex items-center space-x-1"
                  >
                    <span>View City of Miami Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Hub 2: Miami-Dade County */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#3A2E29]">Miami-Dade County TC</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Countywide coverage across all 34 municipalities, WASD/DERM environmental compliance, and regional title customs.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D2D4]">
                {onOpenMiamiDadeTc && (
                  <button
                    onClick={onOpenMiamiDadeTc}
                    className="text-xs font-bold text-[#FE7311] hover:underline cursor-pointer inline-flex items-center space-x-1"
                  >
                    <span>View Miami-Dade County Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Hub 3: Broward County */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5 text-[#0D9BA3]" />
                </div>
                <h3 className="text-lg font-bold text-[#3A2E29]">Broward County TC</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fort Lauderdale, Weston, Parkland, Pembroke Pines HOA and condo estoppels with solo producer and team scaling.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8D2D4]">
                {onOpenBrowardTc && (
                  <button
                    onClick={onOpenBrowardTc}
                    className="text-xs font-bold text-[#0D9BA3] hover:underline cursor-pointer inline-flex items-center space-x-1"
                  >
                    <span>View Broward County Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

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
              <span>Full Tri-County & Florida Coverage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
              Scale Your South Florida Real Estate Operations
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Partner with a seasoned, South Florida-founded transaction coordination team. Save 12–18 hours per file and guarantee broker-ready compliance on every closing.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl hover:shadow-[#FE7311]/25 cursor-pointer"
              >
                Book a Fit Call
              </button>
              <button
                onClick={onSubmitDeal}
                className="w-full sm:w-auto px-7 py-4 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md"
              >
                Submit a Deal ($375)
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
