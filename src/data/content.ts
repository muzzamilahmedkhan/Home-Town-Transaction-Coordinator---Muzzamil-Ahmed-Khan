import { HomeStep, Testimonial, CoverageArea } from '../types';

export const FOUNDER_IMAGE = 'https://i.pinimg.com/736x/d1/5c/ff/d15cffef58d664e79e588cb12129e6e7.jpg';
export const MEET_MICHELLE_IMAGE = 'https://i.pinimg.com/736x/81/7c/ad/817cadd87957f8329e8ee56746fe85d2.jpg';
export const HEADER_LOGO_IMAGE = 'https://lh3.googleusercontent.com/HXKWu__Te1SJ8FYv6tW9XKaUBB10DtGWcikCnXI5AkmiRtzbdzV3lJ15pz21rb1sDx_01_cl85ZcT8JW9g=w1905';
export const FOOTER_LOGO_IMAGE = 'https://lh3.googleusercontent.com/a4DDNClHeO3NP8j-UoEX4f0dwgREhQXiBHtqQ-BdsiIp3ldniakl_GPXXVow_COUWkp4P01l-GPHeK8Bww=w1905';
export const LOGO_IMAGE = HEADER_LOGO_IMAGE;
export const FAVICON_IMAGE = 'https://i.pinimg.com/736x/29/4f/78/294f781e9eb0cc4e299eb29ccaa2291a.jpg';
export const HERO_IMAGE = '/src/assets/images/south_florida_luxury_hero_1786377702277.jpg';
export const PROPERTY_CARD_IMAGE = '/src/assets/images/florida_property_card_1786377717129.jpg';

export const PHONE_NUMBER = '(954) 377-8330';
export const EMAIL_ADDRESS = 'hello@hometowntc.com';
export const OFFICE_HOURS = 'Monday–Friday · 8:00 AM–6:00 PM EST';

export const PRICING_CONFIG = {
  basePrice: 375,
  proPrice: 475,
  currency: '$',
  billingNote: 'Billed upon successful closing',
  startingNote: 'Central Services + Pricing Data Source',
};

