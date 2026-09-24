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
import { usePageSeo } from '../hooks/usePageSeo';
import { getOrganizationSchema, getFaqSchema } from '../utils/seoUtils';

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
  onOpenFaq?: () => void;
}

export const PricingPlansPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onGoHome,
  onOpenRoi,
  onOpenTcWorkshop,
  onOpenFaq,
}) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const data = PRICING_PAGE_DATA;

  usePageSeo({
    title: 'Florida TC Services & Pricing Plans | Hometown TC',
    description: 'Boutique transaction coordination pricing for Florida agents. Contract-to-Close from $375, Listing Launch, and Bilingual TC support.',
    canonicalUrl: 'https://hometowntc.com/pricing/',
    language: 'en',
    alternates: [
      { lang: 'en', url: 'https://hometowntc.com/pricing/' },
      { lang: 'es', url: 'https://hometowntc.com/es/precios/' }
    ],
    breadcrumbs: [
      { name: 'Home', url: 'https://hometowntc.com/' },
      { name: 'Pricing & Services', url: 'https://hometowntc.com/pricing/' }
    ],
    structuredData: [
      getOrganizationSchema('en'),
      getFaqSchema(
        data.faqs.map(item => ({
          q: item.question,
          a: item.answerParagraphs.join(' ')
        }))
      ),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Florida Real Estate Transaction Coordination & Listing Launch',
        provider: {
          '@type': 'Organization',
          name: 'Hometown Transaction Coordinators'
        },
        areaServed: 'Florida',
        offers: [
          {
            '@type': 'Offer',
            name: 'Base Plan (Contract-to-Close)',
            price: '375.00',
            priceCurrency: 'USD',
            description: 'Full contract-to-close management from executed agreement through closing. Paid at closing.'
          },
          {
            '@type': 'Offer',
            name: 'Pro Plan (Contract-to-Close)',
            price: '475.00',
            priceCurrency: 'USD',
            description: 'Full contract-to-close with direct client milestone communication and settlement statement audit. Paid at closing.'
          },
          {
            '@type': 'Offer',
            name: 'Listing Launch (Standard)',
            price: '125.00',
            priceCurrency: 'USD',
            description: 'Pre-market listing launch and full MLS draft input with 3 business days turnaround.'
          },
          {
            '@type': 'Offer',
            name: 'Listing Launch (Priority)',
            price: '225.00',
            priceCurrency: 'USD',
            description: 'Expedited pre-market listing launch and MLS draft input with 1 business day turnaround.'
          },
          {
            '@type': 'Offer',
            name: 'Broker Compliance (Rental / Lease File)',
            price: '100.00',
            priceCurrency: 'USD',
            description: 'Broker compliance audit and portal upload for residential rental and lease agreements.'
          },
          {
            '@type': 'Offer',
            name: 'Broker Compliance (Sale / Purchase Contract)',
            price: '195.00',
            priceCurrency: 'USD',
            description: 'Broker compliance audit and portal upload for residential purchase and sales files.'
          },
          {
            '@type': 'Offer',
            name: 'Agent Setup Investment',
            price: '399.00',
            priceCurrency: 'USD',
            description: 'One-time onboarding and systems integration investment for new HTC clients.'
          }
        ]
      }
    ]
  });

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

      {/* 2. AGENT SETUP INVESTMENT */}
      <section
        id="agent-setup"
        className="py-12 lg:py-16 bg-white border-b border-[#D8D2D4] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#D8D2D4] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{data.agentSetup.badge}</span>
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
                  {data.agentSetup.name}
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-[#FE7311]">
                  {data.agentSetup.timing}
                </p>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                <strong className="text-[#3A2E29]">Purpose:</strong> {data.agentSetup.purpose}
              </p>
              <ul className="grid sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-600">
                {data.agentSetup.details.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-4 h-4 rounded-full bg-[#0D9BA3]/15 text-[#0D9BA3] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start lg:items-end justify-between border-t lg:border-t-0 lg:border-l border-[#D8D2D4] pt-6 lg:pt-0 lg:pl-8 flex-shrink-0 space-y-4">
              <div className="lg:text-right">
                <div className="text-3xl sm:text-4xl font-black font-serif text-[#3A2E29]">
                  {data.agentSetup.price}
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  {data.agentSetup.priceNote}
                </div>
                <div className="text-[11px] text-[#0D9BA3] font-bold mt-1 max-w-[220px] lg:text-right">
                  Due at registration for new clients before Setup Call
                </div>
              </div>

              <button
                onClick={onBookCall}
                className="inline-flex items-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-sm cursor-pointer"
              >
                <span>{data.agentSetup.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LISTING LAUNCH (Editorial Two-Column Layout | Background: Cream) */}
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
                className="bg-white rounded-3xl p-8 border border-[#D8D2D4] shadow-sm text-[#3A2E29] flex flex-col justify-between transition hover:border-slate-400"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-[#3A2E29]">
                      {plan.name}
                    </h3>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      {plan.summary}
                    </p>
                  </div>

                  <div className="pb-4 border-b border-[#D8D2D4]">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl sm:text-5xl font-extrabold font-serif text-[#3A2E29]">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500">
                        {plan.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Plan Highlights:
                    </div>
                    <ul className="space-y-2.5 text-xs leading-relaxed">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold bg-[#0D9BA3]/20 text-[#0D9BA3]">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-slate-700">
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
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs flex items-center justify-center space-x-2 bg-[#0D9BA3] hover:bg-[#0b868d] text-white"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Residential Timing & Cancellation Policy Clear Blocks */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] space-y-1.5 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#FE7311]">
                <Clock className="w-4 h-4" />
                <span>Residential Timing</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {data.contractToClose.timingNote}
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] space-y-1.5 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#0D9BA3]">
                <ShieldCheck className="w-4 h-4" />
                <span>Cancellation Policy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {data.contractToClose.cancellationNote}
              </p>
            </div>
          </div>

          {/* Additional Contract-to-Close Services */}
          <div className="pt-2 border-t border-[#D8D2D4] space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Additional Services & Add-Ons:
            </div>
            <div className="grid sm:grid-cols-2 gap-5 text-xs">
              {data.contractToClose.additionalServices.map((svc, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] shadow-xs space-y-1.5"
                >
                  <strong className="text-sm font-bold text-[#3A2E29] block">{svc.name}</strong>
                  <p className="text-xs text-slate-600 leading-relaxed">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. BROKER COMPLIANCE (Clean Two-Column Editorial Section | Background: Cream) */}
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
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Scope, Agent Provides, and Boundary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#3A2E29]">
                  What We Handle:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
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

              {/* Agent Provides */}
              <div className="p-4 bg-white rounded-2xl border border-[#D8D2D4] space-y-2 shadow-xs">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#FE7311]">
                  Agent Provides:
                </h4>
                <ul className="grid sm:grid-cols-1 gap-2 text-xs text-slate-700">
                  {data.brokerCompliance.agentProvides.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FE7311] flex-shrink-0" />
                      <span className="capitalize">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scope Boundary Notice */}
              <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] space-y-1.5">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Focused Specifically on Brokerage File Approval:
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Broker Compliance is focused specifically on brokerage file approval. Pro client communication, buyer/seller milestone reminders, inspection/lender coordination, and full Contract-to-Close coordination are not included.
                </p>
              </div>
            </div>

            {/* Right Column: Rental $100 | Contract $195 Due when submitted */}
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
                      <p className="text-xs text-slate-500 mt-0.5 capitalize">
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

          {/* Three Simple Service Areas (No Flat Public Price) */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
              Custom support may include:
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {data.teamsBrokerages.serviceAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#D8D2D4] space-y-3 text-left shadow-xs"
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
          </div>

          {/* CTAs: BOOK A 15-MINUTE FIT CALL & EXPLORE THE FLORIDA TC WORKSHOP */}
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
          <div className="bg-[#3A2E29] text-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-xl relative overflow-hidden space-y-5">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                <Zap className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>{data.scale.eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif">
                {data.scale.headline}
              </h2>

              <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
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

          {/* Direct link to complete FAQ directory */}
          {onOpenFaq && (
            <div className="pt-6 border-t border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FBF9F5] p-6 rounded-2xl border">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-bold text-[#3A2E29] text-base">Have questions about workflows, clients, or technology?</h4>
                <p className="text-xs text-[#6B5E55]">
                  Explore all 6 categories in our complete FAQ directory including Services, Getting Started, Working Together, Your Clients, and Trust + Technology.
                </p>
              </div>
              <button
                onClick={onOpenFaq}
                className="whitespace-nowrap inline-flex items-center space-x-2 bg-[#3A2E29] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#251D19] transition cursor-pointer shadow-sm"
              >
                <span>VISIT COMPLETE FAQ DIRECTORY</span>
                <ArrowRight className="w-4 h-4 text-[#0D9BA3]" />
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
