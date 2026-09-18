export const PERMANENT_TOPIC_CATEGORIES = [
  'Florida Contracts + Forms',
  'Transaction Operations',
  'Broker Compliance',
  'Condo + HOA',
  'Agent Growth + Leverage',
  'Florida Real Estate Updates'
] as const;

export type TopicCategory = typeof PERMANENT_TOPIC_CATEGORIES[number];

export const BLOG_CATEGORIES = [
  'All Topics',
  ...PERMANENT_TOPIC_CATEGORIES
];

// =============================================================================
// CATEGORY ARCHIVES CONFIGURATION
// Clean permanent URLs: /resources/[category-slug]/
// Each category supports: [CATEGORY INTRO COPY] and [ARTICLE LIST]
// =============================================================================

export interface CategoryArchiveConfig {
  slug: string;
  name: string;
  deskCode?: string;
  metaTitle: string;
  metaDescription: string;
  categoryIntroPlaceholder: string;
  canonicalUrl: string;
  tagline: string;
}

export const CATEGORY_ARCHIVE_CONFIGS: Record<string, CategoryArchiveConfig> = {
  'contracts-forms': {
    slug: 'contracts-forms',
    name: 'Contracts + Forms',
    metaTitle: 'Contracts + Forms Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Practical Florida real estate guidance on FAR/BAR contracts, riders, addenda, and timeline calculations.',
    categoryIntroPlaceholder: 'Practical operational briefs and timeline coordination guides for Florida FAR/BAR contracts, statutory riders, addenda, and escrow deposit procedures.',
    canonicalUrl: 'https://hometowntc.com/resources/contracts-forms/',
    tagline: 'FAR/BAR contract terms, addenda, repair agreements, and contingency deadlines.'
  },
  'transaction-operations': {
    slug: 'transaction-operations',
    name: 'Transaction Operations',
    metaTitle: 'Transaction Operations Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Operational workflows, escrow release protocols, municipal lien searches, and walkthrough checklists.',
    categoryIntroPlaceholder: 'Workflows for active Florida transactions: earnest money tracking, municipal lien follow-up, walkthrough repair verification, and title coordination.',
    canonicalUrl: 'https://hometowntc.com/resources/transaction-operations/',
    tagline: 'Escrow procedures, municipal lien searches, walkthrough protocols, and title coordination.'
  },
  'broker-compliance': {
    slug: 'broker-compliance',
    name: 'Broker Compliance',
    metaTitle: 'Broker Compliance Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'DBPR/FREC audit preparation, Florida Rule 61J2 file retention, and brokerage advertising compliance.',
    categoryIntroPlaceholder: 'Compliance essentials for Florida brokerages and team leaders: document retention, disclosure management, and DBPR audit file preparation.',
    canonicalUrl: 'https://hometowntc.com/resources/broker-compliance/',
    tagline: 'DBPR/FREC audit readiness, file retention schedules, and brokerage compliance.'
  },
  'condo-hoa': {
    slug: 'condo-hoa',
    name: 'Condo + HOA',
    metaTitle: 'Condo + HOA Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Florida condo milestones, SB 4-D structural reserves (SIRS), and 30-day association approval management.',
    categoryIntroPlaceholder: 'Key operational considerations for Florida condo and HOA transactions: governing documents, association approval timelines, and disclosure packages.',
    canonicalUrl: 'https://hometowntc.com/resources/condo-hoa/',
    tagline: 'Condominium disclosures, association milestones, and governance documentation.'
  },
  'agent-growth': {
    slug: 'agent-growth',
    name: 'Agent Growth',
    metaTitle: 'Agent Growth Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Time audits, administrative leverage, and production economics for high-performing Florida Realtors.',
    categoryIntroPlaceholder: 'Business operations for active Florida Realtors: eliminating administrative bottlenecks, scaling capacity, and protecting client-facing hours.',
    canonicalUrl: 'https://hometowntc.com/resources/agent-growth/',
    tagline: 'Time audits, administrative offloading, capacity modeling, and transaction economics.'
  },
  'florida-updates': {
    slug: 'florida-updates',
    name: 'Florida Updates',
    metaTitle: 'Florida Updates Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Florida statutory updates, Citizens property insurance underwriting rules, and closing procedures.',
    categoryIntroPlaceholder: 'Regulatory updates, regional closing practices, and operational standards across Florida counties.',
    canonicalUrl: 'https://hometowntc.com/resources/florida-updates/',
    tagline: 'Legislative statutes, insurance underwriting standards, and closing conventions.'
  }
};

