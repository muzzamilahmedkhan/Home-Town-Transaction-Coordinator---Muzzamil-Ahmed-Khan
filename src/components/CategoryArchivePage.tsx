import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Tag, 
  ChevronRight, 
  Share2, 
  FileText, 
  ExternalLink,
  SlidersHorizontal,
  X,
  CheckCircle2,
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { 
  CATEGORY_ARCHIVE_CONFIGS, 
  CATEGORY_SLUG_ALIASES,
  NEUTRAL_PLACEHOLDER_ARTICLES, 
  HTC_INTERNAL_LINKS,
  searchBriefs,
  SearchResultItem,
  NeutralPlaceholderArticle
} from '../data/blog';

interface Props {
  categorySlug: string;
  onNavigate: (path: string) => void;
  onBookCall: () => void;
}

export const CategoryArchivePage: React.FC<Props> = ({
  categorySlug,
  onNavigate,
  onBookCall
}) => {
  // Normalize alias if provided
  const normalizedSlug = CATEGORY_SLUG_ALIASES[categorySlug] || categorySlug;
  const config = CATEGORY_ARCHIVE_CONFIGS[normalizedSlug] || CATEGORY_ARCHIVE_CONFIGS['contracts-forms'];

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter articles belonging to this specific category
  const categoryArticles = NEUTRAL_PLACEHOLDER_ARTICLES.filter(
    article => article.categorySlug === normalizedSlug
  );

  // Search execution covering title, theBrief, category, tags, body
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchBriefs(searchQuery, config.name);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, config.name]);

  // SEO & dynamic metadata
  useEffect(() => {
    const originalTitle = document.title;
    document.title = config.metaTitle;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Canonical link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonicalUrl);

    // Meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', config.metaDescription);

    // OpenGraph tags
    const setMetaTag = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMetaTag('property', 'og:title', config.metaTitle);
    setMetaTag('property', 'og:description', config.metaDescription);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', config.canonicalUrl);

    // Schema.org CollectionPage
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = `category-archive-schema-${config.slug}`;
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': `${config.canonicalUrl}#webpage`,
          'url': config.canonicalUrl,
          'name': config.metaTitle,
          'description': config.metaDescription,
          'isPartOf': {
            '@type': 'WebSite',
            '@id': 'https://hometowntc.com/resources/#website',
            'url': 'https://hometowntc.com/resources/',
            'name': 'The Hometown Brief'
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${config.canonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://hometowntc.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'The Hometown Brief',
              'item': 'https://hometowntc.com/resources/'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': config.name,
              'item': config.canonicalUrl
            }
          ]
        }
      ]
    });
    document.head.appendChild(schemaScript);

    return () => {
      document.title = originalTitle;
      const el = document.getElementById(`category-archive-schema-${config.slug}`);
      if (el) el.remove();
    };
  }, [config]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#EEEAEB] text-[#3A2E29] font-sans antialiased selection:bg-[#0D9BA3] selection:text-white">
      
      {/* 1. TOP BREADCRUMB & LOGO BAR */}
      <div className="border-b border-[#D8D2D4] bg-[#EEEAEB]/70 text-[11px] uppercase tracking-widest text-[#3A2E29]/70 font-mono py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumb links */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')} 
              className="hover:text-[#0D9BA3] font-bold transition-colors text-[#3A2E29]"
            >
              HOME
            </a>
            <span className="text-[#D8D2D4]">/</span>
            <a 
              href="/resources/" 
              onClick={(e) => handleLinkClick(e, '/resources/')} 
              className="hover:text-[#0D9BA3] font-bold transition-colors text-[#3A2E29]"
            >
              THE HOMETOWN BRIEF
            </a>
            <span className="text-[#D8D2D4]">/</span>
            <span className="text-[#0D9BA3] font-extrabold">{config.name.toUpperCase()}</span>
          </nav>

          <div className="flex items-center gap-4 text-[10px]">
            <span className="font-semibold text-[#3A2E29]">FLORIDA TRANSACTION OPERATIONS</span>
            <span>•</span>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 font-bold hover:text-[#0D9BA3] transition-colors cursor-pointer text-[#3A2E29]"
              title="Share topic URL"
            >
              <Share2 className="w-3 h-3 text-[#0D9BA3]" />
              {copiedLink ? 'COPIED LINK' : 'SHARE TOPIC'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MASTHEAD & SEARCH */}
      <header className="border-b border-[#D8D2D4] pt-10 pb-8 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            {/* H1 Headline */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <span>The Hometown Brief</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold tracking-tight text-[#3A2E29] leading-tight mb-3">
                {config.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-medium">
                {config.tagline}
              </p>
            </div>

            {/* In-Topic Search Bar */}
            <div className="lg:col-span-4">
              <div className="bg-white border border-[#D8D2D4] p-3 rounded-2xl shadow-sm hover:border-[#0D9BA3] transition-all">
                <label htmlFor="cat-search" className="block text-[11px] uppercase tracking-wider text-[#3A2E29] mb-1.5 font-bold">
                  SEARCH {config.name.toUpperCase()}
                </label>
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-[#0D9BA3] absolute left-3 pointer-events-none" />
                  <input
                    id="cat-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search keywords..."
                    className="w-full bg-[#EEEAEB]/40 rounded-xl border border-[#D8D2D4] pl-9 pr-9 py-2 text-sm text-[#3A2E29] placeholder-slate-400 focus:outline-none focus:border-[#0D9BA3] focus:ring-2 focus:ring-[#0D9BA3]/20 font-sans"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 text-slate-400 hover:text-[#3A2E29]"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. TOPIC NAVIGATION */}
      <nav aria-label="Topic Navigation" className="border-b border-[#D8D2D4] bg-white/95 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center overflow-x-auto py-3 gap-2 scrollbar-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3A2E29] shrink-0 mr-1 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#0D9BA3]" />
              TOPICS:
            </span>

            {/* All Topics */}
            <a
              href="/resources/"
              onClick={(e) => handleLinkClick(e, '/resources/')}
              className="px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full border border-[#D8D2D4] bg-[#EEEAEB] text-[#3A2E29] hover:border-[#0D9BA3] hover:text-[#0D9BA3] hover:bg-white transition-colors shrink-0 whitespace-nowrap"
            >
              ALL TOPICS
            </a>

            {/* 6 Category Archives */}
            {Object.values(CATEGORY_ARCHIVE_CONFIGS).map((cat) => {
              const isActive = cat.slug === normalizedSlug;
              return (
                <a
                  key={cat.slug}
                  href={`/resources/${cat.slug}/`}
                  onClick={(e) => handleLinkClick(e, `/resources/${cat.slug}/`)}
                  className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full transition-all shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0D9BA3] text-white shadow-sm'
                      : 'bg-[#EEEAEB] text-[#3A2E29] border border-[#D8D2D4] hover:border-[#0D9BA3] hover:text-[#0D9BA3] hover:bg-white'
                  }`}
                >
                  {cat.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        
        {/* SEARCH RESULTS VIEW (IF SEARCHING) */}
        {searchQuery.trim().length > 0 ? (
          <section className="mb-12 bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D2D4] pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#FE7311] font-bold block mb-1">
                  SEARCH RESULTS
                </span>
                <h2 className="text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                  Matches for &ldquo;{searchQuery}&rdquo; in {config.name}
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
              <div className="py-8 text-center max-w-md mx-auto">
                <AlertCircle className="w-8 h-8 text-[#FE7311] mx-auto mb-2" />
                <p className="text-base font-bold text-[#3A2E29]">No briefs found matching &ldquo;{searchQuery}&rdquo;.</p>
                <p className="text-xs text-slate-500 mt-1">Approved briefs for this topic will be published here directly from our Florida transaction desk.</p>
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

        {/* 4. TOPIC OVERVIEW SECTION */}
        <section aria-labelledby="category-intro-heading" className="mb-12">
          <div className="bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#D8D2D4] pb-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-[#0D9BA3] font-bold">
                TOPIC OVERVIEW
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-wider bg-[#EEEAEB] px-2.5 py-1 rounded-full border border-[#D8D2D4] font-medium">
                FLORIDA OPERATIONS
              </span>
            </div>

            <div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-[#EEEAEB]/40 p-5 rounded-xl border border-[#D8D2D4] font-medium">
                {config.categoryIntroPlaceholder}
              </p>
            </div>
          </div>
        </section>

        {/* 5. ARTICLES SECTION (REAL/APPROVED CONTENT ONLY) */}
        <section aria-labelledby="article-list-heading" className="mb-14">
          <div className="border-b border-[#D8D2D4] pb-3 mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#0D9BA3] font-bold block mb-1">
                OPERATIONAL BRIEFS
              </span>
              <h2 id="article-list-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                {config.name} Briefs
              </h2>
            </div>
          </div>

          {categoryArticles.length === 0 ? (
            <div className="bg-white border border-[#D8D2D4] rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
              <BookOpen className="w-10 h-10 text-[#0D9BA3] mx-auto mb-3" />
              <h3 className="text-lg font-montserrat font-bold text-[#3A2E29] mb-2">
                Operational Briefs in Preparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                Operational briefs from active Florida transaction files. Each brief provides one focused question and one useful answer without fluff.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/resources/"
                  onClick={(e) => handleLinkClick(e, '/resources/')}
                  className="px-4 py-2.5 bg-[#EEEAEB] hover:bg-[#D8D2D4] text-[#3A2E29] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  ← ALL TOPICS
                </a>
                <a
                  href="/agent-business-calculator/"
                  onClick={(e) => handleLinkClick(e, '/agent-business-calculator/')}
                  className="px-4 py-2.5 bg-[#FE7311] hover:bg-[#e05f03] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  RUN THE NUMBERS
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-[#D8D2D4] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:border-[#0D9BA3] hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#D8D2D4] text-xs">
                      <span className="font-bold text-[#0D9BA3] bg-[#0D9BA3]/10 px-2.5 py-0.5 rounded-full border border-[#0D9BA3]/20">
                        {article.category}
                      </span>
                      <span className="text-slate-500 flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition-colors leading-snug mb-3">
                      <a
                        href={`/resources/${article.slug}/`}
                        onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                        className="hover:underline"
                      >
                        {article.placeholderTitle}
                      </a>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 p-3 bg-[#EEEAEB]/40 rounded-xl border border-[#D8D2D4]">
                      {article.placeholderSummary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D8D2D4] flex items-center justify-between">
                    <a
                      href={`/resources/${article.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] group-hover:text-[#FE7311] transition-colors"
                    >
                      <span>READ BRIEF</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 6. INTERNAL LINKING DIRECTORY */}
        <section aria-labelledby="internal-links-heading" className="mb-14 bg-white border border-[#D8D2D4] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="border-b border-[#D8D2D4] pb-3 mb-6">
            <span className="text-xs uppercase tracking-wider text-[#FE7311] font-bold block mb-1">
              INTERNAL RESOURCES
            </span>
            <h2 id="internal-links-heading" className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
              Direct Links to Florida Real Estate Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HTC_INTERNAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={(e) => handleLinkClick(e, link.url)}
                className="bg-[#EEEAEB]/40 border border-[#D8D2D4] rounded-xl p-4 hover:border-[#0D9BA3] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition-colors flex items-center gap-1.5 mb-1">
                    {link.label}
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0D9BA3]" />
                  </span>
                  <p className="text-xs text-slate-600 leading-normal">
                    {link.description}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-slate-400 mt-2 block">
                  {link.url}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 7. RUN THE NUMBERS TOOL BANNER */}
        <section className="mb-14 bg-[#3A2E29] text-white rounded-2xl p-8 sm:p-10 border border-[#0D9BA3]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#0D9BA3]/30">
                <span>INTERACTIVE AGENT BUSINESS TOOL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white">
                Run the Numbers for Your Real Estate Business
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-medium">
                Calculate your true hourly earnings, evaluate administrative leverage, and model what happens when you reinvest freed operational hours into client advisory and listings.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="/agent-business-calculator/"
                onClick={(e) => handleLinkClick(e, '/agent-business-calculator/')}
                className="w-full text-center px-5 py-3.5 bg-[#FE7311] hover:bg-[#e05f03] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg cursor-pointer"
              >
                LAUNCH RUN THE NUMBERS →
              </a>
              <a
                href="/how-htc-works/"
                onClick={(e) => handleLinkClick(e, '/how-htc-works/')}
                className="w-full text-center px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-colors cursor-pointer"
              >
                SEE HOW HTC WORKS →
              </a>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="bg-[#3A2E29] text-white rounded-2xl p-8 sm:p-12 text-center border border-[#0D9BA3]/30 shadow-xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/30 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
            <span>PROTECT THE AGENT · PROTECT THE BROKER · PROTECT THE CLIENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-white mb-3 leading-tight max-w-3xl mx-auto">
            Want support with the work itself?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed font-medium">
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
