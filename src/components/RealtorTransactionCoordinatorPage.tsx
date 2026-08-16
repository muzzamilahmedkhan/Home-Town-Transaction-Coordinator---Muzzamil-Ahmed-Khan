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
  Scale,
  Award,
  Users,
  Heart,
  Clock,
  ChevronDown,
  ChevronUp,
  Building2,
  FileText,
  AlertTriangle,
  FolderLock,
  Send,
  HelpCircle,
  DollarSign,
  Lock,
  Check,
  XCircle,
  Eye,
  Sliders,
  BellRing,
  UserCheck,
  Briefcase,
  TrendingUp,
  MessageSquare,
  Shield
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
  onOpenContractToClose?: () => void;
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

export const RealtorTransactionCoordinatorPage: React.FC<Props> = ({
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
  onOpenContractToClose,
  onOpenMiamiTc,
  onOpenMiamiDadeTc,
  onOpenBrowardTc,
  onOpenSouthFloridaTc
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const realtorDuties = [
    {
      title: 'Client Fiduciary Representation',
      desc: 'Advising clients on purchase offers, pricing strategy, counteroffers, and negotiation tactics.'
    },
    {
      title: 'Contract Negotiation & Terms',
      desc: 'Negotiating repair credits, price reductions, seller concessions, and formal contract amendments.'
    },
    {
      title: 'Property Access & Inspections',
      desc: 'Attending property showings, home inspection walkthroughs, and conducting final verification walk-throughs.'
    },
    {
      title: 'Professional Legal & Tax Boundaries',
      desc: 'Guiding clients to seek formal legal, tax, structural, or insurance advice from licensed experts.'
    }
  ];

  const htcBehindTheScenes = [
    {
      title: 'FAR/BAR Contract & Rider Audit',
      desc: 'Reviewing every page, date, initial, and mandatory Florida disclosure (Condo, HOA, Lead-Based Paint, As-Is).'
    },
    {
      title: 'Master Milestone Calendar Lock',
      desc: 'Calculating critical statutory dates and distributing automated calendar holds to Title, Lender, and Co-op Agent.'
    },
    {
      title: 'Escrow & Wire Safety Verification',
      desc: 'Tracking initial and additional Earnest Money Deposits (EMD) with formal escrow receipts on file.'
    },
    {
      title: 'HOA / Condo Estoppel & Rule Checks',
      desc: 'Ordering estoppels, tracking buyer board applications, and monitoring post-Surfside SB 4-D structural disclosures.'
    },
    {
      title: 'Lender & Title Clearance Tracking',
      desc: 'Monitoring appraisal status, underwriting milestones, title commitments, municipal lien searches, and permit checks.'
    },
    {
      title: 'Settlement Review & CDA Release',
      desc: 'Reviewing Closing Disclosures (CD) / ALTA settlement statements against contract terms and securing executed CDAs.'
    }
  ];

  const brokerPlatforms = [
    'SkySlope',
    'Keller Williams Command',
    'Dotloop',
    'Brokermint',
    'Paperless Pipeline',
    'RealiTech / Local Broker Intranets'
  ];

  const planCommunications = [
    {
      plan: 'Base Plan ($375 / closed file)',
      focus: 'Behind-the-Scenes Operational Engine',
      badge: 'Agent-Centered Touchpoints',
      color: 'border-[#3A2E29]',
      points: [
        'HTC operates behind the scenes as your back-office execution partner.',
        'We manage direct milestone communication with Title, Lender, and the Cooperating Agent.',
        'You receive timely milestone alerts and prompts to update your buyers or sellers directly.',
        'Ideal for Realtors who prefer to maintain 100% of direct phone and text conversations with their clients.'
      ]
    },
    {
      plan: 'Pro Plan ($475 / closed file)',
      focus: 'High-Touch Co-Branded Client Experience',
      badge: 'Elevated Client Transparency',
      color: 'border-[#FE7311]',
      points: [
        'Includes all behind-the-scenes coordination PLUS co-branded client-facing milestone updates.',
        'Warm introductory email sent to your buyer or seller introducing HTC as your dedicated closing coordinator.',
        'Proactive milestone check-ins (Escrow confirmed, Inspection deadline safely met, Appraisal cleared, Clear to Close).',
        'Available in native English and Spanish for South Florida and international clientele.'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Does using a Transaction Coordinator affect my relationship with my clients?',
      a: 'It strengthens it. On our Pro Plan, we introduce ourselves as a dedicated extension of your professional team. Your clients see a coordinated, responsive back office tracking their deposit, escrow, title, and loan milestones, making you look like an elite operation with a dedicated staff.'
    },
    {
      q: 'Can HTC negotiate repair requests or price amendments on my behalf?',
      a: 'No. As a licensed professional, all negotiations, client advisory, and contractual advice remain exclusively with you. Once you negotiate the agreed terms with the cooperating agent, HTC drafts or audits the formal addendum, obtains signatures, and distributes it to the lender, title company, and broker file.'
    },
    {
      q: 'How does HTC help me get paid faster on closing day?',
      a: 'We review the Closing Disclosure (CD) or ALTA settlement statement days before closing to verify commission percentages, split allocations, and brokerage admin fees. We secure your Commission Disbursement Authorization (CDA) from your broker early so the title company can disburse funds directly at table funding.'
    },
    {
      q: 'Do you charge a retainer or monthly subscription fee?',
      a: 'Never. Our Realtor® transaction coordination service is 100% performance-based. You are invoiced strictly at closing ($375 Base / $475 Pro). If a contract cancels during contingencies, you pay $0.'
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
            <span className="text-white">Transaction Coordinator for Realtors®</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BUILT SPECIFICALLY FOR LICENSED REAL ESTATE AGENTS • FLORIDA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              Transaction Coordinator <br />
              <span className="text-[#0D9BA3]">for Licensed Realtors®</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Hometown TC fits seamlessly behind your brand: guarding critical deadlines, communicating with title and lenders, organizing broker compliance, and elevating client experience while you focus on dollar-productive licensed activities.
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
                onClick={onOpenPricing}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
              >
                <Layers className="w-4 h-4 text-[#0D9BA3]" />
                <span>View Plans ($375 / $475)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 1: WHAT THE REALTOR® REMAINS RESPONSIBLE FOR (FIDUCIARY BOUNDARIES) */}
      <section className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Licensed Duties & Professional Agency</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              What the Realtor® Remains Responsible For
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We protect your time by handling the operational mechanics, while you maintain full control over the fiduciary relationships, strategic pricing, and contract negotiations that define your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {realtorDuties.map((duty, idx) => (
              <div
                key={idx}
                className="bg-[#EEEAEB] p-6 sm:p-7 rounded-2xl border border-[#D8D2D4] space-y-3 flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#3A2E29] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5 text-[#0D9BA3]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#3A2E29]">{duty.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{duty.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-[#0D9BA3]/5 rounded-2xl border border-[#0D9BA3]/20 flex items-center space-x-4 text-xs sm:text-sm text-slate-700">
            <Shield className="w-6 h-6 text-[#0D9BA3] flex-shrink-0" />
            <span>
              <strong>Ethical & Regulatory Compliance:</strong> Hometown TC operates strictly within administrative support boundaries under Florida DBPR regulations. We never cross into licensed representation, legal interpretation, or price advisement.
            </span>
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: WHAT HTC COORDINATES BEHIND THE SCENES */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5" />
              <span>Back-Office Precision Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              What HTC Coordinates Behind the Scenes
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Once the contract is executed, we take over the administrative burden to ensure every date is protected and all parties move in harmony toward closing day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {htcBehindTheScenes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-[#D8D2D4] shadow-sm space-y-3 flex flex-col justify-between hover:border-[#0D9BA3] transition"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#3A2E29]">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-[#D8D2D4] flex items-center space-x-1.5 text-[11px] font-bold text-[#0D9BA3]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Handled for Realtor®</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onOpenContractToClose}
              className="inline-flex items-center space-x-2 text-xs font-bold text-[#3A2E29] hover:text-[#FE7311] transition cursor-pointer underline"
            >
              <span>Explore our full 5-phase Contract-to-Close Process Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: HOW THE BROKER FILE IS SUPPORTED */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <FolderLock className="w-3.5 h-3.5" />
              <span>Broker Compliance & Immediate CDA Release</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              How Your Broker File is Supported
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nothing delays your commission check faster than a rejected compliance file. We build a clean, bulletproof audit trail directly inside your brokerage portal.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3A2E29] block">Mandatory Document Auditing:</strong>
                    We verify that all required brokerage checklists, agency disclosures, wire fraud notices, and property disclosures are signed, dated, and linked.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3A2E29] block">Direct Portal Integration:</strong>
                    We log into your transaction management system, upload documents to their assigned slots, and submit for broker compliance review well before closing.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#3A2E29] block">Commission Disbursement Authorization (CDA):</strong>
                    We ensure your CDA is approved, signed by your managing broker, and delivered to the title company to guarantee same-day funding at table.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#EEEAEB] p-6 sm:p-8 rounded-3xl border border-[#D8D2D4] space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#3A2E29]">
                Supported Broker Platforms:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {brokerPlatforms.map((plat, pIdx) => (
                  <div key={pIdx} className="bg-white p-3 rounded-xl border border-[#D8D2D4] text-xs font-bold text-[#3A2E29] flex items-center space-x-2">
                    <Building2 className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    <span>{plat}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                Compatible with all major Florida independent brokerages, Keller Williams, eXp Realty, Compass, Coldwell Banker, RE/MAX, Premier Sotheby's, and local boutique offices.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION 4: HOW CLIENT COMMUNICATION CHANGES BY PLAN */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#D8D2D4]">
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Tailored Client Touchpoints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              How Client Communication Adapts to Your Style
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you want to be the sole voice your client hears, or you want a polished co-branded concierge managing updates, we have a plan built for your business model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {planCommunications.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 sm:p-10 border-2 ${item.color} space-y-6 flex flex-col justify-between shadow-sm`}
              >
                <div className="space-y-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3 py-1 rounded-full border border-[#D8D2D4]">
                    {item.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-[#3A2E29] font-serif">{item.plan}</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{item.focus}</p>

                  <div className="pt-2 space-y-3">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D8D2D4]">
                  <button
                    onClick={onOpenPricing}
                    className="w-full py-3 bg-[#3A2E29] hover:bg-[#2A211D] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer text-center"
                  >
                    View Plan Comparison
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SECTION 5: FIT CRITERIA & CALL TO ACTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Partnership Alignment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Is Hometown TC the Right Fit for Your Business?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We work best with ambitious Florida Realtors® who value high-touch client service, precision documentation, and seamless operational leverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Great Fit */}
            <div className="bg-[#EEEAEB] p-8 rounded-3xl border border-[#D8D2D4] space-y-4">
              <div className="flex items-center space-x-2 text-[#0D9BA3] font-bold text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-5 h-5" />
                <span>You Are an Ideal Fit If:</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#0D9BA3] font-bold">•</span>
                  <span>You are a licensed Florida Realtor® closing 5 to 40+ transactions a year.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#0D9BA3] font-bold">•</span>
                  <span>You want to free up 12–18 hours per file to focus on prospecting and client meetings.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#0D9BA3] font-bold">•</span>
                  <span>You want a reliable, pay-at-closing coordinator without paying a fixed $50k+ salary.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#0D9BA3] font-bold">•</span>
                  <span>You care deeply about clean broker compliance and prompt commission disbursement.</span>
                </li>
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-white p-8 rounded-3xl border border-[#D8D2D4] space-y-4">
              <div className="flex items-center space-x-2 text-[#FE7311] font-bold text-sm uppercase tracking-wider">
                <XCircle className="w-5 h-5" />
                <span>We May Not Be a Fit If:</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#FE7311] font-bold">•</span>
                  <span>You need someone to show properties, host open houses, or draft initial buyer offers from scratch.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FE7311] font-bold">•</span>
                  <span>You operate unrepresented FSBO transactions without a licensed Florida broker.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#FE7311] font-bold">•</span>
                  <span>You prefer verbal agreements over written, executed Florida contract addenda.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto space-y-4 pt-8">
            <h3 className="text-xl font-bold text-[#3A2E29] text-center font-serif">
              Frequently Asked Questions from Realtors®
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

      {/* 7. FINAL CTA & DISCLAIMER */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FE7311]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Elevate Your Workflow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
              Ready to Partner With a Dedicated Florida TC?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Book a 15-minute discovery call with Michelle Martinez to review your transaction pipeline, broker portal setup, and how our pay-at-closing model delivers immediate operational leverage.
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
                Submit an Executed Deal ($375)
              </button>
              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                View Pricing Plans
              </button>
            </div>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400">
              <span>Direct Dial: <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a></span>
              <span>•</span>
              <span>Email: <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white font-bold hover:underline">{EMAIL_ADDRESS}</a></span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer for Realtor trademark */}
        <div className="pt-8 text-center max-w-3xl mx-auto text-[11px] text-slate-500 leading-relaxed">
          <p>
            * REALTOR® is a federally registered collective membership mark that identifies a real estate professional who is a member of the National Association of REALTORS® and subscribes to its strict Code of Ethics. Hometown TC provides independent transaction management and administrative coordination services to licensed professionals and is not affiliated with, sponsored by, or endorsed by the National Association of REALTORS®.
          </p>
        </div>
      </section>

    </div>
  );
};
