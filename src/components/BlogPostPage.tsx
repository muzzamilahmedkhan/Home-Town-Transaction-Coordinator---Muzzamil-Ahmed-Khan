import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  UserCheck, 
  ShieldCheck, 
  Clock, 
  Bookmark, 
  Share2, 
  CheckCircle2, 
  FileText, 
  Download, 
  Calculator, 
  FolderOpen, 
  ExternalLink, 
  Sparkles, 
  HelpCircle, 
  ChevronRight,
  Code2,
  BookOpen,
  ArrowRight,
  Layers,
  Paperclip
} from 'lucide-react';
import { 
  CMS_ARTICLES, 
  CANONICAL_PLACEHOLDER_ARTICLE, 
  ArticleCmsData, 
  NextBestResource 
} from '../data/blog';
import { NewsletterSignup } from './NewsletterSignup';

interface Props {
  slug: string;
  onBackToBlog: () => void;
  onBookCall: () => void;
  onOpenCalculator?: (hash?: string) => void;
  onOpenHowItWorks?: () => void;
  onOpenPricing?: () => void;
  onOpenContractToClose?: () => void;
  onOpenListingCoordination?: () => void;
  onOpenGuides?: () => void;
  onOpenTcWorkshop?: () => void;
  onOpenArticle?: (slug: string) => void;
}

