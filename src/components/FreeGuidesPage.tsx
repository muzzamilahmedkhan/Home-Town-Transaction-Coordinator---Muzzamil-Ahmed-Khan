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
  Layers, 
  ExternalLink, 
  Copy, 
  PlayCircle, 
  Calculator, 
  Code, 
  Palette, 
  BookOpen, 
  Clock, 
  Send, 
  Check, 
  HelpCircle, 
  Filter,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  FolderDown,
  Wrench,
  LayoutGrid,
  List as ListIcon,
  CheckSquare,
  Tag,
  FileCheck,
  Building,
  Building2,
  ShieldAlert,
  FolderGit2,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import { 
  RESOURCE_LIBRARY_ITEMS, 
  RESOURCE_TYPE_FILTERS, 
  RESOURCE_TOPIC_FILTERS,
  ProblemTopicTag,
  PROBLEM_TOPIC_TAGS,
  ProblemTopicInfo,
  PROBLEM_TOPICS_METADATA,
  BrowseFormat,
  BROWSE_FORMAT_FILTERS,
  matchesBrowseFormat,
  getAppropriateCTA,
  getFormatSpecificCTA,
  getTypeMarkerInfo,
  TypeMarker,
  ResourceItem, 
  ResourceType, 
  ResourceTopic 
} from '../data/resourceLibraryData';
import { FreeClassesSection } from './FreeClassesSection';
import { AiAutomationSection } from './AiAutomationSection';
import { FromHometownBriefSection } from './FromHometownBriefSection';
import { NewsletterConnectionSection } from './NewsletterConnectionSection';
import { Section10FinalCta } from './Section10FinalCta';
import { getRelatedBriefForResource } from '../data/hometownBriefConnections';
import { usePageSeo } from '../hooks/usePageSeo';
import { getMainLibrarySeoData } from '../utils/seoUtils';

// Polished metallic paperclip visual accent for archive file desk aesthetic
const PaperClipIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-slate-400" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.85" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

interface Props {
  onGoHome: () => void;
  onBackToBlog: () => void;
  onBookCall: () => void;
  onOpenCalculator?: () => void;
  onNavigate?: (path: string) => void;
}

