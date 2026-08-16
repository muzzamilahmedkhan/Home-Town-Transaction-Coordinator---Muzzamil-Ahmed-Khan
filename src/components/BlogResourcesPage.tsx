import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Clock, CheckCircle2, ArrowRight, UserCheck, Calendar } from 'lucide-react';
import { DEMO_BLOG_POSTS, BLOG_CATEGORIES } from '../data/blog';

interface Props {
  onGoHome: () => void;
  onOpenPost: (slug: string) => void;
  onBookCall: () => void;
}

export const BlogResourcesPage: React.FC<Props> = ({
  onGoHome,
  onOpenPost,
  onBookCall
}) => {
  const [activeCategory, setActiveCategory] = useState('All Resources');

  const featuredPost = DEMO_BLOG_POSTS.find(p => p.featured) || DEMO_BLOG_POSTS[0];
  
  const filteredPosts = DEMO_BLOG_POSTS.filter(p => {
    if (activeCategory === 'All Resources') return !p.featured; // hide featured from grid
    return p.category === activeCategory && !p.featured;
  });

  return (
    <div className="bg-[#EEEAEB] text-[#3A2E29] min-h-screen">
      
      {/* 1. SEO / AEO Header Section */}
      <section className="bg-[#3A2E29] text-white pt-28 pb-16 border-b border-[#0D9BA3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center space-x-1.5 bg-[#0D9BA3]/20 border border-[#0D9BA3]/40 px-3 py-1 rounded-full text-xs font-bold text-[#0D9BA3] uppercase tracking-wider mx-auto">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Florida Transaction Coordination Blog</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif tracking-tight max-w-4xl mx-auto leading-tight">
            Realtor Contract-to-Close Resources
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Expert-led, practical guidance rooted in real files, current Florida forms, and defensible operating experience.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* 2. Category Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {BLOG_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-[#0D9BA3] text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-[#D8D2D4] hover:border-[#0D9BA3] hover:text-[#0D9BA3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Featured Resource */}
        {activeCategory === 'All Resources' && (
          <div className="bg-white rounded-3xl border border-[#D8D2D4] shadow-xl overflow-hidden flex flex-col md:flex-row group">
            <div className="md:w-1/2 overflow-hidden relative">
              <div className="absolute top-4 left-4 z-10 bg-[#FE7311] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-md">
                Featured Resource
              </div>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover min-h-[300px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center space-y-5">
              <div className="flex items-center space-x-2 text-[10px] font-bold text-[#0D9BA3] uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{featuredPost.category}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif leading-snug">
                {featuredPost.title}
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center flex-wrap gap-4 pt-4 border-t border-[#D8D2D4]/60 text-xs font-semibold text-slate-500">
                <div className="flex items-center space-x-1.5">
                  <UserCheck className="w-4 h-4 text-[#0D9BA3]" />
                  <span>By {featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-[#0D9BA3]" />
                  <span>Updated: {featuredPost.dateUpdated}</span>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => onOpenPost(featuredPost.slug)}
                  className="bg-[#3A2E29] hover:bg-black text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition flex items-center space-x-2 cursor-pointer inline-flex"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4. Article Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-extrabold text-[#3A2E29] font-serif">
              {activeCategory === 'All Resources' ? 'Latest Publications' : `${activeCategory} Resources`}
            </h3>
            <div className="flex-grow h-px bg-[#D8D2D4] ml-4"></div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#D8D2D4]">
              <p className="text-slate-500 font-medium">No resources found in this category yet.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-2xl border border-[#D8D2D4] shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold text-[#0D9BA3] uppercase tracking-wider rounded-md">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <h4 className="text-lg font-extrabold text-[#3A2E29] font-serif leading-snug group-hover:text-[#0D9BA3] transition-colors">
                      <button onClick={() => onOpenPost(post.slug)} className="text-left cursor-pointer">
                        {post.title}
                      </button>
                    </h4>
                    
                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-4 border-t border-[#D8D2D4]/60 space-y-2 text-[11px] font-medium text-slate-500">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center space-x-1.5"><UserCheck className="w-3.5 h-3.5 text-[#0D9BA3]" /> <span>{post.author}</span></span>
                        <span className="flex items-center space-x-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> <span>{post.readTime}</span></span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-slate-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0D9BA3]" />
                        <span>Reviewed by: {post.reviewer}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* 5. CTA Section */}
      <section className="py-20 bg-[#EEEAEB] border-t border-[#D8D2D4]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E29] font-serif">
            Want to stop reading and start delegating?
          </h2>
          <p className="text-sm text-slate-600">
            Let our experienced transaction team handle the compliance, timelines, and paperwork so you can focus on building relationships.
          </p>
          <button
            onClick={onBookCall}
            className="bg-[#FE7311] hover:bg-[#e05f03] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl transition inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Book Your Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
