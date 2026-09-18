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

// Approved briefs will be supplied directly by HTC
export const HOMETOWN_BRIEF_ARTICLES: HometownBriefArticle[] = [];


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