export const FreeGuidesPage: React.FC<Props> = ({
  onGoHome,
  onBackToBlog,
  onBookCall,
  onOpenCalculator,
  onNavigate
}) => {
  // Apply SEO + AEO metadata & BreadcrumbList structured data
  const seoData = useMemo(() => getMainLibrarySeoData(), []);
  usePageSeo(seoData);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<BrowseFormat>('ALL RESOURCES');
  const [selectedTopic, setSelectedTopic] = useState<ResourceTopic>('All Topics');
  const [viewMode, setViewMode] = useState<'live' | 'blueprint'>('live');

  // Interactive Modal States
  const [activeDownloadItem, setActiveDownloadItem] = useState<ResourceItem | null>(null);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSubmitted, setDownloadSubmitted] = useState(false);

  const [activePromptItem, setActivePromptItem] = useState<ResourceItem | null>(null);
  const [promptCopied, setPromptCopied] = useState(false);

  const [activeClassItem, setActiveClassItem] = useState<ResourceItem | null>(null);
  const [classRegistered, setClassRegistered] = useState(false);

  // Request a Resource State
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [requestTopic, setRequestTopic] = useState('');
  const [requestEmail, setRequestEmail] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Set Page Title & Meta on mount
  useEffect(() => {
    document.title = 'Free Guides + Downloads | Practical Real Estate Toolkits | Hometown TC';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Format Counts Computation for Section 2 Navigation
  const formatCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'ALL RESOURCES': RESOURCE_LIBRARY_ITEMS.length,
      'GUIDES + CHECKLISTS': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'GUIDES + CHECKLISTS')).length,
      'TEMPLATES': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'TEMPLATES')).length,
      'CALCULATORS + TOOLS': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'CALCULATORS + TOOLS')).length,
      'AI + AUTOMATION': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'AI + AUTOMATION')).length,
      'FREE CLASSES': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'FREE CLASSES')).length,
      'GUIDE': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'GUIDE')).length,
      'CHECKLIST': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'CHECKLIST')).length,
      'TEMPLATE': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'TEMPLATE')).length,
      'TOOL': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'TOOL')).length,
      'AI': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'AI')).length,
      'CLASS': RESOURCE_LIBRARY_ITEMS.filter(item => matchesBrowseFormat(item, 'CLASS')).length,
    };
    return counts;
  }, []);

  // Topic Counts Computation for Section 5 Browse By What You Need
  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Topics': RESOURCE_LIBRARY_ITEMS.length,
    };
    PROBLEM_TOPIC_TAGS.forEach(tag => {
      counts[tag] = RESOURCE_LIBRARY_ITEMS.filter(item => item.topics.includes(tag)).length;
    });
    return counts;
  }, []);

  // Filter Computation supporting multi-topic matching
  const filteredResources = useMemo(() => {
    return RESOURCE_LIBRARY_ITEMS.filter((item) => {
      // Browse by Format filter (Section 2)
      if (!matchesBrowseFormat(item, selectedFormat)) {
        return false;
      }
      // Topic filter (Section 5) - item belongs if selectedTopic is in item.topics array
      if (selectedTopic !== 'All Topics' && !item.topics.includes(selectedTopic as ProblemTopicTag)) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q) || item.placeholderTitle.toLowerCase().includes(q);
        const matchesDesc = item.shortDescription.toLowerCase().includes(q) || item.placeholderDescription.toLowerCase().includes(q);
        const matchesType = item.resourceType.toLowerCase().includes(q);
        const matchesCatalog = item.catalogId.toLowerCase().includes(q);
        const matchesTopics = item.topics.some(t => t.toLowerCase().includes(q));
        const matchesHighlights = item.highlights.some(h => h.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesType && !matchesCatalog && !matchesTopics && !matchesHighlights) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedFormat, selectedTopic]);

  // Featured resource selection (default: Flagship Checklist)
  const [selectedFeaturedId, setSelectedFeaturedId] = useState<string>('res-checklist-01');

  // Currently displayed single larger featured resource
  const featuredItem = useMemo(() => {
    const found = RESOURCE_LIBRARY_ITEMS.find(item => item.id === selectedFeaturedId);
    return found || RESOURCE_LIBRARY_ITEMS[0];
  }, [selectedFeaturedId]);

  // When format changes, intelligently select a relevant flagship resource
  useEffect(() => {
    if (selectedFormat === 'CALCULATORS + TOOLS') {
      setSelectedFeaturedId('res-calc-01');
    } else if (selectedFormat === 'FREE CLASSES') {
      setSelectedFeaturedId('res-class-01');
    } else if (selectedFormat === 'TEMPLATES') {
      setSelectedFeaturedId('res-canva-01');
    } else if (selectedFormat === 'AI + AUTOMATION') {
      setSelectedFeaturedId('res-ai-01');
    } else if (selectedFormat === 'GUIDES + CHECKLISTS' || selectedFormat === 'ALL RESOURCES') {
      setSelectedFeaturedId('res-checklist-01');
    }
  }, [selectedFormat]);

  // Flexible grid/list layout state for Section 4
  const [libraryLayout, setLibraryLayout] = useState<'grid' | 'list'>('grid');

  // Helper for item icon
  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case 'Checklist':
        return <CheckSquare className="w-4 h-4 text-[#0D9BA3]" />;
      case 'Downloadable Guide':
        return <BookOpen className="w-4 h-4 text-amber-900" />;
      case 'Canva Template':
        return <Palette className="w-4 h-4 text-[#FE7311]" />;
      case 'AI Prompt':
        return <Sparkles className="w-4 h-4 text-emerald-900" />;
      case 'Apps Script Tool':
        return <Code className="w-4 h-4 text-slate-900" />;
      case 'Calculator / Interactive':
        return <Calculator className="w-4 h-4 text-blue-900" />;
      case 'Class / Mini-Course':
        return <PlayCircle className="w-4 h-4 text-purple-900" />;
      case 'Quick Reference':
        return <Layers className="w-4 h-4 text-amber-900" />;
      default:
        return <Download className="w-4 h-4 text-[#0D9BA3]" />;
    }
  };

  // Helper for problem topic icon (Section 5)
  const renderTopicIcon = (tag: ProblemTopicTag, className: string = "w-4 h-4") => {
    switch (tag) {
      case 'Transactions':
        return <FileCheck className={className} />;
      case 'Listings':
        return <Building className={className} />;
      case 'Condo + HOA':
        return <Building2 className={className} />;
      case 'Broker Compliance':
        return <ShieldAlert className={className} />;
      case 'Agent Operations':
        return <FolderGit2 className={className} />;
      case 'Business Growth':
        return <TrendingUp className={className} />;
      case 'AI + Automation':
        return <Sparkles className={className} />;
      case 'Team Training':
        return <GraduationCap className={className} />;
      default:
        return <Tag className={className} />;
    }
  };

  // Action click handler (Option A Direct vs Option B Landing Page)
  const handleResourceAction = (item: ResourceItem, forceDirect = false) => {
    // OPTION B — Dedicated Resource Landing Page
    if (!forceDirect && item.landingPageEnabled && onNavigate) {
      onNavigate(`/resources/free-guides-downloads/${item.slug}/`);
      return;
    }

    // OPTION A — Direct Resource Dispatch (Modal, Prompt copy, Canva link, or tool)
    switch (item.deliveryMethod) {
      case 'instant_download':
        setActiveDownloadItem(item);
        setDownloadSubmitted(false);
        break;
      case 'copy_prompt':
        setActivePromptItem(item);
        setPromptCopied(false);
        break;
      case 'canva_link':
        if (item.externalUrl) {
          window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
          setActiveDownloadItem(item);
          setDownloadSubmitted(false);
        }
        break;
      case 'interactive_tool':
        if (onOpenCalculator) {
          onOpenCalculator();
        } else if (onNavigate) {
          onNavigate('/agent-business-calculator/');
        }
        break;
      case 'class_registration':
        setActiveClassItem(item);
        setClassRegistered(false);
        break;
      default:
        setActiveDownloadItem(item);
        setDownloadSubmitted(false);
    }
  };

  const handleCopyPromptText = () => {
    if (activePromptItem?.promptContent) {
      navigator.clipboard.writeText(activePromptItem.promptContent);
      setPromptCopied(true);
      setTimeout(() => setPromptCopied(false), 3000);
    }
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) return;
    setDownloadSubmitted(true);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestTopic || !requestEmail) return;
    setRequestSubmitted(true);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedFormat('ALL RESOURCES');
    setSelectedTopic('All Topics');
  };

  return (
    <div className="min-h-screen bg-[#EEEAEB] text-[#3A2E29] font-sans antialiased">
      
      {/* ========================================================================= */}
      {/* 1. TOP UTILITY BAR & BREADCRUMB                                           */}
      {/* ========================================================================= */}
      <div className="border-b border-[#D8D2D4] bg-[#EEEAEB]/80 text-xs py-2.5 px-4 sm:px-8 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Breadcrumb Navigation with Semantic Markup */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-600 font-medium text-xs">
            <ol className="flex items-center space-x-2">
              <li className="inline-flex items-center">
                <button 
                  onClick={onGoHome}
                  className="hover:text-[#0D9BA3] transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li className="inline-flex items-center">
                <button 
                  onClick={onBackToBlog}
                  className="hover:text-[#0D9BA3] transition cursor-pointer"
                >
                  Resources
                </button>
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li aria-current="page" className="inline-flex items-center text-[#3A2E29] font-bold">
                Free Guides + Downloads
              </li>
            </ol>
          </nav>

          <div className="flex items-center space-x-4">
            {/* View Mode Toggle: Live vs Blueprint */}
            <div className="inline-flex items-center p-1 bg-white rounded-xl border border-[#D8D2D4] shadow-xs text-xs">
              <span className="px-2 text-slate-400 font-medium text-[11px]">View:</span>
              <button
                onClick={() => setViewMode('live')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  viewMode === 'live'
                    ? 'bg-[#0D9BA3] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#3A2E29]'
                }`}
              >
                Catalog View
              </button>
              <button
                onClick={() => setViewMode('blueprint')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  viewMode === 'blueprint'
                    ? 'bg-[#3A2E29] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#3A2E29]'
                }`}
              >
                [Neutral Blueprint]
              </button>
            </div>

            <button
              onClick={onBackToBlog}
              className="text-xs font-bold text-[#0D9BA3] hover:text-[#FE7311] inline-flex items-center space-x-1 transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">The Hometown Brief</span>
            </button>
          </div>

        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION — RESOURCE DESK & DIGITAL ARCHIVE                         */}
        {/* ========================================================================= */}
        <div className="relative bg-[#FAF8F5] border border-[#D8D2D4] rounded-2xl shadow-xs p-6 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Archival Ledger Margin Guideline (Notebook edge visual cue) */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-10 w-[1.5px] bg-[#0D9BA3]/20 pointer-events-none hidden sm:block" />

          <div className="sm:pl-8 space-y-7 relative">
            
            {/* Eyebrow & Archive Label Row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              
              {/* Eyebrow with Paperclipped File Tab */}
              <div className="inline-flex items-center space-x-2">
                <div className="relative inline-flex items-center space-x-1.5 px-3 py-1 bg-white border border-[#D8D2D4] rounded-md shadow-2xs">
                  <PaperClipIcon className="w-3.5 h-3.5 text-[#0D9BA3] -rotate-12" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0D9BA3]">
                    FREE GUIDES + DOWNLOADS
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
                  HTC RESOURCE DESK • OPEN ACCESS
                </span>
              </div>

              {/* Rubber Stamped Label Visual Cue */}
              <div className="inline-block border-1.5 border-[#0D9BA3]/60 px-2.5 py-0.5 rounded-xs bg-[#0D9BA3]/5 rotate-[-1deg] shadow-2xs">
                <span className="text-[10px] font-mono font-black tracking-widest uppercase text-[#0D9BA3]">
                  STAMP: [FIELD-TESTED FOR FLORIDA TRANSACTIONS]
                </span>
              </div>
            </div>

            {/* Main Headline & Descriptive Copy (SEO + AEO Grounded) */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight leading-[1.08]">
                Take what you need.
              </h1>

              {/* Crawlable descriptive HTML text for search engines and AI answer engines */}
              <div className="space-y-3 max-w-3xl">
                <p className="text-base sm:text-lg lg:text-xl text-[#3A2E29]/90 leading-relaxed font-semibold">
                  Free tools for Florida Realtors, including transaction guides, checklists, templates, calculators, AI prompts, automation resources, and real estate classes.
                </p>
                
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Practical tools, templates, guides, and free training built to make the work a little easier. Designed by experienced Florida transaction coordinators for solo agents, high-volume teams, and managing brokers statewide.
                </p>
              </div>

              {/* Crawlable AEO Library Index Chips */}
              <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-mono font-medium text-slate-600">
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#D8D2D4] shadow-2xs">✓ FAR/BAR Contract Checklists</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#D8D2D4] shadow-2xs">✓ Pre-Listing MLS Protocols</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#D8D2D4] shadow-2xs">✓ SB 4-D Milestone Guides</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#D8D2D4] shadow-2xs">✓ Canva Client Roadmaps</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#D8D2D4] shadow-2xs">✓ Real Estate AI Prompts</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#D8D2D4] shadow-2xs">✓ Business ROI Calculators</span>
                <span className="bg-white px-2.5 py-1 rounded-md border border-[#D8D2D4] shadow-2xs">✓ On-Demand Classes</span>
              </div>

              {/* Supporting Line */}
              <div className="pt-1">
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#D8D2D4] text-xs sm:text-sm font-mono font-bold text-[#0D9BA3] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#0D9BA3] animate-pulse" />
                  <span>Download it. Save it. Use it. Come back when you need the next thing.</span>
                </div>
              </div>
            </div>

            {/* Search Resources Component (Section 1 Brief Requirement) */}
            <div className="pt-2 max-w-3xl">
              <div className="bg-white border-2 border-[#D8D2D4] focus-within:border-[#0D9BA3] rounded-xl p-3 sm:p-4 shadow-xs transition-colors space-y-2">
                <div className="flex items-center justify-between border-b border-[#D8D2D4]/70 pb-2">
                  <label 
                    htmlFor="resource-search-input"
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#3A2E29] flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    <span>Search Resources</span>
                  </label>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
                    CATALOG INDEX // 12 PRACTICAL TOOLS
                  </span>
                </div>
                
                <div className="relative flex items-center">
                  <input
                    id="resource-search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search templates, AI prompts, checklists, classes..."
                    className="w-full pl-1 pr-10 py-1 bg-transparent text-xs sm:text-sm text-[#3A2E29] placeholder:text-slate-400 focus:outline-none font-medium"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                      title="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Blueprint Schema Notice (When in blueprint view mode) */}
        {viewMode === 'blueprint' && (
          <div className="p-5 bg-white border-2 border-[#0D9BA3] rounded-2xl shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-[#0D9BA3] font-bold text-xs uppercase tracking-wider">
              <Code className="w-4 h-4" />
              <span>DEVELOPER & CONTENT ENTRY BLUEPRINT SCHEMA</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              This blueprint mode exposes the exact neutral schema components and content fields defined in the client brief. HTC will drop in actual files, Canva links, video courses, and copy into these exact field definitions without requiring any page redesign.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-600">
              <span className="bg-[#EEEAEB] px-2 py-0.5 rounded border border-[#D8D2D4]">[RESOURCE TYPE]</span>
              <span className="bg-[#EEEAEB] px-2 py-0.5 rounded border border-[#D8D2D4]">[RESOURCE TITLE]</span>
              <span className="bg-[#EEEAEB] px-2 py-0.5 rounded border border-[#D8D2D4]">[SHORT DESCRIPTION]</span>
              <span className="bg-[#EEEAEB] px-2 py-0.5 rounded border border-[#D8D2D4]">[CONTENT FIELDS / DOWNLOAD LINKS]</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. SECTION 2 — BROWSE BY FORMAT                                           */}
        {/* ========================================================================= */}
        <section aria-labelledby="browse-by-format-heading" className="bg-white rounded-2xl p-5 sm:p-7 border border-[#D8D2D4] shadow-xs space-y-4">
          
          {/* Header row with eyebrow, title, and topic refinement */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#D8D2D4]">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                SECTION 2 // ARCHIVE INDEX
              </div>
              <h2 id="browse-by-format-heading" className="text-lg sm:text-xl font-montserrat font-bold text-[#3A2E29]">
                Browse by Format
              </h2>
            </div>

            {/* Secondary Topic Refinement Dropdown & Reset */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2">
                <label htmlFor="topic-filter-select" className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                  Topic:
                </label>
                <select
                  id="topic-filter-select"
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value as ResourceTopic)}
                  className="bg-white hover:bg-slate-50 focus:bg-white border border-[#D8D2D4] rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#3A2E29] focus:outline-none focus:border-[#0D9BA3] transition cursor-pointer shadow-2xs"
                >
                  {RESOURCE_TOPIC_FILTERS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              {(selectedFormat !== 'ALL RESOURCES' || selectedTopic !== 'All Topics' || searchQuery) && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs font-mono text-[#FE7311] hover:underline font-bold inline-flex items-center space-x-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Compact Dropdown / Filter Control */}
          <div className="md:hidden space-y-1.5">
            <label htmlFor="mobile-format-select" className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              Quick Format Selector:
            </label>
            <div className="relative">
              <select
                id="mobile-format-select"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value as BrowseFormat)}
                className="w-full bg-white border border-[#D8D2D4] rounded-lg px-3 py-2 text-xs font-mono font-bold text-[#3A2E29] focus:outline-none focus:border-[#0D9BA3] shadow-2xs"
              >
                {BROWSE_FORMAT_FILTERS.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label} ({formatCounts[filter.value] || 0})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Horizontal Editorial Navigation (Desktop & Horizontally Scrollable on Mobile) */}
          {/* Design rule: Horizontal editorial navigation, no giant pill buttons */}
          <nav aria-label="Format filter navigation" className="relative pt-1">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-6 overflow-x-auto scrollbar-none pb-2.5 border-b border-[#D8D2D4]">
              {BROWSE_FORMAT_FILTERS.map((filter) => {
                const isSelected = selectedFormat === filter.value;
                const count = formatCounts[filter.value] || 0;

                return (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFormat(filter.value)}
                    className={`group relative py-2 px-2.5 sm:px-3 text-xs font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                      isSelected
                        ? 'text-[#0D9BA3]'
                        : 'text-slate-600 hover:text-[#3A2E29]'
                    }`}
                  >
                    <span className="relative">
                      {filter.label}
                      {/* Editorial bottom underline highlight (No giant pill buttons) */}
                      <span 
                        className={`absolute left-0 -bottom-[12px] w-full h-[2.5px] transition-colors rounded-full ${
                          isSelected ? 'bg-[#0D9BA3]' : 'bg-transparent group-hover:bg-slate-300'
                        }`} 
                      />
                    </span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-xs transition-colors ${
                      isSelected
                        ? 'bg-[#0D9BA3]/10 text-[#0D9BA3] font-black'
                        : 'bg-white text-slate-400 border border-[#D8D2D4]/70 group-hover:text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Active Filter Summary Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-500 pt-1">
            <div>
              Viewing: <strong className="text-[#3A2E29] uppercase">{selectedFormat}</strong>
              {selectedTopic !== 'All Topics' && (
                <span> • Topic: <strong className="text-[#3A2E29]">{selectedTopic}</strong></span>
              )}
              {searchQuery && (
                <span> • Search: <strong className="text-[#3A2E29]">"{searchQuery}"</strong></span>
              )}
            </div>
            <div className="flex items-center space-x-3">
              {selectedFormat === 'FREE CLASSES' && (
                <button
                  type="button"
                  onClick={() => document.getElementById('section-free-classes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#FE7311] hover:underline font-bold inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>Jump to Section 6 Classroom ↓</span>
                </button>
              )}
              <span className="font-bold text-[#3A2E29]">
                {filteredResources.length} {filteredResources.length === 1 ? 'file available' : 'files available'}
              </span>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 3. SECTION 3 — FEATURED RESOURCE                                          */}
        {/* ========================================================================= */}
        {selectedTopic === 'All Topics' && !searchQuery && (
          <section aria-labelledby="featured-resource-eyebrow" className="space-y-3">
            
            {/* Section 3 Header: Eyebrow & Live Format Tester */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8D2D4] pb-2">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#FE7311]" />
                <h2 id="featured-resource-eyebrow" className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                  FEATURED RESOURCE
                </h2>
              </div>

              {/* Resource Type Tester to verify dynamic CTAs (DOWNLOAD →, USE THE TOOL →, START THE CLASS →) */}
              <div className="flex items-center space-x-2 text-xs font-mono">
                <span className="text-slate-500 hidden md:inline">TEST RESOURCE TYPE:</span>
                <div className="inline-flex bg-white rounded-lg p-1 border border-[#D8D2D4] shadow-2xs">
                  {[
                    { id: 'res-checklist-01', label: 'Checklist', cta: 'DOWNLOAD →' },
                    { id: 'res-calc-01', label: 'Calculator', cta: 'USE THE TOOL →' },
                    { id: 'res-class-01', label: 'Masterclass', cta: 'START THE CLASS →' },
                  ].map((sample) => (
                    <button
                      key={sample.id}
                      onClick={() => setSelectedFeaturedId(sample.id)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition cursor-pointer ${
                        featuredItem.id === sample.id
                          ? 'bg-[#0D9BA3] text-white shadow-2xs'
                          : 'text-slate-600 hover:text-[#3A2E29]'
                      }`}
                      title={`Preview ${sample.label} (${sample.cta})`}
                    >
                      {sample.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ONE LARGER FEATURED RESOURCE CARD */}
            <article 
              aria-label={`Featured Resource: ${featuredItem.title}`}
              className="bg-[#FAF8F5] rounded-2xl border-2 border-[#0D9BA3]/50 p-6 sm:p-8 shadow-xs hover:border-[#0D9BA3] transition relative overflow-hidden space-y-6"
            >
              {/* File Folder Top Tab / Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#D8D2D4]">
                <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-lg border border-[#D8D2D4] font-mono text-xs font-bold text-[#3A2E29] uppercase tracking-wider shadow-2xs">
                  <PaperClipIcon className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>{featuredItem.catalogId}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#0D9BA3] font-semibold">{featuredItem.tabCategory}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="border border-[#0D9BA3]/60 px-2.5 py-1 rounded-xs bg-[#0D9BA3]/10 font-mono text-[10px] font-black uppercase tracking-wider text-[#0D9BA3] rotate-[-0.5deg]">
                    {featuredItem.stampLabel}
                  </div>
                  <span className="bg-[#FE7311]/10 text-[#FE7311] border border-[#FE7311]/30 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs">
                    {featuredItem.badge || 'FLAGSHIP SELECTION'}
                  </span>
                </div>
              </div>

              {/* Main Grid: Left Side Copy & Highlights (65%), Right Side Desk Docket & Dynamic CTA (35%) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* Left Column: Placeholders & Editorial Content */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* [RESOURCE TYPE] */}
                  <div className="inline-flex items-center space-x-2 bg-white border border-[#D8D2D4] px-3 py-1.5 rounded-md shadow-2xs">
                    {getResourceIcon(featuredItem.resourceType)}
                    <span className="font-mono text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
                      {viewMode === 'blueprint' 
                        ? `[RESOURCE TYPE: ${featuredItem.resourceType.toUpperCase()}]` 
                        : featuredItem.resourceType}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {featuredItem.format}
                    </span>
                  </div>

                  {/* [RESOURCE TITLE] */}
                  <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#3A2E29] leading-tight tracking-tight">
                    {viewMode === 'blueprint' ? featuredItem.placeholderTitle : featuredItem.title}
                  </h3>

                  {/* [ONE-TO-TWO SENTENCE DESCRIPTION] */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-2xl">
                    {viewMode === 'blueprint' ? featuredItem.placeholderDescription : featuredItem.shortDescription}
                  </p>

                  {/* Key Highlights Inside This Resource */}
                  {featuredItem.highlights && featuredItem.highlights.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        WHAT'S INCLUDED IN THIS FILE:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {featuredItem.highlights.map((bullet, idx) => (
                          <li key={idx} className="flex items-start space-x-2 bg-white/90 border border-[#D8D2D4]/80 p-2.5 rounded-lg shadow-2xs">
                            <Check className="w-3.5 h-3.5 text-[#0D9BA3] mt-0.5 shrink-0" />
                            <span className="leading-snug font-medium">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Connected Hometown Brief Context */}
                  {(() => {
                    const relatedBrief = getRelatedBriefForResource(featuredItem.id);
                    if (relatedBrief) {
                      return (
                        <div className="p-3 bg-white border border-[#D8D2D4] rounded-xl flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center space-x-2 text-slate-600">
                            <BookOpen className="w-4 h-4 text-[#0D9BA3] shrink-0" />
                            <span className="font-medium truncate">
                              Related Brief: <strong className="text-[#3A2E29]">{relatedBrief.title}</strong>
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              const el = document.getElementById('section-from-hometown-brief');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-[#0D9BA3] font-mono font-bold text-[11px] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                          >
                            Read Context →
                          </button>
                        </div>
                      );
                    }
                    return null;
                  })()}

                </div>

                {/* Right Column: Dispatch Docket & Appropriate CTA */}
                <div className="lg:col-span-4 flex flex-col justify-between bg-white rounded-xl border border-[#D8D2D4] p-5 sm:p-6 shadow-2xs space-y-5">
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#D8D2D4]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                        DISPATCH DOCKET
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#0D9BA3]">
                        DESK READY
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Format:</span>
                        <span className="font-semibold text-[#3A2E29] text-right">{featuredItem.format}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Scope:</span>
                        <span className="font-semibold text-[#3A2E29]">{featuredItem.estimatedTimeOrPages}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Category:</span>
                        <span className="font-semibold text-[#3A2E29]">{featuredItem.topic}</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-slate-500">Access Fee:</span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">$0.00 (Free)</span>
                      </div>
                    </div>
                  </div>

                  {/* Perforated Divider & Appropriate CTA */}
                  <div className="space-y-3 pt-2">
                    <div className="relative py-1">
                      <div className="border-t-2 border-dashed border-[#D8D2D4]" />
                      <span className="absolute -left-7 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FAF8F5]" />
                      <span className="absolute -right-7 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FAF8F5]" />
                    </div>

                    {/* Appropriate CTA: Option B Landing Page vs Option A Direct */}
                    <div className="space-y-2">
                      <button
                        onClick={() => handleResourceAction(featuredItem)}
                        className="w-full bg-[#0D9BA3] hover:bg-[#0b8289] text-white py-3.5 px-4 rounded-xl text-sm font-montserrat font-extrabold uppercase tracking-wider transition cursor-pointer text-center shadow-xs flex items-center justify-center space-x-2 group"
                      >
                        <span>
                          {viewMode === 'blueprint'
                            ? (featuredItem.landingPageEnabled ? '[OPTION B: DEDICATED LANDING PAGE →]' : '[OPTION A: DIRECT DOWNLOAD →]')
                            : (featuredItem.landingPageEnabled ? (featuredItem.ctaLabel || 'EXPLORE TOOLKIT & DOWNLOAD →') : getAppropriateCTA(featuredItem))}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {featuredItem.landingPageEnabled && (
                        <button
                          type="button"
                          onClick={() => handleResourceAction(featuredItem, true)}
                          className="w-full text-center text-xs font-mono font-semibold text-slate-500 hover:text-[#0D9BA3] py-1 cursor-pointer transition"
                        >
                          Option A: Direct PDF Download ↓
                        </button>
                      )}
                    </div>

                    <p className="text-[11px] font-mono text-center text-slate-400">
                      No account or credit card needed • Immediate dispatch
                    </p>
                  </div>

                </div>

              </div>

            </article>
          </section>
        )}

        {/* ========================================================================= */}
        {/* 4. SECTION 4 — RESOURCE LIBRARY (Browse the Library)                     */}
        {/* ========================================================================= */}
        <section aria-labelledby="browse-library-heading" className="space-y-6">
          
          {/* Section Header with Eyebrow, Title, Resource Count, and Grid/List Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D8D2D4] pb-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                  SECTION 4 — RESOURCE LIBRARY
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-mono text-slate-500">
                  {filteredResources.length} {filteredResources.length === 1 ? 'FILE' : 'ACTIVE FILES'}
                </span>
              </div>
              <h2 id="browse-library-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                Browse the Library
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xl">
                Field-tested checklists, downloadable guides, Canva templates, interactive calculators, AI prompts, and free classes.
              </p>
            </div>

            {/* Layout Toggle: Grid vs. List System */}
            <div className="flex items-center space-x-3 self-start sm:self-end">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 hidden sm:inline">
                VIEW FORMAT:
              </span>
              <div className="inline-flex bg-white rounded-lg p-1 border border-[#D8D2D4] shadow-2xs">
                <button
                  type="button"
                  onClick={() => setLibraryLayout('grid')}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-bold transition cursor-pointer ${
                    libraryLayout === 'grid'
                      ? 'bg-[#0D9BA3] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-[#3A2E29]'
                  }`}
                  aria-label="Switch to Grid View"
                  title="Grid View (Visual Cards)"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">GRID</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLibraryLayout('list')}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-bold transition cursor-pointer ${
                    libraryLayout === 'list'
                      ? 'bg-[#0D9BA3] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-[#3A2E29]'
                  }`}
                  aria-label="Switch to List View"
                  title="List View (Archive Register)"
                >
                  <ListIcon className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">LIST</span>
                </button>
              </div>
            </div>
          </div>

          {/* Active Topic Filter Notification Banner */}
          {selectedTopic !== 'All Topics' && (
            <div className="bg-[#E6F7F7] border border-[#0D9BA3]/40 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2.5 text-[#08676C]">
                <span className="font-mono uppercase font-bold text-[10px] tracking-wider bg-[#0D9BA3] text-white px-2 py-0.5 rounded shadow-2xs">
                  TAG FILTER
                </span>
                <span className="font-medium text-slate-700">
                  Showing files tagged with <span className="font-bold text-[#0D9BA3]">"{selectedTopic}"</span> ({filteredResources.length} {filteredResources.length === 1 ? 'file' : 'files'} matching)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTopic('All Topics')}
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-[#0D9BA3] hover:text-[#3A2E29] bg-white px-2.5 py-1 rounded-md border border-[#0D9BA3]/30 hover:border-slate-400 transition cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear Topic Filter</span>
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredResources.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#D8D2D4] space-y-4 shadow-xs">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-lg font-montserrat font-bold text-[#3A2E29]">
                  No resources match your active search filters
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your search query, clearing the format selection, or reset all filters to view the complete catalog.
                </p>
              </div>
              <button
                onClick={clearAllFilters}
                className="bg-[#0D9BA3] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#087177] transition cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : libraryLayout === 'grid' ? (
            /* ========================================================================= */
            /* GRID VIEW — DISTINGUISHABLE MEDIA TYPE ARCHETYPES                        */
            /* ========================================================================= */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((item) => {
                const markerInfo = getTypeMarkerInfo(item.resourceType);
                const formatCTA = getFormatSpecificCTA(item);

                return (
                  <article
                    key={item.id}
                    aria-label={`${item.resourceType}: ${item.title}`}
                    className={`bg-white rounded-2xl border border-[#D8D2D4] ${markerInfo.cardAccentBorder} p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-150 space-y-5 group relative overflow-hidden`}
                  >
                    {/* Media Type Color Accent Band at Top */}
                    <div className="space-y-4">
                      
                      {/* Top Bar: Catalog File No. + Small Visual Type-Marker Stamp */}
                      <div className="flex items-center justify-between gap-2 border-b border-[#D8D2D4] pb-3">
                        <div className="inline-flex items-center space-x-1.5 bg-white px-2.5 py-0.5 rounded-md border border-[#D8D2D4] text-[10px] font-mono font-bold text-[#3A2E29] shadow-2xs">
                          <PaperClipIcon className="w-3 h-3 text-[#0D9BA3]" />
                          <span>{item.catalogId}</span>
                        </div>

                        {/* Stamped Visual Type-Marker: GUIDE | CHECKLIST | TEMPLATE | TOOL | AI | CLASS */}
                        <div className={`border ${markerInfo.stampBorder} ${markerInfo.stampBg} ${markerInfo.stampText} px-2.5 py-0.5 rounded-xs font-mono text-[10px] font-black uppercase tracking-wider rotate-[-1deg] shadow-2xs`}>
                          {markerInfo.marker}
                        </div>
                      </div>

                      {/* [RESOURCE TYPE] & Scope Badge */}
                      <div className="flex items-center justify-between text-[11px] gap-2">
                        <div className="inline-flex items-center space-x-1.5 font-mono font-bold">
                          <span className={`p-1 rounded-md ${markerInfo.iconBg}`}>
                            {getResourceIcon(item.resourceType)}
                          </span>
                          <span className="text-[#3A2E29] uppercase tracking-wider">
                            {viewMode === 'blueprint' ? `[RESOURCE TYPE: ${item.resourceType.toUpperCase()}]` : item.resourceType}
                          </span>
                        </div>

                        <span className="font-mono text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded-md border border-[#D8D2D4]">
                          {item.estimatedTimeOrPages || item.format}
                        </span>
                      </div>

                      {/* [RESOURCE TITLE] */}
                      <h3 className="font-montserrat font-extrabold text-base sm:text-lg text-[#3A2E29] group-hover:text-[#0D9BA3] transition leading-snug">
                        {viewMode === 'blueprint' ? item.placeholderTitle : item.title}
                      </h3>

                      {/* [SHORT “WHAT THIS HELPS YOU DO” DESCRIPTION] */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {viewMode === 'blueprint' ? item.placeholderDescription : item.shortDescription}
                      </p>

                      {/* [TOPIC TAGS] - Multi-Topic Tagging Support */}
                      {item.topics && item.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.topics.map((tag) => {
                            const isSelected = selectedTopic === tag;
                            return (
                              <button
                                key={tag}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedTopic(prev => prev === tag ? 'All Topics' : tag);
                                }}
                                className={`inline-flex items-center space-x-1 font-mono text-[10px] px-2 py-0.5 rounded-md font-medium border transition cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#0D9BA3] text-white border-[#0D9BA3] shadow-2xs'
                                    : 'bg-white/95 text-slate-600 border-[#D8D2D4] hover:border-[#0D9BA3] hover:text-[#0D9BA3]'
                                }`}
                                title={`Filter by ${tag}`}
                              >
                                <Tag className={`w-2.5 h-2.5 ${isSelected ? 'text-white' : 'text-[#0D9BA3]'}`} />
                                <span>{tag}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Key Highlights / "What's Included" preview */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-2 border-t border-[#D8D2D4]/70 space-y-1.5">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                            KEY HIGHLIGHTS:
                          </span>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {item.highlights.slice(0, 2).map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start space-x-2 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                                <span className="line-clamp-2">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Connected Hometown Brief Context */}
                      {(() => {
                        const relatedBrief = getRelatedBriefForResource(item.id);
                        if (relatedBrief) {
                          return (
                            <div className="pt-2 border-t border-[#D8D2D4]/50 flex items-center justify-between text-[11px] font-mono">
                              <span className="text-slate-400">Florida Context:</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const el = document.getElementById('section-from-hometown-brief');
                                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-[#0D9BA3] font-bold hover:underline inline-flex items-center space-x-1 cursor-pointer truncate max-w-[180px]"
                                title={relatedBrief.title}
                              >
                                <BookOpen className="w-3 h-3 shrink-0" />
                                <span className="truncate">Read Related Brief →</span>
                              </button>
                            </div>
                          );
                        }
                        return null;
                      })()}

                    </div>

                    {/* Card Footer: Perforated Tear Edge & Format-Specific CTA */}
                    <div className="space-y-2 pt-2">
                      <div className="relative py-1">
                        <div className="border-t-2 border-dashed border-[#D8D2D4]" />
                        <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#EEEAEB]" />
                        <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#EEEAEB]" />
                      </div>

                      {/* Format-Specific CTA Button: Option B Landing Page vs Option A Direct */}
                      <div className="space-y-1.5">
                        <button
                          onClick={() => handleResourceAction(item)}
                          className={`w-full py-3 px-4 rounded-xl text-xs font-montserrat font-extrabold uppercase tracking-wider transition cursor-pointer flex items-center justify-center space-x-2 shadow-xs group/btn ${
                            item.resourceType === 'Canva Template'
                              ? 'bg-[#FE7311] hover:bg-[#e05f03] text-white'
                              : item.resourceType === 'Class / Mini-Course'
                              ? 'bg-[#3A2E29] hover:bg-[#2B231F] text-white'
                              : 'bg-[#0D9BA3] hover:bg-[#087177] text-white'
                          }`}
                        >
                          <span>
                            {viewMode === 'blueprint' 
                              ? (item.landingPageEnabled ? `[OPTION B: LANDING PAGE →]` : `[OPTION A: ${formatCTA}]`)
                              : (item.landingPageEnabled ? (item.ctaLabel || `${formatCTA} →`) : formatCTA)}
                          </span>
                          {item.deliveryMethod === 'canva_link' ? (
                            <ExternalLink className="w-3.5 h-3.5 transition group-hover/btn:translate-x-0.5" />
                          ) : item.deliveryMethod === 'copy_prompt' ? (
                            <Copy className="w-3.5 h-3.5 transition group-hover/btn:translate-x-0.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 transition group-hover/btn:translate-x-0.5" />
                          )}
                        </button>

                        {item.landingPageEnabled && item.deliveryMethod === 'instant_download' && (
                          <div className="flex items-center justify-between text-[11px] font-mono px-1">
                            <span className="text-slate-400">Dedicated Toolkit Page</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleResourceAction(item, true);
                              }}
                              className="text-[#0D9BA3] hover:underline font-bold cursor-pointer"
                            >
                              Direct PDF ↓
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                  </article>
                );
              })}
            </div>
          ) : (
            /* ========================================================================= */
            /* LIST VIEW — ARCHITECTURAL ARCHIVE REGISTER / FILE LEDGER                 */
            /* ========================================================================= */
            <div className="bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] divide-y divide-[#D8D2D4] shadow-xs overflow-hidden">
              {filteredResources.map((item) => {
                const markerInfo = getTypeMarkerInfo(item.resourceType);
                const formatCTA = getFormatSpecificCTA(item);

                return (
                  <article
                    key={`list-${item.id}`}
                    aria-label={`${item.resourceType}: ${item.title}`}
                    className="p-5 sm:p-6 hover:bg-white transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-5 group"
                  >
                    {/* Left: Stamp, Type, Title, and Description */}
                    <div className="space-y-2 lg:max-w-3xl">
                      
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Type Marker Stamp */}
                        <span className={`border ${markerInfo.stampBorder} ${markerInfo.stampBg} ${markerInfo.stampText} px-2 py-0.5 rounded-xs font-mono text-[9px] font-black uppercase tracking-wider`}>
                          {markerInfo.marker}
                        </span>

                        {/* File Catalog ID */}
                        <span className="font-mono text-[10px] font-bold text-slate-500">
                          {item.catalogId}
                        </span>

                        <span className="text-slate-300">•</span>

                        {/* [RESOURCE TYPE] */}
                        <span className="font-mono text-[11px] font-bold text-[#3A2E29] uppercase">
                          {item.resourceType}
                        </span>

                        {/* [TOPIC TAGS] - Multi-Topic Tagging Support */}
                        {item.topics && item.topics.length > 0 && (
                          <>
                            <span className="text-slate-300">•</span>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {item.topics.map((tag) => {
                                const isSelected = selectedTopic === tag;
                                return (
                                  <button
                                    key={tag}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedTopic(prev => prev === tag ? 'All Topics' : tag);
                                    }}
                                    className={`inline-flex items-center space-x-1 font-mono text-[10px] px-2 py-0.5 rounded-sm border transition cursor-pointer ${
                                      isSelected
                                        ? 'bg-[#0D9BA3] text-white border-[#0D9BA3]'
                                        : 'bg-white text-slate-600 border-[#D8D2D4] hover:border-[#0D9BA3] hover:text-[#0D9BA3]'
                                    }`}
                                    title={`Filter by ${tag}`}
                                  >
                                    <Tag className={`w-2.5 h-2.5 ${isSelected ? 'text-white' : 'text-[#0D9BA3]'}`} />
                                    <span>{tag}</span>
                                  </button>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>

                      {/* [RESOURCE TITLE] */}
                      <h3 className="font-montserrat font-extrabold text-base sm:text-lg text-[#3A2E29] group-hover:text-[#0D9BA3] transition leading-snug">
                        {viewMode === 'blueprint' ? item.placeholderTitle : item.title}
                      </h3>

                      {/* [SHORT “WHAT THIS HELPS YOU DO” DESCRIPTION] */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {viewMode === 'blueprint' ? item.placeholderDescription : item.shortDescription}
                      </p>
                    </div>

                    {/* Right: Format Badge & Format-Specific CTA */}
                    <div className="flex flex-row sm:flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-200">
                      <span className="text-[11px] font-mono text-slate-500 bg-white border border-[#D8D2D4] px-2.5 py-1 rounded-md">
                        {item.estimatedTimeOrPages || item.format}
                      </span>

                      <div className="flex items-center space-x-2">
                        {item.landingPageEnabled && item.deliveryMethod === 'instant_download' && (
                          <button
                            type="button"
                            onClick={() => handleResourceAction(item, true)}
                            className="text-[11px] font-mono font-bold text-slate-600 hover:text-[#0D9BA3] px-2.5 py-2 bg-white border border-[#D8D2D4] rounded-xl transition shadow-2xs hover:border-[#0D9BA3]"
                            title="Direct PDF download without visiting landing page"
                          >
                            Direct PDF ↓
                          </button>
                        )}
                        <button
                          onClick={() => handleResourceAction(item)}
                          className={`py-2.5 px-4 rounded-xl text-xs font-montserrat font-extrabold uppercase tracking-wider transition cursor-pointer flex items-center space-x-2 shadow-xs ${
                            item.resourceType === 'Canva Template'
                              ? 'bg-[#FE7311] hover:bg-[#e05f03] text-white'
                              : item.resourceType === 'Class / Mini-Course'
                              ? 'bg-[#3A2E29] hover:bg-[#2B231F] text-white'
                              : 'bg-[#0D9BA3] hover:bg-[#087177] text-white'
                          }`}
                        >
                          <span>
                            {viewMode === 'blueprint' 
                              ? (item.landingPageEnabled ? `[LANDING PAGE →]` : `[DIRECT ${formatCTA}]`) 
                              : (item.landingPageEnabled ? (item.ctaLabel || `${formatCTA} →`) : formatCTA)}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </article>
                );
              })}
            </div>
          )}

        </section>

        {/* ========================================================================= */}
        {/* 5. SECTION 5 — BROWSE BY WHAT YOU NEED (Problem & Topic Tagging)         */}
        {/* ========================================================================= */}
        <section aria-labelledby="browse-by-topic-heading" className="space-y-6 pt-2">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D8D2D4] pb-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                  SECTION 5 — BROWSE BY WHAT YOU NEED
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-mono text-slate-500">
                  TOPIC & PROBLEM TAGGING
                </span>
              </div>
              <h2 id="browse-by-topic-heading" className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                Browse by What You Need
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl">
                In addition to resource formats, explore tools organized by specific operational challenge and transaction milestone. Resources belong to multiple categories simultaneously without duplicate files.
              </p>
            </div>

            {/* Quick Filter Status Indicator & Reset */}
            <div className="flex items-center space-x-2 self-start md:self-end">
              {selectedTopic !== 'All Topics' ? (
                <button
                  type="button"
                  onClick={() => setSelectedTopic('All Topics')}
                  className="inline-flex items-center space-x-1.5 bg-[#FE7311]/10 text-[#FE7311] border border-[#FE7311]/30 hover:bg-[#FE7311] hover:text-white px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>RESET TO ALL TOPICS</span>
                </button>
              ) : (
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-500 bg-white border border-[#D8D2D4] px-3 py-1.5 rounded-lg">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                  <span>8 PROBLEM CATEGORIES</span>
                </span>
              )}
            </div>
          </div>

          {/* Quick Horizontal Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
              SELECT TOPIC:
            </span>
            <button
              type="button"
              onClick={() => setSelectedTopic('All Topics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer border ${
                selectedTopic === 'All Topics'
                  ? 'bg-[#3A2E29] text-white border-[#3A2E29] shadow-2xs'
                  : 'bg-white text-slate-600 border-[#D8D2D4] hover:border-slate-400 hover:text-[#3A2E29]'
              }`}
            >
              All Topics ({RESOURCE_LIBRARY_ITEMS.length})
            </button>
            {PROBLEM_TOPIC_TAGS.map((tag) => {
              const count = topicCounts[tag] || 0;
              const isSelected = selectedTopic === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    const next = selectedTopic === tag ? 'All Topics' : tag;
                    setSelectedTopic(next);
                    if (next !== 'All Topics') {
                      document.getElementById('browse-library-heading')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer border ${
                    isSelected
                      ? 'bg-[#0D9BA3] text-white border-[#0D9BA3] shadow-2xs'
                      : 'bg-white text-slate-600 border-[#D8D2D4] hover:border-[#0D9BA3] hover:text-[#0D9BA3]'
                  }`}
                >
                  <Tag className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-[#0D9BA3]'}`} />
                  <span>{tag}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-normal ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 8 Problem/Topic Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROBLEM_TOPICS_METADATA.map((topicInfo) => {
              const count = topicCounts[topicInfo.tag] || 0;
              const isSelected = selectedTopic === topicInfo.tag;

              return (
                <div
                  key={topicInfo.tag}
                  onClick={() => {
                    const next = selectedTopic === topicInfo.tag ? 'All Topics' : topicInfo.tag;
                    setSelectedTopic(next);
                    if (next !== 'All Topics') {
                      document.getElementById('browse-library-heading')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`bg-white rounded-xl border p-5 flex flex-col justify-between transition-all duration-150 cursor-pointer group relative overflow-hidden ${
                    isSelected
                      ? 'border-[#0D9BA3] ring-2 ring-[#0D9BA3]/20 shadow-sm'
                      : 'border-[#D8D2D4] hover:border-[#0D9BA3]/70 hover:shadow-xs'
                  }`}
                >
                  {/* Active Indicator Strip */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#0D9BA3]" />
                  )}

                  <div className="space-y-3">
                    {/* Top row: Icon + Count */}
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-lg border transition ${
                        isSelected
                          ? 'bg-[#0D9BA3] text-white border-[#0D9BA3]'
                          : 'bg-white text-[#0D9BA3] border-[#D8D2D4] group-hover:border-[#0D9BA3]'
                      }`}>
                        {renderTopicIcon(topicInfo.tag, "w-4 h-4")}
                      </div>
                      <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        isSelected
                          ? 'bg-[#0D9BA3]/10 text-[#0D9BA3] border-[#0D9BA3]/30'
                          : 'bg-white text-slate-500 border-[#D8D2D4]'
                      }`}>
                        {count} {count === 1 ? 'FILE' : 'FILES'}
                      </span>
                    </div>

                    {/* Topic Title */}
                    <div>
                      <h3 className={`font-montserrat font-extrabold text-base transition ${
                        isSelected ? 'text-[#0D9BA3]' : 'text-[#3A2E29] group-hover:text-[#0D9BA3]'
                      }`}>
                        {topicInfo.label}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed font-normal">
                        {topicInfo.problemSummary}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="pt-4 mt-3 border-t border-[#D8D2D4]/70 flex items-center justify-between text-xs font-mono font-bold">
                    <span className={isSelected ? 'text-[#0D9BA3]' : 'text-slate-500 group-hover:text-[#0D9BA3]'}>
                      {isSelected ? 'ACTIVE FILTER (CLICK TO CLEAR)' : `FILTER: ${topicInfo.label.toUpperCase()}`}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                      isSelected ? 'text-[#0D9BA3]' : 'text-slate-400 group-hover:text-[#0D9BA3]'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Relational Tagging Architecture Note */}
          <div className="bg-white rounded-xl p-4 border border-[#D8D2D4] flex items-start space-x-3 text-xs text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-[#0D9BA3] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-[#3A2E29]">Relational Tagging System: </strong>
              Each resource is stored once in our repository and tagged across multiple relevant operational categories. For example, the <em>Florida Contract-to-Close Checklist</em> belongs to <strong>Transactions</strong>, <strong>Broker Compliance</strong>, and <strong>Agent Operations</strong> simultaneously, eliminating duplicate files while maximizing discoverability.
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 6. SECTION 6 — FREE CLASSES (Dedicated Classroom & Mini-Courses Section)  */}
        {/* ========================================================================= */}
        <FreeClassesSection 
          viewMode={viewMode}
          onNavigate={onNavigate}
        />

        {/* ========================================================================= */}
        {/* 7. SECTION 7 — AI + AUTOMATION RESOURCES (Useful tool. Easier work.)     */}
        {/* ========================================================================= */}
        <AiAutomationSection 
          viewMode={viewMode}
          onNavigate={onNavigate}
          onOpenCalculator={onOpenCalculator}
        />

        {/* ========================================================================= */}
        {/* 8. SECTION 8 — FROM THE HOMETOWN BRIEF (WANT THE CONTEXT?)               */}
        {/* ========================================================================= */}
        <FromHometownBriefSection 
          viewMode={viewMode}
          onNavigate={onNavigate}
          onSelectResource={(resourceId) => {
            const item = RESOURCE_LIBRARY_ITEMS.find(r => r.id === resourceId);
            if (item) {
              handleResourceAction(item);
            } else {
              const el = document.getElementById(resourceId) || document.getElementById('section-resource-library') || document.getElementById('section-ai-automation');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* ========================================================================= */}
        {/* 9. SECTION 9 — NEWSLETTER CONNECTION (STAY IN THE LOOP)                   */}
        {/* ========================================================================= */}
        <NewsletterConnectionSection viewMode={viewMode} />

        {/* ========================================================================= */}
        {/* 10. SECTION 10 — FINAL CTA (NEED MORE THAN A RESOURCE?)                   */}
        {/* ========================================================================= */}
        <Section10FinalCta
          onBookCall={onBookCall}
          onExploreServices={() => onNavigate ? onNavigate('/pricing/') : undefined}
          viewMode={viewMode}
        />

        {/* ========================================================================= */}
        {/* COMMUNITY RESOURCE REQUEST & OPERATIONS HOTLINE                           */}
        {/* ========================================================================= */}
        <section aria-labelledby="request-resource-heading" className="bg-white rounded-2xl p-6 sm:p-10 border border-[#D8D2D4] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FE7311]">
              <Wrench className="w-4 h-4" />
              <span>COMMUNITY RESOURCE REQUEST</span>
            </div>
            <h3 id="request-resource-heading" className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
              Need a Specific Checklist or Tool for Your Files?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We build our toolkits directly from the challenges Florida Realtors face every week. Let our transaction desk know what template, script, or checklist would make your files easier.
            </p>
          </div>

          <button
            onClick={() => {
              setRequestModalOpen(true);
              setRequestSubmitted(false);
            }}
            className="bg-[#3A2E29] hover:bg-[#2B231F] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-sm whitespace-nowrap"
          >
            REQUEST A RESOURCE →
          </button>
        </section>

        {/* Three Pillars Directory Banner: How HTC's Three Resource Hubs Work Together */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#D8D2D4] shadow-xs">
          <div className="flex items-center justify-between mb-3 border-b border-[#D8D2D4] pb-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              ARCHIVE DIRECTORY: HOW HTC’S THREE RESOURCE HUBS WORK TOGETHER
            </div>
            <span className="text-[10px] font-mono text-[#0D9BA3] uppercase tracking-wider hidden sm:inline">
              INDEX 01 • 02 • 03
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            
            {/* Pillar 1: The Hometown Brief */}
            <div 
              onClick={onBackToBlog}
              className="p-4 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#D8D2D4] transition cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-[#0D9BA3] uppercase tracking-wide flex items-center space-x-1">
                  <span>1. The Hometown Brief</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0D9BA3] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-slate-600 font-medium leading-relaxed">
                Answers operational questions, Florida contract scenarios, and compliance rules.
              </p>
            </div>

            {/* Pillar 2: Run the Numbers */}
            <div 
              onClick={onOpenCalculator}
              className="p-4 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#D8D2D4] transition cursor-pointer group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-[#FE7311] uppercase tracking-wide flex items-center space-x-1">
                  <span>2. Run the Numbers</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FE7311] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-slate-600 font-medium leading-relaxed">
                Helps you calculate time spent per file, admin leverage, and ROI for business decisions.
              </p>
            </div>

            {/* Pillar 3: This Page */}
            <div className="p-4 rounded-xl bg-[#0D9BA3]/10 border border-[#0D9BA3]/30 shadow-2xs">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-[#3A2E29] uppercase tracking-wide">3. Free Guides + Downloads</span>
                <span className="w-2 h-2 rounded-full bg-[#0D9BA3]"></span>
              </div>
              <p className="text-slate-700 font-bold leading-relaxed">
                Gives you practical tools you take with you right now to run smoother transactions.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 11. SECTION 11 — CROSS-LINKING TO HOMETOWN BRIEF & CALCULATOR            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#D8D2D4]">
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                DEEP OPERATIONAL ANSWERS
              </span>
              <h4 className="text-lg sm:text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Browse The Hometown Brief
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                40+ operational answers and contract guides covering Florida inspection windows, financing contingencies, HOA estoppel timelines, and broker compliance.
              </p>
            </div>

            <button
              onClick={onBackToBlog}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#FE7311] transition cursor-pointer"
            >
              <span>EXPLORE THE BRIEFS ARCHIVE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">
                FINANCIAL LEVERAGE CALCULATOR
              </span>
              <h4 className="text-lg sm:text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Run the Numbers for Your Business
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Calculate the exact hourly value of delegating transaction coordination and see how many production hours you reclaim with Hometown TC.
              </p>
            </div>

            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FE7311] hover:text-[#0D9BA3] transition cursor-pointer"
            >
              <span>LAUNCH BUSINESS CALCULATOR</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </main>

      {/* ========================================================================= */}
      {/* 9. MODALS (DOWNLOAD, AI PROMPT, CLASS, REQUEST TOOL)                     */}
      {/* ========================================================================= */}

      {/* A. DOWNLOAD / EMAIL DELIVERY MODAL */}
      {activeDownloadItem && (
        <div className="fixed inset-0 bg-[#3A2E29]/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white border border-[#D8D2D4] rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            
            <button
              onClick={() => setActiveDownloadItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#3A2E29] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                HTC INSTANT RESOURCE ACCESS
              </span>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                {viewMode === 'blueprint' ? activeDownloadItem.placeholderTitle : activeDownloadItem.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                {activeDownloadItem.format} • {activeDownloadItem.estimatedTimeOrPages}
              </p>
            </div>

            {/* Bidirectional Link to Hometown Brief */}
            {(() => {
              const relatedBrief = getRelatedBriefForResource(activeDownloadItem.id);
              if (relatedBrief) {
                return (
                  <div className="p-3 bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl text-xs space-y-1">
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono font-bold text-[#0D9BA3] uppercase">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>WANT THE CONTEXT?</span>
                    </div>
                    <p className="text-xs text-[#3A2E29] font-bold font-montserrat line-clamp-1">
                      {relatedBrief.title}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveDownloadItem(null);
                        const el = document.getElementById('section-from-hometown-brief');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-[11px] font-mono font-bold text-[#0D9BA3] hover:underline inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Read the Brief Behind the Tool →</span>
                    </button>
                  </div>
                );
              }
              return null;
            })()}

            {downloadSubmitted ? (
              <div className="bg-[#0D9BA3]/10 border border-[#0D9BA3]/30 rounded-xl p-5 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#0D9BA3] mx-auto" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                  RESOURCE DISPATCH READY
                </p>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  We have prepared the download for <span className="font-bold">{downloadEmail}</span>. The file link is ready below.
                </p>
                <div className="pt-2">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Download simulation started. In production, this delivers the client-provided file.');
                      setActiveDownloadItem(null);
                    }}
                    className="w-full bg-[#0D9BA3] hover:bg-[#0b8289] text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition inline-block text-center shadow-xs"
                  >
                    DOWNLOAD PDF FILE NOW
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDownloadSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3A2E29] mb-1.5">
                    Where should we send your copy?
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="agent@brokerage.com"
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#EEEAEB]/50 focus:bg-white border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] focus:outline-none focus:border-[#0D9BA3] transition"
                  />
                </div>

                <div className="text-[11px] text-slate-500 space-y-1">
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0D9BA3]" />
                    <span>Free practical resource. Zero spam policy.</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md text-center"
                >
                  GET INSTANT ACCESS →
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* B. AI PROMPT MODAL WITH 1-CLICK COPY */}
      {activePromptItem && (
        <div className="fixed inset-0 bg-[#3A2E29]/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white border border-[#D8D2D4] rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActivePromptItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#3A2E29] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                AI WORKFLOW PROMPT
              </span>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                {activePromptItem.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Copy and paste this structured prompt into ChatGPT, Claude, or Gemini alongside your contract files.
              </p>
            </div>

            <div className="bg-[#EEEAEB]/60 border border-[#D8D2D4] rounded-xl p-4 text-xs font-mono text-slate-800 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
              {activePromptItem.promptContent}
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={handleCopyPromptText}
                className="flex-1 bg-[#0D9BA3] hover:bg-[#0b8289] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-xs flex items-center justify-center space-x-2"
              >
                {promptCopied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY PROMPT TO CLIPBOARD</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActivePromptItem(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* C. CLASS / MINI-COURSE REGISTRATION MODAL */}
      {activeClassItem && (
        <div className="fixed inset-0 bg-[#3A2E29]/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white border border-[#D8D2D4] rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            
            <button
              onClick={() => setActiveClassItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#3A2E29] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">
                FREE ON-DEMAND MASTERCLASS
              </span>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                {activeClassItem.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                {activeClassItem.estimatedTimeOrPages} • Free for Florida licensed agents
              </p>
            </div>

            {classRegistered ? (
              <div className="bg-[#0D9BA3]/10 border border-[#0D9BA3]/30 rounded-xl p-5 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#0D9BA3] mx-auto" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                  TRAINING ACCESS UNLOCKED
                </p>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Your on-demand workshop pass has been generated. In production, this launches the video training player or portal.
                </p>
                <button
                  onClick={() => setActiveClassItem(null)}
                  className="w-full bg-[#3A2E29] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    MODULE CURRICULUM:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {activeClassItem.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <PlayCircle className="w-3.5 h-3.5 text-[#FE7311] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setClassRegistered(true)}
                  className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md text-center"
                >
                  LAUNCH ON-DEMAND TRAINING →
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* D. REQUEST A RESOURCE MODAL */}
      {requestModalOpen && (
        <div className="fixed inset-0 bg-[#3A2E29]/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white border border-[#D8D2D4] rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            
            <button
              onClick={() => setRequestModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#3A2E29] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">
                HTC TRANSACTION LAB
              </span>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Request a Tool or Checklist
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                What practical resource would save you time or help your Florida clients?
              </p>
            </div>

            {requestSubmitted ? (
              <div className="bg-[#0D9BA3]/10 border border-[#0D9BA3]/30 rounded-xl p-5 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#0D9BA3] mx-auto" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                  REQUEST SUBMITTED
                </p>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Thank you! Our operations tribe reviews community requests weekly to add new checklists, templates, and scripts.
                </p>
                <button
                  onClick={() => setRequestModalOpen(false)}
                  className="w-full bg-[#3A2E29] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3A2E29] mb-1.5">
                    What tool or checklist do you need?
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="e.g., A Canva roadmap for post-closing occupancy agreements, or an Apps Script to calculate repair escrow limits..."
                    value={requestTopic}
                    onChange={(e) => setRequestTopic(e.target.value)}
                    className="w-full px-4 py-3 bg-[#EEEAEB]/50 focus:bg-white border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] focus:outline-none focus:border-[#0D9BA3] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#3A2E29] mb-1.5">
                    Your Email (we'll send it to you when built)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="agent@brokerage.com"
                    value={requestEmail}
                    onChange={(e) => setRequestEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#EEEAEB]/50 focus:bg-white border border-[#D8D2D4] rounded-xl text-xs text-[#3A2E29] focus:outline-none focus:border-[#0D9BA3] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md text-center"
                >
                  SUBMIT RESOURCE REQUEST →
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
