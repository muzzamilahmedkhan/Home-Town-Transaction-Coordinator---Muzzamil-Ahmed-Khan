import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  FileText,
  Award,
  Users,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Star,
  Sparkles,
  BookOpen,
  MessageSquare,
  Building,
  HelpCircle,
  Mail,
  GraduationCap,
  ArrowLeft,
  DollarSign
} from 'lucide-react';
import { EMAIL_ADDRESS, PHONE_NUMBER } from '../data/content';

interface Props {
  onGoHome: () => void;
  onBookCall: () => void;
}

export const TcWorkshopPage: React.FC<Props> = ({ onGoHome, onBookCall }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I need a real estate license to take this course or work as a TC in Florida?',
      a: "No license required. Transaction coordination is an administrative role in Florida, and unlicensed professionals can perform TC duties under the state's unlicensed assistant guidelines. The course covers exactly what is and isn't allowable in Florida for both unlicensed TCs and licensed agents performing coordination duties — so you'll know precisely where your boundaries are and how to operate with confidence."
    },
    {
      q: 'How long do I have access to the course materials?',
      a: "Lifetime. When you enroll, you get access to the course hub — a Google Sheet you copy directly to your own Google Drive. The video tutorials are yours to keep as well. As long as YouTube exists, your training videos aren't going anywhere. Pause, rewind, rewatch a module before a tricky condo closing — it's yours to use however you need it, for as long as you need it."
    },
    {
      q: 'What exactly is Coaches Corner and how does it work?',
      a: "Coaches Corner is 14 calendar days of direct access to Michelle, starting from your purchase date. Email your questions as you work through the material and Michelle will respond with a personalized video walkthrough — not a canned reply. Response time is within 2 hours during business hours (Mon–Fri, 9 AM–5 PM EST), with a 4-hour window on busy days. It's real support from the person who built the course."
    },
    {
      q: 'Can I really go at my own pace?',
      a: "Completely. There are no live sessions to attend, no deadlines, and no pressure. Binge it over a weekend or work through it module by module between transactions — it's up to you. The self-paced format also means you can go back and rewatch anything as your real-world experience grows. Many students find the condo and HOA module hits differently the second time around once they've actually worked one of those files."
    },
    {
      q: "I'm not based in Florida — is this still worth it?",
      a: "Several students have enrolled from Virginia, New Jersey, and other states specifically to understand Florida contracts before working with Florida-based agents or relocating clients. The FAR/BAR framework and compliance approach taught in this course is Florida-specific, but the risk management mindset, communication systems, and workflow structure translate to any market. That said, this course is built for Florida — if you're working Florida files, it's exactly what you need."
    },
    {
      q: "I've been doing TC work for a while. Is this too basic for me?",
      a: "Probably not — and one of our students found that out the hard way. She had been working as a TC for a year before enrolling and described finding significant gaps she didn't know she had, particularly around condo and HOA legislation specific to Florida. If you've never had formal training on FAR/BAR compliance, FREC guidelines, or the unlicensed assistant framework in Florida, this course will fill in things you didn't know were missing."
    },
    {
      q: 'What is your refund policy?',
      a: "All sales are non-refundable. This is a digital educational program — once you have access to the course hub, the checklists, the templates, and the videos, the material has been delivered. What we do guarantee: if any template or form is outdated, we'll update it and send you a corrected version within 48 hours. And Coaches Corner gives you real support while you're working through it so you're never stuck."
    }
  ];

  const ENROLLMENT_PAYMENT_URL = 'https://secure.usaepay.com/pay/0nkt6v4kqyg0px983/ywd1OwM8';

  const handleEnrollClick = () => {
    window.open(ENROLLMENT_PAYMENT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#EEEAEB] min-h-screen text-[#3A2E29]">
      
      {/* Top Breadcrumb Nav */}
      <div className="bg-[#3A2E29] text-white py-3 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <button
            onClick={onGoHome}
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Hometown TC</span>
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Questions?</span>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-[#0D9BA3] hover:underline font-medium">
              {EMAIL_ADDRESS}
            </a>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#3A2E29] via-[#332824] to-[#2B211E] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D9BA3]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FE7311]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/20 text-[#0D9BA3] border border-[#0D9BA3]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Florida-Specific · FAR/BAR Focus · Self-Paced</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif text-white max-w-4xl mx-auto leading-tight">
            The TC who knows the contract protects everyone at the table.
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Master Florida transaction coordination — the documents, the deadlines, the compliance framework — so you can monitor, track, and report with confidence on every file.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ENROLLMENT_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition shadow-xl cursor-pointer group"
            >
              <span>Get Instant Access — $297</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onBookCall}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl font-bold text-sm tracking-wide transition cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#0D9BA3]" />
              <span>Questions First? Book a Call</span>
            </button>
          </div>

          {/* Key Value Pill Badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto text-xs text-slate-200">
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center text-center">
              <Clock className="w-3.5 h-3.5 text-[#0D9BA3] mr-1.5 flex-shrink-0" />
              <span>8.5 Hours of Training</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center text-center">
              <FileText className="w-3.5 h-3.5 text-[#0D9BA3] mr-1.5 flex-shrink-0" />
              <span>FAR/BAR Contracts In Depth</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center text-center">
              <Building className="w-3.5 h-3.5 text-[#FE7311] mr-1.5 flex-shrink-0" />
              <span>Condo & HOA Bonus Module</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center text-center">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9BA3] mr-1.5 flex-shrink-0" />
              <span>Templates You Use Day One</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-center text-center col-span-2 sm:col-span-1">
              <Award className="w-3.5 h-3.5 text-[#FE7311] mr-1.5 flex-shrink-0" />
              <span>30 Years of Experience</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. IS THIS FOR YOU? */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Is this for you?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
            Built for Florida. Built for real work.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold flex-shrink-0 mt-1">
              <Check className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Aspiring or active Florida TCs who want real command of FAR/BAR contracts, compliance requirements, and deadline management.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold flex-shrink-0 mt-1">
              <Check className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Professionals moving into a structured real estate support role — without holding a sales license.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold flex-shrink-0 mt-1">
              <Check className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Admin and operations professionals ready to build a career around process, compliance, and precision.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#0D9BA3]/10 text-[#0D9BA3] flex items-center justify-center font-bold flex-shrink-0 mt-1">
              <Check className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Working TCs who want to sharpen their risk management approach and close gaps in their current workflow.
            </p>
          </div>

        </div>
      </section>

      {/* 3. THE REAL VALUE (WHAT CHANGES) */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The real value</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              What changes when you take this course
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-3">
              <div className="text-3xl">🛡️</div>
              <h3 className="font-bold text-lg text-[#3A2E29]">Protect the Broker</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Understand Florida compliance and FREC guidelines so you can flag exposure before it becomes a problem — not after the fact.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-3">
              <div className="text-3xl">📋</div>
              <h3 className="font-bold text-lg text-[#3A2E29]">Support the Agent</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keep agents focused on clients and production while you own the file — every deadline tracked, every document accounted for.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-3">
              <div className="text-3xl">🤝</div>
              <h3 className="font-bold text-lg text-[#3A2E29]">Serve the Client</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A clean, organized transaction is the best client experience. You create that by knowing the contract cold and managing every step with precision.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-3">
              <div className="text-3xl">⚠️</div>
              <h3 className="font-bold text-lg text-[#3A2E29]">Manage Risk Proactively</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Approach every file through a risk management lens — the right documentation, the right questions, the right checklists at the right time.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CURRICULUM */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-sm space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              What you'll learn
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#EEEAEB] border border-[#D8D2D4]">
              <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Florida TC responsibilities and compliance protocols</strong> within FREC guidelines — what you can do, what you can't, and why it matters.
              </span>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#EEEAEB] border border-[#D8D2D4]">
              <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>FAR/BAR documents in depth:</strong> contracts, addenda, required forms, and common errors that create liability.
              </span>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#EEEAEB] border border-[#D8D2D4]">
              <CheckCircle2 className="w-5 h-5 text-[#FE7311] mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Condo, co-op, and HOA transactions</strong> — with a deep dive into Florida-specific legislation most TCs have never heard explained this clearly.
              </span>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#EEEAEB] border border-[#D8D2D4]">
              <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Systems for tracking critical dates,</strong> managing documents, and reducing costly errors across every file type.
              </span>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#EEEAEB] border border-[#D8D2D4]">
              <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] mt-0.5 flex-shrink-0" />
              <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Professional communication</strong> with brokers, agents, clients, lenders, and escrow — what to say, when, and how to document it.
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#0D9BA3]/5 rounded-xl border border-[#0D9BA3]/20 max-w-4xl mx-auto text-xs text-slate-600 text-center">
            <strong>Note:</strong> Florida uses multiple contract types. This workshop emphasizes FAR/BAR forms and related workflows as its primary focus.
          </div>

        </div>
      </section>

      {/* 5. WHAT'S INCLUDED */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>What's included</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
            Everything in the program
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* 01 */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="text-2xl font-black text-[#0D9BA3]">01</div>
            <h3 className="font-bold text-lg text-[#3A2E29]">8.5 Hours of Core Training</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Florida-specific, step-by-step — self-paced so you learn on your schedule and revisit anything anytime.
            </p>
          </div>

          {/* 02 */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="text-2xl font-black text-[#0D9BA3]">02</div>
            <h3 className="font-bold text-lg text-[#3A2E29]">Florida TC Resource Kit</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Checklists, forms, email templates, and cheat sheets ready to use on your very next transaction.
            </p>
          </div>

          {/* 03 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#FE7311] shadow-md space-y-3 relative">
            <span className="absolute -top-3 right-4 bg-[#FE7311] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
              Bonus Deep Dive
            </span>
            <div className="text-2xl font-black text-[#FE7311]">03</div>
            <h3 className="font-bold text-lg text-[#3A2E29]">Bonus: Condo & HOA Deep Dive</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A full 2-hour module on the transaction types that trip up most Florida TCs — with tailored timelines and checklists.
            </p>
          </div>

          {/* 04 */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm space-y-3">
            <div className="text-2xl font-black text-[#0D9BA3]">04</div>
            <h3 className="font-bold text-lg text-[#3A2E29]">Workflow Setup Guide</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Build consistent, repeatable closings from day one using a proven process framework.
            </p>
          </div>

          {/* 05 */}
          <div className="bg-white rounded-2xl p-6 border border-[#D8D2D4] shadow-sm space-y-3 md:col-span-2">
            <div className="text-2xl font-black text-[#0D9BA3]">05</div>
            <h3 className="font-bold text-lg text-[#3A2E29]">14 Days of Coaches Corner</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Live Q&A access with Michelle while you put the material into practice — real questions, personalized video walkthroughs, and real answers.
            </p>
          </div>

        </div>
      </section>

      {/* 6. STUDENT RESULTS */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-[#FE7311]" />
              <span>Student results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              What students are saying
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Testimonial 1 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex text-[#FE7311]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FE7311]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "This course completely prepared me for Florida transactions. Michelle's knowledge of FAR/BAR contracts is the real deal — and her Coaches Corner was invaluable for understanding exactly how Florida differs from my home state. Honestly one of the best professional courses I've ever taken."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-2 border-t border-[#D8D2D4]">
                <div className="w-9 h-9 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
                  GC
                </div>
                <div>
                  <div className="font-bold text-xs text-[#3A2E29]">Gio C.</div>
                  <div className="text-[11px] text-slate-500">Licensed TC · New Jersey</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex text-[#FE7311]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FE7311]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "The templates and cheat sheets alone are worth it — it's an incredible volume of usable material. Michelle teaches direct and without fluff, answers every nuance, and responds fast. You can tell she knows this inside and out."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-2 border-t border-[#D8D2D4]">
                <div className="w-9 h-9 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
                  GB
                </div>
                <div>
                  <div className="font-bold text-xs text-[#3A2E29]">Gaby B.</div>
                  <div className="text-[11px] text-slate-500">TC · Virginia</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex text-[#FE7311]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FE7311]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "I came from wholesale and had no idea how much I was missing on the retail side. Being able to revisit the material as I prepare to enter the workforce has been huge. Really great class — highly recommend."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-2 border-t border-[#D8D2D4]">
                <div className="w-9 h-9 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
                  CB
                </div>
                <div>
                  <div className="font-bold text-xs text-[#3A2E29]">Chris B.</div>
                  <div className="text-[11px] text-slate-500">Aspiring TC · Florida</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-[#EEEAEB] rounded-2xl p-6 border border-[#D8D2D4] space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex text-[#FE7311]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FE7311]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "I had been in this role for a year and thought I knew enough. This course showed me exactly where my gaps were. The checklists are gold. The HOA and condo module was a revelation — Michelle went into Florida legislation my own Realtor had never mentioned. 10/10."
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-2 border-t border-[#D8D2D4]">
                <div className="w-9 h-9 rounded-full bg-[#0D9BA3] text-white flex items-center justify-center font-bold text-xs">
                  JM
                </div>
                <div>
                  <div className="font-bold text-xs text-[#3A2E29]">Jennifer M.</div>
                  <div className="text-[11px] text-slate-500">VA · Miami</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. ENROLL TODAY (PRICING & ENROLLMENT CARD) */}
      <section id="enroll" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#FE7311] shadow-2xl space-y-8 text-center relative overflow-hidden">
          
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-[#FE7311]/10 text-[#FE7311] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Enroll today</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              One program. Instant access.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Pre-Recorded Workshop
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-5xl sm:text-6xl font-black text-[#FE7311]">$297</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">
              One-time payment · Start immediately · Self-paced
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-3 text-left">
            <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
              <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
              <span>8.5 hours of Florida-specific TC training</span>
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
              <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
              <span>Complete Florida TC Resource Kit</span>
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
              <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
              <span>Bonus 2-hour condo & HOA deep dive</span>
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
              <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
              <span>Workflow setup guide</span>
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-700">
              <Check className="w-4 h-4 text-[#0D9BA3] flex-shrink-0" />
              <span>14 days of Coaches Corner Q&A access</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={ENROLLMENT_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FE7311] hover:bg-[#e06209] text-white px-10 py-5 rounded-xl font-bold text-sm uppercase tracking-wider transition shadow-xl cursor-pointer group"
            >
              <span>Get Instant Access — $297</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Guarantee */}
          <div className="pt-4 border-t border-[#D8D2D4] text-xs text-slate-600 space-y-2">
            <div className="font-bold text-[#3A2E29] flex items-center justify-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
              <span>Our Guarantees</span>
            </div>
            <p className="max-w-xl mx-auto leading-relaxed">
              Walk away with tools you can use on your next file — or tell us and we'll make it right. Any outdated template is updated and resent within 48 hours.
            </p>
            <p className="text-slate-500">
              Questions first?{' '}
              <a href={`mailto:${EMAIL_ADDRESS}`} className="text-[#0D9BA3] underline font-medium">
                {EMAIL_ADDRESS}
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* 8. YOUR INSTRUCTOR */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#D8D2D4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Your instructor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
              Taught by someone who has worked every side of the table.
            </h2>
          </div>

          <div className="bg-[#EEEAEB] rounded-3xl p-8 sm:p-10 border border-[#D8D2D4] space-y-6">
            <div>
              <h3 className="text-2xl font-black text-[#3A2E29] font-serif">
                Michelle Martinez
              </h3>
              <div className="text-xs font-bold text-[#0D9BA3] uppercase tracking-wider">
                Founder, Hometown Transaction Coordinators
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Since 1995, Michelle has processed over 15,000 transactions across Miami-Dade, Broward, and Palm Beach counties — and she brings every one of those files into the classroom. With a background in loan processing and three decades of hands-on Florida real estate experience, she built HTC around one core belief: <strong>transaction coordination done right is risk management, not just paperwork.</strong>
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              She is a compliance authority for the agents and brokers she serves — and that's exactly the lens she teaches through. Direct, comprehensive, no fluff. Questions before enrolling?{' '}
              <a href={`mailto:${EMAIL_ADDRESS}`} className="text-[#0D9BA3] font-bold hover:underline">
                {EMAIL_ADDRESS}
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* 9. COMMON QUESTIONS (BEFORE YOU ENROLL) */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0D9BA3]/10 text-[#0D9BA3] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A2E29] font-serif">
            Before you enroll
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#D8D2D4] overflow-hidden transition shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-sm sm:text-base text-[#3A2E29]">
                    {index + 1}. {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EEEAEB] flex items-center justify-center flex-shrink-0 text-slate-500">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#D8D2D4] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* 10. DISCLOSURE & FOOTER NOTE */}
      <section className="py-10 bg-[#3A2E29] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
            Disclosure
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Hometown Transaction Coordinators' training programs are for educational purposes only and do not guarantee employment, income, or job placement. Any references to earning capacity or hiring potential reflect general industry trends and should not be interpreted as a promise or guarantee. Your results depend on your skills, effort, and market conditions.
          </p>
          <div className="pt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} Hometown Transaction Coordinators. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
};
