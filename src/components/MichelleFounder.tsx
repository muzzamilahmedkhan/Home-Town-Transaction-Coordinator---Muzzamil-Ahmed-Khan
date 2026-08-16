import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

interface Props {
  onBookCall?: () => void;
  onOpenAbout?: () => void;
}

export const MichelleFounder: React.FC<Props> = ({ onOpenAbout }) => {
  const teamMembers = [
    'Michelle', 'Mary', 'Laura', 'Mariandrea',
    'Ronald', 'Angela', 'Andrew', 'Yvonne'
  ];

  return (
    <section id="team" className="py-16 sm:py-20 bg-[#3A2E29] text-white border-b border-[#0D9BA3]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <Users className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>MEET THE TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-white">
            Built by experience. Supported by a team.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
            HTC is a boutique real estate support agency built around real people, clear systems, and dependable follow-through. Our team supports Florida Realtors behind the scenes from Listing Launch through Post-Close.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Neutral Team Photo Placeholder Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl border-2 border-dashed border-[#0D9BA3]/60 bg-black/30 p-10 sm:p-14 text-center flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px] space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 text-[#0D9BA3] flex items-center justify-center">
                <Users className="w-8 h-8 text-[#FE7311]" />
              </div>
              <div className="space-y-1.5 max-w-sm">
                <div className="text-base font-bold text-white tracking-wide">
                  HTC Corporate Team Photo
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  Placeholder — Photo of Michelle, Mary, Laura, Mariandrea, Ronald, Angela, Andrew, and Yvonne will be placed here.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Team Members Roster & CTA */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Team Members List */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0D9BA3]">
                HTC TEAM MEMBERS
              </div>
              <div className="flex flex-wrap gap-2.5">
                {teamMembers.map((member, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-white/10 text-sm font-semibold text-white border border-white/15 tracking-wide"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div>
              <button
                onClick={onOpenAbout}
                className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition inline-flex items-center space-x-2.5 cursor-pointer"
              >
                <span>Meet the HTC Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};



