import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, FOOTER_LOGO_IMAGE } from '../data/content';
import { Language } from '../types';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onOpenRoi: () => void;
  onOpenAbout: () => void;
  onOpenServicesPricing: () => void;
  onOpenHowItWorks?: () => void;
  onOpenWhyHtc?: () => void;
  onOpenWhoWeSupport?: () => void;
  onOpenMiamiTc?: () => void;
  onOpenMiamiDadeTc?: () => void;
  onOpenBrowardTc?: () => void;
  onOpenSouthFloridaTc?: () => void;
  onOpenContractToClose?: () => void;
  onOpenRealtorTc?: () => void;
  onOpenFaq?: () => void;
  onOpenBookCallPage?: () => void;
  onOpenTransactionCoordination?: () => void;
  onOpenListingCoordination?: () => void;
  onOpenPricingPlans?: () => void;
  onOpenReviews?: () => void;
  onOpenBlog?: () => void;
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
}

export const Footer: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onOpenRoi,
  onOpenAbout,
  onOpenServicesPricing,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenWhoWeSupport,
  onOpenMiamiTc,
  onOpenMiamiDadeTc,
  onOpenBrowardTc,
  onOpenSouthFloridaTc,
  onOpenContractToClose,
  onOpenRealtorTc,
  onOpenFaq,
  onOpenBookCallPage,
  onOpenTransactionCoordination,
  onOpenListingCoordination,
  onOpenPricingPlans,
  onOpenReviews,
  onOpenBlog,
  language = 'en',
  onLanguageChange
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3A2E29] text-slate-300 text-xs border-t border-[#0D9BA3]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#0D9BA3]/30">
          
          {/* Brand Info & Founder Sign-Off */}
          <div className="lg:col-span-4 space-y-5">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={FOOTER_LOGO_IMAGE}
                alt="Hometown Transaction Coordinators"
                className="h-14 sm:h-16 w-auto object-contain transition group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm font-medium">
              Boutique real estate support for Florida Realtors — from Listing Launch to Contract-to-Close and Post-Close. South Florida-founded, serving statewide.
            </p>

            {/* Founder Sign-Off */}
            <div className="pt-2">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#0D9BA3] mb-1">
                Founder Sign-Off
              </div>
              <div className="inline-flex items-center space-x-2 font-montserrat font-extrabold text-sm text-white bg-black/30 px-3.5 py-2 rounded-xl border border-[#0D9BA3]/40">
                <span>Always forward. →</span>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-montserrat font-extrabold text-white text-xs uppercase tracking-wider">
              Services
            </div>
            <ul className="space-y-2 text-slate-300 font-medium text-xs">
              <li>
                <button
                  onClick={() => {
                    if (onOpenPricingPlans) {
                      onOpenPricingPlans();
                    } else if (onOpenServicesPricing) {
                      onOpenServicesPricing();
                    }
                  }}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Plans & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onOpenHowItWorks) {
                      onOpenHowItWorks();
                    } else {
                      scrollToSection('home-method');
                    }
                  }}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  How HTC Works
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-montserrat font-extrabold text-white text-xs uppercase tracking-wider">
              Company
            </div>
            <ul className="space-y-2 text-slate-300 font-medium text-xs">
              <li>
                <button
                  onClick={() => {
                    if (onOpenWhyHtc) {
                      onOpenWhyHtc();
                    } else {
                      scrollToSection('choose-path');
                    }
                  }}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Why HTC
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  About HTC
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('michelle')}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Meet the Team
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRoi}
                  className="hover:text-white transition cursor-pointer text-left"
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Client */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-montserrat font-extrabold text-white text-xs uppercase tracking-wider">
              Client
            </div>
            <ul className="space-y-2 text-slate-300 font-medium text-xs">
              <li>
                <button
                  onClick={onSubmitDeal}
                  className="hover:text-white transition cursor-pointer text-left text-[#FE7311] font-bold"
                >
                  Submit a New deal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLanguageChange && onLanguageChange(language === 'en' ? 'es' : 'en')}
                  className="hover:text-white transition cursor-pointer text-left text-slate-300 font-medium"
                >
                  {language === 'es' ? 'English' : 'Español'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-montserrat font-extrabold text-white text-xs uppercase tracking-wider">
              Contact
            </div>
            <ul className="space-y-2.5 text-slate-300 font-medium text-xs">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#FE7311] flex-shrink-0" />
                <a
                  href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, '')}`}
                  className="hover:text-white font-semibold transition"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#FE7311] flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-white transition truncate"
                >
                  {EMAIL_ADDRESS}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 font-medium">
          <div>
            © 2026 HOMETOWN TRANSACTION COORDINATORS (HTC). ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Boutique Real Estate Support Agency</span>
          </div>
        </div>

      </div>
    </footer>
  );
};


