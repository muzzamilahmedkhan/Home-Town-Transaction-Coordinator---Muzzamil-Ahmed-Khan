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
  plans: ContractToClosePlan[];
  additionalServices: {
    name: string;
    price: string;
    description: string;
  }[];
}

export interface BrokerCompliancePricingData extends PricingServiceSection {
  whatWeHandle: string[];
  rates: {
    type: string;
    price: string;
    paymentNote: string;
  }[];
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

  listingLaunch: {
    id: 'listing-launch',
    name: 'Listing Launch',
    shortName: 'Listing Launch',
    eyebrow: 'PRE-MARKET COORDINATION',
    headline: 'Flawless Pre-Market Preparation and MLS Draft Entry',
    description:
      'Get your listings prepared, compliance-checked, and loaded accurately into the MLS without losing valuable marketing and client-facing hours.',
    status: 'active',
    displayOrder: 1,
    included: [
      'Comprehensive public records and deed verification audit',
      'Seller disclosure dispatch, tracking, and execution checks',
      'Full MLS draft entry with photo sequencing and virtual tour links',
      'Attachment of all required disclosures, lead-based paint, and HOA forms',
      'Broker compliance document packaging and internal portal upload',
    ],
    options: [
      {
        title: 'Standard Launch',
        price: '$150',
        turnaround: '24–48 Business Hours',
        description: 'Standard turnaround for scheduled listing dates.',
      },
      {
        title: 'Priority Launch',
        price: '$200',
        turnaround: 'Rush Turnaround (Same / Next Business Day)',
        badge: 'RUSH',
        description: 'Expedited priority queue for time-sensitive go-live dates.',
      },
    ],
    addons: [
      {
        name: 'Condo / HOA Estoppel & Application Research',
        price: '+$75',
        note: 'Association rules, contact verification, and buyer packet setup',
      },
      {
        name: 'Additional MLS Board Entry',
        price: '+$50',
        note: 'Secondary MLS system input & sync',
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
      'Full contract-to-close management from executed agreement through post-closing broker compliance. Transparent flat pricing with zero cancellation fee during inspection.',
    status: 'active',
    displayOrder: 2,
    setupNote:
      'One-time $399 Agent Setup Investment required at registration to customize your workflows, broker templates, and communication preferences.',
    plans: [
      {
        id: 'base',
        name: 'Base Plan',
        price: '$395',
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
        price: '$495',
        priceNote: 'per closed residential transaction',
        isPopular: true,
        badge: 'MOST POPULAR',
        summary:
          'Everything in Base, plus direct client communication and milestone support from HTC.',
        features: [
          'Everything included in Base Plan',
          'Direct client introductory email & weekly milestone progress updates',
          'Proactive buyer/seller milestone reminders (utilities, walk-through, wires)',
          'HUD / ALTA settlement statement review for fee accuracy',
          'Post-closing testimonial request & client review prompt',
          'Full white-glove communication representing your brand',
        ],
        ctaText: 'CHOOSE PRO PLAN',
      },
    ],
    additionalServices: [
      {
        name: 'Commercial Contract-to-Close',
        price: '$595+',
        description: 'Complex commercial agreements, multi-tenant, and custom contingencies.',
      },
      {
        name: 'Dual Agency / Double-Sided File',
        price: '+$150',
        description: 'Managing both buyer and seller compliance streams simultaneously.',
      },
    ],
  },

  brokerCompliance: {
    id: 'broker-compliance',
    name: 'Broker Compliance Only',
    shortName: 'Broker Compliance',
    eyebrow: 'COMPLIANCE & CDA APPROVAL',
    headline: 'Get Your File Approved & Get Paid',
    description:
      'Already managing the lease or sale yourself? Broker Compliance Only is for when you need help getting the file approved by your brokerage so your Commission Disbursement Authorization (CDA/DA) can be issued.',
    status: 'active',
    displayOrder: 3,
    whatWeHandle: [
      'Comprehensive audit of all executed contract documents and addenda',
      'Identification of missing initial initials, dates, and broker-required disclosures',
      'Circulation of required missing documents for quick client e-signature',
      'Upload and organization in your brokerage portal (SkySlope, Dotloop, Brokermint, Command)',
      'Direct liaison with your broker compliance team through final CDA issuance',
    ],
    rates: [
      {
        type: 'Rental / Lease File',
        price: '$100',
        paymentNote: 'Due when order is placed',
      },
      {
        type: 'Sale / Purchase Contract',
        price: '$195',
        paymentNote: 'Due when order is placed',
      },
    ],
    ctaText: 'SUBMIT COMPLIANCE FILE',
  },

  teamsBrokerages: {
    id: 'teams-brokerages',
    name: 'Teams + Brokerages',
    shortName: 'Teams + Brokerages',
    eyebrow: 'ENTERPRISE & TEAM SUPPORT',
    headline: 'Customized Systems, Compliance & Staff Training',
    description:
      'Scale your team or brokerage production without adding fixed overhead. We design custom transaction infrastructure, standardized compliance protocols, and staff training.',
    status: 'active',
    displayOrder: 4,
    serviceAreas: [
      {
        title: 'Transaction + Compliance Support',
        description:
          'Dedicated team coordination pipelines, custom escalation paths, and white-glove transaction handling for high-producing agent rosters.',
      },
      {
        title: 'Systems + Operations Setup',
        description:
          'End-to-end setup of transaction management platforms, standardized task templates, intake pipelines, and brokerage compliance checklists.',
      },
      {
        title: 'Admin + Staff Training',
        description:
          'Practical training for in-house administrative staff and aspiring TCs on Florida contracts, FAR/BAR risk management, and compliance workflows.',
      },
    ],
    ctaPrimary: 'BOOK A FIT CALL',
    ctaSecondary: 'TRAIN YOUR TEAM →',
  },

  scale: {
    id: 'scale',
    name: 'SCALE',
    shortName: 'SCALE',
    eyebrow: 'SCALE · COMING SOON',
    headline: 'Need more help after 5 PM?',
    description:
      'SCALE extends access to the HTC team beyond standard hours, from agreement through Post-Close.',
    status: 'coming-soon',
    displayOrder: 5,
    subtitle: 'Extended operational support for fast-moving Florida producers.',
    ctaText: 'JOIN THE SCALE WAITLIST',
    waitlistNote: 'Be first to know when enrollment opens.',
  },

  faqs: [
    {
      id: 'faq-started',
      question: 'What do I need to get started?',
      answerParagraphs: [
        'Start with a 15-Minute Fit Call. Once we confirm we’re a fit, the one-time $399 Agent Setup Investment gives us the time to build your business into the HTC workflow — your brokerage requirements, templates, preferred communication, service preferences, and the unique touches you want your clients to experience.',
        'Once that setup is complete, your future orders can plug directly into the workflow we created for you.',
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
        { item: 'Listing Launch', timing: 'When the order is placed.' },
        { item: 'Broker Compliance', timing: 'When the order is placed.' },
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
      question: 'What is Broker Compliance Only?',
      answerParagraphs: [
        'Already managing the lease or sale yourself? Broker Compliance Only is for when you need help getting the file approved by your brokerage so your CDA/DA can be issued and you can get paid.',
        'We review the file, identify what is missing, circulate required documents for signature, upload the compliance documents, and follow the file through brokerage approval.',
      ],
    },
    {
      id: 'faq-listing-without-ctc',
      question: 'Can I use Listing Launch without Contract-to-Close?',
      answerParagraphs: [
        'Yes. Listing Launch is a separate service and can be ordered on its own.',
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
        'Yes. We provide customized transaction and compliance support, systems and workflow setup, and staff training for teams and brokerages.',
      ],
      links: [
        {
          text: 'BOOK A FIT CALL →',
          action: 'bookCall',
        },
        {
          text: 'TRAIN YOUR TEAM →',
          action: 'tcWorkshop',
        },
      ],
    },
  ],
};
