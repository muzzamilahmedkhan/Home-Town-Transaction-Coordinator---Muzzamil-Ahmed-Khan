import React, { useEffect } from 'react';
import {
  ShieldCheck,
  Award,
  Heart,
  PhoneCall,
  ArrowRight,
  Users,
  Compass
} from 'lucide-react';
import { FOUNDER_IMAGE, MEET_MICHELLE_IMAGE } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onGoHome: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc: () => void;
  onOpenPricing: () => void;
  onOpenTransactionCoordination: () => void;
  onOpenListingCoordination: () => void;
  onOpenMeetTheTribe?: () => void;
}

export const AboutMichellePage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onGoHome,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenPricing,
  onOpenTransactionCoordination,
  onOpenListingCoordination,
  onOpenMeetTheTribe
}) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Michelle Martinez | Founder of Hometown Transaction Coordinators';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalMetaContent = metaDesc ? metaDesc.getAttribute('content') : '';
    const targetMetaContent =
      'Meet Michelle Martinez, founder of Hometown Transaction Coordinators, and learn the mission, vision, H.O.M.E. values, HTC Honors impact, and standard behind Hometown.';

    if (metaDesc) {
      metaDesc.setAttribute('content', targetMetaContent);
    }

    // Structured Data for Person & Breadcrumbs
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'person-michelle-martinez-schema';
    schemaScript.text = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Michelle Martinez',
        jobTitle: 'Founder + Owner',
        description:
          'Michelle Martinez is the founder and owner of Hometown Transaction Coordinators, a boutique Florida real estate support agency. She has served Realtors since 1995 and founded HTC in 2018.',
        worksFor: {
          '@type': 'Organization',
          name: 'Hometown Transaction Coordinators'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: window.location.origin
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Meet Michelle',
            item: `${window.location.origin}/about/`
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
      const existingScript = document.getElementById('person-michelle-martinez-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1 — HERO: MEET MICHELLE */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-8">
            <button onClick={onGoHome} className="hover:text-[#3A2E29] transition cursor-pointer">Home</button>
            <span>→</span>
            <span className="text-[#3A2E29]">Meet Michelle</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column (Desktop) / Top Column (Mobile): Copy */}
            <div className="lg:col-span-7 space-y-6 order-1">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4] shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>MEET MICHELLE</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-[1.15]">
                I built Hometown around a standard.
              </h1>

              {/* Primary AEO Answer & Core Body */}
              <div className="space-y-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                <p>
                  "I'm Michelle Martinez, founder of Hometown Transaction Coordinators. I've served Realtors since 1995 and worked across more than 20,000 contracts.
                </p>
                <p>
                  After all those files, one thing has never changed: there are real people behind every transaction. The work matters because they matter."
                </p>
              </div>

              {/* Proof Line */}
              <div className="pt-2 text-xs sm:text-sm font-bold text-[#0D9BA3] tracking-wide flex flex-wrap items-center gap-2">
                <span>Serving Realtors since 1995</span>
                <span>·</span>
                <span>HTC founded in 2018</span>
                <span>·</span>
                <span>20,000+ contracts</span>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {onOpenMeetTheTribe ? (
                  <button
                    onClick={onOpenMeetTheTribe}
                    className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg cursor-pointer group"
                  >
                    <span>MEET THE TRIBE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={onBookCall}
                    className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg cursor-pointer group"
                  >
                    <span>BOOK A 15-MINUTE FIT CALL</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                <button
                  onClick={onOpenWhyHtc}
                  className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-[#3A2E29] border border-[#D8D2D4] px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer group"
                >
                  <span>SEE WHY HTC</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Right Column (Desktop) / Bottom Column (Mobile): Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-2">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="rounded-3xl overflow-hidden border-2 border-[#D8D2D4] shadow-sm bg-white">
                  <img
                    src={MEET_MICHELLE_IMAGE || FOUNDER_IMAGE}
                    alt="Michelle Martinez - Founder of Hometown Transaction Coordinators"
                    className="w-full h-auto object-cover object-top aspect-[4/5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-5 bg-white border-t border-[#D8D2D4]">
                    <div className="text-base font-bold text-[#3A2E29] font-serif">Michelle Martinez</div>
                    <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider mt-0.5">
                      Founder + Owner
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2 — MISSION + VISION */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* Section Eyebrow */}
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Compass className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>MISSION + VISION</span>
            </div>
          </div>

          {/* Side-by-Side Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* OUR MISSION (Foundation) */}
            <div className="bg-[#EEEAEB] rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#0D9BA3]">
                  OUR MISSION
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
                  We own the boring work so agents can grow.
                </h2>
              </div>
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                From Yes to Sold, HTC keeps the operational work behind the transaction moving.
              </p>
            </div>

            {/* OUR VISION (Forward-Looking & Larger in Scale) */}
            <div className="bg-gradient-to-br from-[#3A2E29] to-[#251D1A] text-white rounded-3xl p-8 sm:p-12 border border-[#3A2E29] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#FE7311]">
                  OUR VISION
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white font-serif leading-[1.15] tracking-tight">
                  To become Florida’s most trusted name in transaction support.
                </h2>
              </div>
              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
                Growing alongside real estate professionals and perfecting the experience behind every closing, every year.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3 — H.O.M.E. VALUES */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
              <Heart className="w-3.5 h-3.5 text-[#FE7311]" />
              <span>OUR VALUES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              Honor. Order. Mastery. Ease.
            </h2>
          </div>

          {/* 4 Clean Columns Desktop / Stacked Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* HONOR */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#D8D2D4] shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-black tracking-widest text-[#0D9BA3] uppercase">
                  H
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                  HONOR
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  Do the right thing for the people and the work entrusted to us.
                </p>
              </div>
            </div>

            {/* ORDER */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#D8D2D4] shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-black tracking-widest text-[#FE7311] uppercase">
                  O
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                  ORDER
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  Create structure so the work stays organized and everyone knows what comes next.
                </p>
              </div>
            </div>

            {/* MASTERY */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#D8D2D4] shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-black tracking-widest text-[#0D9BA3] uppercase">
                  M
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                  MASTERY
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  Know the work, keep learning, and keep raising the standard.
                </p>
              </div>
            </div>

            {/* EASE */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#D8D2D4] shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-black tracking-widest text-[#FE7311] uppercase">
                  E
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A2E29] font-serif">
                  EASE
                </h3>
                <p className="text-sm text-slate-700 font-normal leading-relaxed">
                  Build better systems so good work feels easier to deliver and easier to experience.
                </p>
              </div>
            </div>

          </div>

          {/* Underneath Statement & Method Link */}
          <div className="pt-4 border-t border-[#D8D2D4] space-y-4 max-w-4xl">
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              H.O.M.E. guides how we lead, how we train, how we choose our partners, and how we make decisions at HTC.
            </p>
            <div>
              <button
                onClick={onOpenHowItWorks}
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D9BA3] hover:text-[#0a7f86] transition cursor-pointer group"
              >
                <span>SEE THE H.O.M.E. CLOSE METHOD</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4 — THE HTC PROMISE */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FE7311]" />
            <span>THE PROMISE BEHIND THE WORK</span>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight max-w-3xl mx-auto">
              Protect the Agent. Protect the Broker. Protect the Client.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto">
              That promise is the filter behind the systems we build, the people we train, and the way HTC supports the work entrusted to us.
            </p>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-[#D8D2D4] max-w-2xl mx-auto">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0D9BA3] font-serif tracking-tight">
              Collaborative. Predictable. Transparent.
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5 — HTC HONORS */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#EEEAEB] border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Story & Meaning */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-white px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
                <Heart className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>HTC HONORS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
                Good Business. Good Community. Real Impact.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                <p>
                  HTC Honors is our way of giving back to the agents who support Hometown and turning that business into something bigger than the closing itself.
                </p>
                <p>
                  Our agents earn HTC Honors points as they work with us. They can use those points for rewards or charitable giving, and when they choose to donate their points, HTC matches the donation.
                </p>
                <p>
                  Our agents are busy people, and sometimes their points expire before they use them. We still find ways to turn that value into meaningful community support.
                </p>
                <p>
                  Through HTC Honors, we give our time, financial support, food, hygiene products, care packages, and other needed items to organizations serving people in our communities. Supporting survivors of domestic violence is especially close to my heart.
                </p>
              </div>

            </div>

            {/* Right Column: Impact at a Glance */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D8D2D4] shadow-sm space-y-8">
                <div className="border-b border-[#D8D2D4] pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D9BA3]">
                    IMPACT AT A GLANCE
                  </span>
                  <div className="text-xs text-slate-500 mt-1">Current published HTC Honors impact</div>
                </div>

                <div className="space-y-6">
                  {/* 15+ */}
                  <div className="flex items-baseline space-x-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif min-w-[90px]">
                      15+
                    </div>
                    <div className="text-base sm:text-lg font-medium text-slate-700">
                      Charities Supported
                    </div>
                  </div>

                  <div className="border-t border-[#EEEAEB]" />

                  {/* 100+ */}
                  <div className="flex items-baseline space-x-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#FE7311] font-serif min-w-[90px]">
                      100+
                    </div>
                    <div className="text-base sm:text-lg font-medium text-slate-700">
                      Self-Care Kits for Survivors
                    </div>
                  </div>

                  <div className="border-t border-[#EEEAEB]" />

                  {/* $15,000 */}
                  <div className="flex items-baseline space-x-4">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#0D9BA3] font-serif min-w-[90px]">
                      $15,000
                    </div>
                    <div className="text-base sm:text-lg font-medium text-slate-700">
                      Donated
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6 — FOUNDER-LED. TEAM-DELIVERED. */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image on left (desktop) / bottom (mobile) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="rounded-3xl overflow-hidden border-2 border-[#D8D2D4] shadow-sm bg-[#F7F5F5]">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Michelle Martinez - Founder & Leadership at HTC"
                    className="w-full h-auto object-cover object-top aspect-[4/5]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="p-5 bg-white border-t border-[#D8D2D4]">
                    <div className="text-base font-bold text-[#3A2E29] font-serif">Michelle Martinez</div>
                    <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider mt-0.5">
                      Setting the Standard & Leading the Tribe
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy on right (desktop) / top (mobile) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D9BA3] bg-[#EEEAEB] px-3.5 py-1.5 rounded-full border border-[#D8D2D4]">
                <Users className="w-3.5 h-3.5 text-[#FE7311]" />
                <span>THE STANDARD CONTINUES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight leading-tight">
                Hometown was never meant to stop with me.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                <p>
                  My job is to set the standard, build the systems, and make sure the people carrying the Hometown name understand what it means.
                </p>
                <p>
                  Today, HTC is a tech-enabled team built to carry that standard forward across every file we support.
                </p>
                <p className="font-medium text-[#3A2E29]">
                  Meet the people helping carry it forward.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {onOpenMeetTheTribe ? (
                  <button
                    onClick={onOpenMeetTheTribe}
                    className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg cursor-pointer group"
                  >
                    <span>MEET THE TRIBE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={onBookCall}
                    className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg cursor-pointer group"
                  >
                    <span>BOOK A 15-MINUTE FIT CALL</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
                <button
                  onClick={onOpenWhyHtc}
                  className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-[#3A2E29] border border-[#D8D2D4] px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer group"
                >
                  <span>SEE WHY HTC</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7 — FOUNDER SIGN-OFF */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-[#EEEAEB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          
          {/* Exact Sign-off Text */}
          <div className="space-y-3">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A2E29] font-serif tracking-tight">
              FORWARD.
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0D9BA3] font-serif italic tracking-wide">
              Always Forward.
            </div>
          </div>

          {/* Founder Identity */}
          <div className="pt-2 space-y-1">
            <div className="text-lg sm:text-xl font-bold text-[#3A2E29] font-serif">
              Michelle Martinez
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#FE7311]">
              Founder + Owner
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600">
              Hometown Transaction Coordinators
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onBookCall}
              className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg cursor-pointer group"
            >
              <PhoneCall className="w-4 h-4" />
              <span>BOOK A 15-MINUTE FIT CALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {onOpenMeetTheTribe && (
              <button
                onClick={onOpenMeetTheTribe}
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-[#3A2E29] border border-[#D8D2D4] px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer group"
              >
                <span>MEET THE TRIBE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
