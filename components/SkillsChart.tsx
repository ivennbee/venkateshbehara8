
import React from 'react';
import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { Check, Lightbulb, Cpu, Rocket, BarChart2, Layers, Users, PenTool, Database } from 'lucide-react';

const SkillsChart: React.FC = () => {
  // Data structure mapped to the provided 6 Categories
  const categories = [
    {
      title: "Marketing & Growth",
      skills: [
        { name: "Demand Generation", level: "95%" },
        { name: "Content Marketing", level: "90%" },
        { name: "LinkedIn Campaigns", level: "94%" },
        { name: "Email Marketing", level: "88%" },
        { name: "SEO & SEM", level: "85%" },
        { name: "Marketing Automation", level: "92%" }
      ],
      icon: Rocket,
      color: "bg-rose-500",
      time: "Step 1"
    },
    {
      title: "Product Management",
      skills: [
        { name: "GTM Strategy", level: "92%" },
        { name: "Product Roadmapping", level: "92%" },
        { name: "MVP Definition", level: "90%" },
        { name: "Agile/Scrum", level: "95%" },
        { name: "User Research", level: "88%" }
      ],
      icon: Lightbulb,
      color: "bg-amber-500",
      time: "Step 2"
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Workflow Automation", level: "94%" },
        { name: "ChatGPT/Claude/Gemini", level: "92%" },
        { name: "AI Tools Integration", level: "90%" },
        { name: "Agentic AI Building", level: "88%" }
      ],
      icon: Cpu,
      color: "bg-purple-500",
      time: "Step 3"
    },
    {
      title: "Analytics & Data",
      skills: [
        { name: "Google Analytics", level: "94%" },
        { name: "UTM Tracking", level: "95%" },
        { name: "Funnel Analysis", level: "90%" },
        { name: "Product Analytics", level: "87%" },
        { name: "Dashboard Design", level: "88%" },
        { name: "A/B Testing", level: "86%" }
      ],
      icon: BarChart2,
      color: "bg-blue-500",
      time: "Step 4"
    },
    {
      title: "Leadership & Strategy",
      skills: [
        { name: "Cross-functional Collab", level: "94%" },
        { name: "Team Leadership", level: "92%" },
        { name: "Stakeholder Mgmt", level: "90%" },
        { name: "Sales Enablement", level: "90%" },
        { name: "Strategic Planning", level: "87%" }
      ],
      icon: Users,
      color: "bg-indigo-500",
      time: "Step 5"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "HubSpot CRM", level: "94%" },
        { name: "Jira", level: "92%" },
        { name: "Sales Navigator", level: "90%" },
        { name: "Salesforce CRM", level: "88%" },
        { name: "Canva", level: "85%" },
        { name: "WordPress", level: "82%" }
      ],
      icon: PenTool,
      color: "bg-slate-500",
      time: "Step 6"
    }
  ];

  return (
    <Section id="skills" className="bg-white relative overflow-hidden py-24">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center mb-16">
         <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Layers size={14} />
              Skills Proficiency
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
               Interactive Skills Overview
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
               Click on a category to explore detailed proficiency levels across marketing, product, and AI domains.
            </p>
         </ScrollReveal>
      </div>

      <div className="flex justify-center">
        <ScrollReveal delay={200} className="w-full">
           {/* Timeline Card - Full Width */}
           <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-16 relative overflow-hidden w-full">
              
              {/* Card Header */}
              <div className="flex justify-between items-center mb-12 border-b border-slate-50 pb-6">
                 <div>
                   <h3 className="text-xl font-bold text-slate-900">All Skills</h3>
                   <p className="text-xs text-slate-400 font-medium mt-1">Comprehensive Breakdown</p>
                 </div>
                 <div className="flex gap-8 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">36</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Total</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">90%</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Avg Score</div>
                    </div>
                 </div>
              </div>

              {/* Vertical Timeline Container - Responsive Grid on Large Screens */}
              <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12 space-y-12 lg:space-y-0">
                 {/* Connecting Line - Only visible on mobile/single column */}
                 <div className="lg:hidden absolute left-[27px] top-4 bottom-10 w-1 bg-gradient-to-b from-rose-400 via-purple-500 to-slate-400 rounded-full"></div>

                 {categories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                       <div key={idx} className="relative flex items-start gap-6 group">
                          {/* Timeline Node */}
                          <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110 ${cat.color} text-white`}>
                             <Icon size={24} />
                             {/* Checkmark Badge */}
                             <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                <Check size={10} className="text-green-500 stroke-[4]" />
                             </div>
                          </div>

                          {/* Content */}
                          <div className="pt-1.5 flex-1">
                             <div className="flex justify-between items-baseline mb-3">
                                <h4 className="text-xl font-bold text-slate-900">{cat.title}</h4>
                             </div>
                             
                             {/* Skills Grid */}
                             <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill, sIdx) => (
                                  <div key={sIdx} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-default">
                                     <span className="text-xs font-semibold text-slate-700">{skill.name}</span>
                                     <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${parseInt(skill.level) >= 90 ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                                       {skill.level}
                                     </span>
                                  </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    );
                 })}
              </div>
              
              {/* Bottom Action */}
              <div className="mt-16 pt-8 border-t border-slate-50 flex justify-center">
                 <div className="px-8 py-4 bg-slate-900 text-white text-base font-bold rounded-full shadow-lg hover:scale-105 transition-transform cursor-default">
                    Product Marketer | Vibe Marketer | GTM Specialist
                 </div>
              </div>

           </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default SkillsChart;
