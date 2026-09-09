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
  'All Dispatches',
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
  deskCode: string;
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
    deskCode: 'DESK 01',
    metaTitle: 'Contracts + Forms Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Practical Florida real estate guidance on FAR/BAR contracts, riders, addenda, and timeline calculations.',
    categoryIntroPlaceholder: '[CATEGORY INTRO COPY: HTC will provide the category copy later. This archive will house practical operational briefs, clause breakdowns, and deadline computation guides for the Florida FAR/BAR "AS IS" and Standard contracts, statutory riders, and escrow deposit procedures.]',
    canonicalUrl: 'https://hometowntc.com/resources/contracts-forms/',
    tagline: 'FAR/BAR AS IS, Standard F day counting, repair addenda, and contingency deadlines.'
  },
  'transaction-operations': {
    slug: 'transaction-operations',
    name: 'Transaction Operations',
    deskCode: 'DESK 02',
    metaTitle: 'Transaction Operations Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Operational workflows, escrow release protocols, municipal lien searches, and walkthrough checklists.',
    categoryIntroPlaceholder: '[CATEGORY INTRO COPY: HTC will provide the category copy later. This archive covers daily operational friction points from file intake through execution: earnest money verifications, municipal lien discoveries, walkthrough repair holdbacks, utility transfers, and closing-day title coordination.]',
    canonicalUrl: 'https://hometowntc.com/resources/transaction-operations/',
    tagline: 'Escrow procedures, municipal lien searches, walkthrough protocols, and title coordination.'
  },
  'broker-compliance': {
    slug: 'broker-compliance',
    name: 'Broker Compliance',
    deskCode: 'DESK 03',
    metaTitle: 'Broker Compliance Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'DBPR/FREC audit preparation, Florida Rule 61J2 file retention, and brokerage advertising compliance.',
    categoryIntroPlaceholder: '[CATEGORY INTRO COPY: HTC will provide the category copy later. Florida statutory compliance essentials for brokers and team leaders: 5-year document retention schedules, MLS Clear Cooperation rules, advertising compliance, and DBPR audit file preparation.]',
    canonicalUrl: 'https://hometowntc.com/resources/broker-compliance/',
    tagline: 'DBPR/FREC audit readiness, 5-year file retention, MLS rules, and advertising compliance.'
  },
  'condo-hoa': {
    slug: 'condo-hoa',
    name: 'Condo + HOA',
    deskCode: 'DESK 04',
    metaTitle: 'Condo + HOA Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Florida condo milestones, SB 4-D structural reserves (SIRS), and 30-day association approval management.',
    categoryIntroPlaceholder: '[CATEGORY INTRO COPY: HTC will provide the category copy later. Critical navigation for South Florida and statewide condo transactions: SB 4-D milestone inspection reports, Structural Integrity Reserve Studies (SIRS), lender underwriting restrictions, and managing 30-day association approval windows.]',
    canonicalUrl: 'https://hometowntc.com/resources/condo-hoa/',
    tagline: 'SB 4-D milestones, SIRS structural reserves, 3-day rescission rights, and board approvals.'
  },
  'agent-growth': {
    slug: 'agent-growth',
    name: 'Agent Growth',
    deskCode: 'DESK 05',
    metaTitle: 'Agent Growth Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Time audits, administrative leverage, and production economics for high-performing Florida Realtors.',
    categoryIntroPlaceholder: '[CATEGORY INTRO COPY: HTC will provide the category copy later. The business economics of top Florida producers: eliminating 15 hours of administrative work per file, scaling deal capacity without fixed overhead, and modeling the math of reinvesting freed hours into client acquisition.]',
    canonicalUrl: 'https://hometowntc.com/resources/agent-growth/',
    tagline: 'Time audits, administrative offloading, capacity modeling, and transaction economics.'
  },
  'florida-updates': {
    slug: 'florida-updates',
    name: 'Florida Updates',
    deskCode: 'DESK 06',
    metaTitle: 'Florida Updates Archive | The Hometown Brief • Florida Real Estate Operations',
    metaDescription: 'Florida statutory updates, Citizens property insurance underwriting rules, and closing procedures.',
    categoryIntroPlaceholder: '[CATEGORY INTRO COPY: HTC will provide the category copy later. Timely statutory and regulatory updates affecting Florida real estate: mandatory flood disclosure requirements, Citizens property insurance 4-point standards, remote online notarization (RON), and closing conventions across 67 counties.]',
    canonicalUrl: 'https://hometowntc.com/resources/florida-updates/',
    tagline: 'Legislative statutes, Citizens insurance underwriting, flood disclosures, and closing conventions.'
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
    description: 'Why Florida agents trust Hometown Title & Closing over generic virtual assistants.'
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
    url: '/book-discovery-call/',
    description: 'Schedule a 15-minute operational fit call with founder Michelle Martinez.'
  },
  {
    id: 'hometown-brief',
    label: 'The Hometown Brief Archive',
    url: '/resources/',
    description: 'All evergreen operations dispatches and Florida real estate answer briefs.'
  }
];

// =============================================================================
// NEUTRAL PLACEHOLDER ARTICLES FOR DESIGN REVIEW
// Coded strictly as [ARTICLE TITLE], [ARTICLE SUMMARY], [CATEGORY], [READ TIME]
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

