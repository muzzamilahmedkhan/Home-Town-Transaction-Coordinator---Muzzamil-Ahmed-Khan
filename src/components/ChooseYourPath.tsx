import React from 'react';
import { ArrowRight, FileCheck, Home, FileText } from 'lucide-react';

interface Props {
  onBookCall?: () => void;
  onSubmitDeal: () => void;
  onOpenRoi?: () => void;
  onExploreServices?: () => void;
}

export const ChooseYourPath: React.FC<Props> = ({ onSubmitDeal, onExploreServices }) => {
  const handleExploreServices = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.getElementById('what-we-handle') || document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="choose-path" className="py-14 sm:py-16 bg-[#EEEAEB] border-b border-[#D8D2D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-extrabold text-[#3A2E29]">
            What do you need today?
          </h2>
        </div>

        {/* 3 Intent Paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Path 1: Listing Services */}
          <div className="bg-white rounded-2xl p-7 border border-[#D8D2D4] shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEEAEB] text-[#0D9BA3] flex items-center justify-center">
                <Home className="w-5 h-5 text-[#0D9BA3]" />
              </div>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                I need help launching a listing
              </h3>
            </div>

            <div>
              <button
                onClick={handleExploreServices}
                className="text-[#0D9BA3] hover:text-[#0b8288] font-bold text-sm underline underline-offset-4 transition flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Explore Listing Services</span>
                <ArrowRight className="w-4 h-4 text-[#FE7311]" />
              </button>
            </div>
          </div>

          {/* Path 2: Contract Services */}
          <div className="bg-white rounded-2xl p-7 border border-[#D8D2D4] shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEEAEB] text-[#0D9BA3] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#0D9BA3]" />
              </div>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                I have an executed contract
              </h3>
            </div>

            <div>
              <button
                onClick={handleExploreServices}
                className="text-[#0D9BA3] hover:text-[#0b8288] font-bold text-sm underline underline-offset-4 transition flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Explore Contract Services</span>
                <ArrowRight className="w-4 h-4 text-[#FE7311]" />
              </button>
            </div>
          </div>

          {/* Path 3: Established Clients */}
          <div className="bg-[#3A2E29] text-white rounded-2xl p-7 border border-[#0D9BA3]/30 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#0D9BA3] flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-[#0D9BA3]" />
              </div>
              <h3 className="text-xl font-montserrat font-extrabold text-white">
                I already work with HTC
              </h3>
            </div>

            <div className="space-y-3">
              <button
                onClick={onSubmitDeal}
                className="bg-[#0D9BA3] hover:bg-[#0b868d] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow transition flex items-center space-x-2 cursor-pointer"
              >
                <span>Submit a New Deal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-slate-300 font-medium leading-normal">
                For established HTC clients.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


