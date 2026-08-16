import React from 'react';
import { Calendar, FileCheck, MapPin, Languages, Quote } from 'lucide-react';

export const ProofBar: React.FC = () => {
  const proofItems = [
    {
      icon: Calendar,
      title: 'Serving Realtors Since 1995',
      sublabel: '30+ Years Industry Experience'
    },
    {
      icon: FileCheck,
      title: '20,000+ Contracts',
      sublabel: 'Coordinated to Closing'
    },
    {
      icon: MapPin,
      title: 'Florida Statewide',
      sublabel: 'Florida Statewide Support'
    },
    {
      icon: Languages,
      title: 'English + Español',
      sublabel: 'Bilingual Team Support'
    }
  ];

  return (
    <section className="bg-white border-b border-[#D8D2D4] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Fast Proof Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {proofItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''} flex flex-col items-center md:items-start text-center md:text-left space-y-1.5`}
              >
                <div className="w-9 h-9 rounded-xl bg-[#EEEAEB] text-[#0D9BA3] flex items-center justify-center mb-1 border border-[#D8D2D4]">
                  <Icon className="w-5 h-5 text-[#0D9BA3]" />
                </div>
                <div className="text-sm font-montserrat font-extrabold text-[#3A2E29]">
                  {item.title}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {item.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Founding Client Real Human Proof Card */}
        <div className="bg-[#EEEAEB] rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] relative overflow-hidden flex flex-col items-start justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#3A2E29] text-white px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase">
              <Quote className="w-3 h-3 text-[#0D9BA3]" />
              <span>WITH HTC SINCE 2018</span>
            </div>
            <p className="text-lg sm:text-xl font-montserrat font-bold text-[#3A2E29] italic leading-snug pt-1">
              “It took a bear off my back and freed me up to focus on what I do best — sell real estate.”
            </p>
            <div className="text-xs sm:text-sm font-semibold text-[#0D9BA3] pt-1">
              Heather Lefebvre <span className="text-[#3A2E29]/60">· HTC Client Since 2018</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


