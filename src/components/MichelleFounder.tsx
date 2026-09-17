import React from 'react';
import { Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { MEET_MICHELLE_IMAGE } from '../data/content';

interface Props {
  onBookCall?: () => void;
  onOpenAbout?: () => void;
}

export const MichelleFounder: React.FC<Props> = ({ onOpenAbout }) => {
  const operationsTeam = [
    { name: 'Michelle Martinez', role: 'Founder + Owner' },
    { name: 'Mary Martinez', role: 'Trainer' },
    { name: 'Angela Paniagua', role: 'HTC Billing Department' },
    { name: 'Laura Villalobos', role: 'Executive Assistant' },
    { name: 'Dedicated Hometown Team', role: 'Lead TCs & Operational Support' }
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
          
          {/* Left: Founder & Support Model Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
              <img
                src={MEET_MICHELLE_IMAGE}
                alt="Michelle Martinez - Founder of Hometown Transaction Coordinators"
                className="w-full h-80 sm:h-96 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E29] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#3A2E29]/90 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="text-sm font-bold text-white">Michelle Martinez</div>
                <div className="text-xs text-[#0D9BA3] font-semibold">Founder & Owner • Serving Florida Realtors Since 1995</div>
              </div>
            </div>
          </div>

          {/* Right: Operations Team Roster & CTA */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Team Members List */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0D9BA3] flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#FE7311]" />
                <span>HTC OPERATIONS TEAM</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {operationsTeam.map((member, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1"
                  >
                    <div className="text-sm font-bold text-white">{member.name}</div>
                    <div className="text-xs text-slate-400">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
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