export const CENTRAL_SERVICES_PRICING = {
  effectiveDate: 'November Transition Model',
  notice: 'Single source of truth for all HTC support packages, rates, onboarding, and terms.',
  agencyPositioning: 'HTC is a Boutique Real Estate Support Agency — not only a transaction coordination company. We support Florida Realtors across two primary service lanes: Listing Services (pre-contract prep & Listing Launch) and Contract Services (executed contract through closing).',
  serviceLanesNote: 'Listing Launch is a separate service / add-on. It is not automatically included with Contract Services.',

  // Primary Service Lanes Definition
  serviceLanes: [
    {
      id: 'listing-services',
      title: 'Listing Services',
      tagline: 'Support BEFORE the property is under contract',
      desc: 'Pre-listing setup, seller disclosure prep, MLS draft entry, and photo/vendor coordination including our dedicated Listing Launch add-on.',
      note: 'Listing Launch is a separate service/add-on — not automatically included with Contract Services.'
    },
    {
      id: 'contract-services',
      title: 'Contract Services',
      tagline: 'Transaction support ONCE executed through closing',
      desc: 'Complete contract administration, timeline tracking, escrow monitoring, buyer/seller/lender alignment, CD review, and broker compliance.'
    }
  ],
  
  // 1. Current Services
  currentServices: [
    {
      title: 'Listing Launch & Pre-Contract Prep (Listing Lane)',
      desc: 'Pre-listing document collection, SPDS disclosure prep, MLS draft input, and vendor access scheduling (separate service/add-on).'
    },
    {
      title: 'Contract Management (Contract Lane)',
      desc: 'FAR/BAR contract review, rider verification, earnest money tracking, and immediate file intake upon execution.'
    },
    {
      title: 'Timeline & Master Calendar Tracking',
      desc: 'Master calendar creation, contingency monitoring (inspection, appraisal, loan commitment), and automated milestone reminders.'
    },
    {
      title: 'Document & Disclosure Coordination',
      desc: 'Seller disclosures (SPDS), HOA/condo resale packets, and municipal lien search follow-up.'
    },
    {
      title: 'Stakeholder Alignment & Communication',
      desc: 'Continuous status updates keeping buyers, sellers, lenders, and title officers aligned.'
    },
    {
      title: 'Closing Prep, CD Review & Broker Compliance',
      desc: 'Pre-closing checklist, Closing Disclosure (CD) review, CDA issuance, and complete broker compliance file upload.'
    }
  ],

  // 2. Current Packages & 3. Current Pricing
  packages: [
    {
      id: 'base',
      name: 'Contract Services Base',
      price: '$375',
      priceUnit: 'per closed file',
      badge: 'Contract Services',
      description: 'End-to-end transaction management from executed contract intake through final closing and broker upload.',
      features: [
        'Executed contract audit & FAR/BAR rider check',
        'Earnest Money Deposit (EMD) escrow opening confirmation',
        'Master Calendar lock shared with Agent, Client, Lender & Title',
        'Inspection, appraisal, & loan commitment deadline tracking',
        'HOA application & resale packet follow-up',
        'Closing Disclosure (CD) & Commission Disbursement (CDA) review',
        'Brokerage compliance file upload & organized archive'
      ]
    },
    {
      id: 'pro',
      name: 'Listing Launch + Contract Services Pro',
      price: '$475',
      priceUnit: 'per closed file',
      badge: 'Listing + Contract Lanes',
      description: 'Combines pre-listing Listing Launch setup with complete Contract-to-Close coordination.',
      features: [
        'Includes full Contract Services PLUS Listing Launch Add-On:',
        'Pre-listing document collection & SPDS disclosure prep',
        'MLS draft listing input & syndication verification',
        'Photography & vendor access scheduling',
        'Lockbox & showing instruction setup',
        'Smooth transition from Active Listing to Executed Contract'
      ]
    },
    {
      id: 'team',
      name: 'Team & Brokerage Hub',
      price: 'Custom',
      priceUnit: 'volume options',
      badge: 'High Volume Agency',
      description: 'Tailored transaction infrastructure designed for high-producing agent teams and boutique brokerages.',
      features: [
        'Dedicated primary & secondary TC assignment',
        'Customized team intake protocols & brokerage portal sync',
        'Weekly pipeline status & transaction health report',
        'Volume-based retainer or custom file tiering'
      ]
    }
  ],

  // 4. Registration / Onboarding
  onboarding: {
    title: 'Registration & Onboarding',
    summary: 'HTC clients are onboarded before submitting files. A prospect cannot simply submit an executed contract without prior onboarding.',
    steps: [
      'Step 1: 15-Minute Fit Call to discuss your volume, market, and brokerage compliance requirements.',
      'Step 2: Profile Setup defining your preferred title partners, lenders, e-sign tools, and communication style.',
      'Step 3: Account Activation granting immediate access to the HTC Client Submit File portal.'
    ]
  },

  // 5. Cancellation Terms
  cancellationTerms: {
    title: 'Cancellation & Withdrawal Terms',
    details: 'If a transaction cancels prior to closing through no fault of the agent, no fee is billed for standard contract-to-close files. A complete archived audit package is provided to your broker for recordkeeping.'
  },

  // 6. Add-Ons
  addOns: [
    {
      title: 'HOA / Condo Resale Packet Expediting',
      desc: 'Direct association liaison for urgent estoppel certificates and board approval packets.'
    },
    {
      title: 'FIRPTA & Foreign Seller Coordination',
      desc: 'Specialized disclosure coordination with title and CPA tax withholding specialists.'
    },
    {
      title: 'Post-Closing Client Review Delivery',
      desc: 'Custom review request email and client appreciation package delivery.'
    }
  ],

  // 7. Future Customer vs. Client Structure
  futureStructure: {
    title: 'Upcoming Model Transition (November 2026)',
    details: 'To maintain our high standard of accuracy and personalized care, HTC is transitioning in November 2026 to a dual Customer vs. Client structure. Established HTC Clients will lock in priority file intake and dedicated TC assignment, while new Customers will enter through structured monthly onboarding windows.'
  }
};

