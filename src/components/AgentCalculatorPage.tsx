import React, { useState, useMemo } from 'react';
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
}

type Mode = 'time-value' | 'in-house' | 'growth-scenario';

export const AgentCalculatorPage: React.FC<Props> = ({
  onBookCall,
  onExploreServices,
  onGoHome
}) => {
  const [activeMode, setActiveMode] = useState<Mode>('time-value');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      
      {/* Top Header Bar */}
      <div className="bg-[#3A2E29] text-white py-4 px-4 sm:px-8 border-b border-[#0D9BA3]/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onGoHome}
            className="inline-flex items-center space-x-2 text-xs font-bold text-slate-300 hover:text-white transition cursor-pointer min-h-[44px] px-2 focus:ring-2 focus:ring-[#FE7311] focus:outline-none"
            aria-label="Return to Homepage"
          >
            <ArrowLeft className="w-4 h-4 text-[#FE7311]" />
            <span>Back to Homepage</span>
          </button>
          
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#0D9BA3]">
            Hometown Transaction Coordinators • Business Tools
          </div>
        </div>
      </div>

      {/* Main Hero Header */}
      <div className="bg-[#3A2E29] text-white pt-10 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#0D9BA3]/30">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/30 px-4 py-1.5 rounded-full border border-[#0D9BA3]/40">
            <Calculator className="w-4 h-4 text-[#FE7311]" />
            <span>INTERACTIVE REAL ESTATE BUSINESS TOOL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-montserrat font-extrabold text-white tracking-tight leading-tight">
            Agent Business Calculator
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Run your numbers. See where your time, support costs, and growth opportunities may be hiding.
          </p>

        </div>
      </div>

      {/* Calculator Container Shell */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        
        {/* Mode Selector Tabs */}
        <div className="bg-white rounded-2xl p-2 border border-[#D8D2D4] shadow-xl flex flex-col sm:flex-row gap-2 mb-6">
          
          <button
            onClick={() => setActiveMode('time-value')}
            className={`flex-1 py-3.5 px-4 rounded-xl font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[48px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none ${
              activeMode === 'time-value'
                ? 'bg-[#3A2E29] text-white shadow-md'
                : 'text-[#3A2E29]/70 hover:text-[#3A2E29] hover:bg-[#EEEAEB]'
            }`}
            aria-selected={activeMode === 'time-value'}
            role="tab"
          >
            <Clock className="w-4 h-4 text-[#FE7311]" />
            <span>1. My Time Value</span>
          </button>

          <button
            onClick={() => setActiveMode('in-house')}
            className={`flex-1 py-3.5 px-4 rounded-xl font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[48px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none ${
              activeMode === 'in-house'
                ? 'bg-[#3A2E29] text-white shadow-md'
                : 'text-[#3A2E29]/70 hover:text-[#3A2E29] hover:bg-[#EEEAEB]'
            }`}
            aria-selected={activeMode === 'in-house'}
            role="tab"
          >
            <Building2 className="w-4 h-4 text-[#0D9BA3]" />
            <span>2. In-House vs. HTC</span>
          </button>

          <button
            onClick={() => setActiveMode('growth-scenario')}
            className={`flex-1 py-3.5 px-4 rounded-xl font-montserrat font-extrabold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[48px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none ${
              activeMode === 'growth-scenario'
                ? 'bg-[#3A2E29] text-white shadow-md'
                : 'text-[#3A2E29]/70 hover:text-[#3A2E29] hover:bg-[#EEEAEB]'
            }`}
            aria-selected={activeMode === 'growth-scenario'}
            role="tab"
          >
            <TrendingUp className="w-4 h-4 text-[#FE7311]" />
            <span>3. 20% GCI Scenario</span>
          </button>

        </div>

        {/* Short Explanation Above Active Calculator */}
        <div className="bg-white rounded-xl p-4 mb-6 border border-[#D8D2D4] text-xs text-[#3A2E29]/80 font-medium leading-relaxed flex items-start space-x-3">
          <Info className="w-4 h-4 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
          <div>
            {activeMode === 'time-value' && (
              <p>
                <strong>Buying Question:</strong> What does one working hour of my real estate business generate in GCI, and what is the modeled value of the hours I personally spend carrying contract-to-close administration?
              </p>
            )}
            {activeMode === 'in-house' && (
              <p>
                <strong>Buying Question:</strong> At my current annual unit count, what is the estimated direct cost of employing an in-house transaction coordinator compared with paying HTC only when a transaction closes?
              </p>
            )}
            {activeMode === 'growth-scenario' && (
              <p>
                <strong>Buying Question:</strong> If professional support helps me reclaim capacity and I convert that capacity into production, what would a 20% increase in closed sides and GCI look like? This is an illustrative capacity scenario, not a forecast.
              </p>
            )}
          </div>
        </div>

        {/* =================================================================== */}
        {/* MODE 1: MY TIME VALUE */}
        {/* =================================================================== */}
        {activeMode === 'time-value' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-lg space-y-8">
            
            <div className="border-b border-[#D8D2D4] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                  MODE 1 • AGENT DOLLAR-PER-HOUR & ADMIN COST
                </span>
                <h2 className="text-2xl font-montserrat font-extrabold text-[#3A2E29] mt-0.5">
                  My Time Value Calculator
                </h2>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCurrentMode}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#3A2E29]/70 hover:text-[#3A2E29] bg-[#EEEAEB] hover:bg-[#D8D2D4] px-3 py-1.5 rounded-lg transition cursor-pointer min-h-[38px]"
                  title="Reset Mode 1 inputs to default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Mode</span>
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
                    <label htmlFor="m1-gci">Annual GCI ($):</label>
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
                    What was your gross commission income over the last 12 months? GCI means commission before splits, taxes, lead costs, and business expenses.
                  </p>
                </div>

                {/* 2. Average work hours per week */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-weekly-hours">Average work hours per week:</label>
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
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    Across prospecting, client care, showings, negotiations, transaction work, and business operations, how many hours do you work in a typical week?
                  </p>
                </div>

                {/* 3. Working weeks per year */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-working-weeks">Working weeks per year:</label>
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
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    How many weeks do you actively work in a typical year?
                  </p>
                </div>

                {/* 4. Annual closed sides */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-sides">Annual closed sides:</label>
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
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    How many buyer or seller sides do you close in a typical year?
                  </p>
                </div>

                {/* 5. Contract-to-close admin hours per file */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m1-admin-hours">Contract-to-close admin hours per file:</label>
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
                    How many hours do you personally spend on emails, deadlines, documents, follow-up, and file administration for each closing?
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Results Workspace */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Primary Result Summary Box */}
                <div className="bg-[#3A2E29] text-white p-6 rounded-2xl space-y-4 shadow-md border border-[#0D9BA3]/30">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                    LIVE RESULT SUMMARY
                  </span>
                  
                  <div className="space-y-3">
                    <div className="p-3.5 bg-black/30 rounded-xl border border-white/10">
                      <div className="text-[11px] font-medium text-slate-300">Primary Hourly Metric:</div>
                      <div className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#FE7311] mt-0.5">
                        ${m1GciPerHour.toFixed(2)} <span className="text-xs font-semibold text-slate-300">GCI / working hour</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-1">
                        Your business generates approximately <strong>${m1GciPerHour.toFixed(2)}</strong> in GCI per working hour ({m1AnnualWorkHours.toLocaleString()} total annual hours).
                      </p>
                    </div>

                    <div className="p-3.5 bg-black/30 rounded-xl border border-white/10 space-y-1">
                      <div className="text-[11px] font-medium text-slate-300">Per-File Admin Time Value:</div>
                      <div className="text-xl font-montserrat font-bold text-white">
                        ${m1ModeledTimeValuePerFile.toFixed(2)} <span className="text-xs font-normal text-slate-300">/ file</span>
                      </div>
                      <p className="text-[11px] text-slate-300">
                        You are assigning approximately <strong>${m1ModeledTimeValuePerFile.toFixed(2)}</strong> of modeled business time to contract-to-close administration per file ({m1.adminHoursPerFile} hrs × ${m1GciPerHour.toFixed(2)}/hr).
                      </p>
                    </div>

                    <div className="p-3.5 bg-black/30 rounded-xl border border-white/10 space-y-1">
                      <div className="text-[11px] font-medium text-slate-300">Annual Admin Commitment:</div>
                      <div className="text-xl font-montserrat font-bold text-white">
                        {m1AnnualAdminHours.toLocaleString()} hours <span className="text-xs font-normal text-slate-300">({Math.round(m1AnnualAdminHours / 8)} working days)</span>
                      </div>
                      <p className="text-[11px] text-slate-300">
                        <strong>{m1AnnualAdminHours.toLocaleString()} hours</strong> and <strong>${m1AnnualModeledAdminTimeValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> of modeled time value are tied to transaction administration at your current volume ({m1.annualSides} sides).
                      </p>
                    </div>
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
                          <span className="font-bold text-[#0D9BA3]">${m1BaseModeledDifference.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
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
                          <span className="font-bold text-[#FE7311]">${m1ProModeledDifference.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Clarification Box */}
                <div className="p-3.5 bg-white rounded-xl border border-[#D8D2D4] text-[11px] text-[#3A2E29]/80 font-medium leading-relaxed">
                  <strong>Clarification:</strong> The admin-hours input measures the agent's own personal time spent carrying contract-to-close work. It does not represent every operational touch performed by HTC, title, lender, association, broker, or other parties. The input remains editable because agent involvement varies.
                </div>

                {/* LOCKED Disclaimer */}
                <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] text-[11px] text-[#3A2E29]/80 font-medium leading-relaxed italic">
                  <strong>Disclaimer:</strong> This calculator estimates GCI generated per working hour and the modeled opportunity value of time based on the information you enter. GCI is not profit or take-home pay. Hiring HTC does not guarantee that reclaimed time will produce additional revenue, closings, or savings.
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={onExploreServices}
                    className="flex-1 bg-[#FE7311] hover:bg-[#e05f03] text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Compare Plans</span>
                  </button>

                  <button
                    onClick={onBookCall}
                    className="flex-1 bg-[#3A2E29] hover:bg-[#2a221f] text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] border border-[#0D9BA3]/40 focus:ring-2 focus:ring-[#FE7311] focus:outline-none"
                  >
                    <PhoneCall className="w-4 h-4 text-[#0D9BA3]" />
                    <span>Book a Fit Call</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* =================================================================== */}
        {/* MODE 2: IN-HOUSE VS. HTC */}
        {/* =================================================================== */}
        {activeMode === 'in-house' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-lg space-y-8">
            
            <div className="border-b border-[#D8D2D4] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                  MODE 2 • IN-HOUSE TC VS. HTC PER-TRANSACTION SUPPORT
                </span>
                <h2 className="text-2xl font-montserrat font-extrabold text-[#3A2E29] mt-0.5">
                  In-House TC vs. HTC Support
                </h2>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCurrentMode}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#3A2E29]/70 hover:text-[#3A2E29] bg-[#EEEAEB] hover:bg-[#D8D2D4] px-3 py-1.5 rounded-lg transition cursor-pointer min-h-[38px]"
                  title="Reset Mode 2 inputs to default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Mode</span>
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
                    <label htmlFor="m2-sides">Annual closed sides:</label>
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

                {/* 2. In-House Annual Salary */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m2-salary">In-house annual salary ($):</label>
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
                    Enter the salary you would expect to pay an in-house transaction coordinator. The default is an editable planning assumption, not a market quote.
                  </p>
                </div>

                {/* 3. Employer Burden */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m2-burden">Employer burden (%):</label>
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
                    Estimated payroll taxes, insurance, benefits, paid time off, and other employer costs as a percentage of salary. Keep editable.
                  </p>
                </div>

                {/* 4. Annual tools, recruiting, training, and equipment */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m2-tools">Annual tools, recruiting, training & equipment ($):</label>
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
                    Estimated annual non-salary costs required to hire, equip, and maintain the role. Keep editable.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Results Workspace */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Primary Loaded In-House Result Box */}
                <div className="bg-[#3A2E29] text-white p-6 rounded-2xl space-y-4 shadow-md border border-[#0D9BA3]/30">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                    LIVE RESULT SUMMARY
                  </span>

                  <div className="space-y-3">
                    <div className="p-3.5 bg-black/30 rounded-xl border border-white/10">
                      <div className="text-[11px] font-medium text-slate-300">Estimated Loaded In-House Annual Cost:</div>
                      <div className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#FE7311] mt-0.5">
                        ${m2LoadedInHouseCost.toLocaleString()} <span className="text-xs font-semibold text-slate-300">/ year</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-1">
                        Salary (${m2.inHouseSalary.toLocaleString()}) + {m2.employerBurdenPercent}% burden (${m2EmployerBurdenAmount.toLocaleString()}) + tools/recruiting (${m2.annualToolsRecruiting.toLocaleString()}).
                      </p>
                    </div>

                    <div className="p-3.5 bg-black/30 rounded-xl border border-white/10 space-y-1">
                      <div className="text-[11px] font-medium text-slate-300">In-House Cost Per Closing (at {m2.annualSides} sides):</div>
                      <div className="text-xl font-montserrat font-bold text-white">
                        ${m2InHouseCostPerSide.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-xs font-normal text-slate-300">/ closed side</span>
                      </div>
                      <p className="text-[11px] text-slate-300">
                        At your volume of {m2.annualSides} sides, an in-house TC costs approximately <strong>${m2InHouseCostPerSide.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> per closing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* HTC Plan Comparison & Break-Even Cards */}
                <div className="space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E29]">
                    HTC PLAN COST & BREAK-EVEN COMPARISON ({m2.annualSides} sides/yr)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Base Plan Card */}
                    <div className="bg-[#EEEAEB] p-4 rounded-xl border border-[#D8D2D4] space-y-2">
                      <div className="text-xs font-bold text-[#3A2E29] flex items-center justify-between">
                        <span>HTC Base Plan</span>
                        <span className="text-[10px] bg-[#0D9BA3]/20 text-[#0D9BA3] px-2 py-0.5 rounded font-extrabold">${basePrice}/file</span>
                      </div>
                      
                      <div className="text-xs space-y-1.5 text-[#3A2E29]/80 font-medium">
                        <div className="flex justify-between">
                          <span>Annual Investment:</span>
                          <span className="font-bold text-[#3A2E29]">${m2HtcBaseCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#D8D2D4] pt-1">
                          <span>Modeled Cost Difference:</span>
                          <span className="font-bold text-[#0D9BA3]">
                            ${Math.abs(m2BaseDifference).toLocaleString()} {m2BaseDifference >= 0 ? 'lower' : 'higher'}
                          </span>
                        </div>
                        <div className="flex justify-between border-t border-[#D8D2D4] pt-1">
                          <span>Break-Even Volume:</span>
                          <span className="font-bold text-[#3A2E29]">{m2BreakEvenBase} closed sides</span>
                        </div>
                      </div>
                    </div>

                    {/* Pro Plan Card */}
                    <div className="bg-[#3A2E29] text-white p-4 rounded-xl border border-[#0D9BA3]/40 space-y-2">
                      <div className="text-xs font-bold text-white flex items-center justify-between">
                        <span>HTC Pro Plan</span>
                        <span className="text-[10px] bg-[#FE7311] text-white px-2 py-0.5 rounded font-extrabold">${proPrice}/file</span>
                      </div>
                      
                      <div className="text-xs space-y-1.5 text-slate-300 font-medium">
                        <div className="flex justify-between">
                          <span>Annual Investment:</span>
                          <span className="font-bold text-white">${m2HtcProCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1">
                          <span>Modeled Cost Difference:</span>
                          <span className="font-bold text-[#FE7311]">
                            ${Math.abs(m2ProDifference).toLocaleString()} {m2ProDifference >= 0 ? 'lower' : 'higher'}
                          </span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1">
                          <span>Break-Even Volume:</span>
                          <span className="font-bold text-white">{m2BreakEvenPro} closed sides</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Plain-Language Conclusion */}
                <div className="p-4 bg-[#0D9BA3]/10 rounded-xl border border-[#0D9BA3]/30 text-xs space-y-1">
                  <div className="font-extrabold text-[#3A2E29] text-sm">
                    Plain-Language Conclusion:
                  </div>
                  <p className="text-[#3A2E29]/90 font-medium leading-relaxed">
                    At your current volume ({m2.annualSides} sides), the lower modeled direct-cost option is{' '}
                    <strong>
                      {m2LoadedInHouseCost < m2HtcBaseCost
                        ? 'Employing an In-House TC'
                        : `HTC ${m2HtcBaseCost <= m2HtcProCost ? 'Base' : 'Pro'} Plan`}
                    </strong>
                    . Cost is only one decision factor; control, availability, service scope, management time, and team fit also matter.
                  </p>
                </div>

                {/* LOCKED Disclaimer */}
                <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] text-[11px] text-[#3A2E29]/80 font-medium leading-relaxed italic">
                  <strong>Disclaimer:</strong> This calculator is a planning comparison, not payroll, employment, tax, legal, or accounting advice. Salary, employer burden, benefits, technology, recruiting, training, turnover, management time, and service scope vary. Enter your own estimates before making a hiring decision.
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={onExploreServices}
                    className="flex-1 bg-[#FE7311] hover:bg-[#e05f03] text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Compare Plans</span>
                  </button>

                  <button
                    onClick={onBookCall}
                    className="flex-1 bg-[#3A2E29] hover:bg-[#2a221f] text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] border border-[#0D9BA3]/40 focus:ring-2 focus:ring-[#FE7311] focus:outline-none"
                  >
                    <PhoneCall className="w-4 h-4 text-[#0D9BA3]" />
                    <span>Book a Fit Call</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* =================================================================== */}
        {/* MODE 3: 20% GCI SCENARIO */}
        {/* =================================================================== */}
        {activeMode === 'growth-scenario' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-lg space-y-8">
            
            <div className="border-b border-[#D8D2D4] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                  MODE 3 • 20% GCI CAPACITY SCENARIO
                </span>
                <h2 className="text-2xl font-montserrat font-extrabold text-[#3A2E29] mt-0.5">
                  20% GCI Capacity Scenario
                </h2>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCurrentMode}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#3A2E29]/70 hover:text-[#3A2E29] bg-[#EEEAEB] hover:bg-[#D8D2D4] px-3 py-1.5 rounded-lg transition cursor-pointer min-h-[38px]"
                  title="Reset Mode 3 inputs to default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Mode</span>
                </button>
              </div>
            </div>

            {/* Two-Column Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Inputs */}
              <div className="lg:col-span-6 space-y-5 bg-[#EEEAEB] p-6 rounded-2xl border border-[#D8D2D4]">
                
                {/* 1. Current annual closed sides */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m3-sides">Current annual closed sides:</label>
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
                    How many buyer or seller sides do you close in a typical year?
                  </p>
                </div>

                {/* 2. Average GCI per closed side */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <label htmlFor="m3-avg-gci">Average GCI per closed side ($):</label>
                    <div className="flex items-center space-x-1 bg-white border border-[#D8D2D4] rounded-lg px-2 py-1">
                      <span className="text-[#0D9BA3] font-bold text-xs">$</span>
                      <input
                        id="m3-avg-gci"
                        type="number"
                        min="1"
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
                    What is your average gross commission income per closed buyer or seller side before splits, taxes, lead costs, and expenses?
                  </p>
                </div>

                {/* 3. Growth scenario - Fixed 20% */}
                <div className="space-y-1.5 pt-3 border-t border-[#D8D2D4]">
                  <div className="flex justify-between items-center text-xs font-extrabold text-[#3A2E29]">
                    <span>Growth scenario:</span>
                    <span className="bg-[#FE7311] text-white px-2.5 py-1 rounded-md text-xs font-extrabold">20% — fixed</span>
                  </div>
                  <p className="text-[11px] text-[#3A2E29]/70 leading-normal font-medium">
                    The website models a 20% growth scenario. The visitor does not change this percentage in Phase 1.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: Results Workspace */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Current Estimated Annual GCI */}
                <div className="bg-[#EEEAEB] p-4 rounded-xl border border-[#D8D2D4] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#3A2E29]/70">
                    CURRENT ESTIMATED ANNUAL GCI
                  </span>
                  <div className="text-2xl sm:text-3xl font-montserrat font-extrabold text-[#3A2E29]">
                    ${m3CurrentEstimatedGci.toLocaleString()}
                  </div>
                  <p className="text-xs text-[#3A2E29]/80 font-medium">
                    {m3.currentSides} sides × ${m3.avgGciPerSide.toLocaleString()} average GCI/side
                  </p>
                </div>

                {/* 20% Scenario Card */}
                <div className="bg-[#3A2E29] text-white p-5 rounded-2xl border border-[#0D9BA3]/40 space-y-3 shadow-md">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
                    20% CAPACITY SCENARIO RESULTS
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-black/30 rounded-xl border border-white/10">
                      <div className="text-[11px] text-slate-300 font-medium">Projected Annual Sides:</div>
                      <div className="text-2xl font-montserrat font-extrabold text-[#FE7311]">
                        {m3ProjectedSides.toFixed(1)} <span className="text-xs font-normal text-slate-300">sides</span>
                      </div>
                      <div className="text-[11px] text-[#0D9BA3] font-semibold mt-0.5">
                        +{m3AdditionalSides.toFixed(1)} additional sides
                      </div>
                    </div>

                    <div className="p-3 bg-black/30 rounded-xl border border-white/10">
                      <div className="text-[11px] text-slate-300 font-medium">Projected Annual GCI:</div>
                      <div className="text-2xl font-montserrat font-extrabold text-[#FE7311]">
                        ${m3ProjectedGci.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-[#0D9BA3] font-semibold mt-0.5">
                        +${m3AdditionalGci.toLocaleString()} additional GCI
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estimated Annual HTC Support Investment & Illustrative Additional GCI */}
                <div className="bg-[#EEEAEB] p-5 rounded-2xl border border-[#D8D2D4] space-y-3">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E29]">
                    HTC INVESTMENT & ILLUSTRATIVE ADDITIONAL GCI AT PROJECTED VOLUME ({m3ProjectedSides.toFixed(1)} SIDES)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    
                    {/* Base Plan */}
                    <div className="bg-white p-4 rounded-xl border border-[#D8D2D4] space-y-2">
                      <div className="text-xs font-bold text-[#3A2E29] flex justify-between items-center">
                        <span>HTC Base Plan</span>
                        <span className="text-[10px] bg-[#0D9BA3]/20 text-[#0D9BA3] px-2 py-0.5 rounded font-extrabold">${basePrice}/file</span>
                      </div>
                      <div className="text-xs space-y-1.5 text-[#3A2E29]/80 font-medium">
                        <div className="flex justify-between">
                          <span>Projected Support Investment:</span>
                          <span className="font-bold text-[#3A2E29]">${m3HtcBaseInvestmentProjected.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="flex justify-between border-t border-[#D8D2D4] pt-1.5">
                          <span>Illustrative Additional GCI After Fees:</span>
                          <span className="font-bold text-[#0D9BA3]">+${m3IllustrativeAdditionalGciBase.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#3A2E29] text-white p-4 rounded-xl border border-[#0D9BA3]/40 space-y-2">
                      <div className="text-xs font-bold text-white flex justify-between items-center">
                        <span>HTC Pro Plan</span>
                        <span className="text-[10px] bg-[#FE7311] text-white px-2 py-0.5 rounded font-extrabold">${proPrice}/file</span>
                      </div>
                      <div className="text-xs space-y-1.5 text-slate-300 font-medium">
                        <div className="flex justify-between">
                          <span>Projected Support Investment:</span>
                          <span className="font-bold text-white">${m3HtcProInvestmentProjected.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1.5">
                          <span>Illustrative Additional GCI After Fees:</span>
                          <span className="font-bold text-[#FE7311]">+${m3IllustrativeAdditionalGciPro.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  <p className="text-[11px] text-[#3A2E29]/70 font-medium pt-1 italic">
                    Note: This is an illustrative GCI scenario before brokerage splits, taxes, lead costs, and business expenses — not net profit or a guaranteed return.
                  </p>
                </div>

                {/* Supporting Sentence */}
                <div className="p-4 bg-[#0D9BA3]/10 rounded-xl border border-[#0D9BA3]/30 text-xs text-[#3A2E29] font-medium leading-relaxed">
                  <strong>Growth Opportunity:</strong> This is what 20% growth could look like if reclaimed capacity is consistently converted into lead generation, client service, follow-up, and closings.
                </div>

                {/* LOCKED Disclaimer */}
                <div className="p-3.5 bg-[#EEEAEB] rounded-xl border border-[#D8D2D4] text-[11px] text-[#3A2E29]/80 font-medium leading-relaxed italic">
                  <strong>Disclaimer:</strong> The 20% figure is an illustrative planning scenario, not a prediction, benchmark, or guarantee that transaction support will cause a specific increase in production or GCI. Results use gross commission income before brokerage splits, taxes, lead costs, and business expenses. Actual growth depends on market conditions, lead flow, conversion, agent activity, capacity, and many other factors.
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={onExploreServices}
                    className="flex-1 bg-[#FE7311] hover:bg-[#e05f03] text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] focus:ring-2 focus:ring-[#FE7311] focus:outline-none"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Compare Plans</span>
                  </button>

                  <button
                    onClick={onBookCall}
                    className="flex-1 bg-[#3A2E29] hover:bg-[#2a221f] text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer min-h-[44px] border border-[#0D9BA3]/40 focus:ring-2 focus:ring-[#FE7311] focus:outline-none"
                  >
                    <PhoneCall className="w-4 h-4 text-[#0D9BA3]" />
                    <span>Book a Fit Call</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

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

        {/* Customer Journey Box below calculator */}
        <div className="mt-12 bg-[#3A2E29] text-white p-8 sm:p-10 rounded-2xl border border-[#0D9BA3]/40 shadow-2xl text-center space-y-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3] bg-black/30 px-3.5 py-1.5 rounded-full border border-[#0D9BA3]/40">
            NEXT STEPS
          </span>
          
          <h3 className="text-2xl sm:text-3xl font-montserrat font-extrabold text-white max-w-2xl mx-auto">
            Want to see what the right level of support could look like for your business?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-medium">
            Let's see if HTC is a fit for your transaction volume, brokerage requirements, and growth plans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5 min-h-[48px] focus:ring-2 focus:ring-white focus:outline-none"
            >
              <PhoneCall className="w-4 h-4" />
              <span>BOOK A FIT CALL</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white px-6 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider border border-white/20 transition flex items-center justify-center space-x-2 cursor-pointer min-h-[48px] focus:ring-2 focus:ring-white focus:outline-none"
            >
              <FileText className="w-4 h-4 text-[#0D9BA3]" />
              <span>Compare Plans</span>
            </button>
          </div>
        </div>

        {/* CRAWLABLE WRITTEN CONTENT & FAQ */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-10 border border-[#D8D2D4] shadow-md space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D9BA3]">
              EXPLANATORY CONTENT & FAQ
            </span>
            <h2 className="text-2xl font-montserrat font-extrabold text-[#3A2E29]">
              Understanding Real Estate Administrative Leverage
            </h2>
            <p className="text-xs sm:text-sm text-[#3A2E29]/80 font-medium leading-relaxed">
              Top-producing real estate professionals evaluate transaction support through the lens of business economics, opportunity cost, and operational reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D8D2D4]">
            
            <div className="space-y-2">
              <h4 className="font-montserrat font-bold text-sm text-[#3A2E29] flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#FE7311]" />
                <span>The Invisible Administrative Drag</span>
              </h4>
              <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                Administrative tasks don't just consume calendar hours — they fragment attention. Context-switching between high-stakes client negotiations and routine document tracking creates mental friction and reduces sales velocity.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-montserrat font-bold text-sm text-[#3A2E29] flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#0D9BA3]" />
                <span>Fixed vs. Variable Overhead</span>
              </h4>
              <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                Employing an in-house assistant creates fixed monthly overhead ($50,000+ per year) regardless of market cycles. An agency model aligns support costs directly with closed transactions, scaling effortlessly with volume.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-montserrat font-bold text-sm text-[#3A2E29] flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#FE7311]" />
                <span>Operational Peace of Mind</span>
              </h4>
              <p className="text-xs text-[#3A2E29]/80 leading-relaxed font-medium">
                HTC provides structured milestone tracking, visible calendar deadlines, secondary assigned backup coordinators, and complete brokerage compliance delivery on every FAR/BAR transaction statewide.
              </p>
            </div>

          </div>

          {/* FAQ Accordion Section */}
          <div className="pt-8 border-t border-[#D8D2D4] space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-montserrat font-extrabold text-[#3A2E29]">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-[#3A2E29]/80 font-medium">
                Common questions regarding our business calculator, formulas, and transaction coordination structure.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'How is my effective hourly time value calculated?',
                  a: 'Your effective hourly rate is calculated by dividing your annual Gross Commission Income (GCI) by your total estimated working hours per year (Hours per Week × Weeks Worked per Year). This benchmark illustrates the true value of your working hours when deciding which tasks to delegate.'
                },
                {
                  q: 'What costs are included in the In-House vs. HTC comparison?',
                  a: 'The in-house model considers base employee compensation, standard payroll taxes and benefits (~20%), software licenses, desk space, and management time. The HTC Agency model calculates cost purely based on your annual closed sides multiplied by our centralized transaction coordination rates.'
                },
                {
                  q: 'Does using HTC require any upfront commitment or monthly retainer?',
                  a: 'Standard Contract-to-Close coordination is billed upon successful transaction closing. There are no monthly retainers or setup fees for standard agent accounts.'
                },
                {
                  q: 'What happens if a deal cancels prior to closing?',
                  a: 'If a transaction cancels prior to closing through no fault of the agent, no coordination fee is billed for standard Contract-to-Close files. A complete archived compliance record is provided to your broker for recordkeeping.'
                },
                {
                  q: 'How does the 20% GCI scenario calculation work?',
                  a: 'The scenario models a hypothetical 20% increase in your annual GCI. It converts that revenue into equivalent closed sides, subtracts the per-file coordination cost, and displays the projected net growth gain.'
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
                    <div className="p-4 pt-0 text-xs text-[#3A2E29]/80 font-medium leading-relaxed border-t border-[#D8D2D4]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
