import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Calculator, BookOpen, Download, HelpCircle } from 'lucide-react';
import { HEADER_LOGO_IMAGE } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onOpenRoi: () => void;
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
  onOpenAbout?: () => void;
  onOpenTransactionCoordination?: () => void;
  onOpenListingCoordination?: () => void;
  onOpenPricingPlans?: () => void;
  onOpenServicesPricing?: () => void;
  onOpenReviews?: () => void;
  onOpenBlog?: () => void;
  onGoHome?: () => void;
}

export const Navbar: React.FC<Props> = ({
  onBookCall,
  onOpenRoi,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenFaq,
  onOpenAbout,
  onOpenPricingPlans,
  onOpenServicesPricing,
  onOpenReviews,
  onOpenBlog,
  onGoHome
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (resourcesRef.current && !resourcesRef.current.contains(target)) {
        setResourcesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setResourcesDropdownOpen(false);
  };

  const handleLink = (action?: () => void, fallbackId?: string) => {
    closeAll();
    if (action) {
      action();
    } else if (fallbackId) {
      if (onGoHome) {
        onGoHome();
        setTimeout(() => {
          document.getElementById(fallbackId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(fallbackId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#EEEAEB]/95 backdrop-blur-md border-b border-[#D8D2D4] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => handleLink(onGoHome)}>
            <img
              src={HEADER_LOGO_IMAGE}
              alt="Hometown Transaction Coordinators"
              className="h-12 sm:h-14 w-auto object-contain transition group-hover:opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-[#3A2E29]">
            
            {/* Services + Pricing */}
            <button
              onClick={() => handleLink(onOpenServicesPricing || onOpenPricingPlans, 'what-we-handle')}
              className="hover:text-[#0D9BA3] transition cursor-pointer"
            >
              Services + Pricing
            </button>

            {/* How HTC Works */}
            <button
              onClick={() => handleLink(onOpenHowItWorks, 'home-method')}
              className="hover:text-[#0D9BA3] transition cursor-pointer"
            >
              How HTC Works
            </button>

            {/* Why HTC */}
            <button
              onClick={() => handleLink(onOpenWhyHtc, 'choose-path')}
              className="hover:text-[#0D9BA3] transition cursor-pointer"
            >
              Why HTC
            </button>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                className="hover:text-[#0D9BA3] transition flex items-center space-x-1.5 py-2 cursor-pointer"
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesDropdownOpen ? 'rotate-180 text-[#0D9BA3]' : ''}`} />
              </button>
              {resourcesDropdownOpen && (
                <div
                  onMouseLeave={() => setResourcesDropdownOpen(false)}
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-[#D8D2D4] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1"
                >
                  {/* 1. Run the Numbers */}
                  <button
                    onClick={() => handleLink(onOpenRoi)}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#EEEAEB] transition group flex items-start space-x-3 cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-[#0D9BA3]/10 text-[#0D9BA3] group-hover:bg-[#0D9BA3] group-hover:text-white transition">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition normal-case">
                        Run the Numbers
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-tight normal-case mt-0.5">
                        Agent Business Calculator
                      </div>
                    </div>
                  </button>

                  {/* 2. The Hometown Brief */}
                  <button
                    onClick={() => handleLink(onOpenBlog)}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#EEEAEB] transition group flex items-start space-x-3 cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-[#0D9BA3]/10 text-[#0D9BA3] group-hover:bg-[#0D9BA3] group-hover:text-white transition">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition normal-case">
                        The Hometown Brief
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-tight normal-case mt-0.5">
                        Our ongoing blog / SEO + AEO content library
                      </div>
                    </div>
                  </button>

                  {/* 3. Free Guides + Downloads */}
                  <button
                    onClick={() => handleLink(onOpenBlog)}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#EEEAEB] transition group flex items-start space-x-3 cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-[#0D9BA3]/10 text-[#0D9BA3] group-hover:bg-[#0D9BA3] group-hover:text-white transition">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition normal-case">
                        Free Guides + Downloads
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-tight normal-case mt-0.5">
                        Checklists, guides, tools, and free community resources
                      </div>
                    </div>
                  </button>

                  {/* 4. FAQ */}
                  <button
                    onClick={() => handleLink(onOpenFaq)}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#EEEAEB] transition group flex items-start space-x-3 cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-[#0D9BA3]/10 text-[#0D9BA3] group-hover:bg-[#0D9BA3] group-hover:text-white transition">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#3A2E29] group-hover:text-[#0D9BA3] transition normal-case">
                        FAQ
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal leading-tight normal-case mt-0.5">
                        Frequently asked questions & answers
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Meet the Team */}
            <button
              onClick={() => handleLink(onOpenAbout, 'michelle')}
              className="hover:text-[#0D9BA3] transition cursor-pointer"
            >
              Meet the Team
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleLink(onBookCall)}
              className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center space-x-2 cursor-pointer"
            >
              <span>BOOK A FIT CALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => handleLink(onBookCall)}
              className="bg-[#FE7311] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase"
            >
              Book Fit Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3A2E29] rounded-xl hover:bg-[#3A2E29]/10 transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#EEEAEB] border-b border-[#D8D2D4] px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="space-y-2 text-sm font-bold text-[#3A2E29]">
            <button
              onClick={() => handleLink(onOpenServicesPricing || onOpenPricingPlans, 'what-we-handle')}
              className="block w-full text-left py-2.5 px-3 rounded-lg hover:bg-white transition text-xs uppercase tracking-wider"
            >
              Services + Pricing
            </button>

            <button
              onClick={() => handleLink(onOpenHowItWorks, 'home-method')}
              className="block w-full text-left py-2.5 px-3 rounded-lg hover:bg-white transition text-xs uppercase tracking-wider"
            >
              How HTC Works
            </button>

            <button
              onClick={() => handleLink(onOpenWhyHtc, 'choose-path')}
              className="block w-full text-left py-2.5 px-3 rounded-lg hover:bg-white transition text-xs uppercase tracking-wider"
            >
              Why HTC
            </button>

            <div className="pt-2 pb-1 border-t border-[#D8D2D4]">
              <div className="text-[10px] font-extrabold text-[#0D9BA3] uppercase tracking-wider px-3 py-1">Resources</div>
              <div className="space-y-1">
                <button
                  onClick={() => handleLink(onOpenRoi)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white transition"
                >
                  <div className="text-xs font-bold text-[#3A2E29]">Run the Numbers</div>
                  <div className="text-[11px] text-slate-500">Agent Business Calculator</div>
                </button>

                <button
                  onClick={() => handleLink(onOpenBlog)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white transition"
                >
                  <div className="text-xs font-bold text-[#3A2E29]">The Hometown Brief</div>
                  <div className="text-[11px] text-slate-500">Our ongoing blog / SEO + AEO content library</div>
                </button>

                <button
                  onClick={() => handleLink(onOpenBlog)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white transition"
                >
                  <div className="text-xs font-bold text-[#3A2E29]">Free Guides + Downloads</div>
                  <div className="text-[11px] text-slate-500">Checklists, guides, tools, and free community resources</div>
                </button>

                <button
                  onClick={() => handleLink(onOpenFaq)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white transition"
                >
                  <div className="text-xs font-bold text-[#3A2E29]">FAQ</div>
                  <div className="text-[11px] text-slate-500">Frequently asked questions & answers</div>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-[#D8D2D4]">
              <button
                onClick={() => handleLink(onOpenAbout, 'michelle')}
                className="block w-full text-left py-2.5 px-3 rounded-lg hover:bg-white transition text-xs uppercase tracking-wider"
              >
                Meet the Team
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleLink(onBookCall)}
                className="w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center shadow-md"
              >
                BOOK A FIT CALL
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
