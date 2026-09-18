export type StandardResourceType = 
  | 'Guide'
  | 'Checklist'
  | 'Template'
  | 'Canva Template'
  | 'Calculator'
  | 'Interactive Tool'
  | 'AI Prompt'
  | 'Automation / Apps Script'
  | 'Worksheet'
  | 'Quick Reference'
  | 'Class'
  | 'Mini-Course'
  // Legacy alias compatibility
  | 'Downloadable Guide'
  | 'Apps Script Tool'
  | 'Calculator / Interactive'
  | 'Class / Mini-Course';

// Extensible ResourceType so HTC can add another type later without redesigning the library
export type ResourceType = StandardResourceType | (string & {});

export const EDITABLE_RESOURCE_TYPES: StandardResourceType[] = [
  'Guide',
  'Checklist',
  'Template',
  'Canva Template',
  'Calculator',
  'Interactive Tool',
  'AI Prompt',
  'Automation / Apps Script',
  'Worksheet',
  'Quick Reference',
  'Class',
  'Mini-Course'
];

export type ProblemTopicTag =
  | 'Transactions'
  | 'Listings'
  | 'Condo + HOA'
  | 'Broker Compliance'
  | 'Agent Operations'
  | 'Business Growth'
  | 'AI + Automation'
  | 'Team Training';

export const PROBLEM_TOPIC_TAGS: ProblemTopicTag[] = [
  'Transactions',
  'Listings',
  'Condo + HOA',
  'Broker Compliance',
  'Agent Operations',
  'Business Growth',
  'AI + Automation',
  'Team Training'
];

export interface ProblemTopicInfo {
  tag: ProblemTopicTag;
  label: string;
  problemSummary: string;
  iconName: 'FileCheck' | 'Building' | 'Building2' | 'ShieldAlert' | 'FolderGit2' | 'TrendingUp' | 'Sparkles' | 'GraduationCap';
}

export const PROBLEM_TOPICS_METADATA: ProblemTopicInfo[] = [
  {
    tag: 'Transactions',
    label: 'Transactions',
    problemSummary: 'Escrow verification, contract contingencies, inspection windows, and critical closing milestones.',
    iconName: 'FileCheck'
  },
  {
    tag: 'Listings',
    label: 'Listings',
    problemSummary: 'Pre-listing onboarding, mandatory seller disclosures, MLS readiness, and intake protocol.',
    iconName: 'Building'
  },
  {
    tag: 'Condo + HOA',
    label: 'Condo + HOA',
    problemSummary: 'SB 4-D milestone inspections, SIRS reserve audits, estoppel caps, and association disclosures.',
    iconName: 'Building2'
  },
  {
    tag: 'Broker Compliance',
    label: 'Broker Compliance',
    problemSummary: 'Florida Statute Ch. 475 compliance, 5-year FREC retention, statutory notices, and audit prep.',
    iconName: 'ShieldAlert'
  },
  {
    tag: 'Agent Operations',
    label: 'Agent Operations',
    problemSummary: 'Daily file coordination, milestone tracking spreadsheets, client updates, and admin leverage.',
    iconName: 'FolderGit2'
  },
  {
    tag: 'Business Growth',
    label: 'Business Growth',
    problemSummary: 'Transaction leverage ROI, commission hourly value, and scalable client referral experiences.',
    iconName: 'TrendingUp'
  },
  {
    tag: 'AI + Automation',
    label: 'AI + Automation',
    problemSummary: 'Contract data intake prompts, Google Apps Script day computations, and repair addenda generators.',
    iconName: 'Sparkles'
  },
  {
    tag: 'Team Training',
    label: 'Team Training',
    problemSummary: 'On-demand video workshops, contract breach prevention classes, and agent onboarding.',
    iconName: 'GraduationCap'
  }
];

export type ResourceTopic = ProblemTopicTag | 'All Topics';

export type SimpleResourceCategory = 
  | 'Guides + Checklists'
  | 'Templates + Client Tools'
  | 'AI + Automation'
  | 'Classes + Workshops';

export const SIMPLE_RESOURCE_CATEGORIES: SimpleResourceCategory[] = [
  'Guides + Checklists',
  'Templates + Client Tools',
  'AI + Automation',
  'Classes + Workshops'
];

export function getSimpleCategory(item: { resourceType?: string; category?: SimpleResourceCategory }): SimpleResourceCategory {
  if (item.category) return item.category;
  const t = item.resourceType || '';
  if (t === 'Guide' || t === 'Checklist' || t === 'Quick Reference' || t === 'Worksheet' || t.includes('Guide') || t.includes('Checklist')) {
    return 'Guides + Checklists';
  }
  if (t === 'Template' || t === 'Canva Template' || t === 'Calculator' || t === 'Interactive Tool' || t.includes('Calculator') || t.includes('Template')) {
    return 'Templates + Client Tools';
  }
  if (t === 'AI Prompt' || t === 'Automation / Apps Script' || t === 'Apps Script Tool' || t.includes('AI') || t.includes('Script')) {
    return 'AI + Automation';
  }
  if (t === 'Class' || t === 'Mini-Course' || t.includes('Course') || t.includes('Class')) {
    return 'Classes + Workshops';
  }
  return 'Guides + Checklists';
}

/**
 * REUSABLE RESOURCE CONTENT FIELDS
 * Created so HTC can add resources without asking for a redesign.
 */
export interface ResourceItem {
  // Identification & Routing
  id: string;
  slug: string; // URL slug for /resources/free-guides-downloads/[resource-slug]/
  catalogId: string; // e.g. "FILE NO. FL-CHK-01", "CARD NO. 475.25"
  stampLabel: string; // e.g. "FIELD-TESTED", "FL-COMPLIANT", "DESK READY"
  tabCategory: string; // e.g. "DRAWER 01 // TIMELINES"

  // Core content fields requested by HTC:
  title: string; // Resource Title
  category?: SimpleResourceCategory; // Simple category: Guides + Checklists, Templates + Client Tools, etc.
  placeholderTitle: string; // Blueprint schema placeholder
  resourceType: ResourceType; // Resource Type
  shortDescription: string; // Short Description
  placeholderDescription: string; // Blueprint schema placeholder
  fullDescription?: string; // Full Description if needed
  shortIntro?: string; // Short intro for landing page
  seoTitle?: string; // Unique Meta Title for SEO & Open Graph
  seoDescription?: string; // Unique Meta Description for SEO & Open Graph

  // Topic Tags (relational multi-tagging)
  topicTags?: ProblemTopicTag[]; // Reusable topic tags field
  topics: ProblemTopicTag[]; // backward compatible array
  topic: string; // primary topic display

  // Format and presentation
  format: string; // Format (e.g. "Print-Ready PDF", "Canva Template", "Copy-Paste Prompt", "Interactive Tool")
  deliveryMethod: 'instant_download' | 'copy_prompt' | 'canva_link' | 'interactive_tool' | 'class_registration';
  badge?: string; // e.g. "FLAGSHIP CHECKLIST", "CANVA SUITE", "FREE TRAINING"
  estimatedTimeOrPages?: string; // e.g. "4-Page Checklist", "Instant Copy", "25-Min Video"

  // Status & Priority
  isFeatured: boolean; // Featured / Not Featured
  isActive?: boolean; // Active / Hidden (defaults to true)
  sortOrder?: number; // Sort Order for custom ranking

