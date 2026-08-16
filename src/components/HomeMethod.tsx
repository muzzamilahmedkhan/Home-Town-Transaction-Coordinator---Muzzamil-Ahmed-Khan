import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface Props {
  onOpenAbout?: () => void;
  onBookCall?: () => void;
}

export const HomeMethod: React.FC<Props> = ({ onOpenAbout, onBookCall }) => {
  return (
    <section id="home-method" className="py-14 sm:py-16 bg-[#EEEAEB] border-b border-[#D8D2D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-xl relative overflow-hidden space-y-8">
          
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Sparkles className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>THE FOUNDATION OF HTC</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#3A2E29]">
              Everything we do starts at H.O.M.E.
            </h2>
            
            <p className="text-base sm:text-lg text-[#3A2E29]/90 font-medium leading-relaxed">
              H.O.M.E. guides how we serve people, make decisions, build systems, and move every transaction forward.
            </p>
          </div>

          {/* Grid of Values & Close Method */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Box 1: H.O.M.E. Values */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-4">
              <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
                <Heart className="w-4 h-4 text-[#FE7311]" />
                <span>H.O.M.E. Values™</span>
              </div>

              <div className="text-xl sm:text-2xl font-montserrat font-extrabold text-[#3A2E29] tracking-wide">
                Honor <span className="text-[#0D9BA3]">·</span> Order <span className="text-[#0D9BA3]">·</span> Mastery <span className="text-[#0D9BA3]">·</span> Ease
              </div>

              <p className="text-xs sm:text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
                The core principles that define our culture, guide our team, and shape every client experience.
              </p>
            </div>

            {/* Box 2: H.O.M.E. Close Method */}
            <div className="bg-[#3A2E29] text-white p-6 sm:p-8 rounded-2xl border border-[#0D9BA3]/40 shadow-md space-y-4">
              <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
                <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
                <span>H.O.M.E. Close Method™</span>
              </div>

              <div className="text-sm sm:text-base font-montserrat font-bold text-slate-100 leading-snug">
                Honor the Agreement <span className="text-[#FE7311]">→</span> Organize the File <span className="text-[#FE7311]">→</span> Monitor the Milestones <span className="text-[#FE7311]">→</span> Ease the Close
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Our four-stage method for moving Florida real estate files forward with structure, clarity, and care.
              </p>
            </div>

          </div>

          {/* Clean Link to About Page / Modal */}
          <div className="pt-2 flex items-center justify-between gap-4 border-t border-[#D8D2D4]">
            <button
              onClick={onOpenAbout}
              className="text-[#0D9BA3] hover:text-[#0b8288] font-bold text-base sm:text-lg underline underline-offset-4 transition flex items-center space-x-2 group cursor-pointer"
            >
              <span>Explore What H.O.M.E. Means at HTC</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#FE7311]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
