import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  CheckCircle2,
  ExternalLink,
  Copy,
  PlayCircle,
  Calculator,
  Calendar,
  Clock,
  FileText,
  ShieldCheck,
  Tag,
  BookOpen,
  Share2,
  Check,
  X,
  Sparkles,
  Layers,
  Palette,
  Code,
  CheckSquare,
  Building,
  Building2,
  ShieldAlert,
  FolderGit2,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import {
  ResourceItem,
  RESOURCE_LIBRARY_ITEMS,
  getResourceBySlug,
  getAppropriateCTA,
  getTypeMarkerInfo,
  ResourceType,
  ProblemTopicTag
} from '../data/resourceLibraryData';
import { getRelatedBriefForResource, BRIEF_RESOURCE_CONNECTIONS } from '../data/hometownBriefConnections';
import { Section10FinalCta } from './Section10FinalCta';
import { NewsletterSignup } from './NewsletterSignup';
import { usePageSeo } from '../hooks/usePageSeo';
import { getResourceLandingPageSeoData } from '../utils/seoUtils';

interface Props {
  slug: string;
  onBackToLibrary: () => void;
  onNavigate?: (path: string) => void;
  onBookCall: () => void;
  onExploreServices: () => void;
  onGoHome: () => void;
  onOpenCalculator?: () => void;
}

