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
  Sparkles, 
  FolderOpen, 
  FileText, 
  ExternalLink,
  SlidersHorizontal,
  X,
  CheckCircle2,
  Calendar,
  AlertCircle
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

  // SEO & AEO dynamic metadata
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

    // JSON-LD CollectionPage & Breadcrumbs schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'category-jsonld-schema';
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': config.canonicalUrl,
          'url': config.canonicalUrl,
          'name': config.metaTitle,
          'description': config.metaDescription,
          'headline': `${config.name} Archive | The Hometown Brief`,
          'isPartOf': {
            '@type': 'WebSite',
            'name': 'The Hometown Brief • Hometown Title & Closing',
            'url': 'https://hometowntc.com/resources/'
          }
        },
        {
          '@type': 'BreadcrumbList',
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
      const el = document.getElementById('category-jsonld-schema');
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#0D2C4D] selection:text-[#FAF8F5]">
      
      {/* 1. TOP DATELINE & BREADCRUMB BAR */}
      <div className="border-b border-[#E5E0D8] bg-[#F4EFEA] text-[11px] uppercase tracking-widest text-[#666666] font-mono py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a 
              href="/resources/" 
              onClick={(e) => handleLinkClick(e, '/resources/')}
              className="hover:text-[#0D2C4D] flex items-center gap-1 font-semibold transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              THE HOMETOWN BRIEF
            </a>
            <span className="text-[#B3A89B]">/</span>
            <span className="text-[#0D2C4D] font-bold">{config.deskCode}</span>
            <span className="text-[#B3A89B]">/</span>
            <span className="text-[#1A1A1A] font-medium">{config.name}</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] text-[#7A7369]">
            <span>FLORIDA ARCHIVE EDITION</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline font-mono">EST. HOMETOWN TITLE & CLOSING</span>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 hover:text-[#0D2C4D] transition-colors"
              title="Share category URL"
            >
              <Share2 className="w-3 h-3" />
              {copiedLink ? 'COPIED LINK' : 'SHARE ARCHIVE'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. BROADSHEET MASTHEAD & SEARCH */}
      <header className="border-b-4 border-[#0D2C4D] pt-8 pb-6 px-4 sm:px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Desk Kicker */}
          <div className="flex items-center justify-between border-b border-[#D8D2C5] pb-2 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C84B31] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C84B31]"></span>
              DEPARTMENTAL ARCHIVE DISPATCH • {config.deskCode}
            </span>
            <span className="font-mono text-[11px] text-[#7A7369] uppercase tracking-wider">
              {categoryArticles.length} FILED BRIEFS IN ARCHIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            {/* H1 Headline */}
            <div className="lg:col-span-8">
              <span className="font-serif italic text-lg text-[#7A7369] block mb-1">
                The Hometown Brief Archive
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#0D2C4D] leading-none mb-3">
                {config.name}
              </h1>
              <p className="text-base sm:text-lg text-[#4A453E] max-w-2xl font-serif">
                {config.tagline}
              </p>
            </div>

            {/* In-Category Search Bar */}
            <div className="lg:col-span-4">
              <div className="bg-white border-2 border-[#1A1A1A] p-2 shadow-[3px_3px_0px_0px_#1A1A1A]">
                <label htmlFor="cat-search" className="block text-[10px] font-mono uppercase tracking-widest text-[#7A7369] mb-1 font-bold">
                  SEARCH {config.name.toUpperCase()} BRIEFS
                </label>
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-[#7A7369] absolute left-2.5 pointer-events-none" />
                  <input
                    id="cat-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search keywords, contracts, clauses..."
                    className="w-full bg-[#F4EFEA] border border-[#D8D2C5] pl-8 pr-8 py-2 text-sm text-[#1A1A1A] placeholder-[#8A8378] focus:outline-none focus:border-[#0D2C4D] font-sans"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 text-[#7A7369] hover:text-[#1A1A1A]"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="text-[10px] font-mono text-[#8A8378] mt-1.5 flex justify-between">
                  <span>Searches titles, The Brief, & bodies</span>
                  {searchQuery && (
                    <span className="font-bold text-[#C84B31]">
                      {searchResults.length} {searchResults.length === 1 ? 'match' : 'matches'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. TOPIC NAVIGATION (ALL 6 CRAWLABLE ARCHIVES) */}
      <nav aria-label="Topic Navigation" className="border-b border-[#E5E0D8] bg-[#F4EFEA] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center overflow-x-auto py-2.5 gap-2 scrollbar-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A7369] font-bold shrink-0 mr-2 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3 text-[#C84B31]" />
              DEPARTMENTS:
            </span>

            {/* All Dispatches */}
            <a
              href="/resources/"
              onClick={(e) => handleLinkClick(e, '/resources/')}
              className="px-3 py-1.5 text-xs font-mono font-medium tracking-wider uppercase border border-[#D8D2C5] bg-white text-[#4A453E] hover:border-[#0D2C4D] hover:text-[#0D2C4D] transition-colors shrink-0 whitespace-nowrap"
            >
              ALL DISPATCHES
            </a>

            {/* 6 Category Archives */}
            {Object.values(CATEGORY_ARCHIVE_CONFIGS).map((cat) => {
              const isActive = cat.slug === normalizedSlug;
              return (
                <a
                  key={cat.slug}
                  href={`/resources/${cat.slug}/`}
                  onClick={(e) => handleLinkClick(e, `/resources/${cat.slug}/`)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase border transition-all shrink-0 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0D2C4D] text-[#FAF8F5] border-[#0D2C4D] shadow-[2px_2px_0px_0px_#1A1A1A]'
                      : 'bg-white text-[#4A453E] border-[#D8D2C5] hover:border-[#0D2C4D] hover:text-[#0D2C4D]'
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        
        {/* SEARCH RESULTS VIEW (IF SEARCHING) */}
        {searchQuery.trim().length > 0 ? (
          <section className="mb-12 border-2 border-[#1A1A1A] bg-white p-6 sm:p-8 shadow-[4px_4px_0px_0px_#1A1A1A]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#1A1A1A] pb-4 mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C84B31] font-bold block mb-1">
                  SEARCH RESULTS
                </span>
                <h2 className="text-2xl font-serif font-black text-[#0D2C4D]">
                  Matches for &ldquo;{searchQuery}&rdquo; in {config.name}
                </h2>
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
                <p className="text-xs font-mono text-[#7A7369] mt-1">Try searching broader keywords or view all briefs below.</p>
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

        {/* 4. [CATEGORY INTRO COPY] SECTION */}
        <section aria-labelledby="category-intro-heading" className="mb-12">
          <div className="bg-white border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#1A1A1A]">
            <div className="flex items-center justify-between border-b border-[#D8D2C5] pb-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C84B31] font-bold flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-[#C84B31]" />
                [CATEGORY INTRO COPY]
              </span>
              <span className="text-[10px] font-mono text-[#7A7369] uppercase tracking-wider bg-[#F4EFEA] px-2 py-0.5 border border-[#D8D2C5]">
                HTC will provide the category copy later
              </span>
            </div>

            <div className="prose max-w-none">
              <p className="font-mono text-sm sm:text-base text-[#4A453E] leading-relaxed bg-[#FAF8F5] p-4 sm:p-5 border border-dashed border-[#B3A89B]">
                {config.categoryIntroPlaceholder}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#7A7369]">
              <span>DESK: {config.name.toUpperCase()}</span>
              <span>CANONICAL URL: {config.canonicalUrl}</span>
            </div>
          </div>
        </section>

        {/* 5. [ARTICLE LIST] SECTION */}
        <section aria-labelledby="article-list-heading" className="mb-14">
          <div className="border-b-2 border-[#1A1A1A] pb-3 mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A7369] font-bold block mb-1">
                INDEX OF FILED DISPATCHES
              </span>
              <h2 id="article-list-heading" className="text-2xl sm:text-3xl font-serif font-black text-[#0D2C4D]">
                [ARTICLE LIST] • {config.name.toUpperCase()}
              </h2>
            </div>
            <span className="font-mono text-xs text-[#7A7369] bg-[#F4EFEA] px-3 py-1 border border-[#D8D2C5]">
              SHOWING {categoryArticles.length} BRIEFS
            </span>
          </div>

          {/* Editorial Article Grid with thin newspaper divider rules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article, idx) => (
              <article
                key={article.id}
                className="bg-white border-2 border-[#1A1A1A] p-6 flex flex-col justify-between shadow-[3px_3px_0px_0px_#1A1A1A] hover:shadow-[5px_5px_0px_0px_#0D2C4D] transition-all group"
              >
                <div>
                  {/* Top Taxonomy Bar: [CATEGORY] & [READ TIME] */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E5E0D8] text-[11px] font-mono">
                    <span className="font-bold text-[#0D2C4D] bg-[#F4EFEA] px-2 py-0.5 border border-[#D8D2C5]">
                      {article.category}
                    </span>
                    <span className="text-[#7A7369] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Article Entry Tag */}
                  <span className="text-[10px] font-mono text-[#C84B31] font-bold uppercase tracking-widest block mb-1">
                    ENTRY 0{idx + 1} • {article.deskCode}
                  </span>

                  {/* [ARTICLE TITLE] */}
                  <h3 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#0D2C4D] transition-colors leading-snug mb-3 font-serif">
                    <a
                      href={`/resources/${article.slug}/`}
                      onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                      className="hover:underline"
                    >
                      {article.placeholderTitle}
                    </a>
                  </h3>

                  {/* [ARTICLE SUMMARY] */}
                  <p className="font-mono text-xs text-[#5A554E] leading-relaxed mb-4 p-2.5 bg-[#FAF8F5] border border-dashed border-[#D8D2C5]">
                    {article.placeholderSummary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.slice(0, 3).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[10px] font-mono bg-[#F4EFEA] text-[#666666] px-1.5 py-0.5 border border-[#E5E0D8]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Action */}
                <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
                  <a
                    href={`/resources/${article.slug}/`}
                    onClick={(e) => handleLinkClick(e, `/resources/${article.slug}/`)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0D2C4D] group-hover:text-[#C84B31] transition-colors"
                  >
                    READ ARTICLE BLUEPRINT <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[10px] font-mono text-[#8A8378]">HTC FIELD NOTE</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. INTERNAL LINKING DIRECTORY (ALL 11 CLIENT-MANDATED DESTINATIONS) */}
        <section aria-labelledby="internal-links-heading" className="mb-14 bg-[#F4EFEA] border-2 border-[#1A1A1A] p-6 sm:p-8">
          <div className="border-b border-[#D8D2C5] pb-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C84B31] font-bold block mb-1">
              INTERNAL RESOURCES & OPERATIONAL NAVIGATION
            </span>
            <h2 id="internal-links-heading" className="text-xl sm:text-2xl font-serif font-black text-[#0D2C4D]">
              Direct Links to Florida Real Estate Operations
            </h2>
            <p className="text-xs font-mono text-[#7A7369] mt-1">
              Standard crawlable HTML links connecting this archive to all HTC tools, services, calculators, and guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HTC_INTERNAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                onClick={(e) => handleLinkClick(e, link.url)}
                className="bg-white border border-[#D8D2C5] p-3.5 hover:border-[#0D2C4D] hover:shadow-[2px_2px_0px_0px_#0D2C4D] transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#0D2C4D] group-hover:text-[#C84B31] transition-colors flex items-center gap-1.5 mb-1">
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </span>
                  <p className="text-[11px] text-[#666666] leading-normal font-sans">
                    {link.description}
                  </p>
                </div>
                <span className="text-[9px] font-mono text-[#8A8378] mt-2 block">
                  URL: {link.url}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 7. RUN THE NUMBERS TOOL BANNER */}
        <section className="mb-14 bg-[#0D2C4D] text-[#FAF8F5] border-2 border-[#1A1A1A] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#1A1A1A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F2C94C] font-bold block mb-1">
                INTERACTIVE AGENT BUSINESS TOOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black mb-2">
                Run the Numbers for Your Real Estate Business
              </h2>
              <p className="text-sm font-serif text-[#D0D7DE] leading-relaxed max-w-2xl">
                See exactly what 15 administrative hours per file are costing your production. Model what happens when you reinvest freed hours into client acquisition.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2">
              <a
                href="/agent-business-calculator/"
                onClick={(e) => handleLinkClick(e, '/agent-business-calculator/')}
                className="w-full text-center px-4 py-3 bg-[#F2C94C] text-[#0D2C4D] font-mono text-xs font-black uppercase tracking-wider hover:bg-white transition-colors border border-[#1A1A1A]"
              >
                LAUNCH CALCULATOR →
              </a>
              <a
                href="/free-guides-downloads/"
                onClick={(e) => handleLinkClick(e, '/free-guides-downloads/')}
                className="w-full text-center px-4 py-2.5 bg-transparent text-white font-mono text-xs font-bold uppercase tracking-wider border border-[#D0D7DE] hover:bg-white/10 transition-colors"
              >
                FREE GUIDES + DOWNLOADS
              </a>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="border-2 border-[#1A1A1A] bg-white p-8 sm:p-10 text-center shadow-[4px_4px_0px_0px_#1A1A1A] mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C84B31] font-bold block mb-2">
            EXPERIENCE FLORIDA-BASED TRANSACTION COORDINATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0D2C4D] mb-3">
            Want us to handle the work instead?
          </h2>
          <p className="text-base text-[#5A554E] max-w-xl mx-auto font-serif mb-6 leading-relaxed">
            From contract intake to title execution, our Florida-based team manages deadlines, documents, and disclosures so you can focus on clients.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onBookCall}
              className="px-6 py-3 bg-[#0D2C4D] text-[#FAF8F5] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A] hover:bg-[#1A3D66] transition-all"
            >
              BOOK A 15-MINUTE FIT CALL
            </button>
            <a
              href="/pricing/"
              onClick={(e) => handleLinkClick(e, '/pricing/')}
              className="px-6 py-3 bg-[#F4EFEA] text-[#0D2C4D] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#1A1A1A] hover:bg-[#E5E0D8] transition-colors"
            >
              EXPLORE SERVICES & PRICING
            </a>
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="border-t-4 border-[#0D2C4D] bg-[#F4EFEA] text-[#4A453E] py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-serif font-black text-xl text-[#0D2C4D] block mb-2">
              The Hometown Brief
            </span>
            <p className="text-xs font-serif text-[#666666] leading-relaxed">
              Florida real estate operations, without the fluff. Published by Hometown Title & Closing.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D2C4D] block mb-3">
              ARCHIVE DEPARTMENTS
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
              RESOURCES & TOOLS
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
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0D2C4D] block mb-3">
              CONNECT
            </span>
            <p className="text-xs font-sans text-[#666666] mb-3">
              Have a question on Florida FAR/BAR contract timelines or compliance?
            </p>
            <button
              onClick={onBookCall}
              className="w-full px-4 py-2 bg-[#0D2C4D] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1A3D66] transition-colors"
            >
              SCHEDULE A FIT CALL
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
