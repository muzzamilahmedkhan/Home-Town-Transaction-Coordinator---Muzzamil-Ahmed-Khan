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
            'name': 'Hometown Title & Closing',
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#0D2C4D] selection:text-[#FAF8F5]">

      {/* ========================================================================= */}
      {/* 1. THE HOMETOWN BRIEF MASTHEAD + SEARCH                                  */}
      {/* ========================================================================= */}
      <header className="border-b-4 border-[#0D2C4D] bg-[#FAF8F5]">
        {/* Dateline Bar */}
        <div className="border-b border-[#E5E0D8] bg-[#F4EFEA] text-[11px] uppercase tracking-widest text-[#666666] font-mono py-2 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="hover:text-[#0D2C4D] flex items-center gap-1 font-semibold transition-colors"
              >
                HOMETOWN TITLE & CLOSING
              </a>
              <span className="text-[#B3A89B]">|</span>
              <span className="text-[#0D2C4D] font-bold">STATEWIDE FLORIDA DISPATCH</span>
            </div>

            <div className="flex items-center gap-4 text-[10px] text-[#7A7369]">
              <span>VOL. XXIV • NO. 42</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">67 COUNTIES MONITORED</span>
              <span className="hidden sm:inline">•</span>
              <button
                onClick={handleShare}
                className="hover:text-[#0D2C4D] transition-colors flex items-center gap-1"
                title="Share The Hometown Brief"
              >
                <Share2 className="w-3 h-3" />
                {copiedLink ? 'COPIED LINK' : 'SHARE'}
              </button>
            </div>
          </div>
        </div>

        {/* Newspaper Masthead Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-8">
          <div className="text-center mb-6">
            <span className="font-serif italic text-base sm:text-lg text-[#7A7369] block mb-1">
              Practical Intelligence for Florida Real Estate Professionals
            </span>
            <div className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#0D2C4D] uppercase border-y-2 border-[#1A1A1A] py-2 my-2">
              The Hometown Brief
            </div>
            {/* Single H1 as mandated */}
            <h1 className="text-lg sm:text-2xl font-serif font-bold text-[#1A1A1A] mt-2 tracking-normal">
              Florida real estate operations, without the fluff.
            </h1>
          </div>

          {/* Search Bar - Covers: title, The Brief answer, category, tags, and article body */}
          <div className="max-w-3xl mx-auto mt-6">
            <div className="bg-white border-2 border-[#1A1A1A] p-2.5 shadow-[4px_4px_0px_0px_#1A1A1A]">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#7A7369] absolute left-3 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by article title, The Brief answer, category, tags, or body..."
                  className="w-full bg-[#FAF8F5] border border-[#D8D2C5] pl-10 pr-10 py-2.5 text-sm sm:text-base text-[#1A1A1A] placeholder-[#8A8378] focus:outline-none focus:border-[#0D2C4D] font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-[#7A7369] hover:text-[#1A1A1A]"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Search Helper Pills */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2 pt-2 border-t border-[#E5E0D8] text-[11px] font-mono">
                <div className="flex items-center gap-1 text-[#7A7369]">
                  <span className="font-bold text-[#0D2C4D]">POPULAR:</span>
                  {['FAR/BAR', 'Escrow', 'Condo SB 4-D', 'Inspection', 'Compliance'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-1.5 py-0.5 bg-[#F4EFEA] hover:bg-[#E5E0D8] border border-[#D8D2C5] text-[#4A453E] transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
                {searchQuery && (
                  <span className="font-bold text-[#C84B31]">
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
        className="border-b-2 border-[#1A1A1A] bg-[#F4EFEA] sticky top-0 z-30 shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center overflow-x-auto py-2.5 gap-2 scrollbar-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A7369] font-bold shrink-0 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-[#C84B31]" />
              TOPIC ARCHIVES:
            </span>

            {/* All Dispatches */}
            <a
              href="/resources/"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('all');
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase border transition-all shrink-0 whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#0D2C4D] text-[#FAF8F5] border-[#0D2C4D] shadow-[2px_2px_0px_0px_#1A1A1A]'
                  : 'bg-white text-[#4A453E] border-[#D8D2C5] hover:border-[#0D2C4D]'
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
                className="px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase border border-[#D8D2C5] bg-white text-[#4A453E] hover:border-[#0D2C4D] hover:text-[#0D2C4D] hover:bg-[#FAF8F5] transition-colors shrink-0 whitespace-nowrap"
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
          <section className="mb-14 border-2 border-[#1A1A1A] bg-white p-6 sm:p-8 shadow-[4px_4px_0px_0px_#1A1A1A]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#1A1A1A] pb-4 mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C84B31] font-bold block mb-1">
                  SEARCH RESULTS
                </span>
                <h2 className="text-2xl font-serif font-black text-[#0D2C4D]">
                  Results for &ldquo;{searchQuery}&rdquo;
                </h2>
                <p className="text-xs font-mono text-[#7A7369] mt-0.5">
                  Covering article title, The Brief answer, category, tags, and article body.
                </p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-[#F4EFEA] border border-[#1A1A1A] hover:bg-[#E5E0D8] transition-colors"
              >
                Clear Search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-8 text-center">
                <AlertCircle className="w-8 h-8 text-[#8A8378] mx-auto mb-2" />
                <p className="font-serif text-lg text-[#4A453E]">No briefs found matching &ldquo;{searchQuery}&rdquo;.</p>
                <p className="text-xs font-mono text-[#7A7369] mt-1">Try another keyword like FAR/BAR, escrow, condo, or compliance.</p>
              </div>
            ) : (
              <div className="divide-y divide-[#E5E0D8]">
                {searchResults.map((result) => (
                  <article key={result.id} className="py-4 first:pt-0 last:pb-0 group">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5 text-[11px] font-mono">
                      <span className="bg-[#FAF8F5] border border-[#D8D2C5] px-2 py-0.5 font-bold text-[#0D2C4D]">
                        {result.category}
                      </span>
                      <span className="text-[#8A8378] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {result.readTime}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-[#C84B31] bg-[#F4EFEA] px-1.5 py-0.5">
                        MATCHED: {result.matchedField.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#0D2C4D] transition-colors mb-1.5">
                      <a
                        href={`/resources/${result.slug}/`}
                        onClick={(e) => handleLinkClick(e, `/resources/${result.slug}/`)}
                        className="hover:underline"
                      >
                        {result.headline}
                      </a>
                    </h3>

                    {/* SHORT SUMMARY - strictly no giant excerpts! */}
                    <p className="text-sm font-sans text-[#5A554E] leading-relaxed mb-2 font-mono">
                      {result.shortSummary}
                    </p>

                    <a
                      href={`/resources/${result.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${result.slug}/`)}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#0D2C4D] hover:text-[#C84B31] transition-colors"
                    >
                      READ BRIEF <ArrowRight className="w-3 h-3" />
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
          <div className="border-b-2 border-[#1A1A1A] pb-2 mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C84B31] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C84B31] animate-pulse"></span>
              TODAY&rsquo;S BRIEF • LEAD DISPATCH
            </span>
            <span className="font-mono text-[11px] text-[#7A7369] uppercase">
              FLORIDA STATEWIDE EDITION
            </span>
          </div>

          <div className="bg-white border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#1A1A1A] grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                {/* [CATEGORY] & [READ TIME] */}
                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-mono">
                  <span className="bg-[#0D2C4D] text-white px-2.5 py-0.5 font-bold uppercase tracking-wider">
                    {leadBrief.category}
                  </span>
                  <span className="text-[#7A7369] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {leadBrief.readTime}
                  </span>
                  <span className="text-[#C84B31] font-bold">STATEWIDE SCOPE</span>
                </div>

                {/* [ARTICLE TITLE] */}
                <h2 id="todays-brief-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-[#0D2C4D] leading-tight mb-4">
                  <a
                    href={`/resources/${leadBrief.slug}/`}
                    onClick={(e) => handleLinkClick(e, `/resources/${leadBrief.slug}/`)}
                    className="hover:underline"
                  >
                    {leadBrief.placeholderTitle}
                  </a>
                </h2>

                {/* [ARTICLE SUMMARY] */}
                <div className="p-4 bg-[#FAF8F5] border border-dashed border-[#B3A89B] mb-4">
                  <p className="font-mono text-sm text-[#4A453E] leading-relaxed">
                    {leadBrief.placeholderSummary}
                  </p>
                </div>

                {/* The Brief Callout Box */}
                <div className="p-4 bg-[#F4EFEA] border-l-4 border-[#0D2C4D] mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D2C4D] block mb-1">
                    THE BRIEF ANSWER:
                  </span>
                  <p className="font-serif italic text-sm text-[#1A1A1A] leading-relaxed">
                    {leadBrief.theBrief}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`/resources/${leadBrief.slug}/`}
                  onClick={(e) => handleLinkClick(e, `/resources/${leadBrief.slug}/`)}
                  className="px-5 py-2.5 bg-[#0D2C4D] text-[#FAF8F5] font-mono text-xs font-bold uppercase tracking-wider border border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-[#1A3D66] transition-all flex items-center gap-2"
                >
                  READ THE BRIEF <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono text-[#7A7369]">
                  EDITORIAL BLUEPRINT • 01
                </span>
              </div>
            </div>

            {/* Side Column: Quick Statutory Rules & Context */}
            <div className="lg:col-span-4 bg-[#FAF8F5] border border-[#D8D2C5] p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A7369] font-bold block mb-2">
                  OPERATIONAL REFERENCE
                </span>
                <h3 className="font-serif font-bold text-lg text-[#0D2C4D] mb-3">
                  Florida Statutory Notice Standards
                </h3>
                <ul className="space-y-2 text-xs font-mono text-[#5A554E] mb-4">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C84B31] shrink-0 mt-0.5" />
                    <span>Standard F calendar day calculation rules</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C84B31] shrink-0 mt-0.5" />
                    <span>5:00 PM rolling cutoff for weekend milestones</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C84B31] shrink-0 mt-0.5" />
                    <span>11:59 PM written cancellation cutoffs</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C84B31] shrink-0 mt-0.5" />
                    <span>Escrow verification within 10 business days</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-[#D8D2C5]">
                <a
                  href="/resources/contracts-forms/"
                  onClick={(e) => handleLinkClick(e, '/resources/contracts-forms/')}
                  className="text-xs font-mono font-bold text-[#0D2C4D] hover:text-[#C84B31] flex items-center justify-between"
                >
                  <span>BROWSE CONTRACTS & FORMS DESK</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WORTH 3 MINUTES                                                        */}
        {/* ========================================================================= */}
        <section aria-labelledby="worth-3-minutes-heading" className="mb-14">
          <div className="border-b-2 border-[#1A1A1A] pb-2 mb-6 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#7A7369] font-bold block mb-0.5">
                SHORT-FORM OPERATIONAL BRIEFS
              </span>
              <h2 id="worth-3-minutes-heading" className="text-2xl sm:text-3xl font-serif font-black text-[#0D2C4D]">
                Worth 3 Minutes
              </h2>
            </div>
            <span className="font-mono text-xs text-[#7A7369] bg-[#F4EFEA] px-2.5 py-1 border border-[#D8D2C5]">
              FAST READS FOR BUSY REALTORS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {worth3MinutesArticles.map((article, idx) => (
              <article
                key={article.id}
                className="bg-white border-2 border-[#1A1A1A] p-5 flex flex-col justify-between shadow-[3px_3px_0px_0px_#1A1A1A] hover:shadow-[5px_5px_0px_0px_#0D2C4D] transition-all group"
              >
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#E5E0D8] text-[11px] font-mono">
                    <span className="font-bold text-[#0D2C4D] bg-[#F4EFEA] px-2 py-0.5 border border-[#D8D2C5]">
                      {article.category}
                    </span>
                    <span className="text-[#7A7369] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#C84B31] font-bold uppercase tracking-widest block mb-1">
                    COLUMN 0{idx + 1}
                  </span>

                  {/* [ARTICLE TITLE] */}
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#0D2C4D] transition-colors leading-snug mb-3">
                    <a
                      href={`/resources/${article.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                      className="hover:underline"
                    >
                      {article.placeholderTitle}
                    </a>
                  </h3>

                  {/* [ARTICLE SUMMARY] */}
                  <p className="font-mono text-xs text-[#5A554E] leading-relaxed mb-4 p-2 bg-[#FAF8F5] border border-dashed border-[#D8D2C5]">
                    {article.placeholderSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
                  <a
                    href={`/resources/${article.slug}/`}
                    onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#0D2C4D] group-hover:text-[#C84B31] transition-colors"
                  >
                    READ <ArrowRight className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] font-mono text-[#8A8378]">NO FLUFF</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. FROM THE FILE                                                          */}
        {/* ========================================================================= */}
        <section aria-labelledby="from-the-file-heading" className="mb-14">
          <div className="border-b-2 border-[#1A1A1A] pb-2 mb-6 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C84B31] font-bold block mb-0.5">
                REAL FLORIDA CLOSING SCENARIOS
              </span>
              <h2 id="from-the-file-heading" className="text-2xl sm:text-3xl font-serif font-black text-[#0D2C4D]">
                From the File
              </h2>
            </div>
            <span className="font-mono text-xs text-[#7A7369] bg-[#F4EFEA] px-2.5 py-1 border border-[#D8D2C5]">
              MANILA FOLDER ARCHIVES
            </span>
          </div>

          <div className="bg-[#FAF8F5] border-2 border-[#1A1A1A] p-6 shadow-[4px_4px_0px_0px_#1A1A1A]">
            {/* Folder Tabs Navigation */}
            <div className="flex flex-wrap gap-2 border-b-2 border-[#1A1A1A] pb-3 mb-6">
              {fromTheFileArticles.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setFileTabIdx(idx)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider font-bold border transition-all flex items-center gap-2 ${
                    fileTabIdx === idx
                      ? 'bg-[#0D2C4D] text-white border-[#0D2C4D] shadow-[2px_2px_0px_0px_#1A1A1A]'
                      : 'bg-white text-[#4A453E] border-[#D8D2C5] hover:border-[#0D2C4D]'
                  }`}
                >
                  <FolderOpen className="w-3.5 h-3.5 text-[#C84B31]" />
                  <span>{item.fileNumber || `FILE #0${idx + 1}`}</span>
                </button>
              ))}
            </div>

            {/* Active Folder Dossier */}
            <div className="bg-white border border-[#D8D2C5] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D2C5] pb-3 mb-4">
                <span className="text-xs font-mono font-bold text-[#C84B31] uppercase tracking-widest">
                  {activeFileItem.fileNoteKicker || '[EDITORIAL KICKER / FIELD NOTE TITLE]'}
                </span>
                <span className="text-[11px] font-mono text-[#7A7369] bg-[#F4EFEA] px-2 py-0.5 border border-[#D8D2C5]">
                  HTC will provide actual observation copy
                </span>
              </div>

              {/* [SEARCHABLE ARTICLE TITLE] */}
              <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0D2C4D] mb-3">
                <a
                  href={`/resources/${activeFileItem.slug}/`}
                  onClick={(e) => handleLinkClick(e, `/resources/${activeFileItem.slug}/`)}
                  className="hover:underline"
                >
                  {activeFileItem.placeholderTitle}
                </a>
              </h3>

              {/* [SHORT SUMMARY] */}
              <div className="p-4 bg-[#FAF8F5] border border-dashed border-[#B3A89B] mb-4">
                <p className="font-mono text-sm text-[#4A453E] leading-relaxed">
                  {activeFileItem.placeholderSummary}
                </p>
              </div>

              {/* Operational Direct Answer */}
              <p className="text-sm font-serif italic text-[#1A1A1A] leading-relaxed p-4 bg-[#F4EFEA] border-l-4 border-[#C84B31] mb-6">
                {activeFileItem.theBrief}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E5E0D8]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#7A7369]">
                  <span className="font-bold text-[#0D2C4D]">{activeFileItem.category}</span>
                  <span>•</span>
                  <span>{activeFileItem.readTime}</span>
                </div>

                <a
                  href={`/resources/${activeFileItem.slug}/`}
                  onClick={(e) => handleLinkClick(e, `/resources/${activeFileItem.slug}/`)}
                  className="px-4 py-2 bg-[#0D2C4D] text-[#FAF8F5] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1A3D66] transition-colors inline-flex items-center gap-1.5"
                >
                  READ THE BRIEF <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. RUN THE NUMBERS                                                        */}
        {/* ========================================================================= */}
        <section aria-labelledby="run-numbers-heading" className="mb-14">
          <div className="bg-[#0D2C4D] text-[#FAF8F5] border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#1A1A1A]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F2C94C] font-bold block mb-1">
                  INTERACTIVE FINANCIAL & PRODUCTION TOOL
                </span>
                <h2 id="run-numbers-heading" className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black mb-3">
                  Run the Numbers for Your Real Estate Business
                </h2>
                <p className="text-sm sm:text-base font-serif text-[#D0D7DE] leading-relaxed max-w-2xl mb-4">
                  Discover what 15 administrative hours per file are costing your production. Calculate your true hourly earnings and model what happens when you reinvest freed time into listings.
                </p>

                {/* 3 Core Calculator Models */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href="/agent-business-calculator/#time-worth"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#time-worth')}
                    className="p-3 bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-xs font-mono"
                  >
                    <span className="text-[#F2C94C] font-bold block mb-1">MODEL 01:</span>
                    <span className="font-sans font-medium text-white">What is your administrative time really worth?</span>
                  </a>

                  <a
                    href="/agent-business-calculator/#hire-or-htc"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#hire-or-htc')}
                    className="p-3 bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-xs font-mono"
                  >
                    <span className="text-[#F2C94C] font-bold block mb-1">MODEL 02:</span>
                    <span className="font-sans font-medium text-white">In-house assistant vs. Partnering with HTC</span>
                  </a>

                  <a
                    href="/agent-business-calculator/#20-percent-more"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#20-percent-more')}
                    className="p-3 bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-xs font-mono"
                  >
                    <span className="text-[#F2C94C] font-bold block mb-1">MODEL 03:</span>
                    <span className="font-sans font-medium text-white">The 20% Capacity Rule: Scaling deal volume</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="/agent-business-calculator/"
                  onClick={(e) => handleLinkClick(e, '/agent-business-calculator/')}
                  className="w-full text-center px-5 py-3.5 bg-[#F2C94C] text-[#0D2C4D] font-mono text-xs font-black uppercase tracking-wider hover:bg-white transition-colors border border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]"
                >
                  LAUNCH RUN THE NUMBERS →
                </a>
                <a
                  href="/how-htc-works/"
                  onClick={(e) => handleLinkClick(e, '/how-htc-works/')}
                  className="w-full text-center px-4 py-2.5 bg-transparent text-white font-mono text-xs font-bold uppercase tracking-wider border border-[#D0D7DE] hover:bg-white/10 transition-colors"
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
          <div className="border-b-2 border-[#1A1A1A] pb-2 mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#7A7369] font-bold block mb-1">
                DEPARTMENTAL ARCHIVE DIRECTORY
              </span>
              <h2 id="more-briefs-heading" className="text-2xl sm:text-3xl font-serif font-black text-[#0D2C4D]">
                More From The Brief
              </h2>
            </div>
            <span className="font-mono text-xs text-[#7A7369]">
              ORGANIZED BY PERMANENT CATEGORY ARCHIVES
            </span>
          </div>

          <div className="space-y-10">
            {Object.values(CATEGORY_ARCHIVE_CONFIGS).map((cat) => {
              const catArticles = NEUTRAL_PLACEHOLDER_ARTICLES.filter(
                (a) => a.categorySlug === cat.slug
              );

              return (
                <div key={cat.slug} className="border-t-2 border-[#1A1A1A] pt-4">
                  {/* Category Header with Link to dedicated Archive Page */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-[#C84B31] font-bold uppercase tracking-wider">
                        {cat.deskCode}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D2C4D]">
                        {cat.name}
                      </h3>
                      <p className="text-xs font-serif text-[#666666]">
                        {cat.tagline}
                      </p>
                    </div>

                    <a
                      href={`/resources/${cat.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${cat.slug}/`)}
                      className="px-3 py-1.5 bg-[#F4EFEA] border border-[#1A1A1A] text-xs font-mono font-bold uppercase tracking-wider text-[#0D2C4D] hover:bg-[#0D2C4D] hover:text-white transition-colors"
                    >
                      VIEW ALL {cat.name.toUpperCase()} BRIEFS →
                    </a>
                  </div>

                  {/* Articles in this Category with clean divider rules */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {catArticles.map((article, idx) => (
                      <article
                        key={article.id}
                        className="bg-white border border-[#D8D2C5] p-4 flex flex-col justify-between hover:border-[#0D2C4D] hover:shadow-[3px_3px_0px_0px_#0D2C4D] transition-all group"
                      >
                        <div>
                          {/* [CATEGORY] & [READ TIME] */}
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#7A7369] mb-2 pb-2 border-b border-[#E5E0D8]">
                            <span className="font-bold text-[#0D2C4D]">{article.category}</span>
                            <span>{article.readTime}</span>
                          </div>

                          <span className="text-[10px] font-mono text-[#C84B31] block mb-1">
                            ENTRY 0{idx + 1}
                          </span>

                          {/* [ARTICLE TITLE] */}
                          <h4 className="font-serif font-bold text-sm sm:text-base text-[#1A1A1A] group-hover:text-[#0D2C4D] transition-colors mb-2 leading-snug">
                            <a
                              href={`/resources/${article.slug}/`}
                              onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                              className="hover:underline"
                            >
                              {article.placeholderTitle}
                            </a>
                          </h4>

                          {/* [ARTICLE SUMMARY] */}
                          <p className="font-mono text-xs text-[#5A554E] leading-relaxed mb-3 p-2 bg-[#FAF8F5] border border-dashed border-[#E5E0D8]">
                            {article.placeholderSummary}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#E5E0D8]">
                          <a
                            href={`/resources/${article.slug}/`}
                            onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                            className="text-xs font-mono font-bold text-[#0D2C4D] group-hover:text-[#C84B31] transition-colors inline-flex items-center gap-1"
                          >
                            READ BRIEF <ArrowRight className="w-3 h-3" />
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
          <div className="bg-[#F4EFEA] border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#1A1A1A]">
            <div className="border-b border-[#D8D2C5] pb-3 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C84B31] font-bold block mb-1">
                  TAKE IT WITH YOU • FIELD DOWNLOADS
                </span>
                <h2 id="free-guides-heading" className="text-2xl sm:text-3xl font-serif font-black text-[#0D2C4D]">
                  Free Guides + Operational Downloads
                </h2>
              </div>
              <a
                href="/free-guides-downloads/"
                onClick={(e) => handleLinkClick(e, '/free-guides-downloads/')}
                className="text-xs font-mono font-bold text-[#0D2C4D] hover:text-[#C84B31] uppercase tracking-wider flex items-center gap-1"
              >
                VIEW FULL LIBRARY <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Guide 1 */}
              <div className="bg-white border-2 border-[#1A1A1A] p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C84B31] font-bold block mb-1">
                    FIELD MANUAL #01 • STATEWIDE
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#0D2C4D] mb-2">
                    Florida Contract-to-Close Milestone Roadmap
                  </h3>
                  <p className="text-xs font-serif text-[#5A554E] leading-relaxed mb-4">
                    A comprehensive, day-by-day deadline checklist calibrated to the FAR/BAR Standard F calendar computation rules. Perfect for new agents and busy teams.
                  </p>
                </div>
                <a
                  href="/free-guides-downloads/"
                  onClick={(e) => handleLinkClick(e, '/free-guides-downloads/')}
                  className="px-4 py-2 bg-[#0D2C4D] text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-[#1A3D66] transition-colors"
                >
                  DOWNLOAD FREE ROADMAP →
                </a>
              </div>

              {/* Guide 2 */}
              <div className="bg-white border-2 border-[#1A1A1A] p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C84B31] font-bold block mb-1">
                    FIELD MANUAL #02 • CONDO SPECIAL
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#0D2C4D] mb-2">
                    Condo SB 4-D Milestone & SIRS Reserve Audit Checklist
                  </h3>
                  <p className="text-xs font-serif text-[#5A554E] leading-relaxed mb-4">
                    The 8 questions to ask any Florida condo association before writing an offer. Avoid Fannie Mae loan rejections and multi-thousand dollar special assessments.
                  </p>
                </div>
                <a
                  href="/free-guides-downloads/"
                  onClick={(e) => handleLinkClick(e, '/free-guides-downloads/')}
                  className="px-4 py-2 bg-[#0D2C4D] text-white font-mono text-xs font-bold uppercase tracking-wider text-center hover:bg-[#1A3D66] transition-colors"
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
        <section aria-labelledby="internal-links-dir-heading" className="mb-14 border border-[#D8D2C5] bg-white p-6 sm:p-8">
          <div className="border-b border-[#E5E0D8] pb-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A7369] font-bold block mb-1">
              INTERNAL DIRECTORY
            </span>
            <h2 id="internal-links-dir-heading" className="text-xl sm:text-2xl font-serif font-bold text-[#0D2C4D]">
              Essential Florida Real Estate Operational Links
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs font-mono">
            {HTC_INTERNAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={(e) => handleLinkClick(e, link.url)}
                className="p-2.5 bg-[#FAF8F5] border border-[#E5E0D8] hover:border-[#0D2C4D] hover:text-[#0D2C4D] transition-colors flex flex-col justify-between"
              >
                <span className="font-bold text-[#0D2C4D] block mb-1">{link.label}</span>
                <span className="text-[10px] text-[#8A8378]">{link.url}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. FINAL CTA                                                              */}
        {/* ========================================================================= */}
        <section className="border-2 border-[#1A1A1A] bg-white p-8 sm:p-12 text-center shadow-[4px_4px_0px_0px_#1A1A1A] mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C84B31] font-bold block mb-2">
            EXPERIENCE FLORIDA-BASED TRANSACTION COORDINATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#0D2C4D] mb-3">
            Want us to handle the work instead?
          </h2>
          <p className="text-base sm:text-lg text-[#5A554E] max-w-2xl mx-auto font-serif mb-6 leading-relaxed">
            From contract intake to title execution, our Florida-based team manages deadlines, documents, and compliance so you can focus on clients.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onBookCall}
              className="px-6 py-3.5 bg-[#0D2C4D] text-[#FAF8F5] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] hover:bg-[#1A3D66] transition-all"
            >
              BOOK A 15-MINUTE FIT CALL
            </button>
            <a
              href="/pricing/"
              onClick={(e) => handleLinkClick(e, '/pricing/')}
              className="px-6 py-3.5 bg-[#F4EFEA] text-[#0D2C4D] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#1A1A1A] hover:bg-[#E5E0D8] transition-colors"
            >
              EXPLORE SERVICES & PRICING
            </a>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* 10. FOOTER                                                                */}
      {/* ========================================================================= */}
      <footer className="border-t-4 border-[#0D2C4D] bg-[#F4EFEA] text-[#4A453E] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-serif font-black text-2xl text-[#0D2C4D] block mb-2">
              The Hometown Brief
            </span>
            <p className="text-xs font-serif text-[#666666] leading-relaxed mb-3">
              Florida real estate operations, without the fluff. Published by Hometown Title & Closing.
            </p>
            <span className="text-[10px] font-mono text-[#7A7369]">
              FLORIDA STATEWIDE COVERAGE
            </span>
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D2C4D] block mb-3">
              TOPIC ARCHIVES
            </span>
            <ul className="space-y-1.5 text-xs font-mono">
              {Object.values(CATEGORY_ARCHIVE_CONFIGS).map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`/resources/${cat.slug}/`}
                    onClick={(e) => handleLinkClick(e, `/resources/${cat.slug}/`)}
                    className="hover:text-[#C84B31] transition-colors"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D2C4D] block mb-3">
              TOOLS & SERVICES
            </span>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <a href="/agent-business-calculator/" onClick={(e) => handleLinkClick(e, '/agent-business-calculator/')} className="hover:text-[#C84B31]">
                  Run the Numbers
                </a>
              </li>
              <li>
                <a href="/how-htc-works/" onClick={(e) => handleLinkClick(e, '/how-htc-works/')} className="hover:text-[#C84B31]">
                  How HTC Works
                </a>
              </li>
              <li>
                <a href="/why-htc/" onClick={(e) => handleLinkClick(e, '/why-htc/')} className="hover:text-[#C84B31]">
                  Why HTC
                </a>
              </li>
              <li>
                <a href="/listing-coordination/" onClick={(e) => handleLinkClick(e, '/listing-coordination/')} className="hover:text-[#C84B31]">
                  Listing Launch
                </a>
              </li>
              <li>
                <a href="/contract-to-close-services/" onClick={(e) => handleLinkClick(e, '/contract-to-close-services/')} className="hover:text-[#C84B31]">
                  Contract-to-Close
                </a>
              </li>
              <li>
                <a href="/pricing/" onClick={(e) => handleLinkClick(e, '/pricing/')} className="hover:text-[#C84B31]">
                  Services + Pricing
                </a>
              </li>
              <li>
                <a href="/tcworkshop/" onClick={(e) => handleLinkClick(e, '/tcworkshop/')} className="hover:text-[#C84B31]">
                  Florida TC Workshop
                </a>
              </li>
              <li>
                <a href="/free-guides-downloads/" onClick={(e) => handleLinkClick(e, '/free-guides-downloads/')} className="hover:text-[#C84B31]">
                  Free Guides + Downloads
                </a>
              </li>
              <li>
                <a href="/faq/" onClick={(e) => handleLinkClick(e, '/faq/')} className="hover:text-[#C84B31]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/book-discovery-call/" onClick={(e) => handleLinkClick(e, '/book-discovery-call/')} className="hover:text-[#C84B31]">
                  Fit Call
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D2C4D] block mb-3">
              CONSULT WITH MICHELLE
            </span>
            <p className="text-xs font-sans text-[#666666] mb-3 leading-relaxed">
              Have a file question, contract timeline question, or interested in offloading files?
            </p>
            <button
              onClick={onBookCall}
              className="w-full px-4 py-2.5 bg-[#0D2C4D] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1A3D66] transition-colors"
            >
              SCHEDULE 15-MIN FIT CALL
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-[#D8D2C5] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#7A7369]">
          <span>© 2026 Hometown Title & Closing • All Rights Reserved</span>
          <span>FLORIDA REAL ESTATE OPERATIONS • WITHOUT THE FLUFF</span>
        </div>
      </footer>
    </div>
  );
};
