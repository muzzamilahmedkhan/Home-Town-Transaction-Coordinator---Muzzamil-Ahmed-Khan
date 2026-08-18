import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  Zap,
  Building2,
  FileCheck2,
  Layers,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Search,
  Camera,
  Home,
  FileText,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  DollarSign,
  Send,
  Users,
  Check,
  Eye,
  Lock,
  Compass
} from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onExploreServices: () => void;
  onGoHome: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc: () => void;
  onOpenTransactionCoordination?: () => void;
}

export const ListingCoordinationPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onExploreServices,
  onGoHome,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenTransactionCoordination
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<'standard' | 'rush'>('standard');

  const faqs = [
    {
      q: 'When does the turnaround clock officially begin for my listing?',
      a: 'The turnaround clock (3 business days for Standard, 1 business day for Rush) begins the moment all 5 required intake items are submitted and verified complete: executed listing agreement, seller disclosure info, high-res photos/media link, confirmed list price/date, and showing instructions. Submissions received after 3:00 PM EST begin their clock on the next business morning.'
    },
    {
      q: 'Does HTC activate the listing live on the MLS?',
      a: 'No. To maintain complete brokerage compliance and agent authority, HTC prepares the MLS listing as an immaculate, verified draft with all supplemental documents, photos, and virtual tours attached. We notify you once the draft is 100% complete so you or your managing broker can perform a final review and click "Make Active" at your exact preferred time.'
    },
    {
      q: 'What MLS systems in Florida does HTC support?',
      a: 'HTC supports all major Florida MLS boards including MIAMI Association of REALTORS® (Matrix), BeachesMLS (Broward, Palm Beaches, St. Lucie), Stellar MLS (Central/West Florida, Orlando, Tampa), and Northeast Florida MLS (NEFAR).'
    },
    {
      q: 'What is included in the Association Research Option?',
      a: 'For properties located in a Condominium or HOA community, our association research add-on identifies the licensed Community Association Manager (CAM), management company contact details, master vs. sub-association fee breakdowns, pet/vehicle restrictions, minimum rental durations, capital contribution fees, and buyer application packet requirements.'
    },
    {
      q: 'Can I combine Listing Launch with Contract-to-Close coordination?',
      a: 'Yes! Our Pro Package ($475 per closed file) seamlessly bridges Listing Launch with complete Contract-to-Close coordination. When an offer on your listing is executed, your dedicated HTC coordinator immediately transitions the file into contract management with zero friction.'
    },
    {
      q: 'What if my listing doesn’t sell or the seller withdraws?',
      a: 'Listing Launch is a dedicated pre-market preparation service billed upon draft completion and delivery. If you are enrolled in our bundled Pro package, the listing preparation is accounted for in your account structure without penalty.'
    }
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Category */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition">Home</button>
            <span>/</span>
            <button onClick={onExploreServices} className="hover:text-white transition">Services</button>
            <span>/</span>
            <span className="text-white">Listing Coordination</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FLORIDA LISTING COORDINATION & LAUNCH SUPPORT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
                Pristine MLS Listing Launches. <br className="hidden sm:block" />
                <span className="text-[#0D9BA3]">Zero Clerical Drag.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl font-light">
                HTC helps listing-heavy solo agents and high-producing Florida teams move complete listing documentation toward a clean, compliant, and timely launch. You retain total command over property preparation, photography, pricing, and brokerage decisions—while we handle the heavy administrative drafting.
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
                  <Send className="w-4 h-4 text-[#0D9BA3]" />
                  <span>Submit Listing File</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>3-Day Standard / 1-Day Rush</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>FAR/BAR & MLS Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileCheck2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>Full Disclosure Assembly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  <span>Association Contact Research</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Service Capsule */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl text-white space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold">Service Lane</span>
                    <h2 className="text-lg font-bold text-white">Listing Launch Support</h2>
                  </div>
                  <span className="px-3 py-1 bg-[#0D9BA3] text-white text-xs font-extrabold rounded-full">
                    Pre-Market
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                    <span><strong>Full Document Audit:</strong> Listing agreement, riders & brokerage disclosures.</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                    <span><strong>Florida SPDS Prep:</strong> Seller disclosures prepared & dispatched for e-sign.</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                    <span><strong>MLS Matrix Entry:</strong> Verified draft input, room sizes, remarks & features.</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                    <span><strong>Media & Supplements:</strong> High-res photo ordering, virtual tours & PDF attachments.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-black/20 rounded-2xl border border-white/10 text-[11px] text-slate-300 space-y-1">
                  <div className="font-bold text-white flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
                    <span>Agent Authority Safeguard</span>
                  </div>
                  <p>You review the complete draft and click "Make Active." HTC never activates listings without your final sign-off.</p>
                </div>

                <button
                  onClick={onBookCall}
                  className="w-full py-3 bg-white text-[#3A2E29] hover:bg-slate-100 rounded-xl font-bold text-xs uppercase tracking-wider transition text-center block cursor-pointer"
                >
                  Schedule Listing Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT LISTING LAUNCH INCLUDES */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Pre-Market Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
            What Listing Launch Includes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every step is designed to eliminate paperwork friction and get your listing to draft status with verified accuracy and zero compliance oversights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Listing Agreement Audit */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A2E29]">1. Agreement & Compliance Audit</h3>
              <p className="text-xs text-slate-500 mt-1">Verification of all mandatory Florida brokerage documents.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Verify executed Exclusive Right of Sale or Exclusive Agency agreement.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Check broker commission terms, list price, commencement date, and expiration date.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Ensure Affiliated Business (ABA) & Wire Fraud disclosures are signed.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Public Records & Property Diligence */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
              <Search className="w-6 h-6 text-[#3A2E29]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A2E29]">2. Tax & Public Records Verification</h3>
              <p className="text-xs text-slate-500 mt-1">Cross-referencing county records for strict legal accuracy.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Pull County Property Appraiser folio/parcel ID, legal description, and deed records.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Verify living area square footage, lot size, year built, and property zoning.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Confirm ownership on deed matches all signing sellers.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Seller Disclosure Preparation */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A2E29]">3. Seller Disclosure Assembly</h3>
              <p className="text-xs text-slate-500 mt-1">Preparing and dispatching statutory Florida disclosures.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#FE7311] mt-0.5 flex-shrink-0" />
                <span>Generate Florida Seller Property Disclosure Statement (SPDS) package.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#FE7311] mt-0.5 flex-shrink-0" />
                <span>Prepare Lead-Based Paint disclosure for pre-1978 properties.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#FE7311] mt-0.5 flex-shrink-0" />
                <span>Dispatch via DocuSign / Dotloop / Form Simplicity for seller completion.</span>
              </li>
            </ul>
          </div>

          {/* Card 4: MLS Draft Input & Data Fields */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A2E29]">4. Comprehensive MLS Draft Input</h3>
              <p className="text-xs text-slate-500 mt-1">Inputting 50+ mandatory and voluntary MLS fields.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Accurate input of property type, architectural style, room dimensions, and interior features.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Input agent-provided Public Remarks, Broker Confidential Remarks, and Directions.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Configure ShowingTime / ShowingBeacon rules and lockbox access details.</span>
              </li>
            </ul>
          </div>

          {/* Card 5: Media & Attachment Uploads */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
              <Camera className="w-6 h-6 text-[#3A2E29]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A2E29]">5. Media & Supplement Attachments</h3>
              <p className="text-xs text-slate-500 mt-1">High-resolution photo sequencing and PDF uploads.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Upload and sequence high-res property photos based on agent instructions.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Attach unbranded virtual tours, video walk-throughs, and Matterport 3D links.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Upload executed disclosures, floor plans, and survey PDFs to MLS Supplemental Documents.</span>
              </li>
            </ul>
          </div>

          {/* Card 6: Brokerage Archival & Pre-Launch Review */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A2E29]">6. Brokerage Compliance & Delivery</h3>
              <p className="text-xs text-slate-500 mt-1">Clean portal upload and draft delivery to agent.</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Upload complete pre-listing package into your brokerage compliance portal.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Send draft review link with complete checklist directly to you.</span>
              </li>
              <li className="flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
                <span>Ready for one-click live activation whenever you and your seller decide.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. TURNAROUND TIMELINES (3-DAY STANDARD & 1-DAY RUSH OPTION) */}
      <section className="py-20 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Predictable Turnaround Timelines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              Standard vs. Rush Launch Timelines
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate on strict, transparent schedules so you can set clear expectations with your sellers. The clock begins once all 5 required intake items are received.
            </p>

            {/* Toggle Switch */}
            <div className="pt-4 flex justify-center">
              <div className="bg-[#EEEAEB] p-1.5 rounded-2xl inline-flex space-x-2 border border-[#D8D2D4]">
                <button
                  onClick={() => setSelectedTimeline('standard')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer ${
                    selectedTimeline === 'standard'
                      ? 'bg-white text-[#3A2E29] shadow-sm'
                      : 'text-slate-500 hover:text-[#3A2E29]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>3-Business-Day Standard</span>
                </button>
                <button
                  onClick={() => setSelectedTimeline('rush')}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-2 cursor-pointer ${
                    selectedTimeline === 'rush'
                      ? 'bg-[#FE7311] text-white shadow-sm'
                      : 'text-slate-500 hover:text-[#3A2E29]'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-white" />
                  <span>1-Business-Day Rush Option</span>
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Display Card */}
          {selectedTimeline === 'standard' ? (
            <div className="bg-[#EEEAEB] rounded-3xl p-8 border border-[#D8D2D4] shadow-sm max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D8D2D4]">
                <div>
                  <span className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">Standard Pace</span>
                  <h3 className="text-2xl font-bold text-[#3A2E29]">3-Business-Day Listing Launch</h3>
                  <p className="text-xs text-slate-500 mt-1">Recommended for standard marketing timelines and pre-scheduled photography rollouts.</p>
                </div>
                <div className="px-4 py-2 bg-white rounded-xl border border-[#D8D2D4] text-center">
                  <span className="text-[11px] text-slate-500 block uppercase font-semibold">Turnaround</span>
                  <span className="text-lg font-black text-[#0D9BA3]">72 Business Hours</span>
                </div>
              </div>

              {/* Step By Step Days */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-5 border border-[#D8D2D4] space-y-3">
                  <div className="w-8 h-8 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold text-xs">
                    Day 1
                  </div>
                  <h4 className="font-bold text-sm text-[#3A2E29]">Intake & Verification</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify all 5 intake items. Pull county tax/folio records. Audit listing agreement. Prepare and dispatch seller disclosures for e-sign.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#D8D2D4] space-y-3">
                  <div className="w-8 h-8 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold text-xs">
                    Day 2
                  </div>
                  <h4 className="font-bold text-sm text-[#3A2E29]">MLS Input & Media</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Complete all 50+ MLS draft data fields. Upload high-res photo sequence, virtual tours, and executed disclosure PDFs to supplements.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#D8D2D4] space-y-3">
                  <div className="w-8 h-8 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold text-xs">
                    Day 3
                  </div>
                  <h4 className="font-bold text-sm text-[#3A2E29]">Audit & Delivery</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Run syndication and error audits. Upload file to brokerage compliance portal. Deliver final draft review link to agent for one-click activation.
                  </p>
                </div>
              </div>

              <div className="bg-white/60 p-4 rounded-xl text-xs text-slate-600 flex items-start space-x-3 border border-[#D8D2D4]">
                <Clock className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Intake Cutoff:</strong> Submissions received before 3:00 PM EST begin Day 1 on the same business day. Submissions after 3:00 PM EST begin on the following business morning.
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-[#FE7311]/5 rounded-3xl p-8 border-2 border-[#FE7311]/30 shadow-sm max-w-4xl mx-auto space-y-8 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#FE7311]/20">
                <div>
                  <span className="text-xs font-bold text-[#FE7311] uppercase tracking-wider">Fast-Track Option</span>
                  <h3 className="text-2xl font-bold text-[#3A2E29]">1-Business-Day Rush Listing Launch</h3>
                  <p className="text-xs text-slate-500 mt-1">For sudden listing opportunities, emergency weekend launches, or immediate seller mandates.</p>
                </div>
                <div className="px-4 py-2 bg-white rounded-xl border border-[#FE7311]/40 text-center shadow-sm">
                  <span className="text-[11px] text-slate-500 block uppercase font-semibold">Turnaround</span>
                  <span className="text-lg font-black text-[#FE7311]">24 Business Hours</span>
                </div>
              </div>

              {/* Rush Steps */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-5 border border-[#FE7311]/20 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-[#FE7311] text-white flex items-center justify-center font-bold text-xs">
                    Hours 1–8
                  </div>
                  <h4 className="font-bold text-sm text-[#3A2E29]">Accelerated Intake & Public Records</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Priority file triage. Immediate county tax records pull, expedited disclosure dispatch, and simultaneous MLS data input initiation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#FE7311]/20 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-[#FE7311] text-white flex items-center justify-center font-bold text-xs">
                    Hours 9–24
                  </div>
                  <h4 className="font-bold text-sm text-[#3A2E29]">Media Sequence & Draft Delivery</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Priority photo upload, PDF attachment binding, brokerage compliance sync, and full draft delivery within 24 business hours.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl text-xs text-slate-700 flex items-start space-x-3 border border-[#FE7311]/30">
                <Zap className="w-4 h-4 text-[#FE7311] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Rush Requirements:</strong> All 5 required intake items must be 100% complete upon initial submission. Rush add-on fee applies. Subject to coordinator availability.
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. CLEAR OPERATIONAL BOUNDARIES: WHAT HTC DOES NOT SCHEDULE OR MANAGE */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-12 space-y-3 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Strict Operational Boundaries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
              What HTC Does <span className="text-[#FE7311]">NOT</span> Schedule or Manage
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To protect your client relationships, brokerage liability, and agent licensing boundaries, HTC does not perform physical property management, subjective vendor booking, or autonomous pricing decisions.
            </p>
          </div>

          {/* 6 Clear Boundaries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5 text-[#FE7311] font-bold text-sm">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>No Photography Scheduling</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                You select, hire, and schedule your preferred real estate photographer directly. Once media links are ready, you send them to HTC for upload.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5 text-[#FE7311] font-bold text-sm">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>No Staging or Cleaning Prep</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We do not coordinate on-site staging companies, cleaners, painters, landscaping, or repair handymen. Property readiness remains the agent’s purview.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5 text-[#FE7311] font-bold text-sm">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>No Physical Lockbox/Sign Placement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                HTC operates digitally. We do not physically visit properties to install lockboxes, place yard signposts, or verify on-site keys.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5 text-[#FE7311] font-bold text-sm">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>No Pricing Advice or CMA Valuations</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pricing strategy, CMA valuations, and seller price advice are licensed agent duties. HTC inputs the exact list price you provide in writing.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5 text-[#FE7311] font-bold text-sm">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>No Direct MLS "Go Live" Activation</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We prepare the complete draft. You or your managing broker retain sole authority to click "Make Active" to ensure timing and compliance alignment.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 backdrop-blur-sm">
              <div className="flex items-center space-x-2.5 text-[#FE7311] font-bold text-sm">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <span>No Negotiation or Seller Advisory</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                HTC never gives legal, tax, or negotiating advice to sellers. We maintain clear clerical boundaries that elevate your advisory stature.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <span className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
              <span>Full compliance with Florida Real Estate Commission (FREC) administrative guidelines.</span>
            </span>
            <button
              onClick={onOpenWhyHtc}
              className="text-[#0D9BA3] hover:text-white font-bold transition flex items-center space-x-1 cursor-pointer"
            >
              <span>Learn Why High-Volume Agents Trust HTC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. ASSOCIATION RESEARCH OPTION (HOA & CONDOMINIUM DILIGENCE) */}
      <section className="py-20 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Florida HOA & Condo Add-On</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
                Association Research Option for Florida Condos & HOAs
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Florida association guidelines are notoriously complex. Missing pet restrictions, unexpected capital contribution fees, or obscure rental waiting periods can kill a deal weeks later. Our Association Research add-on performs critical pre-market discovery.
              </p>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start space-x-3 p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3A2E29]">Management & CAM Contact Discovery:</strong> Identification of the active Community Association Manager (CAM), management company portal, office phone, and email.
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3A2E29]">Fee & Assessment Breakdown:</strong> Clarification of Master Association vs. Sub-Association monthly/quarterly dues, common element inclusions, and reserve disclosures.
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3A2E29]">Leasing & Pet Restrictions:</strong> Discovery of minimum lease length (e.g., 30 days, 6 months, 1 year), lease frequency limits, ownership waiting period before renting, and pet weight/count limits.
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3A2E29]">Buyer Application & Estoppel Info:</strong> Sourcing the prospective buyer approval application, application fees, transfer fees, and estoppel ordering instructions for title.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onBookCall}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#0D9BA3] hover:text-[#3A2E29] transition uppercase tracking-wider cursor-pointer"
                >
                  <span>Ask about HOA Research on your fit call</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Illustration Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#EEEAEB] rounded-3xl p-6 sm:p-8 border border-[#D8D2D4] shadow-lg space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#D8D2D4]">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0D9BA3] text-white flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#3A2E29]">Association Diligence Sheet</h4>
                      <span className="text-[11px] text-slate-500">Delivered directly to agent pre-launch</span>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[#0D9BA3] bg-white px-3 py-1 rounded-full border border-[#D8D2D4]">
                    Add-On Feature
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-[#D8D2D4] flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Primary Management:</span>
                    <span className="font-bold text-[#3A2E29]">Verified CAM Portal & Phone</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#D8D2D4] flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Master + Sub Dues:</span>
                    <span className="font-bold text-[#3A2E29]">$620/mo + $145/qtr (Verified)</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#D8D2D4] flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Rental Restrictions:</span>
                    <span className="font-bold text-[#FE7311]">Min 90 Days | 2x / Year Max</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#D8D2D4] flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Capital Contribution:</span>
                    <span className="font-bold text-[#3A2E29]">2 Months Dues ($1,240)</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#D8D2D4] flex justify-between items-center">
                    <span className="text-slate-600 font-medium">Buyer Application:</span>
                    <span className="font-bold text-[#0D9BA3]">PDF Attached to MLS Supplements</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-[#0D9BA3]/30 text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-[#0D9BA3] block">Save Hours of Admin Headaches</span>
                  <p className="text-[11px] leading-relaxed">
                    Avoid buyer cancellations caused by unannounced association rules or unbudgeted capital contribution fees.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INFORMATION REQUIRED BEFORE THE CLOCK STARTS */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#3A2E29]/10 text-[#3A2E29] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>Submission Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
            Information Required Before the Clock Starts
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To guarantee our 3-business-day standard (or 1-business-day rush) turnaround, our intake team requires 5 complete items before initiation.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          
          <div className="bg-white rounded-2xl p-5 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h3 className="font-bold text-xs text-[#3A2E29] uppercase tracking-wide">Executed Listing Agreement</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Signed by all legal deed holders with broker compensation, begin date, and expiration clearly indicated.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
              2
            </div>
            <h3 className="font-bold text-xs text-[#3A2E29] uppercase tracking-wide">Seller Disclosures</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Florida SPDS details or seller contact info for e-sign dispatch, plus Lead-Based Paint disclosure if built pre-1978.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
              3
            </div>
            <h3 className="font-bold text-xs text-[#3A2E29] uppercase tracking-wide">High-Res Media Link</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Downloadable Dropbox, Drive, Box, or photo portal link with your preferred cover/hero photo specified.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
              4
            </div>
            <h3 className="font-bold text-xs text-[#3A2E29] uppercase tracking-wide">Price & Launch Date</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Target list price, target go-live date, compensation terms, and public/broker remarks if pre-written.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
              5
            </div>
            <h3 className="font-bold text-xs text-[#3A2E29] uppercase tracking-wide">Showing & Lockbox Info</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Lockbox serial/shackle code, ShowingTime rules, gate access codes, and occupant status (Owner, Tenant, Vacant).
            </p>
          </div>

        </div>

        {/* Pro Tip Box */}
        <div className="mt-8 bg-white rounded-2xl p-6 border border-[#0D9BA3]/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#3A2E29]">Ready to submit your first listing file?</h4>
              <p className="text-xs text-slate-500">All registered HTC clients get instant access to our streamlined intake portal.</p>
            </div>
          </div>
          <button
            onClick={onSubmitDeal}
            className="px-6 py-3 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition flex-shrink-0 cursor-pointer shadow-md"
          >
            Access Submit Portal
          </button>
        </div>
      </section>

      {/* 7. LISTING LAUNCH + CONTRACT-TO-CLOSE COMBO */}
      <section className="py-20 bg-[#3A2E29] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">The Complete Journey</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
                From Listing Launch Straight to Closing Table
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Why switch systems midway? Our Pro Package bundles Listing Launch with full Contract-to-Close coordination. The moment an offer is executed on your listing, your dedicated coordinator transitions the transaction seamlessly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wide">Phase 1: Listing Lane</div>
                  <p className="text-xs text-slate-300">
                    Pre-listing setup, disclosure prep, MLS draft entry, and supplemental document uploads.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-[#FE7311] uppercase tracking-wide">Phase 2: Contract Lane</div>
                  <p className="text-xs text-slate-300">
                    Master timeline tracking, escrow monitoring, buyer/seller/lender alignment, and broker compliance.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onExploreServices}
                  className="px-6 py-3.5 bg-white text-[#3A2E29] hover:bg-slate-100 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                >
                  View Complete Services & Pricing
                </button>
                {onOpenTransactionCoordination && (
                  <button
                    onClick={onOpenTransactionCoordination}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer border border-white/20"
                  >
                    Explore Contract Coordination
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 space-y-4 text-white">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Popular Choice</span>
                  <span className="text-xs bg-[#FE7311] text-white px-3 py-1 rounded-full font-extrabold">Pro Package</span>
                </div>
                <div className="text-3xl font-black font-serif">$475 <span className="text-xs text-slate-300 font-sans font-normal">/ per closed file</span></div>
                <p className="text-xs text-slate-200">
                  Combines full pre-listing Listing Launch with end-to-end Contract-to-Close coordination. Zero
                </p>
                <div className="space-y-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    <span>Includes 3-Day MLS Draft Entry</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    <span>Full FAR/BAR Contract Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    <span>Master Milestone Calendar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    <span>CD / CDA Review & Broker Archival</span>
                  </div>
                </div>

                <button
                  onClick={onBookCall}
                  className="w-full py-3 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition text-center block cursor-pointer shadow-lg mt-4"
                >
                  Book a Fit Call to Enroll
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-20 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
            Listing Coordination FAQ
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Everything you need to know about our listing launch workflows.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#D8D2D4] overflow-hidden transition"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between space-x-4 cursor-pointer hover:bg-[#EEEAEB]/50 transition"
                >
                  <span className="font-bold text-sm text-[#3A2E29]">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#D8D2D4]/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="bg-gradient-to-r from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white py-16 sm:py-20 border-t border-[#D8D2D4]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 text-[#0D9BA3] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Your Next Listing with HTC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
            Stop Typing MLS Fields. <br />
            <span className="text-[#0D9BA3]">Focus on Selling the Home.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a 15-minute fit call to set up your agent profile, define your preferred MLS boards, and submit your first listing file today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition shadow-xl hover:shadow-[#FE7311]/25 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Fit Call</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={onSubmitDeal}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#0D9BA3]" />
              <span>Submit Listing File</span>
            </button>
          </div>

          <div className="pt-6 flex items-center justify-center space-x-6 text-xs text-slate-400">
            <span>Direct Call: <strong className="text-white">{PHONE_NUMBER}</strong></span>
            <span>•</span>
            <span>Email: <strong className="text-white">{EMAIL_ADDRESS}</strong></span>
          </div>
        </div>
      </section>

    </div>
  );
};