// Aliases for alternate URL paths
export const CATEGORY_SLUG_ALIASES: Record<string, string> = {
  'agent-growth-leverage': 'agent-growth',
  'florida-real-estate-updates': 'florida-updates'
};

// =============================================================================
// REQUIRED INTERNAL LINKING DIRECTORY
// Standard crawlable HTML links to all 11 client-mandated destinations
// =============================================================================

export interface InternalLinkItem {
  id: string;
  label: string;
  url: string;
  description: string;
}

export const HTC_INTERNAL_LINKS: InternalLinkItem[] = [
  {
    id: 'run-the-numbers',
    label: 'Run the Numbers',
    url: '/agent-business-calculator/',
    description: 'Interactive ROI tool to calculate effective hourly rate and model production growth.'
  },
  {
    id: 'how-htc-works',
    label: 'How HTC Works',
    url: '/how-htc-works/',
    description: 'Our four-step H.O.M.E. system for contract-to-close file management.'
  },
  {
    id: 'why-htc',
    label: 'Why HTC',
    url: '/why-htc/',
    description: 'Why Florida agents trust Hometown Transaction Coordinators over generic virtual assistants.'
  },
  {
    id: 'listing-launch',
    label: 'Listing Launch',
    url: '/listing-coordination/',
    description: 'Pre-listing intake, MLS compliance verification, and marketing asset preparation.'
  },
  {
    id: 'contract-to-close',
    label: 'Contract-to-Close',
    url: '/contract-to-close-services/',
    description: 'Comprehensive milestone tracking from escrow intake through final funding.'
  },
  {
    id: 'pricing',
    label: 'Services + Pricing',
    url: '/pricing/',
    description: 'Transparent, per-file pricing with zero monthly retainers or setup fees.'
  },
  {
    id: 'tc-workshop',
    label: 'Florida TC Workshop',
    url: '/tcworkshop/',
    description: 'Practical training on Florida contracts, statutory deadlines, and file coordination.'
  },
  {
    id: 'free-guides',
    label: 'Free Guides + Downloads',
    url: '/free-guides-downloads/',
    description: 'Printable checklists, milestone roadmaps, and condo audit field manuals.'
  },
  {
    id: 'faq',
    label: 'FAQ',
    url: '/faq/',
    description: 'Answers to common questions about onboarding, file intake, and communications.'
  },
  {
    id: 'fit-call',
    label: 'Fit Call',
    url: '/book/',
    description: 'Schedule a focused 15-minute fit call to see if HTC is the right fit for your business.'
  },
  {
    id: 'hometown-brief',
    label: 'The Hometown Brief Archive',
    url: '/resources/',
    description: 'All evergreen operations briefs and Florida real estate answer articles.'
  }
];

// =============================================================================
// NEUTRAL PLACEHOLDER ARTICLES FOR DESIGN REVIEW
// Article structured properties
// Rich searchable metadata included for full search coverage:
// title, theBrief answer, category, tags, and article body
// =============================================================================

export interface NeutralPlaceholderArticle {
  id: string;
  slug: string;
  categorySlug: string;
  category: string;
  placeholderTitle: string;
  placeholderSummary: string;
  readTime: string;
  theBrief: string;
  tags: string[];
  articleBody: string;
  deskCode: string;
  isLeadBrief?: boolean;
  isWorth3Min?: boolean;
  isFromFile?: boolean;
  fileNoteKicker?: string;
  fileNumber?: string;
}

// Approved articles will be supplied directly by HTC.
export const NEUTRAL_PLACEHOLDER_ARTICLES: NeutralPlaceholderArticle[] = [];

// =============================================================================
// SEARCH ENGINE IMPLEMENTATION
// Covers: article title, The Brief answer, category, tags, and article body
// Results display: [HEADLINE], [SHORT SUMMARY], Contracts + Forms, and [READ TIME]
// Capped to concise previews — strictly no giant excerpts!
// =============================================================================

export interface SearchResultItem {
  id: string;
  slug: string;
  headline: string;       // [HEADLINE]
  shortSummary: string;   // [SHORT SUMMARY]
  category: string;       // Contracts + Forms
  readTime: string;       // [READ TIME]
  matchedField: 'title' | 'brief' | 'category' | 'tags' | 'body';
}

