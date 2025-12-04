
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsChart from './components/SkillsChart';
import Certifications from './components/Certifications';
import ExperienceTimeline from './components/ExperienceTimeline';
import FunnelSection from './components/FunnelSection';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';
import { 
  Users, PenTool, Code, Share2, 
  User, FileText, BarChart2, Hash
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <About />
      
      {/* Team Leadership Section - Organizational Chart Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
           <ScrollReveal>
             <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                 <Users size={14} />
                 Team Leadership
               </div>
               <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                 Organizational Structure
               </h2>
               <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
                 Orchestrating a high-performing 7-member pod for scalable growth.
               </p>
             </div>
           </ScrollReveal>

           {/* Top-Down Org Chart */}
           <div className="flex justify-center py-10 overflow-x-auto no-scrollbar">
              <ScrollReveal delay={100} width="fit-content">
                 <div className="flex flex-col items-center min-w-max px-8">
                    
                    {/* LEVEL 1: LEADER */}
                    <div className="relative z-10 mb-12">
                       <div className="flex items-center gap-4 bg-teal-600 text-white p-4 pr-8 rounded-xl shadow-xl w-[340px] relative transition-transform hover:-translate-y-1 z-20">
                          <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center overflow-hidden border border-white/30 shrink-0">
                             <img src="https://ai-saas-portfolio-spark.lovable.app/lovable-uploads/venkatesh-hero.png" alt="Venkatesh" className="w-full h-full object-cover" />
                          </div>
                          <div>
                             <h4 className="font-bold text-lg leading-tight">Venkatesh Behara</h4>
                             <p className="text-teal-100 text-xs font-bold uppercase tracking-wide mt-0.5">Marketing Director</p>
                          </div>
                       </div>
                       {/* Connector Down */}
                       <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 h-12 w-0.5 bg-slate-300"></div>
                    </div>

                    {/* LEVEL 2 CONNECTOR BAR */}
                    <div className="relative w-full max-w-5xl h-0.5 bg-slate-300 mb-12 mx-auto flex justify-between px-[16%]">
                       {/* Drop lines to Level 2 nodes */}
                       <div className="absolute left-[16.66%] -translate-x-1/2 top-0 h-12 w-0.5 bg-slate-300"></div>
                       <div className="absolute left-1/2 -translate-x-1/2 top-0 h-12 w-0.5 bg-slate-300"></div>
                       <div className="absolute right-[16.66%] translate-x-1/2 top-0 h-12 w-0.5 bg-slate-300"></div>
                    </div>

                    {/* LEVEL 2: MANAGERS/PODS */}
                    <div className="grid grid-cols-3 gap-12 lg:gap-24 items-start w-full max-w-6xl">
                       
                       {/* Pod 1: Creative */}
                       <div className="flex flex-col items-center group w-full">
                          {/* Manager Card */}
                          <div className="bg-rose-400 text-white p-3 pr-6 rounded-lg shadow-lg w-full max-w-[280px] relative z-10 mb-8 transition-transform hover:scale-105">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center border border-white/20 shrink-0">
                                   <PenTool size={20} />
                                </div>
                                <div>
                                   <h4 className="font-bold text-sm">Creative Strategy</h4>
                                   <p className="text-rose-100 text-[10px] font-bold uppercase">Content & Design</p>
                                </div>
                             </div>
                             {/* Connector Down */}
                             <div className="absolute left-8 -bottom-8 h-8 w-0.5 bg-slate-300"></div>
                          </div>

                          {/* Level 3 List */}
                          <div className="flex flex-col gap-4 w-full max-w-[280px] pl-12 relative">
                             {/* Vertical Connector Line */}
                             <div className="absolute left-8 top-[-2rem] bottom-8 w-0.5 bg-slate-300"></div>

                             {/* Employee 1 */}
                             <div className="bg-cyan-50 border-l-4 border-cyan-400 p-3 rounded shadow-sm hover:shadow-md transition-all relative w-full bg-white">
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-slate-300"></div>
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 border border-cyan-200 shadow-sm shrink-0">
                                      <User size={14} />
                                   </div>
                                   <div>
                                      <h5 className="font-bold text-slate-800 text-sm">Designers</h5>
                                      <p className="text-[10px] text-slate-500 font-medium">2 Senior Members</p>
                                   </div>
                                </div>
                             </div>

                             {/* Employee 2 */}
                             <div className="bg-cyan-50 border-l-4 border-cyan-400 p-3 rounded shadow-sm hover:shadow-md transition-all relative w-full bg-white">
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-slate-300"></div>
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 border border-cyan-200 shadow-sm shrink-0">
                                      <FileText size={14} />
                                   </div>
                                   <div>
                                      <h5 className="font-bold text-slate-800 text-sm">Writers</h5>
                                      <p className="text-[10px] text-slate-500 font-medium">2 Content Leads</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* Pod 2: Tech (Center) */}
                       <div className="flex flex-col items-center group w-full">
                          {/* Manager Card */}
                          <div className="bg-rose-400 text-white p-3 pr-6 rounded-lg shadow-lg w-full max-w-[280px] relative z-10 mb-8 transition-transform hover:scale-105">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center border border-white/20 shrink-0">
                                   <Code size={20} />
                                </div>
                                <div>
                                   <h4 className="font-bold text-sm">Tech & Data</h4>
                                   <p className="text-rose-100 text-[10px] font-bold uppercase">Development</p>
                                </div>
                             </div>
                             {/* Connector Down */}
                             <div className="absolute left-8 -bottom-8 h-8 w-0.5 bg-slate-300"></div>
                          </div>

                          {/* Level 3 List */}
                          <div className="flex flex-col gap-4 w-full max-w-[280px] pl-12 relative">
                             {/* Vertical Connector Line */}
                             <div className="absolute left-8 top-[-2rem] bottom-8 w-0.5 bg-slate-300"></div>

                             {/* Employee 1 */}
                             <div className="bg-cyan-50 border-l-4 border-cyan-400 p-3 rounded shadow-sm hover:shadow-md transition-all relative w-full bg-white">
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-slate-300"></div>
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 border border-cyan-200 shadow-sm shrink-0">
                                      <Code size={14} />
                                   </div>
                                   <div>
                                      <h5 className="font-bold text-slate-800 text-sm">Developer</h5>
                                      <p className="text-[10px] text-slate-500 font-medium">1 Full Stack</p>
                                   </div>
                                </div>
                             </div>

                             {/* Employee 2 */}
                             <div className="bg-cyan-50 border-l-4 border-cyan-400 p-3 rounded shadow-sm hover:shadow-md transition-all relative w-full bg-white">
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-slate-300"></div>
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 border border-cyan-200 shadow-sm shrink-0">
                                      <BarChart2 size={14} />
                                   </div>
                                   <div>
                                      <h5 className="font-bold text-slate-800 text-sm">Analyst</h5>
                                      <p className="text-[10px] text-slate-500 font-medium">1 Data Specialist</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* Pod 3: Social (Right) */}
                       <div className="flex flex-col items-center group w-full">
                          {/* Manager Card */}
                          <div className="bg-rose-400 text-white p-3 pr-6 rounded-lg shadow-lg w-full max-w-[280px] relative z-10 mb-8 transition-transform hover:scale-105">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center border border-white/20 shrink-0">
                                   <Share2 size={20} />
                                </div>
                                <div>
                                   <h4 className="font-bold text-sm">Social Growth</h4>
                                   <p className="text-rose-100 text-[10px] font-bold uppercase">Community</p>
                                </div>
                             </div>
                             {/* Connector Down */}
                             <div className="absolute left-8 -bottom-8 h-8 w-0.5 bg-slate-300"></div>
                          </div>

                          {/* Level 3 List */}
                          <div className="flex flex-col gap-4 w-full max-w-[280px] pl-12 relative">
                             {/* Vertical Connector Line */}
                             <div className="absolute left-8 top-[-2rem] bottom-8 w-0.5 bg-slate-300"></div>

                             {/* Employee 1 */}
                             <div className="bg-cyan-50 border-l-4 border-cyan-400 p-3 rounded shadow-sm hover:shadow-md transition-all relative w-full bg-white">
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-slate-300"></div>
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 border border-cyan-200 shadow-sm shrink-0">
                                      <Hash size={14} />
                                   </div>
                                   <div>
                                      <h5 className="font-bold text-slate-800 text-sm">Social Exec</h5>
                                      <p className="text-[10px] text-slate-500 font-medium">1 Community Mgr</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>

                    </div>
                 </div>
              </ScrollReveal>
           </div>
        </div>
      </section>

      <SkillsChart />
      <Certifications />
      <FunnelSection />
      <ExperienceTimeline />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;
