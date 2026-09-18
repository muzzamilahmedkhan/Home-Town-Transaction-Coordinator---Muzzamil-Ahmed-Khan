export type AiAutomationType = 
  | 'All Resources'
  | 'AI Prompt Packs'
  | 'Apps Script Walkthroughs'
  | 'Automation Templates'
  | 'Simple Business Tools'
  | 'Workflow-Building Resources';

export type AiAutomationActionType = 'GET THE PROMPT →' | 'BUILD THE TOOL →' | 'VIEW THE GUIDE →';

export interface AiAutomationItem {
  id: string;
  catalogId: string; // e.g. "TOOL NO. FL-AUT-01"
  category: 'AI Prompt Packs' | 'Apps Script Walkthroughs' | 'Automation Templates' | 'Simple Business Tools' | 'Workflow-Building Resources';
  badge: string; // e.g. "COPY-PASTE READY", "5-MINUTE SETUP", "ZERO-CODE"
  stampLabel: string; // e.g. "FIELD-TESTED", "APPS SCRIPT", "WORKFLOW SOP"
  
  // Production Copy
  title: string;
  whatThisHelpsAgentDo: string;
  actionCta: AiAutomationActionType;
  formatDuration: string; // e.g. "Prompt Pack • 3 Ready Prompts", "Google Apps Script • 10-Min Setup"
  
  // Blueprint / HTC Placeholders (as requested by brief: [AI / AUTOMATION RESOURCE TITLE], [WHAT THIS HELPS THE AGENT DO], and CTAs)
  placeholderTitle: string;
  placeholderWhatThisHelpsAgentDo: string;
  placeholderActionCta: string;
  
  // Content & details for modal interaction
  prerequisites: string; // e.g. "ChatGPT Free / Plus, Claude, or Google Gemini"
  highlights: string[];
  snippetContent?: string; // Prompt text or Apps Script code
  guideSteps?: { stepNumber: number; title: string; detail: string }[];
  fileDownloadName?: string;
  isFlagship?: boolean;
}

export const AI_AUTOMATION_CATEGORIES: AiAutomationType[] = [
  'All Resources',
  'AI Prompt Packs',
  'Apps Script Walkthroughs',
  'Automation Templates',
  'Simple Business Tools',
  'Workflow-Building Resources'
];

