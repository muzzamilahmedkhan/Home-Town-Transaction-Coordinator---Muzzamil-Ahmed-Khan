import React, { useState, useMemo, useEffect } from 'react';
import { 
  Download, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Search, 
  X, 
  FileText, 
  Sparkles, 
  ExternalLink, 
  Copy, 
  PlayCircle, 
  Calculator, 
  Check, 
  Tag,
  GraduationCap,
  Layers,
  Clock
} from 'lucide-react';
import { 
  RESOURCE_LIBRARY_ITEMS, 
  ResourceItem, 
  SimpleResourceCategory,
  SIMPLE_RESOURCE_CATEGORIES,
  getSimpleCategory,
  ProblemTopicTag
} from '../data/resourceLibraryData';
import { usePageSeo } from '../hooks/usePageSeo';
import { getMainLibrarySeoData } from '../utils/seoUtils';

interface Props {
  onGoHome: () => void;
  onBackToBlog?: () => void;
  onBookCall: () => void;
  onOpenCalculator?: () => void;
  onNavigate?: (path: string) => void;
}

// Approved Topic Tags from client specification
const APPROVED_TOPIC_TAGS: ProblemTopicTag[] = [
  'Transactions',
  'Listings',
  'Condo + HOA',
  'Broker Compliance',
  'Agent Operations',
  'Business Growth'
];

