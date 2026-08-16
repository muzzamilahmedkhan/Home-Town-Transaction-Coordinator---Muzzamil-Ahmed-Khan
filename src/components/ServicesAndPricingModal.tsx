import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, FileCheck, Calendar, Info, Sparkles, UserPlus } from 'lucide-react';
import { CENTRAL_SERVICES_PRICING } from '../data/content';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
  onSubmitDeal?: () => void;
}

export const ServicesAndPricingModal: React.FC<Props> = ({ isOpen, onClose, onBookCall, onSubmitDeal }) => {
  if (!isOpen) return null;

  const data = CENTRAL_SERVICES_PRICING;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#EEEAEB] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#D8D2D4] relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#3A2E29] text-white p-6 sm:p-8 relative border-b border-[#0D9BA3]/40">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white bg-white/10 p-2 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3 py-1 rounded-full border border-[#0D9BA3]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>SINGLE SOURCE OF TRUTH</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white">
            Services & Pricing Model
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
            Centrally managed transaction support packages, file rates, onboarding guidelines, and terms.
          </p>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-10 max-h-[78vh] overflow-y-auto text-[#3A2E29]">
          
          {/* Agency Positioning Banner */}
          <div className="bg-white p-5 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
              BOUTIQUE REAL ESTATE SUPPORT AGENCY
            </div>
            <p className="text-xs sm:text-sm text-[#3A2E29]/90 font-medium leading-relaxed">
              {data.agencyPositioning}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {data.serviceLanes.map((lane) => (
                <div key={lane.id} className="bg-[#EEEAEB] p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                  <div className="text-xs font-bold text-[#3A2E29] flex items-center justify-between">
                    <span>{lane.title}</span>
                    <span className="text-[10px] uppercase bg-white px-2 py-0.5 rounded font-extrabold text-[#0D9BA3] border border-[#D8D2D4]">{lane.tagline}</span>
                  </div>
                  <p className="text-xs text-[#3A2E29]/80 font-medium leading-relaxed">
                    {lane.desc}
                  </p>
                  {lane.note && (
                    <p className="text-[11px] text-[#FE7311] font-semibold pt-1">
                      * {lane.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Current Services Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-sm font-extrabold uppercase tracking-wider text-[#0D9BA3]">
              <FileCheck className="w-4 h-4 text-[#FE7311]" />
              <span>1. Current Transaction Services</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.currentServices.map((srv, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-[#D8D2D4] shadow-sm space-y-1">
                  <h4 className="text-sm font-bold text-[#3A2E29]">{srv.title}</h4>
                  <p className="text-xs text-[#3A2E29]/80 font-medium leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 & 3: Current Packages & Pricing */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm font-extrabold uppercase tracking-wider text-[#0D9BA3]">
                <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
                <span>2. Service Packages & Central Rates</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-6 border-2 flex flex-col justify-between space-y-6 ${
                    pkg.id === 'pro'
                      ? 'bg-[#3A2E29] text-white border-[#0D9BA3] shadow-lg'
                      : 'bg-white text-[#3A2E29] border-[#D8D2D4]'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        pkg.id === 'pro'
                          ? 'bg-[#0D9BA3] text-white'
                          : 'bg-[#3A2E29]/10 text-[#3A2E29]'
                      }`}>
                        {pkg.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-lg font-montserrat font-extrabold ${pkg.id === 'pro' ? 'text-white' : 'text-[#3A2E29]'}`}>
                        {pkg.name}
                      </h3>
                      <div className="flex items-baseline space-x-1 mt-2">
                        <span className={`text-3xl font-montserrat font-extrabold ${pkg.id === 'pro' ? 'text-[#0D9BA3]' : 'text-[#3A2E29]'}`}>
                          {pkg.price}
                        </span>
                        <span className={`text-xs font-medium ${pkg.id === 'pro' ? 'text-slate-300' : 'text-slate-500'}`}>
                          / {pkg.priceUnit}
                        </span>
                      </div>
                    </div>

                    <p className={`text-xs font-medium leading-relaxed ${pkg.id === 'pro' ? 'text-slate-300' : 'text-[#3A2E29]/80'}`}>
                      {pkg.description}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-200/20 text-xs font-medium">
                      {pkg.features.map((ft, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${pkg.id === 'pro' ? 'text-[#0D9BA3]' : 'text-[#0D9BA3]'}`} />
                          <span>{ft}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onBookCall();
                    }}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer ${
                      pkg.id === 'pro'
                        ? 'bg-[#FE7311] hover:bg-[#e05f03] text-white'
                        : 'bg-[#3A2E29] hover:bg-[#2A201C] text-white'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Registration & Onboarding */}
          <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] space-y-3">
            <div className="flex items-center space-x-2 text-sm font-extrabold uppercase tracking-wider text-[#3A2E29]">
              <UserPlus className="w-4 h-4 text-[#FE7311]" />
              <span>{data.onboarding.title}</span>
            </div>
            <p className="text-xs text-[#3A2E29]/90 font-medium leading-relaxed">
              {data.onboarding.summary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {data.onboarding.steps.map((st, i) => (
                <div key={i} className="bg-[#EEEAEB] p-3 rounded-xl border border-[#D8D2D4] text-xs font-semibold text-[#3A2E29]">
                  {st}
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 & 6: Add-Ons & Cancellation Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Add-Ons */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] space-y-3">
              <div className="flex items-center space-x-2 text-sm font-extrabold uppercase tracking-wider text-[#0D9BA3]">
                <Calendar className="w-4 h-4 text-[#0D9BA3]" />
                <span>Specialized Add-Ons</span>
              </div>
              <div className="space-y-2 pt-1">
                {data.addOns.map((add, i) => (
                  <div key={i} className="bg-[#EEEAEB] p-3 rounded-xl border border-[#D8D2D4] space-y-0.5">
                    <div className="text-xs font-bold text-[#3A2E29]">{add.title}</div>
                    <div className="text-[11px] text-[#3A2E29]/80 font-medium">{add.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation Terms */}
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] space-y-3">
              <div className="flex items-center space-x-2 text-sm font-extrabold uppercase tracking-wider text-[#3A2E29]">
                <Info className="w-4 h-4 text-[#FE7311]" />
                <span>{data.cancellationTerms.title}</span>
              </div>
              <p className="text-xs text-[#3A2E29]/80 font-medium leading-relaxed pt-1">
                {data.cancellationTerms.details}
              </p>
              <div className="p-3 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] text-[11px] text-[#3A2E29] font-semibold">
                ✓ No retainer required. Clean paper trail provided upon any file withdrawal.
              </div>
            </div>

          </div>

          {/* Section 7: Future Customer vs. Client Structure */}
          <div className="bg-[#3A2E29] text-white p-6 sm:p-7 rounded-2xl border border-[#0D9BA3]/40 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3]">
              <Sparkles className="w-4 h-4 text-[#FE7311]" />
              <span>{data.futureStructure.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
              {data.futureStructure.details}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-white p-5 border-t border-[#D8D2D4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold text-[#3A2E29]">
            Have questions about onboarding or selecting the right tier?
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            {onSubmitDeal && (
              <button
                onClick={() => {
                  onClose();
                  onSubmitDeal();
                }}
                className="bg-[#3A2E29] hover:bg-[#2A201C] text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer"
              >
                Submit File (Clients)
              </button>
            )}
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Book Fit Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
