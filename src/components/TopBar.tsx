import React from 'react';
import { Phone, Clock, Globe, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, OFFICE_HOURS } from '../data/content';
import { Language } from '../types';

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onSubmitDeal: () => void;
}

export const TopBar: React.FC<Props> = ({
  language,
  onLanguageChange,
  onSubmitDeal,
}) => {
  return (
    <div className="bg-[#3A2E29] text-slate-200 text-xs py-2 px-4 border-b border-[#0D9BA3]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Left Info Items */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, '')}`}
            className="flex items-center space-x-1.5 hover:text-white transition font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#FE7311]" />
            <span className="font-semibold text-white">{PHONE_NUMBER}</span>
          </a>

          <span className="hidden sm:inline text-[#0D9BA3]">•</span>

          <div className="flex items-center space-x-1.5 text-slate-300 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#0D9BA3]" />
            <span>{OFFICE_HOURS}</span>
          </div>
        </div>

        {/* Right Actions & Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <button
            onClick={() => onLanguageChange(language === 'en' ? 'es' : 'en')}
            className="flex items-center space-x-1 text-slate-300 hover:text-white bg-[#0D9BA3]/20 hover:bg-[#0D9BA3]/30 border border-[#0D9BA3]/40 px-2 py-1 rounded-md transition text-[11px] font-medium cursor-pointer"
          >
            <Globe className="w-3 h-3 text-[#0D9BA3]" />
            <span>{language === 'en' ? 'Español' : 'English'}</span>
          </button>

          <span className="text-[#0D9BA3]">•</span>

          {/* Current Client CTA - Subtle link so it does not compete visually with prospect CTAs */}
          <button
            onClick={onSubmitDeal}
            className="text-slate-300 hover:text-white text-[11px] font-medium underline underline-offset-2 transition flex items-center space-x-1 cursor-pointer"
          >
            <span>Current Client? Submit a Deal</span>
            <ArrowRight className="w-3 h-3 text-[#0D9BA3]" />
          </button>
        </div>

      </div>
    </div>
  );
};

