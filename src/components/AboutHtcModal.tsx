import React from 'react';
import { X, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MEET_MICHELLE_IMAGE } from '../data/content';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const AboutHtcModal: React.FC<Props> = ({ isOpen, onClose, onBookCall }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#D8D2D4] relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#3A2E29] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white bg-white/10 p-2 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 text-[10px] font-extrabold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-3 py-1 rounded-full border border-[#0D9BA3]/30 mb-3">
            <span>ABOUT HTC</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white">
            Mission, Vision, Values & The H.O.M.E. Method™
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
            How Hometown Transaction Coordinators protects Realtors, brokers, and clients across Florida.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto text-[#3A2E29]">
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#EEEAEB] p-5 rounded-2xl border border-[#D8D2D4] space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Mission</span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                To liberate real estate agents from administrative strain so they can focus on clients, listings, and growing their business with complete peace of mind.
              </p>
            </div>

            <div className="bg-[#EEEAEB] p-5 rounded-2xl border border-[#D8D2D4] space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#0D9BA3]">
                <Award className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                To be Florida's premier boutique real estate support agency — delivering structured Listing Services (pre-contract prep & Listing Launch) and Contract Services (executed contract through closing) with complete accuracy and calm execution.
              </p>
            </div>
          </div>

          {/* H.O.M.E. Values */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-extrabold text-[#3A2E29] flex items-center space-x-2">
              <Heart className="w-5 h-5 text-[#FE7311]" />
              <span>H.O.M.E. Values™</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                <div className="text-sm font-bold text-[#0D9BA3]">H — Honor</div>
                <p className="text-xs text-[#3A2E29]/80 font-medium">Honor the client relationship, the contract terms, and the agent's reputation in every interaction.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                <div className="text-sm font-bold text-[#0D9BA3]">O — Order</div>
                <p className="text-xs text-[#3A2E29]/80 font-medium">Maintain systematic file organization, visible calendar deadlines, and defensible audit trails.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                <div className="text-sm font-bold text-[#0D9BA3]">M — Mastery</div>
                <p className="text-xs text-[#3A2E29]/80 font-medium">Deep expertise in Florida FAR/BAR contracts, addenda, riders, escrow rules, and title workflows.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                <div className="text-sm font-bold text-[#0D9BA3]">E — Ease</div>
                <p className="text-xs text-[#3A2E29]/80 font-medium">Deliver a calm, organized closing experience for buyers, sellers, lenders, and closing agents.</p>
              </div>
            </div>
          </div>

          {/* H.O.M.E. Close Method */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-extrabold text-[#3A2E29]">
              H.O.M.E. Close Method™
            </h3>
            <div className="space-y-2.5">
              <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-[#3A2E29]">Stage 1: Honor the Agreement</span>
                  <p className="text-xs text-[#3A2E29]/80 mt-0.5">Thorough intake of contract terms, effective dates, earnest money deadlines, and contingency periods.</p>
                </div>
              </div>
              <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-[#3A2E29]">Stage 2: Organize the File</span>
                  <p className="text-xs text-[#3A2E29]/80 mt-0.5">Assembling disclosure packets, HOA applications, lender docs, and broker compliance records.</p>
                </div>
              </div>
              <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-[#3A2E29]">Stage 3: Monitor the Milestones</span>
                  <p className="text-xs text-[#3A2E29]/80 mt-0.5">Tracking inspection periods, loan commitments, title commitments, and appraisal releases.</p>
                </div>
              </div>
              <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-[#3A2E29]">Stage 4: Ease the Close</span>
                  <p className="text-xs text-[#3A2E29]/80 mt-0.5">Final walk-through verification, CD review, wire instructions, funding authorization, and broker archive.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deeper Founder Story & Agency Leadership */}
          <div className="bg-[#3A2E29] text-white p-6 sm:p-8 rounded-3xl border border-[#0D9BA3]/40 space-y-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <img
                src={MEET_MICHELLE_IMAGE}
                alt="Michelle Martinez Founder"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#0D9BA3] flex-shrink-0 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/40 px-2.5 py-0.5 rounded-full border border-[#0D9BA3]/30">
                  FOUNDER STORY & AGENCY LEADERSHIP
                </div>
                <h3 className="text-lg sm:text-xl font-montserrat font-extrabold text-white">
                  Michelle Martinez, Founder
                </h3>
                <p className="text-xs text-[#0D9BA3] font-semibold">
                  Serving Realtors Since 1995 • South Florida Founded
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed border-t border-[#0D9BA3]/20 pt-4">
              <p>
                Founded in South Florida with deep roots in Miami-Dade and Broward, Michelle Martinez established Hometown Transaction Coordinators after recognizing a systemic bottleneck in high-volume real estate: top-producing Realtors losing hours every day to administrative gridlock, HOA approval delays, and compliance anxiety.
              </p>
              <p>
                With 30+ years supporting real estate professionals, Michelle developed the H.O.M.E. Close Method™ and scaled HTC into a boutique agency. Rather than relying on a solo coordinator, HTC provides agents with a dedicated support team and bilingual specialists offering consistent backend support.
              </p>
            </div>

            <blockquote className="text-xs sm:text-sm font-montserrat font-extrabold italic text-white border-l-4 border-[#FE7311] pl-4 py-1 leading-relaxed bg-black/20 rounded-r-xl">
              "My mission in founding HTC was simple: build an agency that gives Florida real estate professionals total confidence in their closing pipeline so they can spend 100% of their energy serving clients and winning deals."
            </blockquote>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#EEEAEB] p-5 border-t border-[#D8D2D4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold text-[#3A2E29]">
            Ready to experience the H.O.M.E. advantage?
          </div>
          <button
            onClick={() => {
              onClose();
              onBookCall();
            }}
            className="w-full sm:w-auto bg-[#FE7311] hover:bg-[#e05f03] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer shadow"
          >
            <span>Book a 15-Minute Fit Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
