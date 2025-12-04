
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { BarChart3, TrendingUp, Users, Activity, Layers, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Hook for counting up numbers smoothly
const useCountUp = (end: number, duration: number = 2000, decimals: number = 1, prefix: string = '', suffix: string = '') => {
  const [count, setCount] = useState(0);
  const countRef = useRef<any>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutQuart)
      const ease = 1 - Math.pow(1 - progress, 4);
      
      setCount(end * ease);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  const formattedCount = count.toFixed(decimals);
  // Remove .0 if it's an integer and decimals was set to allow floats
  const display = formattedCount.endsWith('.0') && decimals > 0 && Number.isInteger(end) 
    ? count.toFixed(0) 
    : formattedCount;

  return { display: `${prefix}${display}${suffix}`, ref: countRef };
};

const About: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Animation hooks for stats
  const { display: growthDisplay, ref: growthRef } = useCountUp(3.5, 2500, 1, '', 'x');
  const { display: churnDisplay, ref: churnRef } = useCountUp(25, 2000, 0, '', '%');
  const { display: usersDisplay, ref: usersRef } = useCountUp(1.5, 2000, 1, '', 'K+');

  const phrases = [
    "Product Marketer & GTM Strategist",
    "Growth Engine Architect",
    "SaaS Scaling Specialist",
    "Demand Gen Leader"
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    
    const handleType = () => {
      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }
    };

    let typingSpeed = isDeleting ? 25 : 50;

    if (!isDeleting && displayText === currentPhrase) {
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex(prev => prev + 1);
      typingSpeed = 500;
    }

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <Section id="about" className="bg-slate-50 relative overflow-hidden">
       {/* Background Subtle Gradient */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-slate-50 -z-10"></div>
       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto mb-16 md:mb-24">
        <ScrollReveal>
          <div className="md:text-center max-w-4xl mx-auto">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 flex items-center md:justify-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600 inline-block"></span>
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
               Bridging Product Vision <br className="hidden md:block"/> & Market Success
            </h3>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              I'm a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block min-w-[320px] text-left">
                {displayText}
                <span className="animate-pulse text-slate-400 ml-1">|</span>
              </span> 
              <br className="hidden lg:block" />
              helping B2B SaaS companies scale from "product-market fit" to "growth engine".
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
        
        {/* Main "Impact First" Card - Spans 8 cols */}
        <ScrollReveal className="md:col-span-12 lg:col-span-8 h-full">
          <div className="relative bg-white/70 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-xl overflow-hidden h-full flex flex-col group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
             
             {/* Gradient Backgrounds */}
             <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-blue-50/80 to-transparent pointer-events-none"></div>
             
             <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6 md:mb-10">
                   <div className="flex items-center gap-4">
                      <div className="p-3.5 bg-slate-900 text-white rounded-2xl shadow-lg shadow-slate-900/20">
                         <BarChart3 size={24} strokeWidth={2} />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900 text-xl tracking-tight">Impact First</h4>
                         <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">Results-Driven</p>
                      </div>
                   </div>
                   {/* Decorative Year Pill */}
                   <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-100 shadow-sm text-xs font-bold text-slate-500">
                      <span>2024</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>2025</span>
                   </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col md:flex-row gap-10 items-center md:items-start flex-grow">
                   {/* Text Content */}
                   <div className="flex-1 space-y-5">
                      <h4 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                        Data over opinion.
                      </h4>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        I've helped companies achieve significant growth milestones through rigorous testing. I don't just run campaigns; I build sustainable revenue pipelines.
                      </p>
                      
                      {/* Tags Bar - Avoiding Overlap */}
                      <div className="pt-4 flex flex-wrap gap-2">
                         {['Strategy', 'Execution', 'Scale'].map((tag) => (
                            <div key={tag} className="px-4 py-1.5 rounded-xl bg-white border border-slate-100 shadow-sm text-xs font-bold text-slate-600 flex items-center gap-1.5 group-hover:border-blue-100 transition-colors">
                               <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                               {tag}
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* MQL Ring Widget - Responsive & Not Cut Off */}
                   <div className="relative shrink-0 w-52 h-52 md:w-60 md:h-60 flex items-center justify-center p-2">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-2xl"></div>
                      
                      {/* SVG Chart */}
                      <div className="relative w-full h-full">
                         <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                            {/* Track */}
                            <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
                            {/* Progress Indicator */}
                            <circle 
                               cx="60" cy="60" r="52" 
                               fill="none" 
                               stroke="url(#impactGradient)" 
                               strokeWidth="8" 
                               strokeLinecap="round" 
                               strokeDasharray="326" // 2 * pi * 52
                               strokeDashoffset="65" // 80% filled
                               className="animate-[dash_1.5s_ease-out_forwards]"
                            />
                            <defs>
                               <linearGradient id="impactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#3b82f6" />
                                  <stop offset="100%" stopColor="#6366f1" />
                               </linearGradient>
                            </defs>
                         </svg>
                         
                         {/* Center Content */}
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                            <span ref={growthRef} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">
                               {growthDisplay}
                            </span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">MQL Growth</span>
                            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                               <TrendingUp size={10} />
                               Trending
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Stacked Stats */}
        <div className="md:col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 h-full">
           
           {/* Churn Reduced Card */}
           <ScrollReveal delay={100} className="flex-1 w-full">
             <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                   <div className="p-3 bg-rose-50 rounded-2xl text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                      <Activity size={24} />
                   </div>
                   <div className="flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-lg">
                      <span>High Impact</span>
                   </div>
                </div>
                
                <div className="mt-8">
                   <h4 ref={churnRef} className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      {churnDisplay}
                   </h4>
                   <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">Churn Reduced</p>
                </div>
                
                {/* Visual Bar */}
                <div className="mt-6 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-rose-400 w-3/4 rounded-full group-hover:animate-pulse"></div>
                </div>
             </div>
           </ScrollReveal>

           {/* Users Acquired Card */}
           <ScrollReveal delay={200} className="flex-1 w-full">
             <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                   <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <Users size={24} />
                   </div>
                   <ArrowUpRight size={20} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
                </div>
                
                <div className="mt-8">
                   <h4 ref={usersRef} className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      {usersDisplay}
                   </h4>
                   <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mt-1">Users Acquired</p>
                </div>
                
                {/* Avatar Stack Visual */}
                <div className="mt-6 flex items-center -space-x-2 pl-2">
                   {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white ring-1 ring-slate-100"></div>
                   ))}
                   <div className="w-8 h-8 rounded-full bg-emerald-50 border-2 border-white flex items-center justify-center text-[10px] font-bold text-emerald-600">
                      +
                   </div>
                </div>
             </div>
           </ScrollReveal>

        </div>

      </div>
    </Section>
  );
};

export default About;
