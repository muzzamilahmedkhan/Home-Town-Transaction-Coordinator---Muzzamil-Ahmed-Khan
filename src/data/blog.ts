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

export const BLOG_CATEGORIES = [
  'All Resources',
  'FAR/BAR Contract Updates',
  'Compliance & Audits',
  'Escrow & Title',
  'HOA/Condo Approvals',
  'Agent Operations'
];

export const DEMO_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'navigating-far-bar-as-is-inspection-periods',
    title: 'Navigating FAR/BAR "AS IS" Inspection Periods in Florida',
    excerpt: 'A deep dive into computing time, repair requests, and maintaining leverage during the critical 15-day inspection window on Florida residential contracts.',
    category: 'FAR/BAR Contract Updates',
    author: 'Michelle Martinez, PA',
    reviewer: 'Florida Real Estate Attorney',
    dateUpdated: 'October 12, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '2',
    slug: 'condo-milestone-inspections-sb-4d',
    title: 'How SB 4-D Milestone Inspections Impact Condo Closings',
    excerpt: 'What South Florida agents need to know about the new structural integrity reserves and how it delays financing and title commitments.',
    category: 'HOA/Condo Approvals',
    author: 'HTC Compliance Team',
    reviewer: 'Michelle Martinez, PA',
    dateUpdated: 'September 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    slug: 'earnest-money-disputes-freo-guidance',
    title: 'Handling Earnest Money Disputes: FREC Escrow Disbursement',
    excerpt: 'Step-by-step guidance on filing an Escrow Disbursement Order (EDO) when buyers and sellers clash over the initial deposit.',
    category: 'Escrow & Title',
    author: 'Mary S.',
    reviewer: 'Michelle Martinez, PA',
    dateUpdated: 'September 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    slug: 'broker-compliance-checklist-2026',
    title: 'The Ultimate 2026 Broker Compliance Checklist',
    excerpt: 'Ensure your files are audit-ready with our comprehensive pre-close checklist designed for Florida brokerages.',
    category: 'Compliance & Audits',
    author: 'HTC Operations',
    reviewer: 'Michelle Martinez, PA',
    dateUpdated: 'August 30, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  }
];
