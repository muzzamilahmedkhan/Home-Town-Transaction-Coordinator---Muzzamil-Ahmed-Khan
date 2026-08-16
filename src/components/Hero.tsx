import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FOUNDER_IMAGE } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal?: () => void;
  onSeeHowItWorks?: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<Props> = ({ onBookCall, onExploreServices, onSeeHowItWorks }) => {
  const handleSecondaryClick = () => {
    if (onExploreServices) {
      onExploreServices();
    } else if (onSeeHowItWorks) {
      onSeeHowItWorks();
    } else {
      const el = document.getElementById('what-we-handle') || document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#EEEAEB] pt-8 pb-16 lg:py-20 border-b border-[#D8D2D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 bg-[#3A2E29]/5 border border-[#3A2E29]/15 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#3A2E29]">
              <span className="w-2 h-2 rounded-full bg-[#0D9BA3]" />
              <span>BOUTIQUE REAL ESTATE SUPPORT AGENCY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight leading-[1.08]">
              Smooth Closings.{' '}
              <span className="text-[#FE7311]">
                Period.
              </span>
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-3 text-base sm:text-lg text-[#3A2E29]/90 font-medium leading-relaxed max-w-2xl">
              <p>
                We provide organized listing and contract support behind your real estate business so you can stay client-facing.
              </p>
              <p className="text-sm sm:text-base text-[#3A2E29]">
                Listing Launch. Contract-to-Close. Post-Close. From Yes to Sold, HTC keeps the back end organized and moving for Florida Realtors.
              </p>
              <p className="text-xs sm:text-sm font-extrabold text-[#0D9BA3] uppercase tracking-wider">
                Protect the Agent · Protect the Broker · Protect the Client.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookCall}
                className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>BOOK A FIT CALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleSecondaryClick}
                className="text-[#3A2E29] hover:text-[#0D9BA3] font-bold text-sm underline underline-offset-4 transition flex items-center justify-center space-x-1.5 py-2 cursor-pointer"
              >
                <span>Explore Services + Pricing</span>
                <ArrowRight className="w-4 h-4 text-[#0D9BA3]" />
              </button>
            </div>

          </div>

          {/* Right Hero Visual Column (Michelle's Photo - Clean & Unobstructed) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              {/* Clean founder photograph - no dark overlay hiding her, no floating badges over face */}
              <img
                src={FOUNDER_IMAGE}
                alt="Michelle Martinez, Founder"
                className="w-full h-[460px] sm:h-[500px] object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* Simple Clean Caption Below Photo */}
              <div className="bg-[#3A2E29] p-4 text-white">
                <div className="text-base font-bold font-montserrat text-white">
                  Michelle Martinez, Founder
                </div>
                <div className="text-xs text-[#0D9BA3] font-semibold mt-0.5">
                  Serving Realtors since 1995
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

