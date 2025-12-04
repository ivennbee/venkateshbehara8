
import React, { useState, useEffect } from 'react';
import Section from './Section';
import { FUNNEL_DATA } from '../constants';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, TrendingUp, Users, Target, Filter, Award } from 'lucide-react';

const icons = [Users, Filter, Target, Award];

const FunnelSection: React.FC = () => {
  const [roiText, setRoiText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const targetText = "4.1x ROI";

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (roiText.length < targetText.length) {
          setRoiText(targetText.slice(0, roiText.length + 1));
          timer = setTimeout(handleTyping, 150);
        } else {
          // Finished typing, pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 3000);
        }
      } else {
        // Deleting
        if (roiText.length > 0) {
          setRoiText(targetText.slice(0, roiText.length - 1));
          timer = setTimeout(handleTyping, 50);
        } else {
          // Finished deleting, pause before typing again
          setIsDeleting(false);
          timer = setTimeout(handleTyping, 500);
        }
      }
    };

    timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [roiText, isDeleting]);

  return (
    <Section id="analytics" className="bg-slate-50/50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
            <TrendingUp size={14} />
            Analytics
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Marketing to Revenue Engine
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            I don't just generate leads; I build systems that track every touchpoint. 
            Achieving a consistent <span className="text-slate-900 font-bold bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-sm min-w-[80px] inline-block text-left">
              {roiText}
              <span className="animate-pulse text-indigo-500">|</span>
            </span> through full-funnel optimization.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-green-200 -translate-y-1/2 z-0"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {FUNNEL_DATA.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <ScrollReveal key={idx} delay={idx * 150} className="h-full">
                <div className="group relative h-full bg-white/60 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  
                  {/* Copilot Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="p-6 relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-2xl text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`} style={{ backgroundColor: item.fill }}>
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-white/80 px-2 py-1 rounded-md">
                        Step 0{idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                        {item.value >= 1000 ? `${(item.value / 1000).toFixed(1)}k` : item.value}
                      </h3>
                      <p className="font-semibold text-slate-700">{item.stage}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                    </div>

                    {/* Footer / Metrics */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-slate-400">Conversion</span>
                        <span className={`text-sm font-bold ${idx === 3 ? 'text-green-600' : 'text-slate-700'}`}>
                          {item.conversion}
                        </span>
                      </div>
                      {idx < FUNNEL_DATA.length - 1 && (
                        <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
      
      {/* Insight Tag */}
      <ScrollReveal delay={600}>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm text-sm text-slate-600">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             Average Lead-to-Close cycle time reduced by <span className="font-bold text-slate-900">22 days</span>
          </div>
        </div>
      </ScrollReveal>

    </Section>
  );
};

export default FunnelSection;
