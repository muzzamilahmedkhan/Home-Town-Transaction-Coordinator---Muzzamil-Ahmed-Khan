import React from 'react';
import { ArrowLeft, Calendar, UserCheck, ShieldCheck, Info, CheckCircle2 } from 'lucide-react';
import { DEMO_BLOG_POSTS } from '../data/blog';

interface Props {
  slug: string;
  onBackToBlog: () => void;
  onBookCall: () => void;
}

export const BlogPostPage: React.FC<Props> = ({ slug, onBackToBlog, onBookCall }) => {
  // Find post or fallback to first
  const post = DEMO_BLOG_POSTS.find(p => p.slug === slug) || DEMO_BLOG_POSTS[0];

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. Header / Hero */}
      <section className="bg-[#3A2E29] text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <button 
            onClick={onBackToBlog}
            className="flex items-center space-x-2 text-xs font-bold text-[#0D9BA3] uppercase tracking-wider hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Resources</span>
          </button>

          <div className="space-y-4 pt-4">
            <div className="inline-flex items-center bg-white/10 px-3 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
              {post.category}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif leading-tight">
              {post.title}
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 text-[11px] font-semibold text-slate-300 border-t border-white/20">
            <div className="flex items-center space-x-1.5">
              <UserCheck className="w-4 h-4 text-[#0D9BA3]" />
              <span>Written by: {post.author}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0D9BA3]" />
              <span>Reviewed by: {post.reviewer}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-[#0D9BA3]" />
              <span>Updated: {post.dateUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Article Body (Demonstration Content) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D8D2D4] shadow-xl">
          
          <div className="prose prose-slate max-w-none">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto rounded-2xl mb-10 border border-[#D8D2D4]"
            />

            <h2 className="text-2xl font-bold text-[#3A2E29] font-serif mb-4">Understanding the "AS IS" Inspection Nuances</h2>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              In Florida real estate, the FAR/BAR "AS IS" Contract is the most commonly utilized form. However, its 15-day default inspection period (Standard F) often causes friction when agents miscalculate the timeline or fail to issue written repair requests effectively.
            </p>

            <div className="bg-[#EEEAEB] border-l-4 border-[#FE7311] p-6 rounded-r-xl mb-8">
              <h4 className="text-sm font-bold text-[#3A2E29] uppercase tracking-wider mb-2">Key Takeaway</h4>
              <p className="text-xs text-slate-700">
                If the buyer does not cancel in writing prior to the expiration of the inspection period, they are contractually obligated to proceed, and the earnest money deposit is at risk if they fail to close.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#3A2E29] mb-4">Common Agent Pitfalls</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>Counting Days Incorrectly:</strong> Day 1 is the day *after* the effective date. If the period ends on a weekend or national holiday, it rolls to the next business day (unless specifically amended).</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700"><strong>Verbal Agreements:</strong> Texts and phone calls discussing repairs do not extend the inspection period. Only an executed Extension Addendum protects the buyer.</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#3A2E29] mb-4">HTC's Standard Operating Procedure</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              When HTC manages a contract, our timeline tracking immediately locks in the inspection expiration date. We send automated reminders to the buyer's agent on Day 3, Day 7, and 48 hours prior to expiration, ensuring no deadline is accidentally missed while waiting on roofing or plumbing reports.
            </p>

          </div>

          {/* 3. Source and Disclaimer Pattern */}
          <div className="mt-12 pt-8 border-t border-[#D8D2D4] bg-[#EEEAEB]/50 p-6 rounded-2xl">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-[#0D9BA3] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#3A2E29] uppercase tracking-wider mb-1">Educational Disclaimer</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  The content provided on this blog is for informational and educational purposes only and does not constitute legal, financial, or tax advice. While HTC strives to ensure accuracy based on current Florida Realtors / Florida Bar (FAR/BAR) standards as of the publication date, real estate laws and contract forms are subject to change. Always consult with your managing broker or a licensed Florida real estate attorney for legal interpretation of contracts.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Footer CTA */}
      <section className="py-16 bg-[#3A2E29] text-center border-t border-[#0D9BA3]/30">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-serif font-extrabold text-white">Need a Second Set of Eyes on Your Contracts?</h2>
          <button
            onClick={onBookCall}
            className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer inline-block"
          >
            Book a Fit Call with HTC
          </button>
        </div>
      </section>

    </div>
  );
};
