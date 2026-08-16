import React, { useState, useMemo } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  MapPin,
  Scale,
  Layers,
  Sparkles,
  Calendar,
  Globe2,
  Zap,
  ShieldCheck,
  Send,
  Lock,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  FolderLock,
  MessageSquare,
  Clock,
  Building2,
  UserCheck,
  X,
  FileText
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
  onOpenRealtorTc?: () => void;
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

interface FAQItem {
  id: string;
  section: string;
  question: string;
  answer: React.ReactNode;
  tags: string[];
}

export const FaqPage: React.FC<Props> = ({
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
  onOpenRealtorTc,
  onOpenMiamiTc,
  onOpenMiamiDadeTc,
  onOpenBrowardTc,
  onOpenSouthFloridaTc
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'geo-1': true,
    'scope-1': true,
    'plans-1': true
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    faqSections.forEach((sec) => {
      sec.items.forEach((item) => {
        all[item.id] = true;
      });
    });
    setOpenItems(all);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  // Structured Sections exactly matching user-requested order
  const faqSections: {
    id: string;
    orderNum: string;
    title: string;
    shortLabel: string;
    icon: React.ElementType;
    description: string;
    items: FAQItem[];
  }[] = [
    {
      id: 'service-area',
      orderNum: '01',
      title: 'Service Area & Geographic Coverage',
      shortLabel: 'Service Area',
      icon: MapPin,
      description: 'Florida statewide transaction coordination with specialized deep-dive focus across Tri-County South Florida.',
      items: [
        {
          id: 'geo-1',
          section: 'service-area',
          question: 'What regions and Florida counties does Hometown TC cover?',
          tags: ['service area', 'florida', 'miami', 'broward', 'palm beach', 'counties'],
          answer: (
            <div className="space-y-3">
              <p>
                Hometown TC coordinates transactions across <strong>all 67 Florida counties</strong>, with concentrated on-the-ground expertise in South Florida's Tri-County area: <strong>Miami-Dade County, Broward County, and Palm Beach County</strong>.
              </p>
              <p>
                Because Florida real estate practices, municipal requirements, and custom riders vary significantly by county (such as Miami-Dade WASD/DERM septic clearances versus Central Florida CDD disclosures), our specialized knowledge ensures your contracts conform to local customs wherever your deal is located.
              </p>
            </div>
          )
        },
        {
          id: 'geo-2',
          section: 'service-area',
          question: 'Do you handle transactions outside of South Florida (e.g., Orlando, Tampa, Naples)?',
          tags: ['orlando', 'tampa', 'naples', 'statewide', 'florida'],
          answer: (
            <div className="space-y-3">
              <p>
                <strong>Yes.</strong> We manage contracts throughout the entire State of Florida, including the Greater Orlando area, Tampa Bay, Sarasota, Naples/Fort Myers, Jacksonville, and the Florida Panhandle.
              </p>
              <p>
                As long as the transaction is governed by standard Florida Association of Realtors® / Florida Bar (FAR/BAR) contracts or approved local builder/board contracts, we manage the entire contract-to-close pipeline.
              </p>
            </div>
          )
        }
      ]
    },
    {
      id: 'scope-boundaries',
      orderNum: '02',
      title: 'Scope & Fiduciary Boundaries',
      shortLabel: 'Scope & Boundaries',
      icon: Scale,
      description: 'Understanding what HTC handles versus the fiduciary duties that remain with the licensed Realtor®.',
      items: [
        {
          id: 'scope-1',
          section: 'scope-boundaries',
          question: 'What does a Transaction Coordinator do vs. what the Realtor® remains responsible for?',
          tags: ['scope', 'boundaries', 'duties', 'responsibilities', 'fiduciary'],
          answer: (
            <div className="space-y-3">
              <p>
                Hometown TC acts as your <strong>back-office operational engine</strong>. We manage the administrative, compliance, deadline-tracking, and vendor coordination logistics of the transaction:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>HTC Handles:</strong> Milestone calendar tracking, escrow verification, HOA estoppel orders, title commitment tracking, lender appraisal check-ins, broker compliance uploads, repair addenda distribution, and CDA settlement review.</li>
                <li><strong>Realtor® Remains Responsible For:</strong> Fiduciary advisory, price guidance, property showings, attending inspections/walkthroughs, and negotiating terms, repairs, or concessions with clients and cooperating agents.</li>
              </ul>
            </div>
          )
        },
        {
          id: 'scope-2',
          section: 'scope-boundaries',
          question: 'Do you coordinate both Buyer and Seller representations?',
          tags: ['buyer', 'seller', 'listing', 'dual agency', 'representation'],
          answer: (
            <div className="space-y-3">
              <p>
                <strong>Yes, absolutely.</strong> We provide full contract-to-close coordination for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                <li><strong>Buyer-Side Representation:</strong> Escrow deposits, inspection timelines, financing/appraisal deadlines, homeowner's insurance quotes, and final walk-through scheduling.</li>
                <li><strong>Seller-Side Representation:</strong> Payoff ordering, HOA/condo estoppel delivery, municipal lien/permit clearance tracking, title document execution, and closing proceeds disbursement verification.</li>
                <li><strong>Listing Coordination:</strong> Pre-listing MLS data entry, photography scheduling, showing instruction setup, and disclosures packaging.</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      id: 'base-vs-pro',
      orderNum: '03',
      title: 'Base Plan vs. Pro Plan Comparison',
      shortLabel: 'Base vs. Pro',
      icon: Layers,
      description: 'Choosing the right level of client-facing touchpoints and operational communication for your brand.',
      items: [
        {
          id: 'plans-1',
          section: 'base-vs-pro',
          question: 'What is the key difference between the Base Plan ($375) and the Pro Plan ($475)?',
          tags: ['base plan', 'pro plan', 'pricing', 'difference', 'communication'],
          answer: (
            <div className="space-y-3">
              <p>
                Both plans deliver <strong>100% full-service transaction coordination</strong> behind the scenes with title, lenders, co-op agents, and broker portals. The key difference lies in <strong>client-facing communication</strong>:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#EEEAEB] p-4 rounded-xl border border-[#D8D2D4]">
                  <strong className="text-[#3A2E29] block text-xs uppercase tracking-wide">Base Plan ($375 / closed file)</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Behind-the-scenes engine. We coordinate all vendors and alert you to milestones, allowing you to maintain 100% of direct contact with your buyer or seller.
                  </p>
                </div>
                <div className="bg-[#FE7311]/10 p-4 rounded-xl border border-[#FE7311]/30">
                  <strong className="text-[#FE7311] block text-xs uppercase tracking-wide">Pro Plan ($475 / closed file)</strong>
                  <p className="text-xs text-slate-700 mt-1">
                    High-touch client concierge. Includes co-branded client intro emails, weekly progress check-ins, and direct milestone guidance to your buyers/sellers.
                  </p>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'plans-2',
          section: 'base-vs-pro',
          question: 'Can I switch between Base and Pro plans on a per-deal basis?',
          tags: ['switch plans', 'flexibility', 'per-deal', 'client choice'],
          answer: (
            <p>
              <strong>Yes.</strong> You have full flexibility to select the Base Plan for an investor or repeat client who needs minimal contact, and the Pro Plan for a first-time homebuyer or out-of-state luxury seller who appreciates constant proactive milestone updates.
            </p>
          )
        }
      ]
    },
    {
      id: 'cancellation-onboarding',
      orderNum: '04',
      title: 'Cancellation Policy & Onboarding',
      shortLabel: 'Cancellation & Onboarding',
      icon: Clock,
      description: 'Zero-risk, performance-based pricing: no upfront retainer, no monthly fees, and $0 owed if a contract cancels.',
      items: [
        {
          id: 'cancel-1',
          section: 'cancellation-onboarding',
          question: 'What happens if a contract cancels or falls through during inspection or financing?',
          tags: ['cancellation', 'falls through', 'refund', 'no fee', 'risk'],
          answer: (
            <div className="space-y-3">
              <p>
                <strong>You pay $0.</strong> Hometown TC operates on a strict <strong>Pay-at-Closing</strong> philosophy. If a deal cancels during the inspection period, financing contingency, appraisal gap, or condo document review, you owe nothing for our coordination work.
              </p>
              <p>
                We also draft or distribute the formal Termination and Escrow Release (Release of Deposit) addenda to ensure your buyer's earnest money is returned promptly and your broker file is marked cancelled cleanly.
              </p>
            </div>
          )
        },
        {
          id: 'cancel-2',
          section: 'cancellation-onboarding',
          question: 'Is there an upfront onboarding fee, retainer, or monthly subscription?',
          tags: ['onboarding fee', 'retainer', 'subscription', 'monthly cost'],
          answer: (
            <p>
              <strong>No.</strong> There are zero setup fees, zero monthly retainers, and zero minimum transaction quotas. You only pay our flat fee upon the successful closing of your transaction directly through the Settlement Statement (CD/ALTA) or prompt invoice.
            </p>
          )
        }
      ]
    },
    {
      id: 'bilingual-support',
      orderNum: '05',
      title: 'Bilingual Support (English & Spanish)',
      shortLabel: 'Bilingual Support',
      icon: Globe2,
      description: 'Native English and Spanish coordination for diverse South Florida and international transactions.',
      items: [
        {
          id: 'lang-1',
          section: 'bilingual-support',
          question: 'Do you offer bilingual English and Spanish transaction coordination?',
          tags: ['bilingual', 'spanish', 'espanol', 'latin america', 'foreign buyers'],
          answer: (
            <div className="space-y-3">
              <p>
                <strong>Yes, fully bilingual.</strong> Michelle Martinez and the Hometown TC team provide fluent English and Spanish written and verbal communication.
              </p>
              <p>
                This is invaluable in South Florida, where cross-border buyers from Latin America, foreign sellers navigating FIRPTA withholdings, and Spanish-speaking condo associations require culturally nuanced, clear, and reassuring guidance.
              </p>
            </div>
          )
        },
        {
          id: 'lang-2',
          section: 'bilingual-support',
          question: 'Are milestone updates and emails available in Spanish for clients?',
          tags: ['spanish emails', 'spanish updates', 'foreign national'],
          answer: (
            <p>
              Yes. On our Pro Plan, we can tailor all client-facing introductory packets, milestone alerts (Escrow confirmed, Inspection deadline, Appraisal passed, Clear to Close), and title communication in fluent Spanish based on your client's preference.
            </p>
          )
        }
      ]
    },
    {
      id: 'quick-start',
      orderNum: '06',
      title: 'How Quickly an Agent Can Start',
      shortLabel: 'How Quickly to Start',
      icon: Zap,
      description: 'Submit an executed contract today and have an active milestone schedule within hours.',
      items: [
        {
          id: 'start-1',
          section: 'quick-start',
          question: 'How fast can I start working with Hometown TC on an active contract?',
          tags: ['start today', 'onboarding time', 'turnaround', 'fast', 'immediate'],
          answer: (
            <div className="space-y-3">
              <p>
                <strong>Immediately.</strong> You do not need to wait for a complex software setup. As soon as you have a signed, executed FAR/BAR contract:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li>Submit your contract via our 3-minute online intake portal or email the executed PDF.</li>
                <li>Within <strong>24 business hours</strong> (often within 2–4 hours), we conduct a full contract audit, calculate statutory milestone dates, introduce ourselves to Title and Lender, and set up your broker compliance file.</li>
              </ol>
            </div>
          )
        },
        {
          id: 'start-2',
          section: 'quick-start',
          question: 'Can I submit a deal that is already midway through the contract period?',
          tags: ['midway deal', 'rescue', 'takeover', 'existing contract'],
          answer: (
            <p>
              Yes. If you are overwhelmed mid-transaction, our "Mid-Contract Takeover" service allows us to audit the existing file, verify that past contingency dates were satisfied, confirm escrow receipt, and manage the remaining path to close.
            </p>
          )
        }
      ]
    },
    {
      id: 'legal-licensed-duties',
      orderNum: '07',
      title: 'Legal Advice & Licensed Duties Boundaries',
      shortLabel: 'Legal & Licensed Duties',
      icon: ShieldCheck,
      description: 'Clear operational parameters under Florida DBPR regulations and Florida Bar guidelines.',
      items: [
        {
          id: 'legal-1',
          section: 'legal-licensed-duties',
          question: 'Does Hometown TC provide legal advice or interpret complex title defects?',
          tags: ['legal advice', 'florida bar', 'attorney', 'title defect', 'dbpr'],
          answer: (
            <div className="space-y-3">
              <p>
                <strong>No.</strong> Hometown TC operates strictly as an administrative transaction management service in compliance with Florida Department of Business and Professional Regulation (DBPR) rules.
              </p>
              <p>
                We do not give legal advice, interpret complex title defects, or draft custom legal clauses. For legal matters, we facilitate communication directly with the designated closing attorney or title underwriter.
              </p>
            </div>
          )
        },
        {
          id: 'legal-2',
          section: 'legal-licensed-duties',
          question: 'Can Hometown TC draft contract addenda for repair negotiations?',
          tags: ['addenda', 'repair credits', 'amendments', 'negotiation'],
          answer: (
            <p>
              We distribute and format standard FAR/BAR addenda (e.g., standard extension of closing, repair credit, or price change) based strictly on terms already negotiated and agreed upon by the licensed agents. We never negotiate terms directly on your behalf.
            </p>
          )
        }
      ]
    },
    {
      id: 'submission-communication',
      orderNum: '08',
      title: 'Submission & Communication Workflow',
      shortLabel: 'Submission & Comms',
      icon: MessageSquare,
      description: 'How files are transmitted, tracking methods, office hours, and response time standards.',
      items: [
        {
          id: 'comm-1',
          section: 'submission-communication',
          question: 'How do I submit a new executed contract to Hometown TC?',
          tags: ['submission', 'upload', 'intake', 'email deal', 'form'],
          answer: (
            <div className="space-y-3">
              <p>
                You can submit a contract in whichever way is easiest for you:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                <li><strong>Online Submission Portal:</strong> Use our secure, mobile-friendly intake form to upload your executed PDF and enter key contacts in under 3 minutes.</li>
                <li><strong>Direct Email:</strong> Email the executed contract and contact sheets directly to <a href={`mailto:${EMAIL_ADDRESS}`} className="text-[#0D9BA3] font-bold hover:underline">{EMAIL_ADDRESS}</a>.</li>
                <li><strong>Broker Platform Share:</strong> Add us directly as a coordinator inside your Dotloop, SkySlope, Command, or Brokermint loop.</li>
              </ul>
            </div>
          )
        },
        {
          id: 'comm-2',
          section: 'submission-communication',
          question: 'What are your business hours and response time guarantees?',
          tags: ['hours', 'response time', 'weekends', 'availability'],
          answer: (
            <p>
              Our primary operational hours are <strong>Monday through Friday, 8:30 AM to 6:00 PM EST</strong>. Urgent milestone issues (such as same-day inspection deadline extensions or escrow receipt notices) are prioritized promptly. We maintain a standard 2-hour business response window for all agent inquiries.
            </p>
          )
        }
      ]
    },
    {
      id: 'data-security',
      orderNum: '09',
      title: 'Data Privacy & Wire Fraud Security',
      shortLabel: 'Data & Security',
      icon: FolderLock,
      description: 'Rigorous encryption, wire fraud warning protocols, and non-public personal information protection.',
      items: [
        {
          id: 'sec-1',
          section: 'data-security',
          question: 'How does Hometown TC protect my clients against wire fraud?',
          tags: ['wire fraud', 'security', 'cybersecurity', 'wiring instructions'],
          answer: (
            <div className="space-y-3">
              <p>
                Wire fraud is the single greatest financial threat in residential real estate. We implement strict defense protocols:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Never Emailing Wiring Instructions Directly:</strong> We never transmit plain wiring numbers over unencrypted email.</li>
                <li><strong>Verbal Verification Reminders:</strong> Every communication reminds buyers and sellers to verbally verify wiring instructions directly with the title company using a verified phone number prior to sending funds.</li>
                <li><strong>Encrypted Document Handling:</strong> All documents containing Non-Public Personal Information (NPI), such as SSNs or account numbers, are stored in bank-grade secure environments.</li>
              </ul>
            </div>
          )
        },
        {
          id: 'sec-2',
          section: 'data-security',
          question: 'Do you share or market to my client database?',
          tags: ['privacy', 'client database', 'confidentiality', 'non-compete'],
          answer: (
            <p>
              <strong>Never.</strong> Your client relationships and contact data belong 100% to you and your brokerage. We maintain strict non-disclosure, confidentiality, and data privacy standards. We will never market, solicit, or share your clients' information with third parties.
            </p>
          )
        }
      ]
    }
  ];

  // Filtered FAQ items based on search query and category
  const filteredSections = useMemo(() => {
    return faqSections
      .map((section) => {
        if (activeCategory !== 'all' && section.id !== activeCategory) {
          return null;
        }

        const filteredItems = section.items.filter((item) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          const matchQuestion = item.question.toLowerCase().includes(query);
          const matchTags = item.tags.some((t) => t.toLowerCase().includes(query));
          return matchQuestion || matchTags;
        });

        if (filteredItems.length === 0) return null;

        return {
          ...section,
          items: filteredItems
        };
      })
      .filter(Boolean) as typeof faqSections;
  }, [searchQuery, activeCategory]);

  const totalQuestions = faqSections.reduce((acc, sec) => acc + sec.items.length, 0);

  // FAQ Schema for SEO / AEO Rich Results
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSections.flatMap((sec) =>
      sec.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof item.answer === 'string'
            ? item.answer
            : `Hometown TC provides comprehensive transaction coordination for Florida licensed agents. Contact us at ${PHONE_NUMBER} or ${EMAIL_ADDRESS} for direct details.`
        }
      }))
    )
  };

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      {/* Schema.org FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Frequently Asked Questions</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FLORIDA TRANSACTION COORDINATION KNOWLEDGE BASE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
              Frequently Asked Questions <br />
              <span className="text-[#0D9BA3]">Everything You Need to Know</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Clear, transparent answers regarding our Florida service area, scope of practice, plan differences, cancellation policy, bilingual capabilities, and security protocols.
            </p>

            {/* Search Input in Hero */}
            <div className="pt-2">
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g., cancellation, broker compliance, Spanish, Base vs Pro)..."
                  className="w-full bg-white text-[#3A2E29] pl-12 pr-10 py-4 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9BA3] shadow-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookCall}
                className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-xl hover:shadow-[#FE7311]/25 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </button>
              <button
                onClick={onSubmitDeal}
                className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer backdrop-blur-sm"
              >
                <Send className="w-4 h-4 text-[#0D9BA3]" />
                <span>Submit an Executed Deal</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY JUMP BAR & EXPAND/COLLAPSE CONTROLS */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#D8D2D4] shadow-sm py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs font-bold">
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#3A2E29] text-white'
                  : 'bg-[#EEEAEB] text-[#3A2E29] hover:bg-[#D8D2D4]'
              }`}
            >
              All Questions ({totalQuestions})
            </button>
            {faqSections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveCategory(sec.id);
                  setSearchQuery('');
                }}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition cursor-pointer ${
                  activeCategory === sec.id
                    ? 'bg-[#0D9BA3] text-white'
                    : 'bg-[#EEEAEB] text-slate-700 hover:bg-[#D8D2D4]'
                }`}
              >
                {sec.shortLabel}
              </button>
            ))}
          </div>

          {/* Quick Actions (Expand/Collapse) */}
          <div className="flex items-center space-x-3 text-xs font-bold text-slate-500 flex-shrink-0">
            <button
              onClick={expandAll}
              className="hover:text-[#0D9BA3] transition cursor-pointer underline"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-[#0D9BA3] transition cursor-pointer underline"
            >
              Collapse All
            </button>
          </div>

        </div>
      </section>

      {/* 3. STRUCTURED FAQ SECTIONS (IN EXACT MANDATED ORDER) */}
      <section className="py-16 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {filteredSections.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#D8D2D4] p-8 space-y-4">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-xl font-bold text-[#3A2E29]">No matching questions found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any questions matching "{searchQuery}". Try searching for terms like "deposit", "cancel", "broker", "spanish", or book a call with Michelle.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2.5 bg-[#3A2E29] text-white rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                Clear Search Query
              </button>
            </div>
          </div>
        ) : (
          filteredSections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.id} id={sec.id} className="space-y-6 scroll-mt-36">
                
                {/* Section Header */}
                <div className="flex items-start space-x-4 border-b border-[#D8D2D4] pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#3A2E29] text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <Icon className="w-5 h-5 text-[#0D9BA3]" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-[11px] font-extrabold uppercase tracking-widest text-[#0D9BA3]">
                      <span>SECTION {sec.orderNum}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
                      {sec.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {sec.description}
                    </p>
                  </div>
                </div>

                {/* Question Accordion List */}
                <div className="space-y-4">
                  {sec.items.map((item) => {
                    const isOpen = !!openItems[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`bg-white rounded-2xl border transition shadow-sm overflow-hidden ${
                          isOpen ? 'border-[#0D9BA3] ring-1 ring-[#0D9BA3]/20' : 'border-[#D8D2D4] hover:border-slate-400'
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full p-5 sm:p-6 text-left flex items-start justify-between space-x-4 cursor-pointer"
                        >
                          <span className="font-bold text-sm sm:text-base text-[#3A2E29] leading-snug">
                            {item.question}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-[#EEEAEB] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#3A2E29]">
                            {isOpen ? <ChevronUp className="w-4 h-4 text-[#0D9BA3]" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-[#D8D2D4]/50 pt-4 bg-[#EEEAEB]/20">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })
        )}

      </section>

      {/* 4. FAST TOPIC SHORTCUTS */}
      <section className="py-16 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-[#3A2E29] font-serif">
              Looking for Specific Coordination Details?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore our specialized operational pages for deep dives on regional practices and pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={onOpenPricing}
              className="p-5 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] hover:border-[#0D9BA3] text-left space-y-2 transition group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-[#3A2E29] text-white flex items-center justify-center group-hover:bg-[#0D9BA3] transition">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#3A2E29]">Pricing & Plans Matrix</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Full feature matrix for Base ($375) vs Pro ($475).</p>
            </button>

            <button
              onClick={onOpenContractToClose}
              className="p-5 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] hover:border-[#0D9BA3] text-left space-y-2 transition group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-[#3A2E29] text-white flex items-center justify-center group-hover:bg-[#0D9BA3] transition">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#3A2E29]">Contract-to-Close Process</h4>
              <p className="text-xs text-slate-600 leading-relaxed">The 5-phase timeline from execution to funding.</p>
            </button>

            <button
              onClick={onOpenRealtorTc}
              className="p-5 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] hover:border-[#0D9BA3] text-left space-y-2 transition group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-[#3A2E29] text-white flex items-center justify-center group-hover:bg-[#0D9BA3] transition">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#3A2E29]">Realtor® Workflow & Fiduciary</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Licensed duties vs back-office compliance.</p>
            </button>

            <button
              onClick={onOpenMiamiDadeTc}
              className="p-5 bg-[#EEEAEB] rounded-2xl border border-[#D8D2D4] hover:border-[#0D9BA3] text-left space-y-2 transition group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-[#3A2E29] text-white flex items-center justify-center group-hover:bg-[#0D9BA3] transition">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#3A2E29]">Miami-Dade & Tri-County</h4>
              <p className="text-xs text-slate-600 leading-relaxed">WASD/DERM, condo SB 4-D, and county customs.</p>
            </button>
          </div>

        </div>
      </section>

      {/* 5. FINAL HIGH-CONVERSION CTA */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FE7311]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Still Have a Question?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
              Have a Specific Question About Your Next Deal?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Speak directly with Michelle Martinez. We'll discuss your brokerage requirements, transaction volume, and how Hometown TC can streamline your closing pipeline immediately.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 bg-[#FE7311] hover:bg-[#e06209] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-xl hover:shadow-[#FE7311]/25 cursor-pointer flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </button>
              <button
                onClick={onSubmitDeal}
                className="w-full sm:w-auto px-7 py-4 bg-[#0D9BA3] hover:bg-[#0b868d] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit an Executed Deal ($375)</span>
              </button>
              <button
                onClick={onOpenPricing}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer border border-white/20"
              >
                View Plans & Pricing
              </button>
            </div>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400">
              <span>Direct Phone: <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a></span>
              <span>•</span>
              <span>Email: <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white font-bold hover:underline">{EMAIL_ADDRESS}</a></span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
