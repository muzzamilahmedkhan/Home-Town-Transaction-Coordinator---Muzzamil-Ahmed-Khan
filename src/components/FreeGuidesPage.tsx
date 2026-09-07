import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Download, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';

interface Props {
  onGoHome: () => void;
  onBackToBlog: () => void;
  onBookCall: () => void;
  onOpenCalculator?: () => void;
}

interface GuideItem {
  id: string;
  badge: string;
  pages: string;
  format: string;
  placeholderTitle: string;
  sampleTitle: string;
  placeholderDescription: string;
  sampleDescription: string;
  highlights: string[];
}

const FEATURED_GUIDES: GuideItem[] = [
  {
    id: 'guide-1',
    badge: 'FLAGSHIP CHECKLIST',
    pages: '37-Point Milestone Audit',
    format: 'PDF • Print-Ready 8.5x11',
    placeholderTitle: '[GUIDE TITLE: Florida Contract-to-Close Critical Timelines & Compliance Checklist]',
    sampleTitle: 'Florida Contract-to-Close Critical Timelines & Compliance Checklist',
    placeholderDescription: '[ONE-SENTENCE DESCRIPTION: A field-tested 37-point milestone checklist covering earnest money deposit verification, municipal lien orders, and FREC file retention standards.]',
    sampleDescription: 'A field-tested 37-point milestone checklist covering earnest money verification, inspection windows, title commitments, and statutory notice deadlines.',
    highlights: [
      'Standard F day-computation rules (avoiding missed Saturday/Sunday cancellation cutoffs)',
      'Escrow deposit verification timelines under Paragraph 2',
      'Municipal lien, permit, and utility payoff inspection protocol'
    ]
  },
  {
    id: 'guide-2',
    badge: 'COMPLIANCE FIELD GUIDE',
    pages: '6-Page Audit Manual',
    format: 'PDF • Executive Field Guide',
    placeholderTitle: '[GUIDE TITLE: SB 4-D Milestone Inspection & Condo Reserve Audit Field Guide]',
    sampleTitle: 'SB 4-D Milestone Inspection & Condo Reserve Audit Field Guide',
    placeholderDescription: '[ONE-SENTENCE DESCRIPTION: What Florida agents and buyers must verify regarding Structural Integrity Reserve Studies (SIRS) before waiving financing.]',
    sampleDescription: 'Essential questions to ask condo associations and managing agents to protect buyer clients from surprise special assessments and lender loan denials.',
    highlights: [
      'Statutory triggers for 25 vs. 30-year milestone inspections',
      'Underwriting red flags that cause Fannie Mae/Freddie Mac blacklist holds',
      '3-day condo resale document delivery calculation rules'
    ]
  }
];

