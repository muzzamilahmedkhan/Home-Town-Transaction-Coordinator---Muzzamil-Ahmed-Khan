import React from 'react';
import {
  ShieldCheck,
  Award,
  Heart,
  FileCheck2,
  Calendar,
  Check,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  Building2,
  Star,
  Layers,
  Scale
} from 'lucide-react';
import { FOUNDER_IMAGE, MEET_MICHELLE_IMAGE, PHONE_NUMBER, EMAIL_ADDRESS } from '../data/content';

interface Props {
  onBookCall: () => void;
  onSubmitDeal: () => void;
  onGoHome: () => void;
  onOpenHowItWorks: () => void;
  onOpenWhyHtc: () => void;
  onOpenPricing: () => void;
  onOpenTransactionCoordination: () => void;
  onOpenListingCoordination: () => void;
}

export const AboutMichellePage: React.FC<Props> = ({
  onBookCall,
  onSubmitDeal,
  onGoHome,
  onOpenHowItWorks,
  onOpenWhyHtc,
  onOpenPricing,
  onOpenTransactionCoordination,
  onOpenListingCoordination
}) => {
  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. HERO / SERVING REALTORS SINCE 1995 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#3A2E29] via-[#2A211D] to-[#3A2E29] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#D8D2D4]/20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D9BA3_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0D9BA3] tracking-widest uppercase mb-4">
            <button onClick={onGoHome} className="hover:text-white transition cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">About Michelle</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0D9BA3] tracking-wide">
                <Award className="w-3.5 h-3.5" />
                <span>SERVING REALTORS SINCE 1995 • 20,000+ CONTRACTS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-serif">
                Protect the Agent. Protect the Brokerage. <br />
                <span className="text-[#0D9BA3]">Protect the Client.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                Hello friend, I’m <strong>Michelle Martinez</strong> — mother, wife, community advocate, and the paperwork-obsessed founder behind Hometown Transaction Coordinators. I’ve been serving Florida real estate professionals since 1995, long before "transaction coordination" was an industry buzzword.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onBookCall}
                  className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide transition shadow-xl hover:shadow-[#FE7311]/25 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Work With HTC</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                <button
                  onClick={onOpenPricing}
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer backdrop-blur-sm"
                >
                  <span>Explore Transparent Plans</span>
                </button>
              </div>
            </div>

            {/* Founder Hero Portrait */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#0D9BA3] to-[#FE7311] rounded-3xl blur-lg opacity-30" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#3A2E29]">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Michelle Martinez - Founder of Hometown Transaction Coordinators"
                    className="w-full h-auto object-cover object-center aspect-[4/5]"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#3A2E29] via-[#3A2E29]/80 to-transparent p-6 text-white">
                    <h3 className="text-xl font-bold font-serif">Michelle Martinez</h3>
                    <p className="text-xs text-[#0D9BA3] font-semibold tracking-wider uppercase mt-0.5">
                      Founder & Lead Transaction Coordinator
                    </p>
                    <p className="text-[11px] text-slate-300 mt-2">
                      Serving Florida Realtors® with precision, defensible compliance, and heart since 1995.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HTC'S 2018 BEGINNING & EIGHT-YEAR REBUILD STORY */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Origins & Tenacity</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              HTC’s 2018 Beginning and the Eight-Year Rebuild
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              In 2018, after decades of hands-on brokerage administration, title liaison work, and managing thousands of complex Florida files, Hometown Transaction Coordinators was formally founded with one uncompromising mission: <strong>deliver an institutional standard of care for independent Realtors.</strong>
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Over the last eight years, our systems were forged through extreme market cycles — from hyper-speed shifting markets and evolving DBPR regulations to the 2024–2026 Florida Realtors® FAR/BAR structural revisions.
            </p>

            <div className="p-5 bg-white rounded-2xl border border-[#D8D2D4] shadow-sm space-y-2">
              <span className="text-xs font-bold text-[#FE7311] uppercase tracking-wider block">
                The Battle-Tested Mindset
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                "I survived life, rebuilt it from the ground up, and channel that same relentless resilience into protecting our agents. When you hand over a file, you are getting an operator who treats your license, your reputation, and your commission as if it were her own."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#3A2E29]">1995 Roots</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Started in the trenches of real estate contracts before modern cloud transaction management portals existed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FE7311]/10 text-[#FE7311] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#3A2E29]">2018 Formal Launch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Built Hometown TC into a dedicated boutique support agency with proprietary compliance systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#3A2E29]/10 text-[#3A2E29] flex items-center justify-center font-bold">
                <Scale className="w-5 h-5 text-[#0D9BA3]" />
              </div>
              <h3 className="font-bold text-base text-[#3A2E29]">20,000+ Files Handled</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep empirical pattern recognition across luxury estates, condos, short sales, probate, and FIRPTA deals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#3A2E29]">Statewide Florida Reach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active in Broward, Miami-Dade, Palm Beach, St. Lucie, Martin, Orange, Hillsborough, and beyond.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHY DEFENSIBLE FILES MATTER */}
      <section className="py-20 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Compliance Without Compromise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              Why Defensible Files Matter
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In Florida real estate, your reputation and your license are on the line on every contract. We don't just "push paper" — we create defensible audit trails.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-[#EEEAEB] rounded-2xl p-7 border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0D9BA3] text-white flex items-center justify-center font-bold">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Protecting Your Brokerage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Broker audits from DBPR and Florida Realtors® demand complete, chronological, uncorrupted records. We assemble fully compliant files with thorough tracking of initials, riders, and deposit verification.
              </p>
            </div>

            <div className="bg-[#EEEAEB] rounded-2xl p-7 border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FE7311] text-white flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Audit & Dispute Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If an escrow dispute, repair addendum conflict, or financing cancellation occurs, you have an thorough
              </p>
            </div>

            <div className="bg-[#EEEAEB] rounded-2xl p-7 border border-[#D8D2D4] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#3A2E29] text-white flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6 text-[#0D9BA3]" />
              </div>
              <h3 className="text-lg font-bold text-[#3A2E29]">Sleep Better at Night</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                "When the file is flawless, everyone sleeps better at night." You can focus completely on lead generation, showing luxury properties, and negotiating for your buyers and sellers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. H.O.M.E. VALUES AND COMMUNITY COMMITMENT */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              <span>Core Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif leading-tight">
              The H.O.M.E. Values & Hometown Honors
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              HTC is rooted in values that transcend business transactions. We believe in high standards, radical empathy, and continuous community reinvestment.
            </p>

            <div className="p-6 bg-white rounded-3xl border border-[#D8D2D4] shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-[#FE7311] font-bold text-sm">
                <Heart className="w-4 h-4" />
                <span>The Hometown Honors Program</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Through our <strong>Hometown Honors</strong> initiative, a percentage of every closed transaction fee goes directly back into local South Florida community outreach, food drives, and family support programs.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-2">
              <div className="text-2xl font-black text-[#0D9BA3] font-serif">H</div>
              <h3 className="font-bold text-sm text-[#3A2E29]">Honor the Agreement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We respect the solemn nature of contracts. Every clause, deposit timeline, and contingency is guarded with rigor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-2">
              <div className="text-2xl font-black text-[#FE7311] font-serif">O</div>
              <h3 className="font-bold text-sm text-[#3A2E29]">Organize the File</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structure breeds calmness. We establish a single source of truth master calendar for all transaction stakeholders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-2">
              <div className="text-2xl font-black text-[#3A2E29] font-serif">M</div>
              <h3 className="font-bold text-sm text-[#3A2E29]">Monitor the Milestones</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proactive foresight eliminates last-minute closing drama. We stay three steps ahead of appraisal and loan commitment dates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8D2D4] shadow-sm space-y-2">
              <div className="text-2xl font-black text-[#0D9BA3] font-serif">E</div>
              <h3 className="font-bold text-sm text-[#3A2E29]">Ease the Close</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A seamless, celebratory finish. Final CD review, prompt CDA delivery to title, and complete brokerage archiving.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. MICHELLE’S PROMISE TO THE AGENT */}
      <section className="py-20 bg-[#3A2E29] text-white border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center space-x-2 bg-white/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Founder's Direct Commitment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif leading-tight">
            "My Promise to Every Florida Agent We Serve"
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
            <p>
              "You’re not just hiring support. You’re hiring someone who treats your business like her own. When you grow, I grow. When you win, your clients win."
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              "We take 20–40 administrative hours off your plate on every file so you can stay in front of buyers and sellers. We don't just push paper — we protect your deals and your reputation. That’s it. No more."
            </p>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-[#0D9BA3]" />
              <span>Tailored to Your Workflow</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-[#0D9BA3]" />
              <span>Human Care + Modern Systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-[#0D9BA3]" />
              <span>Florida Disclosure Tracking</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PROFESSIONAL PHOTOGRAPHY & WORK WITH HTC CTA */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D8D2D4] bg-[#F7F5F5] w-full max-w-md">
                <img
                  src="https://i.pinimg.com/736x/81/7c/ad/817cadd87957f8329e8ee56746fe85d2.jpg"
                  alt="Michelle Martinez - Founder of Hometown Transaction Coordinators"
                  className="w-full h-auto object-contain block mx-auto"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Connect</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#3A2E29] font-serif">
                Ready for a calm, organized closing experience?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you have an executed FAR/BAR contract ready for immediate onboarding or simply want to explore how our per-file support elevates your client experience, we invite you to start with a 15-minute fit call.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onBookCall}
                  className="inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Work With HTC</span>
                </button>
                <button
                  onClick={onSubmitDeal}
                  className="inline-flex items-center justify-center space-x-2 bg-[#0D9BA3] hover:bg-[#0b868d] text-white px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md cursor-pointer"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Submit a Transaction</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 pt-1">
                Direct Line: <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="font-bold text-[#3A2E29] hover:underline">{PHONE_NUMBER}</a> • <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:underline">{EMAIL_ADDRESS}</a>
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
