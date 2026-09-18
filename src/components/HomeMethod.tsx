import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Clock, FileSpreadsheet, KeyRound } from 'lucide-react';

interface Props {
  onSeeHowItWorks?: () => void;
  onOpenAbout?: () => void;
  onBookCall?: () => void;
}

export const HomeMethod: React.FC<Props> = ({ onSeeHowItWorks, onOpenAbout }) => {
  const stages = [
    {
      letter: 'H',
      name: 'Honor the Agreement',
      summary: 'Review the executed agreement, parties, dates, and documents that drive the file.',
      icon: CheckCircle2,
      accentColor: 'text-[#0D9BA3]',
      badgeBg: 'bg-[#0D9BA3]',
      stepNum: 'STAGE 01'
    },
    {
      letter: 'O',
      name: 'Organize the File',
      summary: 'Build the working timeline, organize contacts and documents, and identify what is missing.',
      icon: FileSpreadsheet,
      accentColor: 'text-[#FE7311]',
      badgeBg: 'bg-[#FE7311]',
      stepNum: 'STAGE 02'
    },
    {
      letter: 'M',
      name: 'Monitor the Milestones',
      summary: 'Track administrative milestones, follow up, document updates, and bring anything that needs the agent’s attention back to them.',
      icon: Clock,
      accentColor: 'text-[#0D9BA3]',
      badgeBg: 'bg-[#0D9BA3]',
      stepNum: 'STAGE 03'
    },
    {
      letter: 'E',
      name: 'Ease the Close',
      summary: 'Support the final administrative steps, closing coordination, broker file completion, and Post-Close.',
      icon: KeyRound,
      accentColor: 'text-[#3A2E29]',
      badgeBg: 'bg-[#3A2E29]',
      stepNum: 'STAGE 04'
    }
  ];

  return (
    <section id="home-method" className="py-14 sm:py-16 bg-[#EEEAEB] border-b border-[#D8D2D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-xl relative overflow-hidden space-y-8">
          
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>OUR CUSTOMER PROCESS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight">
              THE H.O.M.E. CLOSE METHOD
            </h2>
            
            <p className="text-base sm:text-lg text-[#3A2E29]/85 font-medium leading-relaxed">
              Our four-stage method for moving Contract-to-Close files forward with structure, visibility, and care.
            </p>
          </div>

          {/* Connected Flow Strip */}
          <div className="bg-[#FAF8F5] rounded-2xl p-4 sm:p-5 border border-[#D8D2D4]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-montserrat font-extrabold text-[#3A2E29]">
              <div className="flex items-center space-x-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#0D9BA3] text-white flex items-center justify-center font-black text-xs shadow-2xs">
                  H
                </span>
                <span>Honor the Agreement</span>
              </div>
              <span className="hidden md:inline text-[#FE7311] font-extrabold text-base" aria-hidden="true">→</span>
              
              <div className="flex items-center space-x-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#FE7311] text-white flex items-center justify-center font-black text-xs shadow-2xs">
                  O
                </span>
                <span>Organize the File</span>
              </div>
              <span className="hidden md:inline text-[#FE7311] font-extrabold text-base" aria-hidden="true">→</span>
              
              <div className="flex items-center space-x-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#0D9BA3] text-white flex items-center justify-center font-black text-xs shadow-2xs">
                  M
                </span>
                <span>Monitor the Milestones</span>
              </div>
              <span className="hidden md:inline text-[#FE7311] font-extrabold text-base" aria-hidden="true">→</span>
              
              <div className="flex items-center space-x-2.5">
                <span className="w-7 h-7 rounded-lg bg-[#3A2E29] text-white flex items-center justify-center font-black text-xs shadow-2xs">
                  E
                </span>
                <span>Ease the Close</span>
              </div>
            </div>
          </div>

          {/* 4 Stage Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {stages.map((stage, idx) => {
              return (
                <div 
                  key={idx}
                  className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-[#D8D2D4] hover:border-[#0D9BA3]/50 transition-all shadow-2xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`w-9 h-9 rounded-xl ${stage.badgeBg} text-white flex items-center justify-center font-montserrat font-black text-sm shadow-xs`}>
                        {stage.letter}
                      </span>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                        {stage.stepNum}
                      </span>
                    </div>

                    <h3 className="text-lg font-montserrat font-extrabold text-[#3A2E29] leading-snug">
                      {stage.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
                      {stage.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Row */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[#D8D2D4]">
            <button
              onClick={onSeeHowItWorks}
              className="bg-[#0D9BA3] hover:bg-[#0b8288] text-white font-montserrat font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center space-x-3 cursor-pointer group"
            >
              <span>SEE HOW HTC WORKS</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#FE7311]" />
            </button>

            {onOpenAbout && (
              <button
                onClick={onOpenAbout}
                className="text-xs sm:text-sm text-slate-600 hover:text-[#3A2E29] font-semibold underline underline-offset-4 transition cursor-pointer text-left sm:text-right"
              >
                Learn about our agency culture & founder values →
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
