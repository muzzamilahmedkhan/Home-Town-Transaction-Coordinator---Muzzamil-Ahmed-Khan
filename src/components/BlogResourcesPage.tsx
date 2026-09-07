import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  ArrowRight,
  Clock,
  ShieldCheck,
  UserCheck,
  Calendar,
  Calculator,
  FileText,
  BookOpen,
  Newspaper,
  CheckCircle2,
  Sparkles,
  Layers,
  HelpCircle,
  Bookmark,
  FolderOpen,
  Paperclip,
  Download
} from 'lucide-react';
import { DEMO_BLOG_POSTS, BLOG_CATEGORIES } from '../data/blog';

interface Props {
  onGoHome: () => void;
  onOpenPost: (slug: string) => void;
  onBookCall: () => void;
  onOpenCalculator?: (hash?: string) => void;
  onOpenGuides?: () => void;
  onExploreServices?: () => void;
}

// Permanent Topic Navigation Items with SEO-friendly URL hash slugs
export interface TopicNavItem {
  label: string;
  slug: string;
}

export const TOPIC_NAV_ITEMS: TopicNavItem[] = [
  { label: 'All Dispatches', slug: '' },
  { label: 'Florida Contracts + Forms', slug: 'florida-contracts-forms' },
  { label: 'Transaction Operations', slug: 'transaction-operations' },
  { label: 'Broker Compliance', slug: 'broker-compliance' },
  { label: 'Condo + HOA', slug: 'condo-hoa' },
  { label: 'Agent Growth + Leverage', slug: 'agent-growth-leverage' },
  { label: 'Florida Real Estate Updates', slug: 'florida-real-estate-updates' }
];

// Editorial placeholder items representing future content drop-in slots
interface PlaceholderBrief {
  id: string;
  category: string;
  title: string;
  oneQuestion: string;
  oneAnswer: string;
  readTime: string;
  author: string;
  reviewer: string;
  isPlaceholder: true;
}

const FUTURE_PLACEHOLDER_BRIEFS: PlaceholderBrief[] = [
  {
    id: 'placeholder-1',
    category: 'Florida Contracts + Forms',
    title: '[Field Note Placeholder] Financing Contingency Periods & Loan Approval Deadlines',
    oneQuestion: 'What constitutes written Loan Approval under Paragraph 8 of the Florida FAR/BAR contract?',
    oneAnswer: 'Reserved slot for HTC legal and contract brief. Detailed analysis of buyer notification windows, underwriting condition waivers, and escrow liability upon cancellation.',
    readTime: '5 min read',
    author: 'HTC Editorial Desk',
    reviewer: 'Florida Real Estate Attorney',
    isPlaceholder: true
  },
  {
    id: 'placeholder-2',
    category: 'Transaction Operations',
    title: '[Field Note Placeholder] Municipality Lien Searches vs. Title Commitments in South Florida',
    oneQuestion: 'Why does standard title insurance not cover unrecorded municipal code violations in Miami-Dade & Broward?',
    oneAnswer: 'Reserved slot for title coordination brief. Walkthrough of unrecorded utility balances, open building permits, and special assessment payoff timelines.',
    readTime: '6 min read',
    author: 'HTC Operations Team',
    reviewer: 'Licensed Title Agent',
    isPlaceholder: true
  },
  {
    id: 'placeholder-3',
    category: 'Broker Compliance',
    title: '[Brief Placeholder] FREC Rule 61J2 Broker File Retention Requirements',
    oneQuestion: 'How long must Florida real estate brokerages preserve transaction records and communications?',
    oneAnswer: 'Reserved slot for broker compliance guide. Breakdown of the mandatory 5-year retention rule, digital archive standards, and audit preparation protocols.',
    readTime: '4 min read',
    author: 'Michelle Martinez, PA',
    reviewer: 'Broker Compliance Specialist',
    isPlaceholder: true
  },
  {
    id: 'placeholder-4',
    category: 'Condo + HOA',
    title: '[Field Note Placeholder] Managing 30-Day HOA Approval Turnarounds Without Closing Delays',
    oneQuestion: 'How can agents prevent contract extensions when an association takes the full statutory 30 days to approve a buyer?',
    oneAnswer: 'Reserved slot for HOA operations brief. Pre-submission application audits, rush fee protocols, and proactive interview scheduling workflows.',
    readTime: '5 min read',
    author: 'HTC Operations Team',
    reviewer: 'Michelle Martinez, PA',
    isPlaceholder: true
  },
  {
    id: 'placeholder-5',
    category: 'Agent Growth + Leverage',
    title: '[Brief Placeholder] The 15-Hour Agent: Administrative Bottlenecks in Single-Agent Production',
    oneQuestion: 'How many weekly hours does an agent spend on contract compliance, escrow tracking, and closing administration?',
    oneAnswer: 'Reserved slot for agent leverage brief. Time-audit modeling of transaction paperwork vs. client-facing prospecting and dollar-productive activities.',
    readTime: '5 min read',
    author: 'HTC Operations Team',
    reviewer: 'Michelle Martinez, PA',
    isPlaceholder: true
  },
  {
    id: 'placeholder-6',
    category: 'Florida Real Estate Updates',
    title: '[Field Note Placeholder] 2026 Florida Legislative Updates Impacting Property Disclosures',
    oneQuestion: 'What statutory flood, insurance, and HOA disclosures are required for Florida residential transactions in 2026?',
    oneAnswer: 'Reserved slot for legislative and regulatory brief. Summary of updated Florida statutory seller disclosures, flood history advisories, and contract riders.',
    readTime: '6 min read',
    author: 'HTC Editorial Desk',
    reviewer: 'Florida Real Estate Attorney',
    isPlaceholder: true
  }
];

// SECTION 4 — WORTH 3 MINUTES: Three fast-read article placeholders
export interface Worth3MinutesItem {
  id: string;
  category: string;
  categoryPlaceholder: string;
  title: string;
  titlePlaceholder: string;
  oneSentenceSummary: string;
  summaryPlaceholder: string;
  readTime: string;
  readTimePlaceholder: string;
  slug?: string;
  columnTag: string;
  citation: string;
}

export const WORTH_3_MINUTES_ITEMS: Worth3MinutesItem[] = [
  {
    id: 'w3m-1',
    category: 'Florida Contracts + Forms',
    categoryPlaceholder: '[CATEGORY]',
    title: 'The 5:00 PM Hard Notice Cut-Off Rule Under Florida FAR/BAR',
    titlePlaceholder: '[ARTICLE TITLE]',
    oneSentenceSummary: 'Delivering an inspection cancellation notice even five minutes past 5:00 PM on the final day forfeits buyer deposit protection under Standard FAR/BAR Paragraph 18.',
    summaryPlaceholder: '[ONE-SENTENCE SUMMARY]',
    readTime: '2 min read',
    readTimePlaceholder: '[READ TIME]',
    slug: 'navigating-far-bar-as-is-inspection-periods',
    columnTag: 'COLUMN I • 120 SECONDS',
    citation: 'FAR/BAR AS-IS § 18(F)'
  },
  {
    id: 'w3m-2',
    category: 'Condo + HOA',
    categoryPlaceholder: '[CATEGORY]',
    title: 'Milestone Inspection SIRS Deadlines vs. Buyer Underwriting',
    titlePlaceholder: '[ARTICLE TITLE]',
    oneSentenceSummary: 'Florida condo structural reserve shortfalls cause immediate lender underwriting rejection unless association reserve documentation is audited in week one.',
    summaryPlaceholder: '[ONE-SENTENCE SUMMARY]',
    readTime: '3 min read',
    readTimePlaceholder: '[READ TIME]',
    slug: 'condo-milestone-inspections-sb-4d',
    columnTag: 'COLUMN II • 180 SECONDS',
    citation: 'FL STATUTES § 718.112'
  },
  {
    id: 'w3m-3',
    category: 'Transaction Operations',
    categoryPlaceholder: '[CATEGORY]',
    title: 'Escrow Calendar Computation: Counting Days Without Disqualification',
    titlePlaceholder: '[ARTICLE TITLE]',
    oneSentenceSummary: 'Initial deposit deadlines run on strict calendar days unless the final day falls on a weekend or state holiday, shifting the cut-off to 5:00 PM Monday.',
    summaryPlaceholder: '[ONE-SENTENCE SUMMARY]',
    readTime: '2 min read',
    readTimePlaceholder: '[READ TIME]',
    slug: 'earnest-money-disputes-freo-guidance',
    columnTag: 'COLUMN III • 120 SECONDS',
    citation: 'FREC RULE 61J2-14'
  }
];

// SECTION 5 — FROM THE FILE: HTC Field Notes placeholders
export interface FromTheFilePlaceholder {
  id: string;
  fileNumber: string;
  searchableTitlePlaceholder: string;
  editorialKickerPlaceholder: string;
  shortSummaryPlaceholder: string;
  readTimePlaceholder: string;
  slug?: string;
  tabLabel: string;
  caseTag: string;
}

