import React, { useEffect } from 'react';
import { ShieldCheck, Clock, Phone, Mail, FileText, Users, AlertCircle } from 'lucide-react';
import { SPANISH_SUBMIT_DEAL } from '../data/spanishContent';
import { usePageSeo } from '../hooks/usePageSeo';
import { getOrganizationSchema } from '../utils/seoUtils';

interface Props {
  onGoHome: () => void;
  onOpenPricing: () => void;
  onOpenFaq?: () => void;
  onBookCall?: () => void;
}

const PHONE_NUMBER = '(954) 377-8330';
const EMAIL_ADDRESS = 'support@hometowntc.com';

export const SpanishSubmitDealPage: React.FC<Props> = ({
  onGoHome,
  onOpenPricing,
  onOpenFaq,
  onBookCall
}) => {
  const data = SPANISH_SUBMIT_DEAL;

  usePageSeo({
    title: data.seo.title,
    description: data.seo.description,
    canonicalUrl: 'https://hometowntc.com/es/enviar-transaccion/',
    language: 'es',
    alternates: [
      { lang: 'en', url: 'https://hometowntc.com/submit-deal/' },
      { lang: 'es', url: 'https://hometowntc.com/es/enviar-transaccion/' }
    ],
    breadcrumbs: [
      { name: 'Inicio', url: 'https://hometowntc.com/es/' },
      { name: 'Enviar Transacción', url: 'https://hometowntc.com/es/enviar-transaccion/' }
    ],
    structuredData: [
      getOrganizationSchema('es'),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Enviar una Nueva Transacción | Hometown TC Florida',
        description: 'Formulario de ingreso para coordinación de transacciones y lanzamiento de listados en Florida.',
        url: 'https://hometowntc.com/es/enviar-transaccion/',
        mainEntity: {
          '@type': 'Service',
          name: 'Ingreso y Coordinación de Transacciones',
          provider: {
            '@type': 'Organization',
            name: 'Hometown Transaction Coordinators'
          }
        }
      }
    ]
  });

  useEffect(() => {
    document.title = data.seo.title;
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script');
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const checklistIcons = [
    <FileText className="w-5 h-5 text-[#0D9BA3]" />,
    <Users className="w-5 h-5 text-[#FE7311]" />,
    <AlertCircle className="w-5 h-5 text-[#3A2E29]" />
  ];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen pb-24">

      {/* 1. HERO */}
      <section className="bg-[#3A2E29] text-white pt-28 pb-10 px-4 sm:px-6 lg:px-8 border-b border-[#0D9BA3]/30">
        <div className="max-w-4xl mx-auto space-y-3 text-center">
          <div className="inline-flex items-center space-x-1.5 bg-[#0D9BA3]/20 text-[#0D9BA3] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>{data.hero.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-serif">
            {data.hero.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        {/* 2. TENGA ESTO A MANO */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#D8D2D4] px-6 py-6 sm:px-8 sm:py-7">
          <h3 className="text-xs font-extrabold text-[#3A2E29] uppercase tracking-widest mb-5">
            {data.checklist.header}
          </h3>
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E4E5]">
            {data.checklist.items.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2 sm:px-6 py-4 sm:py-0 first:pl-0 last:pr-0">
                <div>{checklistIcons[idx]}</div>
                <strong className="text-sm font-bold text-[#3A2E29]">{item.title}</strong>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. EMBEDDED FILLOUT FORM */}
        <div className="bg-white rounded-3xl border border-[#D8D2D4] shadow-xl overflow-hidden w-full">
          <div
            style={{ width: '100%', height: '800px' }}
            data-fillout-id="m2YU3nCffEus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          ></div>
        </div>

        {/* 4. QUÉ SUCEDE DESPUÉS + AYUDA */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Qué sucede después */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#FE7311]" />
              <h4 className="font-bold text-[#3A2E29] text-sm uppercase tracking-wider">{data.whatNext.title}</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {data.whatNext.text}
            </p>
          </div>

          {/* Ayuda para enviar */}
          <div className="bg-[#3A2E29] text-white rounded-2xl p-6 sm:p-8 border border-[#0D9BA3]/30 shadow-sm space-y-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#0D9BA3]" />
              <h4 className="font-bold text-white text-sm uppercase tracking-wider">{data.needHelp.title}</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {data.needHelp.text}
            </p>
            <div className="flex flex-col space-y-2.5 pt-1">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="flex items-center space-x-2 text-xs font-bold hover:text-[#FE7311] transition">
                <Phone className="w-4 h-4" />
                <span>{data.needHelp.callText}</span>
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center space-x-2 text-xs font-bold hover:text-[#0D9BA3] transition">
                <Mail className="w-4 h-4" />
                <span>{data.needHelp.emailText}</span>
              </a>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
};