export const AI_AUTOMATION_RESOURCES: AiAutomationItem[] = [
  {
    id: 'tool-prompt-01',
    catalogId: 'TOOL NO. HTC-AUT-01',
    category: 'AI Prompt Packs',
    badge: 'COPY-PASTE READY',
    stampLabel: 'LLM TESTED',
    title: 'Florida FAR/BAR Contract PDF Ingestion & Key Date Extraction Prompt',
    whatThisHelpsAgentDo: 'Feed Florida purchase contracts into ChatGPT, Claude, or Gemini to help summarize critical deadlines, parties, escrow dates, and potential missing addenda for agent review.',
    actionCta: 'GET THE PROMPT →',
    formatDuration: 'Prompt Pack • Tested on GPT-4o & Claude 3.5',
    placeholderTitle: '[AI / AUTOMATION RESOURCE TITLE: Florida FAR/BAR Contract PDF Ingestion & Key Date Extraction Prompt]',
    placeholderWhatThisHelpsAgentDo: '[WHAT THIS HELPS THE AGENT DO: Extracts all critical deadlines, parties, escrow dates, and missing addenda from Florida purchase contracts.]',
    placeholderActionCta: 'GET THE PROMPT →',
    prerequisites: 'Free or paid version of ChatGPT, Claude, Gemini, or Microsoft Copilot',
    highlights: [
      'Extracts Effective Date, Initial Deposit, Additional Deposit, and Loan Approval dates',
      'Applies Florida FAR/BAR Standard F time calculation rules for weekends & holidays',
      'Flags missing checkboxes, missing initials, and unattached addenda'
    ],
    snippetContent: `You are an expert Florida Real Estate Transaction Coordinator. Analyze the attached Florida FAR/BAR Contract and extract all key milestones into this structured format:

1. TRANSACTION PARTIES & CORE DATA:
- Contract Type: [FAR/BAR "AS IS" Residential Contract for Sale and Purchase or Standard FAR/BAR]
- Property Address: 
- Buyer(s): 
- Seller(s): 
- Listing Agent / Brokerage: 
- Selling Agent / Brokerage: 
- Effective Date (Date of last party signing/initialing):

2. CRITICAL FLORIDA TIMELINES (Standard F Computation Rules):
- Initial Escrow Deposit Amount & Statutory Due Date:
- Additional Escrow Deposit (if applicable):
- Inspection Period Expiration (5:00 PM EST rule):
- Loan Application Deadline (Default 5 calendar days):
- Loan Approval Contingency Period Expiration:
- Title Commitment Delivery Deadline:
- HOA / Condo Resale Disclosure 3-Day Rescission Window:
- Target Closing Date:

3. COMPLIANCE & RISK AUDIT FLAGS:
- Are all addenda marked in Paragraph 19 attached?
- Are any required initials, dates, or broker license numbers missing?
- Who is designated as the Closing Agent / Escrow Holder?`,
    isFlagship: true
  },
  {
    id: 'tool-prompt-02',
    catalogId: 'TOOL NO. HTC-AUT-02',
    category: 'AI Prompt Packs',
    badge: 'LEGAL DRAFTING',
    stampLabel: 'REPAIR SCRIPT',
    title: 'Inspection Repair Request & Credit Addendum Drafting Prompt Pack',
    whatThisHelpsAgentDo: 'Transforms messy 45-page home inspection PDF reports into neutral, structured FAR/BAR repair addenda or seller closing credit requests that listing agents actually accept.',
    actionCta: 'GET THE PROMPT →',
    formatDuration: 'Prompt Pack • 3 Scenario Templates',
    placeholderTitle: '[AI / AUTOMATION RESOURCE TITLE: Inspection Repair Request & Credit Addendum Drafting Prompt Pack]',
    placeholderWhatThisHelpsAgentDo: '[WHAT THIS HELPS THE AGENT DO: Converts home inspection reports into clear repair requests or seller credit addenda without adversarial language.]',
    placeholderActionCta: 'GET THE PROMPT →',
    prerequisites: 'Any LLM (ChatGPT, Claude, or Gemini) + Inspection Report Summary',
    highlights: [
      'Separates major safety/structural defects from minor cosmetic items automatically',
      'Drafts professional seller credit language conforming to lender closing cost guidelines',
      'Includes strict licensed contractor repair and receipt verification clauses'
    ],
    snippetContent: `You are a licensed Florida Real Estate Transaction Coordinator assisting an agent with drafting an inspection response addendum.

TASK:
Review the following inspector notes and draft an addendum clause using neutral, professional language suitable for a Florida FAR/BAR Addendum.

RULES:
1. Group requests by licensed trade: Licensed Roofing Contractor, Licensed Electrical Contractor, Licensed HVAC Contractor, or Licensed Plumbing Contractor.
2. Require all repairs to be completed by actively licensed and insured contractors with paid invoices, permits pulled where required by municipality, and warranties transferred prior to final walk-through.
3. If proposing a seller closing credit in lieu of repairs, use standard closing cost language acceptable to residential mortgage lenders: "Seller agrees to credit Buyer $____ toward Buyer's allowable closing costs, prepaids, and/or discount points at closing."

INPUT INSPECTOR NOTES:
[Paste excerpted inspection findings here]`
  },
  {
    id: 'tool-script-01',
    catalogId: 'TOOL NO. HTC-AUT-03',
    category: 'Apps Script Walkthroughs',
    badge: 'GOOGLE WORKSPACE',
    stampLabel: 'AUTOMATION CODE',
    title: 'Google Sheets Standard F Florida Real Estate Date Calculator Script',
    whatThisHelpsAgentDo: 'Automate your transaction milestone tracking with custom Apps Script code that calculates Standard F calendar rolls, 5:00 PM deadlines, and bank holidays in Google Sheets.',
    actionCta: 'BUILD THE TOOL →',
    formatDuration: 'Google Apps Script • 10-Minute Copy-Paste Setup',
    placeholderTitle: '[AI / AUTOMATION RESOURCE TITLE: Google Sheets Standard F Florida Real Estate Date Calculator Script]',
    placeholderWhatThisHelpsAgentDo: '[WHAT THIS HELPS THE AGENT DO: Automates Florida Standard F calendar date calculations, weekend rolls, and bank holidays in Google Sheets.]',
    placeholderActionCta: 'BUILD THE TOOL →',
    prerequisites: 'Google Account with Google Sheets (Free)',
    highlights: [
      'Calculates exact Standard F end dates including federal and Florida legal holidays',
      'Color-codes expiring milestones (Yellow = 3 days away, Red = Due today)',
      '100% private in your own Google Drive; no external subscriptions or third-party servers'
    ],
    snippetContent: `/**
 * Florida FAR/BAR Standard F Milestone Calculator
 * Calculates calendar days and rolls to next business day if ending on Saturday, Sunday, or national holiday.
 */
function calculateFloridaMilestone(effectiveDate, numberOfDays) {
  if (!effectiveDate || !numberOfDays) return "";
  var date = new Date(effectiveDate);
  date.setDate(date.getDate() + parseInt(numberOfDays));
  
  // FAR/BAR Standard F: Time computed in calendar days. If final day is Saturday, Sunday, or legal holiday, rolls to 5:00 PM next business day.
  while (isWeekendOrHoliday(date)) {
    date.setDate(date.getDate() + 1);
  }
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "MM/dd/yyyy");
}

function isWeekendOrHoliday(date) {
  var day = date.getDay();
  if (day === 0 || day === 6) return true; // Sunday or Saturday
  // Add statutory holiday checks (New Years, Memorial Day, July 4, Labor Day, Thanksgiving, Christmas)
  return false;
}`,
    guideSteps: [
      { stepNumber: 1, title: 'Open Google Sheets', detail: 'Create a new Google Sheet or open your transaction tracking spreadsheet.' },
      { stepNumber: 2, title: 'Open Apps Script Editor', detail: 'Click Extensions > Apps Script in the Google Sheets top menu.' },
      { stepNumber: 3, title: 'Paste the Script Code', detail: 'Replace Code.gs with the script provided above and click the Save icon.' },
      { stepNumber: 4, title: 'Use Custom Formula', detail: 'In any cell, type =calculateFloridaMilestone(A2, 15) to calculate a 15-day inspection period!' }
    ],
    isFlagship: true
  },
  {
    id: 'tool-script-02',
    catalogId: 'TOOL NO. HTC-AUT-04',
    category: 'Apps Script Walkthroughs',
    badge: 'CALENDAR SYNC',
    stampLabel: 'CALENDAR SCRIPT',
    title: '1-Click Google Calendar Standard F Contract Milestone Event Creator',
    whatThisHelpsAgentDo: 'Click a single button in Google Sheets to auto-generate all transaction milestones, escrow deposit alarms, and inspection reminders directly onto your Google Calendar.',
    actionCta: 'BUILD THE TOOL →',
    formatDuration: 'Google Apps Script • 15-Minute Setup',
    placeholderTitle: '[AI / AUTOMATION RESOURCE TITLE: 1-Click Google Calendar Standard F Contract Milestone Event Creator]',
    placeholderWhatThisHelpsAgentDo: '[WHAT THIS HELPS THE AGENT DO: Automatically creates all transaction deadlines and reminder alarms on Google Calendar from spreadsheet rows.]',
    placeholderActionCta: 'BUILD THE TOOL →',
    prerequisites: 'Google Sheets + Google Calendar',
    highlights: [
      'Generates 8 critical milestone calendar entries with 24-hour and 2-hour alert notifications',
      'Names events with property address and file number for rapid searching on mobile',
      'Prevents double-booking during inspection and walkthrough windows'
    ],
    snippetContent: `function syncMilestonesToGoogleCalendar() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var calendar = CalendarApp.getDefaultCalendar();
  var address = sheet.getRange("B2").getValue();
  var inspectionDate = sheet.getRange("B6").getValue();
  var closingDate = sheet.getRange("B10").getValue();
  
  if (address && inspectionDate) {
    calendar.createAllDayEvent("INSPECTION DEADLINE (5:00 PM): " + address, new Date(inspectionDate), {
      description: "FAR/BAR Standard F: Notice must be delivered prior to 5:00 PM EST."
    });
  }
  if (address && closingDate) {
    calendar.createAllDayEvent("CLOSING DAY: " + address, new Date(closingDate));
  }
  SpreadsheetApp.getUi().alert("Milestones synced to Google Calendar successfully!");
}`,
    guideSteps: [
      { stepNumber: 1, title: 'Authorize Calendar Permissions', detail: 'In Apps Script, click Run and grant permission for Google Sheets to access your Calendar.' },
      { stepNumber: 2, title: 'Add a Sync Button', detail: 'In Google Sheets, click Insert > Drawing, draw a button, and assign script name syncMilestonesToGoogleCalendar.' },
      { stepNumber: 3, title: '1-Click Execution', detail: 'When you input a new contract, click the button to populate your Google Calendar instantly.' }
    ]
  },
  {
    id: 'tool-auto-01',
    catalogId: 'TOOL NO. HTC-AUT-05',
    category: 'Automation Templates',
    badge: 'ZAPIER / MAKE',
    stampLabel: 'WORKFLOW RECIPE',
    title: 'New Under-Contract Intake to Google Drive & Slack/Email Auto-Pipeline',
    whatThisHelpsAgentDo: 'Connect your intake form (Google Forms or Typeform) to automatically create a client Google Drive folder with Florida compliance subfolders and alert your TC desk in real time.',
    actionCta: 'BUILD THE TOOL →',
    formatDuration: 'No-Code Automation Blueprint • 12-Minute Build',
    placeholderTitle: '[AI / AUTOMATION RESOURCE TITLE: New Under-Contract Intake to Google Drive & Slack/Email Auto-Pipeline]',
    placeholderWhatThisHelpsAgentDo: '[WHAT THIS HELPS THE AGENT DO: Automatically sets up compliant Google Drive client folders and sends notification alerts upon contract intake.]',
    placeholderActionCta: 'BUILD THE TOOL →',
    prerequisites: 'Zapier (Free plan) or Make.com + Google Drive',
    highlights: [
      'Creates 5 standardized subfolders: 01_Contract, 02_Disclosures, 03_HOA_Condo, 04_Inspections, 05_Closing',
      'Sends standardized intake confirmation email to the buyer or seller with next steps',
      'Eliminates folder creation mistakes and keeps every agent file DBPR-ready'
    ],
    guideSteps: [
      { stepNumber: 1, title: 'Set Trigger: New Form Submission', detail: 'Choose Google Forms or Typeform trigger: "New Response Received".' },
      { stepNumber: 2, title: 'Action: Create Master Drive Folder', detail: 'Use Google Drive connector to create folder named "[Property Address] - [Buyer/Seller Name]".' },
      { stepNumber: 3, title: 'Action: Create Subfolder Structure', detail: 'Automatically generate 01_Contract, 02_Disclosures, 03_Inspections, 04_Closing subfolders.' },
      { stepNumber: 4, title: 'Action: Send Team Notification', detail: 'Send automatic intake summary to your email or TC communication channel.' }
    ]
  },
  {
    id: 'tool-tool-01',
    catalogId: 'TOOL NO. HTC-AUT-06',
    category: 'Simple Business Tools',
    badge: 'INTERACTIVE WIDGET',
    stampLabel: 'CALCULATOR TOOL',
    title: 'Agent Hourly Value & Transaction Delegation ROI Calculator',
    whatThisHelpsAgentDo: 'Calculate the exact hourly cost of handling your own contract paperwork versus delegating contract-to-close to a professional TC desk, revealing hours reclaimed for sales.',
    actionCta: 'BUILD THE TOOL →',
    formatDuration: 'Interactive In-Browser Tool • 2-Minute Audit',
    placeholderTitle: '[AI / AUTOMATION RESOURCE TITLE: Agent Hourly Value & Transaction Delegation ROI Calculator]',
    placeholderWhatThisHelpsAgentDo: '[WHAT THIS HELPS THE AGENT DO: Calculates your true effective hourly rate and revenue gain from offloading 15+ admin hours per file.]',
    placeholderActionCta: 'BUILD THE TOOL →',
    prerequisites: 'Web Browser (Runs directly in app)',
    highlights: [
      'Input your annual deal volume and average commission to compute your true hourly rate',
      'Calculates how many production hours are lost to paperwork each month',
      'Shows the exact ROI multiplier of partnering with Hometown TC'
    ],
    guideSteps: [
      { stepNumber: 1, title: 'Enter Closed Transactions', detail: 'Input the number of residential transactions you close each year (e.g. 12 files).' },
      { stepNumber: 2, title: 'Input Average Commission', detail: 'Provide your typical gross commission per closed transaction.' },
      { stepNumber: 3, title: 'Review Time Allocation', detail: 'See your real hourly rate for client generation vs. the negative cost of admin work.' }
    ]
  },
  {
    id: 'tool-sop-01',
    catalogId: 'TOOL NO. HTC-AUT-07',
    category: 'Workflow-Building Resources',
    badge: 'STANDARD OPERATING PROCEDURE',
    stampLabel: 'FILE CHECKLIST',
    title: 'The 60-Minute New File Intake & Escrow Setup Standard Operating Procedure (SOP)',
    whatThisHelpsAgentDo: 'A practical step-by-step procedure guide for Florida Realtors and admin assistants to execute within the first 60 minutes of going under contract.',
    actionCta: 'VIEW THE GUIDE →',
    formatDuration: 'Operational Guide & Checklist • PDF & Google Doc',
    placeholderTitle: '[AI / AUTOMATION RESOURCE TITLE: The 60-Minute New File Intake & Escrow Setup Standard Operating Procedure]',
    placeholderWhatThisHelpsAgentDo: '[WHAT THIS HELPS THE AGENT DO: Step-by-step operational SOP to execute within the first 60 minutes of contract execution.]',
    placeholderActionCta: 'VIEW THE GUIDE →',
    prerequisites: 'None — Printable PDF & Copyable Google Doc',
    highlights: [
      'Minute 0–15: Verify all signatures, initials, and FAR/BAR Paragraph 19 addenda attachments',
      'Minute 16–35: Coordinate title intake package and reiterate wire fraud safety protocols',
      'Minute 36–60: Build milestone calendar, introduce TC desk to lender/title, and send welcome brief'
    ],
    guideSteps: [
      { stepNumber: 1, title: 'Phase 1: Contract Audit (0-15 Min)', detail: 'Check that every buyer and seller initial matches the legal entity name on title.' },
      { stepNumber: 2, title: 'Phase 2: Escrow & Wire Safety (15-30 Min)', detail: 'Deliver wire fraud safety protocol in writing and confirm escrow agent coordinates.' },
      { stepNumber: 3, title: 'Phase 3: Calendar & Introduction (30-60 Min)', detail: 'Send standardized introductory milestone email to co-op agent, title, and lender.' }
    ]
  },
  {
    id: 'tool-sop-02',
    catalogId: 'TOOL NO. HTC-AUT-08',
    category: 'Workflow-Building Resources',
    badge: 'BROKER AUDIT PROTOCOL',
    stampLabel: 'COMPLIANCE SOP',
    title: 'DBPR & FREC 5-Year Florida Broker File Archive & Audit Readiness Protocol',
    whatThisHelpsAgentDo: 'A definitive compliance guide explaining exactly what documents, email records, deposit receipts, and disclosures must be archived for 5 years under Florida Statute § 475.5015.',
    actionCta: 'VIEW THE GUIDE →',
    formatDuration: 'Compliance Guide • 4-Page Reference Document',
    placeholderTitle: '[AI / AUTOMATION RESOURCE TITLE: DBPR & FREC 5-Year Florida Broker File Archive & Audit Readiness Protocol]',
    placeholderWhatThisHelpsAgentDo: '[WHAT THIS HELPS THE AGENT DO: Guides brokers and agents on preserving all statutory records for 5 years to pass FREC audits.]',
    placeholderActionCta: 'VIEW THE GUIDE →',
    prerequisites: 'Brokerage Compliance Desk / Managing Brokers',
    highlights: [
      'Covers executed contracts, counteroffers, rejected offers, and escrow verification receipts',
      'Defines cloud archiving standards acceptable to DBPR investigators during random audits',
      'Includes an audit-defense folder naming standard for paperless brokerage platforms'
    ],
    guideSteps: [
      { stepNumber: 1, title: 'Statutory Retention Mandate', detail: 'Florida Statute § 475.5015 requires all books, accounts, and records to be retained for at least 5 years.' },
      { stepNumber: 2, title: 'Rejected Offers Preservation', detail: 'Even offers that did not reach mutual execution must be preserved for at least 2 years under Florida law.' },
      { stepNumber: 3, title: 'Digital Backup Redundancy', detail: 'Cloud records must be indexed by property address, closing date, and lead agent license number.' }
    ]
  }
];
