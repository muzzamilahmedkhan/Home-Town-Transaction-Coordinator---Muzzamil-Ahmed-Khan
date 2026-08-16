import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
}

export const FinalCTA: React.FC<Props> = ({ onBookCall, onSubmitDeal }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#3A2E29] text-white relative overflow-hidden border-t border-[#0D9BA3]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/30 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
          <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
          <span>PROTECT THE AGENT · PROTECT THE BROKER · PROTECT THE CLIENT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          From Yes to Sold, you don't have to carry the back end alone.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
          Whether you're launching a listing or managing an executed contract through Post-Close, HTC keeps the moving parts organized so you can stay client-facing.
        </p>

        <div className="pt-4 space-y-4">
          {/* One Orange Button */}
          <div>
            <button
              onClick={onBookCall}
              className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-9 py-4.5 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition inline-flex items-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              <span>BOOK A 15-MINUTE FIT CALL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quiet Secondary Text */}
          <div>
            <button
              onClick={onSubmitDeal}
              className="text-slate-300 hover:text-white text-xs font-semibold tracking-wide transition cursor-pointer inline-flex items-center space-x-1 border-b border-slate-500/40 pb-0.5 hover:border-white"
            >
              <span>Already an HTC client? Submit a Deal →</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


