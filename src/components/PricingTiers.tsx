import React from 'react';
import { ArrowRight, Layers, FileText, Home, Users } from 'lucide-react';

interface Props {
  onBookCall?: () => void;
  onSubmitDeal?: () => void;
  onOpenRoi?: () => void;
  onExploreServices?: () => void;
}

export const PricingTiers: React.FC<Props> = ({ onExploreServices }) => {
  return (
    <section id="services-preview" className="py-14 sm:py-16 bg-[#EEEAEB] border-b border-[#D8D2D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-lg relative overflow-hidden space-y-8">
          
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Layers className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>SERVICES PREVIEW</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
              Our Core Service Lanes
            </h2>
          </div>

          {/* 3 Evergreen Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Category 1: Listing Services */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-bold">
                <Home className="w-5 h-5 text-[#FE7311]" />
              </div>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Listing Services
              </h3>
              <p className="text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
                Listing Launch support for preparing and coordinating the back-end work required to get a property ready to go live.
              </p>
            </div>

            {/* Category 2: Contract Services */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5 text-[#0D9BA3]" />
              </div>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Contract Services
              </h3>
              <p className="text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
                Contract-to-Close coordination beginning with an executed agreement and continuing through our post-close responsibilities.
              </p>
            </div>

            {/* Category 3: Team + Brokerage Support */}
            <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-2xl border border-[#D8D2D4] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center font-bold">
                <Users className="w-5 h-5 text-[#0D9BA3]" />
              </div>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Team + Brokerage Support
              </h3>
              <p className="text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
                Customized support for teams and brokerages that need a more structured back-end solution.
              </p>
            </div>

          </div>

          {/* Centralized Action Button */}
          <div className="pt-4 flex items-center justify-start border-t border-[#D8D2D4]">
            <button
              onClick={onExploreServices}
              className="text-[#0D9BA3] hover:text-[#0b8288] font-bold text-base sm:text-lg underline underline-offset-4 transition flex items-center space-x-2 group cursor-pointer"
            >
              <span>Explore Services + Pricing</span>
              <ArrowRight className="w-5 h-5 text-[#FE7311] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
