import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Search, 
  X, 
  FileText, 
  Sparkles, 
  Calculator, 
  GraduationCap, 
  Layers, 
  PhoneCall,
  ShieldCheck,
  Tag,
  BookOpen,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import { PHONE_NUMBER } from '../data/content';
import { usePageSeo } from '../hooks/usePageSeo';
import { getMainLibrarySeoData } from '../utils/seoUtils';

interface Props {
  onGoHome: () => void;
  onBackToBlog?: () => void;
  onBookCall: () => void;
  onOpenCalculator?: () => void;
  onNavigate?: (path: string) => void;
}

export type SimpleCategory = 
  | 'Guides + Checklists'
  | 'Templates + Client Tools'
  | 'AI + Automation'
  | 'Classes + Workshops';

const CATEGORIES: SimpleCategory[] = [
  'Guides + Checklists',
  'Templates + Client Tools',
  'AI + Automation',
  'Classes + Workshops'
];

export type TopicTag = 
  | 'Transactions'
  | 'Listings'
  | 'Broker Compliance'
  | 'Agent Operations'
  | 'Business Growth';

const TOPIC_TAGS: TopicTag[] = [
  'Transactions',
  'Listings',
  'Broker Compliance',
  'Agent Operations',
  'Business Growth'
];

interface ApprovedResource {
  id: string;
  title: string;
  category: SimpleCategory;
  tags: TopicTag[];
  format: string;
  description: string;
  actionText: string;
  actionType: 'calculator' | 'blog' | 'workshop' | 'pricing' | 'call';
  destinationUrl: string;
}

