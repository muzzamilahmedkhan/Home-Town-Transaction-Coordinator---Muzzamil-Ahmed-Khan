import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Code, 
  Copy, 
  Check, 
  ExternalLink, 
  ArrowRight, 
  FileText, 
  Wrench, 
  CheckCircle2, 
  X, 
  Layers, 
  SlidersHorizontal,
  ChevronRight,
  BookOpen,
  Calendar,
  FolderDown,
  Info
} from 'lucide-react';
import { 
  AI_AUTOMATION_RESOURCES, 
  AI_AUTOMATION_CATEGORIES, 
  AiAutomationType, 
  AiAutomationItem 
} from '../data/aiAutomationData';

interface AiAutomationSectionProps {
  viewMode: 'blueprint' | 'live' | 'production';
  onNavigate?: (path: string) => void;
  onOpenCalculator?: () => void;
}

export const AiAutomationSection: React.FC<AiAutomationSectionProps> = ({
  viewMode: initialViewMode,
  onNavigate,
  onOpenCalculator
}) => {
  const [selectedCategory, setSelectedCategory] = useState<AiAutomationType>('All Resources');
  const [activeItem, setActiveItem] = useState<AiAutomationItem | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);
  const [localBlueprintOverride, setLocalBlueprintOverride] = useState<boolean | null>(null);

  const effectiveBlueprintMode = localBlueprintOverride !== null 
    ? localBlueprintOverride 
    : initialViewMode === 'blueprint';

  const filteredResources = AI_AUTOMATION_RESOURCES.filter((res) => {
    if (selectedCategory === 'All Resources') return true;
    return res.category === selectedCategory;
  });

  const handleActionClick = (item: AiAutomationItem) => {
    // If it's the interactive calculator tool and an onOpenCalculator handler is available
    if (item.id === 'tool-tool-01' && onOpenCalculator) {
      onOpenCalculator();
      return;
    }
    setActiveItem(item);
    setCopiedSnippet(false);
  };

  const handleCopySnippet = () => {
    if (activeItem?.snippetContent) {
      navigator.clipboard.writeText(activeItem.snippetContent);
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 3000);
    }
  };

  return (
    <section 
      id="section-ai-automation" 
      aria-labelledby="ai-automation-heading" 
      className="space-y-7 pt-4 pb-2"
    >
      {/* ========================================================================= */}
      {/* 1. SECTION HEADER: Eyebrow + Title + Editorial Philosophy Tagline          */}
      {/* ========================================================================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#D8D2D4] pb-5">
        <div className="space-y-2">
          {/* Requested Eyebrow: WORK SMARTER */}
          <div className="flex items-center space-x-2.5">
            <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#0D9BA3]/10 px-2.5 py-1 rounded-md border border-[#0D9BA3]/25">
              <Wrench className="w-3.5 h-3.5 text-[#0D9BA3]" />
              <span>WORK SMARTER</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
              SECTION 7 — AI + AUTOMATION RESOURCES
            </span>
          </div>

          {/* Requested Title: AI + Automation You Can Actually Use */}
          <h2 
            id="ai-automation-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight"
          >
            AI + Automation You Can Actually Use
          </h2>

          {/* Requested Core Philosophy: Useful tool. Easier work. */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <span className="font-mono text-xs font-bold text-[#FE7311] uppercase tracking-wider bg-[#FE7311]/10 px-2 py-0.5 rounded border border-[#FE7311]/20">
              Useful tool. Easier work.
            </span>
            <span className="text-xs text-slate-600 font-normal">
              Practical prompt packs, lightweight Apps Script tools, and clear SOPs built for real Florida transactions — no complicated tech jargon.
            </span>
          </div>
        </div>

        {/* Action Controls: Blueprint Mode Toggle */}
        <div className="flex items-center space-x-3 self-start md:self-end shrink-0">
          
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTER NAVIGATION PILLS                                       */}
      {/* Categories: Prompt Packs, Apps Script, Templates, Tools, Workflow SOPs    */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-thin">
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-1 hidden lg:inline">
            TOOL TYPE:
          </span>
          {AI_AUTOMATION_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All Resources' 
              ? AI_AUTOMATION_RESOURCES.length 
              : AI_AUTOMATION_RESOURCES.filter(r => r.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#3A2E29] text-white border-[#3A2E29] shadow-2xs'
                    : 'bg-white text-slate-600 border-[#D8D2D4] hover:border-slate-400 hover:text-[#3A2E29]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Design Note: Editorial & Resource Aesthetic (No AI Hype / No Neon Robots) */}
      <div className="bg-white border border-[#D8D2D4] rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center space-x-3 text-slate-700">
          <div className="p-2 bg-[#0D9BA3]/10 text-[#0D9BA3] rounded-lg shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <strong className="font-bold text-[#3A2E29] font-montserrat">Field-Tested Automation Architecture: </strong>
            <span className="text-slate-600">Every script, prompt, and template runs on standard tools you already have (Google Workspace, ChatGPT, or your web browser). Zero software installation required.</span>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-1.5 text-[11px] font-mono text-slate-500 shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9BA3]" />
          <span>100% FREE REALTOR TOOLS</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. AI & AUTOMATION CARDS GRID (Editorial Desk Aesthetic)                  */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.map((item) => {
          return (
            <article
              key={item.id}
              className={`bg-white rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-150 relative group ${
                item.isFlagship
                  ? 'border-[#0D9BA3]/60 shadow-xs ring-1 ring-[#0D9BA3]/20 hover:border-[#0D9BA3]'
                  : 'border-[#D8D2D4] hover:border-slate-400 hover:shadow-xs'
              }`}
            >
              {/* Card Top Row: Catalog ID + Type Badge */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold text-slate-500 bg-[#FAF8F5] border border-[#D8D2D4] px-2 py-0.5 rounded uppercase">
                    {item.catalogId}
                  </span>
                  <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    item.category === 'AI Prompt Packs' 
                      ? 'bg-[#0D9BA3]/10 text-[#0D9BA3]' 
                      : item.category === 'Apps Script Walkthroughs'
                      ? 'bg-[#FE7311]/10 text-[#FE7311]'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Card Title & Placeholders */}
                <div>
                  <div className="font-mono text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {item.formatDuration}
                  </div>
                  <h3 
                    onClick={() => handleActionClick(item)}
                    className="font-montserrat font-extrabold text-base text-[#3A2E29] group-hover:text-[#0D9BA3] transition-colors leading-snug cursor-pointer"
                  >
                    {effectiveBlueprintMode ? item.placeholderTitle : item.title}
                  </h3>
                </div>

                {/* [WHAT THIS HELPS THE AGENT DO] Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {effectiveBlueprintMode ? item.placeholderWhatThisHelpsAgentDo : item.whatThisHelpsAgentDo}
                </p>

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-2 border-t border-[#D8D2D4]/70 text-[11px] text-slate-600 font-medium">
                  {item.highlights.slice(0, 2).map((hl, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#0D9BA3] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Button: GET THE PROMPT → / BUILD THE TOOL → / VIEW THE GUIDE → */}
              <div className="pt-4 mt-4 border-t border-[#D8D2D4]">
                <button
                  type="button"
                  onClick={() => handleActionClick(item)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-150 cursor-pointer shadow-2xs flex items-center justify-center space-x-2 ${
                    item.actionCta === 'GET THE PROMPT →'
                      ? 'bg-[#0D9BA3] hover:bg-[#0b8289] text-white'
                      : item.actionCta === 'BUILD THE TOOL →'
                      ? 'bg-[#3A2E29] hover:bg-[#2B231F] text-white'
                      : 'bg-[#FE7311] hover:bg-[#e05f03] text-white'
                  }`}
                >
                  <span>
                    {effectiveBlueprintMode ? item.placeholderActionCta : item.actionCta}
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE TOOL, PROMPT & WALKTHROUGH MODAL                            */}
      {/* ========================================================================= */}
      {activeItem && (
        <div 
          className="fixed inset-0 bg-[#3A2E29]/75 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tool-modal-title"
        >
          <div className="bg-white border border-[#D8D2D4] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative my-auto">
            
            {/* Modal Header */}
            <div className="bg-[#FAF8F5] px-6 py-4 border-b border-[#D8D2D4] flex items-center justify-between shrink-0">
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] font-bold text-[#0D9BA3] bg-[#0D9BA3]/10 px-2 py-0.5 rounded uppercase">
                    {activeItem.catalogId}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="font-mono text-[11px] text-slate-500 font-semibold uppercase">
                    {activeItem.category}
                  </span>
                </div>
                <h3 id="tool-modal-title" className="text-lg font-montserrat font-extrabold text-[#3A2E29]">
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="text-slate-400 hover:text-[#3A2E29] p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto flex-1 p-6 space-y-5">
              
              {/* What this helps you do */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  WHAT THIS HELPS THE AGENT DO:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {activeItem.whatThisHelpsAgentDo}
                </p>
              </div>

              {/* Prerequisites */}
              <div className="bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl p-3.5 flex items-center space-x-3 text-xs text-slate-600">
                <Info className="w-4 h-4 text-[#0D9BA3] shrink-0" />
                <div>
                  <strong className="font-bold text-[#3A2E29]">Tool Requirements: </strong>
                  <span>{activeItem.prerequisites}</span>
                </div>
              </div>

              {/* Code Snippet / Prompt Text Box */}
              {activeItem.snippetContent && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {activeItem.category === 'AI Prompt Packs' ? 'PROMPT TEXT (READY TO COPY):' : 'APPS SCRIPT CODE (READY TO PASTE):'}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopySnippet}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-[#0D9BA3] hover:underline cursor-pointer"
                    >
                      {copiedSnippet ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">COPIED TO CLIPBOARD!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY TO CLIPBOARD</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-[#1F1916] rounded-xl p-4 text-xs font-mono text-emerald-300 leading-relaxed whitespace-pre-wrap max-h-64 overflow-y-auto border border-black/20 shadow-inner">
                    {activeItem.snippetContent}
                  </div>
                </div>
              )}

              {/* Step-by-Step Walkthrough Steps */}
              {activeItem.guideSteps && activeItem.guideSteps.length > 0 && (
                <div className="space-y-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    STEP-BY-STEP IMPLEMENTATION:
                  </span>
                  <div className="space-y-2.5">
                    {activeItem.guideSteps.map((step) => (
                      <div 
                        key={step.stepNumber}
                        className="bg-[#FAF8F5] border border-[#D8D2D4] rounded-xl p-3.5 flex items-start space-x-3 text-xs"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#3A2E29] text-white flex items-center justify-center font-mono font-bold shrink-0 mt-0.5 text-[10px]">
                          {step.stepNumber}
                        </div>
                        <div className="space-y-0.5">
                          <p className="font-bold text-[#3A2E29] font-montserrat">
                            {step.title}
                          </p>
                          <p className="text-slate-600 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights & Benefits */}
              <div className="space-y-2 pt-2 border-t border-[#D8D2D4]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  KEY FEATURES & SAFEGUARDS:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeItem.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9BA3] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="bg-[#FAF8F5] px-6 py-3.5 border-t border-[#D8D2D4] flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] font-mono text-slate-500">
                HTC Automation Desk • Open Source for Florida Realtors
              </span>

              <div className="flex items-center space-x-2">
                {activeItem.snippetContent && (
                  <button
                    type="button"
                    onClick={handleCopySnippet}
                    className="bg-[#0D9BA3] hover:bg-[#0b8289] text-white px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition cursor-pointer shadow-2xs flex items-center space-x-1.5"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY SNIPPET</span>
                      </>
                    )}
                  </button>
                )}
                
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
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
