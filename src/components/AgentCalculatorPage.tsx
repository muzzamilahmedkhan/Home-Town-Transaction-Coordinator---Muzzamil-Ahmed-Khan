import React, { useState, useMemo, useEffect } from 'react';
import {
  Calculator,
  Clock,
  TrendingUp,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  FileText,
  ArrowLeft,
  Sparkles,
  RotateCcw,
  Info,
  ShieldCheck
} from 'lucide-react';
import { PRICING_CONFIG } from '../data/content';

interface Props {
  onBookCall: () => void;
  onExploreServices: () => void;
  onGoHome: () => void;
  onOpenResources?: () => void;
}

type Mode = 'time-value' | 'in-house' | 'growth-scenario';

export const AgentCalculatorPage: React.FC<Props> = ({
  onBookCall,
  onExploreServices,
  onGoHome,
  onOpenResources
}) => {
  const getInitialMode = (): Mode => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#hire-or-htc' || hash.includes('hire-or-htc')) return 'in-house';
      if (hash === '#20-percent-more' || hash.includes('20-percent-more')) return 'growth-scenario';
      if (hash === '#time-worth' || hash.includes('time-worth')) return 'time-value';
    }
    return 'time-value';
  };

  const [activeMode, setActiveMode] = useState<Mode>(getInitialMode);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const switchMode = (mode: Mode, anchorId: string) => {
    setActiveMode(mode);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${anchorId}`);
    }
  };

  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.toLowerCase();
      let targetMode: Mode | null = null;
      let targetId: string | null = null;
      if (hash === '#hire-or-htc' || hash.includes('hire-or-htc')) {
        targetMode = 'in-house';
        targetId = 'hire-or-htc';
      } else if (hash === '#20-percent-more' || hash.includes('20-percent-more')) {
        targetMode = 'growth-scenario';
        targetId = '20-percent-more';
      } else if (hash === '#time-worth' || hash.includes('time-worth')) {
        targetMode = 'time-value';
        targetId = 'time-worth';
      }

      if (targetMode) {
        setActiveMode(targetMode);
        if (targetId) {
          setTimeout(() => {
            const el = document.getElementById(targetId!);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Real Estate Agent Business Calculator | Hometown TC';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalMetaContent = metaDesc ? metaDesc.getAttribute('content') : '';
    const targetMetaContent =
      'Use Hometown TC’s free real estate business calculators to estimate the value of your time, compare hiring a transaction coordinator with HTC, and model potential business growth scenarios.';

    if (metaDesc) {
      metaDesc.setAttribute('content', targetMetaContent);
    }

    // Structured Data for WebApplication, BreadcrumbList & FAQPage
    const prevScript = document.getElementById('agent-calculator-schema');
    if (prevScript) {
      prevScript.remove();
    }

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://hometowntc.com';

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'agent-calculator-schema';
    schemaScript.text = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Real Estate Agent Business Calculator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        url: `${origin}/agent-business-calculator/`,
        description:
          'Free real estate business calculators to estimate hourly time value, compare hiring an in-house transaction coordinator vs. Hometown TC, and model closed business production scenarios.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        featureList: [
          'WHAT’S MY TIME WORTH? (Hourly value and admin cost)',
          'HIRE A TC OR USE HTC? (In-house vs outsourced TC cost comparison)',
          'WHAT COULD 20% MORE LOOK LIKE? (20% closed sides and GCI growth model)'
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: origin
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: `${origin}/resources/`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Run the Numbers',
            item: `${origin}/agent-business-calculator/`
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does “my time worth” mean?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This calculator divides the GCI you enter by the working hours you enter to estimate the gross commission income your business generates per working hour. It is a planning metric, not your hourly wage or take-home income.'
            }
          },
          {
            '@type': 'Question',
            name: 'What costs are included in the hire vs. HTC comparison?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The calculator uses the salary, employer costs, and annual tools or hiring costs you enter to estimate the direct annual cost of employing a transaction coordinator. You can change every assumption.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why does the growth calculator use 20%?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The calculator uses a fixed 20% scenario so you can see what a meaningful increase in closed business could look like using your current numbers.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does HTC guarantee I will close 20% more business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The calculator is a planning tool, not a forecast or guarantee. Growth depends on your market, lead flow, conversion, activity, capacity, and many other factors.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which HTC plan should I use in my calculations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Base and Pro are both shown so you can compare the support investment at your volume.'
            }
          }
        ]
      }
    ]);
    document.head.appendChild(schemaScript);

    window.scrollTo(0, 0);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalMetaContent) {
        metaDesc.setAttribute('content', originalMetaContent);
      }
      const existingScript = document.getElementById('agent-calculator-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Central pricing from PRICING_CONFIG
  const basePrice = PRICING_CONFIG.basePrice || 375;
  const proPrice = PRICING_CONFIG.proPrice || 475;

  // ---------------------------------------------------------------------------
  // MODE 1 DEFAULT & STATE
  // ---------------------------------------------------------------------------
  const mode1Defaults = {
    annualGci: 240000,
    weeklyHours: 45,
    workingWeeks: 48,
    annualSides: 36,
    adminHoursPerFile: 6
  };
  const [m1, setM1] = useState(mode1Defaults);

  // Mode 1 Calculations (LOCKED FORMULA)
  const m1AnnualWorkHours = useMemo(
    () => (m1.weeklyHours > 0 && m1.workingWeeks > 0 ? m1.weeklyHours * m1.workingWeeks : 0),
    [m1.weeklyHours, m1.workingWeeks]
  );

  const m1GciPerHour = useMemo(
    () => (m1AnnualWorkHours > 0 ? m1.annualGci / m1AnnualWorkHours : 0),
    [m1.annualGci, m1AnnualWorkHours]
  );

  const m1ModeledTimeValuePerFile = useMemo(
    () => m1GciPerHour * m1.adminHoursPerFile,
    [m1GciPerHour, m1.adminHoursPerFile]
  );

  const m1AnnualAdminHours = useMemo(
    () => m1.annualSides * m1.adminHoursPerFile,
    [m1.annualSides, m1.adminHoursPerFile]
  );

  const m1AnnualModeledAdminTimeValue = useMemo(
    () => m1AnnualAdminHours * m1GciPerHour,
    [m1AnnualAdminHours, m1GciPerHour]
  );

  const m1HtcBaseAnnualInvestment = useMemo(
    () => m1.annualSides * basePrice,
    [m1.annualSides, basePrice]
  );

  const m1HtcProAnnualInvestment = useMemo(
    () => m1.annualSides * proPrice,
    [m1.annualSides, proPrice]
  );

  const m1BaseModeledDifference = useMemo(
    () => m1AnnualModeledAdminTimeValue - m1HtcBaseAnnualInvestment,
    [m1AnnualModeledAdminTimeValue, m1HtcBaseAnnualInvestment]
  );

  const m1ProModeledDifference = useMemo(
    () => m1AnnualModeledAdminTimeValue - m1HtcProAnnualInvestment,
    [m1AnnualModeledAdminTimeValue, m1HtcProAnnualInvestment]
  );

  // ---------------------------------------------------------------------------
  // MODE 2 DEFAULT & STATE
  // ---------------------------------------------------------------------------
  const mode2Defaults = {
    annualSides: 36,
    inHouseSalary: 65000,
    employerBurdenPercent: 20,
    annualToolsRecruiting: 3000
  };
  const [m2, setM2] = useState(mode2Defaults);

  // Mode 2 Calculations (LOCKED FORMULA)
  const m2EmployerBurdenAmount = useMemo(
    () => m2.inHouseSalary * (m2.employerBurdenPercent / 100),
    [m2.inHouseSalary, m2.employerBurdenPercent]
  );

  const m2LoadedInHouseCost = useMemo(
    () => m2.inHouseSalary + m2EmployerBurdenAmount + m2.annualToolsRecruiting,
    [m2.inHouseSalary, m2EmployerBurdenAmount, m2.annualToolsRecruiting]
  );

  const m2InHouseCostPerSide = useMemo(
    () => (m2.annualSides > 0 ? m2LoadedInHouseCost / m2.annualSides : 0),
    [m2LoadedInHouseCost, m2.annualSides]
  );

  const m2HtcBaseCost = useMemo(
    () => m2.annualSides * basePrice,
    [m2.annualSides, basePrice]
  );

  const m2HtcProCost = useMemo(
    () => m2.annualSides * proPrice,
    [m2.annualSides, proPrice]
  );

  const m2BaseDifference = useMemo(
    () => m2LoadedInHouseCost - m2HtcBaseCost,
    [m2LoadedInHouseCost, m2HtcBaseCost]
  );

  const m2ProDifference = useMemo(
    () => m2LoadedInHouseCost - m2HtcProCost,
    [m2LoadedInHouseCost, m2HtcProCost]
  );

  const m2BreakEvenBase = useMemo(
    () => (basePrice > 0 ? Math.ceil(m2LoadedInHouseCost / basePrice) : 0),
    [m2LoadedInHouseCost, basePrice]
  );

  const m2BreakEvenPro = useMemo(
    () => (proPrice > 0 ? Math.ceil(m2LoadedInHouseCost / proPrice) : 0),
    [m2LoadedInHouseCost, proPrice]
  );

  // ---------------------------------------------------------------------------
  // MODE 3 DEFAULT & STATE (20% GCI Capacity Scenario)
  // ---------------------------------------------------------------------------
  const mode3Defaults = {
    currentSides: 36,
    avgGciPerSide: 8000
  };
  const [m3, setM3] = useState(mode3Defaults);

  // Mode 3 Calculations (LOCKED FORMULA)
  const m3CurrentEstimatedGci = useMemo(
    () => m3.currentSides * m3.avgGciPerSide,
    [m3.currentSides, m3.avgGciPerSide]
  );

  const m3ProjectedSides = useMemo(
    () => m3.currentSides * 1.20,
    [m3.currentSides]
  );

  const m3AdditionalSides = useMemo(
    () => m3.currentSides * 0.20,
    [m3.currentSides]
  );

  const m3ProjectedGci = useMemo(
    () => m3CurrentEstimatedGci * 1.20,
    [m3CurrentEstimatedGci]
  );

  const m3AdditionalGci = useMemo(
    () => m3CurrentEstimatedGci * 0.20,
    [m3CurrentEstimatedGci]
  );

  const m3HtcBaseInvestmentProjected = useMemo(
    () => m3ProjectedSides * basePrice,
    [m3ProjectedSides, basePrice]
  );

  const m3HtcProInvestmentProjected = useMemo(
    () => m3ProjectedSides * proPrice,
    [m3ProjectedSides, proPrice]
  );

  const m3IllustrativeAdditionalGciBase = useMemo(
    () => m3AdditionalGci - m3HtcBaseInvestmentProjected,
    [m3AdditionalGci, m3HtcBaseInvestmentProjected]
  );

  const m3IllustrativeAdditionalGciPro = useMemo(
    () => m3AdditionalGci - m3HtcProInvestmentProjected,
    [m3AdditionalGci, m3HtcProInvestmentProjected]
  );

  // Handlers for Reset
  const resetCurrentMode = () => {
    if (activeMode === 'time-value') setM1(mode1Defaults);
    if (activeMode === 'in-house') setM2(mode2Defaults);
    if (activeMode === 'growth-scenario') setM3(mode3Defaults);
  };

  const resetAllModes = () => {
    setM1(mode1Defaults);
    setM2(mode2Defaults);
    setM3(mode3Defaults);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Safe number setter
  const setPositiveNumber = (setter: (val: number) => void, val: number) => {
    setter(isNaN(val) || val < 0 ? 0 : val);
  };

  return (
    <div className="min-h-screen bg-[#EEEAEB] text-[#3A2E29] pb-20">
      
      {/* Top Header Bar & Breadcrumbs */}
      <div className="bg-[#3A2E29] text-white py-3.5 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-medium">
            <button
              onClick={onGoHome}
              className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white transition cursor-pointer focus:ring-1 focus:ring-[#FE7311] focus:outline-none rounded"
              aria-label="Return to Homepage"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>Home</span>
            </button>
            <span className="text-slate-500">→</span>
            <button
              onClick={onOpenResources || onGoHome}
              className="text-slate-300 hover:text-white transition cursor-pointer focus:ring-1 focus:ring-[#FE7311] focus:outline-none rounded"
            >
              Resources
            </button>
            <span className="text-slate-500">→</span>
            <span className="text-[#0D9BA3] font-semibold">Run the Numbers</span>
          </div>
          
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hidden sm:block">
            Hometown Transaction Coordinators • Business Tools
          </div>
        </div>
      </div>

      {/* SECTION 1 — COMPACT HERO */}
      <section className="bg-[#3A2E29] text-white pt-8 pb-10 sm:pt-10 sm:pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#0D9BA3]/30">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white/10 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <Calculator className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>RUN THE NUMBERS</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight leading-tight">
            See what your time, support, and growth could be worth.
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-normal leading-relaxed">
            Three quick calculators. Use one or run all three.
          </p>

        </div>
      </section>

      {/* Calculator Container Shell */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-6 relative z-10">
        
        {/* Mode Selector Tabs */}
        <div className="bg-white rounded-2xl p-2 border border-[#D8D2D4] shadow-xl flex flex-col sm:flex-row gap-2 mb-6">
          
          <button
            onClick={() => switchMode('time-value', 'time-worth')}
            className={`flex-1 py-3 px-3.5 sm:px-4 rounded-xl font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[48px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none ${
              activeMode === 'time-value'
                ? 'bg-[#3A2E29] text-white shadow-md'
                : 'text-[#3A2E29]/70 hover:text-[#3A2E29] hover:bg-[#EEEAEB]'
            }`}
            aria-selected={activeMode === 'time-value'}
            role="tab"
          >
            <Clock className="w-4 h-4 text-[#FE7311]" />
            <span>WHAT’S MY TIME WORTH?</span>
          </button>

          <button
            onClick={() => switchMode('in-house', 'hire-or-htc')}
            className={`flex-1 py-3 px-3.5 sm:px-4 rounded-xl font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[48px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none ${
              activeMode === 'in-house'
                ? 'bg-[#3A2E29] text-white shadow-md'
                : 'text-[#3A2E29]/70 hover:text-[#3A2E29] hover:bg-[#EEEAEB]'
            }`}
            aria-selected={activeMode === 'in-house'}
            role="tab"
          >
            <Building2 className="w-4 h-4 text-[#0D9BA3]" />
            <span>HIRE A TC OR USE HTC?</span>
          </button>

          <button
            onClick={() => switchMode('growth-scenario', '20-percent-more')}
            className={`flex-1 py-3 px-3.5 sm:px-4 rounded-xl font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[48px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none ${
              activeMode === 'growth-scenario'
                ? 'bg-[#3A2E29] text-white shadow-md'
                : 'text-[#3A2E29]/70 hover:text-[#3A2E29] hover:bg-[#EEEAEB]'
            }`}
            aria-selected={activeMode === 'growth-scenario'}
            role="tab"
          >
            <TrendingUp className="w-4 h-4 text-[#FE7311]" />
            <span>WHAT COULD 20% MORE LOOK LIKE?</span>
          </button>

        </div>

        {/* =================================================================== */}
        {/* MODE 1: WHAT'S MY TIME WORTH? */}
        {/* =================================================================== */}
        <div
          id="time-worth"
          className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-lg space-y-8 scroll-mt-28 ${
            activeMode === 'time-value' ? 'block' : 'hidden'
          }`}
        >
          
          <div className="border-b border-[#D8D2D4] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                WHAT’S MY TIME WORTH?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif mt-0.5">
                What is my time worth as a real estate agent?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                See what one working hour is worth — and how much of that value is going into transaction admin.
              </p>
            </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCurrentMode}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#3A2E29]/70 hover:text-[#3A2E29] bg-[#EEEAEB] hover:bg-[#D8D2D4] px-3 py-1.5 rounded-lg transition cursor-pointer min-h-[38px]"
                  title="Reset inputs to default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Desktop: Two-Column Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Inputs */}
              <div className="lg:col-span-6 space-y-5 bg-[#EEEAEB] p-6 rounded-2xl border border-[#D8D2D4]">
                
                {/* 1. Annual GCI */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-gci">Annual GCI:</label>
                    <div className="flex items-center space-x-1 bg-white border border-[#D8D2D4] rounded-lg px-2 py-1">
                      <span className="text-[#0D9BA3] font-bold text-xs">$</span>
                      <input
                        id="m1-gci"
                        type="number"
                        min="0"
                        step="5000"
                        value={m1.annualGci}
                        onChange={(e) => setPositiveNumber((val) => setM1({ ...m1, annualGci: val }), parseFloat(e.target.value))}
                        className="w-24 text-right font-mono text-xs font-bold text-[#3A2E29] focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={m1.annualGci}
                    onChange={(e) => setM1({ ...m1, annualGci: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Before splits, taxes, and business expenses.
                  </p>
                </div>

                {/* 2. Average Work Hours Per Week */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-weekly-hours">Average Work Hours Per Week:</label>
                    <input
                      id="m1-weekly-hours"
                      type="number"
                      min="1"
                      max="100"
                      value={m1.weeklyHours}
                      onChange={(e) => setPositiveNumber((val) => setM1({ ...m1, weeklyHours: val }), parseFloat(e.target.value))}
                      className="w-16 text-right font-mono text-xs font-bold text-[#3A2E29] bg-white border border-[#D8D2D4] rounded-lg px-2 py-1 focus:outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="80"
                    step="1"
                    value={m1.weeklyHours}
                    onChange={(e) => setM1({ ...m1, weeklyHours: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                </div>

                {/* 3. Working Weeks Per Year */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-working-weeks">Working Weeks Per Year:</label>
                    <input
                      id="m1-working-weeks"
                      type="number"
                      min="1"
                      max="52"
                      value={m1.workingWeeks}
                      onChange={(e) => setPositiveNumber((val) => setM1({ ...m1, workingWeeks: val }), parseFloat(e.target.value))}
                      className="w-16 text-right font-mono text-xs font-bold text-[#3A2E29] bg-white border border-[#D8D2D4] rounded-lg px-2 py-1 focus:outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="36"
                    max="52"
                    step="1"
                    value={m1.workingWeeks}
                    onChange={(e) => setM1({ ...m1, workingWeeks: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                </div>

                {/* 4. Annual Closed Sides */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-sides">Annual Closed Sides:</label>
                    <input
                      id="m1-sides"
                      type="number"
                      min="1"
                      max="300"
                      value={m1.annualSides}
                      onChange={(e) => setPositiveNumber((val) => setM1({ ...m1, annualSides: val }), parseFloat(e.target.value))}
                      className="w-16 text-right font-mono text-xs font-bold text-[#3A2E29] bg-white border border-[#D8D2D4] rounded-lg px-2 py-1 focus:outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={m1.annualSides}
                    onChange={(e) => setM1({ ...m1, annualSides: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                </div>

                {/* 5. Your Transaction Admin Hours Per File */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-admin-hours">Your Transaction Admin Hours Per File:</label>
                    <input
                      id="m1-admin-hours"
                      type="number"
                      min="1"
                      max="40"
                      value={m1.adminHoursPerFile}
                      onChange={(e) => setPositiveNumber((val) => setM1({ ...m1, adminHoursPerFile: val }), parseFloat(e.target.value))}
                      className="w-16 text-right font-mono text-xs font-bold text-[#3A2E29] bg-white border border-[#D8D2D4] rounded-lg px-2 py-1 focus:outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={m1.adminHoursPerFile}
                    onChange={(e) => setM1({ ...m1, adminHoursPerFile: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Estimate the time you personally spend on emails, deadlines, documents, follow-up, and file administration for each closing.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Results Workspace */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Primary Result Summary Box */}
                <div className="bg-[#3A2E29] text-white p-6 sm:p-7 rounded-2xl space-y-5 shadow-md border border-[#0D9BA3]/30">
                  
                  {/* Visually Prioritized: YOUR WORKING HOUR IS WORTH */}
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#0D9BA3]">
                      YOUR WORKING HOUR IS WORTH
                    </div>
                    <div className="text-3xl sm:text-5xl font-extrabold text-[#FE7311] font-serif tracking-tight">
                      ${Math.round(m1GciPerHour).toLocaleString()} <span className="text-base sm:text-xl font-normal text-slate-300">/ hour</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Based on ${m1.annualGci.toLocaleString()} GCI across {m1AnnualWorkHours.toLocaleString()} annual working hours.
                    </p>
                  </div>

                  {/* TIME SPENT ON TRANSACTION ADMIN */}
                  <div className="p-4 bg-black/25 rounded-xl border border-white/10 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      TIME SPENT ON TRANSACTION ADMIN
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div className="text-xl sm:text-2xl font-bold text-white font-serif">
                        {m1AnnualAdminHours.toLocaleString()} hours/year
                      </div>
                      <div className="text-sm font-semibold text-[#0D9BA3]">
                        Modeled time value: ${Math.round(m1AnnualModeledAdminTimeValue).toLocaleString()}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      {m1.adminHoursPerFile} hours per file across {m1.annualSides} annual closed sides.
                    </p>
                  </div>

                  {/* Plain-English Result */}
                  <div className="p-3.5 bg-white/10 rounded-xl border border-white/15 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    This is the modeled value of the time you are currently putting into transaction administration instead of another part of your business.
                  </div>

                </div>

                {/* Comparison Cards: Base vs. Pro */}
                <div className="space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E29]">
                    HTC PLAN SUPPORT COMPARISON ({m1.annualSides} sides/yr)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Base Plan Card */}
                    <div className="bg-[#EEEAEB] p-4 rounded-xl border border-[#D8D2D4] space-y-2">
                      <div className="text-xs font-bold text-[#3A2E29] flex items-center justify-between">
                        <span>HTC Base Plan</span>
                        <span className="text-[10px] bg-[#0D9BA3]/20 text-[#0D9BA3] px-2 py-0.5 rounded font-extrabold">${basePrice}/file</span>
                      </div>
                      
                      <div className="text-xs space-y-1 text-[#3A2E29]/80 font-medium">
                        <div className="flex justify-between">
                          <span>Annual Support:</span>
                          <span className="font-bold text-[#3A2E29]">${m1HtcBaseAnnualInvestment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#D8D2D4] pt-1">
                          <span>Modeled Time-Value Difference:</span>
                          <span className="font-bold text-[#0D9BA3]">${Math.round(m1BaseModeledDifference).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pro Plan Card */}
                    <div className="bg-[#3A2E29] text-white p-4 rounded-xl border border-[#0D9BA3]/40 space-y-2">
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>HTC Pro Plan</span>
                        <span className="text-[10px] bg-[#FE7311] text-white px-2 py-0.5 rounded font-extrabold">${proPrice}/file</span>
                      </div>
                      
                      <div className="text-xs space-y-1 text-slate-300 font-medium">
                        <div className="flex justify-between">
                          <span>Annual Support:</span>
                          <span className="font-bold text-white">${m1HtcProAnnualInvestment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1">
                          <span>Modeled Time-Value Difference:</span>
                          <span className="font-bold text-[#FE7311]">${Math.round(m1ProModeledDifference).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Compact Disclaimer */}
                <div className="text-[11px] text-slate-500 leading-relaxed italic">
                  *Disclaimer: This calculator estimates GCI generated per working hour and the modeled opportunity value of time based on the figures you enter. GCI is not profit or take-home pay. Hiring HTC does not guarantee that reclaimed time will produce additional revenue, closings, or savings.
                </div>

                {/* Next Step CTA */}
                <div className="pt-2 border-t border-[#D8D2D4]">
                  <div className="p-4 sm:p-5 bg-[#3A2E29] text-white rounded-xl border border-[#0D9BA3]/30 shadow-md space-y-3">
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-extrabold text-white font-montserrat">
                        Want to see what support would fit your business?
                      </div>
                      <p className="text-xs text-slate-300 font-medium">
                        Compare plan details or book a 15-Minute Fit Call to walk through your file volume.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <button
                        onClick={onBookCall}
                        className="flex-1 bg-[#FE7311] hover:bg-[#e05f03] text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-white focus:outline-none shadow-sm"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>BOOK A 15-MINUTE FIT CALL</span>
                      </button>

                      <button
                        onClick={onExploreServices}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-1.5 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      >
                        <span>Compare Base + Pro →</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        {/* =================================================================== */}
        {/* MODE 2: HIRE A TC OR USE HTC? */}
        {/* =================================================================== */}
        <div
          id="hire-or-htc"
          className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-lg space-y-8 scroll-mt-28 ${
            activeMode === 'in-house' ? 'block' : 'hidden'
          }`}
        >
          
          <div className="border-b border-[#D8D2D4] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                HIRE A TC OR USE HTC?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif mt-0.5">
                Should I hire a transaction coordinator or use HTC?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Compare the estimated cost of employing a transaction coordinator with using HTC at your current volume.
              </p>
            </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCurrentMode}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#3A2E29]/70 hover:text-[#3A2E29] bg-[#EEEAEB] hover:bg-[#D8D2D4] px-3 py-1.5 rounded-lg transition cursor-pointer min-h-[38px]"
                  title="Reset inputs to default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Two-Column Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Inputs */}
              <div className="lg:col-span-6 space-y-5 bg-[#EEEAEB] p-6 rounded-2xl border border-[#D8D2D4]">
                
                {/* 1. Annual Closed Sides */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m2-sides">Annual Closed Sides:</label>
                    <input
                      id="m2-sides"
                      type="number"
                      min="1"
                      max="300"
                      value={m2.annualSides}
                      onChange={(e) => setPositiveNumber((val) => setM2({ ...m2, annualSides: val }), parseFloat(e.target.value))}
                      className="w-16 text-right font-mono text-xs font-bold text-[#3A2E29] bg-white border border-[#D8D2D4] rounded-lg px-2 py-1 focus:outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={m2.annualSides}
                    onChange={(e) => setM2({ ...m2, annualSides: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    How many buyer or seller sides do you expect to close in the next 12 months?
                  </p>
                </div>

                {/* 2. Estimated Annual TC Salary */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m2-salary">Estimated Annual TC Salary:</label>
                    <div className="flex items-center space-x-1 bg-white border border-[#D8D2D4] rounded-lg px-2 py-1">
                      <span className="text-[#0D9BA3] font-bold text-xs">$</span>
                      <input
                        id="m2-salary"
                        type="number"
                        min="0"
                        step="1000"
                        value={m2.inHouseSalary}
                        onChange={(e) => setPositiveNumber((val) => setM2({ ...m2, inHouseSalary: val }), parseFloat(e.target.value))}
                        className="w-24 text-right font-mono text-xs font-bold text-[#3A2E29] focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="30000"
                    max="120000"
                    step="2000"
                    value={m2.inHouseSalary}
                    onChange={(e) => setM2({ ...m2, inHouseSalary: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Enter the estimated annual salary for an in-house coordinator. All inputs remain editable planning assumptions.
                  </p>
                </div>

                {/* 3. Employer Costs % */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m2-burden">Employer Costs %:</label>
                    <div className="flex items-center space-x-1 bg-white border border-[#D8D2D4] rounded-lg px-2 py-1">
                      <input
                        id="m2-burden"
                        type="number"
                        min="0"
                        max="50"
                        value={m2.employerBurdenPercent}
                        onChange={(e) => setPositiveNumber((val) => setM2({ ...m2, employerBurdenPercent: val }), parseFloat(e.target.value))}
                        className="w-12 text-right font-mono text-xs font-bold text-[#3A2E29] focus:outline-none"
                      />
                      <span className="text-[#0D9BA3] font-bold text-xs">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={m2.employerBurdenPercent}
                    onChange={(e) => setM2({ ...m2, employerBurdenPercent: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Payroll taxes, insurance, benefits, paid time off, and similar employment costs.
                  </p>
                </div>

                {/* 4. Annual Tools + Hiring Costs */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m2-tools">Annual Tools + Hiring Costs:</label>
                    <div className="flex items-center space-x-1 bg-white border border-[#D8D2D4] rounded-lg px-2 py-1">
                      <span className="text-[#0D9BA3] font-bold text-xs">$</span>
                      <input
                        id="m2-tools"
                        type="number"
                        min="0"
                        step="250"
                        value={m2.annualToolsRecruiting}
                        onChange={(e) => setPositiveNumber((val) => setM2({ ...m2, annualToolsRecruiting: val }), parseFloat(e.target.value))}
                        className="w-20 text-right font-mono text-xs font-bold text-[#3A2E29] focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={m2.annualToolsRecruiting}
                    onChange={(e) => setM2({ ...m2, annualToolsRecruiting: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Technology, recruiting, training, equipment, and other estimated role costs.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Results Workspace */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Primary Result Box */}
                <div className="bg-[#3A2E29] text-white p-6 sm:p-7 rounded-2xl space-y-5 shadow-md border border-[#0D9BA3]/30">
                  
                  {/* Visually Prioritized: ESTIMATED IN-HOUSE ANNUAL COST */}
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#0D9BA3]">
                      ESTIMATED IN-HOUSE ANNUAL COST
                    </div>
                    <div className="text-3xl sm:text-5xl font-extrabold text-[#FE7311] font-serif tracking-tight">
                      ${Math.round(m2LoadedInHouseCost).toLocaleString()} <span className="text-base sm:text-xl font-normal text-slate-300">/ year</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Salary (${m2.inHouseSalary.toLocaleString()}) + {m2.employerBurdenPercent}% burden (${Math.round(m2EmployerBurdenAmount).toLocaleString()}) + tools/hiring (${m2.annualToolsRecruiting.toLocaleString()}).
                    </p>
                  </div>

                  {/* ESTIMATED COST PER CLOSING */}
                  <div className="p-4 bg-black/25 rounded-xl border border-white/10 space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      ESTIMATED COST PER CLOSING
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-white font-serif">
                      ${Math.round(m2InHouseCostPerSide).toLocaleString()} <span className="text-xs sm:text-sm font-normal text-slate-300">/ closed side</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      At your volume of {m2.annualSides} sides per year.
                    </p>
                  </div>

                  {/* Plain-English Result */}
                  <div className="p-3.5 bg-white/10 rounded-xl border border-white/15 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    At the numbers you entered, here is the modeled direct-cost difference between employing a TC and using HTC.
                  </div>

                </div>

                {/* HTC Plan Comparison & Modeled Difference Cards */}
                <div className="space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E29]">
                    HTC SUPPORT COMPARISON ({m2.annualSides} sides/yr)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Base Plan Card */}
                    <div className="bg-[#EEEAEB] p-4 rounded-xl border border-[#D8D2D4] space-y-2">
                      <div className="text-xs font-bold text-[#3A2E29] flex items-center justify-between">
                        <span>HTC Base</span>
                        <span className="text-[10px] bg-[#0D9BA3]/20 text-[#0D9BA3] px-2 py-0.5 rounded font-extrabold">${basePrice}/file</span>
                      </div>
                      
                      <div className="text-xs space-y-1.5 text-[#3A2E29]/80 font-medium">
                        <div className="flex justify-between">
                          <span>Annual support investment:</span>
                          <span className="font-bold text-[#3A2E29]">${m2HtcBaseCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#D8D2D4] pt-1">
                          <span>Modeled difference:</span>
                          <span className="font-bold text-[#0D9BA3]">
                            ${Math.abs(Math.round(m2BaseDifference)).toLocaleString()} {m2BaseDifference >= 0 ? 'lower' : 'higher'}
                          </span>
                        </div>
                        <div className="flex justify-between border-t border-[#D8D2D4] pt-1 text-[11px] text-slate-500">
                          <span>Break-even volume:</span>
                          <span>{m2BreakEvenBase} closed sides</span>
                        </div>
                      </div>
                    </div>

                    {/* Pro Plan Card */}
                    <div className="bg-[#3A2E29] text-white p-4 rounded-xl border border-[#0D9BA3]/40 space-y-2">
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>HTC Pro</span>
                        <span className="text-[10px] bg-[#FE7311] text-white px-2 py-0.5 rounded font-extrabold">${proPrice}/file</span>
                      </div>
                      
                      <div className="text-xs space-y-1.5 text-slate-300 font-medium">
                        <div className="flex justify-between">
                          <span>Annual support investment:</span>
                          <span className="font-bold text-white">${m2HtcProCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1">
                          <span>Modeled difference:</span>
                          <span className="font-bold text-[#FE7311]">
                            ${Math.abs(Math.round(m2ProDifference)).toLocaleString()} {m2ProDifference >= 0 ? 'lower' : 'higher'}
                          </span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1 text-[11px] text-slate-400">
                          <span>Break-even volume:</span>
                          <span>{m2BreakEvenPro} closed sides</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  <p className="text-[11px] text-[#3A2E29]/70 font-medium italic">
                    Per-file support comparisons do not include the one-time $399 Agent Setup Investment for new HTC clients.
                  </p>
                </div>

                {/* Compact Disclaimer */}
                <div className="text-[11px] text-slate-500 leading-relaxed italic">
                  *Disclaimer: This comparison models estimated direct costs based on the numbers you enter. Management time, service scope, availability, benefits, taxes, hiring costs, turnover, and operational factors vary. Cost is only one decision factor when evaluating support.
                </div>

                {/* Next Step CTA */}
                <div className="pt-2 border-t border-[#D8D2D4]">
                  <div className="p-4 sm:p-5 bg-[#3A2E29] text-white rounded-xl border border-[#0D9BA3]/30 shadow-md space-y-3">
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-extrabold text-white font-montserrat">
                        Want to see what support would fit your business?
                      </div>
                      <p className="text-xs text-slate-300 font-medium">
                        Compare plan details or book a 15-Minute Fit Call to walk through your file volume.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <button
                        onClick={onBookCall}
                        className="flex-1 bg-[#FE7311] hover:bg-[#e05f03] text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-white focus:outline-none shadow-sm"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>BOOK A 15-MINUTE FIT CALL</span>
                      </button>

                      <button
                        onClick={onExploreServices}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-1.5 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      >
                        <span>Compare Base + Pro →</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        {/* =================================================================== */}
        {/* MODE 3: WHAT IF YOU CLOSED 20% MORE? */}
        {/* =================================================================== */}
        <div
          id="20-percent-more"
          className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-lg space-y-8 scroll-mt-28 ${
            activeMode === 'growth-scenario' ? 'block' : 'hidden'
          }`}
        >
          
          <div className="border-b border-[#D8D2D4] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                WHAT COULD 20% MORE LOOK LIKE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif mt-0.5">
                What could 20% more look like for your business?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Use your current production to see what 20% more closed sides and GCI could look like for your business.
              </p>
            </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCurrentMode}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#3A2E29]/70 hover:text-[#3A2E29] bg-[#EEEAEB] hover:bg-[#D8D2D4] px-3 py-1.5 rounded-lg transition cursor-pointer min-h-[38px]"
                  title="Reset Mode 3 inputs to default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Two-Column Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Inputs */}
              <div className="lg:col-span-5 space-y-5 bg-[#EEEAEB] p-6 rounded-2xl border border-[#D8D2D4]">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E29] border-b border-[#D8D2D4] pb-2">
                  Your Current Production
                </div>

                {/* 1. Current annual closed sides */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m3-sides">Current Annual Closed Sides:</label>
                    <input
                      id="m3-sides"
                      type="number"
                      min="1"
                      step="1"
                      value={m3.currentSides}
                      onChange={(e) => setPositiveNumber((val) => setM3({ ...m3, currentSides: val }), parseFloat(e.target.value))}
                      className="w-16 text-right font-mono text-xs font-bold text-[#3A2E29] bg-white border border-[#D8D2D4] rounded-lg px-2 py-1 focus:outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={m3.currentSides}
                    onChange={(e) => setM3({ ...m3, currentSides: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Buyer or seller sides closed in a typical 12-month period.
                  </p>
                </div>

                {/* 2. Average GCI per closed side */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m3-avg-gci">Average GCI Per Closed Side:</label>
                    <div className="flex items-center space-x-1 bg-white border border-[#D8D2D4] rounded-lg px-2 py-1">
                      <span className="text-[#0D9BA3] font-bold text-xs">$</span>
                      <input
                        id="m3-avg-gci"
                        type="number"
                        min="500"
                        step="500"
                        value={m3.avgGciPerSide}
                        onChange={(e) => setPositiveNumber((val) => setM3({ ...m3, avgGciPerSide: val }), parseFloat(e.target.value))}
                        className="w-20 text-right font-mono text-xs font-bold text-[#3A2E29] focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="30000"
                    step="500"
                    value={m3.avgGciPerSide}
                    onChange={(e) => setM3({ ...m3, avgGciPerSide: Number(e.target.value) })}
                    className="w-full accent-[#FE7311] cursor-pointer"
                  />
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Gross commission income per side before splits, taxes, and expenses.
                  </p>
                </div>

                {/* 3. Production Growth Potential */}
                <div className="pt-3 border-t border-[#D8D2D4] space-y-1">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <span>Growth Scenario:</span>
                    <span className="bg-[#0D9BA3] text-white px-2.5 py-0.5 rounded text-xs font-extrabold">
                      +20% Growth Projection
                    </span>
                  </div>
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Models the production impact of converting reclaimed administrative hours into client service and closings.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Results Workspace */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Visual progression: TODAY vs +20% SCENARIO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                  
                  {/* Card 1: TODAY */}
                  <div className="bg-[#EEEAEB] p-4 sm:p-5 rounded-2xl border border-[#D8D2D4] space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#3A2E29]/70">
                      TODAY
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-montserrat">
                      {m3.currentSides} <span className="text-base font-semibold text-[#3A2E29]/70">Closings</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-[#0D9BA3]">
                      ${m3CurrentEstimatedGci.toLocaleString()} <span className="text-xs font-medium text-[#3A2E29]/60">GCI</span>
                    </div>
                  </div>

                  {/* Card 2: +20% SCENARIO */}
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#0D9BA3]/40 space-y-1 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                        +20% SCENARIO
                      </span>
                      <span className="text-[10px] bg-[#0D9BA3]/15 text-[#0D9BA3] font-extrabold px-2 py-0.5 rounded-full">
                        +20%
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-montserrat">
                      {Math.round(m3ProjectedSides)} <span className="text-base font-semibold text-[#3A2E29]/70">Closings</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-[#FE7311]">
                      ${Math.round(m3ProjectedGci).toLocaleString()} <span className="text-xs font-medium text-[#3A2E29]/60">GCI</span>
                    </div>
                    {m3ProjectedSides % 1 !== 0 && (
                      <p className="text-[10px] text-slate-400">
                        Exact calculation: {m3ProjectedSides.toFixed(1)} sides
                      </p>
                    )}
                  </div>

                </div>

                {/* VISUAL HERO: THE INCREASE */}
                <div className="bg-[#3A2E29] text-white p-5 sm:p-6 rounded-2xl border border-[#0D9BA3]/40 shadow-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                      PROJECTED CAPACITY INCREASE
                    </span>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                      Modeled Output
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="p-3.5 bg-black/30 rounded-xl border border-white/10">
                      <div className="text-[11px] text-slate-300 font-medium uppercase tracking-wider">
                        Additional Closings
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#0D9BA3] font-montserrat mt-0.5">
                        +{Math.round(m3AdditionalSides)}
                      </div>
                      <div className="text-xs text-slate-300 font-medium mt-0.5">
                        {m3AdditionalSides % 1 !== 0 ? `(+${m3AdditionalSides.toFixed(1)} sides exact)` : 'additional closed sides'}
                      </div>
                    </div>

                    <div className="p-3.5 bg-black/30 rounded-xl border border-white/10">
                      <div className="text-[11px] text-slate-300 font-medium uppercase tracking-wider">
                        Additional GCI
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#FE7311] font-montserrat mt-0.5">
                        +${Math.round(m3AdditionalGci).toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-300 font-medium mt-0.5">
                        in gross commission income
                      </div>
                    </div>
                  </div>
                </div>

                {/* HTC COMPARISON AT THAT VOLUME */}
                <div className="bg-[#EEEAEB] p-4 sm:p-5 rounded-2xl border border-[#D8D2D4] space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E29]">
                    What would HTC support cost at that volume?
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Base Plan */}
                    <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-2">
                      <div className="text-xs font-bold text-[#3A2E29] flex justify-between items-center">
                        <span>Base — ${basePrice}/file</span>
                        <span className="text-[10px] bg-[#0D9BA3]/20 text-[#0D9BA3] px-2 py-0.5 rounded font-extrabold">Base Plan</span>
                      </div>
                      <div className="text-xs space-y-1.5 text-[#3A2E29]/80 font-medium">
                        <div className="flex justify-between">
                          <span>Projected support investment:</span>
                          <span className="font-bold text-[#3A2E29]">${Math.round(m3HtcBaseInvestmentProjected).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#D8D2D4] pt-1.5">
                          <span>Illustrative GCI Difference After HTC Fees:</span>
                          <span className="font-bold text-[#0D9BA3]">+${Math.round(m3IllustrativeAdditionalGciBase).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#3A2E29] text-white p-4 rounded-xl border border-[#0D9BA3]/40 space-y-2">
                      <div className="text-xs font-bold text-white flex justify-between items-center">
                        <span>Pro — ${proPrice}/file</span>
                        <span className="text-[10px] bg-[#FE7311] text-white px-2 py-0.5 rounded font-extrabold">Pro Plan</span>
                      </div>
                      <div className="text-xs space-y-1.5 text-slate-300 font-medium">
                        <div className="flex justify-between">
                          <span>Projected support investment:</span>
                          <span className="font-bold text-white">${Math.round(m3HtcProInvestmentProjected).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1.5">
                          <span>Illustrative GCI Difference After HTC Fees:</span>
                          <span className="font-bold text-[#FE7311]">+${Math.round(m3IllustrativeAdditionalGciPro).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  <p className="text-[11px] text-[#3A2E29]/70 font-medium italic">
                    Per-file support comparisons do not include the one-time $399 Agent Setup Investment for new HTC clients.
                  </p>
                  <p className="text-[11px] text-[#3A2E29]/70 font-medium italic">
                    Note: Illustrative GCI difference is calculated before brokerage splits, taxes, lead costs, and other business expenses — not profit or take-home income.
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="text-[11px] text-slate-500 leading-relaxed italic">
                  *Disclaimer: This is an illustrative planning scenario based on the figures you enter. It is not a forecast, benchmark, or guarantee of additional closings or income.
                </div>

                {/* Next Step CTA */}
                <div className="pt-2 border-t border-[#D8D2D4]">
                  <div className="p-4 sm:p-5 bg-[#3A2E29] text-white rounded-xl border border-[#0D9BA3]/30 shadow-md space-y-3">
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-extrabold text-white font-montserrat">
                        Want to see what support would fit your business?
                      </div>
                      <p className="text-xs text-slate-300 font-medium">
                        Compare plan details or book a 15-Minute Fit Call to walk through your file volume.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <button
                        onClick={onBookCall}
                        className="flex-1 bg-[#FE7311] hover:bg-[#e05f03] text-white px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-white focus:outline-none shadow-sm"
                      >
                        <PhoneCall className="w-4 h-4" />
                        <span>BOOK A 15-MINUTE FIT CALL</span>
                      </button>

                      <button
                        onClick={onExploreServices}
                        className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-1.5 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-[#0D9BA3] focus:outline-none"
                      >
                        <span>Compare Base + Pro →</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        {/* Global Reset All Option */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={resetAllModes}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#3A2E29]/60 hover:text-[#3A2E29] transition cursor-pointer px-3 py-1.5 focus:outline-none"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Calculator Modes</span>
          </button>
        </div>

        {/* SECTION 6 — HOW THE NUMBERS WORK FAQ */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] space-y-6">
          
          <div className="max-w-2xl space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
              HOW THE NUMBERS WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
              Questions about the calculators?
            </h2>
          </div>

          <div className="space-y-2.5">
            {[
              {
                q: 'What does “my time worth” mean?',
                a: 'This calculator divides the GCI you enter by the working hours you enter to estimate the gross commission income your business generates per working hour. It is a planning metric, not your hourly wage or take-home income.'
              },
              {
                q: 'What costs are included in the hire vs. HTC comparison?',
                a: 'The calculator uses the salary, employer costs, and annual tools or hiring costs you enter to estimate the direct annual cost of employing a transaction coordinator. You can change every assumption.'
              },
              {
                q: 'Why does the growth calculator use 20%?',
                a: 'The calculator uses a fixed 20% scenario so you can see what a meaningful increase in closed business could look like using your current numbers.'
              },
              {
                q: 'Does HTC guarantee I will close 20% more business?',
                a: 'No. The calculator is a planning tool, not a forecast or guarantee. Growth depends on your market, lead flow, conversion, activity, capacity, and many other factors.'
              },
              {
                q: 'Which HTC plan should I use in my calculations?',
                a: 'Base and Pro are both shown so you can compare the support investment at your volume.',
                hasLink: true
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left font-montserrat font-bold text-xs sm:text-sm text-[#3A2E29] flex items-center justify-between cursor-pointer hover:bg-black/5 transition focus:ring-2 focus:ring-[#FE7311] focus:outline-none"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#FE7311] flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#3A2E29]/60 flex-shrink-0 ml-2" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-[#3A2E29]/80 font-medium leading-relaxed border-t border-[#D8D2D4]/60 bg-white space-y-3">
                    <p>{faq.a}</p>
                    {faq.hasLink && (
                      <div className="pt-1">
                        <button
                          onClick={onExploreServices}
                          className="inline-flex items-center space-x-1 text-xs font-bold text-[#0D9BA3] hover:text-[#0b7c82] transition cursor-pointer group uppercase tracking-wider"
                        >
                          <span>COMPARE BASE + PRO</span>
                          <span className="transition-transform group-hover:translate-x-0.5">→</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>



      </div>

    </div>
  );
};