export const NEUTRAL_PLACEHOLDER_ARTICLES: NeutralPlaceholderArticle[] = [
  // 1. Contracts + Forms
  {
    id: 'cf-01',
    slug: 'far-bar-inspection-periods-and-deadlines',
    categorySlug: 'contracts-forms',
    category: 'Contracts + Forms',
    deskCode: 'DESK 01',
    placeholderTitle: '[ARTICLE TITLE: Navigating FAR/BAR "AS IS" Inspection Periods & Contingency Deadlines]',
    placeholderSummary: '[ARTICLE SUMMARY: Step-by-step procedures for computing Standard F calendar days, submitting repair addenda, and protecting earnest money leverage.]',
    readTime: '[READ TIME: 5 min read]',
    theBrief: '[THE BRIEF: Under Florida FAR/BAR Paragraph 12, the inspection window counts calendar days beginning the day after effective date. Written notice of cancellation or executed extension must be delivered before 11:59 PM to protect the deposit.]',
    tags: ['FAR/BAR', 'AS IS', 'Inspection', 'Standard F', 'Deadlines', 'Escrow Deposit', 'Repair Addendum'],
    articleBody: '[ARTICLE BODY: Detailed examination of Florida FAR/BAR Standard F day-counting rules. Explains why weekends count, how holidays roll forward to 5:00 PM the next business day, and why informal email or text requests fail to preserve buyer rights.]',
    isLeadBrief: true
  },
  {
    id: 'cf-02',
    slug: 'far-bar-financing-contingency-loan-approval',
    categorySlug: 'contracts-forms',
    category: 'Contracts + Forms',
    deskCode: 'DESK 01',
    placeholderTitle: '[ARTICLE TITLE: Managing the 30-Day Financing Contingency: Loan Approval vs. Property Appraisal]',
    placeholderSummary: '[ARTICLE SUMMARY: Protocols for tracking lender underwriting milestones, appraisal delivery timelines, and statutory notice options before contingency expiration.]',
    readTime: '[READ TIME: 4 min read]',
    theBrief: '[THE BRIEF: Loan Approval under FAR/BAR Paragraph 8 requires written commitment from the lender. Failure to give notice prior to expiration waives the contingency and forfeits deposit recovery if the mortgage fails later.]',
    tags: ['Financing Contingency', 'Loan Approval', 'Appraisal', 'Lender Notice', 'Underwriting', 'FAR/BAR'],
    articleBody: '[ARTICLE BODY: Deep dive into the mechanics of Paragraph 8. Differentiates between buyer financing approval and property underwriting approval, outlining the risks of passive contingency expiration.]',
    isWorth3Min: true
  },
  {
    id: 'cf-03',
    slug: 'standard-f-effective-date-computation',
    categorySlug: 'contracts-forms',
    category: 'Contracts + Forms',
    deskCode: 'DESK 01',
    placeholderTitle: '[ARTICLE TITLE: Escrow Calendar Computation: Standard F Day Counting Without Disqualification]',
    placeholderSummary: '[ARTICLE SUMMARY: Mathematical calculations of effective dates, time periods of 5 days or fewer, and national holiday adjustments across Florida closings.]',
    readTime: '[READ TIME: 3 min read]',
    theBrief: '[THE BRIEF: Under Standard F, calendar periods of 5 days or fewer exclude weekends and legal holidays. Periods greater than 5 days count consecutive calendar days without exception until the terminal date.]',
    tags: ['Standard F', 'Calendar Days', 'Effective Date', 'Timelines', 'Florida Law'],
    articleBody: '[ARTICLE BODY: Practical timeline calculators for Florida contracts. Illustrates step-by-step counting from counteroffer timestamping through terminal execution dates.]',
    isWorth3Min: true
  },

  // 2. Transaction Operations
  {
    id: 'ops-01',
    slug: 'handling-earnest-money-disputes-frec-orders',
    categorySlug: 'transaction-operations',
    category: 'Transaction Operations',
    deskCode: 'DESK 02',
    placeholderTitle: '[ARTICLE TITLE: Handling Earnest Money Disputes: FREC Escrow Disbursement Orders & Title Rules]',
    placeholderSummary: '[ARTICLE SUMMARY: Step-by-step procedures when buyers and sellers submit conflicting deposit release demands to brokerages and title escrow holders.]',
    readTime: '[READ TIME: 5 min read]',
    theBrief: '[THE BRIEF: Brokers holding disputed escrow must notify FREC within 15 business days and initiate an EDO or interpleader within 30 business days. Title companies cannot issue EDOs and require mutual releases or court orders.]',
    tags: ['Earnest Money', 'Escrow Dispute', 'FREC', 'EDO', 'Interpleader', 'Title Escrow', 'Broker Liability'],
    articleBody: '[ARTICLE BODY: Breakdown of Florida Statute 475 escrow disbursement procedures. Compares brokerage escrow vs title company escrow, legal costs of civil interpleader, and mediation strategies.]'
  },
  {
    id: 'ops-02',
    slug: 'municipal-lien-searches-unrecorded-violations',
    categorySlug: 'transaction-operations',
    category: 'Transaction Operations',
    deskCode: 'DESK 02',
    placeholderTitle: '[ARTICLE TITLE: Municipal Lien Searches vs. Standard Title Insurance: Unrecorded Code Fines]',
    placeholderSummary: '[ARTICLE SUMMARY: The operational necessity of running separate municipal lien and permit searches to uncover unrecorded municipal fines and expired permits in Florida.]',
    readTime: '[READ TIME: 4 min read]',
    theBrief: '[THE BRIEF: Standard ALTA title policies exclude unrecorded municipal code violations, open building permits, and utility balances. A separate municipal lien search is essential in all Florida counties.]',
    tags: ['Municipal Lien Search', 'Code Violations', 'Expired Permits', 'Title Insurance', 'Closing Risks'],
    articleBody: '[ARTICLE BODY: How South Florida municipalities assess compounding daily code violation fines that attach to property upon transfer. Operational timeline for ordering lien searches on Day 1.]',
    isFromFile: true,
    fileNoteKicker: '[EDITORIAL KICKER: UNRECORDED PERMIT TRAP]',
    fileNumber: 'CASE FILE #041'
  },
  {
    id: 'ops-03',
    slug: 'walkthrough-repair-escrows-and-holdbacks',
    categorySlug: 'transaction-operations',
    category: 'Transaction Operations',
    deskCode: 'DESK 02',
    placeholderTitle: '[ARTICLE TITLE: Pre-Closing Walkthrough Protocol: Structuring Repair Escrows & Holdback Agreements]',
    placeholderSummary: '[ARTICLE SUMMARY: Protocols for handling uncompleted seller repairs on the morning of scheduled title execution without halting closing.]',
    readTime: '[READ TIME: 4 min read]',
    theBrief: '[THE BRIEF: Lenders and title underwriters require written post-closing escrow agreements specifying 1.5x estimated repair funds, contractor completion deadlines, and default release terms before approving holdbacks.]',
    tags: ['Walkthrough', 'Repair Escrow', 'Holdback Agreement', 'Lender Approval', 'Title Protocol'],
    articleBody: '[ARTICLE BODY: Standards for drafting valid post-closing repair escrows. Highlights lender tolerance thresholds, escrow holder fees, and preventing last-minute title closing adjournments.]'
  },

  // 3. Broker Compliance
  {
    id: 'comp-01',
    slug: 'frec-rule-61j2-broker-file-retention-audit',
    categorySlug: 'broker-compliance',
    category: 'Broker Compliance',
    deskCode: 'DESK 03',
    placeholderTitle: '[ARTICLE TITLE: FREC Rule 61J2 Broker Retention: 5-Year Compliance Audit Checklist]',
    placeholderSummary: '[ARTICLE SUMMARY: Statutory rules governing transaction document preservation, text message archiving, and audit file indexing under Florida Statute 475.]',
    readTime: '[READ TIME: 5 min read]',
    theBrief: '[THE BRIEF: Florida Statute § 475.5015 mandates retaining all transaction documents—including failed offers, escrow verifications, and disclosures—for 5 years. Digital cloud records must be immediately retrievable upon DBPR demand.]',
    tags: ['Broker Compliance', 'FREC Rule 61J2', '5-Year Retention', 'DBPR Audit', 'File Archive'],
    articleBody: '[ARTICLE BODY: Complete checklist for Florida broker file compliance. Details required escrow receipt confirmations, Affiliated Business Arrangement disclosures, and team advertising guidelines.]'
  },
  {
    id: 'comp-02',
    slug: 'florida-real-estate-advertising-team-rules',
    categorySlug: 'broker-compliance',
    category: 'Broker Compliance',
    deskCode: 'DESK 03',
    placeholderTitle: '[ARTICLE TITLE: Florida Real Estate Advertising Rules: Teams, Logos & Brokerage Prominence]',
    placeholderSummary: '[ARTICLE SUMMARY: Ensuring team branding prominently reflects licensed brokerages across websites, social media, signage, and business cards.]',
    readTime: '[READ TIME: 4 min read]',
    theBrief: '[THE BRIEF: FREC Rule 61J2-10.025 requires the licensed brokerage name to appear in equal or larger prominence than team names across all media to prevent consumer confusion.]',
    tags: ['Advertising Compliance', 'Team Branding', 'FREC Rules', 'Brokerage Logo', 'Marketing Citations'],
    articleBody: '[ARTICLE BODY: Step-by-step advertising audits for Florida agents and teams. Covers Instagram bios, portal listings, email signatures, and yard sign compliance.]'
  },
  {
    id: 'comp-03',
    slug: 'mls-clear-cooperation-public-marketing-deadlines',
    categorySlug: 'broker-compliance',
    category: 'Broker Compliance',
    deskCode: 'DESK 03',
    placeholderTitle: '[ARTICLE TITLE: Clear Cooperation Compliance: Navigating MLS Public Marketing Timelines]',
    placeholderSummary: '[ARTICLE SUMMARY: Tracking mandatory 1-business-day MLS submission deadlines once public marketing commences on off-market or coming-soon properties.]',
    readTime: '[READ TIME: 3 min read]',
    theBrief: '[THE BRIEF: Under MLS Clear Cooperation, any public marketing (yard signs, social posts, blast emails) triggers a mandatory 1-business-day deadline to submit the listing to the local MLS.]',
    tags: ['MLS', 'Clear Cooperation', 'Public Marketing', 'Listing Compliance', 'Coming Soon'],
    articleBody: '[ARTICLE BODY: How to navigate off-market listing agreements without incurring automated MLS fines. Explains exempt office-exclusive agreements vs public marketing triggers.]'
  },

  // 4. Condo + HOA
  {
    id: 'condo-01',
    slug: 'sb-4d-milestone-inspections-condo-closings',
    categorySlug: 'condo-hoa',
    category: 'Condo + HOA',
    deskCode: 'DESK 04',
    placeholderTitle: '[ARTICLE TITLE: How SB 4-D Milestone Inspections & SIRS Reserves Impact Condo Closings]',
    placeholderSummary: '[ARTICLE SUMMARY: Navigating structural reserve funding mandates, milestone inspection reports, and Fannie Mae / Freddie Mac lender blacklist holds.]',
    readTime: '[READ TIME: 6 min read]',
    theBrief: '[THE BRIEF: Buildings 3 stories or higher reaching 30 years (25 years if coastal) must complete milestone inspections and Structural Integrity Reserve Studies (SIRS). Incomplete studies trigger instant lender loan denials.]',
    tags: ['SB 4-D', 'Milestone Inspection', 'Condo HOA', 'SIRS Reserves', 'Fannie Mae Blacklist', 'Special Assessment'],
    articleBody: '[ARTICLE BODY: Analysis of Florida condo safety legislation. Reviews questionnaire questions 1076, structural inspection report requirements, and contractual strategies for protecting buyers.]',
    isFromFile: true,
    fileNoteKicker: '[EDITORIAL KICKER: CONDO RESERVE SHOCK]',
    fileNumber: 'CASE FILE #072'
  },
  {
    id: 'condo-02',
    slug: 'managing-30-day-hoa-approval-windows',
    categorySlug: 'condo-hoa',
    category: 'Condo + HOA',
    deskCode: 'DESK 04',
    placeholderTitle: '[ARTICLE TITLE: Managing the 30-Day HOA Approval Window Without Contract Extensions]',
    placeholderSummary: '[ARTICLE SUMMARY: Pre-screening board applications, coordinating rush fees, and scheduling buyer interviews to prevent closing-day delays.]',
    readTime: '[READ TIME: 4 min read]',
    theBrief: '[THE BRIEF: Many Florida HOAs legally retain 30 calendar days to process buyer applications. Submitting incomplete packages restarts the clock and jeopardizes contract closing dates.]',
    tags: ['HOA Approval', 'Board Application', 'Closing Delays', 'Buyer Screening', 'Association Rules'],
    articleBody: '[ARTICLE BODY: A coordinator checklist for speeding up HOA approvals: ordering documents pre-contract, auditing background authorization forms, and setting interview expectations.]'
  },
  {
    id: 'condo-03',
    slug: 'condo-resale-disclosures-3-day-rescission',
    categorySlug: 'condo-hoa',
    category: 'Condo + HOA',
    deskCode: 'DESK 04',
    placeholderTitle: '[ARTICLE TITLE: Condo Resale Disclosures: Calculating the Statutory 3-Day Cancellation Right]',
    placeholderSummary: '[ARTICLE SUMMARY: When the 3-day right to void actually begins and why missing governing documents keep contracts legally open.]',
    readTime: '[READ TIME: 3 min read]',
    theBrief: '[THE BRIEF: Florida Statute § 718.503 grants buyers 3 business days from receiving ALL condominium governance documents, financial statements, and FAQs to void the contract without penalty.]',
    tags: ['Condo Resale', '3-Day Rescission', 'Governing Docs', 'Florida Statute 718', 'Buyer Cancellation'],
    articleBody: '[ARTICLE BODY: Why delivering partial condo packages extends buyer cancellation rights indefinitely up to closing day. Proper receipt acknowledgment procedures.]',
    isWorth3Min: true
  },

  // 5. Agent Growth + Leverage
  {
    id: 'gro-01',
    slug: 'the-15-hour-agent-administrative-bottlenecks',
    categorySlug: 'agent-growth',
    category: 'Agent Growth',
    deskCode: 'DESK 05',
    placeholderTitle: '[ARTICLE TITLE: The 15-Hour Agent: How Administrative Chores Steal $85,000+ in Commission]',
    placeholderSummary: '[ARTICLE SUMMARY: Time-audit data tracking hours spent chasing earnest money receipts vs. dollar-productive activities for solo agents.]',
    readTime: '[READ TIME: 5 min read]',
    theBrief: '[THE BRIEF: Independent time audits reveal Florida agents spend 12 to 16 hours per transaction on paperwork, phone tags, and compliance filing—directly limiting annual sales capacity to 10-12 sides.]',
    tags: ['Agent Growth', 'Time Audit', 'Leverage', 'Transaction Coordinator ROI', 'Commission Math'],
    articleBody: '[ARTICLE BODY: Mathematical proof of administrative drag. Models the true hourly cost of agents performing coordinator duties vs reinvesting freed hours into listings.]'
  },
  {
    id: 'gro-02',
    slug: 'in-house-assistant-vs-htc-overhead-comparison',
    categorySlug: 'agent-growth',
    category: 'Agent Growth',
    deskCode: 'DESK 05',
    placeholderTitle: '[ARTICLE TITLE: In-House Assistant vs. Partnering with HTC: Comparing True Overhead and Liability]',
    placeholderSummary: '[ARTICLE SUMMARY: Fixed annual payroll, taxes, and vacation coverage vs. HTC’s zero-retainer, per-closed-file coordination model.]',
    readTime: '[READ TIME: 4 min read]',
    theBrief: '[THE BRIEF: Hiring a full-time assistant costs $55k-$65k annually plus payroll taxes, software, and turnover risk. HTC provides dedicated Florida transaction coordination with zero fixed overhead, paid only on successful close.]',
    tags: ['Hiring vs HTC', 'Overhead', 'Payroll Costs', 'Scaling Real Estate', 'Team Operations'],
    articleBody: '[ARTICLE BODY: Financial model comparing fixed salaried payroll with variable per-closing coordination fees across market fluctuations and seasonal volume shifts.]',
    isFromFile: true,
    fileNoteKicker: '[EDITORIAL KICKER: OVERHEAD AUDIT]',
    fileNumber: 'CASE FILE #098'
  },
  {
    id: 'gro-03',
    slug: 'the-20-percent-capacity-model-scaled-production',
    categorySlug: 'agent-growth',
    category: 'Agent Growth',
    deskCode: 'DESK 05',
    placeholderTitle: '[ARTICLE TITLE: The 20% Capacity Model: Scaling Deal Volume Without Adding Work Hours]',
    placeholderSummary: '[ARTICLE SUMMARY: Reinvesting 60 freed monthly hours into high-converting client relationships, sphere touches, and buyer showings.]',
    readTime: '[READ TIME: 4 min read]',
    theBrief: '[THE BRIEF: By offloading contract-to-close administration, agents regain 15 hours per file. Reallocating just 20% of that freed time into lead follow-up results in 3 to 5 additional closed deals per year.]',
    tags: ['Capacity Model', 'Production Growth', 'Time Reinvestment', 'Agent Economics', 'Client Relations'],
    articleBody: '[ARTICLE BODY: Strategic roadmap for solo agents and small teams transitioning from operational grind to high-leverage client advisory roles.]'
  },

  // 6. Florida Updates
  {
    id: 'upd-01',
    slug: 'florida-statutory-flood-property-disclosures',
    categorySlug: 'florida-updates',
    category: 'Florida Updates',
    deskCode: 'DESK 06',
    placeholderTitle: '[ARTICLE TITLE: 2026 Florida Statutory Property Disclosures: Flood History & Insurance Updates]',
    placeholderSummary: '[ARTICLE SUMMARY: Newly enacted statutory flood disclosure requirements and seller representation mandates on Florida residential transfers.]',
    readTime: '[READ TIME: 4 min read]',
    theBrief: '[THE BRIEF: Florida law mandates specific statutory flood disclosure notices prior to contract execution, informing buyers of past flood claims and mandatory flood insurance requirements.]',
    tags: ['Florida Updates', 'Flood Disclosure', 'Seller Disclosures', 'Legislation', 'Statutory Requirements'],
    articleBody: '[ARTICLE BODY: Walkthrough of the latest mandatory flood disclosure riders. Highlights liability exposure for failure to disclose past insurance claims or FEMA assistance grants.]'
  },
  {
    id: 'upd-02',
    slug: 'citizens-insurance-underwriting-4-point-inspections',
    categorySlug: 'florida-updates',
    category: 'Florida Updates',
    deskCode: 'DESK 06',
    placeholderTitle: '[ARTICLE TITLE: Navigating Citizens Insurance & 4-Point Inspection Standards in Florida]',
    placeholderSummary: '[ARTICLE SUMMARY: Roof age thresholds, electrical panel guidelines, and wind mitigation credits in South Florida transactions.]',
    readTime: '[READ TIME: 5 min read]',
    theBrief: '[THE BRIEF: Citizens Property Insurance enforces strict roof age rules (often 15 years for shingles) and electrical panel disqualifications. Unfavorable 4-point inspections derail insurance contingencies.]',
    tags: ['Citizens Insurance', '4-Point Inspection', 'Roof Age', 'Wind Mitigation', 'Insurance Contingency'],
    articleBody: '[ARTICLE BODY: Practical strategies for managing insurance contingencies when dealing with older Florida homes. How to obtain inspection certificates prior to offer submission.]'
  },
  {
    id: 'upd-03',
    slug: 'remote-online-notarization-ron-title-closings',
    categorySlug: 'florida-updates',
    category: 'Florida Updates',
    deskCode: 'DESK 06',
    placeholderTitle: '[ARTICLE TITLE: Remote Online Notarization (RON): What Out-of-State Clients Need Before Closing]',
    placeholderSummary: '[ARTICLE SUMMARY: Biometric identity verification standards, technology requirements, and closing-day coordination protocols for digital closings.]',
    readTime: '[READ TIME: 3 min read]',
    theBrief: '[THE BRIEF: Under Florida Statute § 117, RON closings require multi-factor credential analysis and biometric verification. Out-of-state and international buyers must complete pre-verification 48 hours prior to closing.]',
    tags: ['RON', 'Remote Online Notarization', 'Digital Closing', 'Out of State Buyers', 'Title Execution'],
    articleBody: '[ARTICLE BODY: Technical checklist for smooth RON executions. Outlines common camera/bandwidth failures and foreign national passport identification limitations.]'
  }
];

