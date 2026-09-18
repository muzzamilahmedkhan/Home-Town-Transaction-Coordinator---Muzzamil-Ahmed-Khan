export interface PricingTierAddon {
  name: string;
  price: string;
  note?: string;
}

export interface PricingServiceSection {
  id: string;
  name: string;
  shortName: string;
  eyebrow?: string;
  headline?: string;
  description: string;
  status: 'active' | 'coming-soon';
  displayOrder: number;
}

export interface ListingLaunchPricingData extends PricingServiceSection {
  included: string[];
  options: {
    title: string;
    price: string;
    turnaround: string;
    badge?: string;
    description: string;
  }[];
  addons: PricingTierAddon[];
  ctaText: string;
}

export interface ContractToClosePlan {
  id: 'base' | 'pro';
  name: string;
  badge?: string;
  price: string;
  priceNote: string;
  summary: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface ContractToClosePricingData extends PricingServiceSection {
  setupNote: string;
  timingNote?: string;
  cancellationNote?: string;
  plans: ContractToClosePlan[];
  additionalServices: {
    name: string;
    price: string;
    description: string;
  }[];
}

export interface BrokerCompliancePricingData extends PricingServiceSection {
  whatWeHandle: string[];
  agentProvides?: string[];
  rates: {
    type: string;
    price: string;
    paymentNote: string;
  }[];
  ctaText: string;
}

export interface AgentSetupPricingData {
  badge: string;
  name: string;
  timing: string;
  purpose: string;
  details: string[];
  price: string;
  priceNote: string;
  ctaText: string;
}

export interface TeamsBrokeragesPricingData extends PricingServiceSection {
  serviceAreas: {
    title: string;
    description: string;
  }[];
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ScalePricingData extends PricingServiceSection {
  subtitle: string;
  waitlistNote: string;
  ctaText: string;
  price?: string;
  priceNote?: string;
}

export interface PricingFaqItem {
  id: string;
  question: string;
  answerHtml?: string;
  answerParagraphs: string[];
  paymentBreakdown?: { item: string; timing: string }[];
  baseProBreakdown?: { base: string; pro: string };
  links?: {
    text: string;
    action: 'bookCall' | 'roi' | 'tcWorkshop' | 'contractToCloseSection';
  }[];
}

export interface ServicesPricingPageConfig {
  hero: {
    badge: string;
    title: string;
    description: string;
    vslVideoUrl: string;
    jumpLinks: {
      label: string;
      targetId: string;
    }[];
  };
  agentSetup: AgentSetupPricingData;
  listingLaunch: ListingLaunchPricingData;
  contractToClose: ContractToClosePricingData;
  brokerCompliance: BrokerCompliancePricingData;
  teamsBrokerages: TeamsBrokeragesPricingData;
  scale: ScalePricingData;
  faqs: PricingFaqItem[];
}

export const PRICING_PAGE_DATA: ServicesPricingPageConfig = {
  hero: {
    badge: 'SERVICES + PRICING',
    title: 'Services + Pricing',
    description:
      'Clear, predictable support for Florida Realtors. From pre-market listing launch to contract-to-close and brokerage compliance, explore our services and transparent pricing below.',
    vslVideoUrl: 'https://player.vimeo.com/video/824804225?badge=0&autopause=0&player_id=0&app_id=58479',
    jumpLinks: [
      { label: 'Listing Launch', targetId: 'listing-launch' },
      { label: 'Contract-to-Close', targetId: 'contract-to-close' },
      { label: 'Broker Compliance', targetId: 'broker-compliance' },
      { label: 'Teams + Brokerages', targetId: 'teams-brokerages' },
      { label: 'SCALE', targetId: 'scale' },
    ],
  },

  agentSetup: {
    badge: 'NEW CLIENT REGISTRATION',
    name: 'Agent Setup Investment',
    timing: 'ONE-TIME ONBOARDING',
    purpose: 'Build your business into the HTC workflow so future files plug directly in without repeated onboarding.',
    details: [
      'Brokerage portal mapping & custom compliance checklists',
      'Preferred communication protocols & VIP client touches',
      'Email templates & introductory workflow integration',
      'Dedicated lead coordinator assignment & file intake setup',
    ],
    price: '$399',
    priceNote: 'One-time onboarding investment',
    ctaText: 'START ONBOARDING',
  },

  listingLaunch: {
    id: 'listing-launch',
    name: 'Listing Launch',
    shortName: 'Listing Launch',
    eyebrow: 'PRE-MARKET COORDINATION',
    headline: 'Pre-Market Preparation and MLS Draft Entry',
    description:
      'We organize the moving pieces required to prepare and launch a listing.',
    status: 'active',
    displayOrder: 1,
    included: [
      'Public records and deed verification',
      'Seller disclosure preparation, tracking, and completion checks',
      'Full MLS draft entry with photo sequencing and virtual tour links',
      'Attachment of required disclosures, lead-based paint, and HOA forms',
      'Document packaging and brokerage portal upload',
    ],
    options: [
      {
        title: 'Standard',
        price: '$125',
        turnaround: '3 Business Days',
        description: 'Standard turnaround for scheduled listing dates.',
      },
      {
        title: 'Priority',
        price: '$225',
        turnaround: '1 Business Day',
        description: 'Expedited queue for time-sensitive go-live dates.',
      },
    ],
    addons: [
      {
        name: 'Condo / HOA Research',
        price: '$100',
        note: 'Association rules, contact verification, and buyer packet setup',
      },
      {
        name: '5-Photo Virtual Staging',
        price: '$50',
        note: 'Professional virtual staging for up to 5 listing photos',
      },
    ],
    ctaText: 'SUBMIT A LISTING LAUNCH',
  },

  contractToClose: {
    id: 'contract-to-close',
    name: 'Contract-to-Close',
    shortName: 'Contract-to-Close',
    eyebrow: 'TRANSACTION COORDINATION',
    headline: 'Base + Pro Contract-to-Close Plans',
    description:
      'Full contract-to-close management from executed agreement through post-closing broker compliance with transparent flat per-file pricing.',
    status: 'active',
    displayOrder: 2,
    setupNote:
      'One-time $399 Agent Setup Investment required at registration to customize your workflows, broker templates, and communication preferences.',
    timingNote:
      'Residential Contract-to-Close pricing is based on a typical 45-day processing window. Files extending beyond 60 days are assessed a $100 timing fee.',
    cancellationNote:
      'If a transaction cancels during the inspection period, there is no cancellation fee. After the inspection period, an administrative support fee applies for work already completed on the file.',
    plans: [
      {
        id: 'base',
        name: 'Base Plan',
        price: '$375',
        priceNote: 'per closed residential transaction',
        summary:
          'HTC manages the file while you remain the primary point of contact for your clients.',
        features: [
          'Full critical dates timeline calculation & calendar invites',
          'Earnest money deposit (EMD) receipt tracking & escrow verification',
          'Title company, lender, and co-op agent coordination',
          'Inspection, appraisal, and loan commitment milestone tracking',
          'Complete brokerage compliance upload, CDA tracking & file approval',
          'Agent remains primary direct contact with buyer/seller clients',
        ],
        ctaText: 'CHOOSE BASE PLAN',
      },
      {
        id: 'pro',
        name: 'Pro Plan',
        price: '$475',
        priceNote: 'per closed residential transaction',
        summary:
          'Everything in Base, plus direct client communication and milestone support from HTC.',
        features: [
          'Everything included in Base Plan',
          'Direct client introductory email & weekly milestone progress updates',
          'Proactive buyer/seller milestone reminders (utilities, walk-through, closing prep)',
          'HUD / ALTA settlement statement review for fee accuracy',
          'Post-closing testimonial request & client review prompt',
          'Full white-glove communication representing your brand',
        ],
        ctaText: 'CHOOSE PRO PLAN',
      },
    ],
    additionalServices: [
      {
        name: 'Commercial Contract-to-Close — Starts at $595',
        price: 'Starts at $595',
        description:
          'Commercial files extending beyond 90 days require a $200 deposit.',
      },
      {
        name: 'Both Sides of the Transaction — +$200',
        price: '+$200',
        description:
          'Coordinating both sides of the transaction through closing and brokerage compliance.',
      },
    ],
  },

  brokerCompliance: {
    id: 'broker-compliance',
    name: 'Broker Compliance',
    shortName: 'Broker Compliance',
    eyebrow: 'BROKERAGE FILE APPROVAL',
    headline: 'Brokerage File Approval',
    description:
      'Already managing the lease or sale yourself? Broker Compliance is focused specifically on brokerage file approval so your Commission Disbursement Authorization (CDA/DA) can be issued and you can get paid.',
    status: 'active',
    displayOrder: 3,
    whatWeHandle: [
      'Review against brokerage requirements',
      'Identify missing documents/signatures',
      'Circulate approved documents for signature when instructed',
      'Organize/upload the file',
      'Follow through the brokerage review process',
    ],
    agentProvides: [
      'Executed purchase contract or lease agreement with all exhibits',
      'Brokerage compliance portal access or upload instructions',
      'Commission disbursement details and brokerage file ID',
    ],
    rates: [
      {
        type: 'Rental / Lease File',
        price: '$100',
        paymentNote: 'Due when file is submitted',
      },
      {
        type: 'Sale / Purchase Contract',
        price: '$195',
        paymentNote: 'Due when file is submitted',
      },
    ],
    ctaText: 'SUBMIT COMPLIANCE FILE',
  },

  teamsBrokerages: {
    id: 'teams-brokerages',
    name: 'Teams + Brokerages',
    shortName: 'Teams + Brokerages',
    eyebrow: 'ENTERPRISE & TEAM SUPPORT',
    headline: 'Florida transaction workflows, administrative process, and file support.',
    description:
      'Florida transaction workflows, administrative process, and file support.',
    status: 'active',
    displayOrder: 4,
    serviceAreas: [
      {
        title: 'Transaction + compliance support',
        description:
          'Dedicated coordination pipelines, custom escalation paths, and file support tailored for team and brokerage production.',
      },
      {
        title: 'Systems + operations setup',
        description:
          'End-to-end setup of transaction management platforms, standardized task templates, intake pipelines, and brokerage compliance workflows.',
      },
      {
        title: 'Admin / staff / VA training',
        description:
          'Practical training for in-house administrative staff, assistants, and virtual assistants on Florida transaction workflows, administrative process, and file support.',
      },
    ],
    ctaPrimary: 'BOOK A 15-MINUTE FIT CALL',
    ctaSecondary: 'EXPLORE THE FLORIDA TC WORKSHOP',
  },

  scale: {
    id: 'scale',
    name: 'SCALE',
    shortName: 'SCALE',
    eyebrow: 'SCALE · COMING SOON',
    headline: 'Need more help after 6 PM?',
    description:
      'SCALE extends access to the HTC team beyond standard hours, from agreement through Post-Close. SCALE has not launched and does not change HTC’s current approved business hours (Monday–Friday · 8:00 AM–6:00 PM EST).',
    status: 'coming-soon',
    displayOrder: 5,
    subtitle: 'Extended operational support for fast-moving Florida producers.',
    ctaText: 'JOIN THE SCALE WAITLIST',
    waitlistNote: 'Be first to know when enrollment opens. HTC’s current approved business hours remain Monday–Friday · 8:00 AM–6:00 PM EST.',
  },

  faqs: [
    {
      id: 'faq-started',
      question: 'What do I need to get started?',
      answerParagraphs: [
        'Start with a 15-Minute Fit Call. Once we confirm we’re a fit, the one-time $399 Agent Setup Investment gives us the time to build your business into the HTC workflow — your brokerage requirements, templates, preferred communication, service preferences, and the unique touches you want your clients to experience.',
        'Once that setup is complete, your future files can plug directly into the workflow we created for you.',
      ],
      links: [
        {
          text: 'BOOK A 15-MINUTE FIT CALL →',
          action: 'bookCall',
        },
      ],
    },
    {
      id: 'faq-payment',
      question: 'When do I pay?',
      answerParagraphs: [],
      paymentBreakdown: [
        { item: 'Agent Setup Investment', timing: 'Due at registration. Once paid, we’ll schedule your Setup Call.' },
        { item: 'Listing Launch', timing: 'When the file is submitted.' },
        { item: 'Broker Compliance', timing: 'When the file is submitted.' },
        { item: 'Contract-to-Close', timing: 'At closing.' },
      ],
    },
    {
      id: 'faq-cancellation',
      question: 'What happens if my contract cancels?',
      answerParagraphs: [
        'If the contract cancels during the inspection period, there is no cancellation fee. If it cancels after the inspection period, an administrative support fee applies for the work already completed.',
      ],
      links: [
        {
          text: 'Have more questions? Book a 15-Minute Fit Call →',
          action: 'bookCall',
        },
      ],
    },
    {
      id: 'faq-broker-compliance',
      question: 'What is Broker Compliance?',
      answerParagraphs: [
        'Already managing the lease or sale yourself? Broker Compliance is focused specifically on brokerage file approval so your Commission Disbursement Authorization (CDA/DA) can be issued and you can get paid.',
        'HTC reviews against brokerage requirements, identifies missing documents and signatures, circulates approved documents for signature when instructed, organizes and uploads the file, and follows through the brokerage review process.',
      ],
    },
    {
      id: 'faq-listing-without-ctc',
      question: 'Can I use Listing Launch without Contract-to-Close?',
      answerParagraphs: [
        'Yes. Listing Launch is a separate service and can be submitted on its own.',
        'If you want HTC to stay with the file once it goes under contract, you can add Contract-to-Close support and keep the same team involved through Post-Close.',
      ],
      links: [
        {
          text: 'See what delegating more of the file could mean for your business → Run the Numbers',
          action: 'roi',
        },
      ],
    },
    {
      id: 'faq-base-vs-pro',
      question: 'What is the difference between Base and Pro?',
      answerParagraphs: [],
      baseProBreakdown: {
        base: 'HTC manages the file while you remain the primary point of contact for your clients.',
        pro: 'Everything in Base, plus direct client communication and milestone support from HTC.',
      },
      links: [
        {
          text: 'COMPARE BASE + PRO ↑',
          action: 'contractToCloseSection',
        },
      ],
    },
    {
      id: 'faq-teams-brokerages',
      question: 'Do you work with teams and brokerages?',
      answerParagraphs: [
        'Yes. We provide Florida transaction workflows, administrative process, and file support for teams and brokerages. Custom support includes transaction + compliance support, systems + operations setup, and admin / staff / VA training.',
      ],
      links: [
        {
          text: 'BOOK A 15-MINUTE FIT CALL →',
          action: 'bookCall',
        },
        {
          text: 'EXPLORE THE FLORIDA TC WORKSHOP →',
          action: 'tcWorkshop',
        },
      ],
    },
  ],
};