export const FROM_THE_FILE_PLACEHOLDERS: FromTheFilePlaceholder[] = [
  {
    id: 'file-note-1',
    fileNumber: 'FILE #FL-2026-001',
    tabLabel: 'ESCROW & DEPOSITS',
    caseTag: 'MIAMI-DADE RESIDENTIAL',
    editorialKickerPlaceholder: '[EDITORIAL KICKER / FIELD NOTE TITLE: The 48-Hour Escrow Stand-Off]',
    searchableTitlePlaceholder: '[SEARCHABLE ARTICLE TITLE: Navigating Conflicting Escrow Demands Under Florida Real Estate Commission Guidelines]',
    shortSummaryPlaceholder: '[SHORT SUMMARY: Reserved for HTC Field Note. Real-world observations from active transaction files regarding buyer and seller escrow disputes, 15-day notice cut-offs, and avoiding costly interpleader actions. HTC will provide actual observation copy.]',
    readTimePlaceholder: '[READ TIME: 4 min read]',
    slug: 'earnest-money-disputes-freo-guidance'
  },
  {
    id: 'file-note-2',
    fileNumber: 'FILE #FL-2026-002',
    tabLabel: 'PERMITS & ADDENDA',
    caseTag: 'BROWARD SINGLE-FAMILY',
    editorialKickerPlaceholder: '[EDITORIAL KICKER / FIELD NOTE TITLE: The Unpermitted Florida Room Trap]',
    searchableTitlePlaceholder: '[SEARCHABLE ARTICLE TITLE: Handling Unpermitted Enclosures and Municipal Code Liens Under FAR/BAR Standard X]',
    shortSummaryPlaceholder: '[SHORT SUMMARY: Reserved for HTC Field Note. Recurring field scenario where buyer inspections reveal unpermitted square footage additions right before title commitment delivery. HTC will provide actual observation copy.]',
    readTimePlaceholder: '[READ TIME: 3 min read]',
    slug: 'navigating-far-bar-as-is-inspection-periods'
  },
  {
    id: 'file-note-3',
    fileNumber: 'FILE #FL-2026-003',
    tabLabel: 'CONDO RESERVES (SIRS)',
    caseTag: 'PALM BEACH HI-RISE',
    editorialKickerPlaceholder: '[EDITORIAL KICKER / FIELD NOTE TITLE: The 11th-Hour Reserve Disclosure]',
    searchableTitlePlaceholder: '[SEARCHABLE ARTICLE TITLE: Structural Integrity Reserve Shortfalls and Immediate Lender Underwriting Holds]',
    shortSummaryPlaceholder: '[SHORT SUMMARY: Reserved for HTC Field Note. Practical lessons from condo files where delayed association document delivery jeopardized buyer loan commitments within 7 days of closing. HTC will provide actual observation copy.]',
    readTimePlaceholder: '[READ TIME: 5 min read]',
    slug: 'condo-milestone-inspections-sb-4d'
  }
];

// Section 7: Browse By Topic Data Structure & Articles
export interface TopicBrowseArticle {
  id: string;
  slug?: string;
  placeholderTitle: string;
  sampleTitle: string;
  placeholderSummary: string;
  sampleSummary: string;
  readTime: string;
}

export interface TopicBrowseSection {
  category: string;
  slug: string;
  sectionCode: string;
  description: string;
  articles: TopicBrowseArticle[];
}

export const TOPIC_BROWSE_SECTIONS: TopicBrowseSection[] = [
  {
    category: 'Florida Contracts + Forms',
    slug: 'florida-contracts-forms',
    sectionCode: 'DESK 01',
    description: 'Contract deadlines, repair addenda, appraisal gaps, and FAR/BAR compliance rules.',
    articles: [
      {
        id: 'contracts-1',
        slug: 'navigating-far-bar-as-is-inspection-periods',
        placeholderTitle: '[ARTICLE TITLE: Navigating FAR/BAR "AS IS" Inspection Periods in Florida]',
        sampleTitle: 'Navigating FAR/BAR "AS IS" Inspection Periods in Florida',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Detailed breakdown of computing Standard F inspection time, repair notice deadlines, and retaining earnest money leverage.]',
        sampleSummary: 'A deep dive into computing time, repair requests, and maintaining leverage during the critical 15-day inspection window on Florida residential contracts.',
        readTime: '6 min read'
      },
      {
        id: 'contracts-2',
        placeholderTitle: '[ARTICLE TITLE: Loan Approval Contingency vs. Underwriting Commitment]',
        sampleTitle: 'Loan Approval Contingency vs. Underwriting Commitment under Paragraph 8',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Notice requirements when lenders issue conditional approval letters versus binding closing commitments.]',
        sampleSummary: 'Why conditional pre-approvals do not satisfy Florida contract financing provisions and how to protect deposits if underwriting stalls.',
        readTime: '5 min read'
      },
      {
        id: 'contracts-3',
        placeholderTitle: '[ARTICLE TITLE: Drafting Flawless Appraisal Shortfall Addenda in Volatile Markets]',
        sampleTitle: 'Appraisal Shortfall Addenda: Limiting Buyer Out-of-Pocket Traps',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Nuances between waiving the appraisal contingency entirely versus establishing hard buyer cash gap limits.]',
        sampleSummary: 'Contract language tips for structuring appraisal gap coverage without exposing buyer clients to unlimited cash-to-close obligations.',
        readTime: '4 min read'
      }
    ]
  },
  {
    category: 'Transaction Operations',
    slug: 'transaction-operations',
    sectionCode: 'DESK 02',
    description: 'Escrow procedures, municipal lien audits, and coordination workflows across 67 counties.',
    articles: [
      {
        id: 'ops-1',
        slug: 'earnest-money-disputes-freo-guidance',
        placeholderTitle: '[ARTICLE TITLE: Handling Earnest Money Disputes: FREC Escrow Disbursement Guidance]',
        sampleTitle: 'Handling Earnest Money Disputes: FREC Escrow Disbursement Orders',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Step-by-step procedures when buyers and sellers submit conflicting earnest deposit release demands.]',
        sampleSummary: 'When buyers and sellers fail to agree on earnest deposit releases, brokerages must act within 15 days to initiate FREC resolution options.',
        readTime: '5 min read'
      },
      {
        id: 'ops-2',
        placeholderTitle: '[ARTICLE TITLE: Municipal Lien Searches vs. Title Insurance in South Florida]',
        sampleTitle: 'Why Title Insurance Won’t Save You from Unrecorded Municipal Fines',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: The operational necessity of running separate municipal lien and permit searches in Miami-Dade & Broward.]',
        sampleSummary: 'Standard title policies exclude unrecorded municipal code violations, expired permits, and unpaid water utilities until closing.',
        readTime: '6 min read'
      },
      {
        id: 'ops-3',
        placeholderTitle: '[ARTICLE TITLE: Pre-Closing Walkthrough Protocol: Incomplete Repair Escrows]',
        sampleTitle: 'Walkthrough Surprises: Structuring Repair Escrows & Holdback Agreements',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Protocols for handling uncompleted seller repairs on the morning of scheduled title execution.]',
        sampleSummary: 'What title underwriters and mortgage lenders require before approving repair escrow holdbacks on final execution morning.',
        readTime: '4 min read'
      }
    ]
  },
  {
    category: 'Broker Compliance',
    slug: 'broker-compliance',
    sectionCode: 'DESK 03',
    description: 'DBPR/FREC audit preparation, mandatory file retention rules, and digital security.',
    articles: [
      {
        id: 'compliance-1',
        placeholderTitle: '[ARTICLE TITLE: FREC Rule 61J2 Broker File Retention Requirements]',
        sampleTitle: 'FREC Rule 61J2 Broker Retention: 5-Year Compliance Audit Checklist',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Statutory rules governing transaction document preservation, text message archiving, and audit files.]',
        sampleSummary: 'A practical breakdown of mandatory 5-year document retention schedules, cloud archiving standards, and preparation for random state audits.',
        readTime: '5 min read'
      },
      {
        id: 'compliance-2',
        placeholderTitle: '[ARTICLE TITLE: Florida Real Estate Advertising Rules: Teams, Logos & Disclosures]',
        sampleTitle: 'Florida Real Estate Advertising: Team Names, Logos & Rule 61J2 Compliance',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Ensuring team branding prominently reflects licensed brokerages across all marketing channels.]',
        sampleSummary: 'Clear rules for team font sizes, logo visibility, and point-of-contact information to prevent costly DBPR advertising citations.',
        readTime: '4 min read'
      },
      {
        id: 'compliance-3',
        placeholderTitle: '[ARTICLE TITLE: MLS Clear Cooperation Policies & Public Marketing Timelines]',
        sampleTitle: 'Clear Cooperation Compliance: Navigating MLS Public Marketing Timelines',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Tracking mandatory 1-business-day MLS submission deadlines after public marketing commences.]',
        sampleSummary: 'Avoiding MLS compliance fines and automatic violation notices when marketing off-market or coming-soon listings across Florida.',
        readTime: '4 min read'
      }
    ]
  },
  {
    category: 'Condo + HOA',
    slug: 'condo-hoa',
    sectionCode: 'DESK 04',
    description: 'SB 4-D milestone inspections, structural reserves (SIRS), and association approval timelines.',
    articles: [
      {
        id: 'condo-1',
        slug: 'condo-milestone-inspections-sb-4d',
        placeholderTitle: '[ARTICLE TITLE: How SB 4-D Milestone Inspections Impact Condo Closings]',
        sampleTitle: 'How SB 4-D Milestone Inspections Impact South Florida Condo Closings',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Navigating structural reserve funding mandates and lender Fannie/Freddie blacklist risks.]',
        sampleSummary: 'What South Florida agents need to know about new structural integrity reserves and how incomplete studies delay mortgage commitments.',
        readTime: '8 min read'
      },
      {
        id: 'condo-2',
        placeholderTitle: '[ARTICLE TITLE: Preventing 30-Day HOA Approval Bottlenecks from Delaying Closings]',
        sampleTitle: 'Managing the 30-Day HOA Approval Window Without Contract Extensions',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Pre-screening board applications, rush fees, and interview coordination workflows.]',
        sampleSummary: 'Standardized operational procedures to ensure buyer packages pass HOA scrutiny before statutory approval windows jeopardize closing dates.',
        readTime: '5 min read'
      },
      {
        id: 'condo-3',
        placeholderTitle: '[ARTICLE TITLE: Condo Resale Document Delivery: Computing the 3-Day Right of Rescission]',
        sampleTitle: 'Condo Resale Disclosures: Calculating the Statutory 3-Day Cancellation Right',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: When the 3-day right to void actually begins and why missing governing docs keep contracts open.]',
        sampleSummary: 'Why providing incomplete association FAQ sheets or missing financial statements prevents the buyer’s statutory rescission clock from running.',
        readTime: '6 min read'
      }
    ]
  },
  {
    category: 'Agent Growth + Leverage',
    slug: 'agent-growth-leverage',
    sectionCode: 'DESK 05',
    description: 'Time audits, administrative offloading, and transaction math for solo agents and top teams.',
    articles: [
      {
        id: 'growth-1',
        placeholderTitle: '[ARTICLE TITLE: The 15-Hour Agent: Administrative Bottlenecks in Production]',
        sampleTitle: 'The 15-Hour Agent: How Admin Chores Steal $85,000+ in Commission',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Time-audit data tracking hours spent chasing earnest money receipts vs. dollar-productive activities.]',
        sampleSummary: 'A mathematical audit showing how spending 12–15 hours per file on paperwork limits full-time agents to 12 closed sides per year.',
        readTime: '5 min read'
      },
      {
        id: 'growth-2',
        placeholderTitle: '[ARTICLE TITLE: Hiring an In-House Assistant vs. Partnering with HTC]',
        sampleTitle: 'In-House Assistant vs. HTC: Comparing True Overhead and Liability',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Fixed annual payroll, taxes, and vacation coverage vs. HTC’s zero-retainer, per-file pricing.]',
        sampleSummary: 'Why hiring a salaried assistant costs $62,000+ annually with payroll taxes and turnover risk compared to HTC’s variable per-closing model.',
        readTime: '6 min read'
      },
      {
        id: 'growth-3',
        placeholderTitle: '[ARTICLE TITLE: The 20% Capacity Model: Reallocating Time for Scaled Production]',
        sampleTitle: 'The 20% Capacity Model: Scaling Deal Volume Without Adding Work Hours',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Reinvesting 60 freed monthly hours into high-converting client relationships and buyer showings.]',
        sampleSummary: 'How top Florida producers use specialized contract coordination to close 3 to 6 additional transactions every year without burning out.',
        readTime: '5 min read'
      }
    ]
  },
  {
    category: 'Florida Real Estate Updates',
    slug: 'florida-real-estate-updates',
    sectionCode: 'DESK 06',
    description: 'Legislative statutes, Citizens property insurance updates, and state-wide closing conventions.',
    articles: [
      {
        id: 'updates-1',
        placeholderTitle: '[ARTICLE TITLE: 2026 Florida Legislative Updates Impacting Property Disclosures]',
        sampleTitle: '2026 Florida Statutory Property Disclosures: Flood History & Insurance Updates',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Newly enacted statutory flood disclosure requirements and seller representation mandates.]',
        sampleSummary: 'An executive summary of Florida’s latest mandatory flood disclosures, revised homeowner association riders, and contract addenda.',
        readTime: '5 min read'
      },
      {
        id: 'updates-2',
        placeholderTitle: '[ARTICLE TITLE: Citizens Insurance Underwriting Realities & 4-Point Inspection Rules]',
        sampleTitle: 'Navigating Citizens Insurance & 4-Point Inspection Standards in 2026',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Roof age thresholds, electrical panel guidelines, and wind mitigation credits in South Florida.]',
        sampleSummary: 'How to manage contract insurance contingencies when older roofs and outdated plumbing trigger last-minute carrier rejections.',
        readTime: '7 min read'
      },
      {
        id: 'updates-3',
        placeholderTitle: '[ARTICLE TITLE: Florida Remote Online Notarization (RON) in Title Closings]',
        sampleTitle: 'Remote Online Notarization (RON): What Out-of-State Clients Need Before Closing',
        placeholderSummary: '[1–2 SENTENCE SUMMARY: Identity verification standards, tech requirements, and closing-day coordination protocols.]',
        sampleSummary: 'Ensuring out-of-state and international buyers navigate biometric identification and digital signing workflows smoothly.',
        readTime: '4 min read'
      }
    ]
  }
];

