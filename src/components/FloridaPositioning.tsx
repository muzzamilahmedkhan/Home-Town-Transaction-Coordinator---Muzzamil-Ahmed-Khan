import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, Compass, Building2, X } from 'lucide-react';

interface Props {
  onBookCall: () => void;
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
}

export const FloridaPositioning: React.FC<Props> = ({ onBookCall, onOpenMiamiTc, onOpenMiamiDadeTc, onOpenBrowardTc, onOpenSouthFloridaTc }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const keyHubs = [
    {
      region: 'South Florida (Tri-County Core)',
      counties: 'Miami-Dade, Broward & Palm Beach',
      description: 'Our founding region with decades of high-density FAR/BAR, condo, and municipal compliance experience.',
      badge: 'Founding Market'
    },
    {
      region: 'Central Florida & Space Coast',
      counties: 'Orange, Osceola, Seminole, Brevard & Volusia',
      description: 'Full transaction support for Orlando metro, vacation home corridors, and growing residential markets.',
      badge: 'Statewide Coverage'
    },
    {
      region: 'Tampa Bay & Suncoast',
      counties: 'Hillsborough, Pinellas, Pasco & Sarasota',
      description: 'Dedicated transaction support for West Coast residential sales, coastal condos, and fast-moving suburbs.',
      badge: 'Statewide Coverage'
    },
    {
      region: 'Southwest Florida',
      counties: 'Collier, Lee & Charlotte',
      description: 'Dedicated file management for Naples, Fort Myers, Cape Coral, and luxury gulf communities.',
      badge: 'Statewide Coverage'
    },
    {
      region: 'North Florida & Panhandle',
      counties: 'Duval, St. Johns, Escambia & Leon',
      description: 'Statewide contract compliance serving Jacksonville, St. Augustine, Pensacola, and Tallahassee.',
      badge: 'Statewide Coverage'
    }
  ];

  return (
    <section id="florida" className="py-16 sm:py-20 bg-white border-b border-[#D8D2D4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
            <MapPin className="w-4 h-4 text-[#FE7311]" />
            <span>FLORIDA-WIDE SUPPORT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold text-[#3A2E29] tracking-tight">
            Florida-wide support. South Florida roots.
          </h2>

          <p className="text-base sm:text-lg text-[#3A2E29]/80 leading-relaxed font-medium">
            HTC serves Realtors throughout Florida, with deep roots and operating experience in Miami-Dade, Broward, and Palm Beach.
          </p>
        </div>

        {/* 2 Simple Ideas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <div className="bg-[#EEEAEB] rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center border border-[#D8D2D4]">
                <Building2 className="w-5 h-5 text-[#0D9BA3]" />
              </div>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                South Florida Roots
              </h3>
              <p className="text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
                Where HTC was built and where our deepest market experience began across Miami-Dade, Broward, and Palm Beach.
              </p>
              <div className="pt-2 flex flex-col space-y-1.5">
                {onOpenMiamiTc && (
                  <button
                    onClick={onOpenMiamiTc}
                    className="text-xs font-bold text-[#0D9BA3] hover:text-[#0b8288] inline-flex items-center space-x-1 underline cursor-pointer text-left"
                  >
                    <span>City of Miami Transaction Coordinator</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FE7311]" />
                  </button>
                )}
                {onOpenMiamiDadeTc && (
                  <button
                    onClick={onOpenMiamiDadeTc}
                    className="text-xs font-bold text-[#FE7311] hover:text-[#d45e0c] inline-flex items-center space-x-1 underline cursor-pointer text-left"
                  >
                    <span>Miami-Dade County TC (34 Municipalities)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  </button>
                )}
                {onOpenBrowardTc && (
                  <button
                    onClick={onOpenBrowardTc}
                    className="text-xs font-bold text-[#0D9BA3] hover:text-[#0b8288] inline-flex items-center space-x-1 underline cursor-pointer text-left"
                  >
                    <span>Broward County TC (Team & Solo Scale)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FE7311]" />
                  </button>
                )}
                {onOpenSouthFloridaTc && (
                  <button
                    onClick={onOpenSouthFloridaTc}
                    className="text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] inline-flex items-center space-x-1 underline cursor-pointer text-left"
                  >
                    <span>South Florida Regional TC Hub (Tri-County)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0D9BA3]" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#EEEAEB] rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0D9BA3] flex items-center justify-center border border-[#D8D2D4]">
                <Compass className="w-5 h-5 text-[#0D9BA3]" />
              </div>
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Statewide Support
              </h3>
              <p className="text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
                Organized real estate support for Realtor partners throughout Florida.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => setModalOpen(true)}
            className="text-[#0D9BA3] hover:text-[#0b8288] font-bold text-base sm:text-lg underline underline-offset-4 transition inline-flex items-center space-x-2 group cursor-pointer"
          >
            <span>Explore Florida Service Areas</span>
            <ArrowRight className="w-4 h-4 text-[#FE7311] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Service Areas Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#D8D2D4] relative my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#3A2E29] text-white p-6 sm:p-8 relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-slate-300 hover:text-white bg-white/10 p-2 rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center space-x-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3 py-1 rounded-full border border-[#0D9BA3]/30 mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>FLORIDA SERVICE AREAS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white">
                Florida-wide support. South Florida roots.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Serving Realtors, brokers, and title partners across all 67 Florida counties.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto">
              <p className="text-xs sm:text-sm text-[#3A2E29]/80 font-medium leading-relaxed bg-[#EEEAEB] p-4 rounded-2xl border border-[#D8D2D4]">
                HTC provides boutique real estate support throughout Florida across two primary service lanes: Listing Services (pre-contract setup & Listing Launch) and Contract Services (executed contract through closing). Whether your file is in Miami Beach, Naples, Orlando, Tampa, or Jacksonville, our Lead TCs manage FAR/BAR contracts, escrow timelines, HOA approvals, and broker compliance with speed and precision.
              </p>

              <div className="space-y-3 pt-2">
                {keyHubs.map((hub, idx) => (
                  <div key={idx} className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-1.5 hover:border-[#0D9BA3] transition">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-extrabold text-[#3A2E29] flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-[#0D9BA3]" />
                        <span>{hub.region}</span>
                      </h4>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#EEEAEB] text-[#3A2E29] border border-[#D8D2D4]">
                        {hub.badge}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#0D9BA3]">
                      Counties: {hub.counties}
                    </div>
                    <p className="text-xs text-[#3A2E29]/80 font-medium leading-relaxed">
                      {hub.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#EEEAEB] p-5 border-t border-[#D8D2D4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-bold text-[#3A2E29]">
                Ready to submit a transaction anywhere in Florida?
              </div>
              <button
                onClick={() => {
                  setModalOpen(false);
                  onBookCall();
                }}
                className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm"
              >
                Book a 15-Minute Fit Call
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
