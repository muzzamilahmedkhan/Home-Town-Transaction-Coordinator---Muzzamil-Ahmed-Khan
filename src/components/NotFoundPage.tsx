import React from 'react';
import { Home, ArrowRight, HelpCircle, PhoneCall, FileText } from 'lucide-react';

interface Props {
  onGoHome: () => void;
  onOpenPricing?: () => void;
  onOpenFaq?: () => void;
  onBookCall?: () => void;
  requestedPath?: string;
}

export const NotFoundPage: React.FC<Props> = ({
  onGoHome,
  onOpenPricing,
  onOpenFaq,
  onBookCall,
  requestedPath
}) => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#EEEAEB]">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-14 rounded-3xl border border-[#D8D2D4] shadow-sm">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <span>Error 404 · Page Not Found</span>
        </div>

        {/* Big Code */}
        <div className="space-y-2">
          <div className="text-6xl sm:text-7xl font-extrabold text-[#3A2E29] font-serif tracking-tight">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            We couldn’t find that page
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The link you entered may be mistyped, moved, or no longer exists.
            {requestedPath && (
              <span className="block mt-2 font-mono text-xs text-slate-500 bg-slate-100 py-1 px-2.5 rounded-md inline-block max-w-full truncate">
                {requestedPath}
              </span>
            )}
          </p>
        </div>

        {/* Primary CTA: Go to Home Page */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onGoHome}
            id="not-found-return-home-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#FE7311] hover:bg-[#FE7311]/90 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Page</span>
          </button>

          {onBookCall && (
            <button
              onClick={onBookCall}
              id="not-found-book-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#3A2E29] hover:bg-[#3A2E29]/90 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a 15-Minute Fit Call</span>
            </button>
          )}
        </div>

        {/* Helpful Shortcuts */}
        <div className="pt-8 border-t border-[#D8D2D4]/70">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
            {onOpenPricing && (
              <button
                onClick={onOpenPricing}
                className="inline-flex items-center space-x-1.5 text-[#3A2E29] hover:text-[#FE7311] transition py-1.5 px-3 rounded-lg hover:bg-slate-100"
              >
                <FileText className="w-3.5 h-3.5 text-[#0D9BA3]" />
                <span>Services & Pricing</span>
              </button>
            )}
            {onOpenFaq && (
              <button
                onClick={onOpenFaq}
                className="inline-flex items-center space-x-1.5 text-[#3A2E29] hover:text-[#FE7311] transition py-1.5 px-3 rounded-lg hover:bg-slate-100"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#0D9BA3]" />
                <span>Frequently Asked Questions</span>
              </button>
            )}
            <button
              onClick={onGoHome}
              className="inline-flex items-center space-x-1 text-[#0D9BA3] hover:underline py-1.5 px-3"
            >
              <span>Explore All Pages</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