export function searchBriefs(query: string, categoryFilter: string = 'All Topics'): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return NEUTRAL_PLACEHOLDER_ARTICLES
    .filter(article => {
      // Category filter if active
      if (categoryFilter !== 'All Topics') {
        const isMatchCat = 
          article.category.toLowerCase() === categoryFilter.toLowerCase() ||
          article.categorySlug.toLowerCase() === categoryFilter.toLowerCase();
        if (!isMatchCat) return false;
      }

      // 1. Title match
      const titleMatch = article.placeholderTitle.toLowerCase().includes(q);
      // 2. The Brief answer match
      const briefMatch = article.theBrief.toLowerCase().includes(q);
      // 3. Category match
      const catMatch = article.category.toLowerCase().includes(q);
      // 4. Tags match
      const tagMatch = article.tags.some(t => t.toLowerCase().includes(q));
      // 5. Article body match
      const bodyMatch = article.articleBody.toLowerCase().includes(q);

      return titleMatch || briefMatch || catMatch || tagMatch || bodyMatch;
    })
    .map(article => {
      let matchedField: 'title' | 'brief' | 'category' | 'tags' | 'body' = 'title';
      if (article.placeholderTitle.toLowerCase().includes(q)) matchedField = 'title';
      else if (article.theBrief.toLowerCase().includes(q)) matchedField = 'brief';
      else if (article.tags.some(t => t.toLowerCase().includes(q))) matchedField = 'tags';
      else if (article.category.toLowerCase().includes(q)) matchedField = 'category';
      else matchedField = 'body';

      // Keep summary short and compact
      const rawSummary = article.placeholderSummary;
      const shortSummary = rawSummary.length > 130 
        ? `${rawSummary.substring(0, 127)}...` 
        : rawSummary;

      return {
        id: article.id,
        slug: article.slug,
        headline: article.placeholderTitle,
        shortSummary,
        category: article.category,
        readTime: article.readTime,
        matchedField
      };
    });
}


// =============================================================================
// REUSABLE ARTICLE CMS SCHEMA & FIELD DEFINITIONS
// For HTC to populate future content into The Hometown Brief
// =============================================================================

export interface QuestionSection {
  id?: string;
  questionH2: string;        // [QUESTION-BASED H2]
  bodyParagraphs: string[];
  calloutQuote?: string;     // Optional key stat, law citation, or callout
}

export interface HtcFieldNote {
  title?: string;            // e.g. "Miami-Dade County • Permitting Escrow Trap"
  kicker?: string;           // "FROM THE FILE"
  text: string;              // [OPTIONAL HUMAN-VERIFIED HTC FIELD NOTE]
  verifiedDate?: string;     // e.g. "Verified June 2026"
  dossierTag?: string;       // e.g. "FIELD RECORD #241"
}

export interface NextBestResource {
  label: string;             // [PRIMARY RESOURCE CTA] or [SECONDARY RESOURCE CTA]
  destination: 
    | 'calculator'           // Run the Numbers
    | 'how-it-works'         // How HTC Works
    | 'pricing'              // Services + Pricing
    | 'contract-to-close'    // Contract-to-Close
    | 'listing-launch'       // Listing Launch
    | 'guides'               // Free Guides + Downloads
    | 'workshop'             // Florida TC Workshop
    | 'fit-call';            // Fit Call
  subtext?: string;
  deepLinkHash?: string;     // e.g. '#time-worth', '#hire-or-htc'
}

export interface ArticleCmsData {
  // 1. Search & SEO
  primarySearchQuestion: string; // e.g. "How do inspection days work on Florida FAR/BAR?"
  searchIntent: 'Informational' | 'Commercial' | 'Compliance' | 'Operational';
  metaTitle: string;
  metaDescription: string;
  slug: string;

  // 2. Header & Taxonomy
  category: TopicCategory | string; // Contracts + Forms
  regionTag: string;                // e.g. "South Florida / Statewide"
  articleH1: string;               // Understanding Critical Florida Contract Timelines & Contingencies
  deck: string;                    // How Standard F day counting, written notice requirements, and escrow disbursement rules protect your transactions.
  author: string;                  // By HTC Operations Team
  reviewer?: string;               // Reviewed by Michelle Martinez, Founder
  publishedDate: string;           // Published October 2026
  datePublishedIso?: string;       // ISO 8601 string for structured data / AEO (e.g. 2026-10-12T08:00:00-04:00)
  modifiedDate?: string;           // Updated November 2026
  dateModifiedIso?: string;        // ISO 8601 string for structured data / AEO (e.g. 2026-11-04T08:00:00-04:00)
  readTime: string;                // 4 Min Brief

  // 3. Editorial Visual Direction (No generic stock photos)
  visualStyle: 
    | 'type-led'
    | 'marked-up-paperwork'
    | 'cafecito-legalpad'
    | 'palm-shadows'
    | 'condo-directory'
    | 'old-florida-signage'
    | 'halftone-editorial';
  featuredImage: string;           // Featured editorial visual
  thumbnailCrop?: string;          // Compact grid square/landscape crop
  ogImage?: string;                // Social graph preview
  altText: string;                 // Descriptive alt text (no keyword stuffing)
  imageCredit?: string;            // Optional photographer / archival credit