export const HOME_STEPS: HomeStep[] = [
  {
    id: 'honor',
    letter: 'H',
    title: 'HONOR THE AGREEMENT',
    tagline: 'Contract Audit & Escrow Intake',
    description: 'We audit executed contract terms, verify earnest money deposit instructions, and confirm all initial disclosures and riders are properly in place.',
    deliverables: [
      'Comprehensive audit of executed contract terms & FAR/BAR clauses',
      'Earnest money deposit (EMD) tracking & escrow opening verification',
      'Review of seller disclosures, HOA/condo riders & critical dates'
    ],
    milestone: 'Clear ownership: Immediate file intake and contract verification.',
    iconName: 'Upload'
  },
  {
    id: 'organize',
    letter: 'O',
    title: 'ORGANIZE THE FILE',
    tagline: 'Master Calendar & Stakeholder Alignment',
    description: 'We build a single-source master deadline calendar and introduce HTC as your dedicated transaction team to all involved parties.',
    deliverables: [
      'Master timeline shared with Agent, Client, Lender & Title Officer',
      'Professional introductory communications establishing a single point of contact',
      'HOA/condo resale packet requests & resale approval tracking'
    ],
    milestone: 'Visible deadlines: Every milestone mapped and shared upfront.',
    iconName: 'Calendar'
  },
  {
    id: 'monitor',
    letter: 'M',
    title: 'MONITOR THE MILESTONES',
    tagline: 'Proactive Contingency & Title Tracking',
    description: 'We track inspection windows, appraisal timelines, loan commitment deadlines, and title updates with calm, disciplined oversight.',
    deliverables: [
      'Proactive monitoring of inspection periods & repair addendums',
      'Ongoing liaison with Mortgage Lender, Title Company & Appraiser',
      'Brokerage compliance checks throughout the contract period'
    ],
    milestone: 'Reduced mental load: Proactive milestone tracking keeps you informed.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'ease',
    letter: 'E',
    title: 'EASE THE CLOSE',
    tagline: 'CD Review, CDA Delivery & File Completion',
    description: 'Review of the final Closing Disclosure (CD), pre-closing delivery of the Commission Disbursement Authorization (CDA), and complete file archive.',
    deliverables: [
      'Final Closing Disclosure (CD) & ALTA settlement statement review',
      'Commission Disbursement Authorization (CDA) issued prior to closing',
      'Complete brokerage file upload & defensible paper trail delivery'
    ],
    milestone: 'Defensible record: Complete compliance file delivered upon closing.',
    iconName: 'CheckCircle2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'zuzel-g',
    name: 'Zuzel Gonzalez',
    role: 'FLORIDA REALTOR',
    brokerage: 'Active Florida Producer',
    location: 'South Florida',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocK6Qs8mWgTN--8BMsdGhmLUzxCzkLFw3MGMsqU1dJE1HIV1gw=w72-h72-p-rp-mo-br100',
    quote: 'Michelle is my go to transaction coordinator for all of my real estate deals. She is always organized, professional, and on top of every detail from start to finish. I honestly couldn’t do my transactions without her support.',
    highlight: 'Essential Transaction Partner',
    rating: 5
  },
  {
    id: 'cindy-r',
    name: 'Cindy Rios',
    role: 'FLORIDA REALTOR',
    brokerage: 'Active Florida Producer',
    location: 'Florida Statewide',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWdguXoyY1fUwmN1Eu4zcLq6rU1-jhRRaBS_NyrEfPnsSovnx8R=w72-h72-p-rp-mo-br100',
    quote: 'Michelle takes so much weight off my shoulders and keeps everything running smoothly at all times. Her understanding of real estate laws and compliance gives me complete peace of mind because I know nothing is being overlooked.',
    highlight: 'Complete Peace of Mind',
    rating: 5
  },
  {
    id: 'jill-c',
    name: 'Jill Cox',
    role: 'BUSY REAL ESTATE PROFESSIONAL',
    brokerage: 'Active Florida Producer',
    location: 'Florida Statewide',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjXgtaHo5mlNfHSLiqw5fMSp_ZmhbFvb13yQvK5P7KhHpb9G514SZg=w72-h72-p-rp-mo-ba12-br100',
    quote: 'Michelle and her powerhouse team at Hometown TC are a game-changer for real estate agents. Ultra-organized, super proactive, and an above-and-beyond approach to supporting busy real estate professionals. You’ll be endlessly thankful you did.',
    highlight: 'Game-Changer for Agents',
    rating: 5
  }
];

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    region: 'Statewide Florida Coverage',
    hubs: 'Serving Agents Across All 67 Florida Counties',
    description: 'HTC coordinates transactions for Realtors throughout Florida — from Jacksonville to Naples, Tampa Bay, Orlando, Palm Beach, and Miami.',
    cities: ['Jacksonville', 'Tampa', 'Orlando', 'Naples', 'Sarasota', 'Gainesville', 'St. Petersburg']
  },
  {
    region: 'South Florida Founding Roots',
    hubs: 'Deep Local Experience in Tri-County Markets',
    description: 'Founded in South Florida with extensive experience across Miami-Dade, Broward, and Palm Beach condo/HOA requirements and municipal procedures.',
    cities: ['Miami', 'Fort Lauderdale', 'Weston', 'Boca Raton', 'Palm Beach', 'Coral Gables']
  }
];

export const SERVICES_LIST = [
  {
    title: 'Contract Management',
    desc: 'Review of executed terms, e-sign coordination, FAR/BAR rider check, and immediate file setup.',
    icon: 'FileText'
  },
  {
    title: 'Deadline & Timeline Tracking',
    desc: 'Monitoring dates, contingencies, and key deliverables so nothing is overlooked.',
    icon: 'Calendar'
  },
  {
    title: 'Document & Disclosure Coordination',
    desc: 'Collecting, organizing, and verifying required HOA packets and seller disclosures.',
    icon: 'FolderCheck'
  },
  {
    title: 'Communication & Stakeholder Sync',
    desc: 'Organized updates keeping agents, buyers, sellers, lenders, and title companies aligned.',
    icon: 'ShieldAlert'
  },
  {
    title: 'Closing Preparation',
    desc: 'Pre-closing checklist, Closing Disclosure (CD) review, and CDA delivery.',
    icon: 'Home'
  },
  {
    title: 'Brokerage Compliance & Archive',
    desc: 'Complete file upload to your brokerage portal and delivery of a defensible paper trail.',
    icon: 'CheckCircle'
  }
];

