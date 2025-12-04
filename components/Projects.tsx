
import React from 'react';
import Section from './Section';
import { PROJECTS, EVENTS } from '../constants';
import { Globe, ArrowRight, Award, FolderGit2, AlertCircle, CheckCircle2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects: React.FC = () => {
  // Duplicate events for seamless infinite scroll
  const scrollingEvents = [...EVENTS, ...EVENTS, ...EVENTS];

  return (
    <Section id="works" className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <ScrollReveal>
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
             <FolderGit2 size={14} />
             Portfolio
           </div>
           <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
             Impact & Case Studies
           </h2>
           <p className="text-xl text-slate-600 leading-relaxed font-light">
             Explore the innovative SaaS solutions and major ecosystem events I've led.
           </p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-32 relative z-10 max-w-6xl mx-auto px-6">
        {PROJECTS.map((project, idx) => (
          <ScrollReveal key={idx} delay={idx * 100}>
            {/* Problem / Solution Card Style */}
            <div className="relative group">
               {/* Connecting Line Visual (Desktop only) */}
               <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-0.5 bg-slate-300 z-0"></div>
               
               <div className="flex flex-col gap-6 relative z-10">
                  {/* Problem Card (Top) */}
                  <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 relative transition-transform duration-300 hover:scale-[1.02]">
                     <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">The Challenge</span>
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 shadow-sm">
                           <AlertCircle size={16} />
                        </div>
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        {project.description}
                     </p>
                     
                     {/* Connector Dot */}
                     <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-300 border-2 border-slate-50 z-10"></div>
                  </div>

                  {/* Arrow Down Visual */}
                  <div className="flex justify-center text-slate-300 animate-bounce md:animate-none">
                     <ArrowRight className="rotate-90 lg:hidden" />
                  </div>

                  {/* Solution/Impact Card (Bottom) */}
                  <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group-hover:-translate-y-2 transition-transform duration-500 ease-out relative">
                     {/* Connector Dot */}
                     <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-white z-10 shadow-sm"></div>
                     
                     <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                           <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                             {project.category}
                           </span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Strategic Solution</h4>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                           Implemented data-driven GTM strategies and optimized user journeys to drive measurable results.
                        </p>
                     </div>

                     {/* Impact Footer */}
                     {project.metrics && (
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between text-white relative overflow-hidden group-hover:from-blue-500 group-hover:to-indigo-500 transition-all">
                           {/* Shine effect */}
                           <div className="absolute top-0 -left-full w-1/2 h-full bg-white/20 skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite]"></div>
                           
                           <div className="flex items-center gap-3 relative z-10">
                              <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                                 <CheckCircle2 size={16} />
                              </div>
                              <span className="font-bold text-lg">{project.metrics}</span>
                           </div>
                           <span className="text-[10px] font-bold uppercase tracking-wider opacity-80 bg-white/10 px-2 py-1 rounded relative z-10">Result</span>
                        </div>
                     )}
                  </div>
               </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Ecosystem Events Section - Redesigned with Infinite Scroll */}
      <ScrollReveal delay={200}>
        <div className="w-full relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 mb-10">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="p-2.5 bg-slate-900 rounded-xl text-white shadow-lg shadow-slate-900/20">
                        <Globe size={22} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-extrabold text-slate-900">Ecosystem Events</h3>
                        <p className="text-sm font-medium text-slate-500">Global Brand Impact & Partnerships</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden mask-linear-fade">
                {/* Fade Masks */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

                <div className="flex gap-8 animate-scroll w-max hover:pause py-8 pl-4">
                    {scrollingEvents.map((event, i) => {
                        return (
                            <div key={i} className="group relative perspective-1000 w-[340px] sm:w-[380px] shrink-0">
                                {/* Card Container with Glossy Effect */}
                                <div className="
                                    bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                                    rounded-[2rem] p-6 h-[400px] flex flex-col justify-between overflow-hidden
                                    transition-all duration-500 ease-out 
                                    hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2
                                    cursor-default relative z-10
                                ">
                                    {/* Gradient Background Hint */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50/30 opacity-50 pointer-events-none"></div>
                                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl group-hover:bg-blue-200/40 transition-colors duration-500"></div>

                                    {/* Header: Logo & Date */}
                                    <div className="flex justify-between items-start mb-6 relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-2 group-hover:shadow-md transition-shadow">
                                            <img 
                                                src={event.logo || `https://ui-avatars.com/api/?name=${event.name}&background=f1f5f9&color=64748b`} 
                                                alt={`${event.name} logo`} 
                                                className="w-full h-full object-contain"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${event.name}&background=f1f5f9&color=64748b`;
                                                }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200/60 rounded-full px-3 py-1 bg-white/50 backdrop-blur-sm">
                                            {event.date?.split(' ')[0] || '2024'}
                                        </span>
                                    </div>

                                    {/* Content: Title & Details */}
                                    <div className="mb-6 relative z-10">
                                        <h3 className="text-xl font-extrabold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                            {event.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                                            {event.type}
                                        </p>
                                        
                                        <div className="space-y-2.5">
                                            <div className="flex items-center gap-2.5 text-sm text-slate-600">
                                                <div className="p-1 bg-slate-100 rounded-md text-slate-400">
                                                    <MapPin size={12} />
                                                </div>
                                                <span className="font-medium">{event.location || 'Global'}</span>
                                            </div>
                                            <div className="flex items-center gap-2.5 text-sm text-slate-600">
                                                <div className="p-1 bg-slate-100 rounded-md text-slate-400">
                                                    <Award size={12} />
                                                </div>
                                                <span className="font-medium">{event.role}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer: Impact Badge */}
                                    <div className="relative z-10 mt-auto pt-4">
                                        <div className="bg-slate-900 text-white rounded-xl p-3.5 flex items-center justify-between shadow-lg shadow-slate-900/10 group-hover:bg-blue-600 group-hover:shadow-blue-600/20 transition-all duration-300 transform group-hover:scale-[1.02]">
                                            <div>
                                                <p className="text-[9px] font-bold uppercase text-white/60 mb-0.5 tracking-wider">Impact</p>
                                                <p className="text-sm font-bold">{event.impact}</p>
                                            </div>
                                            <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-white/20 transition-colors">
                                                <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default Projects;
