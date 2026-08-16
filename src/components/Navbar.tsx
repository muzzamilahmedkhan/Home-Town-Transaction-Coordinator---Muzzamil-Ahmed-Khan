import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
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
  onOpenWhoWeSupport,
  onOpenMiamiTc,
  onOpenMiamiDadeTc,
  onOpenBrowardTc,
  onOpenSouthFloridaTc,
  onOpenContractToClose,
  onOpenRealtorTc,
  onOpenFaq,
  onOpenAbout,
  onOpenTransactionCoordination,
  onOpenListingCoordination,
  onOpenPricingPlans,
  onOpenServicesPricing,
  onOpenReviews,
  onOpenBlog,
  onGoHome
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) setServicesDropdownOpen(false);
      if (teamRef.current && !teamRef.current.contains(target)) setTeamDropdownOpen(false);
      if (resourcesRef.current && !resourcesRef.current.contains(target)) setResourcesDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setTeamDropdownOpen(false);
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
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-[#3A2E29]">
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => { setServicesDropdownOpen(true); setTeamDropdownOpen(false); setResourcesDropdownOpen(false); }}
                className="hover:text-[#0D9BA3] transition flex items-center space-x-1.5 py-2 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#0D9BA3]' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full -left-10 w-[600px] bg-white rounded-2xl shadow-2xl border border-[#D8D2D4] p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {/* Col 1 */}
                    <div className="space-y-3">
                      <div className="text-[10px] font-extrabold text-[#0D9BA3] uppercase tracking-wider border-b border-[#D8D2D4] pb-2 mb-2">Transaction Support</div>
                      <button onClick={() => handleLink(onOpenTransactionCoordination)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">Transaction Coordination</button>
                      <button onClick={() => handleLink(onOpenListingCoordination)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">Listing Coordination</button>
                      <button onClick={() => handleLink(onOpenContractToClose)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">Contract-to-Close Services</button>
                    </div>
                    {/* Col 2 */}
                    <div className="space-y-3">
                      <div className="text-[10px] font-extrabold text-[#0D9BA3] uppercase tracking-wider border-b border-[#D8D2D4] pb-2 mb-2">For Realtors</div>
                      <button onClick={() => handleLink(onOpenWhoWeSupport)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">Who We Support</button>
                      <button onClick={() => handleLink(onOpenRealtorTc)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">Transaction Coordination for Realtors</button>
                    </div>
                    {/* Col 3 */}
                    <div className="space-y-3">
                      <div className="text-[10px] font-extrabold text-[#0D9BA3] uppercase tracking-wider border-b border-[#D8D2D4] pb-2 mb-2">Florida Service Areas</div>
                      <button onClick={() => handleLink(onOpenMiamiTc)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">Miami TC</button>
                      <button onClick={() => handleLink(onOpenMiamiDadeTc)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">Miami-Dade County TC</button>
                      <button onClick={() => handleLink(onOpenBrowardTc)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">Broward County TC</button>
                      <button onClick={() => handleLink(onOpenSouthFloridaTc)} className="block text-left text-xs font-bold text-[#3A2E29] hover:text-[#0D9BA3] transition capitalize-none normal-case">South Florida TC</button>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <button onClick={() => handleLink(onOpenPricingPlans || onOpenServicesPricing, 'what-we-handle')} className="hover:text-[#0D9BA3] transition cursor-pointer">
              Pricing
            </button>
            <button onClick={() => handleLink(onOpenHowItWorks, 'home-method')} className="hover:text-[#0D9BA3] transition cursor-pointer">
              How HTC Works
            </button>
            <button onClick={() => handleLink(onOpenWhyHtc, 'choose-path')} className="hover:text-[#0D9BA3] transition cursor-pointer">
              Why HTC
            </button>

            {/* Meet The Team Dropdown */}
            <div className="relative" ref={teamRef}>
              <button
                onMouseEnter={() => { setTeamDropdownOpen(true); setServicesDropdownOpen(false); setResourcesDropdownOpen(false); }}
                onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                className="hover:text-[#0D9BA3] transition flex items-center space-x-1.5 py-2 cursor-pointer"
              >
                <span>Meet The Team</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${teamDropdownOpen ? 'rotate-180 text-[#0D9BA3]' : ''}`} />
              </button>
              {teamDropdownOpen && (
                <div onMouseLeave={() => setTeamDropdownOpen(false)} className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-[#D8D2D4] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button onClick={() => handleLink(onOpenAbout, 'michelle')} className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-[#EEEAEB] text-xs font-bold text-[#3A2E29] transition normal-case">
                    About Michelle
                  </button>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onMouseEnter={() => { setResourcesDropdownOpen(true); setServicesDropdownOpen(false); setTeamDropdownOpen(false); }}
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                className="hover:text-[#0D9BA3] transition flex items-center space-x-1.5 py-2 cursor-pointer"
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesDropdownOpen ? 'rotate-180 text-[#0D9BA3]' : ''}`} />
              </button>
              {resourcesDropdownOpen && (
                <div onMouseLeave={() => setResourcesDropdownOpen(false)} className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-xl border border-[#D8D2D4] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                  <button onClick={() => handleLink(onOpenFaq)} className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-[#EEEAEB] text-xs font-bold text-[#3A2E29] transition normal-case">
                    FAQs
                  </button>
                  <button onClick={() => handleLink(onOpenReviews)} className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-[#EEEAEB] text-xs font-bold text-[#3A2E29] transition normal-case">
                    Reviews / Testimonials
                  </button>
                  <button onClick={() => handleLink(onOpenBlog)} className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-[#EEEAEB] text-xs font-bold text-[#3A2E29] transition normal-case">
                    Blog / Resources
                  </button>
                  <button onClick={() => handleLink(onOpenRoi)} className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-[#EEEAEB] text-xs font-bold text-[#3A2E29] transition normal-case">
                    Agent Business Calculator
                  </button>
                </div>
              )}
            </div>
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
        <div className="lg:hidden bg-[#EEEAEB] border-b border-[#D8D2D4] px-4 pt-3 pb-6 space-y-3 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1 text-sm font-semibold text-[#3A2E29]">
            
            <div className="text-[10px] font-extrabold text-[#0D9BA3] uppercase tracking-wider pt-2 pb-1 border-b border-[#D8D2D4]">Services</div>
            <button onClick={() => handleLink(onOpenTransactionCoordination)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">Transaction Coordination</button>
            <button onClick={() => handleLink(onOpenListingCoordination)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">Listing Coordination</button>
            <button onClick={() => handleLink(onOpenContractToClose)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">Contract-to-Close Services</button>
            <button onClick={() => handleLink(onOpenWhoWeSupport)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">Who We Support</button>
            <button onClick={() => handleLink(onOpenRealtorTc)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">TC for Realtors</button>
            <button onClick={() => handleLink(onOpenMiamiTc)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">Miami TC</button>
            <button onClick={() => handleLink(onOpenMiamiDadeTc)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">Miami-Dade County TC</button>
            <button onClick={() => handleLink(onOpenBrowardTc)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">Broward County TC</button>
            <button onClick={() => handleLink(onOpenSouthFloridaTc)} className="block w-full text-left py-2 hover:bg-white px-2 rounded">South Florida TC</button>
            
            <div className="text-[10px] font-extrabold text-[#0D9BA3] uppercase tracking-wider pt-4 pb-1 border-b border-[#D8D2D4]">Company & Resources</div>
            <button onClick={() => handleLink(onOpenPricingPlans || onOpenServicesPricing, 'what-we-handle')} className="block w-full text-left py-2 hover:bg-white px-2 rounded uppercase tracking-wider text-xs">Pricing</button>
            <button onClick={() => handleLink(onOpenHowItWorks, 'home-method')} className="block w-full text-left py-2 hover:bg-white px-2 rounded uppercase tracking-wider text-xs">How HTC Works</button>
            <button onClick={() => handleLink(onOpenWhyHtc, 'choose-path')} className="block w-full text-left py-2 hover:bg-white px-2 rounded uppercase tracking-wider text-xs">Why HTC</button>
            <button onClick={() => handleLink(onOpenAbout, 'michelle')} className="block w-full text-left py-2 hover:bg-white px-2 rounded uppercase tracking-wider text-xs">Meet The Team</button>
            <button onClick={() => handleLink(onOpenFaq)} className="block w-full text-left py-2 hover:bg-white px-2 rounded uppercase tracking-wider text-xs">FAQ</button>
            <button onClick={() => handleLink(onOpenReviews)} className="block w-full text-left py-2 hover:bg-white px-2 rounded uppercase tracking-wider text-xs">Reviews / Testimonials</button>
            <button onClick={() => handleLink(onOpenBlog)} className="block w-full text-left py-2 hover:bg-white px-2 rounded uppercase tracking-wider text-xs">Blog / Resources</button>
            <button onClick={() => handleLink(onOpenRoi)} className="block w-full text-left py-2 hover:bg-white px-2 rounded uppercase tracking-wider text-xs">Agent Business Calculator</button>
          </div>
        </div>
      )}
    </header>
  );
};
