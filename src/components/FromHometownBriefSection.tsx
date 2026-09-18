import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  Layers, 
  Clock, 
  CheckCircle2, 
  X, 
  Scale, 
  Wrench,
  ChevronRight,
  ShieldCheck,
  Bookmark
} from 'lucide-react';
import { 
  HOMETOWN_BRIEF_ARTICLES, 
  HometownBriefArticle, 
  getCuratedHometownBriefs 
} from '../data/hometownBriefConnections';

interface FromHometownBriefSectionProps {
  viewMode: 'blueprint' | 'live' | 'production';
  onNavigate?: (path: string) => void;
  onSelectResource?: (resourceId: string) => void;
}

export const FromHometownBriefSection: React.FC<FromHometownBriefSectionProps> = ({
  viewMode: initialViewMode,
  onNavigate,
  onSelectResource
}) => {
  const [activeBrief, setActiveBrief] = useState<HometownBriefArticle | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('Curated Contexts (Top 3)');
  const [localBlueprintOverride, setLocalBlueprintOverride] = useState<boolean | null>(null);

  const effectiveBlueprintMode = localBlueprintOverride !== null 
    ? localBlueprintOverride 
    : initialViewMode === 'blueprint';

  // Available topic filters
  const topics = [
    'Curated Contexts (Top 3)',
    'Contracts + Forms',
    'Condo + HOA',
    'Broker Compliance',
    'All Briefs'
  ];

  const displayedBriefs = React.useMemo(() => {
    if (selectedTopic === 'Curated Contexts (Top 3)') {
      return getCuratedHometownBriefs();
    }
    if (selectedTopic === 'All Briefs') {
      return HOMETOWN_BRIEF_ARTICLES;
    }
    return HOMETOWN_BRIEF_ARTICLES.filter(b => b.category.toLowerCase().includes(selectedTopic.toLowerCase().split(' ')[0]));
  }, [selectedTopic]);

  const handleReadBrief = (brief: HometownBriefArticle) => {
    setActiveBrief(brief);
  };

  const handleCompanionToolClick = (resourceId: string) => {
    // If a companion resource handler is passed, call it; otherwise try to scroll to resource or library
    if (onSelectResource) {
      onSelectResource(resourceId);
    } else {
      const el = document.getElementById(resourceId) || document.getElementById('section-resource-library') || document.getElementById('section-ai-automation');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (activeBrief) {
      setActiveBrief(null);
    }
  };

  const handleOpenFullArticle = (brief: HometownBriefArticle) => {
    if (onNavigate) {
      onNavigate(`/resources/${brief.categorySlug}/${brief.slug}/`);
    } else {
      window.location.href = `/resources/${brief.categorySlug}/${brief.slug}/`;
    }
  };

  return (
    <section 
      id="section-from-hometown-brief" 
      aria-labelledby="hometown-brief-heading" 
      className="space-y-7 pt-4 pb-2"
    >
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER: Eyebrow + Title + Operational Philosophy              */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D8D2D4] pb-5">
        <div className="space-y-2">
          {/* Requested Eyebrow: WANT THE CONTEXT? */}
          <div className="flex items-center space-x-2.5">
            <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-2.5 py-1 rounded-md border border-[#0D9BA3]/25">
              <BookOpen className="w-3.5 h-3.5 text-[#0D9BA3]" />
              <span>WANT THE CONTEXT?</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
              SECTION 8 — FROM THE HOMETOWN BRIEF
            </span>
          </div>

          {/* Requested Title: Read the Brief Behind the Tool. */}
          <h2 
            id="hometown-brief-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight"
          >
            Read the Brief Behind the Tool.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
            The Resource Library and our blog connect directly. Every checklist, prompt, and calculator is grounded in real Florida statutes and field scenarios. Read the operational brief behind the tool to understand the legal mechanics and avoid costly contract mistakes.
          </p>
        </div>

        {/* Blueprint Mode Toggle */}
        <div className="flex items-center space-x-3 self-start md:self-end shrink-0">
          
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TOPIC FILTER PILLS (Defaults to Curated Top 3 Contexts)               */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-thin">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 hidden lg:inline">
            CURATED BRIEF VIEW:
          </span>
          {topics.map((t) => {
            const isSelected = selectedTopic === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTopic(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#3A2E29] text-white border-[#3A2E29] shadow-2xs'
                    : 'bg-white text-slate-600 border-[#D8D2D4] hover:border-slate-400 hover:text-[#3A2E29]'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Total Articles Link to Blog Archive */}
        {onNavigate && (
          <button
            type="button"
            onClick={() => onNavigate('/resources/')}
            className="text-xs font-mono text-[#0D9BA3] hover:underline font-bold inline-flex items-center space-x-1 shrink-0 cursor-pointer"
          >
            <span>View All Briefs Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Internal Content Network Banner */}
      <div className="bg-white border border-[#D8D2D4] rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center space-x-3 text-slate-700">
          <div className="p-2 bg-[#FE7311]/10 text-[#FE7311] rounded-lg shrink-0">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <strong className="font-bold text-[#3A2E29] font-montserrat">Bidirectional Content Network: </strong>
            <span className="text-slate-600">Every brief links back to its companion download or calculator, and every library resource connects to its governing Florida legal brief.</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-1.5 text-[11px] font-mono text-slate-500 shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9BA3]" />
          <span>FLORIDA STATUTORY GROUNDING</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. 2–3 RELATED HOMETOWN BRIEF CARDS                                       */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedBriefs.map((brief) => {
          return (
            <article
              key={brief.id}
              className="bg-white rounded-2xl border border-[#D8D2D4] hover:border-slate-400 p-5 sm:p-6 flex flex-col justify-between transition-all duration-150 relative group shadow-2xs hover:shadow-xs"
            >
              <div className="space-y-3.5">
                {/* Desk Code + Read Time */}
                <div className="flex items-center justify-between gap-2 border-b border-[#D8D2D4]/70 pb-2.5">
                  <span className="font-mono text-[10px] font-bold text-[#0D9BA3] bg-[#0D9BA3]/10 px-2 py-0.5 rounded uppercase">
                    {brief.deskCode}
                  </span>
                  <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-400 font-semibold uppercase">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{brief.readTime}</span>
                  </div>
                </div>

                {/* Brief Title */}
                <div>
                  <h3 
                    onClick={() => handleReadBrief(brief)}
                    className="font-montserrat font-extrabold text-base text-[#3A2E29] group-hover:text-[#0D9BA3] transition-colors leading-snug cursor-pointer"
                  >
                    {effectiveBlueprintMode ? brief.placeholderTitle : brief.title}
                  </h3>
                </div>

                {/* [SHORT SUMMARY] */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {effectiveBlueprintMode ? brief.placeholderShortSummary : brief.shortSummary}
                </p>

                {/* Legal Citation Tag */}
                <div className="pt-1">
                  <span className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-wider block">
                    STATUTORY GROUNDING:
                  </span>
                  <span className="text-[11px] font-mono text-[#3A2E29] font-bold block truncate">
                    {brief.legalCitation}
                  </span>
                </div>

                {/* Connected Library Resource Link (Bidirectional Network) */}
                <div className="p-3 bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl space-y-1.5 transition-colors group-hover:border-[#0D9BA3]/40">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    <span>COMPANION RESOURCE:</span>
                    <span className="text-[#0D9BA3]">{brief.companionResourceStamp}</span>
                  </div>
                  <p className="text-xs font-bold text-[#3A2E29] line-clamp-1 font-montserrat">
                    {brief.companionResourceTitle}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCompanionToolClick(brief.companionResourceId)}
                    className="text-[11px] font-mono font-bold text-[#FE7311] hover:underline inline-flex items-center space-x-1 cursor-pointer"
                  >
                    <span>{brief.companionResourceCta}</span>
                  </button>
                </div>
              </div>

              {/* Primary Card Action: READ THE BRIEF → */}
              <div className="pt-4 mt-4 border-t border-[#D8D2D4]">
                <button
                  type="button"
                  onClick={() => handleReadBrief(brief)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-150 cursor-pointer shadow-2xs flex items-center justify-center space-x-2 bg-[#3A2E29] hover:bg-[#2B231F] text-white"
                >
                  <span>
                    {effectiveBlueprintMode ? brief.placeholderActionCta : brief.actionCta}
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE BRIEF READER MODAL WITH DIRECT RESOURCE RETURN LINK        */}
      {/* ========================================================================= */}
      {activeBrief && (
        <div 
          className="fixed inset-0 bg-[#3A2E29]/75 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brief-modal-title"
        >
          <div className="bg-white border border-[#D8D2D4] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative my-auto">
            
            {/* Modal Top Bar */}
            <div className="bg-[#FAF8F5] px-6 py-4 border-b border-[#D8D2D4] flex items-center justify-between shrink-0">
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] font-bold text-[#0D9BA3] bg-[#0D9BA3]/10 px-2 py-0.5 rounded uppercase">
                    {activeBrief.deskCode}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase">
                    {activeBrief.readTime}
                  </span>
                </div>
                <h3 id="brief-modal-title" className="text-lg font-montserrat font-extrabold text-[#3A2E29]">
                  {activeBrief.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveBrief(null)}
                className="text-slate-400 hover:text-[#3A2E29] p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-6 space-y-5">
              
              {/* "THE BRIEF" Direct-Answer Box */}
              <div className="bg-[#0D9BA3]/5 border-2 border-[#0D9BA3]/30 rounded-xl p-4 space-y-2">
                <div className="flex items-center space-x-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
                  <Scale className="w-3.5 h-3.5" />
                  <span>THE BRIEF — EXECUTIVE TAKEAWAY</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {activeBrief.theBriefTakeaway}
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Governing Authority: <strong className="text-[#3A2E29]">{activeBrief.legalCitation}</strong>
                </div>
              </div>

              {/* Full Context Summary */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  OPERATIONAL CONTEXT & BACKGROUND:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeBrief.shortSummary}
                </p>
              </div>

              {/* Bidirectional Companion Resource Callout Box */}
              <div className="bg-[#FAF8F5] border-2 border-[#FE7311]/40 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#FE7311]">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>TOOL BUILT SPECIFICALLY FOR THIS SCENARIO</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                    {activeBrief.companionResourceStamp}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#3A2E29] font-montserrat">
                  {activeBrief.companionResourceTitle}
                </p>
                <p className="text-xs text-slate-600">
                  Put this brief into practice immediately using our free resource.
                </p>
                <button
                  type="button"
                  onClick={() => handleCompanionToolClick(activeBrief.companionResourceId)}
                  className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition cursor-pointer shadow-2xs inline-flex items-center space-x-2"
                >
                  <span>{activeBrief.companionResourceCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="bg-[#FAF8F5] px-6 py-3.5 border-t border-[#D8D2D4] flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] font-mono text-slate-500">
                The Hometown Brief • Florida Transaction Desk
              </span>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handleOpenFullArticle(activeBrief)}
                  className="bg-[#3A2E29] hover:bg-[#2B231F] text-white px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition cursor-pointer shadow-2xs flex items-center space-x-1.5"
                >
                  <span>READ FULL BRIEF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveBrief(null)}
                  className="bg-white border border-[#D8D2D4] hover:border-slate-400 text-[#3A2E29] px-4 py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