export const ResourceLandingPage: React.FC<Props> = ({
  slug,
  onBackToLibrary,
  onNavigate,
  onBookCall,
  onExploreServices,
  onGoHome,
  onOpenCalculator
}) => {
  const [viewMode, setViewMode] = useState<'live' | 'blueprint'>('live');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSubmitted, setDownloadSubmitted] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<'preview' | 'specs' | 'curriculum'>('preview');

  // Lookup resource by slug or fallback
  const resource = useMemo(() => {
    return getResourceBySlug(slug) || RESOURCE_LIBRARY_ITEMS[0];
  }, [slug]);

  // Apply unique SEO + AEO metadata, Open Graph tags & BreadcrumbList structured data
  const seoData = useMemo(() => getResourceLandingPageSeoData(resource), [resource]);
  usePageSeo(seoData);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [resource]);

  // Compute related resources based on relatedResourceIds or matching topic
  const relatedResources = useMemo(() => {
    if (!resource) return [];
    if (resource.relatedResourceIds && resource.relatedResourceIds.length > 0) {
      return resource.relatedResourceIds
        .map(id => RESOURCE_LIBRARY_ITEMS.find(item => item.id === id))
        .filter((item): item is ResourceItem => item !== undefined);
    }
    return RESOURCE_LIBRARY_ITEMS
      .filter(item => item.id !== resource.id && item.topics.some(t => resource.topics.includes(t)))
      .slice(0, 3);
  }, [resource]);

  // Compute connected Briefs
  const relatedBriefs = useMemo(() => {
    if (!resource) return [];
    if (resource.relatedHometownBriefSlugs && resource.relatedHometownBriefSlugs.length > 0) {
      return resource.relatedHometownBriefSlugs
        .map(bSlug => BRIEF_RESOURCE_CONNECTIONS.find(conn => conn.slug === bSlug))
        .filter((b): b is typeof BRIEF_RESOURCE_CONNECTIONS[0] => b !== undefined);
    }
    const single = getRelatedBriefForResource(resource.id);
    return single ? [single] : [];
  }, [resource]);

  // Handle primary action trigger
  const handlePrimaryAction = () => {
    switch (resource.deliveryMethod) {
      case 'instant_download':
        setDownloadModalOpen(true);
        setDownloadSubmitted(false);
        break;
      case 'copy_prompt':
        if (resource.promptContent) {
          navigator.clipboard.writeText(resource.promptContent);
          setPromptCopied(true);
          setTimeout(() => setPromptCopied(false), 3000);
        }
        break;
      case 'canva_link':
        if (resource.externalUrl) {
          window.open(resource.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
          setDownloadModalOpen(true);
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
        setDownloadModalOpen(true);
        break;
      default:
        setDownloadModalOpen(true);
    }
  };

  const markerInfo = getTypeMarkerInfo(resource.resourceType);

  return (
    <div className="min-h-screen bg-[#EEEAEB] text-[#3A2E29] font-sans antialiased">
      
      {/* ========================================================================= */}
      {/* 1. TOP UTILITY BAR & BREADCRUMB                                           */}
      {/* ========================================================================= */}
      <div className="border-b border-[#D8D2D4] bg-[#EEEAEB]/80 text-xs py-2.5 px-4 sm:px-8 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Breadcrumb path with Semantic Markup */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-600 font-medium text-xs truncate max-w-xl">
            <ol className="flex items-center space-x-2 truncate">
              <li className="inline-flex items-center shrink-0">
                <button 
                  onClick={onGoHome}
                  className="hover:text-[#0D9BA3] transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li className="inline-flex items-center shrink-0">
                <button 
                  onClick={() => onNavigate ? onNavigate('/resources/') : onBackToLibrary()}
                  className="hover:text-[#0D9BA3] transition cursor-pointer"
                >
                  Resources
                </button>
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li className="inline-flex items-center shrink-0">
                <button 
                  onClick={onBackToLibrary}
                  className="hover:text-[#0D9BA3] transition cursor-pointer"
                >
                  Free Guides + Downloads
                </button>
              </li>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li aria-current="page" className="inline-flex items-center truncate text-[#3A2E29] font-bold">
                <span className="truncate">{resource.title}</span>
              </li>
            </ol>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={onBackToLibrary}
              className="text-xs font-bold text-[#0D9BA3] hover:text-[#FE7311] inline-flex items-center space-x-1.5 bg-white border border-[#D8D2D4] px-3 py-1.5 rounded-lg shadow-2xs transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Library</span>
            </button>
          </div>

        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* ========================================================================= */}
        {/* 2. RESOURCE HEADER & HERO DISPLAY                                         */}
        {/* ========================================================================= */}
        <div className="relative bg-[#FAF8F5] border border-[#D8D2D4] rounded-2xl sm:rounded-3xl shadow-xs p-6 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Archival guideline */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-10 w-[1.5px] bg-[#0D9BA3]/20 pointer-events-none hidden sm:block" />

          <div className="sm:pl-8 space-y-8 relative">
            
            {/* Top Docket / Metadata Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#D8D2D4]">
              
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Catalog ID */}
                <div className="inline-flex items-center space-x-1.5 bg-white border border-[#D8D2D4] px-3 py-1 rounded-md text-xs font-mono font-bold text-[#3A2E29] shadow-2xs">
                  <span>{resource.catalogId}</span>
                </div>

                {/* [RESOURCE TYPE] Marker */}
                <div className={`border ${markerInfo.stampBorder} ${markerInfo.stampBg} ${markerInfo.stampText} px-2.5 py-1 rounded-xs font-mono text-xs font-black uppercase tracking-wider rotate-[-0.5deg]`}>
                  {resource.resourceType}
                </div>

                {/* Stamp Label */}
                <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded-md border border-[#D8D2D4]">
                  {resource.stampLabel}
                </span>
              </div>

              {/* Publish & Update Metadata */}
              <div className="flex items-center space-x-4 text-xs font-mono text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Updated: {resource.updatedDate || '2025-02-15'}</span>
                </div>
                <span className="text-slate-300">•</span>
                <span className="text-[#0D9BA3] font-semibold">{resource.estimatedTimeOrPages}</span>
              </div>

            </div>

            {/* Main Title & Short Intro Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Title, Intro & Descriptions */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* [RESOURCE TITLE] */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight leading-[1.12]">
                  {resource.title}
                </h1>

                {/* [SHORT INTRO] */}
                <p className="text-base sm:text-xl text-[#3A2E29]/90 font-medium leading-relaxed">
                  {(resource.shortIntro || resource.shortDescription)}
                </p>

                {/* Extended description if available */}
                {resource.fullDescription && (
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-white/70 border border-[#D8D2D4]/80 p-5 rounded-xl">
                    {resource.fullDescription}
                  </p>
                )}

                {/* Topic Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
                    Relevant Topics:
                  </span>
                  {resource.topics.map(t => (
                    <span 
                      key={t}
                      className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-[#0D9BA3] bg-white border border-[#D8D2D4] px-2.5 py-1 rounded-md shadow-2xs"
                    >
                      <Tag className="w-3 h-3 text-[#0D9BA3]" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

              </div>

              {/* Right Column: [PRIMARY CTA] Dispatch Box */}
              <div className="lg:col-span-4 bg-white rounded-2xl border-2 border-[#0D9BA3] p-6 shadow-md space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#D8D2D4]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
                    INSTANT OPEN ACCESS
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    100% Free
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Format:</span>
                    <strong className="text-[#3A2E29]">{resource.format}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Scope:</span>
                    <strong className="text-[#3A2E29]">{resource.estimatedTimeOrPages}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Licensing:</span>
                    <strong className="text-[#3A2E29]">Florida Agents & Teams</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Delivery:</span>
                    <strong className="text-[#0D9BA3]">Instant Access / Zero Wait</strong>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-2 space-y-2.5">
                  <button
                    onClick={handlePrimaryAction}
                    className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-4 px-4 rounded-xl text-xs sm:text-sm font-montserrat font-extrabold uppercase tracking-wider transition cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group text-center"
                  >
                    {resource.deliveryMethod === 'copy_prompt' ? (
                      promptCopied ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>COPIED TO CLIPBOARD!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-white" />
                          <span>
                            {viewMode === 'blueprint' 
                              ? '[PRIMARY CTA: COPY AI PROMPT]' 
                              : (resource.ctaLabel || 'COPY AI PROMPT')}
                          </span>
                        </>
                      )
                    ) : resource.deliveryMethod === 'class_registration' ? (
                      <>
                        <PlayCircle className="w-4 h-4 text-white" />
                        <span>
                          {viewMode === 'blueprint' 
                            ? '[PRIMARY CTA: START THE MASTERCLASS]' 
                            : (resource.ctaLabel || 'START THE MASTERCLASS')}
                        </span>
                      </>
                    ) : resource.deliveryMethod === 'canva_link' ? (
                      <>
                        <ExternalLink className="w-4 h-4 text-white" />
                        <span>
                          {viewMode === 'blueprint' 
                            ? '[PRIMARY CTA: OPEN IN CANVA]' 
                            : (resource.ctaLabel || 'OPEN IN CANVA')}
                        </span>
                      </>
                    ) : resource.deliveryMethod === 'interactive_tool' ? (
                      <>
                        <Calculator className="w-4 h-4 text-white" />
                        <span>
                          {viewMode === 'blueprint' 
                            ? '[PRIMARY CTA: LAUNCH TOOL]' 
                            : (resource.ctaLabel || 'LAUNCH THE CALCULATOR')}
                        </span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 text-white" />
                        <span>
                          {viewMode === 'blueprint' 
                            ? '[PRIMARY CTA: DOWNLOAD RESOURCE]' 
                            : (resource.ctaLabel || 'DOWNLOAD PDF TOOLKIT')}
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-slate-400">
                    No payment details required • Direct dispatch
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. [RESOURCE PREVIEW / IMAGE / VIDEO IF APPLICABLE]                       */}
        {/* ========================================================================= */}
        <section aria-labelledby="preview-section-heading" className="space-y-4">
          
          <div className="flex items-center justify-between border-b border-[#D8D2D4] pb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                {viewMode === 'blueprint' 
                  ? '[RESOURCE PREVIEW / IMAGE / VIDEO IF APPLICABLE]' 
                  : 'RESOURCE PREVIEW & SPECIFICATIONS'}
              </span>
            </div>

            {/* Preview View Tabs */}
            <div className="inline-flex bg-white rounded-lg p-1 border border-[#D8D2D4] text-xs font-mono">
              <button
                onClick={() => setActivePreviewTab('preview')}
                className={`px-3 py-1 rounded-md font-bold transition cursor-pointer ${
                  activePreviewTab === 'preview'
                    ? 'bg-[#0D9BA3] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#3A2E29]'
                }`}
              >
                Visual Preview
              </button>
              <button
                onClick={() => setActivePreviewTab('specs')}
                className={`px-3 py-1 rounded-md font-bold transition cursor-pointer ${
                  activePreviewTab === 'specs'
                    ? 'bg-[#0D9BA3] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#3A2E29]'
                }`}
              >
                Document Specs
              </button>
              {resource.deliveryMethod === 'copy_prompt' && (
                <button
                  onClick={() => setActivePreviewTab('curriculum')}
                  className={`px-3 py-1 rounded-md font-bold transition cursor-pointer ${
                    activePreviewTab === 'curriculum'
                      ? 'bg-[#0D9BA3] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-[#3A2E29]'
                  }`}
                >
                  Prompt Text
                </button>
              )}
            </div>
          </div>

          {/* Visual Canvas / Frame */}
          <div className="bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] p-6 sm:p-8 shadow-xs">
            
            {activePreviewTab === 'preview' ? (
              <div className="space-y-6">
                
                {/* Media Image / Interactive Mockup */}
                <div className="relative rounded-2xl overflow-hidden border border-[#D8D2D4] shadow-sm aspect-video sm:aspect-21/9 bg-slate-900 flex items-center justify-center group">
                  <img
                    src={resource.previewImageUrl || resource.thumbnailUrl || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80'}
                    alt={resource.thumbnailAlt || resource.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Overlay badge / trigger */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white space-y-2">
                    <div className="inline-flex items-center space-x-2 bg-[#0D9BA3] px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider self-start">
                      <span>{resource.format}</span>
                      <span>•</span>
                      <span>{resource.estimatedTimeOrPages}</span>
                    </div>
                    <p className="text-sm sm:text-base font-medium max-w-2xl text-slate-200">
                      Verified for current Florida Association of Realtors & Florida Bar (FAR/BAR) standard and AS IS forms.
                    </p>
                  </div>

                  {resource.deliveryMethod === 'class_registration' && (
                    <button
                      onClick={handlePrimaryAction}
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#FE7311] hover:bg-[#e05f03] text-white flex items-center justify-center shadow-xl hover:scale-110 transition cursor-pointer"
                      title="Play Preview"
                    >
                      <PlayCircle className="w-8 h-8" />
                    </button>
                  )}
                </div>

              </div>
            ) : activePreviewTab === 'specs' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                  <div className="text-slate-400 uppercase font-bold">Catalog Registration</div>
                  <div className="text-[#3A2E29] font-bold text-sm">{resource.catalogId}</div>
                  <div className="text-slate-500">Hometown TC Archival File Registry</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                  <div className="text-slate-400 uppercase font-bold">Document Version</div>
                  <div className="text-[#3A2E29] font-bold text-sm">v2.4 (Florida 2025 Release)</div>
                  <div className="text-slate-500">Updated for standard inspection windows</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                  <div className="text-slate-400 uppercase font-bold">Access Requirements</div>
                  <div className="text-emerald-700 font-bold text-sm">Open Desk Access (Free)</div>
                  <div className="text-slate-500">Zero subscriptions or licensing fees</div>
                </div>
              </div>
            ) : (
              <div className="bg-[#EEEAEB] p-5 rounded-xl border border-[#D8D2D4] font-mono text-xs text-slate-800 whitespace-pre-wrap max-h-96 overflow-y-auto">
                {resource.promptContent || 'No prompt content available.'}
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. [WHAT THIS RESOURCE HELPS WITH]                                        */}
        {/* ========================================================================= */}
        <section aria-labelledby="helps-with-heading" className="space-y-5">
          
          <div className="flex items-center space-x-2 border-b border-[#D8D2D4] pb-3">
            <CheckCircle2 className="w-4 h-4 text-[#0D9BA3]" />
            <h2 id="helps-with-heading" className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
              {viewMode === 'blueprint' 
                ? '[WHAT THIS RESOURCE HELPS WITH]' 
                : 'WHAT THIS RESOURCE HELPS WITH'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(resource.whatThisHelpsWith || resource.highlights).map((benefit, bIdx) => (
              <div 
                key={bIdx}
                className="bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] p-6 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-mono font-bold text-xs">
                    0{bIdx + 1}
                  </div>
                  <p className="text-sm font-montserrat font-bold text-[#3A2E29] leading-snug">
                    {benefit}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-slate-500 border-t border-[#D8D2D4]/60">
                  Direct operational outcome
                </div>
              </div>
            ))}
          </div>

          {/* Key Checklist Points / Included Content */}
          {resource.highlights && resource.highlights.length > 0 && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-xs space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                WHAT IS INCLUDED IN THIS FILE:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {resource.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-2.5 p-2 bg-[#FAF8F5] rounded-xl border border-[#D8D2D4]/60">
                    <Check className="w-4 h-4 text-[#0D9BA3] shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </section>

        {/* ========================================================================= */}
        {/* 4.5 CRAWLABLE OPERATIONAL EXPLAINER & STATUTORY CONTEXT (SEO + AEO)      */}
        {/* ========================================================================= */}
        <section aria-labelledby="resource-deep-dive-heading" className="bg-[#FAF8F5] rounded-2xl sm:rounded-3xl border border-[#D8D2D4] p-6 sm:p-10 shadow-xs space-y-8">
          
          <div className="flex items-center space-x-2 border-b border-[#D8D2D4] pb-4">
            <ShieldCheck className="w-5 h-5 text-[#0D9BA3]" />
            <h2 id="resource-deep-dive-heading" className="text-sm font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
              OPERATIONAL SPECIFICATIONS & FLORIDA STATUTORY CONTEXT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Full Explanatory Narrative for Search Engines and AI Grounding */}
            <div className="lg:col-span-8 space-y-6 text-sm text-slate-700 leading-relaxed">
              
              <div className="space-y-2.5">
                <h3 className="font-montserrat font-extrabold text-lg text-[#3A2E29]">
                  What {resource.title} Does
                </h3>
                <p>
                  {resource.fullDescription || resource.shortDescription} Designed to integrate seamlessly into active Florida transaction files, this resource establishes rigid procedural guardrails for solo Realtors, listing specialists, and multi-agent teams.
                </p>
                <p>
                  Rather than relying on generic nationwide checklists or high-level summaries, this tool accounts for the specific day-computation statutes, Florida Real Estate Commission (FREC) broker audit retention requirements, and DBPR administrative standards governing Florida residential sales.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <h3 className="font-montserrat font-extrabold text-lg text-[#3A2E29]">
                  Florida Statutory & Contractual Framework
                </h3>
                <p>
                  Florida transactions operate under strict contractual conditions. Miscounting an inspection window under Standard F of the FAR/BAR contract or failing to document a second deposit verification letter under Florida Statute 475.25 can expose an earnest money deposit to immediate legal forfeiture or commission dispute.
                </p>
                <p>
                  This resource provides clear operational checkpoints to ensure that title commitments, municipal lien searches, HOA estoppel certificates, and statutory property disclosures are tracked and verified before contingency windows close.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <h3 className="font-montserrat font-extrabold text-lg text-[#3A2E29]">
                  Step-by-Step Implementation Guide
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium">
                  <li>
                    <strong className="text-[#3A2E29]">Onboarding & Intake:</strong> Open this file at the moment of mutual contract acceptance or pre-listing authorization.
                  </li>
                  <li>
                    <strong className="text-[#3A2E29]">Milestone Calculation:</strong> Cross-reference effective dates with standard Florida calendar calculation rules (excluding legal holidays and weekends when applicable under Paragraph 5/Standard F).
                  </li>
                  <li>
                    <strong className="text-[#3A2E29]">Stakeholder Distribution:</strong> Share key verification requirements with your closing title company, buyer/seller clients, and cooperating brokers.
                  </li>
                  <li>
                    <strong className="text-[#3A2E29]">Broker File Compliance:</strong> Archive all completed checklists, escrow receipts, and signed notices for the statutory 5-year FREC record retention mandate.
                  </li>
                </ol>
              </div>

            </div>

            {/* Right Column: Quick Specifications & Key Safeguards */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#D8D2D4] p-5 sm:p-6 space-y-4 shadow-2xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3A2E29] block border-b border-slate-200 pb-2">
                CRITICAL SAFEGUARDS AUDIT
              </span>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#D8D2D4]/70 space-y-1">
                  <div className="font-bold text-[#3A2E29]">Escrow Protection</div>
                  <div className="text-slate-600">Verifies timely deposit receipt and avoids unilateral default notices.</div>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#D8D2D4]/70 space-y-1">
                  <div className="font-bold text-[#3A2E29]">Standard F Calendar Tracking</div>
                  <div className="text-slate-600">Eliminates missed 5:00 PM Sunday and national holiday rollover traps.</div>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#D8D2D4]/70 space-y-1">
                  <div className="font-bold text-[#3A2E29]">FREC Audit Readiness</div>
                  <div className="text-slate-600">Maintains complete documentation trails for state licensing audits.</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handlePrimaryAction}
                  className="w-full bg-[#0D9BA3] hover:bg-[#0b868d] text-white py-3 px-4 rounded-xl text-xs font-montserrat font-bold uppercase tracking-wider transition cursor-pointer text-center"
                >
                  ACCESS RESOURCE NOW
                </button>
              </div>
            </div>

          </div>

        </section>

        {/* ========================================================================= */}
        {/* 5. [RELATED HOMETOWN BRIEF ARTICLES]                                      */}
        {/* ========================================================================= */}
        {relatedBriefs.length > 0 && (
          <section aria-labelledby="related-briefs-heading" className="space-y-5">
            
            <div className="flex items-center justify-between border-b border-[#D8D2D4] pb-3">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-[#0D9BA3]" />
                <h2 id="related-briefs-heading" className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                  {viewMode === 'blueprint' 
                    ? '[RELATED HOMETOWN BRIEF ARTICLES]' 
                    : 'RELATED HOMETOWN BRIEF ARTICLES'}
                </h2>
              </div>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                OPERATIONAL ANSWERS & STATUTORY CONTEXT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedBriefs.map((brief, bIdx) => (
                <article
                  key={bIdx}
                  onClick={() => onNavigate ? onNavigate(`/resources/${brief.slug}/`) : undefined}
                  className="bg-white rounded-2xl border border-[#D8D2D4] p-6 shadow-xs hover:border-[#0D9BA3] transition cursor-pointer group flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#0D9BA3] font-bold uppercase">{brief.category}</span>
                      <span className="text-slate-400">{brief.readTime}</span>
                    </div>
                    <h3 className="font-montserrat font-extrabold text-base sm:text-lg text-[#3A2E29] group-hover:text-[#0D9BA3] transition leading-snug">
                      {brief.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {brief.shortSummary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D8D2D4] flex items-center justify-between text-xs font-bold transition">
                    <span className="text-[11px] font-mono text-slate-500">Want the explanation behind the tool?</span>
                    <span className="font-montserrat font-extrabold uppercase tracking-wider flex items-center space-x-1 text-[#0D9BA3] group-hover:text-[#FE7311]">
                      <span>READ THE BRIEF</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* 6. [RELATED HTC SERVICE RECOMMENDATION]                                   */}
        {/* ========================================================================= */}
        {resource.relatedService && (
          <div className="bg-[#FAF8F5] rounded-2xl border-2 border-slate-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-bold text-[#FE7311] uppercase tracking-wider">
                NEED FULL DELEGATION?
              </div>
              <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
                Let Hometown TC Manage Your {resource.relatedService.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {resource.relatedService.description || 'Reclaim valuable production hours on every transaction. Our Florida transaction coordinators handle all buyer/seller communications, escrow verifications, deadline reminders, and compliance audits.'}
              </p>
            </div>

            <button
              onClick={onExploreServices}
              className="bg-[#3A2E29] hover:bg-[#2B231F] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-sm whitespace-nowrap"
            >
              EXPLORE {resource.relatedService.name.toUpperCase()} →
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 7. [RELATED RESOURCES]                                                    */}
        {/* ========================================================================= */}
        {relatedResources.length > 0 && (
          <section aria-labelledby="related-resources-heading" className="space-y-5">
            
            <div className="flex items-center justify-between border-b border-[#D8D2D4] pb-3">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-[#0D9BA3]" />
                <h2 id="related-resources-heading" className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                  {viewMode === 'blueprint' 
                    ? '[RELATED RESOURCES]' 
                    : 'MORE RELATED TOOLS & DOWNLOADS'}
                </h2>
              </div>
              <button
                onClick={onBackToLibrary}
                className="text-xs font-mono font-bold text-[#0D9BA3] hover:underline"
              >
                View Full Library ({RESOURCE_LIBRARY_ITEMS.length} Files) →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedResources.map((relItem) => {
                const relMarker = getTypeMarkerInfo(relItem.resourceType);
                return (
                  <article
                    key={relItem.id}
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate(`/resources/free-guides-downloads/${relItem.slug}/`);
                      }
                    }}
                    className="bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] p-5 shadow-2xs hover:border-[#0D9BA3] transition cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className={`border ${relMarker.stampBorder} ${relMarker.stampBg} ${relMarker.stampText} px-2 py-0.5 rounded-xs font-black uppercase`}>
                          {relMarker.marker}
                        </span>
                        <span className="text-slate-400">{relItem.catalogId}</span>
                      </div>
                      <h3 className="font-montserrat font-extrabold text-base text-[#3A2E29] group-hover:text-[#0D9BA3] transition leading-snug">
                        {relItem.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {relItem.shortDescription}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#D8D2D4] flex items-center justify-between text-xs font-mono font-bold text-[#0D9BA3] group-hover:text-[#FE7311]">
                      <span>{getAppropriateCTA(relItem)}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                );
              })}
            </div>

          </section>
        )}

        {/* ========================================================================= */}
        {/* 7. REUSABLE NEWSLETTER SIGNUP                                             */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D8D2D4] p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
              <span>STAY IN THE LOOP</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29]">
              Never Miss a Florida Contract Update or Tool
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Every Wednesday morning, we send one practical breakdown of Florida contract changes, new templates, and field insights from our transaction desk.
            </p>
            <div className="pt-2">
              <NewsletterSignup 
                variant="card" 
                source={`Resource Landing Page: ${resource.title}`}
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 8. SECTION 10 — FINAL CTA                                                 */}
        {/* ========================================================================= */}
        <Section10FinalCta
          onBookCall={onBookCall}
          onExploreServices={onExploreServices}
          viewMode={viewMode}
        />

      </main>

      {/* Download / Access Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 bg-[#3A2E29]/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white border border-[#D8D2D4] rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#3A2E29] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                HTC INSTANT RESOURCE ACCESS
              </span>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                {resource.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                {resource.format} • {resource.estimatedTimeOrPages}
              </p>
            </div>

            {downloadSubmitted ? (
              <div className="bg-[#0D9BA3]/10 border border-[#0D9BA3]/30 rounded-xl p-5 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#0D9BA3] mx-auto" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                  DISPATCH CONFIRMED
                </p>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  We have prepared the download for <span className="font-bold">{downloadEmail}</span>. The file link is ready below.
                </p>
                <div className="pt-2">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Download simulation started. In production, this delivers the file directly.');
                      setDownloadModalOpen(false);
                    }}
                    className="w-full bg-[#0D9BA3] hover:bg-[#0b8289] text-white py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition inline-block text-center shadow-xs"
                  >
                    DOWNLOAD PDF FILE NOW
                  </a>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (downloadEmail) setDownloadSubmitted(true);
                }} 
                className="space-y-4"
              >
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

                <div className="text-[11px] text-slate-500 flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  <span>Free Florida practical toolkit. Zero spam policy.</span>
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

    </div>
  );
};
