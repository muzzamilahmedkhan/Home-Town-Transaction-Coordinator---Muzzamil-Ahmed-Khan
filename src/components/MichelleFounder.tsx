import React from 'react';
import { Users, ArrowRight, UserCheck, ShieldCheck, Cpu } from 'lucide-react';
import { MEET_MICHELLE_IMAGE } from '../data/content';

interface Props {
  onBookCall?: () => void;
  onOpenAbout?: () => void;
  onOpenMeetTheTribe?: () => void;
}

export const MichelleFounder: React.FC<Props> = ({ onOpenAbout, onOpenMeetTheTribe }) => {
  const handleCta = () => {
    if (onOpenMeetTheTribe) {
      onOpenMeetTheTribe();
    } else if (onOpenAbout) {
      onOpenAbout();
    }
  };

  return (
    <section id="team" className="py-16 sm:py-20 bg-[#3A2E29] text-white border-b border-[#0D9BA3]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <Users className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>THE HOMETOWN SUPPORT MODEL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-white tracking-tight">
            One point of contact. A team behind the work.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Your Lead TC is your main day-to-day point of contact. Behind that relationship is your Dedicated Hometown Team, using people, systems, and technology to help keep the work organized and moving.
          </p>
        </div>

        {/* Layout: Visual Model + Founder Authority */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Founder Card (Authority without listing operations roster) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
              <img
                src={MEET_MICHELLE_IMAGE}
                alt="Michelle Martinez - Founder of Hometown Transaction Coordinators"
                className="w-full h-80 sm:h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E29] via-[#3A2E29]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#3A2E29]/95 backdrop-blur-md rounded-2xl border border-white/10 space-y-1">
                <div className="text-sm font-bold text-white font-montserrat">Michelle Martinez</div>
                <div className="text-xs text-[#0D9BA3] font-semibold">Founder & Owner • Serving Florida Realtors Since 1995</div>
                <p className="text-[11px] text-slate-300 leading-normal pt-1">
                  Built on nearly 30 years of Florida contract, title, and transaction coordination experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual Customer Model Diagram & CTA */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Visual: YOU ↔ LEAD TC ↔ HTC TEAM + SYSTEMS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D9BA3]">
                  HOW WORK MOVES WITH HOMETOWN
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  RELATIONSHIP & EXECUTION MODEL
                </span>
              </div>

              {/* 3-Part Architecture Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
                
                {/* Node 1: YOU */}
                <div className="sm:col-span-3 bg-black/40 rounded-2xl p-4 border border-white/10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FE7311] mx-auto flex items-center justify-center font-bold text-sm font-montserrat">
                    YOU
                  </div>
                  <div className="font-montserrat font-extrabold text-sm text-white">YOU</div>
                  <div className="text-[11px] font-mono text-[#0D9BA3] font-semibold uppercase">Realtor Partner</div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Focus on clients, contracts, negotiations & pipeline.
                  </p>
                </div>

                {/* Arrow 1 */}
                <div className="sm:col-span-1 flex items-center justify-center py-1 sm:py-0">
                  <div className="flex sm:flex-row flex-col items-center justify-center text-[#0D9BA3] font-extrabold">
                    <span className="text-xl hidden sm:inline select-none">↔</span>
                    <span className="text-lg sm:hidden select-none">↕</span>
                  </div>
                </div>

                {/* Node 2: LEAD TC */}
                <div className="sm:col-span-3 bg-gradient-to-b from-[#0D9BA3]/20 to-black/50 rounded-2xl p-4 border-2 border-[#0D9BA3] text-center space-y-2 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-[#0D9BA3] text-white mx-auto flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div className="font-montserrat font-extrabold text-sm text-white">LEAD TC</div>
                  <div className="text-[11px] font-mono text-[#0D9BA3] font-bold uppercase">Main Contact</div>
                  <p className="text-[11px] text-slate-200 leading-snug font-medium">
                    Your single day-to-day point of contact for your files.
                  </p>
                </div>

                {/* Arrow 2 */}
                <div className="sm:col-span-1 flex items-center justify-center py-1 sm:py-0">
                  <div className="flex sm:flex-row flex-col items-center justify-center text-[#0D9BA3] font-extrabold">
                    <span className="text-xl hidden sm:inline select-none">↔</span>
                    <span className="text-lg sm:hidden select-none">↕</span>
                  </div>
                </div>

                {/* Node 3: HTC TEAM + SYSTEMS */}
                <div className="sm:col-span-3 bg-black/40 rounded-2xl p-4 border border-white/10 text-center space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#FE7311] mx-auto flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#FE7311]" />
                  </div>
                  <div className="font-montserrat font-extrabold text-xs text-white uppercase">HTC TEAM + SYSTEMS</div>
                  <div className="text-[11px] font-mono text-[#FE7311] font-semibold uppercase">Operational Engine</div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Dedicated team, systems & tech keeping work organized.
                  </p>
                </div>

              </div>

              {/* Caption Line */}
              <div className="text-center pt-2 text-xs text-slate-300 font-medium">
                <span className="text-white font-semibold">Support Model: </span>
                YOU <span className="text-[#0D9BA3] font-bold">↔</span> LEAD TC <span className="text-[#0D9BA3] font-bold">↔</span> HTC TEAM + SYSTEMS
              </div>
            </div>

            {/* Direct CTA: MEET THE TRIBE */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCta}
                className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition inline-flex items-center space-x-2.5 cursor-pointer"
              >
                <span>MEET THE TRIBE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
