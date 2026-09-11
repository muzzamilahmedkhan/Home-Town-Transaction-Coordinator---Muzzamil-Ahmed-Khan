export type FreeClassArea = 
  | 'All Areas'
  | 'Condo'
  | 'Co-op'
  | 'HOA'
  | 'Bulletproof the Transaction'
  | 'Transaction Operations'
  | 'Agent Systems'
  | 'Mini-Courses';

export interface FreeClassLesson {
  lessonNumber: number;
  title: string;
  duration: string;
  summary: string;
}

export interface FreeClassItem {
  id: string;
  catalogId: string;
  areaCategory: 'Condo' | 'Co-op' | 'HOA' | 'Bulletproof the Transaction' | 'Transaction Operations' | 'Agent Systems' | 'Mini-Courses';
  areaTag: string;
  badge: string;
  
  // Production titles & descriptions
  title: string;
  shortDescription: string;
  formatDuration: string;
  actionLabel: string;
  
  // Blueprint / HTC placeholders (as requested: [CLASS TITLE], [SHORT DESCRIPTION], [FORMAT / DURATION], START THE CLASS →)
  placeholderTitle: string;
  placeholderDescription: string;
  placeholderFormatDuration: string;
  placeholderActionLabel: string;
  
  // Video & learning metadata (Distinct visual treatment: This is something I watch/learn, not a PDF)
  durationMinutes: number;
  lessonsCount: number;
  lessons: FreeClassLesson[];
  keyTakeaways: string[];
  materialsIncluded: string[];
  instructorRole: string;
  targetAudience: string;
  videoAspect: string;
  featured?: boolean;
  isUpcoming?: boolean;
}

export const FREE_CLASS_AREAS: FreeClassArea[] = [
  'All Areas',
  'Bulletproof the Transaction',
  'Condo',
  'Co-op',
  'HOA',
  'Transaction Operations',
  'Agent Systems',
  'Mini-Courses'
];