export const BlogResourcesPage: React.FC<Props> = ({
  onGoHome,
  onOpenPost,
  onBookCall,
  onOpenCalculator,
  onOpenGuides,
  onExploreServices
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Dispatches');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [editorialMode, setEditorialMode] = useState<'placeholders' | 'sample'>('placeholders');

  // Handle URL hash routing for crawlable topic categories
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const matched = TOPIC_NAV_ITEMS.find(item => item.slug === hash);
        if (matched) {
          setActiveCategory(matched.label);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'The Hometown Brief | Florida Real Estate Answer Library | Hometown TC';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalMetaContent = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'The Hometown Brief: Florida real estate operations without the fluff. Quick, practical answers on contracts, transaction coordination, compliance, and closing workflows.'
      );
    }

    // Structured Data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'hometown-brief-schema';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'The Hometown Brief',
      description: 'Florida real estate operations, without the fluff. Quick, practical answers on contracts, transaction operations, compliance, growth, and the work behind the closing.',
      url: typeof window !== 'undefined' ? `${window.location.origin}/resources/` : 'https://hometowntc.com/resources/',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: typeof window !== 'undefined' ? window.location.origin : 'https://hometowntc.com'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'The Hometown Brief',
            item: typeof window !== 'undefined' ? `${window.location.origin}/resources/` : 'https://hometowntc.com/resources/'
          }
        ]
      }
    });
    document.head.appendChild(schemaScript);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalMetaContent) {
        metaDesc.setAttribute('content', originalMetaContent);
      }
      const existing = document.getElementById('hometown-brief-schema');
      if (existing) existing.remove();
    };
  }, []);

  // Filter posts based on permanent topic category and search query
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return DEMO_BLOG_POSTS.filter(post => {
      const matchesCategory =
        activeCategory === 'All Dispatches' ||
        post.category === activeCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  // Filtered placeholders
  const filteredPlaceholders = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return FUTURE_PLACEHOLDER_BRIEFS.filter(item => {
      const matchesCategory =
        activeCategory === 'All Dispatches' ||
        item.category === activeCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      return (
        item.title.toLowerCase().includes(query) ||
        item.oneQuestion.toLowerCase().includes(query) ||
        item.oneAnswer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = DEMO_BLOG_POSTS.find(p => p.featured) || DEMO_BLOG_POSTS[0];

  const handleSeeAllTopic = (category: string, slug: string) => {
    setActiveCategory(category);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', slug ? `/resources/#${slug}` : '/resources/');
    }
    const archiveHeading = document.getElementById('briefs-archive-heading');
    if (archiveHeading) {
      archiveHeading.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#2B231F] font-sans selection:bg-[#0D9BA3]/20 selection:text-[#2B231F]">
      
      {/* ========================================================================= */}
      {/* SECTION 1 — MASTHEAD / HERO (Newspaper Style)                             */}
      {/* ========================================================================= */}
      <header className="border-b border-[#3A2E29]/20 bg-[#F8F6F0]">
        
        {/* Top Newspaper Utility Bar / Dateline */}
        <div className="border-b border-[#3A2E29]/15 text-[11px] font-mono uppercase tracking-widest text-[#3A2E29]/70 py-2 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-[#0D9BA3]">THE HOMETOWN BRIEF</span>
              <span className="text-[#3A2E29]/30">•</span>
              <span>SOUTH FLORIDA & STATEWIDE EDITION</span>
            </div>
            <div className="flex items-center space-x-3">
              <span>PUBLISHED BY HOMETOWN TITLE & CLOSING</span>
              <span className="text-[#3A2E29]/30">•</span>
              <span className="font-semibold text-[#3A2E29]">AN EVERGREEN ANSWER LIBRARY</span>
            </div>
          </div>
        </div>

        {/* Main Masthead Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 sm:pt-12 sm:pb-8 text-center space-y-4">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] text-[#0D9BA3]">
            <Newspaper className="w-4 h-4 text-[#0D9BA3]" />
            <span>THE HOMETOWN BRIEF</span>
          </div>

          {/* Newspaper Nameplate / Grand Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-[#2B231F] tracking-tight leading-none uppercase select-none">
            The Hometown Brief
          </h1>

          {/* Editorial Double Rule */}
          <div className="max-w-4xl mx-auto pt-1 pb-1">
            <div className="border-t-2 border-b border-[#2B231F]/80 py-1">
              <p className="text-base sm:text-xl md:text-2xl font-serif font-medium text-[#2B231F] italic">
                Florida real estate operations, without the fluff.
              </p>
            </div>
          </div>

          {/* Explanatory Paragraph */}
          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-[#2B231F]/80 leading-relaxed font-normal">
            Quick, practical answers on contracts, transaction operations, compliance, growth, and the work behind the closing.
          </p>

          {/* Supporting Core Line Badge */}
          <div className="pt-1">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-[#D8D2D4] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0D9BA3]" />
              <span className="text-xs sm:text-sm font-serif font-bold text-[#2B231F]">
                One question. One Brief. One useful answer.
              </span>
            </div>
          </div>

          {/* Prominent Search Field */}
          <div className="pt-6 max-w-2xl mx-auto">
            <div className="space-y-2 text-left">
              <label 
                htmlFor="hometown-brief-search" 
                className="block text-xs font-mono font-bold uppercase tracking-wider text-[#2B231F]/80"
              >
                Search The Hometown Brief
              </label>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[#0D9BA3]" />
                </div>
                <input
                  id="hometown-brief-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search escrow, condo docs, transaction coordinators..."
                  className="w-full pl-12 pr-10 py-3.5 bg-white border-2 border-[#3A2E29]/30 rounded-xl text-sm sm:text-base text-[#2B231F] placeholder-[#2B231F]/40 font-medium focus:outline-none focus:border-[#0D9BA3] focus:ring-2 focus:ring-[#0D9BA3]/20 shadow-inner transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#2B231F]/40 hover:text-[#2B231F] transition cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Suggestion Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-[#2B231F]/70">
                <span className="font-mono uppercase font-bold text-[#0D9BA3]">Popular:</span>
                {[
                  'FAR/BAR "AS IS"',
                  'SB 4-D Milestone',
                  'Escrow Disputes',
                  'Broker Compliance',
                  'Transaction Coordinators'
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="bg-white/80 hover:bg-white border border-[#D8D2D4] px-2.5 py-0.5 rounded-md hover:border-[#0D9BA3] hover:text-[#0D9BA3] transition cursor-pointer font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2 — TOPIC NAVIGATION (Newspaper Section Navigation)                */}
        {/* ========================================================================= */}
        <section 
          aria-label="Topics Navigation" 
          className="border-t-2 border-b border-[#3A2E29]/25 bg-[#F2EDE4]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav 
              className="flex items-stretch justify-start lg:justify-center overflow-x-auto scrollbar-none divide-x divide-[#3A2E29]/15"
              aria-label="Newspaper Department Navigation"
            >
              {TOPIC_NAV_ITEMS.map(item => {
                const isActive = activeCategory === item.label;
                const href = item.slug ? `/resources/#${item.slug}` : '/resources/';
                return (
                  <a
                    key={item.label}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(item.label);
                      if (item.slug) {
                        window.history.replaceState(null, '', `/resources/#${item.slug}`);
                      } else {
                        window.history.replaceState(null, '', '/resources/');
                      }
                    }}
                    className={`whitespace-nowrap px-3.5 sm:px-4 py-3 text-xs sm:text-[13px] font-serif transition-colors relative flex items-center space-x-1.5 focus:outline-none focus:bg-white/60 select-none ${
                      isActive
                        ? 'font-bold text-[#0D9BA3] bg-white/70 shadow-inner'
                        : 'text-[#2B231F]/80 hover:text-[#0D9BA3] hover:bg-white/40 font-medium'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9BA3] flex-shrink-0" />
                    )}
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0D9BA3]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        </section>

      </header>

      {/* ========================================================================= */}
      {/* MAIN NEWSPAPER SPREAD BODY                                                */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Search status feedback */}
        {searchQuery && (
          <div className="flex items-center justify-between bg-white border border-[#0D9BA3]/30 p-4 rounded-xl shadow-sm">
            <div className="text-xs sm:text-sm text-[#2B231F]">
              Showing results for <span className="font-bold text-[#0D9BA3]">"{searchQuery}"</span> in <span className="font-semibold">{activeCategory}</span>
              {' • '}{filteredPosts.length + filteredPlaceholders.length} items found
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-[#FE7311] hover:underline cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 3 — LEAD STORY (Front-Page Centerpiece Dispatch)                   */}
        {/* ========================================================================= */}
        {!searchQuery && activeCategory === 'All Dispatches' && (
          <section aria-labelledby="lead-story-heading" className="space-y-4">
            
            {/* Front-Page Masthead Eyebrow Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-[#2B231F] gap-3">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#FE7311]/15 text-[#FE7311] font-mono text-xs font-bold uppercase tracking-widest border border-[#FE7311]/30">
                  <span className="w-2 h-2 rounded-full bg-[#FE7311] animate-pulse" />
                  <span>TODAY’S BRIEF</span>
                </span>
                <span className="text-xs font-mono font-medium text-[#2B231F]/60 hidden sm:inline">
                  MIAMI & PALM BEACH BROADSHEET • VOL. XXIV
                </span>
              </div>

              {/* Editorial View Switcher for Client Review */}
              <div className="flex items-center space-x-2 bg-[#F2EDE4] p-1 rounded-lg border border-[#3A2E29]/20 self-start sm:self-auto text-xs font-mono">
                <span className="text-[10px] uppercase font-bold text-[#3A2E29]/60 px-1.5">View:</span>
                <button
                  onClick={() => setEditorialMode('placeholders')}
                  className={`px-2.5 py-1 rounded font-bold uppercase tracking-wider transition-all cursor-pointer text-[11px] ${
                    editorialMode === 'placeholders'
                      ? 'bg-white text-[#0D9BA3] shadow-xs'
                      : 'text-[#2B231F]/70 hover:text-[#2B231F]'
                  }`}
                  title="Show exact editorial blueprint placeholders"
                >
                  [Placeholders]
                </button>
                <button
                  onClick={() => setEditorialMode('sample')}
                  className={`px-2.5 py-1 rounded font-bold uppercase tracking-wider transition-all cursor-pointer text-[11px] ${
                    editorialMode === 'sample'
                      ? 'bg-white text-[#0D9BA3] shadow-xs'
                      : 'text-[#2B231F]/70 hover:text-[#2B231F]'
                  }`}
                  title="Show sample Florida contract brief"
                >
                  Sample Story
                </button>
              </div>
            </div>

            {/* Front-Page Broadsheet Lead Plate (Not another standard blog card) */}
            <article className="bg-white rounded-2xl border-2 border-[#2B231F]/25 shadow-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#2B231F]/15">
              
              <div className="p-6 sm:p-10 lg:p-12 space-y-8">
                
                {/* Header Block: Category & Massive Headline */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center space-x-1.5 bg-[#0D9BA3]/10 text-[#0D9BA3] font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-[#0D9BA3]/20">
                      <span>{editorialMode === 'placeholders' ? '[CATEGORY]' : (featuredPost?.category || 'Florida Contracts + Forms')}</span>
                    </span>
                    {editorialMode === 'placeholders' && (
                      <span className="text-xs font-mono text-[#2B231F]/50 italic">
                        (e.g., Florida Contracts + Forms)
                      </span>
                    )}
                    <span className="text-[#3A2E29]/30 text-xs hidden sm:inline">•</span>
                    <span className="text-xs font-mono text-[#3A2E29]/60 hidden sm:inline">
                      Lead Operations Dispatch • High-Stakes Transaction Standard
                    </span>
                  </div>

                  {/* Headline: Dominant broadsheet scale */}
                  <h1 
                    id="lead-story-heading" 
                    onClick={() => featuredPost && onOpenPost(featuredPost.slug)}
                    className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-[#2B231F] leading-[1.05] tracking-tight hover:text-[#0D9BA3] transition-colors cursor-pointer"
                  >
                    {editorialMode === 'placeholders' ? (
                      <span>
                        <span className="text-[#0D9BA3]">[ARTICLE TITLE]</span>
                        <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#2B231F]/80 mt-2">
                          Navigating FAR/BAR "AS IS" Inspection Periods & Contingency Deadlines in Florida
                        </span>
                      </span>
                    ) : (
                      featuredPost?.title || 'Navigating FAR/BAR "AS IS" Inspection Periods in Florida'
                    )}
                  </h1>
                </div>

                {/* 2-Column Broadsheet Arrangement: Large Editorial Visual Area + Editorial Story Column */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pt-2">
                  
                  {/* Left Column (7 of 12 cols): Large Editorial Image Area (No generic stock photos) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                    
                    <div 
                      onClick={() => featuredPost && onOpenPost(featuredPost.slug)}
                      className="group relative w-full h-72 sm:h-96 lg:h-[440px] rounded-xl overflow-hidden border-2 border-[#3A2E29]/25 bg-[#EAE4D8] cursor-pointer shadow-inner flex flex-col justify-between p-6 transition-all hover:border-[#0D9BA3]"
                    >
                      {/* Architectural Blueprint / Broadsheet Engraving Pattern Overlay */}
                      <div 
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: `radial-gradient(#2B231F 1px, transparent 1px), linear-gradient(to right, #2B231F 1px, transparent 1px), linear-gradient(to bottom, #2B231F 1px, transparent 1px)`,
                          backgroundSize: '24px 24px, 48px 48px, 48px 48px'
                        }}
                      />

                      {/* Subtle Florida Peninsula & Compass Seal Silhouette */}
                      <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
                        <Newspaper className="w-48 h-48 text-[#2B231F]" />
                      </div>

                      {/* Top Plate Stamp */}
                      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#2B231F]/70 font-semibold border-b border-[#2B231F]/15 pb-2">
                        <span>BROADSHEET EDITORIAL PLATE</span>
                        <span>SCALE 1:1 • FL STATUTORY ARCHIVE</span>
                      </div>

                      {/* Center Placard & Placeholder Guideline */}
                      <div className="relative z-10 text-center max-w-md mx-auto space-y-3 bg-white/90 backdrop-blur-xs p-6 rounded-xl border border-[#3A2E29]/25 shadow-sm group-hover:bg-white transition-all">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] mx-auto">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
                            [EDITORIAL VISUAL AREA]
                          </div>
                          <div className="text-sm font-serif font-bold text-[#2B231F]">
                            Technical Document Plate / Contract Schematic / Architectural Line Art
                          </div>
                          <p className="text-[11px] font-sans text-[#2B231F]/70 leading-normal">
                            Minimum recommended size: 1200 × 675px (16:9). HTC strict editorial standard: zero generic stock photography (no handshakes, sold signs, or stock keys).
                          </p>
                        </div>
                      </div>

                      {/* Bottom Coordinate Bar */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#2B231F]/50 border-t border-[#2B231F]/15 pt-2">
                        <span>LAT 25.7617° N • LONG 80.1918° W</span>
                        <span>HTC ARCHIVE REF #FL-FARBAR-2026</span>
                      </div>
                    </div>

                    {/* Editorial Plate Caption */}
                    <div className="flex items-start space-x-2 text-xs text-[#2B231F]/70 font-serif italic pt-1">
                      <span className="font-mono font-bold text-[11px] text-[#0D9BA3] not-italic">FIG. 1.0 —</span>
                      <span>
                        [EDITORIAL PLATE CAPTION] Florida Realtors / Florida Bar Standard Form 6 inspection timeline computation flow and escrow liability risk distribution.
                      </span>
                    </div>

                  </div>

                  {/* Right Column (5 of 12 cols): Lead Story Editorial Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    
                    <div className="space-y-5">
                      
                      {/* 1–2 Sentence Summary */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono uppercase font-bold text-[#0D9BA3] tracking-wider flex items-center space-x-2">
                          <span>{editorialMode === 'placeholders' ? '[1–2 SENTENCE SUMMARY]' : 'EXECUTIVE SUMMARY'}</span>
                        </div>
                        <div className="bg-[#F8F6F0] p-5 rounded-xl border-l-4 border-[#0D9BA3] space-y-2">
                          <p className="text-sm sm:text-base font-serif font-medium text-[#2B231F] leading-relaxed italic">
                            {editorialMode === 'placeholders' ? (
                              <span>
                                "[1–2 SENTENCE SUMMARY: A deep dive into computing time, repair requests, and maintaining leverage during the critical 15-day inspection window on Florida residential contracts.]"
                              </span>
                            ) : (
                              `"${featuredPost?.excerpt}"`
                            )}
                          </p>
                        </div>
                      </div>

                      {/* One Question • One Useful Answer Callout */}
                      <div className="p-4 rounded-xl border border-[#3A2E29]/20 bg-white space-y-2">
                        <div className="text-[10px] font-mono font-bold uppercase text-[#FE7311] tracking-wider">
                          One Question. One Useful Answer.
                        </div>
                        <p className="text-xs text-[#2B231F]/85 leading-relaxed font-sans font-medium">
                          <strong>Q: What is the exact cut-off time for delivering written cancellation notice under Florida FAR/BAR?</strong>
                          <br />
                          <span className="text-[#2B231F]/75 mt-1 block">
                            A: By 5:00 PM local time where the property is located on the final day of the inspection period. Late notice forfeits the deposit.
                          </span>
                        </p>
                      </div>

                      {/* Metadata Row: Read Time, Authors, Verification */}
                      <div className="pt-2 border-t border-[#3A2E29]/15 space-y-2">
                        <div className="flex items-center space-x-2 text-xs font-mono text-[#2B231F]/70">
                          <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                          <span className="font-bold text-[#2B231F]">
                            {editorialMode === 'placeholders' ? '[READ TIME]' : (featuredPost?.readTime || '5 min read')}
                          </span>
                          {editorialMode === 'placeholders' && (
                            <span className="text-[#2B231F]/50">(e.g., 5 min read)</span>
                          )}
                          <span>•</span>
                          <span>Updated Oct 2026</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#2B231F]/70 font-medium">
                          <div className="flex items-center space-x-1.5">
                            <UserCheck className="w-3.5 h-3.5 text-[#0D9BA3]" />
                            <span>Michelle Martinez, PA</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center space-x-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#0D9BA3]" />
                            <span>Florida Real Estate Attorney Verified</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Primary Call to Action: READ THE BRIEF → */}
                    <div className="pt-4 border-t border-[#3A2E29]/15">
                      <button
                        onClick={() => featuredPost && onOpenPost(featuredPost.slug)}
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 shadow-md hover:shadow-lg cursor-pointer select-none group"
                      >
                        <span>READ THE BRIEF →</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            </article>
          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 4 — WORTH 3 MINUTES (Fast-Read Editorial Columns)                 */}
        {/* ========================================================================= */}
        {!searchQuery && activeCategory === 'All Dispatches' && (
          <section aria-labelledby="worth-3-minutes-heading" className="space-y-4">
            
            {/* Section Eyebrow & Broadsheet Hairline Divider */}
            <div className="border-t-2 border-b border-[#2B231F]/25 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#F2EDE4]/60 px-3 sm:px-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-[#0D9BA3]/10 text-[#0D9BA3] font-mono text-xs font-bold uppercase tracking-widest border border-[#0D9BA3]/25">
                  <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>WORTH 3 MINUTES</span>
                </span>
                <span className="text-[#2B231F]/30 hidden sm:inline">•</span>
                <span className="text-xs font-serif italic text-[#2B231F]/70 hidden sm:inline">
                  Fast-read operational briefings for Florida agents on the move
                </span>
              </div>

              <div className="text-[11px] font-mono font-medium text-[#2B231F]/60">
                3 Quick Dispatches • Max 180s Reading Commitment
              </div>
            </div>

            {/* Section Title */}
            <div className="flex items-baseline justify-between pt-1">
              <h2 
                id="worth-3-minutes-heading" 
                className="text-2xl sm:text-3xl font-serif font-black text-[#2B231F] tracking-tight"
              >
                Worth 3 Minutes
              </h2>
              <span className="text-xs font-mono text-[#2B231F]/50 hidden sm:inline">
                NEWSPAPER COLUMNS I–III
              </span>
            </div>

            {/* Desktop: Editorial / Newspaper-Column Feel | Mobile: Stacked & Scannable */}
            <div className="bg-white rounded-2xl border-2 border-[#2B231F]/20 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2B231F]/15">
                {WORTH_3_MINUTES_ITEMS.map((item) => (
                  <article 
                    key={item.id}
                    className="p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:bg-[#FAF8F5] transition-colors duration-150 group"
                  >
                    {/* Top Column Meta: Column Header Flag & [CATEGORY] */}
                    <div className="space-y-4">
                      
                      <div className="flex items-center justify-between border-b border-[#2B231F]/15 pb-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2B231F]/50">
                          {item.columnTag}
                        </span>
                        
                        {/* [CATEGORY] Placeholder & Department Pill */}
                        <div className="flex items-center space-x-1">
                          <span className="inline-flex items-center bg-[#0D9BA3]/10 text-[#0D9BA3] font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border border-[#0D9BA3]/20">
                            {editorialMode === 'placeholders' ? '[CATEGORY]' : item.category}
                          </span>
                        </div>
                      </div>

                      {/* [ARTICLE TITLE] */}
                      <div className="space-y-1">
                        {editorialMode === 'placeholders' && (
                          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                            [ARTICLE TITLE]
                          </div>
                        )}
                        <h3 
                          onClick={() => item.slug && onOpenPost(item.slug)}
                          className="text-lg sm:text-xl font-serif font-bold text-[#2B231F] leading-snug group-hover:text-[#0D9BA3] transition-colors cursor-pointer"
                        >
                          {item.title}
                        </h3>
                      </div>

                      {/* [ONE-SENTENCE SUMMARY] (Strictly no long excerpts) */}
                      <div className="space-y-1 bg-[#F8F6F0] p-4 rounded-xl border-l-2 border-[#0D9BA3]/60">
                        {editorialMode === 'placeholders' && (
                          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FE7311]">
                            [ONE-SENTENCE SUMMARY]
                          </div>
                        )}
                        <p className="text-xs sm:text-[13px] font-serif text-[#2B231F]/85 leading-relaxed italic">
                          "{item.oneSentenceSummary}"
                        </p>
                      </div>

                    </div>

                    {/* Bottom Column Meta: [READ TIME] & READ → */}
                    <div className="pt-4 border-t border-[#2B231F]/15 flex items-center justify-between">
                      
                      {/* [READ TIME] */}
                      <div className="flex items-center space-x-1.5 text-xs font-mono text-[#2B231F]/70">
                        <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                        <span className="font-bold text-[#2B231F]">
                          {editorialMode === 'placeholders' ? (
                            <span>[READ TIME] <span className="text-[#2B231F]/60 font-normal">({item.readTime})</span></span>
                          ) : (
                            item.readTime
                          )}
                        </span>
                      </div>

                      {/* READ → CTA */}
                      <button
                        onClick={() => item.slug && onOpenPost(item.slug)}
                        className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FE7311] hover:text-[#e05f03] group/btn cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#FE7311]/10 transition-colors select-none"
                      >
                        <span>READ →</span>
                      </button>

                    </div>

                  </article>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 5 — FROM THE FILE (HTC Field Notes • Playful & Editorial Dossier)  */}
        {/* ========================================================================= */}
        {!searchQuery && activeCategory === 'All Dispatches' && (
          <section aria-labelledby="from-the-file-heading" className="space-y-5">
            
            {/* Section Eyebrow Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#2B231F]/20 pb-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#FE7311]/15 text-[#FE7311] font-mono text-xs font-bold uppercase tracking-widest border border-[#FE7311]/30">
                    <FolderOpen className="w-3.5 h-3.5 text-[#FE7311]" />
                    <span>HTC FIELD NOTES</span>
                  </span>
                  <span className="text-[#2B231F]/30 hidden sm:inline">•</span>
                  <span className="text-xs font-mono text-[#2B231F]/60 hidden sm:inline">
                    COORDINATOR FILE DOSSIER
                  </span>
                </div>
                
                <h2 
                  id="from-the-file-heading"
                  className="text-2xl sm:text-4xl font-serif font-black text-[#2B231F] tracking-tight"
                >
                  From the File
                </h2>
                
                <p className="text-sm sm:text-base font-serif italic text-[#2B231F]/80">
                  Things we keep seeing in real Florida transactions.
                </p>
              </div>

              {/* Playful File Cabinet Badge */}
              <div className="bg-[#FAF5EE] border border-[#3A2E29]/20 rounded-xl px-4 py-2.5 flex items-center space-x-3 self-start sm:self-auto shadow-xs">
                <Paperclip className="w-4 h-4 text-[#FE7311] -rotate-45 flex-shrink-0" />
                <div className="text-[11px] font-mono text-[#2B231F]/70">
                  <div className="font-bold text-[#2B231F]">LIVE EDITORIAL BLUEPRINT</div>
                  <div className="text-[#2B231F]/50">HTC provides actual field copy prior to launch</div>
                </div>
              </div>
            </div>

            {/* Playful Manila File Folder Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              {FROM_THE_FILE_PLACEHOLDERS.map((item) => (
                <div key={item.id} className="relative pt-6">
                  
                  {/* Manila File Tab with Paperclip */}
                  <div className="absolute top-0 left-4 z-10 flex items-center space-x-2 bg-[#EFE7D8] px-3.5 py-1 rounded-t-lg border-t-2 border-x-2 border-[#2B231F]/25 text-[10px] font-mono font-bold tracking-wider text-[#2B231F] shadow-xs">
                    <Paperclip className="w-3 h-3 text-[#FE7311] -rotate-45" />
                    <span>{item.fileNumber}</span>
                    <span className="text-[#2B231F]/30">•</span>
                    <span className="text-[#0D9BA3] font-bold">{item.tabLabel}</span>
                  </div>

                  {/* File Folder Card Body */}
                  <article className="bg-[#FDFBF7] hover:bg-white rounded-2xl rounded-tl-none border-2 border-[#2B231F]/25 p-6 sm:p-7 shadow-md hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-6 relative overflow-hidden group min-h-[380px]">
                    
                    {/* Background Rubber Stamp Silhouette */}
                    <div className="absolute top-4 right-4 opacity-[0.07] pointer-events-none font-mono text-2xl font-black rotate-12 text-[#2B231F] select-none">
                      HTC CASE FILE
                    </div>

                    <div className="space-y-4 relative z-10">
                      
                      {/* [EDITORIAL KICKER / FIELD NOTE TITLE] */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] block">
                          [EDITORIAL KICKER / FIELD NOTE TITLE]
                        </span>
                        <div className="font-mono text-xs font-bold uppercase text-[#FE7311] tracking-wide">
                          {editorialMode === 'placeholders' 
                            ? item.editorialKickerPlaceholder 
                            : item.editorialKickerPlaceholder.replace(/^\[EDITORIAL KICKER \/ FIELD NOTE TITLE:\s*/, '').replace(/\]$/, '')}
                        </div>
                      </div>

                      {/* [SEARCHABLE ARTICLE TITLE] */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2B231F]/50 block">
                          [SEARCHABLE ARTICLE TITLE]
                        </span>
                        <h3 
                          onClick={() => item.slug && onOpenPost(item.slug)}
                          className="text-lg sm:text-xl font-serif font-bold text-[#2B231F] leading-snug group-hover:text-[#0D9BA3] transition-colors cursor-pointer"
                        >
                          {editorialMode === 'placeholders'
                            ? item.searchableTitlePlaceholder
                            : item.searchableTitlePlaceholder.replace(/^\[SEARCHABLE ARTICLE TITLE:\s*/, '').replace(/\]$/, '')}
                        </h3>
                      </div>

                      {/* [SHORT SUMMARY] (Explicitly noted that HTC will provide actual observation copy) */}
                      <div className="bg-[#F5EFE3] p-4 rounded-xl border-l-3 border-[#0D9BA3] space-y-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0D9BA3] block">
                          [SHORT SUMMARY]
                        </span>
                        <p className="text-xs sm:text-[13px] font-serif text-[#2B231F]/85 leading-relaxed italic">
                          "{editorialMode === 'placeholders'
                            ? item.shortSummaryPlaceholder
                            : item.shortSummaryPlaceholder.replace(/^\[SHORT SUMMARY:\s*/, '').replace(/\]$/, '')}"
                        </p>
                      </div>

                    </div>

                    {/* Bottom Meta: [READ TIME] & READ THE BRIEF → */}
                    <div className="pt-4 border-t border-[#2B231F]/15 flex items-center justify-between relative z-10">
                      
                      {/* [READ TIME] */}
                      <div className="flex items-center space-x-1.5 text-xs font-mono text-[#2B231F]/70">
                        <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                        <span className="font-bold text-[#2B231F]">
                          {editorialMode === 'placeholders' 
                            ? item.readTimePlaceholder 
                            : item.readTimePlaceholder.replace(/^\[READ TIME:\s*/, '').replace(/\]$/, '')}
                        </span>
                      </div>

                      {/* READ THE BRIEF → CTA Button */}
                      <button
                        onClick={() => item.slug && onOpenPost(item.slug)}
                        className="inline-flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-wider text-white bg-[#FE7311] hover:bg-[#e05f03] px-4 py-2 rounded-xl shadow-xs transition-all cursor-pointer select-none group/btn hover:shadow"
                      >
                        <span>READ THE BRIEF →</span>
                      </button>

                    </div>

                  </article>
                </div>
              ))}
            </div>

            {/* Editorial Footer Note */}
            <div className="p-3 bg-[#FAF5EE] rounded-xl border border-[#2B231F]/15 text-center text-xs font-mono text-[#2B231F]/65">
              <span className="text-[#0D9BA3] font-bold">HTC OPERATIONAL NOTE:</span> Coordinators log recurring transaction friction points across 67 Florida counties. Real-world copy and checklist attachments will be inserted directly by the HTC editorial desk.
            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 6 — RUN THE NUMBERS (Interactive Business Tool)                   */}
        {/* ========================================================================= */}
        {!searchQuery && activeCategory === 'All Dispatches' && (
          <section aria-labelledby="run-the-numbers-heading" className="space-y-6">
            
            <div className="bg-[#2B231F] text-white rounded-3xl p-7 sm:p-10 lg:p-12 border-2 border-[#0D9BA3]/40 shadow-xl relative overflow-hidden">
              
              {/* Architectural Grid Background Texture */}
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '24px 24px, 48px 48px, 48px 48px'
                }}
              />

              {/* Decorative Watermark Seal */}
              <div className="absolute right-6 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
                <Calculator className="w-64 h-64 text-white" />
              </div>

              <div className="relative z-10 space-y-8">
                
                {/* Header Block */}
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D9BA3]/20 text-[#0D9BA3] font-mono text-xs font-bold uppercase tracking-widest border border-[#0D9BA3]/40">
                      <Calculator className="w-3.5 h-3.5 text-[#FE7311]" />
                      <span>BUSINESS TOOL</span>
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-xs font-mono text-white/60">
                      AGENT BUSINESS CALCULATOR
                    </span>
                  </div>

                  <h2 
                    id="run-the-numbers-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight"
                  >
                    Don’t Guess. Run the Numbers.
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg text-white/80 font-serif leading-relaxed">
                    See what your time is worth, compare hiring a TC with using HTC, or model what 20% more closed business could look like using your own numbers.
                  </p>

                  <div className="pt-2">
                    <a
                      href="/agent-business-calculator/"
                      onClick={(e) => {
                        if (onOpenCalculator) {
                          e.preventDefault();
                          onOpenCalculator();
                        }
                      }}
                      className="inline-flex items-center space-x-3 bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 shadow-md hover:shadow-lg cursor-pointer select-none group"
                    >
                      <span>RUN THE NUMBERS →</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* 3 Deep-Link Model Cards: #time-worth, #hire-or-htc, #20-percent-more */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-white/15">
                  
                  {/* Tool 1: #time-worth */}
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0D9BA3]/60 rounded-2xl p-6 transition-all duration-150 flex flex-col justify-between space-y-4 group">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/20 px-2.5 py-0.5 rounded border border-[#0D9BA3]/30">
                          MODEL 01
                        </span>
                        <span className="text-[11px] font-mono text-white/50">#time-worth</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#0D9BA3] transition-colors">
                        What Your Time Is Worth
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed font-sans">
                        Calculate your true production hourly rate and quantify how many thousands in commission are lost spending 15 hours of paperwork per file.
                      </p>
                    </div>

                    <a
                      href="/agent-business-calculator/#time-worth"
                      onClick={(e) => {
                        if (onOpenCalculator) {
                          e.preventDefault();
                          onOpenCalculator('time-worth');
                        }
                      }}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FE7311] hover:text-white transition-colors pt-2"
                    >
                      <span>Launch #time-worth →</span>
                    </a>
                  </div>

                  {/* Tool 2: #hire-or-htc */}
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0D9BA3]/60 rounded-2xl p-6 transition-all duration-150 flex flex-col justify-between space-y-4 group">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/20 px-2.5 py-0.5 rounded border border-[#0D9BA3]/30">
                          MODEL 02
                        </span>
                        <span className="text-[11px] font-mono text-white/50">#hire-or-htc</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#0D9BA3] transition-colors">
                        Hiring a TC vs. Using HTC
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed font-sans">
                        Compare fixed salaries ($55k+), payroll taxes, management overhead, and software fees against HTC's zero-overhead, per-file model.
                      </p>
                    </div>

                    <a
                      href="/agent-business-calculator/#hire-or-htc"
                      onClick={(e) => {
                        if (onOpenCalculator) {
                          e.preventDefault();
                          onOpenCalculator('hire-or-htc');
                        }
                      }}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FE7311] hover:text-white transition-colors pt-2"
                    >
                      <span>Launch #hire-or-htc →</span>
                    </a>
                  </div>

                  {/* Tool 3: #20-percent-more */}
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0D9BA3]/60 rounded-2xl p-6 transition-all duration-150 flex flex-col justify-between space-y-4 group">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/20 px-2.5 py-0.5 rounded border border-[#0D9BA3]/30">
                          MODEL 03
                        </span>
                        <span className="text-[11px] font-mono text-white/50">#20-percent-more</span>
                      </div>
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#0D9BA3] transition-colors">
                        20% More Closed Business
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed font-sans">
                        Model your net annual production increase when reinvesting freed administrative time directly into high-yield lead generation and client showings.
                      </p>
                    </div>

                    <a
                      href="/agent-business-calculator/#20-percent-more"
                      onClick={(e) => {
                        if (onOpenCalculator) {
                          e.preventDefault();
                          onOpenCalculator('20-percent-more');
                        }
                      }}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FE7311] hover:text-white transition-colors pt-2"
                    >
                      <span>Launch #20-percent-more →</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 7 — BROWSE BY TOPIC (More From The Brief)                          */}
        {/* ========================================================================= */}
        {!searchQuery && activeCategory === 'All Dispatches' && (
          <section aria-labelledby="browse-by-topic-heading" className="space-y-12 sm:space-y-16 pt-6">
            
            {/* Section 7 Main Header */}
            <div className="border-b-2 border-[#2B231F] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                  <BookOpen className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>BROWSE BY TOPIC</span>
                </div>
                <h2 
                  id="browse-by-topic-heading"
                  className="text-3xl sm:text-4xl font-serif font-black text-[#2B231F] tracking-tight"
                >
                  More From The Brief
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-serif text-[#2B231F]/70 max-w-md sm:text-right">
                Essential Florida real estate guidance, compliance rules, and field insights organized by operational focus.
              </p>
            </div>

            {/* Six Topic Sections with Thin Divider Rules & Broadsheet Hierarchy */}
            <div className="space-y-14 sm:space-y-16">
              {TOPIC_BROWSE_SECTIONS.map((section) => (
                <div key={section.slug} className="space-y-6">
                  
                  {/* Newspaper Section Top Rule & Category Header */}
                  <div className="border-t border-[#2B231F]/30 pt-3 flex items-center justify-between gap-4">
                    <div className="flex items-baseline space-x-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                        {section.sectionCode}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-black text-[#2B231F]">
                        {section.category}
                      </h3>
                    </div>
                    
                    <button
                      onClick={() => handleSeeAllTopic(section.category, section.slug)}
                      className="inline-flex items-center space-x-1 text-xs font-mono font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#FE7311] hover:underline cursor-pointer group whitespace-nowrap"
                    >
                      <span>SEE ALL →</span>
                    </button>
                  </div>

                  {/* 3 Articles per Topic: Newspaper Multi-Column Layout with Thin Divider Rules (No Heavy Cards) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2B231F]/15">
                    {section.articles.map((article, artIdx) => (
                      <article 
                        key={article.id}
                        className="py-5 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col justify-between space-y-3 group"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#2B231F]/50 uppercase tracking-wider">
                            <span>ENTRY 0{artIdx + 1}</span>
                            <span>{article.readTime}</span>
                          </div>

                          <h4 className="text-base sm:text-lg font-serif font-bold text-[#2B231F] leading-snug group-hover:text-[#0D9BA3] transition cursor-pointer">
                            <button
                              onClick={() => article.slug ? onOpenPost(article.slug) : onOpenPost('navigating-far-bar-as-is-inspection-periods')}
                              className="text-left cursor-pointer focus:outline-none"
                            >
                              {editorialMode === 'placeholders' ? article.placeholderTitle : article.sampleTitle}
                            </button>
                          </h4>

                          <p className="text-xs text-[#2B231F]/75 font-serif leading-relaxed line-clamp-3">
                            {editorialMode === 'placeholders' ? article.placeholderSummary : article.sampleSummary}
                          </p>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => article.slug ? onOpenPost(article.slug) : onOpenPost('navigating-far-bar-as-is-inspection-periods')}
                            className="inline-flex items-center space-x-1 text-xs font-mono font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#FE7311] hover:underline transition cursor-pointer"
                          >
                            <span>READ BRIEF →</span>
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* SECTION 8 — FREE GUIDES + DOWNLOADS (Take It With You)                    */}
        {/* ========================================================================= */}
        {!searchQuery && activeCategory === 'All Dispatches' && (
          <section aria-labelledby="free-guides-heading" className="space-y-6">
            
            <div className="bg-[#FAF5EE] rounded-3xl p-7 sm:p-10 lg:p-12 border-2 border-[#2B231F]/20 shadow-md relative overflow-hidden space-y-8">
              
              {/* Header Block */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2B231F]/15 pb-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] font-mono text-xs font-bold uppercase tracking-widest border border-[#0D9BA3]/20">
                    <Download className="w-3.5 h-3.5 text-[#FE7311]" />
                    <span>TAKE IT WITH YOU</span>
                  </div>

                  <h2 
                    id="free-guides-heading"
                    className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#2B231F] tracking-tight"
                  >
                    Free Guides + Downloads
                  </h2>

                  <p className="text-xs sm:text-sm lg:text-base text-[#2B231F]/80 font-serif max-w-2xl leading-relaxed">
                    Field-tested checklists, Florida contract timeline trackers, and compliance roadmaps curated by transaction coordinators handling files across Florida every day.
                  </p>
                </div>

                {/* Direct Link to Full Guides Page */}
                <div>
                  <a
                    href="/free-guides-downloads/"
                    onClick={(e) => {
                      if (onOpenGuides) {
                        e.preventDefault();
                        onOpenGuides();
                      }
                    }}
                    className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#FE7311] hover:underline cursor-pointer group whitespace-nowrap"
                  >
                    <span>EXPLORE ALL GUIDES</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* 1–2 Featured Resource Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Resource 1 */}
                <div className="bg-white rounded-2xl border-2 border-[#2B231F]/15 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-xs hover:shadow-md hover:border-[#0D9BA3]/50 transition-all duration-150 group">
                  <div className="space-y-3">
                    
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="bg-[#0D9BA3]/10 text-[#0D9BA3] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#0D9BA3]/20">
                        FEATURED RESOURCE • 01
                      </span>
                      <span className="text-[#2B231F]/60">PDF • PRINTABLE 8.5x11</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2B231F] leading-snug group-hover:text-[#0D9BA3] transition">
                      {editorialMode === 'placeholders' 
                        ? '[GUIDE TITLE: Florida Contract-to-Close Critical Timelines & Compliance Checklist]'
                        : 'Florida Contract-to-Close Critical Timelines & Compliance Checklist'
                      }
                    </h3>

                    <p className="text-xs sm:text-sm text-[#2B231F]/75 font-sans leading-relaxed">
                      {editorialMode === 'placeholders'
                        ? '[ONE-SENTENCE DESCRIPTION: A field-tested 37-point milestone checklist covering earnest money deposit verification, municipal lien orders, and FREC file retention standards.]'
                        : 'A field-tested 37-point milestone checklist covering earnest money verification, inspection windows, title commitments, and statutory notice deadlines.'
                      }
                    </p>

                  </div>

                  <div className="pt-3 border-t border-[#2B231F]/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#2B231F]/60">37-Point Milestone Audit</span>

                    <a
                      href="/free-guides-downloads/"
                      onClick={(e) => {
                        if (onOpenGuides) {
                          e.preventDefault();
                          onOpenGuides();
                        }
                      }}
                      className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition inline-flex items-center space-x-1.5 shadow-sm group-hover:shadow-md cursor-pointer"
                    >
                      <span>GET THE GUIDE →</span>
                    </a>
                  </div>
                </div>

                {/* Resource 2 */}
                <div className="bg-white rounded-2xl border-2 border-[#2B231F]/15 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-xs hover:shadow-md hover:border-[#0D9BA3]/50 transition-all duration-150 group">
                  <div className="space-y-3">
                    
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="bg-[#0D9BA3]/10 text-[#0D9BA3] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#0D9BA3]/20">
                        FEATURED RESOURCE • 02
                      </span>
                      <span className="text-[#2B231F]/60">PDF • 6-PAGE FIELD MANUAL</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2B231F] leading-snug group-hover:text-[#0D9BA3] transition">
                      {editorialMode === 'placeholders' 
                        ? '[GUIDE TITLE: SB 4-D Milestone Inspection & Condo Reserve Audit Field Guide]'
                        : 'SB 4-D Milestone Inspection & Condo Reserve Audit Field Guide'
                      }
                    </h3>

                    <p className="text-xs sm:text-sm text-[#2B231F]/75 font-sans leading-relaxed">
                      {editorialMode === 'placeholders'
                        ? '[ONE-SENTENCE DESCRIPTION: What Florida agents and buyers must verify regarding Structural Integrity Reserve Studies (SIRS) before waiving financing.]'
                        : 'Essential questions to ask condo associations and managing agents to protect buyer clients from surprise special assessments and lender loan denials.'
                      }
                    </p>

                  </div>

                  <div className="pt-3 border-t border-[#2B231F]/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#2B231F]/60">Executive Field Guide</span>

                    <a
                      href="/free-guides-downloads/"
                      onClick={(e) => {
                        if (onOpenGuides) {
                          e.preventDefault();
                          onOpenGuides();
                        }
                      }}
                      className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition inline-flex items-center space-x-1.5 shadow-sm group-hover:shadow-md cursor-pointer"
                    >
                      <span>GET THE GUIDE →</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Editorial Notice Banner */}
              <div className="p-3.5 bg-white/70 rounded-xl border border-[#2B231F]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#2B231F]/75">
                <div>
                  <span className="text-[#0D9BA3] font-bold">HTC OPERATIONAL NOTE:</span> HTC will provide the actual guides, download attachments, and copy.
                </div>
                <a
                  href="/free-guides-downloads/"
                  onClick={(e) => {
                    if (onOpenGuides) {
                      e.preventDefault();
                      onOpenGuides();
                    }
                  }}
                  className="font-bold text-[#0D9BA3] hover:text-[#FE7311] hover:underline cursor-pointer whitespace-nowrap inline-flex items-center space-x-1"
                >
                  <span>Go to Free Guides + Downloads page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </section>
        )}

        {/* ======================================================================= */}
        {/* ARTICLE / BRIEF GRID (Verified Briefs + System Placeholders)             */}
        {/* ======================================================================= */}
        <section aria-labelledby="briefs-archive-heading" className="space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#2B231F]/20 pb-3 gap-2">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                DISPATCH ARCHIVE
              </span>
              <h2 id="briefs-archive-heading" className="text-2xl sm:text-3xl font-serif font-black text-[#2B231F]">
                {activeCategory === 'All Dispatches' ? 'Recent Briefs & Field Notes' : `${activeCategory} Dispatches`}
              </h2>
            </div>
            
            <div className="text-xs font-mono text-[#3A2E29]/70">
              Showing {filteredPosts.length + filteredPlaceholders.length} Active & Placeholder Entries
            </div>
          </div>

          {filteredPosts.length === 0 && filteredPlaceholders.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#D8D2D4] space-y-3">
              <p className="text-base font-serif font-bold text-[#2B231F]">No dispatches found matching your search.</p>
              <p className="text-xs text-[#2B231F]/60">Try searching for "escrow", "inspection", or "FAR/BAR", or switch categories.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All Dispatches');
                  window.history.replaceState(null, '', '/resources/');
                }}
                className="mt-2 text-xs font-mono uppercase font-bold text-[#0D9BA3] hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. Verified Active Briefs */}
              {filteredPosts.map(post => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-2xl border border-[#D8D2D4] shadow-sm hover:shadow-md hover:border-[#0D9BA3]/40 transition flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6 sm:p-7 space-y-4">
                    
                    {/* Header: Category & Date */}
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="bg-[#0D9BA3]/10 text-[#0D9BA3] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-[#3A2E29]/60">{post.readTime}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2B231F] leading-snug group-hover:text-[#0D9BA3] transition">
                      <button 
                        onClick={() => onOpenPost(post.slug)}
                        className="text-left cursor-pointer focus:outline-none"
                      >
                        {post.title}
                      </button>
                    </h3>

                    {/* Core Answer Summary */}
                    <div className="text-xs text-[#2B231F]/80 leading-relaxed font-normal">
                      {post.excerpt}
                    </div>

                  </div>

                  {/* Card Bottom Meta & Button */}
                  <div className="px-6 py-4 bg-[#F8F6F0] border-t border-[#D8D2D4]/60 flex items-center justify-between text-xs">
                    <div className="text-[11px] text-[#2B231F]/70 font-medium">
                      <span>{post.author}</span>
                    </div>

                    <button
                      onClick={() => onOpenPost(post.slug)}
                      className="inline-flex items-center space-x-1 font-mono text-[11px] font-bold text-[#FE7311] hover:text-[#e05f03] transition cursor-pointer uppercase tracking-wider"
                    >
                      <span>Read Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}

              {/* 2. Clear System Placeholders for Future HTC Content */}
              {filteredPlaceholders.map(item => (
                <article 
                  key={item.id} 
                  className="bg-white/80 rounded-2xl border-2 border-dashed border-[#D8D2D4] hover:border-[#0D9BA3]/40 transition flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-6 sm:p-7 space-y-4">
                    
                    {/* Header: Placeholder Tag */}
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="bg-[#FE7311]/10 text-[#FE7311] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#FE7311]/20">
                        Content Placeholder
                      </span>
                      <span className="text-[#3A2E29]/50">{item.readTime}</span>
                    </div>

                    {/* Placeholder Headline */}
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono font-bold uppercase text-[#0D9BA3]">
                        {item.category}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#2B231F]/85 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* One Question Box */}
                    <div className="bg-[#F8F6F0] p-3 rounded-lg border-l-2 border-[#FE7311]/50 space-y-1">
                      <div className="text-[10px] font-mono font-bold uppercase text-[#3A2E29]/60">
                        One Question (Slot)
                      </div>
                      <p className="text-xs font-serif text-[#2B231F]/80 italic">
                        {item.oneQuestion}
                      </p>
                    </div>

                    {/* Excerpt Placeholder Description */}
                    <p className="text-xs text-[#2B231F]/70 leading-relaxed font-normal">
                      {item.oneAnswer}
                    </p>

                  </div>

                  {/* Placeholder Card Footer */}
                  <div className="px-6 py-4 bg-[#F8F6F0]/60 border-t border-[#D8D2D4]/60 flex items-center justify-between text-xs">
                    <div className="text-[11px] text-[#2B231F]/50 font-mono">
                      Future Article Slot
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#3A2E29]/40 bg-black/5 px-2 py-1 rounded">
                      Reserved by HTC
                    </span>
                  </div>
                </article>
              ))}

            </div>
          )}

        </section>

        {/* ======================================================================= */}
        {/* SECTION — AEO INTERACTIVE BRIDGE: RUN YOUR OWN NUMBERS                  */}
        {/* ======================================================================= */}
        <section aria-labelledby="aeo-calculator-bridge" className="pt-4">
          <div className="bg-[#2B231F] text-white rounded-3xl p-8 sm:p-10 border-2 border-[#0D9BA3]/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] bg-white/10 px-3 py-1 rounded-full border border-[#0D9BA3]/30">
                <Calculator className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>Interactive Agent Planning Tool</span>
              </div>
              
              <h2 id="aeo-calculator-bridge" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-white leading-tight">
                One question. One Brief. One useful answer.
                <span className="block text-[#0D9BA3]">Now run your own numbers.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Put hard math behind your operations. Calculate what transaction administration costs your effective hourly rate, compare employing an in-house coordinator with using HTC, and model what a 20% production increase looks like for your business.
              </p>
            </div>

            {onOpenCalculator && (
              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => onOpenCalculator()}
                  className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition whitespace-nowrap cursor-pointer shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Run the Numbers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 9 — FINAL CTA                                                   */}
        {/* ======================================================================= */}
        <section aria-labelledby="section-9-cta-heading" className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#2B231F]/15 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] font-mono text-xs font-bold uppercase tracking-widest border border-[#0D9BA3]/20">
            <span>HOMETOWN TITLE & CLOSING</span>
          </div>

          <h2 id="section-9-cta-heading" className="text-2xl sm:text-4xl font-serif font-black text-[#2B231F] max-w-2xl mx-auto leading-tight">
            Want us to handle the work instead?
          </h2>

          <p className="text-xs sm:text-base text-[#2B231F]/80 max-w-xl mx-auto leading-relaxed font-serif">
            If what you’re reading sounds like something you’d rather have off your plate, let’s see if HTC fits your business.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition inline-flex items-center justify-center space-x-2 cursor-pointer shadow-md hover:shadow-lg"
            >
              <span>BOOK A 15-MINUTE FIT CALL</span>
            </button>

            <button
              onClick={() => {
                if (onExploreServices) {
                  onExploreServices();
                }
              }}
              className="w-full sm:w-auto bg-transparent hover:bg-[#2B231F]/5 text-[#2B231F] border-2 border-[#2B231F]/30 hover:border-[#2B231F] px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition inline-flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>EXPLORE SERVICES + PRICING →</span>
            </button>
          </div>
        </section>

      </main>

      {/* Newspaper Base Footnote */}
      <footer className="border-t border-[#3A2E29]/20 bg-[#F2EDE4] py-6 px-4 text-center text-xs font-mono text-[#3A2E29]/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            The Hometown Brief © {new Date().getFullYear()} • Hometown Title & Closing
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={onGoHome} className="hover:text-[#0D9BA3] transition cursor-pointer">
              Home
            </button>
            <span>•</span>
            {onOpenGuides && (
              <>
                <button onClick={onOpenGuides} className="hover:text-[#0D9BA3] transition cursor-pointer">
                  Free Guides
                </button>
                <span>•</span>
              </>
            )}
            {onOpenCalculator && (
              <>
                <button onClick={() => onOpenCalculator()} className="hover:text-[#0D9BA3] transition cursor-pointer">
                  Agent Calculators
                </button>
                <span>•</span>
              </>
            )}
            <button onClick={onBookCall} className="hover:text-[#0D9BA3] transition cursor-pointer">
              Book Fit Call
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};