  // Call-To-Action Configuration (Option A vs Option B)
  ctaLabel?: string; // CTA Label (e.g. "DOWNLOAD CHECKLIST", "GET THE PROMPT →")
  actionLabel: string; // primary button text
  ctaDestination?: 'direct_download' | 'landing_page' | 'external_url' | 'interactive_tool' | 'copy_prompt' | 'class_registration';
  landingPageEnabled?: boolean; // OPTION A (Direct) vs OPTION B (Landing Page)

  // Files, URLs & Assets
  downloadFileUrl?: string; // Download File / URL
  externalUrl?: string; // for Canva or external class links
  thumbnailUrl?: string; // Thumbnail / Cover
  thumbnailAlt?: string; // Alt Text
  previewImageUrl?: string; // Preview image for landing page
  videoPreviewUrl?: string; // Video preview for landing page

  // Highlights & Landing Page Scope
  highlights: string[]; // Highlights bullet points
  whatThisHelpsWith?: string[]; // [WHAT THIS RESOURCE HELPS WITH] list for landing page

  // Relational Linking Network
  relatedHometownBriefSlugs?: string[]; // Related Hometown Brief Articles
  relatedResourceIds?: string[]; // Related Resources
  relatedService?: { // Related Service if applicable
    name: string;
    url: string;
    description?: string;
  };

  // Timestamps
  publishDate?: string; // Publish Date (e.g. "2024-03-15")
  updatedDate?: string; // Updated Date (e.g. "2025-01-10")

  // Interactive Content
  promptContent?: string; // for AI Prompts
}

export type BrowseFormat = 
  | 'ALL RESOURCES'
  | 'GUIDES + CHECKLISTS'
  | 'GUIDE'
  | 'CHECKLIST'
  | 'TEMPLATE'
  | 'TEMPLATES'
  | 'TOOL'
  | 'CALCULATORS + TOOLS'
  | 'AI'
  | 'AI + AUTOMATION'
  | 'CLASS'
  | 'FREE CLASSES';

export const BROWSE_FORMAT_FILTERS: { label: string; value: BrowseFormat; shortCode: string }[] = [
  { label: 'ALL RESOURCES', value: 'ALL RESOURCES', shortCode: 'ALL' },
  { label: 'GUIDES', value: 'GUIDE', shortCode: 'GUIDE' },
  { label: 'CHECKLISTS', value: 'CHECKLIST', shortCode: 'CHECKLIST' },
  { label: 'TEMPLATES', value: 'TEMPLATE', shortCode: 'TEMPLATE' },
  { label: 'TOOLS & CALCS', value: 'TOOL', shortCode: 'TOOL' },
  { label: 'AI PROMPTS', value: 'AI', shortCode: 'AI' },
  { label: 'FREE CLASSES', value: 'CLASS', shortCode: 'CLASS' },
];

export function matchesBrowseFormat(item: ResourceItem, format: BrowseFormat): boolean {
  if (format === 'ALL RESOURCES') return true;
  if (format === 'GUIDES + CHECKLISTS') {
    return (
      item.resourceType === 'Checklist' ||
      item.resourceType === 'Guide' ||
      item.resourceType === 'Downloadable Guide' ||
      item.resourceType === 'Worksheet' ||
      item.resourceType === 'Quick Reference'
    );
  }
  if (format === 'GUIDE') {
    return (
      item.resourceType === 'Guide' ||
      item.resourceType === 'Downloadable Guide' ||
      item.resourceType === 'Quick Reference'
    );
  }
  if (format === 'CHECKLIST') {
    return item.resourceType === 'Checklist' || item.resourceType === 'Worksheet';
  }
  if (format === 'TEMPLATE' || format === 'TEMPLATES') {
    return item.resourceType === 'Template' || item.resourceType === 'Canva Template';
  }
  if (format === 'TOOL' || format === 'CALCULATORS + TOOLS') {
    return (
      item.resourceType === 'Calculator' ||
      item.resourceType === 'Interactive Tool' ||
      item.resourceType === 'Calculator / Interactive' ||
      item.resourceType === 'Automation / Apps Script' ||
      item.resourceType === 'Apps Script Tool'
    );
  }
  if (format === 'AI' || format === 'AI + AUTOMATION') {
    return (
      item.resourceType === 'AI Prompt' ||
      item.resourceType === 'Automation / Apps Script' ||
      item.resourceType === 'Apps Script Tool'
    );
  }
  if (format === 'CLASS' || format === 'FREE CLASSES') {
    return (
      item.resourceType === 'Class' ||
      item.resourceType === 'Mini-Course' ||
      item.resourceType === 'Class / Mini-Course'
    );
  }
  return true;
}

export type AppropriateCTA = 'DOWNLOAD →' | 'USE THE TOOL →' | 'START THE CLASS →' | 'VIEW PAGE →';

export function getAppropriateCTA(item: ResourceItem): AppropriateCTA {
  if (item.landingPageEnabled && item.ctaDestination === 'landing_page') {
    return 'VIEW PAGE →';
  }
  if (
    item.resourceType === 'Class' ||
    item.resourceType === 'Mini-Course' ||
    item.resourceType === 'Class / Mini-Course' || 
    item.deliveryMethod === 'class_registration'
  ) {
    return 'START THE CLASS →';
  }
  if (
    item.resourceType === 'Calculator' ||
    item.resourceType === 'Interactive Tool' ||
    item.resourceType === 'Calculator / Interactive' || 
    item.resourceType === 'Automation / Apps Script' ||
    item.resourceType === 'Apps Script Tool' || 
    item.deliveryMethod === 'interactive_tool'
  ) {
    return 'USE THE TOOL →';
  }
  return 'DOWNLOAD →';
}

export type FormatSpecificCTA = 
  | 'GET THE GUIDE →'
  | 'GET THE CHECKLIST →'
  | 'GET THE TEMPLATE →'
  | 'USE THE TOOL →'
  | 'GET THE PROMPT →'
  | 'BUILD THE TOOL →'
  | 'START THE CLASS →'
  | 'GET THE WORKSHEET →'
  | 'GET THE REFERENCE →';

export function getFormatSpecificCTA(item: ResourceItem): FormatSpecificCTA {
  switch (item.resourceType) {
    case 'Guide':
    case 'Downloadable Guide':
      return 'GET THE GUIDE →';
    case 'Checklist':
      return 'GET THE CHECKLIST →';
    case 'Template':
    case 'Canva Template':
      return 'GET THE TEMPLATE →';
    case 'Calculator':
    case 'Interactive Tool':
    case 'Calculator / Interactive':
      return 'USE THE TOOL →';
    case 'AI Prompt':
      return 'GET THE PROMPT →';
    case 'Automation / Apps Script':
    case 'Apps Script Tool':
      return 'BUILD THE TOOL →';
    case 'Class':
    case 'Mini-Course':
    case 'Class / Mini-Course':
      return 'START THE CLASS →';
    case 'Worksheet':
      return 'GET THE WORKSHEET →';
    case 'Quick Reference':
      return 'GET THE REFERENCE →';
    default:
      return 'GET THE GUIDE →';
  }
}

export type TypeMarker = 'GUIDE' | 'CHECKLIST' | 'TEMPLATE' | 'TOOL' | 'AI' | 'CLASS';

export interface TypeMarkerInfo {
  marker: TypeMarker;
  stampBg: string;
  stampText: string;
  stampBorder: string;
  cardAccentBorder: string;
  iconBg: string;
  mediaCategory: string;
}

