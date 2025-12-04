
import React, { useState } from 'react';
import Section from './Section';
import { Briefcase, ChevronDown, Plus, CheckSquare, TrendingUp, Zap, BarChart } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import { Experience } from '../types';
import ScrollReveal from './ScrollReveal';

const CompanyLogo: React.FC<{ logo?: string, company: string }> = ({ logo, company }) => {
  const [error, setError] = useState(false);

  if (!logo || error) {
    // Fallback: Initials
    const initials = company.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    return (
      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm border border-slate-200 shadow-sm shrink-0">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden shrink-0 p-1">
      <img 
        src={logo} 
        alt={`${company} logo`} 
        className="w-full h-full object-contain"
        onError={() => setError(true)}
      />
    </div>
  );
};

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`relative pl-8 md:pl-12 py-2 group cursor-pointer`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Timeline Dot */}
      <div className={`absolute left-0 top-6 w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 
        ${isExpanded ? 'bg-white border-blue-600 scale-125' : 'bg-slate-200 border-white group-hover:bg-blue-400'}`}>
      </div>

      <div className={`
        bg-white rounded-2xl border transition-all duration-300 overflow-hidden
        ${isExpanded 
          ? 'shadow-xl shadow-blue-900/5 border-blue-100' 
          : 'shadow-sm border-slate-100 hover:border-blue-100 hover:shadow-md'
        }
      `}>
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between">
            <div className="flex gap-4">
               <CompanyLogo logo={experience.logo} company={experience.company} />
               <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-slate-900">{experience.company}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-sm text-slate-500">{experience.location}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                    {experience.period}
                  </p>
               </div>
            </div>
            
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-slate-50 text-slate-400 mt-4 md:mt-0
              ${isExpanded ? 'bg-blue-600 text-white rotate-180' : 'group-hover:bg-blue-50 group-hover:text-blue-600'}
            `}>
               {isExpanded ? <ChevronDown size={18} /> : <Plus size={18} />}
            </div>
          </div>

          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
            <div className="pb-2 pt-4 border-t border-slate-50">
              <p className="text-slate-600 leading-relaxed mb-6">
                {experience.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Achievements</p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {experience.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {experience.skills && experience.skills.length > 0 && (
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span key={i} className="text-xs font-semibold bg-slate-50 text-slate-600 px-3 py-1.5 rounded-md border border-slate-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type TabType = 'overview' | 'impact' | 'growth';

// New Component for the Summary Card based on reference UI
const CareerSummaryCard = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabData = {
    overview: {
      stats: [
        { label: 'Companies', value: '5+', badge: 'Global', color: 'bg-green-50 text-green-600' },
        { label: 'Launches', value: '20+', badge: 'SaaS', color: 'bg-amber-50 text-amber-600' }
      ],
      mainLabel: 'Total Experience',
      mainValue: '9+ Years',
      description: 'A journey defined by data-driven strategies, successful product launches, and building high-performing growth engines for SaaS startups.',
      graphPath: 'M0 80 C 60 80, 100 50, 160 40 C 220 30, 260 10, 320 5',
      graphFill: 'url(#careerChartGradient)',
      strokeColor: '#3b82f6',
      icon: CheckSquare
    },
    impact: {
      stats: [
        { label: 'Users', value: '1.5K+', badge: 'Acquired', color: 'bg-blue-50 text-blue-600' },
        { label: 'Churn', value: '-25%', badge: 'Reduced', color: 'bg-purple-50 text-purple-600' }
      ],
      mainLabel: 'MQL Growth',
      mainValue: '3.5x',
      description: 'Delivering measurable business outcomes. Transformed user acquisition funnels and optimized retention strategies.',
      graphPath: 'M0 90 L 60 80 L 100 40 L 180 50 L 240 10 L 320 0',
      graphFill: 'url(#impactChartGradient)',
      strokeColor: '#8b5cf6',
      icon: TrendingUp
    },
    growth: {
      stats: [
        { label: 'Deal Size', value: '3x', badge: 'Tripled', color: 'bg-indigo-50 text-indigo-600' },
        { label: 'Efficiency', value: '+40%', badge: 'Boost', color: 'bg-emerald-50 text-emerald-600' }
      ],
      mainLabel: 'Avg ROI',
      mainValue: '4.1x',
      description: 'Building sustainable revenue engines. Focusing on high-efficiency channels and automated workflows for scale.',
      graphPath: 'M0 90 C 80 90, 120 80, 160 60 S 240 20, 320 10',
      graphFill: 'url(#growthChartGradient)',
      strokeColor: '#10b981',
      icon: Zap
    }
  };

  const current = tabData[activeTab];
  const Icon = current.icon;

  return (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-100 w-full overflow-hidden relative transition-all duration-300">
       {/* Card Header */}
       <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-900/20 transition-transform duration-300 key={activeTab}">
             <Icon size={20} strokeWidth={3} className="animate-fade-up" />
          </div>
          <div>
             <h3 className="font-bold text-slate-900 text-xl">Career Journey</h3>
             <p className="text-xs font-medium text-slate-400 mt-0.5">2016 - Present</p>
          </div>
       </div>

       {/* Tabs Style */}
       <div className="flex bg-slate-50 p-1.5 rounded-2xl mb-8 relative">
          {/* Animated Background Pill */}
          <div 
            className="absolute top-1.5 bottom-1.5 bg-white rounded-xl shadow-sm transition-all duration-300 ease-out"
            style={{
               left: activeTab === 'overview' ? '6px' : activeTab === 'impact' ? '33.33%' : '66.66%',
               width: 'calc(33.33% - 4px)',
               transform: activeTab === 'impact' ? 'translateX(2px)' : activeTab === 'growth' ? 'translateX(-2px)' : 'none'
            }}
          ></div>

          {(['overview', 'impact', 'growth'] as TabType[]).map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`flex-1 py-2.5 text-center text-xs font-bold relative z-10 transition-colors duration-300 capitalize
                  ${activeTab === tab ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}
               `}
             >
               {tab}
             </button>
          ))}
       </div>

       {/* Dynamic Content Container */}
       <div className="animate-fade-up">
           {/* Secondary Stats Row */}
           <div className="flex gap-4 mb-8">
              {current.stats.map((stat, idx) => (
                <div key={idx} className="flex-1 p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-default">
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
                   <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-slate-900">{stat.value}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${stat.color}`}>{stat.badge}</span>
                   </div>
                </div>
              ))}
           </div>

           {/* Main Metric */}
           <div className="mb-2 relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{current.mainLabel}</p>
              <h2 className="text-6xl font-extrabold text-slate-900 tracking-tighter transition-all duration-300">{current.mainValue}</h2>
           </div>
       </div>

       {/* Graph Visual - CSS/SVG */}
       <div className="h-32 w-[calc(100%+4rem)] relative -mx-8 mb-6">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
             <defs>
               <linearGradient id="careerChartGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                 <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
               </linearGradient>
               <linearGradient id="impactChartGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                 <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
               </linearGradient>
               <linearGradient id="growthChartGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/>
                 <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
               </linearGradient>
             </defs>
             {/* Line */}
             <path 
               d={current.graphPath}
               fill="none" 
               stroke={current.strokeColor} 
               strokeWidth="4" 
               strokeLinecap="round"
               className="drop-shadow-md transition-all duration-500 ease-out"
             />
             {/* Fill */}
             <path 
               d={`${current.graphPath} V 120 H 0 Z`} 
               fill={current.graphFill} 
               stroke="none"
               className="transition-all duration-500 ease-out"
             />
             {/* Data Points */}
             <circle cx="160" cy="40" r="5" fill="white" stroke={current.strokeColor} strokeWidth="3" className="animate-pulse transition-all duration-500" />
             <circle cx="280" cy="10" r="5" fill="white" stroke={current.strokeColor} strokeWidth="3" className="transition-all duration-500" />
          </svg>
       </div>

       {/* Description Footer */}
       <div className="border-t border-slate-50 pt-6">
         <p className="text-sm text-slate-500 font-medium leading-relaxed min-h-[60px]">
           {current.description}
         </p>
       </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <Section id="experience" className="bg-slate-50">
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left Column - Redesigned Summary Card */}
        <div className="lg:col-span-4">
            <div className="sticky top-32">
                <ScrollReveal>
                  <CareerSummaryCard />
                </ScrollReveal>
            </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:col-span-8">
          <div className="relative border-l border-slate-200 ml-1.5 md:ml-0 space-y-4">
            {EXPERIENCE.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <ExperienceCard experience={exp} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceTimeline;
