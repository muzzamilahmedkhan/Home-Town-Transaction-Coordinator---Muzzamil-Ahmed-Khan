import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  X,
  ArrowRight,
  Clock,
  ShieldCheck,
  UserCheck,
  Calendar,
  Calculator,
  FileText,
  BookOpen,
  Newspaper,
  CheckCircle2,
  Sparkles,
  Layers,
  HelpCircle,
  Bookmark,
  FolderOpen,
  Paperclip,
  Download,
  Share2,
  SlidersHorizontal,
  AlertCircle
} from 'lucide-react';
import {
  CATEGORY_ARCHIVE_CONFIGS,
  NEUTRAL_PLACEHOLDER_ARTICLES,
  HTC_INTERNAL_LINKS,
  searchBriefs,
  SearchResultItem,
  NeutralPlaceholderArticle
} from '../data/blog';

interface Props {
  onGoHome: () => void;
  onOpenPost: (slug: string) => void;
  onBookCall: () => void;
  onOpenCalculator?: (hash?: string) => void;
  onOpenGuides?: () => void;
  onExploreServices?: () => void;
  onNavigate?: (path: string) => void;
}

export const BlogResourcesPage: React.FC<Props> = ({
  onGoHome,
  onOpenPost,
  onBookCall,
  onOpenCalculator,
  onOpenGuides,
  onExploreServices,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | string>('all');
  const [fileTabIdx, setFileTabIdx] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Fallback internal router if onNavigate prop isn't passed
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  // 1. Search results computation covering title, theBrief, category, tags, and article body
  const searchResults: SearchResultItem[] = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchBriefs(searchQuery);
  }, [searchQuery]);

  // Lead Brief (Today's Brief)
  const leadBrief = useMemo(() => {
    return NEUTRAL_PLACEHOLDER_ARTICLES.find(a => a.isLeadBrief) || NEUTRAL_PLACEHOLDER_ARTICLES[0];
  }, []);

  // Worth 3 Minutes (3 concise columns)
  const worth3MinutesArticles = useMemo(() => {
    const list = NEUTRAL_PLACEHOLDER_ARTICLES.filter(a => a.isWorth3Min);
    return list.slice(0, 3);
  }, []);

  // From the File (HTC Field Notes)
  const fromTheFileArticles = useMemo(() => {
    const list = NEUTRAL_PLACEHOLDER_ARTICLES.filter(a => a.isFromFile);
    return list.length > 0 ? list : NEUTRAL_PLACEHOLDER_ARTICLES.slice(3, 6);
  }, []);

  // Active From the File item
  const activeFileItem = fromTheFileArticles[fileTabIdx] || fromTheFileArticles[0];

  // SEO Title & Meta Description as specified in client brief
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'The Hometown Brief | Florida Real Estate Answers for Realtors';

    // Canonical link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://hometowntc.com/resources/');

    // Meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Quick, practical answers for Florida Realtors on transaction coordination, contracts, compliance, condo and HOA issues, agent operations, and business growth.'
    );

    // OpenGraph
    const setMetaTag = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMetaTag('property', 'og:title', 'The Hometown Brief | Florida Real Estate Answers for Realtors');
    setMetaTag(
      'property',
      'og:description',
      'Quick, practical answers for Florida Realtors on transaction coordination, contracts, compliance, condo and HOA issues, agent operations, and business growth.'
    );
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', 'https://hometowntc.com/resources/');

    // JSON-LD WebSite and Blog / CollectionPage schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'hometown-brief-index-schema';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://hometowntc.com/resources/#website',
          'url': 'https://hometowntc.com/resources/',
          'name': 'The Hometown Brief',
          'description': 'Quick, practical answers for Florida Realtors on transaction coordination, contracts, compliance, condo and HOA issues, agent operations, and business growth.',
          'publisher': {
            '@type': 'Organization',
            'name': 'Hometown Transaction Coordinators',
            'url': 'https://hometowntc.com/'
          }
        },
        {
          '@type': 'CollectionPage',
          '@id': 'https://hometowntc.com/resources/',
          'url': 'https://hometowntc.com/resources/',
          'name': 'The Hometown Brief | Florida Real Estate Answers for Realtors',
          'headline': 'Florida real estate operations, without the fluff.',
          'description': 'Quick, practical answers for Florida Realtors on transaction coordination, contracts, compliance, condo and HOA issues, agent operations, and business growth.',
          'isPartOf': {
            '@id': 'https://hometowntc.com/resources/#website'
          }
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      document.title = originalTitle;
      const el = document.getElementById('hometown-brief-index-schema');
      if (el) el.remove();
    };
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEAEB] text-[#3A2E29] font-sans antialiased selection:bg-[#0D9BA3] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. THE HOMETOWN BRIEF MASTHEAD + SEARCH                                  */}
      {/* ========================================================================= */}
      <header className="bg-white border-b border-[#D8D2D4]">
        {/* Dateline Bar */}
        <div className="border-b border-[#D8D2D4] bg-[#EEEAEB]/70 text-[11px] uppercase tracking-widest text-[#3A2E29]/70 font-mono py-2.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="hover:text-[#0D9BA3] flex items-center gap-1.5 font-bold transition-colors text-[#3A2E29]"
              >
                HOMETOWN TRANSACTION COORDINATORS
              </a>
              <span className="text-[#D8D2D4]">|</span>
              <span className="text-[#0D9BA3] font-extrabold">STATEWIDE FLORIDA DISPATCH</span>
            </div>

            <div className="flex items-center gap-4 text-[10px] text-slate-500">
              <span className="font-semibold text-[#3A2E29]">FLORIDA TRANSACTION OPERATIONS</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">UPDATED WEEKLY</span>
              <span className="hidden sm:inline">•</span>
              <button
                onClick={handleShare}
                className="hover:text-[#0D9BA3] font-bold transition-colors flex items-center gap-1 cursor-pointer text-[#3A2E29]"
                title="Share The Hometown Brief"
              >
                <Share2 className="w-3 h-3 text-[#0D9BA3]" />
                {copiedLink ? 'COPIED LINK' : 'SHARE'}
              </button>
            </div>
          </div>
        </div>

        {/* Masthead Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <span>Practical Intelligence for Florida Real Estate Professionals</span>
            </div>
            
            <div className="text-4xl sm:text-6xl md:text-7xl font-montserrat font-extrabold tracking-tight text-[#3A2E29] uppercase border-y border-[#D8D2D4] py-3 my-3">
              The Hometown Brief
            </div>
            {/* Single H1 */}
            <h1 className="text-lg sm:text-2xl font-montserrat font-semibold text-[#3A2E29] mt-2 tracking-normal">
              Florida real estate operations, without the fluff.
            </h1>
          </div>

          {/* Search Bar - Covers: title, The Brief answer, category, tags, and article body */}
          <div className="max-w-3xl mx-auto mt-6">
            <div className="bg-white border border-[#D8D2D4] p-3 rounded-2xl shadow-sm hover:border-[#0D9BA3] transition-all">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#0D9BA3] absolute left-3.5 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by article title, The Brief answer, category, tags, or body..."
                  className="w-full bg-[#EEEAEB]/40 rounded-xl border border-[#D8D2D4] pl-11 pr-10 py-3 text-sm sm:text-base text-[#3A2E29] placeholder-slate-400 focus:outline-none focus:border-[#0D9BA3] focus:ring-2 focus:ring-[#0D9BA3]/20 font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 text-slate-400 hover:text-[#3A2E29] p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Search Helper Pills */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2.5 pt-2.5 border-t border-[#D8D2D4] text-xs font-medium">
                <div className="flex flex-wrap items-center gap-1.5 text-slate-600">
                  <span className="font-bold text-[#3A2E29] text-[11px] uppercase tracking-wider">POPULAR:</span>
                  {['FAR/BAR', 'Escrow', 'Condo SB 4-D', 'Inspection', 'Compliance'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-2.5 py-1 bg-[#EEEAEB] hover:bg-[#0D9BA3] hover:text-white rounded-lg border border-[#D8D2D4] text-[#3A2E29] text-xs transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
                {searchQuery && (
                  <span className="font-bold text-[#FE7311] text-xs">
                    {searchResults.length} {searchResults.length === 1 ? 'RESULT' : 'RESULTS'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. TOPIC NAVIGATION (ALL 6 CRAWLABLE ARCHIVE URLS)                       */}
      {/* ========================================================================= */}
      <nav
        aria-label="Topic Navigation"
        className="border-b border-[#D8D2D4] bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center overflow-x-auto py-3 gap-2 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3A2E29] shrink-0 mr-1 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#0D9BA3]" />
              TOPICS:
            </span>

            {/* All Dispatches */}
            <a
              href="/resources/"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('all');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full transition-all shrink-0 whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#0D9BA3] text-white shadow-sm'
                  : 'bg-[#EEEAEB] text-[#3A2E29] border border-[#D8D2D4] hover:border-[#0D9BA3] hover:text-[#0D9BA3]'
              }`}
            >
              ALL DISPATCHES
            </a>

            {/* The 6 Permanent Category Archive URLs */}
            {Object.values(CATEGORY_ARCHIVE_CONFIGS).map((cat) => (
              <a
                key={cat.slug}
                href={`/resources/${cat.slug}/`}
                onClick={(e) => handleLinkClick(e, `/resources/${cat.slug}/`)}
                className="px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full border border-[#D8D2D4] bg-[#EEEAEB] text-[#3A2E29] hover:border-[#0D9BA3] hover:text-[#0D9BA3] hover:bg-white transition-colors shrink-0 whitespace-nowrap"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* SEARCH RESULTS VIEW (When search active) */}
        {searchQuery.trim().length > 0 ? (
          <section className="mb-14 bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D2D4] pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FE7311] font-bold block mb-1">
                  SEARCH RESULTS
                </span>
                <h2 className="text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                  Results for &ldquo;{searchQuery}&rdquo;
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Covering article title, The Brief answer, category, tags, and article body.
                </p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#EEEAEB] border border-[#D8D2D4] hover:bg-[#0D9BA3] hover:text-white rounded-xl transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-10 text-center">
                <AlertCircle className="w-8 h-8 text-[#FE7311] mx-auto mb-2" />
                <p className="text-lg font-bold text-[#3A2E29]">No briefs found matching &ldquo;{searchQuery}&rdquo;.</p>
                <p className="text-xs text-slate-500 mt-1">Try another keyword like FAR/BAR, escrow, condo, or compliance.</p>
              </div>
            ) : (
              <div className="divide-y divide-[#D8D2D4]">
                {searchResults.map((result) => (
                  <article key={result.id} className="py-5 first:pt-0 last:pb-0 group">
                    <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                      <span className="bg-[#0D9BA3]/10 text-[#0D9BA3] border border-[#0D9BA3]/20 px-2.5 py-0.5 rounded-full font-bold">
                        {result.category}
                      </span>
                      <span className="text-slate-500 flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                        {result.readTime}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#FE7311] bg-[#FE7311]/10 px-2 py-0.5 rounded-full">
                        MATCHED: {result.matchedField.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition-colors mb-2">
                      <a
                        href={`/resources/${result.slug}/`}
                        onClick={(e) => handleLinkClick(e, `/resources/${result.slug}/`)}
                        className="hover:underline"
                      >
                        {result.headline}
                      </a>
                    </h3>

                    {/* SHORT SUMMARY - strictly no giant excerpts! */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {result.shortSummary}
                    </p>

                    <a
                      href={`/resources/${result.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${result.slug}/`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] group-hover:text-[#FE7311] transition-colors"
                    >
                      <span>READ BRIEF</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </article>
                ))}
              </div>
            )}
          </section>
        ) : null}

        {/* ========================================================================= */}
        {/* 3. TODAY’S BRIEF                                                          */}
        {/* ========================================================================= */}
        <section aria-labelledby="todays-brief-heading" className="mb-14">
          <div className="border-b border-[#D8D2D4] pb-2.5 mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-[#FE7311] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FE7311] animate-pulse"></span>
              TODAY&rsquo;S BRIEF • LEAD DISPATCH
            </span>
            <span className="text-xs text-slate-500 uppercase font-semibold">
              FLORIDA STATEWIDE EDITION
            </span>
          </div>

          <div className="bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                {/* [CATEGORY] & [READ TIME] */}
                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
                  <span className="bg-[#0D9BA3] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    {leadBrief.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    {leadBrief.readTime}
                  </span>
                  <span className="text-[#FE7311] font-bold text-xs">STATEWIDE SCOPE</span>
                </div>

                {/* [ARTICLE TITLE] */}
                <h2 id="todays-brief-heading" className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-[#3A2E29] leading-tight mb-4">
                  <a
                    href={`/resources/${leadBrief.slug}/`}
                    onClick={(e) => handleLinkClick(e, `/resources/${leadBrief.slug}/`)}
                    className="hover:text-[#0D9BA3] transition-colors"
                  >
                    {leadBrief.placeholderTitle}
                  </a>
                </h2>

                {/* [ARTICLE SUMMARY] */}
                <div className="p-4 bg-[#EEEAEB]/50 rounded-xl border border-[#D8D2D4] mb-4">
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {leadBrief.placeholderSummary}
                  </p>
                </div>

                {/* The Brief Callout Box */}
                <div className="p-4 bg-[#0D9BA3]/5 border-l-4 border-[#0D9BA3] rounded-r-xl mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9BA3] block mb-1">
                    THE BRIEF ANSWER:
                  </span>
                  <p className="italic text-sm text-[#3A2E29] leading-relaxed font-medium">
                    {leadBrief.theBrief}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#D8D2D4] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`/resources/${leadBrief.slug}/`}
                  onClick={(e) => handleLinkClick(e, `/resources/${leadBrief.slug}/`)}
                  className="px-6 py-3 bg-[#FE7311] hover:bg-[#e05f03] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>READ THE BRIEF</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-slate-500 font-medium">
                  EDITORIAL BLUEPRINT • 01
                </span>
              </div>
            </div>

            {/* Side Column: Quick Statutory Rules & Context */}
            <div className="lg:col-span-4 bg-[#EEEAEB]/50 border border-[#D8D2D4] rounded-xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-2">
                  OPERATIONAL REFERENCE
                </span>
                <h3 className="font-montserrat font-bold text-base text-[#3A2E29] mb-3">
                  Florida Statutory Notice Standards
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700 mb-4 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] shrink-0 mt-0.5" />
                    <span>Standard F calendar day calculation rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] shrink-0 mt-0.5" />
                    <span>5:00 PM rolling cutoff for weekend milestones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] shrink-0 mt-0.5" />
                    <span>11:59 PM written cancellation cutoffs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] shrink-0 mt-0.5" />
                    <span>Escrow verification within 10 business days</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-[#D8D2D4]">
                <a
                  href="/resources/contracts-forms/"
                  onClick={(e) => handleLinkClick(e, '/resources/contracts-forms/')}
                  className="text-xs font-bold text-[#0D9BA3] hover:text-[#FE7311] flex items-center justify-between transition-colors"
                >
                  <span>BROWSE CONTRACTS & FORMS DESK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WORTH 3 MINUTES                                                        */}
        {/* ========================================================================= */}
        <section aria-labelledby="worth-3-minutes-heading" className="mb-14">
          <div className="border-b border-[#D8D2D4] pb-2.5 mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#0D9BA3] font-bold block mb-0.5">
                SHORT-FORM OPERATIONAL BRIEFS
              </span>
              <h2 id="worth-3-minutes-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                Worth 3 Minutes
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#3A2E29] bg-white px-3 py-1.5 rounded-full border border-[#D8D2D4]">
              FAST READS FOR BUSY REALTORS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {worth3MinutesArticles.map((article, idx) => (
              <article
                key={article.id}
                className="bg-white border border-[#D8D2D4] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-[#0D9BA3] hover:shadow-md transition-all group"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#D8D2D4] text-xs">
                    <span className="font-bold text-[#0D9BA3] bg-[#0D9BA3]/10 px-2.5 py-0.5 rounded-full border border-[#0D9BA3]/20">
                      {article.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                      {article.readTime}
                    </span>
                  </div>

                  <span className="text-[11px] text-[#FE7311] font-bold uppercase tracking-wider block mb-1">
                    COLUMN 0{idx + 1}
                  </span>

                  {/* [ARTICLE TITLE] */}
                  <h3 className="text-base sm:text-lg font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition-colors leading-snug mb-3">
                    <a
                      href={`/resources/${article.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                      className="hover:underline"
                    >
                      {article.placeholderTitle}
                    </a>
                  </h3>

                  {/* [ARTICLE SUMMARY] */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 p-3 bg-[#EEEAEB]/40 rounded-xl border border-[#D8D2D4]">
                    {article.placeholderSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8D2D4] flex items-center justify-between">
                  <a
                    href={`/resources/${article.slug}/`}
                    onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] group-hover:text-[#FE7311] transition-colors"
                  >
                    <span>READ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-slate-400 font-medium">NO FLUFF</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. FROM THE FILE                                                          */}
        {/* ========================================================================= */}
        <section aria-labelledby="from-the-file-heading" className="mb-14">
          <div className="border-b border-[#D8D2D4] pb-2.5 mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#FE7311] font-bold block mb-0.5">
                REAL FLORIDA CLOSING SCENARIOS
              </span>
              <h2 id="from-the-file-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                From the File
              </h2>
            </div>
            <span className="text-xs text-slate-600 bg-white px-3 py-1.5 rounded-full border border-[#D8D2D4] font-medium">
              MANILA FOLDER ARCHIVES
            </span>
          </div>

          <div className="bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 shadow-sm">
            {/* Folder Tabs Navigation */}
            <div className="flex flex-wrap gap-2 border-b border-[#D8D2D4] pb-3 mb-6">
              {fromTheFileArticles.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setFileTabIdx(idx)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                    fileTabIdx === idx
                      ? 'bg-[#3A2E29] text-white shadow-sm'
                      : 'bg-[#EEEAEB] text-[#3A2E29] border border-[#D8D2D4] hover:bg-[#D8D2D4]'
                  }`}
                >
                  <FolderOpen className={`w-3.5 h-3.5 ${fileTabIdx === idx ? 'text-[#0D9BA3]' : 'text-slate-500'}`} />
                  <span>{item.fileNumber || `FILE #0${idx + 1}`}</span>
                </button>
              ))}
            </div>

            {/* Active Folder Dossier */}
            <div className="bg-[#EEEAEB]/30 rounded-xl border border-[#D8D2D4] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D2D4] pb-3 mb-4">
                <span className="text-xs font-bold text-[#FE7311] uppercase tracking-wider">
                  {activeFileItem.fileNoteKicker || '[EDITORIAL KICKER / FIELD NOTE TITLE]'}
                </span>
                <span className="text-[11px] text-slate-500 bg-white px-2.5 py-1 rounded-full border border-[#D8D2D4] font-medium">
                  HTC will provide actual observation copy
                </span>
              </div>

              {/* [SEARCHABLE ARTICLE TITLE] */}
              <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29] mb-3">
                <a
                  href={`/resources/${activeFileItem.slug}/`}
                  onClick={(e) => handleLinkClick(e, `/resources/${activeFileItem.slug}/`)}
                  className="hover:text-[#0D9BA3] transition-colors"
                >
                  {activeFileItem.placeholderTitle}
                </a>
              </h3>

              {/* [SHORT SUMMARY] */}
              <div className="p-4 bg-white rounded-xl border border-[#D8D2D4] mb-4">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {activeFileItem.placeholderSummary}
                </p>
              </div>

              {/* Operational Direct Answer */}
              <p className="text-sm italic text-[#3A2E29] leading-relaxed p-4 bg-[#0D9BA3]/5 border-l-4 border-[#0D9BA3] rounded-r-xl mb-6 font-medium">
                {activeFileItem.theBrief}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#D8D2D4]">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="font-bold text-[#0D9BA3]">{activeFileItem.category}</span>
                  <span>•</span>
                  <span>{activeFileItem.readTime}</span>
                </div>

                <a
                  href={`/resources/${activeFileItem.slug}/`}
                  onClick={(e) => handleLinkClick(e, `/resources/${activeFileItem.slug}/`)}
                  className="px-5 py-2.5 bg-[#0D9BA3] hover:bg-[#0b8289] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>READ THE BRIEF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. RUN THE NUMBERS                                                        */}
        {/* ========================================================================= */}
        <section aria-labelledby="run-numbers-heading" className="mb-14">
          <div className="bg-[#3A2E29] text-white rounded-2xl p-8 sm:p-10 border border-[#0D9BA3]/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#0D9BA3]/30">
                  <span>INTERACTIVE FINANCIAL & PRODUCTION TOOL</span>
                </div>
                <h2 id="run-numbers-heading" className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-white">
                  Run the Numbers for Your Real Estate Business
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium">
                  Discover what 15 administrative hours per file are costing your production. Calculate your true hourly earnings and model what happens when you reinvest freed time into listings.
                </p>

                {/* 3 Core Calculator Models */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <a
                    href="/agent-business-calculator/#time-worth"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#time-worth')}
                    className="p-3.5 bg-white/10 border border-white/15 hover:bg-white/20 rounded-xl transition-all text-xs"
                  >
                    <span className="text-[#FE7311] font-bold block mb-1">MODEL 01:</span>
                    <span className="font-medium text-slate-200">What is your administrative time really worth?</span>
                  </a>

                  <a
                    href="/agent-business-calculator/#hire-or-htc"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#hire-or-htc')}
                    className="p-3.5 bg-white/10 border border-white/15 hover:bg-white/20 rounded-xl transition-all text-xs"
                  >
                    <span className="text-[#FE7311] font-bold block mb-1">MODEL 02:</span>
                    <span className="font-medium text-slate-200">In-house assistant vs. Partnering with HTC</span>
                  </a>

                  <a
                    href="/agent-business-calculator/#20-percent-more"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#20-percent-more')}
                    className="p-3.5 bg-white/10 border border-white/15 hover:bg-white/20 rounded-xl transition-all text-xs"
                  >
                    <span className="text-[#FE7311] font-bold block mb-1">MODEL 03:</span>
                    <span className="font-medium text-slate-200">The 20% Capacity Rule: Scaling deal volume</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="/agent-business-calculator/"
                  onClick={(e) => handleLinkClick(e, '/agent-business-calculator/')}
                  className="w-full text-center px-6 py-4 bg-[#FE7311] hover:bg-[#e05f03] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg cursor-pointer"
                >
                  LAUNCH RUN THE NUMBERS →
                </a>
                <a
                  href="/how-htc-works/"
                  onClick={(e) => handleLinkClick(e, '/how-htc-works/')}
                  className="w-full text-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-colors cursor-pointer"
                >
                  SEE HOW HTC WORKS →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. MORE FROM THE BRIEF (CATEGORY-BY-CATEGORY ARCHIVES)                    */}
        {/* ========================================================================= */}
        <section aria-labelledby="more-briefs-heading" className="mb-14">
          <div className="border-b border-[#D8D2D4] pb-2.5 mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#0D9BA3] font-bold block mb-1">
                DEPARTMENTAL ARCHIVE DIRECTORY
              </span>
              <h2 id="more-briefs-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                More From The Brief
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              ORGANIZED BY PERMANENT CATEGORY ARCHIVES
            </span>
          </div>

          <div className="space-y-10">
            {Object.values(CATEGORY_ARCHIVE_CONFIGS).map((cat) => {
              const catArticles = NEUTRAL_PLACEHOLDER_ARTICLES.filter(
                (a) => a.categorySlug === cat.slug
              );

              return (
                <div key={cat.slug} className="bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 shadow-sm">
                  {/* Category Header with Link to dedicated Archive Page */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#D8D2D4]">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FE7311] block mb-0.5">
                        {cat.deskCode}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {cat.tagline}
                      </p>
                    </div>

                    <a
                      href={`/resources/${cat.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${cat.slug}/`)}
                      className="px-4 py-2 bg-[#EEEAEB] hover:bg-[#0D9BA3] hover:text-white border border-[#D8D2D4] text-xs font-bold uppercase tracking-wider text-[#3A2E29] rounded-xl transition-colors"
                    >
                      VIEW ALL {cat.name.toUpperCase()} BRIEFS →
                    </a>
                  </div>

                  {/* Articles in this Category with clean cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {catArticles.map((article, idx) => (
                      <article
                        key={article.id}
                        className="bg-[#EEEAEB]/30 hover:bg-white border border-[#D8D2D4] hover:border-[#0D9BA3] rounded-xl p-5 flex flex-col justify-between transition-all hover:shadow-md group"
                      >
                        <div>
                          {/* [CATEGORY] & [READ TIME] */}
                          <div className="flex items-center justify-between text-xs text-slate-500 mb-2 pb-2 border-b border-[#D8D2D4]">
                            <span className="font-bold text-[#0D9BA3]">{article.category}</span>
                            <span>{article.readTime}</span>
                          </div>

                          <span className="text-[11px] font-bold text-[#FE7311] block mb-1">
                            ENTRY 0{idx + 1}
                          </span>

                          {/* [ARTICLE TITLE] */}
                          <h4 className="font-montserrat font-bold text-sm sm:text-base text-[#3A2E29] group-hover:text-[#0D9BA3] transition-colors mb-2 leading-snug">
                            <a
                              href={`/resources/${article.slug}/`}
                              onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                              className="hover:underline"
                            >
                              {article.placeholderTitle}
                            </a>
                          </h4>

                          {/* [ARTICLE SUMMARY] */}
                          <p className="text-xs text-slate-600 leading-relaxed mb-3 p-2.5 bg-white rounded-lg border border-[#D8D2D4]">
                            {article.placeholderSummary}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#D8D2D4]">
                          <a
                            href={`/resources/${article.slug}/`}
                            onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                            className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3] group-hover:text-[#FE7311] transition-colors inline-flex items-center gap-1"
                          >
                            <span>READ BRIEF</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. FREE GUIDES + DOWNLOADS                                               */}
        {/* ========================================================================= */}
        <section aria-labelledby="free-guides-heading" className="mb-14">
          <div className="bg-[#EEEAEB] border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="border-b border-[#D8D2D4] pb-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FE7311] font-bold block mb-1">
                  TAKE IT WITH YOU • FIELD DOWNLOADS
                </span>
                <h2 id="free-guides-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                  Free Guides + Operational Downloads
                </h2>
              </div>
              <a
                href="/free-guides-downloads/"
                onClick={(e) => handleLinkClick(e, '/free-guides-downloads/')}
                className="text-xs font-bold text-[#0D9BA3] hover:text-[#FE7311] uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>VIEW FULL LIBRARY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Guide 1 */}
              <div className="bg-white border border-[#D8D2D4] rounded-xl p-6 flex flex-col justify-between shadow-sm hover:border-[#0D9BA3] transition-all">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#FE7311] font-bold block mb-1">
                    FIELD MANUAL #01 • STATEWIDE
                  </span>
                  <h3 className="font-montserrat font-bold text-lg text-[#3A2E29] mb-2">
                    Florida Contract-to-Close Milestone Roadmap
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    A comprehensive, day-by-day deadline checklist calibrated to the FAR/BAR Standard F calendar computation rules. Perfect for new agents and busy teams.
                  </p>
                </div>
                <a
                  href="/free-guides-downloads/"
                  onClick={(e) => handleLinkClick(e, '/free-guides-downloads/')}
                  className="px-5 py-2.5 bg-[#0D9BA3] hover:bg-[#0b8289] text-white text-xs font-bold uppercase tracking-wider text-center rounded-xl transition-colors"
                >
                  DOWNLOAD FREE ROADMAP →
                </a>
              </div>

              {/* Guide 2 */}
              <div className="bg-white border border-[#D8D2D4] rounded-xl p-6 flex flex-col justify-between shadow-sm hover:border-[#0D9BA3] transition-all">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#FE7311] font-bold block mb-1">
                    FIELD MANUAL #02 • CONDO SPECIAL
                  </span>
                  <h3 className="font-montserrat font-bold text-lg text-[#3A2E29] mb-2">
                    Condo SB 4-D Milestone & SIRS Reserve Audit Checklist
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    The 8 questions to ask any Florida condo association before writing an offer. Avoid Fannie Mae loan rejections and multi-thousand dollar special assessments.
                  </p>
                </div>
                <a
                  href="/free-guides-downloads/"
                  onClick={(e) => handleLinkClick(e, '/free-guides-downloads/')}
                  className="px-5 py-2.5 bg-[#0D9BA3] hover:bg-[#0b8289] text-white text-xs font-bold uppercase tracking-wider text-center rounded-xl transition-colors"
                >
                  DOWNLOAD CONDO AUDIT CHECKLIST →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERNAL LINKING DIRECTORY (ALL 11 REQUIRED CLIENT DESTINATIONS)          */}
        {/* ========================================================================= */}
        <section aria-labelledby="internal-links-dir-heading" className="mb-14 border border-[#D8D2D4] bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="border-b border-[#D8D2D4] pb-3 mb-4">
            <span className="text-xs uppercase tracking-wider text-[#0D9BA3] font-bold block mb-1">
              INTERNAL DIRECTORY
            </span>
            <h2 id="internal-links-dir-heading" className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
              Essential Florida Real Estate Operational Links
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            {HTC_INTERNAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={(e) => handleLinkClick(e, link.url)}
                className="p-3 bg-[#EEEAEB]/50 hover:bg-white border border-[#D8D2D4] hover:border-[#0D9BA3] rounded-xl transition-all flex flex-col justify-between group"
              >
                <span className="font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] block mb-1 transition-colors">{link.label}</span>
                <span className="text-[10px] text-slate-400 font-mono">{link.url}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FINAL CTA                                                              */}
        {/* ========================================================================= */}
        <section className="bg-[#3A2E29] text-white rounded-2xl p-8 sm:p-12 text-center border border-[#0D9BA3]/30 shadow-xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/30 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
            <span>PROTECT THE AGENT · PROTECT THE BROKER · PROTECT THE CLIENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold text-white mb-4 leading-tight max-w-3xl mx-auto">
            Want us to handle the work instead?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            From contract intake to title execution, our Florida-based team manages deadlines, documents, and compliance so you can focus on clients.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl transition inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>BOOK A 15-MINUTE FIT CALL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/pricing/"
              onClick={(e) => handleLinkClick(e, '/pricing/')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition inline-flex items-center cursor-pointer"
            >
              EXPLORE SERVICES & PRICING
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