  // 4. The Brief (Visually distinct top direct answer)
  theBrief: string;                // [40–80 WORD DIRECT ANSWER]

  // 5. What You Need to Know (Up to 5 key points)
  keyTakeaways: string[];          // [KEY POINT 1], [KEY POINT 2], [KEY POINT 3]

  // 6. Question-Based Article Sections (Flexible unbounded count)
  questionSections: QuestionSection[];

  // 7. Optional HTC Field Note (Renders cleanly without it if undefined)
  optionalFieldNote?: HtcFieldNote;

  // 8. What This Means for the Agent
  whatThisMeansForAgent: string;   // Protecting your clients begins with strict adherence to calendar milestones. When administrative deadlines are managed with disciplined precision, agents stay focused on client relationships and closings.

  // 9. Next Best Resource (1–2 configurable actions)
  primaryResourceCta: NextBestResource;
  secondaryResourceCta?: NextBestResource;

  // 10. Metadata & Citations
  internalLinks?: Array<{ anchor: string; url: string }>;
  externalSources?: Array<{ title: string; url: string; authority: string }>;
  relatedArticleSlugs?: string[];
  isPurePlaceholder?: boolean;
}

// Backward-compatible BlogPost interface
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  reviewer: string;
  dateUpdated: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

// =============================================================================
// CANONICAL PURE PLACEHOLDER ARTICLE
// Matches the exact bracketed template required by the client
// =============================================================================

export const CANONICAL_PLACEHOLDER_ARTICLE: ArticleCmsData = {
  primarySearchQuestion: "Florida Real Estate Operations Brief",
  searchIntent: "Informational",
  metaTitle: "The Hometown Brief | Florida Real Estate Answers for Realtors",
  metaDescription: "Quick, practical answers for Florida Realtors on transaction coordination, contracts, compliance, and closing operations.",
  slug: "article-template",
  category: "Florida Operations",
  regionTag: "FLORIDA STATEWIDE",
  articleH1: "Florida Real Estate Operations Brief",
  deck: "Practical, verified answers from active Florida transactions, without the fluff.",
  author: "HTC Operations Team",
  reviewer: "Michelle Martinez, Founder",
  publishedDate: "Coming Soon",
  datePublishedIso: "2026-10-15T08:00:00-04:00",
  modifiedDate: "Coming Soon",
  dateModifiedIso: "2026-10-15T08:00:00-04:00",
  readTime: "3 min brief",
  visualStyle: "marked-up-paperwork",
  featuredImage: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200",
  thumbnailCrop: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=400",
  ogImage: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200",
  altText: "Florida transaction coordination documents and calendar",
  imageCredit: "HTC Editorial Desk",
  theBrief: "HTC is preparing verified operational briefs directly from active Florida transactions. Each brief will deliver one clear question, one brief, and one useful answer without fluff or filler.",
  keyTakeaways: [
    "Practical Florida real estate operational guidance.",
    "Human-verified observations directly from active files.",
    "Clear answers without generalized theory or fluff."
  ],
  questionSections: [
    {
      id: "q1",
      questionH2: "Verified Operational Guidance",
      bodyParagraphs: [
        "Hometown Transaction Coordinators will supply actual article copy directly from active Florida transactions. Approved briefs will be published here once verified by our team."
      ]
    }
  ],
  whatThisMeansForAgent: "HTC handles file coordination, deadline verification, and closing workflows so you can focus on clients and growth.",
  primaryResourceCta: {
    label: "RUN THE NUMBERS →",
    destination: "calculator",
    deepLinkHash: "time-worth",
    subtext: "Calculate your hourly value and administrative time investment."
  },
  secondaryResourceCta: {
    label: "HOW HTC WORKS →",
    destination: "how-it-works",
    subtext: "See how our Florida-based team manages files from contract to closing."
  },
  internalLinks: [
    { anchor: "Run the Numbers", url: "/agent-business-calculator/" },
    { anchor: "How HTC Works", url: "/how-htc-works/" }
  ],
  externalSources: [],
  relatedArticleSlugs: [],
  isPurePlaceholder: true
};

// Approved articles will be supplied directly by HTC
export const CMS_ARTICLES: Record<string, ArticleCmsData> = {};

// Approved blog posts for legacy components
export const DEMO_BLOG_POSTS: BlogPost[] = [];
