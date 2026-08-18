import React, { useState } from 'react';
import {
  Check,
  HelpCircle,
  PhoneCall,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  Clock,
  ArrowUp
} from 'lucide-react';
import { PRICING_PAGE_DATA } from '../data/pricingData';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onGoHome: () => void;
  onOpenTransactionCoordination: () => void;
  onOpenListingCoordination: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc: () => void;
  onOpenRoi: () => void;
  onOpenTcWorkshop?: () => void;
}

export const PricingPlansPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onGoHome,
  onOpenRoi,
  onOpenTcWorkshop,
}) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const data = PRICING_PAGE_DATA;

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#3A2E29]">
      
      {/* 1. HERO + VSL */}
      <section className="pt-12 pb-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          
          {/* Header Copy */}
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>{data.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight">
              {data.hero.title}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.hero.description}
            </p>
          </div>

          {/* VSL Video Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D8D2D4] aspect-video bg-black/90">
              <iframe
                src={data.hero.vslVideoUrl}
                title="Hometown TC Services & Pricing Overview"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Simple Inline Jump Links (No Cards) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700">
            {data.hero.jumpLinks.map((link, idx) => (
              <React.Fragment key={link.targetId}>
                <button
                  onClick={() => scrollToSection(link.targetId)}
                  className="hover:text-[#0D9BA3] transition cursor-pointer underline-offset-4 hover:underline"
                >
                  {link.label}
                </button>
                {idx < data.hero.jumpLinks.length - 1 && (
                  <span className="text-slate-300 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* 2. LISTING LAUNCH (Editorial Two-Column Layout | Background: Cream) */}
      <section
        id="listing-launch"
        className="py-16 lg:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Eyebrow & Headline */}
          <div className="mb-10 space-y-2">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
              {data.listingLaunch.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3A2E29] font-serif">
              {data.listingLaunch.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              {data.listingLaunch.description}
            </p>
          </div>

          {/* Two-Column Editorial Layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Service Details & What's Handled */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-bold text-base text-[#3A2E29] uppercase tracking-wider text-xs">
                What Is Included in Every Listing Launch:
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                {data.listingLaunch.included.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#0D9BA3]/15 text-[#0D9BA3] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={onSubmitDeal}
                  className="inline-flex items-center space-x-2 bg-[#0D9BA3] hover:bg-[#0b868d] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer group"
                >
                  <span>{data.listingLaunch.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Standard / Priority Pricing + Add-Ons */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                {data.listingLaunch.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-[#D8D2D4] shadow-sm flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-sm sm:text-base text-[#3A2E29]">
                          {opt.title}
                        </h4>
                        {opt.badge && (
                          <span className="bg-[#FE7311] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-[#0D9BA3]" />
                        <span>{opt.turnaround}</span>
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-2xl font-extrabold text-[#3A2E29]">
                        {opt.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add-Ons Sub-List */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Optional Add-Ons:
                </div>
                <div className="space-y-2 text-xs">
                  {data.listingLaunch.addons.map((addon, idx) => (
                    <div
                      key={idx}
                      className="flex items-baseline justify-between py-2 border-b border-[#D8D2D4]/70 gap-4"
                    >
                      <div className="text-slate-700">
                        <span className="font-semibold text-[#3A2E29]">{addon.name}</span>
                        {addon.note && (
                          <span className="text-slate-500 block text-[11px] mt-0.5">
                            {addon.note}
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-[#0D9BA3] flex-shrink-0">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. CONTRACT-TO-CLOSE — BASE + PRO (Two Equal Side-by-Side Cards | Background: White) */}
      <section
        id="contract-to-close"
        className="py-16 lg:py-24 bg-white border-b border-[#D8D2D4] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Eyebrow & Headline */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
              {data.contractToClose.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              {data.contractToClose.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.contractToClose.description}
            </p>
            <p className="text-xs text-slate-500 pt-1">
              <em>{data.contractToClose.setupNote}</em>
            </p>
          </div>

          {/* Two Equal Side-by-Side Cards (Base vs Pro) */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {data.contractToClose.plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-[#3A2E29] to-[#2B211C] text-white border-2 border-[#FE7311] shadow-xl relative'
                    : 'bg-[#EEEAEB] border border-[#D8D2D4] shadow-sm text-[#3A2E29]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 right-6 bg-[#FE7311] text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-2xl font-bold font-serif ${plan.isPopular ? 'text-white' : 'text-[#3A2E29]'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${plan.isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.summary}
                    </p>
                  </div>

                  <div className="pb-4 border-b border-current/10">
                    <div className="flex items-baseline space-x-2">
                      <span className={`text-4xl sm:text-5xl font-extrabold font-serif ${plan.isPopular ? 'text-white' : 'text-[#3A2E29]'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-xs ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        {plan.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <div className={`text-xs font-bold uppercase tracking-wider ${plan.isPopular ? 'text-[#0D9BA3]' : 'text-slate-500'}`}>
                      Plan Highlights:
                    </div>
                    <ul className="space-y-2.5 text-xs leading-relaxed">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold ${
                            plan.isPopular
                              ? 'bg-[#0D9BA3] text-white'
                              : 'bg-[#0D9BA3]/20 text-[#0D9BA3]'
                          }`}>
                            <Check className="w-3 h-3" />
                          </div>
                          <span className={plan.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onSubmitDeal}
                    className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md flex items-center justify-center space-x-2 ${
                      plan.isPopular
                        ? 'bg-[#FE7311] hover:bg-[#e06209] text-white'
                        : 'bg-[#0D9BA3] hover:bg-[#0b868d] text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Additional Contract-to-Close Services (Simple, Non-Cluttered List) */}
          <div className="pt-4 border-t border-[#D8D2D4] grid sm:grid-cols-2 gap-6 text-xs">
            {data.contractToClose.additionalServices.map((svc, idx) => (
              <div key={idx} className="flex justify-between items-start gap-4">
                <div>
                  <strong className="text-[#3A2E29] block">{svc.name}</strong>
                  <span className="text-slate-500">{svc.description}</span>
                </div>
                <span className="font-bold text-[#0D9BA3] text-sm flex-shrink-0">
                  {svc.price}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BROKER COMPLIANCE ONLY (Clean Two-Column Editorial Section | Background: Cream) */}
      <section
        id="broker-compliance"
        className="py-16 lg:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 space-y-2">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
              {data.brokerCompliance.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3A2E29] font-serif">
              {data.brokerCompliance.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              {data.brokerCompliance.description}
            </p>
          </div>

          {/* Clean Two-Column Editorial Section */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Service Explanation + What We Handle */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-[#3A2E29]">
                What We Handle for You:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {data.brokerCompliance.whatWeHandle.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#0D9BA3]/15 text-[#0D9BA3] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Rental $100 | Contract $195 Clearly Visible (No Comparison Table) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-3">
                {data.brokerCompliance.rates.map((rate, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-[#D8D2D4] shadow-sm flex items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#3A2E29]">
                        {rate.type}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {rate.paymentNote}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29]">
                        {rate.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onSubmitDeal}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#0D9BA3] hover:bg-[#0b868d] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer group"
                >
                  <span>{data.brokerCompliance.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. TEAMS + BROKERAGES (Three Simple Service Areas | Background: White) */}
      <section
        id="teams-brokerages"
        className="py-16 lg:py-24 bg-white border-b border-[#D8D2D4] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
              {data.teamsBrokerages.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              {data.teamsBrokerages.name}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.teamsBrokerages.description}
            </p>
          </div>

          {/* Three Simple Service Areas (No Nested Boxes) */}
          <div className="grid md:grid-cols-3 gap-8">
            {data.teamsBrokerages.serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="space-y-3 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Layers className="w-5 h-5" />}
                  {idx === 2 && <Sparkles className="w-5 h-5" />}
                </div>
                <h3 className="font-bold text-base text-[#3A2E29] font-serif">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs: BOOK A FIT CALL & TRAIN YOUR TEAM → */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{data.teamsBrokerages.ctaPrimary}</span>
            </button>

            {onOpenTcWorkshop ? (
              <button
                onClick={onOpenTcWorkshop}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#EEEAEB] text-[#0D9BA3] border border-[#0D9BA3] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer group"
              >
                <span>{data.teamsBrokerages.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <a
                href="https://www.hometowntc.com/tcworkshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#EEEAEB] text-[#0D9BA3] border border-[#0D9BA3] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer group"
              >
                <span>{data.teamsBrokerages.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>

        </div>
      </section>

      {/* 6. SCALE — COMING SOON / WAITLIST (Compact Card | Background: Cream) */}
      <section
        id="scale"
        className="py-16 lg:py-20 bg-[#EEEAEB] border-b border-[#D8D2D4] scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#3A2E29] to-[#201814] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden space-y-5">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FE7311]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0D9BA3]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="inline-flex items-center space-x-2 bg-[#FE7311]/20 text-[#FE7311] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>{data.scale.eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif">
                {data.scale.headline}
              </h2>

              <p className="text-slate-200 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                {data.scale.description}
              </p>

              <div className="pt-3 space-y-2">
                <button
                  onClick={onBookCall}
                  className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-lg cursor-pointer group"
                >
                  <span>{data.scale.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <p className="text-[11px] text-slate-400">
                  {data.scale.waitlistNote}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (Accordion Only | Background: White) */}
      <section
        id="faq"
        className="py-16 lg:py-24 bg-white scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Clean Accordion (No Giant Cards, No Extra Sales Blocks) */}
          <div className="space-y-4">
            {data.faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#D8D2D4] overflow-hidden transition shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 sm:p-6 font-bold text-sm sm:text-base text-[#3A2E29] flex justify-between items-center cursor-pointer hover:text-[#0D9BA3] transition"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#D8D2D4] pt-4 space-y-3">
                      {faq.answerParagraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}

                      {/* Payment Timing Breakdown */}
                      {faq.paymentBreakdown && (
                        <div className="space-y-1.5 font-medium text-slate-700">
                          {faq.paymentBreakdown.map((item, idx) => (
                            <p key={idx}>
                              <strong>{item.item}:</strong> {item.timing}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Base vs Pro Comparison */}
                      {faq.baseProBreakdown && (
                        <div className="space-y-1.5 text-slate-700">
                          <p><strong>Base:</strong> {faq.baseProBreakdown.base}</p>
                          <p><strong>Pro:</strong> {faq.baseProBreakdown.pro}</p>
                        </div>
                      )}

                      {/* Specific Contextual Links */}
                      {faq.links && faq.links.length > 0 && (
                        <div className="pt-2 flex flex-wrap items-center gap-4">
                          {faq.links.map((link, idx) => {
                            if (link.action === 'bookCall') {
                              return (
                                <button
                                  key={idx}
                                  onClick={onBookCall}
                                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0D9BA3] hover:text-[#0b868d] transition uppercase tracking-wider cursor-pointer"
                                >
                                  <span>{link.text}</span>
                                </button>
                              );
                            }
                            if (link.action === 'roi') {
                              return (
                                <button
                                  key={idx}
                                  onClick={onOpenRoi}
                                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0D9BA3] hover:text-[#0b868d] transition cursor-pointer"
                                >
                                  <span>{link.text}</span>
                                </button>
                              );
                            }
                            if (link.action === 'contractToCloseSection') {
                              return (
                                <button
                                  key={idx}
                                  onClick={() => scrollToSection('contract-to-close')}
                                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0D9BA3] hover:text-[#0b868d] transition uppercase tracking-wider cursor-pointer"
                                >
                                  <span>{link.text}</span>
                                </button>
                              );
                            }
                            if (link.action === 'tcWorkshop') {
                              return onOpenTcWorkshop ? (
                                <button
                                  key={idx}
                                  onClick={onOpenTcWorkshop}
                                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#FE7311] hover:text-[#e06209] transition uppercase tracking-wider cursor-pointer"
                                >
                                  <span>{link.text}</span>
                                </button>
                              ) : (
                                <a
                                  key={idx}
                                  href="https://www.hometowntc.com/tcworkshop"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#FE7311] hover:text-[#e06209] transition uppercase tracking-wider cursor-pointer"
                                >
                                  <span>{link.text}</span>
                                </a>
                              );
                            }
                            return null;
                          })}
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
