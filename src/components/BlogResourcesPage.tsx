import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  X,
  ArrowRight,
  Clock,
  ShieldCheck,
  Calendar,
  Calculator,
  FileText,
  BookOpen,
  CheckCircle2,
  SlidersHorizontal,
  AlertCircle,
  Share2
} from 'lucide-react';
import {
  CATEGORY_ARCHIVE_CONFIGS,
  NEUTRAL_PLACEHOLDER_ARTICLES,
  HTC_INTERNAL_LINKS,
  searchBriefs,
  SearchResultItem
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

  // Search results computation
  const searchResults: SearchResultItem[] = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchBriefs(searchQuery);
  }, [searchQuery]);

  // SEO Title & Meta Description
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
      'Quick, practical answers on contracts, transaction operations, compliance, growth, and the work behind the closing.'
    );
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', 'https://hometowntc.com/resources/');

    // JSON-LD WebSite and CollectionPage schema
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
          'description': 'Quick, practical answers on contracts, transaction operations, compliance, growth, and the work behind the closing.',
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
          'description': 'Quick, practical answers on contracts, transaction operations, compliance, growth, and the work behind the closing.',
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
      {/* 1. TOP HEADER & THE HOMETOWN BRIEF HERO                                   */}
      {/* ========================================================================= */}
      <header className="bg-white border-b border-[#D8D2D4]">
        {/* Navigation Bar */}
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
              <span className="text-[#0D9BA3] font-extrabold">THE HOMETOWN BRIEF</span>
            </div>

            <div className="flex items-center gap-4 text-[10px] text-slate-500">
              <span className="font-semibold text-[#3A2E29]">FLORIDA TRANSACTION OPERATIONS</span>
              <span>•</span>
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

        {/* Masthead Hero: Simple, focused identity */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#0D9BA3]/20">
              <span>THE HOMETOWN BRIEF</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-montserrat font-extrabold tracking-tight text-[#3A2E29] leading-tight mb-5">
              Florida real estate operations, without the fluff.
            </h1>

            {/* Support */}
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-3">
              Quick, practical answers on contracts, transaction operations, compliance, growth, and the work behind the closing.
            </p>

            {/* Supporting line */}
            <p className="text-sm sm:text-base text-[#FE7311] font-bold tracking-wide">
              One question. One Brief. One useful answer.
            </p>
          </div>

          {/* Search Bar - Search can stay */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-white border border-[#D8D2D4] p-3 rounded-2xl shadow-sm hover:border-[#0D9BA3] transition-all">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-[#0D9BA3] absolute left-3.5 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search The Hometown Brief..."
                  className="w-full bg-[#EEEAEB]/40 rounded-xl border border-[#D8D2D4] pl-11 pr-10 py-3 text-sm sm:text-base text-[#3A2E29] placeholder-slate-400 focus:outline-none focus:border-[#0D9BA3] focus:ring-2 focus:ring-[#0D9BA3]/20 font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 text-slate-400 hover:text-[#3A2E29] p-1 cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Quick Topic Pills */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2.5 pt-2.5 border-t border-[#D8D2D4] text-xs font-medium">
                <div className="flex flex-wrap items-center gap-1.5 text-slate-600">
                  <span className="font-bold text-[#3A2E29] text-[11px] uppercase tracking-wider">TOPICS:</span>
                  {['Contracts', 'Operations', 'Compliance', 'Condo + HOA', 'Agent Growth', 'Florida Updates'].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSearchQuery(topic)}
                      className="px-2.5 py-1 bg-[#EEEAEB] hover:bg-[#0D9BA3] hover:text-white rounded-lg border border-[#D8D2D4] text-[#3A2E29] text-xs transition-colors cursor-pointer"
                    >
                      {topic}
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
      {/* 2. TOPIC NAVIGATION                                                       */}
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

            {/* All Topics */}
            <a
              href="/resources/"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('all');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full transition-all shrink-0 whitespace-nowrap ${
                activeTab === 'all' && !searchQuery
                  ? 'bg-[#0D9BA3] text-white shadow-sm'
                  : 'bg-[#EEEAEB] text-[#3A2E29] border border-[#D8D2D4] hover:border-[#0D9BA3] hover:text-[#0D9BA3]'
              }`}
            >
              ALL TOPICS
            </a>

            {/* Category URLs */}
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

      {/* MAIN CONTENT AREA */}
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
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#EEEAEB] border border-[#D8D2D4] hover:bg-[#0D9BA3] hover:text-white rounded-xl transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-12 text-center max-w-lg mx-auto">
                <AlertCircle className="w-10 h-10 text-[#FE7311] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#3A2E29] mb-1">
                  No published briefs match &ldquo;{searchQuery}&rdquo;.
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-5">
                  Try searching for another topic or explore the categories above. New operational briefs appear here as published.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-4 py-2 bg-[#0D9BA3] hover:bg-[#0b8289] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    View All Topics
                  </button>
                  <a
                    href="/agent-business-calculator/"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/')}
                    className="px-4 py-2 bg-[#FE7311] hover:bg-[#e05f03] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                  >
                    Run the Numbers
                  </a>
                </div>
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
        {/* 3. CLEAN EDITORIAL LAYOUT (ONLY REAL APPROVED CONTENT)                   */}
        {/* ========================================================================= */}
        <section aria-labelledby="editorial-topics-heading" className="mb-14">
          <div className="border-b border-[#D8D2D4] pb-3 mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#0D9BA3] font-bold block mb-1">
                EDITORIAL COVERAGE
              </span>
              <h2 id="editorial-topics-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                Florida Real Estate Operational Topics
              </h2>
            </div>
          </div>

          {/* 6 Topic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(CATEGORY_ARCHIVE_CONFIGS).map((cat) => (
              <div
                key={cat.slug}
                className="bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-[#0D9BA3] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#D8D2D4]">
                    <span className="text-xs font-bold text-[#0D9BA3] bg-[#0D9BA3]/10 px-2.5 py-0.5 rounded-full border border-[#0D9BA3]/20">
                      {cat.name}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      HTC BRIEF
                    </span>
                  </div>

                  <h3 className="text-lg font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition-colors mb-2 leading-snug">
                    <a
                      href={`/resources/${cat.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${cat.slug}/`)}
                    >
                      {cat.name}
                    </a>
                  </h3>

                  <p className="text-xs font-semibold text-[#FE7311] mb-2 leading-snug">
                    {cat.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.categoryIntroPlaceholder}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D8D2D4] flex items-center justify-between">
                  <a
                    href={`/resources/${cat.slug}/`}
                    onClick={(e) => handleLinkClick(e, `/resources/${cat.slug}/`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] group-hover:text-[#FE7311] transition-colors"
                  >
                    <span>EXPLORE TOPIC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] text-slate-400 font-medium">FLORIDA DESK</span>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Note */}
          <div className="mt-8 bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="text-lg font-montserrat font-bold text-[#3A2E29] mb-2">
              Verified Operational Briefs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-5">
              Hometown Transaction Coordinators publishes practical, verified operational briefs for Florida real estate professionals. Each brief delivers one clear question, one brief, and one useful answer—without fluff or generalized theory.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/agent-business-calculator/"
                onClick={(e) => handleLinkClick(e, '/agent-business-calculator/')}
                className="px-5 py-2.5 bg-[#FE7311] hover:bg-[#e05f03] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-xs"
              >
                LAUNCH RUN THE NUMBERS
              </a>
              <button
                onClick={onBookCall}
                className="px-5 py-2.5 bg-[#0D9BA3] hover:bg-[#0b8289] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                BOOK A 15-MINUTE FIT CALL
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. RUN THE NUMBERS BLOCK                                                  */}
        {/* ========================================================================= */}
        <section aria-labelledby="run-numbers-heading" className="mb-14">
          <div className="bg-[#3A2E29] text-white rounded-2xl p-8 sm:p-10 border border-[#0D9BA3]/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#0D9BA3]/30">
                  <span>INTERACTIVE AGENT BUSINESS TOOL</span>
                </div>
                <h2 id="run-numbers-heading" className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-white">
                  Run the Numbers for Your Real Estate Business
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-medium">
                  Calculate your true hourly earnings, evaluate administrative leverage, and model what happens when you reinvest freed time into listings and clients.
                </p>

                {/* 3 Core Calculator Models with Requested Final Language */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <a
                    href="/agent-business-calculator/#time-worth"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#time-worth')}
                    className="p-4 bg-white/10 border border-white/15 hover:bg-white/20 rounded-xl transition-all text-xs flex flex-col justify-between"
                  >
                    <span className="text-[#FE7311] font-bold text-xs uppercase tracking-wider block mb-1">
                      WHAT’S MY TIME WORTH?
                    </span>
                    <span className="font-medium text-slate-200">
                      Calculate your hourly value and administrative time investment.
                    </span>
                  </a>

                  <a
                    href="/agent-business-calculator/#hire-or-htc"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#hire-or-htc')}
                    className="p-4 bg-white/10 border border-white/15 hover:bg-white/20 rounded-xl transition-all text-xs flex flex-col justify-between"
                  >
                    <span className="text-[#FE7311] font-bold text-xs uppercase tracking-wider block mb-1">
                      HIRE A TC OR USE HTC?
                    </span>
                    <span className="font-medium text-slate-200">
                      Compare in-house assistant overhead with on-demand HTC file support.
                    </span>
                  </a>

                  <a
                    href="/agent-business-calculator/#20-percent-more"
                    onClick={(e) => handleLinkClick(e, '/agent-business-calculator/#20-percent-more')}
                    className="p-4 bg-white/10 border border-white/15 hover:bg-white/20 rounded-xl transition-all text-xs flex flex-col justify-between"
                  >
                    <span className="text-[#FE7311] font-bold text-xs uppercase tracking-wider block mb-1">
                      WHAT COULD 20% MORE LOOK LIKE?
                    </span>
                    <span className="font-medium text-slate-200">
                      Model what a 20% increase in capacity and closed sides could mean for your business.
                    </span>
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
        {/* 5. ESSENTIAL OPERATIONAL LINKS (INTERNAL DIRECTORY)                       */}
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
        {/* 6. FINAL CTA (REQUESTED EXACT COPY)                                       */}
        {/* ========================================================================= */}
        <section className="bg-[#3A2E29] text-white rounded-2xl p-8 sm:p-12 text-center border border-[#0D9BA3]/30 shadow-xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/30 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
            <span>PROTECT THE AGENT · PROTECT THE BROKER · PROTECT THE CLIENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-extrabold text-white mb-4 leading-tight max-w-3xl mx-auto">
            Want support with the work itself?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Explore HTC services or book a 15-Minute Fit Call to see whether our team fits the way you do business.
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
              EXPLORE SERVICES + PRICING
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
