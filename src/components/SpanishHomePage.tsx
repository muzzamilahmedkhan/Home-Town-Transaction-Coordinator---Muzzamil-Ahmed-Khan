import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  FileText, 
  PhoneCall, 
  Users, 
  Building2, 
  Sparkles,
  Award
} from 'lucide-react';
import { SPANISH_HOME } from '../data/spanishContent';
import { FOUNDER_IMAGE } from '../data/content';
import { usePageSeo } from '../hooks/usePageSeo';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onExploreServices: () => void;
  onSeeHowItWorks: () => void;
}

export const SpanishHomePage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onExploreServices,
  onSeeHowItWorks
}) => {
  const data = SPANISH_HOME;

  usePageSeo({
    title: data.seo.title,
    description: data.seo.description,
    canonicalUrl: 'https://hometowntc.com/es/',
    language: 'es',
    alternates: [
      { lang: 'en', url: 'https://hometowntc.com/' },
      { lang: 'es', url: 'https://hometowntc.com/es/' }
    ],
    breadcrumbs: [
      { name: 'Inicio', url: 'https://hometowntc.com/es/' }
    ]
  });

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29]">
      
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-[#EEEAEB] pt-8 pb-16 lg:py-20 border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#3A2E29]/5 border border-[#3A2E29]/15 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#3A2E29]">
                <span className="w-2 h-2 rounded-full bg-[#0D9BA3]" />
                <span>{data.hero.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3A2E29] tracking-tight leading-[1.08] font-serif">
                {data.hero.titleLine1}{' '}
                <span className="text-[#FE7311]">{data.hero.titleAccent}</span>
              </h1>

              <div className="space-y-3 text-base sm:text-lg text-[#3A2E29]/90 font-medium leading-relaxed max-w-2xl">
                <p>{data.hero.p1}</p>
                <p className="text-sm sm:text-base text-[#3A2E29]">{data.hero.p2}</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#0D9BA3] uppercase tracking-wider">
                  {data.hero.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onBookCall}
                  className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <span>{data.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onExploreServices}
                  className="bg-[#3A2E29] hover:bg-[#251D1A] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{data.hero.ctaSecondary}</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Card Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Michelle Martinez - Hometown TC"
                    className="w-full h-auto object-cover object-top max-h-[480px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-5 bg-white border-t border-[#D8D2D4] space-y-1">
                    <div className="flex items-center space-x-1.5 text-[#0D9BA3] text-xs font-bold uppercase tracking-wider">
                      <Award className="w-4 h-4 text-[#FE7311]" />
                      <span>Fundadora y Coordinadora Principal</span>
                    </div>
                    <h3 className="font-serif font-bold text-[#3A2E29] text-lg">Michelle Martinez</h3>
                    <p className="text-xs text-slate-500">Especialista en transacciones de Florida y contratos FAR/BAR</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FOUR PILLARS */}
      <section className="py-16 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.pillars.map((p, idx) => (
              <div key={idx} className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0D9BA3] shadow-sm font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#3A2E29] font-serif">{p.title}</h3>
                  <span className="text-xs font-semibold text-[#FE7311] block mb-1">{p.subtitle}</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EL MÉTODO H.O.M.E. */}
      <section id="metodo-home" className="py-20 bg-[#FDFBF7] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>{data.method.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              {data.method.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {data.method.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.method.steps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#3A2E29] text-white flex items-center justify-center font-serif text-2xl font-black shadow">
                    {step.letter}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#3A2E29] font-serif">{step.title}</h3>
                    <span className="text-xs text-[#0D9BA3] font-semibold block mt-0.5">{step.subtitle}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-20 bg-[#3A2E29] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight">
              {data.cta.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {data.cta.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>{data.cta.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onSubmitDeal}
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition cursor-pointer"
            >
              <span>ENVIAR UNA TRANSACCIÓN</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
