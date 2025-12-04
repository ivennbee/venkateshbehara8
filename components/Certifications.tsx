import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { CERTIFICATIONS, AFFILIATIONS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { Award, ShieldCheck, BadgeCheck, Trophy, Star, Mic, Users, BookOpen } from 'lucide-react';

// Icons for Affiliations
const getAffiliationIcon = (type: string) => {
  switch (type) {
    case 'Speaker': return <Mic size={24} />;
    case 'Award': return <Trophy size={24} />;
    case 'Contributor': return <BookOpen size={24} />;
    case 'Member': return <Users size={24} />;
    default: return <Star size={24} />;
  }
};

// Robust Typewriter Component
const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15); // Slightly faster, smoother typing

    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span ref={containerRef} className="inline-block">
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="inline-block w-0.5 h-4 ml-0.5 bg-yellow-400 animate-pulse align-middle"></span>
      )}
    </span>
  );
};

// Certification Card
const CertCard: React.FC<{ cert: typeof CERTIFICATIONS[0] }> = ({ cert }) => {
  const isPremium = cert.level === 'Premium';
  const isGold = cert.level === 'Gold';

  return (
    <div className={`
      group relative bg-white rounded-2xl p-5 border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-default
      ease-[cubic-bezier(0.25,0.1,0.25,1)]
      ${isPremium ? 'border-purple-100 hover:border-purple-300' : isGold ? 'border-amber-100 hover:border-amber-300' : 'border-slate-100 hover:border-blue-200'}
    `}>
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl pointer-events-none"></div>
      
      {/* Badge/Level Indicator */}
      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12
        ${isPremium ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white' : 
          isGold ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' : 
          'bg-slate-100 text-slate-400'}
      `}>
        {isPremium ? <Star size={14} fill="currentColor" /> : isGold ? <Award size={14} /> : <ShieldCheck size={14} />}
      </div>

      <div className="flex items-start gap-4">
        {/* Logo Box */}
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 p-2 flex items-center justify-center shrink-0 group-hover:shadow-md transition-all duration-300">
          <img 
            src={cert.logo} 
            alt={cert.issuer} 
            className="w-full h-full object-contain"
            onError={(e) => {
               (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${cert.issuer}&background=f1f5f9&color=64748b`;
            }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-slate-900 text-sm leading-tight mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {cert.name}
          </h4>
          <p className="text-xs text-slate-500 font-medium">{cert.issuer}</p>
          
          {/* Skills/ID */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {cert.id && (
              <span className="text-[10px] bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded border border-slate-100">
                ID: {cert.id}
              </span>
            )}
            {cert.skills?.slice(0, 2).map((skill, i) => (
              <span key={i} className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  // Categories mapping
  const categories = [
    { id: 'AI & ML', title: 'Artificial Intelligence & ML', color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'Product', title: 'Product Management & Leadership', color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'Marketing', title: 'Digital Marketing & Analytics', color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'Tools', title: 'Creative Design & Tools', color: 'text-pink-600', bg: 'bg-pink-50' },
    { id: 'Specialized', title: 'Specialized Tech & Strategy', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  // Tripled list for infinite scroll seamless loop
  const scrollingAffiliations = [...AFFILIATIONS, ...AFFILIATIONS, ...AFFILIATIONS];

  return (
    <Section id="certifications" className="bg-slate-50 relative overflow-hidden py-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg">
              <BadgeCheck size={14} className="text-yellow-400" />
              Hall of Professional Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              45+ Industry-Leading Certifications
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              Comprehensive expertise backed by credential verification from top global technology companies.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 max-w-5xl mx-auto">
             {[
               { val: "45+", label: "Total Certifications", icon: ShieldCheck, color: "text-slate-900" },
               { val: "10", label: "AI & ML Expertise", icon: Star, color: "text-purple-600" },
               { val: "7", label: "Google Certified", icon: Award, color: "text-blue-600" },
               { val: "8", label: "Top MNC Partners", icon: Globe, color: "text-emerald-600" }
             ].map((stat, idx) => (
               <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
                  <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
                  <div className={`text-4xl font-extrabold mb-1 ${stat.color}`}>{stat.val}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
               </div>
             ))}
          </div>
        </ScrollReveal>

        {/* Categories Section */}
        <div className="space-y-16">
          {categories.map((cat, idx) => {
            const certs = CERTIFICATIONS.filter(c => c.category === cat.id);
            if (certs.length === 0) return null;

            return (
              <ScrollReveal key={cat.id} delay={idx * 100}>
                <div className="mb-8">
                   <div className="flex items-center gap-3 mb-8">
                      <div className={`w-1.5 h-8 rounded-full ${cat.color.replace('text', 'bg')}`}></div>
                      <h3 className={`text-2xl font-bold ${cat.color}`}>{cat.title}</h3>
                      <div className={`h-px flex-1 ${cat.bg} opacity-50`}></div>
                   </div>
                   
                   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {certs.map((cert, cIdx) => (
                        <CertCard key={cIdx} cert={cert} />
                      ))}
                   </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Affiliations & Recognition - Infinity Scroll Carousel */}
        <ScrollReveal delay={300}>
           <div className="mt-24 pt-16 border-t border-slate-200">
              <div className="text-center mb-12">
                 <h3 className="text-3xl font-bold text-slate-900">Professional Affiliations & Recognition</h3>
                 <p className="text-slate-500 mt-2">Industry leadership and contributions</p>
              </div>

              {/* Infinite Scroll Container */}
              <div className="relative w-full overflow-hidden mask-linear-fade">
                 {/* Fade Masks */}
                 <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                 <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

                 <div className="flex gap-8 animate-scroll w-max hover:pause py-8 pl-4">
                    {scrollingAffiliations.map((aff, idx) => (
                       <div 
                         key={idx} 
                         className="
                           relative w-[360px] shrink-0
                           rounded-3xl p-8 flex flex-col gap-6 
                           bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950
                           border border-white/10 shadow-2xl hover:shadow-blue-600/20
                           transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                           hover:-translate-y-2 hover:scale-[1.02]
                           overflow-hidden group cursor-default
                         "
                       >
                          {/* Texture Overlay */}
                          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-overlay"></div>
                          {/* Glossy Reflection */}
                          <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />

                          <div className="relative z-10 flex items-start justify-between">
                             <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 text-yellow-400 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                {getAffiliationIcon(aff.type)}
                             </div>
                             <div className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                                {aff.type}
                             </div>
                          </div>

                          <div className="relative z-10 flex-1">
                             <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-200 transition-colors">
                               {aff.organization}
                             </h4>
                             <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
                                {aff.role}
                             </p>
                             <div className="text-slate-300 font-light leading-relaxed text-sm h-[60px] overflow-hidden">
                                <TypewriterText text={aff.description} delay={300} />
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </ScrollReveal>

      </div>
    </Section>
  );
};

// Helper for local icon usage since Globe wasn't in props but used in stats
const Globe = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export default Certifications;