export function getTypeMarkerInfo(type: ResourceType): TypeMarkerInfo {
  switch (type) {
    case 'Checklist':
      return {
        marker: 'CHECKLIST',
        stampBg: 'bg-[#0D9BA3]/10',
        stampText: 'text-[#0D9BA3]',
        stampBorder: 'border-[#0D9BA3]/40',
        cardAccentBorder: 'hover:border-[#0D9BA3]',
        iconBg: 'bg-[#0D9BA3]/10 text-[#0D9BA3]',
        mediaCategory: 'Field Checklist'
      };
    case 'Worksheet':
      return {
        marker: 'CHECKLIST',
        stampBg: 'bg-[#0D9BA3]/10',
        stampText: 'text-[#0D9BA3]',
        stampBorder: 'border-[#0D9BA3]/40',
        cardAccentBorder: 'hover:border-[#0D9BA3]',
        iconBg: 'bg-[#0D9BA3]/10 text-[#0D9BA3]',
        mediaCategory: 'Field Worksheet'
      };
    case 'Guide':
    case 'Downloadable Guide':
    case 'Quick Reference':
      return {
        marker: 'GUIDE',
        stampBg: 'bg-[#3A2E29]/5',
        stampText: 'text-[#3A2E29]',
        stampBorder: 'border-[#3A2E29]/25',
        cardAccentBorder: 'hover:border-[#3A2E29]',
        iconBg: 'bg-[#3A2E29]/10 text-[#3A2E29]',
        mediaCategory: 'Field Guide'
      };
    case 'Template':
    case 'Canva Template':
      return {
        marker: 'TEMPLATE',
        stampBg: 'bg-[#FE7311]/10',
        stampText: 'text-[#FE7311]',
        stampBorder: 'border-[#FE7311]/40',
        cardAccentBorder: 'hover:border-[#FE7311]',
        iconBg: 'bg-[#FE7311]/10 text-[#FE7311]',
        mediaCategory: 'Template Suite'
      };
    case 'Calculator':
    case 'Interactive Tool':
    case 'Calculator / Interactive':
      return {
        marker: 'TOOL',
        stampBg: 'bg-[#0D9BA3]/10',
        stampText: 'text-[#0D9BA3]',
        stampBorder: 'border-[#0D9BA3]/40',
        cardAccentBorder: 'hover:border-[#0D9BA3]',
        iconBg: 'bg-[#0D9BA3]/10 text-[#0D9BA3]',
        mediaCategory: 'Interactive Tool'
      };
    case 'Automation / Apps Script':
    case 'Apps Script Tool':
      return {
        marker: 'TOOL',
        stampBg: 'bg-[#3A2E29]/5',
        stampText: 'text-[#3A2E29]',
        stampBorder: 'border-[#3A2E29]/25',
        cardAccentBorder: 'hover:border-[#0D9BA3]',
        iconBg: 'bg-[#3A2E29]/10 text-[#3A2E29]',
        mediaCategory: 'Workflow Automation'
      };
    case 'AI Prompt':
      return {
        marker: 'AI',
        stampBg: 'bg-[#0D9BA3]/10',
        stampText: 'text-[#0D9BA3]',
        stampBorder: 'border-[#0D9BA3]/40',
        cardAccentBorder: 'hover:border-[#0D9BA3]',
        iconBg: 'bg-[#0D9BA3]/10 text-[#0D9BA3]',
        mediaCategory: 'AI Prompt Package'
      };
    case 'Class':
    case 'Mini-Course':
    case 'Class / Mini-Course':
    default:
      return {
        marker: 'CLASS',
        stampBg: 'bg-[#FE7311]/10',
        stampText: 'text-[#FE7311]',
        stampBorder: 'border-[#FE7311]/40',
        cardAccentBorder: 'hover:border-[#FE7311]',
        iconBg: 'bg-[#FE7311]/10 text-[#FE7311]',
        mediaCategory: 'On-Demand Education'
      };
  }
}

export const RESOURCE_TYPE_FILTERS: { label: string; value: 'ALL' | ResourceType; count?: number }[] = [
  { label: 'All Resources', value: 'ALL' },
  { label: 'Checklists', value: 'Checklist' },
  { label: 'Guides & Manuals', value: 'Downloadable Guide' },
  { label: 'Canva Templates', value: 'Canva Template' },
  { label: 'AI Prompts', value: 'AI Prompt' },
  { label: 'Apps Script & Tools', value: 'Apps Script Tool' },
  { label: 'Calculators', value: 'Calculator / Interactive' },
  { label: 'Classes & Courses', value: 'Class / Mini-Course' },
  { label: 'Quick Reference', value: 'Quick Reference' }
];

export const RESOURCE_TOPIC_FILTERS: (ProblemTopicTag | 'All Topics')[] = [
  'All Topics',
  'Transactions',
  'Listings',
  'Condo + HOA',
  'Broker Compliance',
  'Agent Operations',
  'Business Growth',
  'AI + Automation',
  'Team Training'
];

