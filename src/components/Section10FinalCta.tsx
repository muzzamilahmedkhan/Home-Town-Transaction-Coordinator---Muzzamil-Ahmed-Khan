import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER } from '../data/content';

interface Props {
  onBookCall: () => void;
  onExploreServices: () => void;
  viewMode?: 'live' | 'blueprint';
}

export const Section10FinalCta: React.FC<Props> = ({
  onBookCall,
  onExploreServices,
  viewMode
}) => {
  return (
    <section 
      aria-labelledby="section-10-final-cta-heading" 
      className="relative bg-[#3A2E29] text-[#EEEAEB] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#4E3F39] shadow-xl overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FE7311]/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative space-y-6 max-w-4xl">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 text-xs font-mono text-slate-300">
          <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
          <span className="font-bold tracking-wider uppercase text-[#0D9BA3]">
            BOUTIQUE REAL ESTATE SUPPORT AGENCY
          </span>
        </div>

        {/* Headline & Body Copy */}
        <div className="space-y-3">
          <h2 
            id="section-10-final-cta-heading" 
            className="text-2xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-white tracking-tight leading-tight"
          >
            Need more than a resource?
          </h2>

          <p className="text-sm sm:text-lg text-[#EEEAEB]/90 font-medium leading-relaxed max-w-2xl">
            If you are ready to hand off the administrative work instead of doing it yourself, book a Fit Call and we will see whether HTC fits your business.
          </p>
        </div>

        {/* Action Buttons: Primary & Secondary */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          {/* Primary CTA */}
          <button
            onClick={onBookCall}
            className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-7 py-4 rounded-xl text-xs sm:text-sm font-montserrat font-extrabold uppercase tracking-wider transition cursor-pointer shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2 group"
          >
            <PhoneCall className="w-4 h-4 text-white/90" />
            <span>BOOK A 15-MINUTE FIT CALL</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreServices}
            className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 px-6 py-4 rounded-xl text-xs sm:text-sm font-montserrat font-bold uppercase tracking-wider transition cursor-pointer text-center flex items-center justify-center space-x-2 group"
          >
            <span>EXPLORE SERVICES + PRICING</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="pt-1 text-xs text-slate-400">
          Direct desk line: <a href="tel:9543778330" className="text-white hover:text-[#0D9BA3] font-semibold underline underline-offset-2">(954) 377-8330</a> • Serving Florida Realtors statewide
        </div>

      </div>
    </section>
  );
};
