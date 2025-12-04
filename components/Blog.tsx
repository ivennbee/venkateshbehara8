
import React from 'react';
import Section from './Section';
import { BLOG_POSTS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { BookOpen, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <Section id="blog" className="bg-slate-50 relative overflow-hidden py-24">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <BookOpen size={14} />
              Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Thoughts & Perspectives
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Deep dives into marketing strategy, product growth, and the future of SaaS.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col cursor-pointer">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
                    <Tag size={12} className="text-indigo-500" />
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-indigo-600 font-bold text-sm group/btn">
                    Read Article 
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Blog;