export const RESOURCE_LIBRARY_ITEMS: ResourceItem[] = [
  {
    id: 'res-checklist-01',
    slug: 'florida-contract-to-close-checklist',
    catalogId: 'FILE NO. FL-CHK-01',
    stampLabel: 'FIELD-TESTED',
    tabCategory: 'DRAWER 01 // CONTRACT TIMELINES',
    resourceType: 'Checklist',
    title: 'Florida Contract-to-Close Critical Timelines & Compliance Checklist',
    placeholderTitle: '[RESOURCE TITLE: Florida Contract-to-Close Critical Timelines & Compliance Checklist]',
    shortDescription: 'A field-tested milestone checklist covering earnest money deposit verification, inspection windows, title commitments, and statutory notice deadlines.',
    placeholderDescription: '[SHORT DESCRIPTION: Field-tested milestone checklist covering escrow deposit verification, municipal lien orders, and FREC file retention standards.]',
    shortIntro: 'Every Florida FAR/BAR contract has critical statutory calculation rules that can inadvertently expose earnest money deposits if miscalculated. This checklist provides your team with our internal compliance audit checkpoints.',
    fullDescription: 'Designed by senior Florida transaction coordinators, this 4-page operational checklist outlines day-computation rules under Standard F, second escrow verification letters under Florida Statute 475.25, and municipal lien request protocols. Built for solo agents and scaling teams.',
    topics: ['Transactions', 'Broker Compliance', 'Agent Operations'],
    topicTags: ['Transactions', 'Broker Compliance', 'Agent Operations'],
    topic: 'Transactions',
    format: 'Print-Ready PDF (8.5x11)',
    deliveryMethod: 'instant_download',
    downloadFileUrl: '/downloads/florida-contract-to-close-checklist.pdf',
    badge: 'FLAGSHIP CHECKLIST',
    estimatedTimeOrPages: '4-Page Field Checklist',
    isFeatured: true,
    isActive: true,
    sortOrder: 1,
    landingPageEnabled: true,
    ctaLabel: 'DOWNLOAD CHECKLIST',
    actionLabel: 'DOWNLOAD CHECKLIST',
    ctaDestination: 'landing_page',
    publishDate: '2024-02-15',
    updatedDate: '2025-01-10',
    thumbnailUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Contract-to-close checklist documents on executive wooden desk',
    previewImageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&auto=format&fit=crop&q=80',
    highlights: [
      'Standard F day-computation rules (avoiding missed Saturday/Sunday cancellation cutoffs)',
      'Escrow deposit verification timelines under Paragraph 2',
      'Municipal lien, permit, and utility payoff inspection protocol'
    ],
    whatThisHelpsWith: [
      'Prevents missed inspection period cancellation cutoffs (Standard F computation rules)',
      'Eliminates second escrow verification gaps with Florida title agencies and closing attorneys',
      'Ensures statutory FREC 5-year compliance records are complete from Day 1 of contract acceptance',
      'Standardizes communication across listing agents, cooperating buyers, lenders, and escrow officers'
    ],
    relatedHometownBriefSlugs: [
      'escrow-letters-frec-compliance',
      'standard-f-calendar-day-traps',
      'sb4d-condo-contract-contingencies'
    ],
    relatedResourceIds: ['res-guide-01', 'res-ai-01', 'res-ref-01'],
    relatedService: {
      name: 'Contract-to-Close TC Service',
      url: '/services/contract-to-close/',
      description: 'End-to-end transaction management from ratified contract through funding.'
    }
  },
  {
    id: 'res-checklist-02',
    slug: 'florida-listing-to-under-contract-checklist',
    catalogId: 'FILE NO. FL-LST-13',
    stampLabel: 'PRE-MLS PROTOCOL',
    tabCategory: 'DRAWER 07 // LISTINGS & INTAKE',
    resourceType: 'Checklist',
    title: 'Florida Listing-to-Under-Contract Onboarding & Document Checklist',
    placeholderTitle: '[RESOURCE TITLE: Florida Listing-to-Under-Contract Onboarding & Document Checklist]',
    shortDescription: 'Pre-listing milestone checklist covering mandatory seller property disclosures, lead-based paint rules, HOA addenda, payoff authorizations, and MLS status protocol.',
    placeholderDescription: '[SHORT DESCRIPTION: Pre-listing checklist covering Florida mandatory seller disclosures, lead-based paint, and HOA addenda.]',
    shortIntro: 'A compliant listing intake prevents transaction collapse weeks before an offer even arrives. This intake roadmap ensures all statutory disclosures and title payoff authorizations are secured prior to MLS syndication.',
    topics: ['Listings', 'Broker Compliance', 'Agent Operations'],
    topicTags: ['Listings', 'Broker Compliance', 'Agent Operations'],
    topic: 'Listings',
    format: 'Print-Ready PDF (8.5x11)',
    deliveryMethod: 'instant_download',
    downloadFileUrl: '/downloads/florida-listing-to-under-contract-checklist.pdf',
    badge: 'LISTING LAUNCH',
    estimatedTimeOrPages: '3-Page Listing Protocol',
    isFeatured: false,
    isActive: true,
    sortOrder: 2,
    landingPageEnabled: true,
    ctaLabel: 'DOWNLOAD LISTING CHECKLIST',
    actionLabel: 'DOWNLOAD LISTING CHECKLIST',
    ctaDestination: 'landing_page',
    publishDate: '2024-03-01',
    updatedDate: '2025-01-14',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Modern home keys and listing document folder',
    previewImageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&auto=format&fit=crop&q=80',
    highlights: [
      'Mandatory Florida Seller Property Disclosures and Johnson v. Davis latent defect liability rules',
      'Lead-based paint disclosures for pre-1978 residences and EPA Protect Your Family pamphlet receipt',
      'HOA / Condo disclosure summary delivery requirements prior to contract execution'
    ],
    whatThisHelpsWith: [
      'Pre-empts Johnson v. Davis material defect claims with ironclad seller disclosures',
      'Secures lender payoff authorizations and association estoppel contact information on Day 1',
      'Streamlines MLS media, lockbox verification, and showing instruction protocols'
    ],
    relatedHometownBriefSlugs: [
      'seller-disclosure-traps-florida',
      'escrow-letters-frec-compliance'
    ],
    relatedResourceIds: ['res-canva-02', 'res-guide-02'],
    relatedService: {
      name: 'Listing-to-Contract Coordination',
      url: '/services/listing-coordination/',
      description: 'Pre-listing intake, disclosure verification, MLS file compliance, and compliance filing.'
    }
  },
  {
    id: 'res-guide-01',
    slug: 'sb-4d-condo-reserve-audit-field-guide',
    catalogId: 'FILE NO. FL-SIRS-02',
    stampLabel: 'FL STATUTE AUDIT',
    tabCategory: 'DRAWER 02 // CONDO & HOA',
    resourceType: 'Guide',
    title: 'SB 4-D Milestone Inspection & Condo Reserve Audit Field Guide',
    placeholderTitle: '[RESOURCE TITLE: SB 4-D Milestone Inspection & Condo Reserve Audit Field Guide]',
    shortDescription: 'What Florida agents and buyers must verify regarding Structural Integrity Reserve Studies (SIRS) before waiving inspection and financing contingencies.',
    placeholderDescription: '[SHORT DESCRIPTION: What Florida agents and buyers must verify regarding Structural Integrity Reserve Studies (SIRS) before waiving financing.]',
    shortIntro: 'Florida Senate Bill 4-D fundamentally altered condominium purchasing and financing. This field guide equips agents with the exact underwriting triggers, 3-day rescission period rules, and Fannie Mae condominium eligibility standards.',
    fullDescription: 'An executive 6-page briefing detailing statutory milestone inspections for buildings 3 stories or higher (25 vs 30 year triggers), mandatory SIRS funding deadlines, and the 718.503 disclosure packet checklist.',
    topics: ['Condo + HOA', 'Transactions', 'Broker Compliance'],
    topicTags: ['Condo + HOA', 'Transactions', 'Broker Compliance'],
    topic: 'Condo + HOA',
    format: 'Executive PDF Field Guide',
    deliveryMethod: 'instant_download',
    downloadFileUrl: '/downloads/sb-4d-condo-reserve-audit-guide.pdf',
    badge: 'CONDO SPECIAL',
    estimatedTimeOrPages: '6-Page Audit Manual',
    isFeatured: true,
    isActive: true,
    sortOrder: 3,
    landingPageEnabled: true,
    ctaLabel: 'DOWNLOAD FIELD GUIDE',
    actionLabel: 'DOWNLOAD FIELD GUIDE',
    ctaDestination: 'landing_page',
    publishDate: '2024-01-20',
    updatedDate: '2025-02-01',
    thumbnailUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'High-rise residential condominium building facade in Florida',
    previewImageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80',
    highlights: [
      'Statutory triggers for 25-year vs. 30-year milestone inspections',
      'Underwriting red flags that cause Fannie Mae/Freddie Mac financing review holds',
      '3-day condo resale document delivery calculation rules'
    ],
    whatThisHelpsWith: [
      'Identifies structural inspection milestones and reserve funding gaps before clients waive contingencies',
      'Prevents last-minute lender appraisal rejections caused by condo association deferred maintenance',
      'Calculates exact statutory 3-day buyer cancellation rights upon receipt of Section 718 disclosures'
    ],
    relatedHometownBriefSlugs: [
      'sb4d-condo-contract-contingencies',
      'standard-f-calendar-day-traps'
    ],
    relatedResourceIds: ['res-class-02', 'res-checklist-01'],
    relatedService: {
      name: 'Contract-to-Close TC Service',
      url: '/services/contract-to-close/',
      description: 'Specialized condo document collection and statutory contingency verification.'
    }
  },
  {
    id: 'res-canva-01',
    slug: 'client-milestone-canva-templates',
    catalogId: 'FILE NO. FL-DSK-03',
    stampLabel: 'READY TO BRAND',
    tabCategory: 'DRAWER 03 // CLIENT EXPERIENCE',
    resourceType: 'Canva Template',
    title: 'Client Under-Contract Milestone & Road-to-Closing Visual Updates',
    placeholderTitle: '[RESOURCE TITLE: Client Under-Contract Milestone & Road-to-Closing Visual Updates (Canva)]',
    shortDescription: 'Customizable Canva graphic templates to update buyers and sellers on key milestones: Escrow Received, Inspection Passed, Appraisal Cleared, Clear to Close.',
    placeholderDescription: '[SHORT DESCRIPTION: Customizable Canva graphic templates to update buyers and sellers on key transaction milestones.]',
    shortIntro: 'Clients get anxious when they do not know what happens next. Send branded, reassuring graphic updates via text message or email as each milestone is cleared.',
    topics: ['Transactions', 'Agent Operations', 'Business Growth'],
    topicTags: ['Transactions', 'Agent Operations', 'Business Growth'],
    topic: 'Transactions',
    format: 'Canva Template (Free Account Compatible)',
    deliveryMethod: 'canva_link',
    externalUrl: 'https://canva.com',
    badge: 'CANVA SUITE',
    estimatedTimeOrPages: '8 Ready-to-Edit Layouts',
    isFeatured: false,
    isActive: true,
    sortOrder: 4,
    landingPageEnabled: false,
    ctaLabel: 'OPEN IN CANVA',
    actionLabel: 'OPEN IN CANVA',
    ctaDestination: 'external_url',
    publishDate: '2024-04-10',
    updatedDate: '2025-01-22',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Digital design visual graphics for real estate marketing',
    highlights: [
      'Ready-to-brand with your brokerage colors and agent headshot',
      'Square (1:1) and Story (9:16) formats for SMS, WhatsApp, and social',
      'Pre-written client reassuring copy for escrow, appraisal, and closing day'
    ],
    whatThisHelpsWith: [
      'Elevates client communication and eliminates "what happens next?" anxiety',
      'Turns routine contract milestones into shareable referral touchpoints',
      'Fully customizable in under 60 seconds with free Canva accounts'
    ],
    relatedHometownBriefSlugs: [
      'escrow-letters-frec-compliance'
    ],
    relatedResourceIds: ['res-canva-02', 'res-checklist-01']
  },
  {
    id: 'res-ai-01',
    slug: 'florida-contract-pdf-date-extractor-prompt',
    catalogId: 'FILE NO. FL-PRM-04',
    stampLabel: 'LLM TESTED',
    tabCategory: 'DRAWER 04 // AUTOMATION & AI',
    resourceType: 'AI Prompt',
    title: 'Florida Real Estate Contract PDF Intake & Key Date Extractor Prompt',
    placeholderTitle: '[RESOURCE TITLE: Florida Real Estate Contract PDF Intake & Key Date Extractor Prompt]',
    shortDescription: 'Structured LLM prompt to feed into ChatGPT or Claude to extract all critical deadlines, party contacts, escrow details, and contingency dates from Florida contract PDFs.',
    placeholderDescription: '[SHORT DESCRIPTION: Structured LLM prompt for extracting critical deadlines and escrow amounts from Florida contract PDFs.]',
    shortIntro: 'Save 30+ minutes per file. Feed signed Florida FAR/BAR contract PDFs into ChatGPT or Claude with this tested prompt to extract dates, contacts, and addenda flags.',
    topics: ['AI + Automation', 'Transactions', 'Agent Operations'],
    topicTags: ['AI + Automation', 'Transactions', 'Agent Operations'],
    topic: 'AI + Automation',
    format: 'Copy-Paste Prompt & Variable Guide',
    deliveryMethod: 'copy_prompt',
    badge: 'AI WORKFLOW',
    estimatedTimeOrPages: 'Instant Copy • 1-Click',
    isFeatured: false,
    isActive: true,
    sortOrder: 5,
    landingPageEnabled: true,
    ctaLabel: 'GET THE PROMPT →',
    actionLabel: 'COPY AI PROMPT',
    ctaDestination: 'copy_prompt',
    publishDate: '2024-03-20',
    updatedDate: '2025-02-10',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Digital automation technology prompt interface',
    previewImageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80',
    highlights: [
      'Prompts specifically engineered for Florida FAR/BAR Standard and AS IS contracts',
      'Extracts effective date, inspection end date, loan approval date, and closing date',
      'Flags missing broker license numbers, incomplete addenda, and blank checkboxes'
    ],
    whatThisHelpsWith: [
      'Cuts manual contract intake time from 45 minutes to under 3 minutes',
      'Outputs structured table formatted for Google Calendar, Folio, or CRM entry',
      'Validates all statutory notice windows against Standard F computation rules'
    ],
    relatedHometownBriefSlugs: [
      'standard-f-calendar-day-traps',
      'escrow-letters-frec-compliance'
    ],
    relatedResourceIds: ['res-script-01', 'res-ai-02'],
    promptContent: `You are an expert Florida Real Estate Transaction Coordinator. Analyze the attached Florida FAR/BAR Contract and output a clean milestone summary:

1. CORE DETAILS:
- Contract Type: [Standard / AS IS]
- Property Address:
- Buyer(s):
- Seller(s):
- Effective Date (Date of last signing/initialing):

2. CRITICAL DEADLINES (Apply Florida Standard F Calendar Rules):
- Initial Escrow Deposit Amount & Due Date:
- Additional Escrow Deposit (if applicable):
- Inspection Period Expiration (5:00 PM EST rule):
- Loan Application Deadline (5 days):
- Loan Approval Period Expiration:
- Title Commitment Delivery Deadline:
- HOA / Condo Application Submission Deadline:
- Closing Date:

3. CONTRACT AUDIT FLAGS:
- Any missing initials or signatures?
- Are all addenda marked in Paragraph 19 attached?
- Is the Escrow Agent contact information complete?`
  },
  {
    id: 'res-script-01',
    slug: 'google-sheets-contract-date-calculator-script',
    catalogId: 'FILE NO. FL-SHT-05',
    stampLabel: 'CALC VERIFIED',
    tabCategory: 'DRAWER 04 // AUTOMATION & AI',
    resourceType: 'Apps Script Tool',
    title: 'Google Sheets Florida Contract Milestone & Date Computation Tool',
    placeholderTitle: '[RESOURCE TITLE: Google Sheets Florida Contract Milestone & Date Computation Tool]',
    shortDescription: 'Lightweight Google Sheets template with built-in Google Apps Script calculating FAR/BAR Standard F day computations, rolling weekend rules, and calendar alerts.',
    placeholderDescription: '[SHORT DESCRIPTION: Google Sheets template with Apps Script calculating FAR/BAR Standard F day computations and calendar alerts.]',
    shortIntro: 'Stop manually counting days on your desk calendar. Use this Google Sheet template with integrated Apps Script to automate Standard F calendar calculations.',
    topics: ['AI + Automation', 'Transactions', 'Agent Operations'],
    topicTags: ['AI + Automation', 'Transactions', 'Agent Operations'],
    topic: 'AI + Automation',
    format: 'Google Sheets Template + Apps Script',
    deliveryMethod: 'canva_link',
    badge: 'AUTOMATION',
    estimatedTimeOrPages: 'Google Sheets One-Click Copy',
    isFeatured: false,
    isActive: true,
    sortOrder: 6,
    landingPageEnabled: false,
    ctaLabel: 'BUILD THE TOOL →',
    actionLabel: 'MAKE A GOOGLE SHEET COPY',
    ctaDestination: 'external_url',
    externalUrl: 'https://docs.google.com/spreadsheets/',
    publishDate: '2024-04-05',
    updatedDate: '2025-01-18',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Computer screen showing clean spreadsheet script code',
    highlights: [
      'Automatically rolls Saturday/Sunday/National Holiday inspection dates to next business day 5:00 PM',
      'Calculates 10-day FREC escrow verification alerts',
      'One-click export of dates to Google Calendar'
    ],
    whatThisHelpsWith: [
      'Eliminates manual math errors on 5-day escrow and 15-day inspection windows',
      'Includes built-in Florida statutory holiday calendar lookup functions',
      'Plugs into any existing agent spreadsheet without paid third-party add-ons'
    ],
    relatedHometownBriefSlugs: [
      'standard-f-calendar-day-traps'
    ],
    relatedResourceIds: ['res-ai-01', 'res-canva-01']
  },
  {
    id: 'res-calc-01',
    slug: 'agent-business-roi-calculator',
    catalogId: 'FILE NO. FL-ROI-06',
    stampLabel: 'INTERACTIVE TOOL',
    tabCategory: 'DRAWER 05 // OPERATIONS & ROI',
    resourceType: 'Calculator',
    title: 'Run the Numbers: Agent Transaction Leverage & Hourly Value Calculator',
    placeholderTitle: '[RESOURCE TITLE: Run the Numbers: Agent Transaction Leverage & Hourly Value Calculator]',
    shortDescription: 'Interactive financial calculator calculating how many hours you spend per file, your true effective hourly rate, and the revenue gain from offloading contract-to-close.',
    placeholderDescription: '[SHORT DESCRIPTION: Interactive calculator analyzing hours spent per file and revenue gained by delegating coordination.]',
    shortIntro: 'Most Florida agents spend 12 to 18 administrative hours per contract on phone calls, document chasing, and escrow emails. Calculate your true hourly ROI with this interactive tool.',
    topics: ['Business Growth', 'Agent Operations'],
    topicTags: ['Business Growth', 'Agent Operations'],
    topic: 'Business Growth',
    format: 'Interactive In-Browser Tool',
    deliveryMethod: 'interactive_tool',
    badge: 'INTERACTIVE TOOL',
    estimatedTimeOrPages: 'Instant Results • 2 Minutes',
    isFeatured: true,
    isActive: true,
    sortOrder: 7,
    landingPageEnabled: false,
    ctaLabel: 'USE THE TOOL →',
    actionLabel: 'RUN THE CALCULATOR',
    ctaDestination: 'interactive_tool',
    publishDate: '2024-02-01',
    updatedDate: '2025-01-25',
    thumbnailUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Financial calculator and balance sheet on clean desk',
    highlights: [
      'Custom sliders for annual transaction volume, average commission, and admin hours',
      'Calculates reclaimed business-generation hours per closed deal',
      'Instant breakdown of ROI comparing solo admin vs. dedicated TC coordination'
    ],
    whatThisHelpsWith: [
      'Calculates your true hourly value when executing $15/hr paperwork vs $300/hr prospecting',
      'Forecasts annual transaction capacity gain when delegating contract administration',
      'Provides a mathematically sound basis for brokerage delegation planning'
    ],
    relatedHometownBriefSlugs: [
      'escrow-letters-frec-compliance'
    ],
    relatedResourceIds: ['res-checklist-01', 'res-worksheet-01'],
    relatedService: {
      name: 'Contract-to-Close TC Service',
      url: '/services/contract-to-close/',
      description: 'Hand over transaction paperwork so you can focus on showings and listings.'
    }
  },
  {
    id: 'res-class-01',
    slug: 'bulletproof-florida-transactions-course',
    catalogId: 'FILE NO. FL-CLS-07',
    stampLabel: 'ON-DEMAND CLASS',
    tabCategory: 'DRAWER 01 // CONTRACT TIMELINES',
    resourceType: 'Class',
    title: 'Bulletproof the Transaction: Preventing Florida Contract Breaches',
    placeholderTitle: '[RESOURCE TITLE: Bulletproof the Transaction: Preventing Florida Contract Breaches]',
    shortDescription: 'Free 25-minute on-demand training covering the 5 most frequent transaction breakdown points in Florida contracts and how transaction coordinators catch them.',
    placeholderDescription: '[SHORT DESCRIPTION: Free on-demand training covering frequent transaction breakdown points in Florida contracts.]',
    shortIntro: 'Over 18% of Florida real estate contracts fall out of escrow due to preventable deadline disputes and financing ambiguity. This 25-minute masterclass walks through the safeguards.',
    fullDescription: 'Taught by Hometown Transaction Coordinators TC specialists, this high-yield training covers loan commitment vs loan approval, notice delivery pitfalls, and handling HOA estoppel delay tactics without putting earnest money deposits at risk.',
    topics: ['Transactions', 'Broker Compliance', 'Team Training'],
    topicTags: ['Transactions', 'Broker Compliance', 'Team Training'],
    topic: 'Transactions',
    format: 'On-Demand Video Mini-Course',
    deliveryMethod: 'class_registration',
    badge: 'FREE TRAINING',
    estimatedTimeOrPages: '25-Min On-Demand Video',
    isFeatured: true,
    isActive: true,
    sortOrder: 8,
    landingPageEnabled: true,
    ctaLabel: 'START THE CLASS →',
    actionLabel: 'ACCESS FREE MINI-COURSE',
    ctaDestination: 'landing_page',
    publishDate: '2024-01-15',
    updatedDate: '2025-02-12',
    thumbnailUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Professional seminar training classroom setting',
    previewImageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&auto=format&fit=crop&q=80',
    highlights: [
      'Financing Contingency: Difference between Loan Approval and Loan Commitment',
      'How to properly deliver written cancellation notice before 11:59 PM',
      'Repair escrow traps and post-closing occupancy agreement safeguards'
    ],
    whatThisHelpsWith: [
      'Prevents earnest money forfeiture due to ambiguous loan commitment notices',
      'Equips newer and experienced agents with defensive transaction audit checklists',
      'Trains teams on statutory notice delivery methods accepted by Florida courts'
    ],
    relatedHometownBriefSlugs: [
      'standard-f-calendar-day-traps',
      'escrow-letters-frec-compliance'
    ],
    relatedResourceIds: ['res-checklist-01', 'res-guide-01'],
    relatedService: {
      name: 'Broker Team TC Partnership',
      url: '/services/team-tc/',
      description: 'Dedicated team coordination for brokerages and top-producing teams.'
    }
  },
  {
    id: 'res-ref-01',
    slug: 'florida-statutory-deadlines-cheatsheet',
    catalogId: 'FILE NO. FL-LAW-08',
    stampLabel: 'STATUTORY AUDIT',
    tabCategory: 'DRAWER 06 // BROKER COMPLIANCE',
    resourceType: 'Quick Reference',
    title: 'Florida Real Estate Statutory Deadlines & Notice Cheatsheet',
    placeholderTitle: '[RESOURCE TITLE: Florida Real Estate Statutory Deadlines & Notice Cheatsheet]',
    shortDescription: 'A single-page, laminated-style reference sheet summarizing Florida Statutes Ch. 475, FREC rules, escrow deposit notice periods, and dispute timelines.',
    placeholderDescription: '[SHORT DESCRIPTION: Single-page reference sheet summarizing Florida Statutes Ch. 475 and escrow notice periods.]',
    shortIntro: 'Keep this essential compliance summary taped to your desk or saved on your phone. Outlines Florida Statute Chapter 475 notice timeframes and FREC deposit requirements.',
    topics: ['Broker Compliance', 'Transactions', 'Team Training'],
    topicTags: ['Broker Compliance', 'Transactions', 'Team Training'],
    topic: 'Broker Compliance',
    format: 'Laminated-Style Quick Reference PDF',
    deliveryMethod: 'instant_download',
    downloadFileUrl: '/downloads/florida-statutory-deadlines-cheatsheet.pdf',
    badge: 'DESK REFERENCE',
    estimatedTimeOrPages: '2-Page Desk Cheatsheet',
    isFeatured: false,
    isActive: true,
    sortOrder: 9,
    landingPageEnabled: false,
    ctaLabel: 'GET THE REFERENCE →',
    actionLabel: 'DOWNLOAD CHEATSHEET',
    ctaDestination: 'direct_download',
    publishDate: '2024-03-10',
    updatedDate: '2025-01-08',
    thumbnailUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Legal desk reference book and scales of justice',
    highlights: [
      '3-day escrow deposit bank deposit rule for Florida brokers',
      '10-day written request for escrow verification letter from title/attorney',
      '30-day FREC notice of conflicting escrow demands timeline'
    ],
    whatThisHelpsWith: [
      'Maintains perfect FREC broker compliance during random state escrow audits',
      'Clarifies business day vs calendar day triggers under Chapter 475',
      'Provides definitive answer to title verification letter request timelines'
    ],
    relatedHometownBriefSlugs: [
      'escrow-letters-frec-compliance',
      'seller-disclosure-traps-florida'
    ],
    relatedResourceIds: ['res-guide-02', 'res-checklist-01']
  },
  {
    id: 'res-class-02',
    slug: 'condo-hoa-due-diligence-masterclass',
    catalogId: 'FILE NO. FL-HOA-09',
    stampLabel: 'ASSOCIATION LAW',
    tabCategory: 'DRAWER 02 // CONDO & HOA',
    resourceType: 'Mini-Course',
    title: 'Condo, Co-op & HOA Due Diligence Masterclass for Florida Agents',
    placeholderTitle: '[RESOURCE TITLE: Condo, Co-op & HOA Due Diligence Masterclass for Florida Agents]',
    shortDescription: 'Practical agent training on navigating Florida condo governance, 718 resale disclosures, HOA estoppel certificates, and association approval delays.',
    placeholderDescription: '[SHORT DESCRIPTION: Practical training on Florida condo governance, 718 resale disclosures, and HOA estoppel certificates.]',
    shortIntro: 'Association transactions require specific diligence in Florida. Learn how to expedite HOA estoppel certificates and manage the 3-day statutory rescission window smoothly.',
    topics: ['Condo + HOA', 'Transactions', 'Team Training'],
    topicTags: ['Condo + HOA', 'Transactions', 'Team Training'],
    topic: 'Condo + HOA',
    format: 'On-Demand Workshop + Slide Deck',
    deliveryMethod: 'class_registration',
    badge: 'ASSOCIATION LAW',
    estimatedTimeOrPages: '35-Min On-Demand Video',
    isFeatured: false,
    isActive: true,
    sortOrder: 10,
    landingPageEnabled: false,
    ctaLabel: 'START THE CLASS →',
    actionLabel: 'WATCH MASTERCLASS',
    ctaDestination: 'class_registration',
    publishDate: '2024-04-18',
    updatedDate: '2025-01-30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Condominium architecture and resident association lounge',
    highlights: [
      'Statutory 3-day rescission period computation upon receipt of condo docs',
      'Expedited estoppel fees and cap limits under Florida Statute 720.0885',
      'Handling association interview backlogs without risking closing extensions'
    ],
    whatThisHelpsWith: [
      'Prevents closing extensions caused by slow HOA management company estoppels',
      'Explains statutory fee caps to protect sellers from unauthorized rush fees',
      'Provides scripts for buyers navigating association approval board interviews'
    ],
    relatedHometownBriefSlugs: [
      'sb4d-condo-contract-contingencies'
    ],
    relatedResourceIds: ['res-guide-01', 'res-class-01']
  },
  {
    id: 'res-canva-02',
    slug: 'buyer-seller-closing-roadmaps-canva',
    catalogId: 'FILE NO. FL-RDM-10',
    stampLabel: 'CLIENT PACKET',
    tabCategory: 'DRAWER 03 // CLIENT EXPERIENCE',
    resourceType: 'Template',
    title: 'Buyer & Seller Florida Closing Timeline Roadmaps (Canva)',
    placeholderTitle: '[RESOURCE TITLE: Buyer & Seller Florida Closing Timeline Roadmaps (Canva)]',
    shortDescription: 'Professional, customizable 1-page visual roadmaps to include in client onboarding packets. Explains escrow, inspection, appraisal, and closing steps simply.',
    placeholderDescription: '[SHORT DESCRIPTION: Customizable visual roadmaps explaining escrow, inspection, appraisal, and closing steps.]',
    shortIntro: 'Impress buyers and sellers at initial consultation. These 1-page infographic roadmaps translate complex contract steps into approachable, reassuring milestones.',
    topics: ['Listings', 'Transactions', 'Business Growth', 'Agent Operations'],
    topicTags: ['Listings', 'Transactions', 'Business Growth', 'Agent Operations'],
    topic: 'Listings',
    format: 'Canva Template (Customizable 8.5x11)',
    deliveryMethod: 'canva_link',
    badge: 'CLIENT PACKET',
    estimatedTimeOrPages: '2 Presentation Templates',
    isFeatured: false,
    isActive: true,
    sortOrder: 11,
    landingPageEnabled: false,
    ctaLabel: 'GET THE TEMPLATE →',
    actionLabel: 'OPEN IN CANVA',
    ctaDestination: 'external_url',
    externalUrl: 'https://canva.com',
    publishDate: '2024-03-25',
    updatedDate: '2025-01-19',
    thumbnailUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Visual workflow roadmap diagrams on white paper',
    highlights: [
      'Step-by-step buyer roadmap with escrow, mortgage, and walk-through markers',
      'Step-by-step seller roadmap with title commitment, HOA payoff, and deed signing',
      'Zero real estate jargon — built for consumer clarity and broker branding'
    ],
    whatThisHelpsWith: [
      'Included in buyer and seller consultation folders to win more client listings',
      'Sets transparent expectations for earnest deposit and inspection timing',
      'Eliminates panicked mid-transaction calls with clear milestone roadmaps'
    ],
    relatedHometownBriefSlugs: [
      'seller-disclosure-traps-florida'
    ],
    relatedResourceIds: ['res-canva-01', 'res-checklist-02']
  },
  {
    id: 'res-guide-02',
    slug: 'broker-compliance-frec-audit-manual',
    catalogId: 'FILE NO. FL-REC-11',
    stampLabel: 'FREC 5-YR RULE',
    tabCategory: 'DRAWER 06 // BROKER COMPLIANCE',
    resourceType: 'Guide',
    title: 'Broker Compliance & FREC File Audit Preparation Manual',
    placeholderTitle: '[RESOURCE TITLE: Broker Compliance & FREC File Audit Preparation Manual]',
    shortDescription: 'A complete guide to Florida file retention standards (5 years under Florida Statute 475.5015) and required disclosures to keep brokerages audit-ready.',
    placeholderDescription: '[SHORT DESCRIPTION: Complete guide to Florida file retention standards and required disclosures to keep brokerages audit-ready.]',
    shortIntro: 'Florida brokers are required by law to maintain complete transaction files for 5 years. This comprehensive manual details the exact documentation required for closed, cancelled, and expired deals.',
    topics: ['Broker Compliance', 'Agent Operations', 'Team Training'],
    topicTags: ['Broker Compliance', 'Agent Operations', 'Team Training'],
    topic: 'Broker Compliance',
    format: 'Compliance Manual PDF',
    deliveryMethod: 'instant_download',
    downloadFileUrl: '/downloads/broker-compliance-frec-manual.pdf',
    badge: 'BROKER GUIDE',
    estimatedTimeOrPages: '5-Page Compliance Protocol',
    isFeatured: false,
    isActive: true,
    sortOrder: 12,
    landingPageEnabled: false,
    ctaLabel: 'GET THE GUIDE →',
    actionLabel: 'DOWNLOAD COMPLIANCE MANUAL',
    ctaDestination: 'direct_download',
    publishDate: '2024-02-28',
    updatedDate: '2025-01-05',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Corporate broker file cabinet and compliance folders',
    highlights: [
      'Mandatory document checklist for closed, cancelled, and expired files',
      'Electronic file storage and cloud backup compliance standards',
      'Brokerage delegation protocols for licensed vs. unlicensed transaction support'
    ],
    whatThisHelpsWith: [
      'Ensures every transaction binder contains all required statutory disclosures',
      'Protects broker licenses against FREC administrative complaints and fines',
      'Provides standardized archival filing guidelines for digital cloud systems'
    ],
    relatedHometownBriefSlugs: [
      'escrow-letters-frec-compliance'
    ],
    relatedResourceIds: ['res-ref-01', 'res-checklist-01'],
    relatedService: {
      name: 'Brokerage File Compliance Review',
      url: '/services/broker-compliance/',
      description: 'Systematic pre-closing and post-closing file audits for Florida managing brokers.'
    }
  },
  {
    id: 'res-ai-02',
    slug: 'repair-request-paragraph-9-prompt',
    catalogId: 'FILE NO. FL-REP-12',
    stampLabel: 'FAR/BAR PAR. 9',
    tabCategory: 'DRAWER 04 // AUTOMATION & AI',
    resourceType: 'AI Prompt',
    title: 'Repair Request & Addendum Drafting Prompt for Inspection Windows',
    placeholderTitle: '[RESOURCE TITLE: Repair Request & Addendum Drafting Prompt for Inspection Windows]',
    shortDescription: 'AI prompt template for converting raw home inspection deficiency reports into neutral, structured Paragraph 9 repair addenda language.',
    placeholderDescription: '[SHORT DESCRIPTION: AI prompt template for converting home inspection deficiency reports into neutral repair addenda language.]',
    shortIntro: 'Turn messy 50-page home inspection PDF excerpts into objective, structured Paragraph 9 repair requests with licensed contractor repair conditions.',
    topics: ['Transactions', 'AI + Automation', 'Agent Operations'],
    topicTags: ['Transactions', 'AI + Automation', 'Agent Operations'],
    topic: 'Transactions',
    format: 'Copy-Paste Prompt Template',
    deliveryMethod: 'copy_prompt',
    badge: 'INSPECTION TOOL',
    estimatedTimeOrPages: 'Instant Copy • 1-Click',
    isFeatured: false,
    isActive: true,
    sortOrder: 13,
    landingPageEnabled: false,
    ctaLabel: 'GET THE PROMPT →',
    actionLabel: 'COPY REPAIR PROMPT',
    ctaDestination: 'copy_prompt',
    publishDate: '2024-03-12',
    updatedDate: '2025-02-05',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Home inspector clipboard and flashlight inspecting attic',
    highlights: [
      'Generates objective licensed contractor repair wording without vague promises',
      'Specifies proof of permit, paid receipts, and reinspection milestones',
      'Formats credit-in-lieu of repair language compatible with standard lender limits'
    ],
    whatThisHelpsWith: [
      'Prevents vague repair agreements like "seller to fix roof" that trigger disputes',
      'Structures closing cost credits within lender allowable maximum thresholds',
      'Enforces licensed contractor requirements with receipts delivered 5 days prior to close'
    ],
    relatedHometownBriefSlugs: [
      'standard-f-calendar-day-traps'
    ],
    relatedResourceIds: ['res-ai-01', 'res-checklist-01'],
    promptContent: `Act as a senior Florida real estate transaction coordinator and contract drafting specialist. 
Draft an Addendum to the Florida FAR/BAR Residential Contract addressing buyer inspection repair requests based on these raw inspector findings:

INPUTS:
- Contract Date:
- Property Address:
- Specific Deficiencies Noted by Inspector: [Insert list of items]
- Desired Resolution: [Seller Repair by Licensed Contractor / Closing Cost Credit in lieu of repairs]

OUTPUT INSTRUCTIONS:
1. Use exact Florida FAR/BAR Addendum phrasing.
2. If repairs: State "Seller agrees, at Seller's expense, prior to the date of closing, to have the following items repaired or replaced by an appropriately licensed and insured contractor, and to provide Buyer with copies of paid receipts, permits, and transferable warranties (if any) at least 5 days prior to Closing."
3. If credit: State "Seller agrees to credit Buyer $_____ at Closing toward Buyer's closing costs, prepaids, or mortgage loan points, subject to Buyer's lender approval."
4. Avoid informal phrasing like "fix the leak" or "check the AC".`
  },
  {
    id: 'res-worksheet-01',
    slug: 'escrow-earnest-money-verification-worksheet',
    catalogId: 'FILE NO. FL-ESC-14',
    stampLabel: 'ESCROW AUDIT',
    tabCategory: 'DRAWER 01 // CONTRACT TIMELINES',
    resourceType: 'Worksheet',
    title: 'Escrow & Earnest Money Verification Worksheet for Florida Agents',
    placeholderTitle: '[RESOURCE TITLE: Escrow & Earnest Money Verification Worksheet for Florida Agents]',
    shortDescription: 'Step-by-step verification worksheet tracking initial and additional earnest deposits, wire confirmations, and written verification letter requests under F.S. 475.25.',
    placeholderDescription: '[SHORT DESCRIPTION: Step-by-step worksheet tracking initial and additional earnest money deposits and statutory verification letters.]',
    shortIntro: 'Never assume earnest money arrived. This structured audit worksheet tracks bank deposit confirmations and written escrow verification letters to eliminate default risks.',
    topics: ['Transactions', 'Broker Compliance', 'Agent Operations'],
    topicTags: ['Transactions', 'Broker Compliance', 'Agent Operations'],
    topic: 'Transactions',
    format: 'Printable / Fillable Worksheet PDF',
    deliveryMethod: 'instant_download',
    downloadFileUrl: '/downloads/escrow-verification-worksheet.pdf',
    badge: 'ESCROW AUDIT',
    estimatedTimeOrPages: '2-Page Audit Worksheet',
    isFeatured: false,
    isActive: true,
    sortOrder: 14,
    landingPageEnabled: false,
    ctaLabel: 'GET THE WORKSHEET →',
    actionLabel: 'DOWNLOAD WORKSHEET',
    ctaDestination: 'direct_download',
    publishDate: '2024-04-02',
    updatedDate: '2025-01-28',
    thumbnailUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80',
    thumbnailAlt: 'Escrow verification wire receipt on office clipboard',
    highlights: [
      'Logs initial deposit due date, wire transfer reference, and bank receipt confirmation',
      'Tracks 10-day written request for escrow verification letter to closing agent',
      'Includes sample written verification request letter for title companies'
    ],
    whatThisHelpsWith: [
      'Documents strict compliance with Florida Statute 475.25(1)(k)',
      'Provides written proof of buyer escrow funding for cooperating broker records',
      'Eliminates wire fraud vulnerabilities with verified title agency instructions'
    ],
    relatedHometownBriefSlugs: [
      'escrow-letters-frec-compliance'
    ],
    relatedResourceIds: ['res-checklist-01', 'res-ref-01']
  }
];

export function getResourceBySlug(slug: string): ResourceItem | undefined {
  return RESOURCE_LIBRARY_ITEMS.find((item) => item.slug === slug || item.id === slug);
}

export function getAllResourceSlugs(): string[] {
  return RESOURCE_LIBRARY_ITEMS.map((item) => item.slug);
}