export const FreeGuidesPage: React.FC<Props> = ({
  onGoHome,
  onBackToBlog,
  onBookCall,
  onOpenCalculator,
  onNavigate
}) => {
  // Apply SEO metadata
  const seoData = useMemo(() => getMainLibrarySeoData(), []);
  usePageSeo(seoData);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SimpleResourceCategory | 'All Resources'>('All Resources');
  const [selectedTag, setSelectedTag] = useState<ProblemTopicTag | 'All Topics'>('All Topics');

  // Interactive Modal States
  const [activeDownloadItem, setActiveDownloadItem] = useState<ResourceItem | null>(null);
  const [downloadName, setDownloadName] = useState('');
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSubmitted, setDownloadSubmitted] = useState(false);

  const [activePromptItem, setActivePromptItem] = useState<ResourceItem | null>(null);
  const [promptCopied, setPromptCopied] = useState(false);

  const [activeClassItem, setActiveClassItem] = useState<ResourceItem | null>(null);
  const [classRegistered, setClassRegistered] = useState(false);

  // Set Page Title on Mount
  useEffect(() => {
    document.title = 'HTC Resource Library | Free Real Estate Guides & Tools | Hometown TC';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Resources': RESOURCE_LIBRARY_ITEMS.length,
      'Guides + Checklists': 0,
      'Templates + Client Tools': 0,
      'AI + Automation': 0,
      'Classes + Workshops': 0
    };

    RESOURCE_LIBRARY_ITEMS.forEach(item => {
      const cat = getSimpleCategory(item);
      if (counts[cat] !== undefined) {
        counts[cat]++;
      }
    });

    return counts;
  }, []);

  // Filtered resources based on Search, Category, and Topic Tag
  const filteredResources = useMemo(() => {
    return RESOURCE_LIBRARY_ITEMS.filter(item => {
      const itemCategory = getSimpleCategory(item);

      // Category filter
      if (selectedCategory !== 'All Resources' && itemCategory !== selectedCategory) {
        return false;
      }

      // Topic tag filter
      if (selectedTag !== 'All Topics') {
        const itemTags = item.topicTags || item.topics || [];
        const matchesTag = itemTags.includes(selectedTag) || item.topic === selectedTag;
        if (!matchesTag) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const titleMatch = item.title.toLowerCase().includes(query);
        const descMatch = item.shortDescription.toLowerCase().includes(query);
        const formatMatch = (item.format || '').toLowerCase().includes(query);
        const tagsMatch = (item.topicTags || item.topics || []).some(t => t.toLowerCase().includes(query));
        if (!titleMatch && !descMatch && !formatMatch && !tagsMatch) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  // Handle Primary Card Action
  const handlePrimaryAction = (item: ResourceItem) => {
    if (item.deliveryMethod === 'copy_prompt' || item.resourceType === 'AI Prompt') {
      setActivePromptItem(item);
      setPromptCopied(false);
    } else if (item.deliveryMethod === 'class_registration' || item.resourceType === 'Class' || item.resourceType === 'Mini-Course') {
      setActiveClassItem(item);
      setClassRegistered(false);
    } else if (item.deliveryMethod === 'interactive_tool' || item.resourceType === 'Calculator') {
      if (onOpenCalculator) {
        onOpenCalculator();
      } else if (onNavigate) {
        onNavigate(`/resources/free-guides-downloads/${item.slug}/`);
      }
    } else {
      // Direct download or Canva template
      setActiveDownloadItem(item);
      setDownloadSubmitted(false);
    }
  };

  // Copy prompt helper
  const handleCopyPrompt = (promptText?: string) => {
    if (!promptText) return;
    navigator.clipboard.writeText(promptText);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 3000);
  };

  // Category Pill Colors
  const getCategoryStyles = (category: SimpleResourceCategory) => {
    switch (category) {
      case 'Guides + Checklists':
        return {
          badge: 'bg-[#0D9BA3]/10 text-[#0D9BA3] border-[#0D9BA3]/30',
          dot: 'bg-[#0D9BA3]',
          icon: <FileText className="w-3.5 h-3.5 text-[#0D9BA3]" />
        };
      case 'Templates + Client Tools':
        return {
          badge: 'bg-[#FE7311]/10 text-[#FE7311] border-[#FE7311]/30',
          dot: 'bg-[#FE7311]',
          icon: <Layers className="w-3.5 h-3.5 text-[#FE7311]" />
        };
      case 'AI + Automation':
        return {
          badge: 'bg-purple-50 text-purple-700 border-purple-200',
          dot: 'bg-purple-600',
          icon: <Sparkles className="w-3.5 h-3.5 text-purple-600" />
        };
      case 'Classes + Workshops':
        return {
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          dot: 'bg-blue-600',
          icon: <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
        };
    }
  };

  const isFiltered = searchQuery.trim() !== '' || selectedCategory !== 'All Resources' || selectedTag !== 'All Topics';

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Resources');
    setSelectedTag('All Topics');
  };

  return (
    <div className="bg-[#EEEAEB] min-h-screen text-[#3A2E29]">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button 
            onClick={onGoHome}
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOMETOWN TC</span>
          </button>
          <div className="text-xs text-[#3A2E29]/60 font-medium hidden sm:block">
            Home <span className="mx-1.5">/</span> <span className="text-[#3A2E29] font-bold">Resource Library</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <header className="bg-white border-b border-[#D8D2D4] pt-12 pb-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 border border-[#0D9BA3]/30 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#0D9BA3]">
              <span className="w-2 h-2 rounded-full bg-[#0D9BA3]" />
              <span>HTC RESOURCE LIBRARY</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight leading-[1.08]">
              Take what you need.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#3A2E29]/85 leading-relaxed font-medium">
              Practical guides, checklists, templates, calculators, AI resources, and training built to make the work easier for Florida real estate professionals.
            </p>

            {/* Search Input */}
            <div className="pt-2 max-w-xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides, checklists, templates, AI prompts, classes..."
                  className="w-full pl-11 pr-10 py-3 bg-[#EEEAEB]/50 border border-[#D8D2D4] rounded-xl text-sm text-[#3A2E29] placeholder:text-slate-500 focus:outline-none focus:border-[#0D9BA3] focus:bg-white transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* FILTER CONTROLS: SIMPLE RESOURCE CATEGORIES & TOPIC TAGS                  */}
      {/* ========================================================================= */}
      <div className="bg-white border-b border-[#D8D2D4] sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
          
          {/* 1. Primary Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All Resources')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer flex items-center space-x-2 ${
                selectedCategory === 'All Resources'
                  ? 'bg-[#0D9BA3] text-white shadow-xs'
                  : 'bg-[#EEEAEB]/60 text-[#3A2E29] hover:bg-[#EEEAEB] border border-transparent hover:border-[#D8D2D4]'
              }`}
            >
              <span>All Resources</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                selectedCategory === 'All Resources' ? 'bg-white/20 text-white' : 'bg-white text-slate-600'
              }`}>
                {categoryCounts['All Resources']}
              </span>
            </button>

            {SIMPLE_RESOURCE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer flex items-center space-x-2 ${
                  selectedCategory === cat
                    ? 'bg-[#0D9BA3] text-white shadow-xs'
                    : 'bg-[#EEEAEB]/60 text-[#3A2E29] hover:bg-[#EEEAEB] border border-transparent hover:border-[#D8D2D4]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                  selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-white text-slate-600'
                }`}>
                  {categoryCounts[cat] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* 2. Optional Topic Tags */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 text-xs scrollbar-none">
            <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] mr-1 hidden sm:inline">
              Filter by topic:
            </span>

            <button
              onClick={() => setSelectedTag('All Topics')}
              className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer whitespace-nowrap text-xs ${
                selectedTag === 'All Topics'
                  ? 'bg-[#3A2E29] text-white font-bold'
                  : 'bg-white text-slate-600 hover:text-[#3A2E29] border border-[#D8D2D4]'
              }`}
            >
              All Topics
            </button>

            {APPROVED_TOPIC_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? 'All Topics' : tag)}
                className={`px-3 py-1 rounded-lg font-medium transition cursor-pointer whitespace-nowrap text-xs ${
                  selectedTag === tag
                    ? 'bg-[#3A2E29] text-white font-bold shadow-xs'
                    : 'bg-white text-slate-600 hover:text-[#3A2E29] border border-[#D8D2D4]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* RESOURCE LISTING                                                          */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Results Count & Reset Filter Indicator */}
        <div className="flex items-center justify-between pb-6 text-xs text-slate-600 border-b border-[#D8D2D4] mb-8">
          <div className="font-medium">
            Showing <strong className="text-[#3A2E29]">{filteredResources.length}</strong> {filteredResources.length === 1 ? 'resource' : 'resources'}
            {selectedCategory !== 'All Resources' && <span> in <strong className="text-[#0D9BA3]">{selectedCategory}</strong></span>}
            {selectedTag !== 'All Topics' && <span> tagged <strong className="text-[#3A2E29]">"{selectedTag}"</strong></span>}
            {searchQuery.trim() && <span> matching <strong className="text-[#3A2E29]">"{searchQuery}"</strong></span>}
          </div>

          {isFiltered && (
            <button
              onClick={clearAllFilters}
              className="text-[#0D9BA3] hover:text-[#3A2E29] font-bold flex items-center space-x-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear filters</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#D8D2D4] space-y-4 max-w-lg mx-auto shadow-xs">
            <Search className="w-10 h-10 text-slate-300 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-lg font-montserrat font-bold text-[#3A2E29]">
                No resources found
              </h3>
              <p className="text-xs text-slate-500">
                No approved resources matched your current search or topic filter.
              </p>
            </div>
            <button
              onClick={clearAllFilters}
              className="bg-[#0D9BA3] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#087177] transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Clean Resource Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredResources.map((item) => {
              const category = getSimpleCategory(item);
              const catStyles = getCategoryStyles(category);
              const itemTags = item.topicTags || item.topics || [];

              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#D8D2D4] p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#0D9BA3]/50 transition duration-200 group"
                >
                  <div className="space-y-4">
                    
                    {/* Card Header: Category Badge + Format Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <div className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border ${catStyles.badge}`}>
                        {catStyles.icon}
                        <span>{category}</span>
                      </div>
                      
                      <span className="text-[10px] font-semibold text-slate-500 bg-[#EEEAEB]/80 px-2 py-0.5 rounded border border-[#D8D2D4]">
                        {item.format}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition leading-snug">
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#3A2E29]/75 leading-relaxed font-normal">
                      {item.shortDescription}
                    </p>

                    {/* Topic Tags */}
                    {itemTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {itemTags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-[10px] font-semibold text-slate-600 bg-[#EEEAEB]/60 px-2 py-0.5 rounded"
                          >
                            <Tag className="w-2.5 h-2.5 mr-1 text-slate-400" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* Card Footer: Action Buttons */}
                  <div className="pt-6 border-t border-[#D8D2D4]/70 mt-6 space-y-2">
                    <button
                      onClick={() => handlePrimaryAction(item)}
                      className="w-full bg-[#3A2E29] hover:bg-[#0D9BA3] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                    >
                      {item.deliveryMethod === 'copy_prompt' || item.resourceType === 'AI Prompt' ? (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>View & Copy Prompt</span>
                        </>
                      ) : item.deliveryMethod === 'class_registration' || item.resourceType === 'Class' || item.resourceType === 'Mini-Course' ? (
                        <>
                          <PlayCircle className="w-3.5 h-3.5" />
                          <span>Watch Free Class</span>
                        </>
                      ) : item.deliveryMethod === 'interactive_tool' || item.resourceType === 'Calculator' ? (
                        <>
                          <Calculator className="w-3.5 h-3.5" />
                          <span>Launch Calculator</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Free</span>
                        </>
                      )}
                    </button>

                    {onNavigate && (
                      <button
                        onClick={() => onNavigate(`/resources/free-guides-downloads/${item.slug}/`)}
                        className="w-full text-center text-xs text-slate-500 hover:text-[#0D9BA3] font-semibold py-1 transition cursor-pointer"
                      >
                        View Full Overview & Details →
                      </button>
                    )}
                  </div>

                </article>
              );
            })}
          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* FINAL CTA — CONNECTING TO HTC SERVICES                                    */}
      {/* ========================================================================= */}
      <section className="bg-white border-t border-[#D8D2D4] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 border border-[#FE7311]/30 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#FE7311]">
            <span>NEED MORE THAN A TEMPLATE?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
            Smooth Closings. <span className="text-[#FE7311]">Period.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#3A2E29]/80 max-w-2xl mx-auto leading-relaxed font-medium">
            From Listing Launch to Contract-to-Close, Hometown TC keeps the operational work behind the transaction moving so Florida Realtors can stay client-facing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>BOOK A FIT CALL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={onGoHome}
              className="w-full sm:w-auto text-[#3A2E29] hover:text-[#0D9BA3] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl border border-[#D8D2D4] hover:border-[#0D9BA3] transition cursor-pointer"
            >
              <span>EXPLORE ALL SERVICES</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL 1: INSTANT DOWNLOAD MODAL                                           */}
      {/* ========================================================================= */}
      {activeDownloadItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-xl border border-[#D8D2D4] relative">
            <button
              onClick={() => setActiveDownloadItem(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!downloadSubmitted ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#0D9BA3]/10 text-[#0D9BA3]">
                    <Download className="w-3 h-3" />
                    <span>FREE DOWNLOAD</span>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-[#3A2E29]">
                    {activeDownloadItem.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Enter your details below for instant access to this Florida real estate resource.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDownloadSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={downloadName}
                      onChange={(e) => setDownloadName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 bg-[#EEEAEB]/50 border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] focus:outline-none focus:border-[#0D9BA3] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3A2E29] mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={downloadEmail}
                      onChange={(e) => setDownloadEmail(e.target.value)}
                      placeholder="sarah@floridarealty.com"
                      className="w-full px-3.5 py-2.5 bg-[#EEEAEB]/50 border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] focus:outline-none focus:border-[#0D9BA3] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md mt-2 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>GET INSTANT ACCESS</span>
                  </button>
                </form>

                <p className="text-[11px] text-slate-400 text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            ) : (
              <div className="text-center py-4 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#0D9BA3] mx-auto" />
                <div className="space-y-1">
                  <h4 className="text-lg font-montserrat font-bold text-[#3A2E29]">
                    Access Ready!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    A copy of <strong>{activeDownloadItem.title}</strong> has been prepared for you.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={activeDownloadItem.externalUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#0D9BA3] hover:bg-[#087177] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition"
                  >
                    <span>OPEN RESOURCE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  onClick={() => setActiveDownloadItem(null)}
                  className="block mx-auto text-xs text-slate-500 hover:text-[#3A2E29] pt-2 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: AI PROMPT COPY MODAL                                             */}
      {/* ========================================================================= */}
      {activePromptItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-5 shadow-xl border border-[#D8D2D4] relative max-h-[90vh] flex flex-col">
            <button
              onClick={() => setActivePromptItem(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 text-purple-700">
                <Sparkles className="w-3 h-3" />
                <span>AI PROMPT TEMPLATE</span>
              </div>
              <h3 className="text-xl font-montserrat font-bold text-[#3A2E29]">
                {activePromptItem.title}
              </h3>
              <p className="text-xs text-slate-600">
                Copy and paste this structured prompt into ChatGPT, Claude, or Gemini alongside your contract files.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs leading-relaxed select-all">
              {activePromptItem.promptContent || 'Prompt content currently updating for Florida FAR/BAR standards.'}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => handleCopyPrompt(activePromptItem.promptContent)}
                className="bg-[#0D9BA3] hover:bg-[#087177] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center space-x-2 cursor-pointer shadow-xs"
              >
                {promptCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY PROMPT</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActivePromptItem(null)}
                className="text-xs text-slate-500 hover:text-[#3A2E29] font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: FREE CLASS ACCESS MODAL                                          */}
      {/* ========================================================================= */}
      {activeClassItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-xl border border-[#D8D2D4] relative">
            <button
              onClick={() => setActiveClassItem(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!classRegistered ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-700">
                    <PlayCircle className="w-3 h-3" />
                    <span>ON-DEMAND CLASS</span>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-[#3A2E29]">
                    {activeClassItem.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Access this free Florida real estate training session instantly.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600 bg-[#EEEAEB]/60 p-3.5 rounded-xl border border-[#D8D2D4]">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    <span>Format: On-Demand Video + Reference Materials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free for all Florida licensed real estate agents</span>
                  </div>
                </div>

                <button
                  onClick={() => setClassRegistered(true)}
                  className="w-full bg-[#0D9BA3] hover:bg-[#087177] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md flex items-center justify-center space-x-2"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>WATCH TRAINING NOW</span>
                </button>
              </div>
            ) : (
              <div className="text-center py-4 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#0D9BA3] mx-auto" />
                <div className="space-y-1">
                  <h4 className="text-lg font-montserrat font-bold text-[#3A2E29]">
                    Class Access Unlocked
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Enjoy the training session. Contact Hometown TC anytime if you'd like our team to manage this workflow for you.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setActiveClassItem(null);
                      if (onBookCall) onBookCall();
                    }}
                    className="inline-flex items-center space-x-2 bg-[#FE7311] hover:bg-[#e05f03] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer"
                  >
                    <span>SCHEDULE A FIT CALL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => setActiveClassItem(null)}
                  className="block mx-auto text-xs text-slate-500 hover:text-[#3A2E29] pt-2 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
