export interface HometownBriefArticle {
  id: string;
  slug: string;
  categorySlug: string;
  category: string;
  deskCode: string; // e.g. "DESK 01 // CONTRACTS"
  
  // Production Copy
  title: string;
  shortSummary: string;
  readTime: string; // e.g. "5 MIN READ"
  actionCta: 'READ THE BRIEF →';
  theBriefTakeaway: string;
  legalCitation: string;
  
  // Blueprint / HTC Placeholders as requested by brief:
  // [BRIEF TITLE], [SHORT SUMMARY], and READ THE BRIEF →
  placeholderTitle: string;
  placeholderShortSummary: string;
  placeholderActionCta: string;
  
  // Bidirectional link to companion library tool
  companionResourceId: string;
  companionResourceTitle: string;
  companionResourceType: string; // e.g. "Field Checklist", "Executive Guide", "Apps Script Tool"
  companionResourceCta: string; // e.g. "GET THE CHECKLIST →", "GET THE GUIDE →"
  companionResourceStamp: string; // e.g. "FILE NO. FL-CHK-01"
  
  isCuratedContext?: boolean;
}

export const HOMETOWN_BRIEF_ARTICLES: HometownBriefArticle[] = [
  {
    id: 'brief-01',
    slug: 'far-bar-inspection-periods-and-deadlines',
    categorySlug: 'contracts-forms',
    category: 'Florida Contracts + Forms',
    deskCode: 'DESK 01 // CONTRACTS',
    title: 'Navigating FAR/BAR "AS IS" Inspection Periods & Contingency Deadlines',
    shortSummary: 'A complete breakdown of Florida FAR/BAR Paragraph 12 inspection rules, Standard F calendar day calculations, weekend rolls, and why written notice must be delivered before 11:59 PM to safeguard escrow deposits.',
    readTime: '5 MIN READ',
    actionCta: 'READ THE BRIEF →',
    theBriefTakeaway: 'Under Florida FAR/BAR Paragraph 12, inspection periods count calendar days beginning the day after the effective date. Written notice of cancellation or executed repair extension must be delivered before 11:59 PM on the final day—informal text or email notices fail to preserve buyer rights.',
    legalCitation: 'Florida FAR/BAR Standard F & Paragraph 12 (Right to Inspect and Cancel)',
    placeholderTitle: '[BRIEF TITLE: Navigating FAR/BAR "AS IS" Inspection Periods & Contingency Deadlines]',
    placeholderShortSummary: '[SHORT SUMMARY: Operational analysis of Florida FAR/BAR Standard F day counting rules, written notice requirements, and deposit protection.]',
    placeholderActionCta: 'READ THE BRIEF →',
    companionResourceId: 'res-checklist-01',
    companionResourceTitle: 'Florida Contract-to-Close Critical Timelines & Compliance Checklist',
    companionResourceType: 'Field Checklist',
    companionResourceCta: 'GET THE CHECKLIST →',
    companionResourceStamp: 'FILE NO. FL-CHK-01',
    isCuratedContext: true
  },
  {
    id: 'brief-02',
    slug: 'sb-4d-milestone-inspections-condo-closings',
    categorySlug: 'condo-hoa',
    category: 'Condo + HOA',
    deskCode: 'DESK 04 // CONDO + HOA',
    title: 'How SB 4-D Milestone Inspections & SIRS Reserves Impact Florida Condo Closings',
    shortSummary: 'Understanding the post-Surfside statutory mandates for buildings 3 stories or higher reaching 30 years (or 25 years coastal), the 9 mandatory non-waivable structural reserves, and why missing studies trigger instant mortgage denials.',
    readTime: '6 MIN READ',
    actionCta: 'READ THE BRIEF →',
    theBriefTakeaway: 'Florida Statute § 718 mandates that associations complete Phase 1 structural inspections and Structural Integrity Reserve Studies (SIRS). Reserve component funding for roofs, plumbing, and structural members can no longer be waived, leading to major special assessments that must be disclosed under Paragraph 9.',
    legalCitation: 'Florida Statute § 718.112 & Senate Bills 4-D / 154',
    placeholderTitle: '[BRIEF TITLE: How SB 4-D Milestone Inspections & SIRS Reserves Impact Florida Condo Closings]',
    placeholderShortSummary: '[SHORT SUMMARY: Legal and underwriting impact of structural milestone inspections, reserve funding rules, and lender blacklists.]',
    placeholderActionCta: 'READ THE BRIEF →',
    companionResourceId: 'res-guide-01',
    companionResourceTitle: 'SB 4-D Milestone Inspection & Condo Reserve Audit Field Guide',
    companionResourceType: 'Executive Field Manual',
    companionResourceCta: 'GET THE GUIDE →',
    companionResourceStamp: 'FILE NO. FL-SIRS-02',
    isCuratedContext: true
  },
  {
    id: 'brief-03',
    slug: 'frec-rule-61j2-broker-file-retention-audit',
    categorySlug: 'broker-compliance',
    category: 'Broker Compliance',
    deskCode: 'DESK 03 // COMPLIANCE',
    title: 'FREC Rule 61J2 Broker File Retention: 5-Year Compliance Audit Checklist',
    shortSummary: 'The operational rules governing transaction document preservation, escrow verification receipts, rejected offer files, and digital archiving required by DBPR investigators during random brokerage audits.',
    readTime: '4 MIN READ',
    actionCta: 'READ THE BRIEF →',
    theBriefTakeaway: 'Florida Statute § 475.5015 requires Florida brokers to retain all books, accounts, and records for 5 years—including contracts that fell through and rejected written offers. Cloud archives must be immediately accessible and indexed by address and license number.',
    legalCitation: 'Florida Statute § 475.5015 & FREC Rule 61J2-10',
    placeholderTitle: '[BRIEF TITLE: FREC Rule 61J2 Broker File Retention: 5-Year Compliance Audit Checklist]',
    placeholderShortSummary: '[SHORT SUMMARY: Statutory requirements for 5-year transaction record retention, escrow verification records, and DBPR audit defense.]',
    placeholderActionCta: 'READ THE BRIEF →',
    companionResourceId: 'tool-sop-02',
    companionResourceTitle: 'DBPR & FREC 5-Year Florida Broker File Archive & Audit Readiness Protocol',
    companionResourceType: 'Compliance SOP & Guide',
    companionResourceCta: 'VIEW THE GUIDE →',
    companionResourceStamp: 'TOOL NO. HTC-AUT-08',
    isCuratedContext: true
  },
  {
    id: 'brief-04',
    slug: 'standard-f-effective-date-computation',
    categorySlug: 'contracts-forms',
    category: 'Florida Contracts + Forms',
    deskCode: 'DESK 01 // CONTRACTS',
    title: 'Escrow Calendar Computation: Standard F Day Counting Without Disqualification',
    shortSummary: 'Mathematical calculations of effective dates, time periods of 5 days or fewer vs. greater than 5 days, and how national holidays adjust Florida real estate closing deadlines.',
    readTime: '3 MIN READ',
    actionCta: 'READ THE BRIEF →',
    theBriefTakeaway: 'Under FAR/BAR Standard F, time periods of 5 days or fewer exclude Saturdays, Sundays, and legal holidays. Periods greater than 5 days count calendar days, but if the end date falls on a weekend or holiday, it automatically rolls to 5:00 PM the next business day.',
    legalCitation: 'Florida FAR/BAR Standard F (Time Calculations)',
    placeholderTitle: '[BRIEF TITLE: Escrow Calendar Computation: Standard F Day Counting Without Disqualification]',
    placeholderShortSummary: '[SHORT SUMMARY: Mathematical formulas and holiday rules for computing contract milestones without missed deadlines.]',
    placeholderActionCta: 'READ THE BRIEF →',
    companionResourceId: 'tool-script-01',
    companionResourceTitle: 'Google Sheets Standard F Florida Real Estate Date Calculator Script',
    companionResourceType: 'Apps Script Automation',
    companionResourceCta: 'BUILD THE TOOL →',
    companionResourceStamp: 'TOOL NO. HTC-AUT-03',
    isCuratedContext: false
  },
  {
    id: 'brief-05',
    slug: 'municipal-lien-searches-unrecorded-violations',
    categorySlug: 'transaction-operations',
    category: 'Transaction Operations',
    deskCode: 'DESK 02 // OPERATIONS',
    title: 'Municipal Lien Searches vs. Standard Title Insurance: Unrecorded Code Fines',
    shortSummary: 'Why standard title insurance commitments exclude unrecorded municipal code violations, expired building permits, and utility balances, and why a separate search is mandatory in every Florida county.',
    readTime: '4 MIN READ',
    actionCta: 'READ THE BRIEF →',
    theBriefTakeaway: 'Standard ALTA title insurance only covers recorded real property liens. Daily compounding code enforcement fines and expired permits from previous owners attach to the property upon deed transfer unless identified via a municipal lien search on Day 1.',
    legalCitation: 'Florida Municipal Code Enforcement Statutes § 162',
    placeholderTitle: '[BRIEF TITLE: Municipal Lien Searches vs. Standard Title Insurance: Unrecorded Code Fines]',
    placeholderShortSummary: '[SHORT SUMMARY: Operational need for municipal lien searches to uncover unrecorded municipal fines and open permits.]',
    placeholderActionCta: 'READ THE BRIEF →',
    companionResourceId: 'res-checklist-02',
    companionResourceTitle: 'Florida Listing-to-Under-Contract Onboarding & Document Checklist',
    companionResourceType: 'Pre-Listing Checklist',
    companionResourceCta: 'GET THE CHECKLIST →',
    companionResourceStamp: 'FILE NO. FL-LST-13',
    isCuratedContext: false
  },
  {
    id: 'brief-06',
    slug: 'the-math-of-reclaiming-15-hours-per-file',
    categorySlug: 'agent-growth',
    category: 'Agent Growth + Leverage',
    deskCode: 'DESK 05 // AGENT GROWTH',
    title: 'The Math of Reclaiming 15 Hours per File: Agent Hourly Value Analysis',
    shortSummary: 'A financial examination of effective hourly rates for Florida Realtors: calculating the real revenue loss of doing your own file coordination versus delegating paperwork to close more deals.',
    readTime: '5 MIN READ',
    actionCta: 'READ THE BRIEF →',
    theBriefTakeaway: 'An agent closing 18 files spends over 270 hours per year on admin paperwork. By delegating contract-to-close at $395 per file, the agent buys back 15 hours per file to reinvest into lead generation, yielding an average 4.2x ROI on commission earnings.',
    legalCitation: 'Hometown TC Agent Leverage Model',
    placeholderTitle: '[BRIEF TITLE: The Math of Reclaiming 15 Hours per File: Agent Hourly Value Analysis]',
    placeholderShortSummary: '[SHORT SUMMARY: Economic analysis of agent hourly rates and the production gains of delegating transaction paperwork.]',
    placeholderActionCta: 'READ THE BRIEF →',
    companionResourceId: 'tool-tool-01',
    companionResourceTitle: 'Agent Hourly Value & Transaction Delegation ROI Calculator',
    companionResourceType: 'Interactive Calculator Tool',
    companionResourceCta: 'BUILD THE TOOL →',
    companionResourceStamp: 'TOOL NO. HTC-AUT-06',
    isCuratedContext: false
  }
];

// Helper to get curated top 3 briefs for Section 8
export function getCuratedHometownBriefs(): HometownBriefArticle[] {
  return HOMETOWN_BRIEF_ARTICLES.filter(b => b.isCuratedContext);
}

// Helper to find related brief for any library resource
export function getRelatedBriefForResource(resourceId: string): HometownBriefArticle | undefined {
  return HOMETOWN_BRIEF_ARTICLES.find(b => b.companionResourceId === resourceId);
}

// Helper to find brief by slug
export function getBriefBySlug(slug: string): HometownBriefArticle | undefined {
  return HOMETOWN_BRIEF_ARTICLES.find(b => b.slug === slug);
}

// Alias for connection references
export const BRIEF_RESOURCE_CONNECTIONS = HOMETOWN_BRIEF_ARTICLES;