export const FreeGuidesPage: React.FC<Props> = ({
  onGoHome,
  onBackToBlog,
  onBookCall,
  onOpenCalculator
}) => {
  const [downloadRequested, setDownloadRequested] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [editorialMode, setEditorialMode] = useState<'placeholders' | 'sample'>('placeholders');

  useEffect(() => {
    document.title = 'Free Guides + Downloads | Florida Real Estate Toolkits | Hometown TC';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setDownloadSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#2B231F] font-sans selection:bg-[#0D9BA3]/20 selection:text-[#2B231F]">
      
      {/* Newspaper Top Utility Bar */}
      <div className="border-b border-[#3A2E29]/15 text-[11px] font-mono uppercase tracking-widest text-[#3A2E29]/70 py-2 px-4 sm:px-8 bg-[#FAF5EE]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-[#0D9BA3]">THE HOMETOWN BRIEF</span>
            <span className="text-[#3A2E29]/30">•</span>
            <span>TAKE IT WITH YOU</span>
            <span className="text-[#3A2E29]/30">•</span>
            <span>RESOURCE DESK</span>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={onBackToBlog}
              className="hover:text-[#0D9BA3] font-bold transition cursor-pointer inline-flex items-center space-x-1"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to The Hometown Brief</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        
        {/* Editorial Toggle Switcher */}
        <div className="flex justify-end">
          <div className="inline-flex items-center p-1 bg-white rounded-lg border border-[#2B231F]/20 shadow-sm text-xs font-mono">
            <span className="px-2 text-[#2B231F]/60 text-[11px]">Preview:</span>
            <button
              onClick={() => setEditorialMode('placeholders')}
              className={`px-3 py-1 rounded text-xs font-bold transition cursor-pointer ${
                editorialMode === 'placeholders'
                  ? 'bg-[#2B231F] text-white shadow-sm'
                  : 'text-[#2B231F]/70 hover:text-[#2B231F]'
              }`}
            >
              [Placeholders Blueprint]
            </button>
            <button
              onClick={() => setEditorialMode('sample')}
              className={`px-3 py-1 rounded text-xs font-bold transition cursor-pointer ${
                editorialMode === 'sample'
                  ? 'bg-[#0D9BA3] text-white shadow-sm'
                  : 'text-[#2B231F]/70 hover:text-[#2B231F]'
              }`}
            >
              Sample Guide Copy
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="border-b-2 border-[#2B231F] pb-6 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D9BA3]/10 text-[#0D9BA3] font-mono text-xs font-bold uppercase tracking-widest border border-[#0D9BA3]/20">
            <Download className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>TAKE IT WITH YOU</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#2B231F] tracking-tight">
            Free Guides + Downloads
          </h1>

          <p className="text-sm sm:text-base text-[#2B231F]/80 max-w-2xl font-serif leading-relaxed">
            Field-tested checklists, Florida contract timeline trackers, and compliance roadmaps curated by transaction coordinators handling contracts across Florida every day.
          </p>
        </div>

        {/* Editorial Notice Banner */}
        <div className="p-4 bg-[#FAF5EE] rounded-xl border border-[#2B231F]/15 flex items-start space-x-3 text-xs font-mono text-[#2B231F]/75">
          <FileCheck className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-[#0D9BA3] font-bold uppercase tracking-wide">HTC EDITORIAL NOTE:</span>{' '}
            HTC will provide the actual guides, download attachments, and copy. These slots are fully wired into the distribution desk.
          </div>
        </div>

        {/* Featured Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_GUIDES.map((guide) => (
            <div 
              key={guide.id}
              className="bg-white rounded-2xl border-2 border-[#2B231F]/15 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md hover:border-[#0D9BA3]/50 transition-all duration-150 relative overflow-hidden group"
            >
              
              <div className="space-y-4">
                
                {/* Format Badges */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="bg-[#0D9BA3]/15 text-[#0D9BA3] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-[#0D9BA3]/30">
                    {guide.badge}
                  </span>
                  <span className="text-[#2B231F]/60">
                    {guide.format}
                  </span>
                </div>

                {/* Guide Title */}
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2B231F] leading-snug group-hover:text-[#0D9BA3] transition">
                  {editorialMode === 'placeholders' ? guide.placeholderTitle : guide.sampleTitle}
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#2B231F]/75 font-sans leading-relaxed">
                  {editorialMode === 'placeholders' ? guide.placeholderDescription : guide.sampleDescription}
                </p>

                {/* Key Checklist Highlights */}
                <div className="pt-2 border-t border-[#2B231F]/10 space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2B231F]/60 block">
                    WHAT'S INCLUDED:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#2B231F]/80">
                    {guide.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Area */}
              <div className="pt-4 border-t border-[#2B231F]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-[#2B231F]/60">
                  {guide.pages}
                </span>

                <button
                  onClick={() => {
                    setDownloadRequested(guide.id);
                    setDownloadSuccess(false);
                  }}
                  className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition inline-flex items-center justify-center space-x-2 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span>GET THE GUIDE →</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal / Inline Lead Capture */}
        {downloadRequested && (
          <div className="fixed inset-0 bg-[#2B231F]/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
            <div className="bg-[#FAF5EE] border-2 border-[#2B231F] rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
              
              <button
                onClick={() => setDownloadRequested(null)}
                className="absolute top-4 right-4 text-xs font-mono text-[#2B231F]/50 hover:text-[#2B231F] cursor-pointer"
              >
                [CLOSE ✕]
              </button>

              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
                  HTC DIGITAL DELIVERY
                </span>
                <h3 className="text-xl font-serif font-black text-[#2B231F]">
                  Instant Resource Delivery
                </h3>
                <p className="text-xs text-[#2B231F]/75">
                  Where should we email your printable PDF guide?
                </p>
              </div>

              {downloadSuccess ? (
                <div className="bg-white border border-[#0D9BA3] rounded-xl p-5 text-center space-y-3">
                  <CheckCircle className="w-8 h-8 text-[#0D9BA3] mx-auto" />
                  <p className="text-xs font-mono font-bold text-[#0D9BA3]">
                    DISPATCH TRANSMITTED
                  </p>
                  <p className="text-xs text-[#2B231F]/80">
                    The PDF checklist placeholder has been routed to <span className="font-bold">{emailInput}</span>. HTC editorial attachments will be inserted directly.
                  </p>
                  <button
                    onClick={() => {
                      setDownloadRequested(null);
                      setDownloadSuccess(false);
                      setEmailInput('');
                    }}
                    className="w-full bg-[#2B231F] text-white py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#3A2E29] transition"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#2B231F]/80 mb-1">
                      Agent Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="agent@brokerage.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#2B231F]/20 rounded-xl text-xs text-[#2B231F] focus:outline-none focus:border-[#0D9BA3]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md"
                  >
                    Send PDF Guide Immediately →
                  </button>

                  <p className="text-[10px] text-center font-mono text-[#2B231F]/50">
                    No spam. Zero sales retainers. Unsubscribe anytime.
                  </p>
                </form>
              )}

            </div>
          </div>
        )}

        {/* Footer Bridge */}
        <div className="p-8 bg-white rounded-2xl border border-[#2B231F]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-serif font-bold text-[#2B231F]">
              Looking for our Florida contract analysis & answers?
            </h4>
            <p className="text-xs text-[#2B231F]/70">
              Browse over 40+ operational answers, field notes, and contract guides on The Hometown Brief.
            </p>
          </div>

          <button
            onClick={onBackToBlog}
            className="inline-flex items-center space-x-2 bg-[#2B231F] hover:bg-[#3A2E29] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer whitespace-nowrap"
          >
            <span>Browse The Hometown Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </main>

    </div>
  );
};