export const BlogPostPage: React.FC<Props> = ({
  slug,
  onBackToBlog,
  onBookCall,
  onOpenCalculator,
  onOpenHowItWorks,
  onOpenPricing,
  onOpenContractToClose,
  onOpenListingCoordination,
  onOpenGuides,
  onOpenTcWorkshop,
  onOpenArticle
}) => {
  // Editorial mode: defaults to pure neutral placeholders as requested for design review
  const [templateMode, setTemplateMode] = useState<'placeholders' | 'sample'>('placeholders');
  const [showCmsDictionary, setShowCmsDictionary] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Retrieve matching article or fallback to canonical placeholder
  const rawArticle: ArticleCmsData = CMS_ARTICLES[slug] || CANONICAL_PLACEHOLDER_ARTICLE;
  
  // Active article data based on toggle (defaults to clean neutral blueprint placeholders)
  const article: ArticleCmsData = templateMode === 'placeholders' 
    ? CANONICAL_PLACEHOLDER_ARTICLE 
    : rawArticle;

  const getCategorySlug = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('contract')) return 'contracts-forms';
    if (lower.includes('operation')) return 'transaction-operations';
    if (lower.includes('compliance')) return 'broker-compliance';
    if (lower.includes('condo') || lower.includes('hoa')) return 'condo-hoa';
    if (lower.includes('growth') || lower.includes('leverage')) return 'agent-growth';
    if (lower.includes('update') || lower.includes('florida')) return 'florida-updates';
    return 'contracts-forms';
  };

  const getResourceUrl = (resource: NextBestResource) => {
    switch (resource.destination) {
      case 'calculator':
        return `/agent-business-calculator/${resource.deepLinkHash ? `#${resource.deepLinkHash}` : ''}`;
      case 'how-it-works':
        return '/how-htc-works/';
      case 'pricing':
        return '/pricing/';
      case 'contract-to-close':
        return '/contract-to-close-services/';
      case 'listing-launch':
        return '/listing-coordination/';
      case 'guides':
        return '/free-guides-downloads/';
      case 'workshop':
        return '/florida-tc-workshop/';
      case 'fit-call':
      default:
        return '#book-call';
    }
  };

  useEffect(() => {
    const originalTitle = document.title;
    const pageTitle = article.metaTitle || `${article.articleH1} | The Hometown Brief • HTC`;
    document.title = pageTitle;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Canonical link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    let createdCanonical = false;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
      createdCanonical = true;
    }
    const originalCanonicalHref = canonical.getAttribute('href');
    const canonicalUrl = `https://hometowntc.com/resources/${article.slug}/`;
    canonical.setAttribute('href', canonicalUrl);

    // Meta Description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalMetaContent = metaDesc ? metaDesc.getAttribute('content') : '';
    const pageDesc = article.metaDescription || article.theBrief;
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDesc);
    }

    // Helper for meta tags
    const setMetaTag = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
      return el;
    };

    const pubIso = article.datePublishedIso || '2026-10-15T08:00:00-04:00';
    const modIso = article.dateModifiedIso || pubIso;
    const ogImg = article.ogImage || article.featuredImage;

    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDesc);
    setMetaTag('property', 'og:type', 'article');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImg);
    setMetaTag('property', 'og:site_name', 'The Hometown Brief • Hometown Title & Closing');
    setMetaTag('property', 'article:published_time', pubIso);
    setMetaTag('property', 'article:modified_time', modIso);
    setMetaTag('property', 'article:author', article.author);
    setMetaTag('property', 'article:section', article.category);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDesc);
    setMetaTag('name', 'twitter:image', ogImg);

    // Structured Data (Schema.org BlogPosting, FAQPage for AEO, BreadcrumbList)
    const existingSchema = document.getElementById('hometown-article-schema');
    if (existingSchema) existingSchema.remove();

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'hometown-article-schema';
    
    // Calculate approximate word count
    const totalWords = [
      article.theBrief,
      ...article.keyTakeaways,
      ...article.questionSections.flatMap(q => q.bodyParagraphs),
      article.whatThisMeansForAgent
    ].join(' ').split(/\s+/).length;

    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        // 1. Article / BlogPosting Structured Data
        {
          '@type': 'BlogPosting',
          '@id': `${canonicalUrl}#article`,
          isPartOf: {
            '@type': 'Blog',
            '@id': 'https://hometowntc.com/resources/#blog',
            name: 'The Hometown Brief',
            url: 'https://hometowntc.com/resources/'
          },
          headline: article.articleH1,
          alternativeHeadline: article.deck,
          description: pageDesc,
          inLanguage: 'en-US',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl
          },
          url: canonicalUrl,
          image: [article.featuredImage, ogImg].filter(Boolean),
          datePublished: pubIso,
          dateModified: modIso,
          wordCount: totalWords,
          articleSection: article.category,
          keywords: [
            article.category,
            article.regionTag,
            'Florida real estate',
            'transaction coordination',
            'compliance',
            'FAR/BAR'
          ],
          author: {
            '@type': 'Person',
            name: article.author,
            url: 'https://hometowntc.com/'
          },
          ...(article.reviewer ? {
            reviewedBy: {
              '@type': 'Person',
              name: article.reviewer
            }
          } : {}),
          publisher: {
            '@type': 'Organization',
            name: 'Hometown Title & Closing',
            url: 'https://hometowntc.com/',
            logo: {
              '@type': 'ImageObject',
              url: 'https://hometowntc.com/favicon.jpg'
            }
          }
        },
        // 2. BreadcrumbList Structured Data
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://hometowntc.com/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'The Hometown Brief',
              item: 'https://hometowntc.com/resources/'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: article.category,
              item: `https://hometowntc.com/resources/#${getCategorySlug(article.category)}`
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: article.articleH1,
              item: canonicalUrl
            }
          ]
        },
        // 3. AEO FAQPage Schema (for AI Search Engines, Answer Boxes, Perplexity, Gemini, Google Overviews)
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: article.primarySearchQuestion || article.articleH1,
              acceptedAnswer: {
                '@type': 'Answer',
                text: article.theBrief
              }
            },
            ...article.questionSections.map(qs => ({
              '@type': 'Question',
              name: qs.questionH2,
              acceptedAnswer: {
                '@type': 'Answer',
                text: qs.bodyParagraphs.join(' ')
              }
            }))
          ]
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalMetaContent) {
        metaDesc.setAttribute('content', originalMetaContent);
      }
      if (canonical) {
        if (createdCanonical) {
          canonical.remove();
        } else if (originalCanonicalHref) {
          canonical.setAttribute('href', originalCanonicalHref);
        }
      }
      const existing = document.getElementById('hometown-article-schema');
      if (existing) existing.remove();
    };
  }, [slug, templateMode, article]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Resolve action for Next Best Resource CTAs
  const handleResourceClick = (resource: NextBestResource) => {
    switch (resource.destination) {
      case 'calculator':
        if (onOpenCalculator) onOpenCalculator(resource.deepLinkHash?.replace('#', '') || 'time-worth');
        break;
      case 'how-it-works':
        if (onOpenHowItWorks) onOpenHowItWorks();
        break;
      case 'pricing':
        if (onOpenPricing) onOpenPricing();
        break;
      case 'contract-to-close':
        if (onOpenContractToClose) onOpenContractToClose();
        break;
      case 'listing-launch':
        if (onOpenListingCoordination) onOpenListingCoordination();
        break;
      case 'guides':
        if (onOpenGuides) onOpenGuides();
        break;
      case 'workshop':
        if (onOpenTcWorkshop) onOpenTcWorkshop();
        break;
      case 'fit-call':
      default:
        onBookCall();
        break;
    }
  };

  return (
    <article className="min-h-screen bg-[#EEEAEB] text-[#3A2E29] font-sans selection:bg-[#0D9BA3] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. TOP UTILITY BAR & EDITORIAL BLUEPRINT SWITCHER                          */}
      {/* ========================================================================= */}
      <nav aria-label="Breadcrumb and Template Controls" className="border-b border-[#D8D2D4] bg-white/90 backdrop-blur-md text-[11px] font-mono uppercase tracking-widest text-[#3A2E29]/70 py-2.5 px-4 sm:px-8 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          {/* Crawlable Breadcrumb Navigation */}
          <ol className="flex items-center space-x-1.5 flex-wrap">
            <li>
              <a 
                href="/"
                className="hover:text-[#0D9BA3] transition cursor-pointer font-bold text-[#3A2E29]"
              >
                HOME
              </a>
            </li>
            <li aria-hidden="true" className="text-[#D8D2D4]">/</li>
            <li>
              <a 
                href="/resources/"
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    onBackToBlog();
                  }
                }}
                className="hover:text-[#0D9BA3] font-bold transition cursor-pointer inline-flex items-center space-x-1 text-[#3A2E29]"
              >
                <ArrowLeft className="w-3 h-3 text-[#0D9BA3]" />
                <span>THE HOMETOWN BRIEF</span>
              </a>
            </li>
            <li aria-hidden="true" className="text-[#D8D2D4]">/</li>
            <li>
              <a 
                href={`/resources/${getCategorySlug(article.category)}/`}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    onBackToBlog();
                  }
                }}
                className="hover:text-[#0D9BA3] transition truncate max-w-[120px] sm:max-w-[180px] inline-block font-semibold"
              >
                {article.category}
              </a>
            </li>
            <li aria-hidden="true" className="text-[#D8D2D4] hidden lg:inline">/</li>
            <li aria-current="page" className="text-[#3A2E29] font-bold truncate max-w-[180px] hidden lg:inline">
              {article.articleH1}
            </li>
          </ol>

          {/* Template Controls & CMS Schema Inspector */}
          <div className="flex items-center space-x-2">
            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-0.5 bg-[#EEEAEB] rounded-lg border border-[#D8D2D4] text-[10px]">
              <button
                onClick={() => setTemplateMode('placeholders')}
                className={`px-2.5 py-1 rounded font-bold transition cursor-pointer ${
                  templateMode === 'placeholders'
                    ? 'bg-[#3A2E29] text-white shadow-xs'
                    : 'text-[#3A2E29]/70 hover:text-[#3A2E29]'
                }`}
                title="View with pure bracketed placeholders: [CATEGORY], [SEARCHABLE ARTICLE H1], etc."
              >
                [Template Placeholders]
              </button>
              <button
                onClick={() => setTemplateMode('sample')}
                className={`px-2.5 py-1 rounded font-bold transition cursor-pointer ${
                  templateMode === 'sample'
                    ? 'bg-[#0D9BA3] text-white shadow-xs'
                    : 'text-[#3A2E29]/70 hover:text-[#3A2E29]'
                }`}
                title="View with formatted Florida real estate article copy"
              >
                Sample Post View
              </button>
            </div>

            {/* CMS Fields Schema Drawer Button */}
            <button
              onClick={() => setShowCmsDictionary(!showCmsDictionary)}
              className="bg-[#EEEAEB] hover:bg-white text-[#3A2E29] border border-[#D8D2D4] px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition inline-flex items-center space-x-1 cursor-pointer"
            >
              <Code2 className="w-3 h-3 text-[#FE7311]" />
              <span>{showCmsDictionary ? 'Close CMS Fields' : 'CMS Schema Fields'}</span>
            </button>
          </div>

        </div>
      </nav>

      {/* ========================================================================= */}
      {/* CMS CONTENT / DATA DICTIONARY DRAWER (For HTC Editorial Team)             */}
      {/* ========================================================================= */}
      {showCmsDictionary && (
        <aside aria-label="CMS Content Fields & Data Dictionary" className="bg-[#3A2E29] text-white border-b-4 border-[#0D9BA3] px-4 sm:px-8 py-8 animate-in slide-in-from-top duration-200">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0D9BA3] font-bold">
                  HTC EDITORIAL INFRASTRUCTURE
                </span>
                <h2 className="text-xl sm:text-2xl font-montserrat font-bold text-white">
                  Content / CMS Reusable Fields Specification
                </h2>
                <p className="text-xs text-white/70 font-mono mt-1">
                  Structure and data fields ready for HTC to populate future article content without code modifications.
                </p>
              </div>
              <button
                onClick={() => setShowCmsDictionary(false)}
                className="text-xs font-mono text-white/60 hover:text-white cursor-pointer px-3 py-1 bg-white/10 rounded"
              >
                [CLOSE ✕]
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
              
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <span className="text-[#FE7311] font-bold uppercase tracking-wider block">1. Search & Taxonomy</span>
                <ul className="space-y-1 text-white/80 text-[11px]">
                  <li>• <strong className="text-white">Primary Search Question:</strong> {article.primarySearchQuestion}</li>
                  <li>• <strong className="text-white">Search Intent:</strong> {article.searchIntent}</li>
                  <li>• <strong className="text-white">Article H1:</strong> {article.articleH1}</li>
                  <li>• <strong className="text-white">Editorial Kicker:</strong> {article.category}</li>
                  <li>• <strong className="text-white">Slug:</strong> /{article.slug}/</li>
                  <li>• <strong className="text-white">Category:</strong> {article.category}</li>
                  <li>• <strong className="text-white">Region Tag:</strong> {article.regionTag}</li>
                  <li>• <strong className="text-white">Meta Title:</strong> {article.metaTitle}</li>
                  <li>• <strong className="text-white">Meta Description:</strong> {article.metaDescription}</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <span className="text-[#0D9BA3] font-bold uppercase tracking-wider block">2. Editorial Core Copy</span>
                <ul className="space-y-1 text-white/80 text-[11px]">
                  <li>• <strong className="text-white">Summary / Deck:</strong> [SHORT DECK / SUBHEADLINE]</li>
                  <li>• <strong className="text-white">The Brief:</strong> [40–80 WORD DIRECT ANSWER]</li>
                  <li>• <strong className="text-white">Key Takeaways:</strong> Up to 5 key points</li>
                  <li>• <strong className="text-white">Article Body:</strong> Question-based H2 + Copy blocks</li>
                  <li>• <strong className="text-white">Optional Field Note:</strong> {article.optionalFieldNote ? 'Active' : 'Empty (Renders Cleanly)'}</li>
                  <li>• <strong className="text-white">What This Means for Agent:</strong> [CONCLUSION COPY]</li>
                  <li>• <strong className="text-white">Author & Reviewer:</strong> {article.author} / {article.reviewer || 'None'}</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <span className="text-[#FE7311] font-bold uppercase tracking-wider block">3. Visuals & Resource CTAs</span>
                <ul className="space-y-1 text-white/80 text-[11px]">
                  <li>• <strong className="text-white">Featured Image & Alt Text:</strong> {article.altText}</li>
                  <li>• <strong className="text-white">Thumbnail Crop & OG Image:</strong> Enabled</li>
                  <li>• <strong className="text-white">Visual Theme:</strong> {article.visualStyle}</li>
                  <li>• <strong className="text-white">Image Credit:</strong> {article.imageCredit || 'None'}</li>
                  <li>• <strong className="text-white">Primary Resource CTA:</strong> {article.primaryResourceCta.label} ({article.primaryResourceCta.destination})</li>
                  <li>• <strong className="text-white">Secondary Resource CTA:</strong> {article.secondaryResourceCta?.label || 'None'}</li>
                  <li>• <strong className="text-white">Related Articles:</strong> 3 slugs linked</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-[#0D9BA3]/40 space-y-2">
                <span className="text-[#0D9BA3] font-bold uppercase tracking-wider block">4. SEO & AEO Engine</span>
                <ul className="space-y-1 text-white/80 text-[11px]">
                  <li>• <strong className="text-white">Canonical URL:</strong> https://hometowntc.com/resources/{article.slug}/</li>
                  <li>• <strong className="text-white">Structured Data:</strong> BlogPosting + FAQPage + BreadcrumbList</li>
                  <li>• <strong className="text-white">Heading Hierarchy:</strong> 1x H1 • Multiple H2/H3s</li>
                  <li>• <strong className="text-white">Byline & Dates:</strong> Pub: {article.publishedDate} {article.modifiedDate ? `• Mod: ${article.modifiedDate}` : ''}</li>
                  <li>• <strong className="text-white">XML Sitemap:</strong> Included in /sitemap.xml (Priority 0.8)</li>
                  <li>• <strong className="text-white">Crawlable Anchors:</strong> Breadcrumbs, CTAs, Related Dispatches</li>
                  <li>• <strong className="text-white">Social Graph:</strong> Open Graph & Twitter Cards dynamic</li>
                </ul>
              </div>

            </div>
          </div>
        </aside>
      )}

      {/* ========================================================================= */}
      {/* 2. ARTICLE HEADER                                                         */}
      {/* ========================================================================= */}
      <header className="border-b border-[#D8D2D4] bg-white pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Top Kicker & Category */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="inline-flex items-center space-x-2">
              <span className="bg-[#0D9BA3]/10 text-[#0D9BA3] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#0D9BA3]/30">
                {article.category}
              </span>
              <span className="text-[#D8D2D4] hidden sm:inline">•</span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
                {article.regionTag}
              </span>
            </div>

            {/* Read Time & Share */}
            <div className="flex items-center space-x-4 text-xs text-slate-500 font-medium">
              <span className="inline-flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                <span className="font-bold text-[#3A2E29]">{article.readTime}</span>
              </span>
              <button
                onClick={handleShare}
                className="hover:text-[#0D9BA3] transition cursor-pointer inline-flex items-center space-x-1 font-bold text-[#3A2E29]"
                title="Copy link to dispatch"
              >
                <Share2 className="w-3.5 h-3.5 text-[#0D9BA3]" />
                <span>{copiedLink ? 'COPIED!' : 'SHARE'}</span>
              </button>
            </div>
          </div>

          {/* Searchable Article H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold text-[#3A2E29] leading-tight tracking-tight">
            {article.articleH1}
          </h1>

          {/* Short Deck / Subheadline */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed border-l-4 border-[#0D9BA3] pl-4 sm:pl-6 py-1 italic font-medium">
            {article.deck}
          </p>

          {/* Byline & Reviewer Meta Strip */}
          <div className="pt-6 border-t border-[#D8D2D4] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center space-x-1.5">
                <UserCheck className="w-4 h-4 text-[#0D9BA3]" />
                <span>By <strong className="text-[#3A2E29]">{article.author}</strong></span>
              </div>
              
              {article.reviewer && (
                <>
                  <span className="text-[#D8D2D4]">•</span>
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
                    <span>Reviewed by <strong className="text-[#3A2E29]">{article.reviewer}</strong></span>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 text-xs text-slate-500 font-medium">
              <span>Published {article.publishedDate}</span>
              {article.modifiedDate && (
                <>
                  <span>•</span>
                  <span>Updated {article.modifiedDate}</span>
                </>
              )}
            </div>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. MAIN ARTICLE LAYOUT (Single Column with Structured Rail)               */}
      {/* ========================================================================= */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* ======================================================================= */}
        {/* THE BRIEF (Visually easy to spot near the top of every article)         */}
        {/* ======================================================================= */}
        <section aria-labelledby="the-brief-heading" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm relative overflow-hidden space-y-3">
          
          <div className="flex items-center justify-between border-b border-[#D8D2D4] pb-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
              <Sparkles className="w-4 h-4 text-[#FE7311]" />
              <h2 id="the-brief-heading" className="text-sm font-extrabold tracking-wider">The Brief</h2>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FE7311] bg-[#FE7311]/10 px-2.5 py-0.5 rounded-full">
              DIRECT ANSWER
            </span>
          </div>

          <p className="text-base sm:text-lg font-bold text-[#3A2E29] leading-relaxed">
            {article.theBrief}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-[#D8D2D4] font-medium">
            <span>Verified Florida Operational Standard</span>
            <span className="text-[#0D9BA3] font-bold">40–80 Word Fast Takeaway</span>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* ARTICLE VISUAL DIRECTION (Featured Editorial Image or Type-Led Cover)   */}
        {/* ======================================================================= */}
        <figure className="space-y-2">
          <div className="relative rounded-2xl overflow-hidden border border-[#D8D2D4] bg-white shadow-sm">
            <img
              src={article.featuredImage}
              alt={article.altText}
              className="w-full h-64 sm:h-96 object-cover filter contrast-[1.02]"
              loading="lazy"
            />
            {/* Caption banner */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#3A2E29]/90 to-transparent p-4 sm:p-6 text-white text-xs flex items-end justify-between">
              <div className="space-y-0.5">
                <span className="text-[#0D9BA3] font-bold text-[10px] uppercase tracking-wider block">
                  EDITORIAL VISUAL
                </span>
                <span className="text-white/90 text-xs line-clamp-1 font-medium">
                  {article.altText}
                </span>
              </div>
              {article.imageCredit && (
                <span className="text-white/70 text-[10px] flex-shrink-0 ml-4">
                  {article.imageCredit}
                </span>
              )}
            </div>
          </div>
          <figcaption className="text-xs text-slate-500 text-right font-medium">
            Visual concept: marked-up Florida contracts, calendars, and transaction archives.
          </figcaption>
        </figure>

        {/* ======================================================================= */}
        {/* WHAT YOU NEED TO KNOW (Support up to 5 bullets)                         */}
        {/* ======================================================================= */}
        <section aria-labelledby="need-to-know-heading" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] space-y-4 shadow-sm">
          
          <div className="border-b border-[#D8D2D4] pb-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-[#0D9BA3]" />
              <h2 id="need-to-know-heading" className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                What You Need to Know
              </h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              KEY POINTS
            </span>
          </div>

          <ul className="space-y-3 pt-1">
            {article.keyTakeaways.slice(0, 5).map((point, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#0D9BA3]/20">
                  0{idx + 1}
                </span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>

        </section>

        {/* ======================================================================= */}
        {/* QUESTION-BASED ARTICLE SECTIONS (Flexible content blocks for H2 + COPY)  */}
        {/* ======================================================================= */}
        <section aria-label="Question-based analysis" className="space-y-10 sm:space-y-12">
          {article.questionSections.map((section, sIdx) => (
            <div key={section.id || sIdx} className="space-y-4 border-b border-[#D8D2D4] pb-10 last:border-b-0 last:pb-0">
              
              {/* Question-Based H2 */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FE7311]">
                  OPERATIONAL INQUIRY • 0{sIdx + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29] leading-tight">
                  {section.questionH2}
                </h2>
              </div>

              {/* Article Copy Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {section.bodyParagraphs.map((para, pIdx) => (
                  <p key={pIdx}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Optional Section Callout / Legal Citation */}
              {section.calloutQuote && (
                <div className="p-4 bg-[#EEEAEB]/60 rounded-xl border-l-4 border-[#0D9BA3] text-xs text-[#3A2E29] space-y-1 font-medium">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D9BA3] block">
                    FLORIDA STATUTORY / CONTRACT RULE:
                  </span>
                  <p>{section.calloutQuote}</p>
                </div>
              )}

            </div>
          ))}
        </section>

        {/* ======================================================================= */}
        {/* OPTIONAL HTC FIELD NOTE (From the File)                                 */}
        {/* ======================================================================= */}
        {article.optionalFieldNote ? (
          <section aria-labelledby="field-note-heading" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] space-y-4 relative shadow-sm">
            
            <div className="flex items-center justify-between border-b border-[#D8D2D4] pb-3">
              <div className="flex items-center space-x-2">
                <FolderOpen className="w-4 h-4 text-[#FE7311]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">
                  {article.optionalFieldNote.kicker || 'FROM THE FILE'}
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                {article.optionalFieldNote.dossierTag || 'FIELD RECORD'}
              </span>
            </div>

            {article.optionalFieldNote.title && (
              <h2 id="field-note-heading" className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                {article.optionalFieldNote.title}
              </h2>
            )}

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#EEEAEB]/40 p-5 rounded-xl border border-[#D8D2D4]">
              <p className="italic font-medium">
                "{article.optionalFieldNote.text}"
              </p>
            </div>

            <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
              <span>{article.optionalFieldNote.verifiedDate || 'Verified by HTC Field Operations'}</span>
              <span className="font-bold text-[#0D9BA3]">HTC REAL TRANSACTION RECORD</span>
            </div>

          </section>
        ) : null}

        {/* ======================================================================= */}
        {/* WHAT THIS MEANS FOR THE AGENT                                           */}
        {/* ======================================================================= */}
        <section aria-labelledby="what-this-means-heading" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] space-y-3 shadow-sm">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
            <Layers className="w-4 h-4 text-[#FE7311]" />
            <span className="text-xs font-bold uppercase tracking-wider">OPERATIONAL TAKEAWAY</span>
          </div>

          <h2 id="what-this-means-heading" className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
            What This Means for the Agent
          </h2>

          <p className="text-base sm:text-lg font-bold text-[#3A2E29] leading-relaxed">
            {article.whatThisMeansForAgent}
          </p>
        </section>

        {/* ======================================================================= */}
        {/* NEXT BEST RESOURCE (1–2 Configurable Action Blocks)                     */}
        {/* ======================================================================= */}
        <section aria-labelledby="next-resource-heading" className="bg-[#3A2E29] text-white rounded-2xl p-8 sm:p-10 border border-[#0D9BA3]/30 shadow-xl space-y-6">
          
          <div className="space-y-2 border-b border-white/15 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
              NEXT BEST RESOURCE
            </span>
            <h2 id="next-resource-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white">
              Put These Insights Into Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Practical tools and operational pathways to streamline your Florida files.
            </p>
          </div>

          {/* Primary & Secondary Action Cards with Crawlable Links */}
          <div className={`grid grid-cols-1 ${article.secondaryResourceCta ? 'md:grid-cols-2' : ''} gap-4`}>
            
            {/* Primary CTA */}
            <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/15 flex flex-col justify-between space-y-4 transition">
              <div className="space-y-1">
                <span className="text-[11px] text-[#FE7311] font-bold uppercase tracking-wider">
                  RECOMMENDED NEXT STEP
                </span>
                <h3 className="text-lg font-montserrat font-bold text-white">
                  {article.primaryResourceCta.label}
                </h3>
                {article.primaryResourceCta.subtext && (
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {article.primaryResourceCta.subtext}
                  </p>
                )}
              </div>

              <a
                href={getResourceUrl(article.primaryResourceCta)}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    handleResourceClick(article.primaryResourceCta);
                  }
                }}
                className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-md text-center inline-block"
              >
                {article.primaryResourceCta.label}
              </a>
            </div>

            {/* Secondary CTA (If present) */}
            {article.secondaryResourceCta && (
              <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/15 flex flex-col justify-between space-y-4 transition">
                <div className="space-y-1">
                  <span className="text-[11px] text-[#0D9BA3] font-bold uppercase tracking-wider">
                    COMPLIMENTARY TOOL
                  </span>
                  <h3 className="text-lg font-montserrat font-bold text-white">
                    {article.secondaryResourceCta.label}
                  </h3>
                  {article.secondaryResourceCta.subtext && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {article.secondaryResourceCta.subtext}
                    </p>
                  )}
                </div>

                <a
                  href={getResourceUrl(article.secondaryResourceCta)}
                  onClick={(e) => {
                    if (!e.metaKey && !e.ctrlKey) {
                      e.preventDefault();
                      handleResourceClick(article.secondaryResourceCta!);
                    }
                  }}
                  className="w-full bg-transparent hover:bg-white/10 text-white border border-white/30 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer text-center inline-block"
                >
                  {article.secondaryResourceCta.label}
                </a>
              </div>
            )}

          </div>

        </section>

        {/* ======================================================================= */}
        {/* CRAWLABLE INTERNAL LINKS & STATUTORY SOURCES                            */}
        {/* ======================================================================= */}
        {((article.internalLinks && article.internalLinks.length > 0) || (article.externalSources && article.externalSources.length > 0)) && (
          <section aria-label="Internal Resource References and Authorities" className="p-6 bg-white rounded-2xl border border-[#D8D2D4] space-y-4 shadow-sm">
            <h2 className="text-base font-montserrat font-bold text-[#3A2E29] flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-[#0D9BA3]" />
              <span>Crawlable Internal References & Statutory Authorities</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {article.internalLinks && article.internalLinks.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9BA3] block">
                    HTC Internal File Guides
                  </span>
                  <ul className="space-y-1.5">
                    {article.internalLinks.map((link, lIdx) => (
                      <li key={lIdx}>
                        <a 
                          href={link.url}
                          className="text-[#0D9BA3] hover:underline font-bold inline-flex items-center space-x-1"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-[#0D9BA3]" />
                          <span>{link.anchor}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {article.externalSources && article.externalSources.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Statutory & Administrative Authorities
                  </span>
                  <ul className="space-y-1.5">
                    {article.externalSources.map((source, sIdx) => (
                      <li key={sIdx} className="text-slate-600">
                        <a 
                          href={source.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-[#0D9BA3] hover:underline inline-flex items-center space-x-1 font-medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-bold text-[#3A2E29]">{source.authority}:</span>
                          <span>{source.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ======================================================================= */}
        {/* CITATIONS & EDUCATIONAL DISCLAIMER                                      */}
        {/* ======================================================================= */}
        <section aria-label="Educational Disclaimer and Citations" className="p-6 bg-white rounded-2xl border border-[#D8D2D4] space-y-3 text-xs text-slate-600 shadow-sm">
          <div className="flex items-center space-x-2 text-[#0D9BA3] font-bold uppercase tracking-wider text-xs">
            <HelpCircle className="w-4 h-4" />
            <span>Operational & Educational Notice</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-500 font-medium">
            The content provided in The Hometown Brief is curated for educational and operational guidance only and does not constitute legal, tax, or formal brokerage advisory. Florida contract interpretations and statutes are subject to revision. Always consult with your supervising broker or licensed Florida real estate attorney for binding legal counsel.
          </p>
        </section>

        {/* ======================================================================= */}
        {/* REUSABLE NEWSLETTER SIGNUP                                              */}
        {/* ======================================================================= */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#D8D2D4] shadow-xs space-y-4">
          <div className="max-w-2xl mx-auto space-y-3 text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D9BA3] block">
              WEEKLY TRANSACTION DISPATCH
            </span>
            <h2 className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
              Stay Ahead of Florida Contract & Coordination Realities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Every Wednesday morning, we send one concise breakdown of Florida contract changes, new templates, and operational field notes from our transaction desk.
            </p>
            <div className="pt-2">
              <NewsletterSignup 
                variant="card" 
                source={`Brief Dispatch: ${article.articleH1}`} 
              />
            </div>
          </div>
        </div>

        {/* ======================================================================= */}
        {/* RELATED ARTICLES                                                        */}
        {/* ======================================================================= */}
        {article.relatedArticleSlugs && article.relatedArticleSlugs.length > 0 && (
          <section aria-labelledby="related-articles-heading" className="space-y-4 pt-6 border-t border-[#D8D2D4]">
            <div className="flex items-center justify-between">
              <h2 id="related-articles-heading" className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Related Dispatches from The Brief
              </h2>
              <a
                href="/resources/"
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    onBackToBlog();
                  }
                }}
                className="text-xs font-bold text-[#0D9BA3] hover:text-[#FE7311] transition-colors cursor-pointer"
              >
                VIEW ARCHIVE →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {article.relatedArticleSlugs.map((relSlug) => {
                const rel = CMS_ARTICLES[relSlug];
                if (!rel) return null;
                return (
                  <a
                    key={relSlug}
                    href={`/resources/${rel.slug}/`}
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey) {
                        e.preventDefault();
                        if (onOpenArticle) onOpenArticle(rel.slug);
                      }
                    }}
                    className="p-5 bg-white rounded-xl border border-[#D8D2D4] hover:border-[#0D9BA3] hover:shadow-md transition cursor-pointer space-y-2 group block"
                  >
                    <span className="text-[11px] text-[#0D9BA3] font-bold uppercase tracking-wider block">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition line-clamp-2">
                      {rel.articleH1}
                    </h3>
                    <span className="text-xs text-slate-400 block font-medium">
                      {rel.readTime}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        )}

      </main>

    </article>
  );
};
