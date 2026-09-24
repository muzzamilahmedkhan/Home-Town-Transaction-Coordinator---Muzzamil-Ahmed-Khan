import React, { useState } from 'react';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  PhoneCall, 
  HelpCircle, 
  Sparkles, 
  Zap, 
  Clock 
} from 'lucide-react';
import { SPANISH_PRICING } from '../data/spanishContent';
import { usePageSeo } from '../hooks/usePageSeo';
import { getOrganizationSchema, getFaqSchema } from '../utils/seoUtils';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onGoHome: () => void;
  onOpenFaq?: () => void;
}

export const SpanishPricingPage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onGoHome,
}) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const data = SPANISH_PRICING;

  usePageSeo({
    title: data.seo.title,
    description: data.seo.description,
    canonicalUrl: 'https://hometowntc.com/es/precios/',
    language: 'es',
    alternates: [
      { lang: 'en', url: 'https://hometowntc.com/pricing/' },
      { lang: 'es', url: 'https://hometowntc.com/es/precios/' }
    ],
    breadcrumbs: [
      { name: 'Inicio', url: 'https://hometowntc.com/es/' },
      { name: 'Precios', url: 'https://hometowntc.com/es/precios/' }
    ],
    structuredData: [
      getOrganizationSchema('es'),
      getFaqSchema(data.faq),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Coordinación de Contrato a Cierre (Contract-to-Close)',
        provider: {
          '@type': 'Organization',
          name: 'Hometown Transaction Coordinators'
        },
        areaServed: 'Florida',
        offers: [
          {
            '@type': 'Offer',
            name: 'Plan Base',
            price: '375.00',
            priceCurrency: 'USD',
            description: 'Gestión completa del contrato a cierre para agentes en Florida.'
          },
          {
            '@type': 'Offer',
            name: 'Plan Pro',
            price: '475.00',
            priceCurrency: 'USD',
            description: 'Gestión integral con comunicación directa y soporte al cliente del agente.'
          },
          {
            '@type': 'Offer',
            name: 'Listing Launch Estándar',
            price: '125.00',
            priceCurrency: 'USD',
            description: 'Preparación pre-mercado y borrador en MLS en 3 días hábiles.'
          },
          {
            '@type': 'Offer',
            name: 'Listing Launch Prioritario',
            price: '225.00',
            priceCurrency: 'USD',
            description: 'Preparación pre-mercado y borrador en MLS expedito en 1 día hábil.'
          },
          {
            '@type': 'Offer',
            name: 'Broker Compliance (Alquiler / Lease)',
            price: '100.00',
            priceCurrency: 'USD',
            description: 'Revisión y aprobación de expediente de alquiler con el broker.'
          },
          {
            '@type': 'Offer',
            name: 'Broker Compliance (Venta / Compra)',
            price: '195.00',
            priceCurrency: 'USD',
            description: 'Revisión y aprobación de expediente de venta residencial con el broker.'
          },
          {
            '@type': 'Offer',
            name: 'Agent Setup Investment',
            price: '399.00',
            priceCurrency: 'USD',
            description: 'Inversión única de configuración e integración de nuevos clientes.'
          }
        ]
      }
    ]
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#3A2E29]">
      
      {/* 1. HERO */}
      <section className="pt-12 pb-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>{data.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] tracking-tight font-serif">
              {data.hero.headline}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              {data.hero.subtitle}
            </p>
          </div>

          {/* Quick Jump Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-slate-100 max-w-3xl mx-auto text-xs font-bold">
            <button
              onClick={() => scrollToSection('agent-setup')}
              className="px-3.5 py-2 rounded-lg bg-[#EEEAEB] hover:bg-[#D8D2D4] text-[#3A2E29] transition cursor-pointer"
            >
              Agent Setup ($399)
            </button>
            <button
              onClick={() => scrollToSection('contract-to-close')}
              className="px-3.5 py-2 rounded-lg bg-[#EEEAEB] hover:bg-[#D8D2D4] text-[#3A2E29] transition cursor-pointer"
            >
              Contract-to-Close ($375–$475)
            </button>
            <button
              onClick={() => scrollToSection('listing-launch')}
              className="px-3.5 py-2 rounded-lg bg-[#EEEAEB] hover:bg-[#D8D2D4] text-[#3A2E29] transition cursor-pointer"
            >
              Listing Launch ($125–$225)
            </button>
            <button
              onClick={() => scrollToSection('broker-compliance')}
              className="px-3.5 py-2 rounded-lg bg-[#EEEAEB] hover:bg-[#D8D2D4] text-[#3A2E29] transition cursor-pointer"
            >
              Broker Compliance ($100–$195)
            </button>
          </div>
        </div>
      </section>

      {/* 2. AGENT SETUP & SYSTEMS INTEGRATION ($399) */}
      <section id="agent-setup" className="py-16 bg-[#FDFBF7] border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-[#0D9BA3]/30 shadow-md p-6 sm:p-10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center space-x-1.5 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
                  <span>{data.agentSetup.badge}</span>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
                    {data.agentSetup.name}
                  </h2>
                  <span className="text-xs font-bold text-[#FE7311] tracking-wider uppercase">
                    {data.agentSetup.timing}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {data.agentSetup.purpose}
                </p>
                <ul className="space-y-2.5 pt-2">
                  {data.agentSetup.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#0D9BA3] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EEEAEB] p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center text-center min-w-[240px] border border-[#D8D2D4]">
                <div className="text-4xl font-extrabold text-[#3A2E29] font-serif">
                  {data.agentSetup.price}
                </div>
                <span className="text-xs text-slate-500 font-medium mt-1">
                  {data.agentSetup.priceNote}
                </span>
                <button
                  onClick={onBookCall}
                  className="mt-5 w-full bg-[#FE7311] hover:bg-[#e05f03] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-md hover:shadow-lg flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>{data.agentSetup.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTRACT-TO-CLOSE PLANS */}
      <section id="contract-to-close" className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-1.5 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>{data.contractToClose.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              {data.contractToClose.headline}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {data.contractToClose.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.contractToClose.plans.map(plan => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all ${
                  plan.isPopular
                    ? 'border-2 border-[#FE7311] shadow-xl bg-[#FFFDF9] relative'
                    : 'border-[#D8D2D4] shadow-sm bg-white'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 right-6 bg-[#FE7311] text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#3A2E29] font-serif">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{plan.summary}</p>
                  </div>

                  <div className="py-3 border-y border-slate-100">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-black text-[#3A2E29] font-serif">{plan.price}</span>
                      <span className="text-xs text-slate-500 font-medium">al cierre</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">{plan.priceNote}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#0D9BA3] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onBookCall}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow flex items-center justify-center space-x-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-[#FE7311] hover:bg-[#e05f03] text-white shadow-md'
                        : 'bg-[#3A2E29] hover:bg-[#251D1A] text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Notes & Guarantees */}
          <div className="bg-[#EEEAEB] rounded-xl p-5 border border-[#D8D2D4] grid sm:grid-cols-2 gap-4 text-xs text-slate-600">
            <div>
              <strong className="text-[#3A2E29] block mb-0.5">Política de Pago al Cierre:</strong>
              <span>{data.contractToClose.timingNote}</span>
            </div>
            <div>
              <strong className="text-[#3A2E29] block mb-0.5">Garantía por Cancelación:</strong>
              <span>{data.contractToClose.cancellationNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LISTING LAUNCH */}
      <section id="listing-launch" className="py-16 bg-[#FDFBF7] border-b border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#0D9BA3]" />
              <span>{data.listingLaunch.badge}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#3A2E29] font-serif">
              {data.listingLaunch.name}
            </h2>
            <p className="text-sm text-slate-600">{data.listingLaunch.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.listingLaunch.options.map((opt, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#D8D2D4] p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-[#3A2E29]">{opt.title}</h3>
                      <span className="text-xs text-[#0D9BA3] font-semibold flex items-center space-x-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>Entrega: {opt.turnaround}</span>
                      </span>
                    </div>
                    <span className="text-2xl font-black text-[#3A2E29] font-serif">{opt.price}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{opt.description}</p>
                </div>

                <button
                  onClick={onBookCall}
                  className="mt-6 w-full bg-[#3A2E29] hover:bg-[#251D1A] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>{data.listingLaunch.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BROKER COMPLIANCE */}
      <section id="broker-compliance" className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-1.5 bg-[#3A2E29]/10 text-[#3A2E29] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0D9BA3]" />
              <span>{data.brokerCompliance.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
              {data.brokerCompliance.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">{data.brokerCompliance.description}</p>
          </div>

          <div className="bg-[#EEEAEB] rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#3A2E29] uppercase tracking-wider">Tarifas por Archivo:</h4>
              <div className="space-y-3">
                {data.brokerCompliance.rates.map((rate, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white p-3 rounded-lg border border-[#D8D2D4]">
                    <span className="text-xs font-semibold text-slate-700">{rate.type}</span>
                    <span className="text-sm font-black text-[#3A2E29]">{rate.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-[#3A2E29] uppercase tracking-wider">Lo Que Gestionamos:</h4>
              <ul className="space-y-2">
                {data.brokerCompliance.whatWeHandle.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#0D9BA3] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-[#3A2E29] font-serif">
              Preguntas Frecuentes sobre Tarifas
            </h2>
            <p className="text-xs text-slate-500">Respuestas directas sobre la estructura de costos y facturación</p>
          </div>

          <div className="space-y-3">
            {data.faq.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#D8D2D4] overflow-hidden transition"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === item.q ? null : item.q)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center font-bold text-sm text-[#3A2E29] hover:text-[#0D9BA3] cursor-pointer"
                >
                  <span>{item.q}</span>
                  {activeFaq === item.q ? (
                    <ChevronUp className="w-4 h-4 text-[#FE7311] shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>
                {activeFaq === item.q && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onBookCall}
              className="inline-flex items-center space-x-2 bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Agendar Llamada de 15 Minutos</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
