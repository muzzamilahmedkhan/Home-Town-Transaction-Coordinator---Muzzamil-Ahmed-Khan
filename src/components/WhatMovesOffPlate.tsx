import React from 'react';
import { Calendar, FileText, FolderCheck, ArrowRight } from 'lucide-react';

interface Props {
  onSubmitDeal?: () => void;
  onBookCall?: () => void;
  onExploreServices?: () => void;
}

export const WhatMovesOffPlate: React.FC<Props> = ({ onExploreServices }) => {
  const scrollToPricingOrServices = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const outcomes = [
    {
      icon: Calendar,
      title: 'Listing Launch',
      description: 'We organize the moving pieces required to prepare and launch a listing.'
    },
    {
      icon: FileText,
      title: 'Contract-to-Close',
      description: 'We track the dates, documents, communication, and follow-up once the property is under contract.'
    },
    {
      icon: FolderCheck,
      title: 'Post-Close',
      description: 'We complete the final file and follow-up steps that continue after closing.'
    }
  ];

  return (
    <section id="what-we-handle" className="py-14 sm:py-16 bg-[#EEEAEB] border-b border-[#D8D2D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
            <span>WHAT MOVES OFF YOUR PLATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
            The work keeps moving without living in your head.
          </h2>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#D8D2D4] shadow-sm hover:shadow-md transition space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEEAEB] text-[#0D9BA3] flex items-center justify-center border border-[#D8D2D4]">
                  <Icon className="w-6 h-6 text-[#0D9BA3]" />
                </div>
                <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Single Next Action */}
        <div className="text-center">
          <button
            onClick={scrollToPricingOrServices}
            className="text-[#0D9BA3] hover:text-[#0b8288] font-bold text-base sm:text-lg underline underline-offset-4 transition inline-flex items-center space-x-2 group cursor-pointer"
          >
            <span>Explore Services + Pricing</span>
            <ArrowRight className="w-5 h-5 text-[#FE7311] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};


