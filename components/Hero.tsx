import React, { useState, useEffect } from 'react';
import { Download, ArrowUpRight, Award, Users, TrendingUp, Briefcase } from 'lucide-react';
import { HERO_STATS } from '../constants';
import ScrollReveal from './ScrollReveal';

// Reusable Components for Hero
interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  // key prop is handled by parent map, not passed to DOM
}

const StatCard: React.FC<StatCardProps> = ({ label, value, subtext }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white shadow-xl shadow-slate-200/50 flex flex-col justify-center min-w-[140px] hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center justify-between mb-2">
         {label.includes("Years") && <Briefcase className="text-amber-500" size={20} />}
         {label.includes("Users") && <Users className="text-blue-500" size={20} />}
         {label.includes("Growth") && <TrendingUp className="text-green-500" size={20} />}
         
         {/* Animated indicator */}
         <span className="relative flex h-2 w-2">
           <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${label.includes("Growth") ? 'bg-green-400' : 'bg-blue-400'}`}></span>
           <span className={`relative inline-flex rounded-full h-2 w-2 ${label.includes("Growth") ? 'bg-green-500' : 'bg-blue-500'}`}></span>
         </span>
      </div>
      
      <div className="flex items-baseline gap-1">
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{value}</h3>
      </div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">{label}</p>
      {subtext && <p className="text-xs text-slate-400 mt-0.5">{subtext}</p>}
      
      {/* Visual Extras based on type */}
      {label.includes("Users") && (
        <div className="flex -space-x-2 mt-3">
          {[1,2,3,4].map(i => (
            <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-6 h-6 rounded-full border-2 border-white" alt="User" />
          ))}
          <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-500">+1.5k</div>
        </div>
      )}

      {label.includes("Growth") && (
         <div className="mt-3 h-8 w-full">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
               <path 
                 d="M0 35 C 20 35, 30 10, 50 20 C 70 30, 80 5, 100 0" 
                 fill="none" 
                 stroke="#10b981" 
                 strokeWidth="2" 
                 strokeLinecap="round"
                 className="animate-dash"
                 strokeDasharray="150"
                 strokeDashoffset="150"
               />
               <defs>
                 <linearGradient id="growthGradient" x1="0" x2="0" y1="0" y2="1">
                   <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                   <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                 </linearGradient>
               </defs>
            </svg>
         </div>
      )}
    </div>
  );
};

interface FloatingGlassCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  subtext?: string;
  className?: string;
  style?: React.CSSProperties;
  visual?: React.ReactNode;
}

const FloatingGlassCard: React.FC<FloatingGlassCardProps> = ({ icon: Icon, label, value, subtext, className, style, visual }) => (
  <div 
    className={`absolute p-4 rounded-2xl backdrop-blur-md border border-white/40 shadow-xl transition-all duration-500 group cursor-default
    bg-white/30 hover:bg-slate-900/95 hover:border-slate-800 hover:scale-105 hover:shadow-blue-500/30 z-20 flex items-center gap-4 min-w-[180px] animate-float
    ${className}`}
    style={style}
  >
    {/* Box-like Blue Gradient Effect on Hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    
    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors relative z-10">
      <Icon size={22} className="text-slate-900 group-hover:text-blue-400 transition-colors" />
    </div>
    
    <div className="relative z-10 flex-1">
      <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-0.5 group-hover:text-slate-400 transition-colors">{label}</p>
      <div className="flex items-center gap-2">
         <span className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">{value}</span>
         {subtext && (
           <span className="flex items-center text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors">
             {subtext}
           </span>
         )}
      </div>
    </div>
    
    {/* Extra Visual Element */}
    {visual && (
      <div className="relative z-10 border-l border-white/30 pl-3 ml-1">
        {visual}
      </div>
    )}
  </div>
);

const Hero: React.FC = () => {
  // Using high quality SVG logos for the Marquee
  const brands = [
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/1/15/HubSpot_Logo.svg" },
    { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "LinkedIn", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" },
    { name: "Oracle", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" }
  ];
  
  // Duplicate for infinite scroll
  const marqueeBrands = [...brands, ...brands, ...brands];

  // Typewriter effect state
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  const phrases = [
    "GTM Strategy.", 
    "Product Marketing.", 
    "Demand Gen.", 
    "Brand Growth.", 
    "User Acquisition."
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

    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentPhrase) {
      // Finished typing, pause before deleting
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next phrase
      setIsDeleting(false);
      setPhraseIndex(prev => prev + 1);
      typingSpeed = 500;
    }

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Blobs - Light Mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-100/40 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-50/60 rounded-[100%] blur-[120px] -z-10 pointer-events-none"></div>

      <div className="w-full max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content - NO ScrollReveal wrapper to keep typing effect immediate/smooth */}
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold mb-6 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Open to work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            <span className="block text-slate-500 text-3xl md:text-4xl font-semibold mb-2">Hello, I'm Venkatesh.</span>
            Marketing Leader <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {displayText}
              <span className="animate-pulse ml-1 text-slate-400">|</span>
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl font-light">
            Specializing in <span className="font-semibold text-slate-900">GTM Strategy, Events & Webinars</span>, and <span className="font-semibold text-slate-900">MQL Growth</span>. 
            I build scalable marketing engines that drive revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/venb/" 
              target="_blank" 
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-slate-800 shadow-xl shadow-slate-900/20 active:scale-95"
            >
              Let's Work Together
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <button className="group inline-flex items-center justify-center gap-6 bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 active:scale-95">
              Download Resume
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Stats Row Mobile - Hidden on LG */}
          <div className="lg:hidden flex flex-wrap gap-4 mb-12">
             {HERO_STATS.map((stat, i) => (
               <StatCard key={i} {...stat} />
             ))}
          </div>

          {/* Marquee has its own delay but no main scroll reveal wrapping above text */}
          <ScrollReveal delay={200}>
            <div className="border-t border-slate-200 pt-8">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted by 1,500+ professionals from</p>
              
              {/* Marquee Slider */}
              <div className="relative w-full overflow-hidden mask-linear-fade">
                <div className="flex gap-12 animate-scroll w-max hover:pause">
                  {marqueeBrands.map((brand, i) => (
                    <div key={i} className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                      <img src={brand.url} alt={brand.name} className="h-8 md:h-9 w-auto object-contain" />
                    </div>
                  ))}
                </div>
                {/* Gradient Masks for Marquee */}
                <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Image Content - Desktop */}
        <div className="hidden lg:block relative h-[600px] w-full">
           <ScrollReveal delay={300} className="h-full w-full flex items-end justify-center relative">
              {/* Background Glow Effect behind the person */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[80%] bg-blue-100/50 blur-[80px] rounded-full -z-10"></div>
              
              {/* Main Profile Image with Feather Effect */}
              <div className="relative w-full h-full flex items-end justify-center z-0">
                 <img 
                   src={imgError ? "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" : "https://ai-saas-portfolio-spark.lovable.app/lovable-uploads/venkatesh-hero.png"} 
                   alt="Venkatesh Behara" 
                   className="object-cover object-top h-[90%] w-auto max-w-full drop-shadow-2xl z-10"
                   style={{
                     maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                   }}
                   onError={() => setImgError(true)}
                 />
              </div>

              {/* Floating Glass Stats - Strategically Positioned with Visuals */}
              
              {/* Card 1: Growth with SVG Chart */}
              <FloatingGlassCard 
                 icon={TrendingUp}
                 label="MQL Growth"
                 value="3.5x"
                 subtext="Trending"
                 className="top-20 right-0 animate-fade-down"
                 style={{ animationDelay: '500ms' }}
                 visual={
                   <div className="h-10 w-20">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                         <path 
                           d="M0 35 C 20 35, 30 10, 50 20 C 70 30, 80 5, 100 0" 
                           fill="none" 
                           stroke="#10b981" 
                           strokeWidth="3" 
                           strokeLinecap="round"
                           className="animate-dash"
                         />
                      </svg>
                   </div>
                 }
              />
              
              {/* Card 2: Users with Avatar Stack */}
              <FloatingGlassCard 
                 icon={Users}
                 label="Users Acquired"
                 value="1.5K+"
                 className="bottom-32 -left-4 animate-fade-up"
                 style={{ animationDelay: '700ms' }}
                 visual={
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-7 h-7 rounded-full border-2 border-white ring-1 ring-slate-100" alt="User" />
                      ))}
                    </div>
                 }
              />
              
              {/* Card 3: Experience with Badge (Replaces Deal Size) */}
              <FloatingGlassCard 
                 icon={Briefcase}
                 label="Experience"
                 value="9+"
                 subtext="Years"
                 className="bottom-8 -right-4 animate-fade-up"
                 style={{ animationDelay: '900ms' }}
                 visual={
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center border border-amber-100 relative">
                       <Award size={20} className="text-amber-500 relative z-10" />
                       <span className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-20"></span>
                    </div>
                 }
              />

           </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;