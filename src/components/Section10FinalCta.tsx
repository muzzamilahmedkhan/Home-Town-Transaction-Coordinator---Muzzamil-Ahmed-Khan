import React from 'react';
import { ArrowRight, PhoneCall, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface Props {
  onBookCall: () => void;
  onExploreServices: () => void;
  viewMode?: 'live' | 'blueprint';
}

export const Section10FinalCta: React.FC<Props> = ({
  onBookCall,
  onExploreServices,
  viewMode = 'live'
}) => {
  return (
    <section 
      aria-labelledby="section-10-final-cta-heading" 
      className="relative bg-[#3A2E29] text-[#EEEAEB] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#4E3F39] shadow-xl overflow-hidden"
    >
      {/* Editorial archival background accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FE7311]/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Archival ledger line */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-10 w-[1px] bg-white/10 hidden sm:block" />

      <div className="relative sm:pl-8 space-y-6 max-w-4xl">
        
        {/* Eyebrow / Section Marker */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-widest text-[#0D9BA3]">
            <span>SECTION 10 — FINAL CTA</span>
          </div>

          <div className="inline-flex items-center space-x-2 text-[11px] font-mono text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D9BA3]" />
            <span>FLORIDA-LICENSED COORDINATION DESK</span>
          </div>
        </div>

        {/* Blueprint Schema Tag (Visible in Blueprint Mode) */}
        {viewMode === 'blueprint' && (
          <div className="p-3 bg-white/5 border border-[#0D9BA3]/40 rounded-xl text-xs font-mono space-y-1 text-slate-300">
            <div className="text-[#0D9BA3] font-bold uppercase tracking-wider">
              [SCHEMA FIELD: SECTION 10 FINAL CALL-TO-ACTION]
            </div>
            <div className="text-slate-400">
              Target Headline: "Need more than a resource?" • Target Body: "If you’re ready to hand the work over instead of doing it yourself, let’s see if HTC fits your business."
            </div>
          </div>
        )}

        {/* Headline & Body Copy */}
        <div className="space-y-3">
          <h2 
            id="section-10-final-cta-heading" 
            className="text-2xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-white tracking-tight leading-tight"
          >
            {viewMode === 'blueprint' 
              ? '[HEADLINE: Need more than a resource?]' 
              : 'Need more than a resource?'}
          </h2>

          <p className="text-sm sm:text-lg text-[#EEEAEB]/90 font-medium leading-relaxed max-w-2xl">
            {viewMode === 'blueprint'
              ? '[BODY: If you’re ready to hand the work over instead of doing it yourself, let’s see if HTC fits your business.]'
              : 'If you’re ready to hand the work over instead of doing it yourself, let’s see if HTC fits your business.'}
          </p>
        </div>

        {/* Reassurance Badges */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-1">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9BA3]" />
            <span>Pay Only When You Close</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9BA3]" />
            <span>Zero File Setup Retainers</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>15-Minute No-Obligation Fit Call</span>
          </div>
        </div>

        {/* Action Buttons: Primary & Secondary */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          {/* Primary CTA */}
          <button
            onClick={onBookCall}
            className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-7 py-4 rounded-xl text-xs sm:text-sm font-montserrat font-extrabold uppercase tracking-wider transition cursor-pointer shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2 group"
          >
            <PhoneCall className="w-4 h-4 text-white/90" />
            <span>
              {viewMode === 'blueprint' 
                ? '[PRIMARY CTA: BOOK A 15-MINUTE FIT CALL]' 
                : 'BOOK A 15-MINUTE FIT CALL'}
            </span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreServices}
            className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 px-6 py-4 rounded-xl text-xs sm:text-sm font-montserrat font-bold uppercase tracking-wider transition cursor-pointer text-center flex items-center justify-center space-x-2 group"
          >
            <span>
              {viewMode === 'blueprint' 
                ? '[SECONDARY CTA: EXPLORE SERVICES + PRICING →]' 
                : 'EXPLORE SERVICES + PRICING'}
            </span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="pt-1 text-[11px] font-mono text-slate-400">
          Direct desk line: (305) 902-6632 • Serving agents & brokerages across all 67 Florida counties
        </div>

      </div>
    </section>
  );
};