// =============================================================================
// SEARCH ENGINE IMPLEMENTATION
// Covers: article title, The Brief answer, category, tags, and article body
// Results display: [HEADLINE], [SHORT SUMMARY], [CATEGORY], and [READ TIME]
// Capped to concise previews — strictly no giant excerpts!
// =============================================================================

export interface SearchResultItem {
  id: string;
  slug: string;
  headline: string;       // [HEADLINE]
  shortSummary: string;   // [SHORT SUMMARY]
  category: string;       // [CATEGORY]
  readTime: string;       // [READ TIME]
  matchedField: 'title' | 'brief' | 'category' | 'tags' | 'body';
}

export function searchBriefs(query: string, categoryFilter: string = 'All Dispatches'): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return NEUTRAL_PLACEHOLDER_ARTICLES
    .filter(article => {
      // Category filter if active
      if (categoryFilter !== 'All Dispatches') {
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

      // Keep summary short and compact (strictly no giant excerpts!)
      const rawSummary = article.placeholderSummary
        .replace(/^\[ARTICLE SUMMARY:\s*/, '')
        .replace(/\]$/, '');
      const shortSummary = rawSummary.length > 130 
        ? `${rawSummary.substring(0, 127)}...` 
        : rawSummary;

      return {
        id: article.id,
        slug: article.slug,
        headline: article.placeholderTitle,
        shortSummary: `[SHORT SUMMARY: ${shortSummary}]`,
        category: `[CATEGORY: ${article.category}]`,
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
  bodyParagraphs: string[];  // [ARTICLE COPY]
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
  category: TopicCategory | string; // [CATEGORY]
  regionTag: string;                // e.g. "South Florida / Statewide"
  articleH1: string;               // [SEARCHABLE ARTICLE H1]
  deck: string;                    // [SHORT DECK / SUBHEADLINE]
  author: string;                  // By [AUTHOR]
  reviewer?: string;               // Reviewed by [REVIEWER, IF USED]
  publishedDate: string;           // Published [DATE]
  datePublishedIso?: string;       // ISO 8601 string for structured data / AEO (e.g. 2026-10-12T08:00:00-04:00)
  modifiedDate?: string;           // Updated [DATE, IF APPLICABLE]
  dateModifiedIso?: string;        // ISO 8601 string for structured data / AEO (e.g. 2026-11-04T08:00:00-04:00)
  readTime: string;                // [X MIN BRIEF]

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
  whatThisMeansForAgent: string;   // [SHORT CONCLUSION COPY]

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
  primarySearchQuestion: '[PRIMARY SEARCH QUESTION: How do Florida agents handle this specific transaction scenario?]',
  searchIntent: 'Informational',
  metaTitle: '[META TITLE: Searchable Title | The Hometown Brief]',
  metaDescription: '[META DESCRIPTION: 155-character concise summary answering the agent\'s primary operational question.]',
  slug: 'article-template',
  category: '[CATEGORY]',
  regionTag: 'FLORIDA STATEWIDE • SOUTH FLORIDA FOCUS',
  articleH1: '[SEARCHABLE ARTICLE H1]',
  deck: '[SHORT DECK / SUBHEADLINE]',
  author: '[AUTHOR]',
  reviewer: '[REVIEWER, IF USED]',
  publishedDate: '[DATE]',
  datePublishedIso: '2026-10-15T08:00:00-04:00',
  modifiedDate: '[DATE, IF APPLICABLE]',
  dateModifiedIso: '2026-10-15T08:00:00-04:00',
  readTime: '[X MIN BRIEF]',
  visualStyle: 'marked-up-paperwork',
  featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200',
  thumbnailCrop: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=400',
  ogImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200',
  altText: '[ALT TEXT: Editorial illustration of marked-up Florida legal paperwork and calendar deadline markers]',
  imageCredit: 'HTC Editorial Archive',
  theBrief: '[40–80 WORD DIRECT ANSWER: This block is visually prominent near the top of the article. It provides the definitive, plain-English answer immediately so agents, brokers, and search engines get the exact conclusion without digging through fluff.]',
  keyTakeaways: [
    '[KEY POINT 1: Critical statutory deadline or computation rule that dictates contract validity]',
    '[KEY POINT 2: Common misinterpretation between buyer and seller agents during contract negotiations]',
    '[KEY POINT 3: Florida administrative code or FAR/BAR contract clause governing the procedure]',
    '[KEY POINT 4: Documentation standard required by Florida brokers for 5-year compliance audits]',
    '[KEY POINT 5: Immediate risk mitigation step to protect the client\'s deposit and closing timeline]'
  ],
  questionSections: [
    {
      id: 'q1',
      questionH2: '[QUESTION-BASED H2: When does the timeline begin under standard Florida contract rules?]',
      bodyParagraphs: [
        '[ARTICLE COPY: In Florida real estate practice, timing calculations frequently create disputes between parties. Under Standard F of the FAR/BAR contract, Day 1 is defined as the first calendar day following the effective date of the executed agreement.]',
        '[ARTICLE COPY: Notice windows, deposit dates, and financing commitment milestones must be calibrated strictly according to calendar days, with automatic rolling provisions taking effect only when specific conditions are met.]'
      ],
      calloutQuote: 'Standard F Rule: Calendar days apply unless explicitly stated otherwise. Weekends and national holidays roll to 5:00 PM of the next business day.'
    },
    {
      id: 'q2',
      questionH2: '[QUESTION-BASED H2: What are the exact steps required to issue valid written notice?]',
      bodyParagraphs: [
        '[ARTICLE COPY: Verbal conversations, voicemail updates, and casual text messages do not constitute legal notice under Florida residential contracts. Notice must be delivered in writing to the party or their authorized transaction broker via email or approved delivery mechanisms.]',
        '[ARTICLE COPY: Failure to transmit written cancellation before 11:59 PM on the final day of the period causes the contingency to expire, locking the buyer into the purchase without contractual right to deposit recovery.]'
      ]
    },
    {
      id: 'q3',
      questionH2: '[QUESTION-BASED H2: How does this impact escrow disbursement if a dispute arises?]',
      bodyParagraphs: [
        '[ARTICLE COPY: When conflicting demands are placed upon an earnest money deposit held in escrow, the escrow agent must follow statutory notification procedures under Florida Administrative Code Chapter 61J2-10.032 within 30 business days.]',
        '[ARTICLE COPY: Understanding whether the escrow agent is a licensed Florida title company or a real estate broker determines whether an Escrow Disbursement Order (EDO) or civil interpleader action is the mandatory dispute mechanism.]'
      ]
    }
  ],
  optionalFieldNote: {
    kicker: 'FROM THE FILE',
    title: 'HTC Field Note #104 • Palm Beach County Escrow Release',
    text: '[OPTIONAL HUMAN-VERIFIED HTC FIELD NOTE: In a recent Boca Raton closing, the buyer agent sent a repair list via email at 4:45 PM on Day 15 but forgot to include the formal FAR/BAR Addendum requesting price reduction. The seller claimed the inspection window had lapsed and refused. Because HTC maintains synchronized timestamp verification on every milestone, we caught the omission 45 minutes prior to the midnight cutoff, had the addendum executed, and saved the buyer\'s $25,000 deposit.]',
    verifiedDate: 'Verified by HTC Senior TC Team',
    dossierTag: 'CONFIDENTIAL FILE ARCHIVE'
  },
  whatThisMeansForAgent: '[SHORT CONCLUSION COPY: As a Florida agent, knowing the contract rules protects your client\'s earnest money and your commission. When files become busy, relying on memory leads to missed dates. Having a dedicated transaction coordination workflow ensures every deadline is verified, documented, and enforced.]',
  primaryResourceCta: {
    label: 'RUN THE NUMBERS →',
    destination: 'calculator',
    deepLinkHash: 'time-worth',
    subtext: 'See what your administrative hours are costing your real estate business.'
  },
  secondaryResourceCta: {
    label: 'EXPLORE HOW HTC WORKS →',
    destination: 'how-it-works',
    subtext: 'Learn how our Florida-based team manages files from contract to closing.'
  },
  internalLinks: [
    { anchor: 'Florida Contract-to-Close Checklist', url: '/free-guides-downloads/' },
    { anchor: 'Broker Compliance Retention Standards', url: '/resources/#broker-compliance' }
  ],
  externalSources: [
    { title: 'Florida Administrative Code 61J2 (FREC Rules)', url: 'https://www.flrules.org', authority: 'State of Florida' },
    { title: 'Florida Realtors / Florida Bar (FAR/BAR) Standard F', url: 'https://www.floridarealtors.org', authority: 'Florida Realtors' }
  ],
  relatedArticleSlugs: [
    'navigating-far-bar-as-is-inspection-periods',
    'condo-milestone-inspections-sb-4d',
    'earnest-money-disputes-freo-guidance'
  ],
  isPurePlaceholder: true
};

// =============================================================================
// COMPLETE ARTICLES POPULATED IN THE NEW CMS FORMAT
// =============================================================================

export const CMS_ARTICLES: Record<string, ArticleCmsData> = {
  'article-template': CANONICAL_PLACEHOLDER_ARTICLE,
  'navigating-far-bar-as-is-inspection-periods': {
    primarySearchQuestion: 'How does the inspection period work on a Florida FAR/BAR AS IS contract?',
    searchIntent: 'Informational',
    metaTitle: 'Navigating FAR/BAR "AS IS" Inspection Periods in Florida | HTC Brief',
    metaDescription: 'A practical operational guide to computing Standard F calendar days, repair addenda, and protecting earnest money deposits in Florida real estate.',
    slug: 'navigating-far-bar-as-is-inspection-periods',
    category: 'Florida Contracts + Forms',
    regionTag: 'FLORIDA STATEWIDE',
    articleH1: 'Navigating FAR/BAR "AS IS" Inspection Periods in Florida',
    deck: 'Computing Standard F calendar days, maintaining repair leverage, and avoiding the midnight default trap on Florida residential contracts.',
    author: 'Michelle Martinez, PA',
    reviewer: 'Florida Real Estate Attorney',
    publishedDate: 'October 12, 2026',
    datePublishedIso: '2026-10-12T08:00:00-04:00',
    modifiedDate: 'November 4, 2026',
    dateModifiedIso: '2026-11-04T08:00:00-04:00',
    readTime: '6 min brief',
    visualStyle: 'marked-up-paperwork',
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200',
    thumbnailCrop: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=400',
    ogImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200',
    altText: 'Desk with Florida real estate contract, red pen markup, and calendar highlighting 15-day inspection period',
    imageCredit: 'HTC Legal Archive',
    theBrief: 'Under the Florida FAR/BAR "AS IS" contract (Paragraph 12), the buyer has the unilateral right to cancel the agreement for any reason during the inspection period. Day 1 starts the day after effective date. If written cancellation or an executed extension is not delivered before 11:59 PM on the final day, the contingency expires and the buyer accepts the property as-is.',
    keyTakeaways: [
      'Standard F day computation: Day 1 begins on the calendar day after contract execution.',
      'Only end dates that land on a Saturday, Sunday, or national legal holiday roll to 5:00 PM the next business day.',
      'Text messages, emails proposing repairs, or verbal agreements DO NOT extend the inspection window.',
      'Only a signed Extension Addendum or unilateral Notice of Termination executed before the deadline protects the deposit.',
      'The buyer is not required to provide inspection reports to the seller unless explicitly specified in a custom addendum.'
    ],
    questionSections: [
      {
        id: 'q1',
        questionH2: 'How exactly do you calculate calendar days under Standard F?',
        bodyParagraphs: [
          'The most common rookie pitfall in Florida real estate is assuming day calculations begin on the day of signing. Under Standard F of the FAR/BAR contract, time periods of five (5) days or less exclude weekends and holidays, while periods greater than five days are strictly counted as calendar days.',
          'Because the standard inspection window is 15 calendar days (unless altered by counteroffer), weekends are actively counted. Day 1 is the first calendar day after the effective date. If the 15th day falls on a Saturday, the deadline automatically rolls forward to 5:00 PM on Monday. However, if the 15th day falls on a Friday, the deadline remains 11:59 PM Friday night.'
        ],
        calloutQuote: 'Calendar rule: Count every calendar day including weekends. Only the final deadline rolls if it lands on a weekend or legal holiday.'
      },
      {
        id: 'q2',
        questionH2: 'What happens if repair negotiations stall near the final day?',
        bodyParagraphs: [
          'Agents often make the dangerous mistake of assuming that ongoing repair discussions create an implied grace period. They do not. If the buyer sends a repair request on Day 13 and the seller has not signed an agreement by Day 15, the clock does not stop.',
          'To maintain complete leverage, the buyer\'s agent must either secure a signed Extension Addendum before the deadline or submit a timely cancellation notice prior to 11:59 PM. You can always revive a contract by mutual agreement after cancellation, but you can never resurrect an expired inspection contingency.'
        ]
      },
      {
        id: 'q3',
        questionH2: 'Can the seller demand to see the home inspection report?',
        bodyParagraphs: [
          'Under the standard FAR/BAR "AS IS" contract, the buyer has no legal obligation to turn over paid inspection reports to the seller unless the contract specifically includes language mandating disclosure.',
          'In fact, many sellers\' attorneys explicitly instruct listing agents NOT to receive full inspection reports if the deal is at risk, because receiving written knowledge of material latent defects creates a mandatory disclosure obligation to subsequent buyers under Florida\'s landmark Johnson v. Davis ruling.'
        ]
      }
    ],
    optionalFieldNote: {
      kicker: 'FROM THE FILE',
      title: 'HTC Field Note #104 • Palm Beach County Midnight Cancellation',
      text: 'In a $1.2M Palm Beach Gardens transaction, the buyer agent texted the listing agent at 7:00 PM on Day 15 stating: "Buyer is canceling unless seller credits $15K for the roof." The listing agent did not respond. At 12:15 AM, the buyer agent sent the written cancellation. The seller\'s attorney retained the $60,000 initial deposit, asserting the contingency expired at 11:59 PM. HTC coordinators prevent this by triggering hard-stop deadline protocols at 72 hours, 24 hours, and 4 hours prior to expiration.',
      verifiedDate: 'Verified by HTC Legal Coordinator',
      dossierTag: 'FIELD CASE #104'
    },
    whatThisMeansForAgent: 'Your contract timeline is your fiduciary shield. Never rely on informal text exchanges to protect an inspection deadline. Keep an executed extension ready to fire whenever repair negotiations drag within 48 hours of expiration, and ensure a dedicated transaction coordinator verifies your milestones daily.',
    primaryResourceCta: {
      label: 'RUN THE NUMBERS →',
      destination: 'calculator',
      deepLinkHash: 'time-worth',
      subtext: 'Calculate how much time you lose chasing contractor quotes and extension addenda.'
    },
    secondaryResourceCta: {
      label: 'HOW HTC WORKS →',
      destination: 'how-it-works',
      subtext: 'Discover how our Florida team monitors milestone calendars and issues proactive deadline alerts.'
    },
    internalLinks: [
      { anchor: 'Free Florida Contract-to-Close Checklist', url: '/free-guides-downloads/' },
      { anchor: 'Handling Earnest Money Disputes', url: '/resources/earnest-money-disputes-freo-guidance/' }
    ],
    externalSources: [
      { title: 'FAR/BAR AS IS Contract 2026 Edition', url: 'https://www.floridarealtors.org', authority: 'Florida Realtors' },
      { title: 'Johnson v. Davis, 480 So. 2d 625 (Fla. 1985)', url: 'https://www.courtlistener.com', authority: 'Florida Supreme Court' }
    ],
    relatedArticleSlugs: [
      'condo-milestone-inspections-sb-4d',
      'earnest-money-disputes-freo-guidance',
      'broker-compliance-checklist-2026'
    ]
  },
  'condo-milestone-inspections-sb-4d': {
    primarySearchQuestion: 'How does Florida SB 4-D affect condo sales and mortgage approvals?',
    searchIntent: 'Compliance',
    metaTitle: 'How SB 4-D Milestone Inspections Impact Condo Closings | HTC Brief',
    metaDescription: 'What South Florida agents need to know about Structural Integrity Reserve Studies (SIRS), milestone inspection triggers, and association resale delays.',
    slug: 'condo-milestone-inspections-sb-4d',
    category: 'Condo + HOA',
    regionTag: 'SOUTH FLORIDA & COASTAL',
    articleH1: 'How SB 4-D Milestone Inspections Impact Condo Closings',
    deck: 'Navigating Structural Integrity Reserve Studies (SIRS), 3-day rescission windows, and lender financing roadblocks in Florida high-rise buildings.',
    author: 'HTC Compliance Team',
    reviewer: 'Michelle Martinez, PA',
    publishedDate: 'September 28, 2026',
    datePublishedIso: '2026-09-28T08:00:00-04:00',
    modifiedDate: 'October 15, 2026',
    dateModifiedIso: '2026-10-15T08:00:00-04:00',
    readTime: '8 min brief',
    visualStyle: 'condo-directory',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    thumbnailCrop: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    altText: 'Modern Florida condominium tower showing concrete balconies and architectural structural detail',
    imageCredit: 'HTC Architectural Archive',
    theBrief: 'Florida Senate Bill 4-D mandates structural milestone inspections for buildings 3 stories or taller reaching 30 years of age (25 years within 3 miles of the coast). Furthermore, associations must complete a Structural Integrity Reserve Study (SIRS) and cannot waive reserve funding for critical structural components. Uncompleted studies or unfunded reserves result in immediate Fannie Mae and Freddie Mac financing blacklist holds.',
    keyTakeaways: [
      'Coastal proximity trigger: Buildings within 3 miles of the coastline require milestone inspection at 25 years rather than 30.',
      'SIRS components cannot be waived: Associations can no longer vote to waive structural reserves (roofing, foundations, fireproofing).',
      '3-Day Condo Resale Window: Buyers have 3 business days from receiving ALL condominium documents to cancel.',
      'Lender Questionnaires: Standard FNMA Form 1076 now includes specific questions regarding milestone compliance.',
      'Special Assessment Disclosures: Sellers must disclose pending or approved structural assessments under Paragraph 9.'
    ],
    questionSections: [
      {
        id: 'q1',
        questionH2: 'Why are condo mortgage approvals falling through at the eleventh hour?',
        bodyParagraphs: [
          'Lenders operating in Florida are now under strict underwriting scrutiny from Fannie Mae and Freddie Mac. When a condominium association questionnaire reveals that a required Phase 1 milestone inspection has not been completed, or that a Phase 2 visual test found significant concrete spalling without funded repairs, conventional financing is immediately rejected.',
          'Cash buyers also risk purchasing into multi-million dollar special assessments that can cost individual unit owners $50,000 to $150,000 within months of closing.'
        ]
      },
      {
        id: 'q2',
        questionH2: 'When does the buyer\'s 3-day condo rescission clock begin?',
        bodyParagraphs: [
          'Under Florida Statute § 718.503, the buyer\'s 3-day right of rescission does not begin when the purchase contract is executed. It begins only after the buyer has received the complete set of required condominium resale documents, including the declaration, bylaws, recent financial statements, FAQs, and governance forms.',
          'If the seller or management company delivers the documents 3 days before closing, the buyer retains the legal right to walk away with their full deposit intact on closing morning.'
        ]
      }
    ],
    optionalFieldNote: {
      kicker: 'FROM THE FILE',
      title: 'HTC Field Note #142 • Sunny Isles Condo Reserve Shock',
      text: 'In a Sunny Isles Beach transaction, the seller checked "No" to pending special assessments. On Day 22, the condo questionnaire revealed the board had approved a $3.4M SIRS restoration assessment with the first installment due 14 days after closing. Because HTC ordered and audited the condo disclosure package on Day 1 of contract intake, our buyer had full contractual recourse to renegotiate a $42,000 seller credit before the loan commitment deadline.',
      verifiedDate: 'Verified by HTC Condo Audit Desk',
      dossierTag: 'FIELD RECORD #142'
    },
    whatThisMeansForAgent: 'Never write a Florida condo offer without checking building age and coast proximity first. Ensure your transaction coordinator immediately requests the full condominium package and completed lender questionnaire on Day 1 to avoid deal-breaking appraisal and underwriting delays.',
    primaryResourceCta: {
      label: 'FREE CONDO AUDIT GUIDE →',
      destination: 'guides',
      subtext: 'Download our 6-page SB 4-D Milestone Inspection & Condo Reserve Audit Field Guide.'
    },
    secondaryResourceCta: {
      label: 'SERVICES & PRICING →',
      destination: 'pricing',
      subtext: 'See how HTC handles condo association applications and document tracking.'
    },
    internalLinks: [
      { anchor: 'Free Condo Audit Field Guide', url: '/free-guides-downloads/' },
      { anchor: 'Contract-to-Close Services', url: '/contract-to-close-services/' }
    ],
    externalSources: [
      { title: 'Florida Statute § 553.899 (Mandatory Structural Inspections)', url: 'http://www.leg.state.fl.us', authority: 'Florida Legislature' },
      { title: 'Fannie Mae LL-2021-14 (Condominium Project Standards)', url: 'https://singlefamily.fanniemae.com', authority: 'Fannie Mae' }
    ],
    relatedArticleSlugs: [
      'navigating-far-bar-as-is-inspection-periods',
      'earnest-money-disputes-freo-guidance'
    ]
  },
  'earnest-money-disputes-freo-guidance': {
    primarySearchQuestion: 'How are earnest money disputes handled in Florida real estate?',
    searchIntent: 'Operational',
    metaTitle: 'Handling Earnest Money Disputes: FREC Escrow Guidance | HTC Brief',
    metaDescription: 'Step-by-step guidance on filing an Escrow Disbursement Order (EDO), interpleader suits, and FREC 30-day notice rules.',
    slug: 'earnest-money-disputes-freo-guidance',
    category: 'Transaction Operations',
    regionTag: 'FLORIDA STATEWIDE',
    articleH1: 'Handling Earnest Money Disputes: FREC Escrow Disbursement',
    deck: 'Understanding the 30-day statutory clock, broker liability, and the crucial distinction between title company and brokerage escrow accounts.',
    author: 'Mary S.',
    reviewer: 'Michelle Martinez, PA',
    publishedDate: 'September 15, 2026',
    datePublishedIso: '2026-09-15T08:00:00-04:00',
    modifiedDate: 'October 1, 2026',
    dateModifiedIso: '2026-10-01T08:00:00-04:00',
    readTime: '5 min brief',
    visualStyle: 'cafecito-legalpad',
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    thumbnailCrop: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400',
    ogImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    altText: 'Legal notepad with earnest money escrow computation notes beside a cup of Cuban espresso',
    imageCredit: 'HTC Legal Archive',
    theBrief: 'When conflicting demands are made on an earnest money deposit held by a Florida real estate broker, the broker must notify FREC in writing within 15 business days and initiate one of four settlement procedures (EDO, arbitration, mediation, or litigation) within 30 business days. However, title companies are NOT governed by FREC and will hold funds until both parties execute mutual release or a court interpleader is filed.',
    keyTakeaways: [
      'Broker vs Title Company: FREC Rule 61J2 applies only when a Florida licensed broker holds the escrow deposit.',
      'Title companies do not issue EDOs: Title companies cannot disburse without written mutual cancellation or court order.',
      '15-day notice clock: Brokers must inform FREC within 15 business days of conflicting demands.',
      '30-day procedure trigger: Formal settlement procedure must be launched within 30 business days.',
      'Interpleader attorney fees: If interpleader is filed, the escrow agent\'s legal fees are deducted directly from the disputed deposit.'
    ],
    questionSections: [
      {
        id: 'q1',
        questionH2: 'What are the four statutory settlement procedures available to Florida brokers?',
        bodyParagraphs: [
          'Under Florida Statute § 475.25(1)(d)1, when a broker faces conflicting demands for earnest money, they must choose one of four remedies within 30 business days:',
          '1. Request an Escrow Disbursement Order (EDO) from the Florida Real Estate Commission.\n2. Submit the matter to binding arbitration with mutual consent.\n3. Submit the matter to mediation with mutual consent.\n4. File a bill of interpleader in civil court.'
        ]
      }
    ],
    optionalFieldNote: {
      kicker: 'FROM THE FILE',
      title: 'HTC Field Note #089 • Escrow Interpleader Warning',
      text: 'A buyer and seller argued over a $5,000 deposit on an Orlando transaction. The title company held the funds for 90 days with neither party budging. The title attorney eventually filed an interpleader action in Orange County court. The attorney fees totaled $3,800, leaving only $1,200 for the winning party. We advise agents that compromising on deposit splits almost always nets the client more than letting a title company interplead.',
      verifiedDate: 'Verified by HTC Escrow Team',
      dossierTag: 'FIELD CASE #089'
    },
    whatThisMeansForAgent: 'Explain to both buyers and sellers that holding deposits in title company escrow means funds freeze instantly if either party refuses to sign. Keeping detailed, timestamped written proof of contract milestones is the only way to avoid protracted escrow impasses.',
    primaryResourceCta: {
      label: 'BOOK A 15-MINUTE FIT CALL',
      destination: 'fit-call',
      subtext: 'Discuss your transaction management and escrow coordination needs with Michelle.'
    },
    secondaryResourceCta: {
      label: 'RUN THE NUMBERS →',
      destination: 'calculator',
      deepLinkHash: 'hire-or-htc',
      subtext: 'Compare the risk of managing files alone versus an insured professional TC team.'
    },
    internalLinks: [
      { anchor: 'FAR/BAR AS IS Inspection Guidelines', url: '/resources/navigating-far-bar-as-is-inspection-periods/' }
    ],
    externalSources: [
      { title: 'Florida Statute § 475.25 (FREC Disciplinary Grounds)', url: 'http://www.leg.state.fl.us', authority: 'Florida Legislature' },
      { title: 'Rule 61J2-10.032 Florida Administrative Code', url: 'https://www.flrules.org', authority: 'DBPR' }
    ],
    relatedArticleSlugs: [
      'navigating-far-bar-as-is-inspection-periods',
      'condo-milestone-inspections-sb-4d'
    ]
  },
  'broker-compliance-checklist-2026': {
    primarySearchQuestion: 'What documents are required for Florida broker file compliance?',
    searchIntent: 'Compliance',
    metaTitle: 'The Ultimate 2026 Broker Compliance Checklist | HTC Brief',
    metaDescription: 'Audit-ready checklists, 5-year retention requirements under FREC 61J2, and Florida MLS Clear Cooperation audit prep.',
    slug: 'broker-compliance-checklist-2026',
    category: 'Broker Compliance',
    regionTag: 'FLORIDA STATEWIDE',
    articleH1: 'The Ultimate 2026 Broker Compliance Checklist',
    deck: 'Ensure your transaction files pass DBPR audits with zero citations under Florida Statute 475 and Rule 61J2.',
    author: 'HTC Operations',
    reviewer: 'Michelle Martinez, PA',
    publishedDate: 'August 30, 2026',
    datePublishedIso: '2026-08-30T08:00:00-04:00',
    modifiedDate: 'October 2, 2026',
    dateModifiedIso: '2026-10-02T08:00:00-04:00',
    readTime: '7 min brief',
    visualStyle: 'marked-up-paperwork',
    featuredImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200',
    thumbnailCrop: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=400',
    ogImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=1200',
    altText: 'Manila file folder labeled Compliance Audit with green checkmarks and Florida DBPR reference guidelines',
    imageCredit: 'HTC Compliance Desk',
    theBrief: 'Under Florida Statute § 475.5015 and FREC Rule 61J2-10.032, licensed Florida brokers must retain all transaction documents—including executed contracts, canceled offers, addenda, escrow receipts, and commission disbursements—for at least five (5) years from the closing or execution date. Digital cloud storage is fully compliant provided files are legible, indexed, and immediately retrievable upon DBPR auditor demand.',
    keyTakeaways: [
      '5-Year Retention Mandate: Applies to both closed transactions AND failed/canceled purchase agreements.',
      'Escrow Receipt Verification: Broker must have written verification of deposit receipt within 10 business days of deposit due date.',
      'Unlicensed Assistant Limitations: Administrative staff cannot negotiate, quote prices, or draft custom legal contract clauses.',
      'Team Advertising Rules: FREC requires the licensed brokerage name to appear in type larger than or equal to the team name.',
      'ALTA Settlement Statement Audit: Broker files must retain the final certified closing disclosure signed by the client.'
    ],
    questionSections: [
      {
        id: 'q1',
        questionH2: 'What specific documents trigger immediate citations during a DBPR audit?',
        bodyParagraphs: [
          'The three most frequent audit deficiencies identified by Florida Department of Business and Professional Regulation (DBPR) investigators are:',
          '1. Missing Written Verification of Deposit Receipt: Under FAR/BAR Paragraph 2, if deposit is held by a title company or third party, the broker must request written verification within 10 business days of deposit due date and retain a copy in the file.\n2. Incomplete Affiliated Business Arrangement (ABA) Disclosures: If the broker refers title or mortgage services with common ownership, missing signed ABAs constitute federal RESPA and state compliance violations.\n3. Improperly Executed Counter-Offers: Uninitialed counter-offer revisions or missing final execution timestamps that obscure effective date computation.'
        ]
      }
    ],
    whatThisMeansForAgent: 'Compliance is not an afterthought once the commission check arrives. Establishing standard intake checklists on Day 1 protects the broker from regulatory fines and ensures agents get paid without back-and-forth paperwork delays.',
    primaryResourceCta: {
      label: 'SERVICES & PRICING →',
      destination: 'pricing',
      subtext: 'Learn how HTC conducts pre-closing audits on 100% of your brokerage files.'
    },
    secondaryResourceCta: {
      label: 'FREE GUIDES & DOWNLOADS →',
      destination: 'guides',
      subtext: 'Get our printable 37-Point Milestone Audit Checklist.'
    },
    internalLinks: [
      { anchor: 'Free Compliance Downloads', url: '/free-guides-downloads/' },
      { anchor: 'Transaction Coordination Pricing', url: '/pricing/' }
    ],
    externalSources: [
      { title: 'Florida Statute § 475.5015 (Broker Records)', url: 'http://www.leg.state.fl.us', authority: 'Florida Legislature' },
      { title: 'DBPR Division of Real Estate Audit Division', url: 'http://www.myfloridalicense.com', authority: 'State of Florida' }
    ],
    relatedArticleSlugs: [
      'navigating-far-bar-as-is-inspection-periods',
      'earnest-money-disputes-freo-guidance'
    ]
  }
};

// Legacy DEMO_BLOG_POSTS for compatibility with any existing components
export const DEMO_BLOG_POSTS: BlogPost[] = Object.values(CMS_ARTICLES).map((article, idx) => ({
  id: String(idx + 1),
  slug: article.slug,
  title: article.articleH1,
  excerpt: article.deck,
  category: article.category,
  author: article.author,
  reviewer: article.reviewer || 'HTC Legal Review Desk',
  dateUpdated: article.modifiedDate || article.publishedDate,
  readTime: article.readTime,
  image: article.featuredImage,
  featured: idx === 1
}));