export const FREE_CLASSES_DATA: FreeClassItem[] = [
  {
    id: 'class-bulletproof-01',
    catalogId: 'CLASS NO. HTC-CLS-01',
    areaCategory: 'Bulletproof the Transaction',
    areaTag: 'FL CONTRACT RISK DEFENSE',
    badge: 'FLAGSHIP MASTERCLASS',
    title: 'Bulletproof the Transaction: Preventing Florida Contract Breaches',
    shortDescription: 'The 5 most frequent transaction breakdown points in Florida contracts (FAR/BAR As-Is & Standard) and the proactive operational guardrails that prevent escrow forfeiture.',
    formatDuration: 'On-Demand Video Masterclass • 25 Minutes',
    actionLabel: 'START THE CLASS →',
    
    placeholderTitle: '[CLASS TITLE: Bulletproof the Transaction: Preventing Florida Contract Breaches]',
    placeholderDescription: '[SHORT DESCRIPTION: On-demand video training covering the 5 most frequent transaction breakdown points in Florida contracts.]',
    placeholderFormatDuration: '[FORMAT / DURATION: On-Demand Video Masterclass • 25 Minutes]',
    placeholderActionLabel: 'START THE CLASS →',
    
    durationMinutes: 25,
    lessonsCount: 4,
    instructorRole: 'Hometown TC Senior Compliance & Escrow Team',
    targetAudience: 'Florida Licensed Realtors, Managing Brokers & Transaction Coordinators',
    videoAspect: '16:9 HD Streaming Video',
    featured: true,
    lessons: [
      {
        lessonNumber: 1,
        title: 'FAR/BAR Paragraph 8: Loan Approval vs. Loan Commitment Traps',
        duration: '7:15',
        summary: 'Why receiving a "conditional approval" is not the end of the financing contingency, and how missing the written notice deadline forfeits buyer deposits.'
      },
      {
        lessonNumber: 2,
        title: 'Standard F Time Computations & The 11:59 PM Written Notice Rule',
        duration: '6:30',
        summary: 'Mastering calendar days vs. business days, holiday rolls, and strict delivery timestamp verification.'
      },
      {
        lessonNumber: 3,
        title: 'Inspection Period Expiration vs. Repair Addenda Stalemate',
        duration: '6:45',
        summary: 'How to avoid letting the inspection window expire before repair agreements or credit addenda are executed in writing.'
      },
      {
        lessonNumber: 4,
        title: 'Post-Closing Occupancy Agreements & Escrow Holdback Defenses',
        duration: '4:30',
        summary: 'Safeguards for seller post-occupancy agreements, per-diem penalties, and closing attorney escrow holdbacks.'
      }
    ],
    keyTakeaways: [
      'Understand the precise legal difference between "Loan Approval" and "Loan Commitment" under FAR/BAR Section 8(b)',
      'Calculate Standard F timeline roll rules including state and national legal holidays without calendar calculation errors',
      'Deploy the exact written notice language required before 11:59 PM on the final day of inspection'
    ],
    materialsIncluded: [
      '25-Minute On-Demand HD Video Lecture',
      'Downloadable Presentation Slide Deck (PDF)',
      'Contract Breach Prevention Quick Cheatsheet',
      'Certificate of Completion'
    ]
  },
  {
    id: 'class-condo-01',
    catalogId: 'CLASS NO. HTC-CLS-02',
    areaCategory: 'Condo',
    areaTag: 'FL CONDOMINIUM LAW § 718',
    badge: 'SB 4-D SPECIAL',
    title: 'Florida Condo Due Diligence: SB 4-D Milestones, SIRS Reserves & 718 Disclosures',
    shortDescription: 'What Florida agents must verify regarding 30-year Structural Integrity Reserve Studies (SIRS), milestone inspection reports, and mandatory 3-day rescission documents before waiving contingencies.',
    formatDuration: 'On-Demand Video Workshop • 35 Minutes',
    actionLabel: 'START THE CLASS →',
    
    placeholderTitle: '[CLASS TITLE: Florida Condo Due Diligence: SB 4-D Milestones, SIRS Reserves & 718 Disclosures]',
    placeholderDescription: '[SHORT DESCRIPTION: Video workshop on navigating Florida condo governance, SB 4-D milestone inspections, and SIRS reserve audits.]',
    placeholderFormatDuration: '[FORMAT / DURATION: On-Demand Video Workshop • 35 Minutes]',
    placeholderActionLabel: 'START THE CLASS →',
    
    durationMinutes: 35,
    lessonsCount: 4,
    instructorRole: 'Florida Association & Condo Due Diligence Specialist',
    targetAudience: 'Agents listing or selling Florida residential condominiums',
    videoAspect: '16:9 HD Streaming Video',
    featured: true,
    lessons: [
      {
        lessonNumber: 1,
        title: 'SB 4-D & SB 154 Milestone Structural Inspections Explained',
        duration: '9:20',
        summary: 'Age thresholds (30 years or 25 years within 3 miles of coastline), Phase 1 vs Phase 2 visual evaluations, and required buyer disclosures.'
      },
      {
        lessonNumber: 2,
        title: 'Structural Integrity Reserve Study (SIRS) Audit Protocol',
        duration: '10:15',
        summary: 'The 9 mandatory structural reserve components that cannot be waived or underfunded under Florida Statute 718.112.'
      },
      {
        lessonNumber: 3,
        title: 'Florida Stat. § 718.503 Resale Document Delivery & 3-Day Rescission',
        duration: '8:40',
        summary: 'When the 3-day buyer cancellation clock begins, proof of delivery receipt rules, and missing document traps.'
      },
      {
        lessonNumber: 4,
        title: 'Navigating Condo Board Approval Delays & Interview Queues',
        duration: '6:45',
        summary: 'Proactive scheduling strategies to prevent closing delays when management companies require 30 days for background checks.'
      }
    ],
    keyTakeaways: [
      'Spot the red flags in condo board meeting minutes and budget disclosures before submitting offers',
      'Verify whether a condo community has completed its mandatory SIRS study before Florida statutory deadlines',
      'Prevent buyer termination disputes by securing signed receipts for all 718 resale documents'
    ],
    materialsIncluded: [
      '35-Minute Video Workshop with Case Studies',
      'SIRS & Milestone Inspection Audit Checklist',
      'Condo Document Delivery Receipt Template'
    ]
  },
  {
    id: 'class-coop-01',
    catalogId: 'CLASS NO. HTC-CLS-03',
    areaCategory: 'Co-op',
    areaTag: 'FL COOPERATIVES § 719',
    badge: 'SPECIALTY TRAINING',
    title: 'Florida Co-op Due Diligence: Proprietary Leases, Shares & Board Approvals',
    shortDescription: 'Mastering the critical differences between Condos and Cooperatives under Florida Chapter 719, stock certificate pledges, proprietary leases, and lender financing nuances.',
    formatDuration: 'Video Mini-Course • 20 Minutes',
    actionLabel: 'START THE CLASS →',
    
    placeholderTitle: '[CLASS TITLE: Florida Co-op Due Diligence: Proprietary Leases, Shares & Board Approvals]',
    placeholderDescription: '[SHORT DESCRIPTION: Video mini-course on Florida co-op stock shares, proprietary leases, and board approval protocols.]',
    placeholderFormatDuration: '[FORMAT / DURATION: Video Mini-Course • 20 Minutes]',
    placeholderActionLabel: 'START THE CLASS →',
    
    durationMinutes: 20,
    lessonsCount: 3,
    instructorRole: 'Hometown TC Association Desk',
    targetAudience: 'Florida Agents handling Cooperative apartments and 55+ co-op communities',
    videoAspect: '16:9 HD Streaming Video',
    lessons: [
      {
        lessonNumber: 1,
        title: 'Real Property vs. Personal Property: Stock Certificates & Proprietary Leases',
        duration: '6:30',
        summary: 'Why co-op transactions involve stock transfers and proprietary lease assignments rather than warranty deeds.'
      },
      {
        lessonNumber: 2,
        title: 'Co-op Board Interview Protocols & Strict Financial Qualification Ratios',
        duration: '7:15',
        summary: 'How co-op boards enforce strict debt-to-income and cash reserve minimums, and how to pre-vet buyers before file submission.'
      },
      {
        lessonNumber: 3,
        title: 'Closing Coordination: Recognition Agreements & Share Transfers',
        duration: '6:15',
        summary: 'Working with cooperative attorney transfer agents, aztec recognition agreements, and lien search clearance.'
      }
    ],
    keyTakeaways: [
      'Accurately explain co-op ownership structures to prospective Florida buyers without confusing it with condominium fee simple title',
      'Assemble an audit-proof co-op board submission package that minimizes interview rejections',
      'Track recognition agreements between co-op lenders and cooperative boards to avoid closing day funding freezes'
    ],
    materialsIncluded: [
      '20-Minute Video Lecture',
      'Co-op Board Application Intake Checklist',
      'Florida Co-op vs. Condo Quick Comparison Matrix'
    ]
  },
  {
    id: 'class-hoa-01',
    catalogId: 'CLASS NO. HTC-CLS-04',
    areaCategory: 'HOA',
    areaTag: 'FL STATUTE § 720',
    badge: 'ESSENTIAL REALTOR CE',
    title: 'Mastering Florida HOA Estoppels, Chapter 720 Rules & Association Delays',
    shortDescription: 'Protect your buyer’s closing date and seller proceeds: Statutory estoppel certificate deadlines, fee caps, expedited fee limits, and clearing outstanding ARC violations.',
    formatDuration: 'Video Mini-Course • 22 Minutes',
    actionLabel: 'START THE CLASS →',
    
    placeholderTitle: '[CLASS TITLE: Mastering Florida HOA Estoppels, Chapter 720 Rules & Association Delays]',
    placeholderDescription: '[SHORT DESCRIPTION: Video mini-course covering Florida HOA estoppel timelines, fee caps under Statute 720, and violation defense.]',
    placeholderFormatDuration: '[FORMAT / DURATION: Video Mini-Course • 22 Minutes]',
    placeholderActionLabel: 'START THE CLASS →',
    
    durationMinutes: 22,
    lessonsCount: 3,
    instructorRole: 'Hometown TC Closing Coordinator',
    targetAudience: 'All Florida residential sales agents and listing specialists',
    videoAspect: '16:9 HD Streaming Video',
    featured: true,
    lessons: [
      {
        lessonNumber: 1,
        title: 'Florida Statute 720.0885 Estoppel Timeline & Statutory Fee Caps',
        duration: '7:45',
        summary: 'The 10-business-day response window, statutory standard fee limits, rush fees, and delinquent account surcharges.'
      },
      {
        lessonNumber: 2,
        title: 'Architectural Review Committee (ARC) Violations & Pre-Closing Clears',
        duration: '7:30',
        summary: 'How unapproved paint colors, unpermitted fences, and roof alterations trigger closing holds and who pays.'
      },
      {
        lessonNumber: 3,
        title: 'HOA Disclosure Summary Prior to Contract Execution (§ 720.401)',
        duration: '6:45',
        summary: 'The severe legal consequences of failing to deliver the statutory HOA disclosure summary prior to buyer signing.'
      }
    ],
    keyTakeaways: [
      'Calculate exactly when estoppel certificates expire (30 days from issuance or 35 days if sent by electronic mail)',
      'Ensure seller property disclosures address pending or threatened association assessments before going under contract',
      'Use the statutory estoppel request format to challenge unauthorized junk fees from third-party HOA management portals'
    ],
    materialsIncluded: [
      '22-Minute Video Class with Real-World Case Studies',
      'Statutory HOA Estoppel Request Template',
      'ARC Violation Clearance Worksheet'
    ]
  },
  {
    id: 'class-ops-01',
    catalogId: 'CLASS NO. HTC-CLS-05',
    areaCategory: 'Transaction Operations',
    areaTag: 'FL FILE PROTOCOLS',
    badge: 'OPERATIONS SUITE',
    title: 'Transaction Operations 101: Escrow Protocol, File Audits & FREC Compliance',
    shortDescription: 'How top Florida transaction desks set up contract-to-close files, verify earnest money escrow deposits, track municipal lien searches, and satisfy 5-year FREC audit mandates.',
    formatDuration: 'On-Demand Video Class • 30 Minutes',
    actionLabel: 'START THE CLASS →',
    
    placeholderTitle: '[CLASS TITLE: Transaction Operations 101: Escrow Protocol, File Audits & FREC Compliance]',
    placeholderDescription: '[SHORT DESCRIPTION: On-demand video class covering Florida transaction file setup, escrow verification, and 5-year FREC compliance.]',
    placeholderFormatDuration: '[FORMAT / DURATION: On-Demand Video Class • 30 Minutes]',
    placeholderActionLabel: 'START THE CLASS →',
    
    durationMinutes: 30,
    lessonsCount: 4,
    instructorRole: 'Hometown TC Operations Director',
    targetAudience: 'Agents, Admin Staff, and Aspiring Transaction Coordinators',
    videoAspect: '16:9 HD Streaming Video',
    lessons: [
      {
        lessonNumber: 1,
        title: 'Day 1 Intake: Contract Dissection & Critical Milestone Extraction',
        duration: '8:00',
        summary: 'How to build an airtight transaction calendar within 2 hours of executing a Florida purchase and sale contract.'
      },
      {
        lessonNumber: 2,
        title: 'Florida Escrow Verification Protocol & Title Verification Letters',
        duration: '7:30',
        summary: 'Requesting written escrow verification from title agents within 10 days of deposit due dates under Florida law.'
      },
      {
        lessonNumber: 3,
        title: 'Municipal Lien Searches, Unpermitted Work & Open Permit Cures',
        duration: '8:15',
        summary: 'Catching unclosed permits, code enforcement citations, and utility liens before title commitment issuance.'
      },
      {
        lessonNumber: 4,
        title: 'Florida Statute 475.5015 5-Year Document Retention Standards',
        duration: '6:15',
        summary: 'Brokerage compliance archive architecture: What must be saved for 5 years to guarantee a flawless DBPR/FREC audit.'
      }
    ],
    keyTakeaways: [
      'Build a foolproof milestone schedule for title, lender, co-op agent, and clients on Day 1',
      'Identify critical permit defects early enough in the contract timeline to negotiate cures under Paragraph 9',
      'Archive contract files according to Florida DBPR rules to eliminate brokerage compliance liability'
    ],
    materialsIncluded: [
      '30-Minute Masterclass Video Stream',
      'Transaction Intake Master Spreadsheet Template',
      'FREC 5-Year File Retention Standard Operating Procedure'
    ]
  },
  {
    id: 'class-systems-01',
    catalogId: 'CLASS NO. HTC-CLS-06',
    areaCategory: 'Agent Systems',
    areaTag: 'LEVERAGE & GROWTH',
    badge: 'HIGH ROI',
    title: 'Agent Systems & Leverage: Offloading 15+ Admin Hours Per Closed File',
    shortDescription: 'The operational blueprint for scaling Florida Realtors: Reclaiming 15 to 20 hours of administrative work per transaction, maintaining 5-star communication, and multiplying referral volume.',
    formatDuration: 'On-Demand Mini-Course • 24 Minutes',
    actionLabel: 'START THE CLASS →',
    
    placeholderTitle: '[CLASS TITLE: Agent Systems & Leverage: Offloading 15+ Admin Hours Per Closed File]',
    placeholderDescription: '[SHORT DESCRIPTION: Video training on reclaiming 15+ administrative hours per file through transaction coordination leverage.]',
    placeholderFormatDuration: '[FORMAT / DURATION: On-Demand Mini-Course • 24 Minutes]',
    placeholderActionLabel: 'START THE CLASS →',
    
    durationMinutes: 24,
    lessonsCount: 3,
    instructorRole: 'Hometown TC Founder & Growth Strategist',
    targetAudience: 'Solo Florida Realtors producing 6 to 30+ transactions annually',
    videoAspect: '16:9 HD Streaming Video',
    lessons: [
      {
        lessonNumber: 1,
        title: 'The Real Hourly Value of a Florida Realtor: Lead Gen vs. Paperwork',
        duration: '8:00',
        summary: 'Calculating your true effective hourly rate and why handling paperwork costs you $150 to $300/hr in lost client meetings.'
      },
      {
        lessonNumber: 2,
        title: 'The Clean Hand-Off: What to Delegate to Your TC in the First 60 Minutes',
        duration: '8:30',
        summary: 'The 3-minute file intake procedure that hands off contract-to-close completely without dropping a single communication ball.'
      },
      {
        lessonNumber: 3,
        title: 'Delivering White-Glove Client Updates Without Typing Emails',
        duration: '7:30',
        summary: 'How branded visual milestone updates and clear weekly digests keep buyers and sellers calm and generate repeat referrals.'
      }
    ],
    keyTakeaways: [
      'Pinpoint the exact 4 tasks you must never do as a producing real estate agent',
      'Set up clean communication boundaries so your clients feel completely taken care of while you focus on showings',
      'Calculate the annual revenue difference between solo administrative drag and coordinated team leverage'
    ],
    materialsIncluded: [
      '24-Minute High-Energy Strategy Video',
      'Agent Time Audit & Hourly Rate Calculator Sheet',
      '60-Minute New File Hand-Off Checklist'
    ]
  },
  {
    id: 'class-mini-01',
    catalogId: 'CLASS NO. HTC-CLS-07',
    areaCategory: 'Mini-Courses',
    areaTag: 'AI & SMART WORKFLOWS',
    badge: 'NEW WORKSHOP',
    title: 'AI-Powered Contract Intake & Automated Timeline Extraction for Realtors',
    shortDescription: 'How to use structured prompt engineering to ingest Florida contract PDFs, extract all party contacts, and auto-populate milestone dates in seconds with zero calculation errors.',
    formatDuration: 'Interactive Video Lab • 18 Minutes',
    actionLabel: 'START THE CLASS →',
    
    placeholderTitle: '[CLASS TITLE: AI-Powered Contract Intake & Automated Timeline Extraction for Realtors]',
    placeholderDescription: '[SHORT DESCRIPTION: Interactive video lab demonstrating AI prompt engineering for extracting Florida contract milestones.]',
    placeholderFormatDuration: '[FORMAT / DURATION: Interactive Video Lab • 18 Minutes]',
    placeholderActionLabel: 'START THE CLASS →',
    
    durationMinutes: 18,
    lessonsCount: 3,
    instructorRole: 'HTC Automation & Technology Lab',
    targetAudience: 'Forward-thinking Florida agents seeking operational speed and accuracy',
    videoAspect: '16:9 HD Streaming Video',
    lessons: [
      {
        lessonNumber: 1,
        title: 'Structuring LLM Prompts for Florida FAR/BAR Contract Documents',
        duration: '6:00',
        summary: 'Why generic ChatGPT prompts fail on Standard F day computations and how to feed exact contract clauses.'
      },
      {
        lessonNumber: 2,
        title: 'Building a Reliable Key Date Extraction Pipeline',
        duration: '6:30',
        summary: 'Extracting earnest money deadlines, title commitments, and financing notice dates with zero hallucinations.'
      },
      {
        lessonNumber: 3,
        title: 'Drafting Neutral Paragraph 9 Repair Addenda with AI',
        duration: '5:30',
        summary: 'Turning 40-page inspection reports into clear, legally defensive repair addendum clauses that listing agents accept.'
      }
    ],
    keyTakeaways: [
      'Deploy proven prompt templates that extract critical Florida contract dates in under 60 seconds',
      'Ensure zero hallucinations on weekend and holiday rollover computations',
      'Safely draft repair request language that keeps earnest money protected'
    ],
    materialsIncluded: [
      '18-Minute Video Walkthrough & Screen Share',
      'Copy-Paste AI Prompt Template Pack',
      'Google Apps Script Calendar Integration Snippet'
    ]
  }
];