// Only approved, functional operational tools & resources from HTC
const APPROVED_RESOURCES: ApprovedResource[] = [
  {
    id: 'res-calc',
    title: 'Run the Numbers: Agent Transaction Leverage & Hourly Value Calculator',
    category: 'Templates + Client Tools',
    tags: ['Agent Operations', 'Business Growth'],
    format: 'Interactive Calculator',
    description: 'Model the time and business value connected to your transaction workload using your own numbers.',
    actionText: 'Launch Calculator',
    actionType: 'calculator',
    destinationUrl: '/agent-business-calculator/'
  },
  {
    id: 'res-brief',
    title: 'The Hometown Brief: Florida Transaction Operations & Practical Answers',
    category: 'Guides + Checklists',
    tags: ['Transactions', 'Broker Compliance'],
    format: 'Weekly Operational Guide',
    description: 'Practical operational analysis covering Florida transaction coordination, brokerage compliance, and closing workflows for practicing Realtors.',
    actionText: 'Read The Hometown Brief',
    actionType: 'blog',
    destinationUrl: '/resources/'
  },
  {
    id: 'res-workshop',
    title: 'Florida Transaction Coordinator Workshop & Professional Training',
    category: 'Classes + Workshops',
    tags: ['Agent Operations', 'Transactions'],
    format: 'Workshop & Curriculum',
    description: 'Specialized operational workshop for Florida real estate agents and aspiring transaction coordinators seeking practical training on Florida transaction workflows and Contract-to-Close support.',
    actionText: 'Explore Workshop Details',
    actionType: 'workshop',
    destinationUrl: '/tcworkshop/'
  },
  {
    id: 'res-pricing',
    title: 'HTC Services & Operational Support Overview',
    category: 'Templates + Client Tools',
    tags: ['Listings', 'Transactions', 'Agent Operations'],
    format: 'Operational Service Guide',
    description: 'A complete operational breakdown of HTC\'s Listing Launch, Contract-to-Close, and Post-Close support packages designed specifically for Florida Realtors.',
    actionText: 'Explore Services + Pricing',
    actionType: 'pricing',
    destinationUrl: '/pricing/'
  }
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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SimpleCategory | 'All Resources'>('All Resources');
  const [selectedTag, setSelectedTag] = useState<TopicTag | 'All Topics'>('All Topics');

  useEffect(() => {
    document.title = 'HTC Resource Library | Free Real Estate Guides & Tools | Hometown TC';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Resources': APPROVED_RESOURCES.length,
      'Guides + Checklists': 0,
      'Templates + Client Tools': 0,
      'AI + Automation': 0,
      'Classes + Workshops': 0
    };
    APPROVED_RESOURCES.forEach((r) => {
      counts[r.category] = (counts[r.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered resources
  const filteredResources = useMemo(() => {
    return APPROVED_RESOURCES.filter((r) => {
      if (selectedCategory !== 'All Resources' && r.category !== selectedCategory) {
        return false;
      }
      if (selectedTag !== 'All Topics' && !r.tags.includes(selectedTag)) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = r.title.toLowerCase().includes(q);
        const matchDesc = r.description.toLowerCase().includes(q);
        const matchFormat = r.format.toLowerCase().includes(q);
        const matchTags = r.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchFormat && !matchTags) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  const handleAction = (resource: ApprovedResource) => {
    if (resource.actionType === 'calculator') {
      if (onOpenCalculator) onOpenCalculator();
      else if (onNavigate) onNavigate('/agent-business-calculator/');
    } else if (resource.actionType === 'blog') {
      if (onBackToBlog) onBackToBlog();
      else if (onNavigate) onNavigate('/resources/');
    } else if (resource.actionType === 'workshop') {
      if (onNavigate) onNavigate('/tcworkshop/');
    } else if (resource.actionType === 'pricing') {
      if (onNavigate) onNavigate('/pricing/');
    } else {
      onBookCall();
    }
  };

  const getCategoryStyles = (category: SimpleCategory) => {
    switch (category) {
      case 'Guides + Checklists':
        return {
          badge: 'bg-[#0D9BA3]/10 text-[#0D9BA3] border-[#0D9BA3]/30',
          icon: <FileText className="w-3.5 h-3.5 text-[#0D9BA3]" />
        };
      case 'Templates + Client Tools':
        return {
          badge: 'bg-[#FE7311]/10 text-[#FE7311] border-[#FE7311]/30',
          icon: <Layers className="w-3.5 h-3.5 text-[#FE7311]" />
        };
      case 'AI + Automation':
        return {
          badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        };
      case 'Classes + Workshops':
        return {
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
        };
    }
  };

  const clearFilters = () => {
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
              Practical guides, operational overviews, calculators, and training built to make the work easier for Florida real estate professionals.
            </p>

            {/* Search Input */}
            <div className="pt-2 max-w-xl">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tools, calculators, guides, workshops..."
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

            {CATEGORIES.map((cat) => (
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

            {TOPIC_TAGS.map((tag) => (
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
      {/* APPROVED RESOURCE LISTING                                                 */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Results Header */}
        <div className="flex items-center justify-between pb-6 text-xs text-slate-600 border-b border-[#D8D2D4] mb-8">
          <div className="font-medium">
            Showing <strong className="text-[#3A2E29]">{filteredResources.length}</strong> {filteredResources.length === 1 ? 'resource' : 'resources'}
            {selectedCategory !== 'All Resources' && <span> in <strong className="text-[#0D9BA3]">{selectedCategory}</strong></span>}
            {selectedTag !== 'All Topics' && <span> tagged <strong className="text-[#3A2E29]">"{selectedTag}"</strong></span>}
          </div>

          {(searchQuery || selectedCategory !== 'All Resources' || selectedTag !== 'All Topics') && (
            <button
              onClick={clearFilters}
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
                No resources match your selection
              </h3>
              <p className="text-xs text-slate-500">
                Try selecting "All Resources" or "All Topics" to browse our approved operational tools.
              </p>
            </div>
            <button
              onClick={clearFilters}
              className="bg-[#0D9BA3] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#087177] transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Clean Resource Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredResources.map((item) => {
              const catStyles = getCategoryStyles(item.category);

              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#D8D2D4] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#0D9BA3]/50 transition duration-200 group"
                >
                  <div className="space-y-4">
                    
                    {/* Header: Category Badge + Format Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <div className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border ${catStyles.badge}`}>
                        {catStyles.icon}
                        <span>{item.category}</span>
                      </div>
                      
                      <span className="text-[10px] font-semibold text-slate-500 bg-[#EEEAEB]/80 px-2.5 py-0.5 rounded border border-[#D8D2D4]">
                        {item.format}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition leading-snug">
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-[#3A2E29]/80 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Topic Tags */}
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center text-[10px] font-semibold text-slate-600 bg-[#EEEAEB]/60 px-2.5 py-0.5 rounded"
                          >
                            <Tag className="w-2.5 h-2.5 mr-1 text-slate-400" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* Card Footer: Action Button */}
                  <div className="pt-6 border-t border-[#D8D2D4]/70 mt-6">
                    <button
                      onClick={() => handleAction(item)}
                      className="w-full bg-[#3A2E29] hover:bg-[#0D9BA3] text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </article>
              );
            })}
          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* SIMPLE CROSS-LINKS SECTION (Client Brief Requirement)                    */}
      {/* ========================================================================= */}
      <section className="bg-white border-y border-[#D8D2D4] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
              Explore Hometown TC Tools & Insights
            </h2>
            <p className="text-sm text-slate-600">
              Direct access to our live operational resources and service information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Cross-Link 1: Read The Hometown Brief */}
            <div 
              onClick={() => {
                if (onBackToBlog) onBackToBlog();
                else if (onNavigate) onNavigate('/blog/');
              }}
              className="bg-[#EEEAEB]/50 hover:bg-[#EEEAEB] border border-[#D8D2D4] rounded-2xl p-6 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 flex items-center justify-center text-[#0D9BA3]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition">
                  Read The Hometown Brief
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Florida real estate transaction operations, brokerage compliance, and practical operational answers written for practicing Realtors.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#0D9BA3] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Browse Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Cross-Link 2: Run the Numbers */}
            <div 
              onClick={() => {
                if (onOpenCalculator) onOpenCalculator();
                else if (onNavigate) onNavigate('/agent-business-calculator/');
              }}
              className="bg-[#EEEAEB]/50 hover:bg-[#EEEAEB] border border-[#D8D2D4] rounded-2xl p-6 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 flex items-center justify-center text-[#FE7311]">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-montserrat font-bold text-[#3A2E29] group-hover:text-[#FE7311] transition">
                  Run the Numbers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Calculate paperwork hours vs. commission income to compare the modeled value of your time with HTC support using your own numbers.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#FE7311] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Launch Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Cross-Link 3: Explore Services + Pricing */}
            <div 
              onClick={() => {
                if (onNavigate) onNavigate('/pricing/');
              }}
              className="bg-[#EEEAEB]/50 hover:bg-[#EEEAEB] border border-[#D8D2D4] rounded-2xl p-6 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#3A2E29]/10 flex items-center justify-center text-[#3A2E29]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-montserrat font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition">
                  Explore Services + Pricing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Review our Listing Launch, Contract-to-Close, and Post-Close support packages built for Florida Realtors.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>View Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

          {/* Legal / Operational Disclaimer */}
          <div className="mt-10 p-4 bg-[#EEEAEB]/40 rounded-xl border border-[#D8D2D4] text-[11px] text-slate-500 leading-relaxed text-center max-w-4xl mx-auto">
            <strong>Operational Disclaimer:</strong> All guides, checklists, templates, tools, and materials provided by Hometown Transaction Coordinators (HTC) are for educational and administrative operational support only. HTC does not provide legal advice. Florida Realtors should consult their managing broker or licensed real estate attorney for specific legal determinations.
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CTA — EXACT CLIENT SPECIFICATION                                    */}
      {/* ========================================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#3A2E29]">
            Need more than a resource?
          </h2>

          <p className="text-base sm:text-lg text-[#3A2E29]/85 max-w-2xl mx-auto leading-relaxed font-medium">
            If you are ready to hand off the administrative work instead of doing it yourself, book a Fit Call and we will see whether HTC fits your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>BOOK A 15-MINUTE FIT CALL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => {
                if (onNavigate) onNavigate('/pricing/');
              }}
              className="w-full sm:w-auto text-[#3A2E29] hover:text-[#0D9BA3] font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-xl border border-[#D8D2D4] hover:border-[#0D9BA3] transition cursor-pointer"
            >
              <span>EXPLORE SERVICES + PRICING</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-500">
            Direct desk line: <a href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, '')}`} className="text-[#3A2E29] hover:text-[#0D9BA3] font-bold underline underline-offset-2">(954) 377-8330</a> • Serving Florida Realtors statewide
          </div>

        </div>
      </section>

    </div>
  );
};
