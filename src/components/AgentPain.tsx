import React from 'react';
import { Inbox, Clock, Brain } from 'lucide-react';

interface Props {
  onBookCall?: () => void;
}

export const AgentPain: React.FC<Props> = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#3A2E29] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/30 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <span>THE AGENT REALITY</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
            Your Clients Need You.{' '}
            <span className="block sm:inline text-[#FE7311] font-semibold italic">
              Your Transaction Needs a System.
            </span>
          </h2>
        </div>

        {/* 3 Real Life Touchpoints */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1 */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/20 text-[#0D9BA3] flex items-center justify-center mb-2">
              <Inbox className="w-5 h-5 text-[#0D9BA3]" />
            </div>
            <h3 className="text-lg font-montserrat font-extrabold text-white">
              The inbox keeps moving.
            </h3>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Someone is always waiting for an update, document, response, or follow-up.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-[#FE7311]/20 text-[#FE7311] flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-[#FE7311]" />
            </div>
            <h3 className="text-lg font-montserrat font-extrabold text-white">
              The dates don't stop.
            </h3>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Your next showing does not pause the transaction timeline.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/20 text-[#0D9BA3] flex items-center justify-center mb-2">
              <Brain className="w-5 h-5 text-[#0D9BA3]" />
            </div>
            <h3 className="text-lg font-montserrat font-extrabold text-white">
              Your brain shouldn't be the system.
            </h3>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              HTC gives the file an owner, a process, and a written trail.
            </p>
          </div>

        </div>

        {/* Clean Conclusion */}
        <div className="text-center max-w-3xl mx-auto pt-2">
          <p className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white">
            You stay client-facing. <span className="text-[#0D9BA3]">We keep the back end moving.</span>
          </p>
        </div>

      </div>
    </section>
  );
};


