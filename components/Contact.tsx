import React from 'react';
import Section from './Section';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <>
    <Section id="contact" className="bg-slate-50">
      <ScrollReveal className="w-full">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-slate-100">
          
          {/* Contact Info Side */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 md:p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Background decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-blue-100 mb-10 leading-relaxed font-light">
                Ready to collaborate on driving innovation in AI, SaaS, and digital transformation? I'm open to discussing new opportunities.
              </p>
              
              <div className="space-y-8">
                <a href="mailto:venkateshbehara8@gmail.com" className="flex items-center gap-5 group">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                     <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-0.5">Email</p>
                     <span className="text-lg font-medium">venkateshbehara8@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/venb/" target="_blank" rel="noreferrer" className="flex items-center gap-5 group">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                     <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-0.5">LinkedIn</p>
                     <span className="text-lg font-medium">linkedin.com/in/venb</span>
                  </div>
                </a>
                
                <div className="flex items-center gap-5">
                   <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                     <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-0.5">Location</p>
                     <span className="text-lg font-medium">Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
              <p className="text-sm font-semibold text-blue-200 mb-3 uppercase tracking-wider">Available for</p>
              <div className="flex flex-wrap gap-2">
                  {['Product Consulting', 'GTM Strategy', 'Leadership'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-black/20 rounded-lg text-xs font-medium backdrop-blur-sm border border-white/10">{tag}</span>
                  ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:p-12 md:w-3/5 bg-white">
            <form className="space-y-6 h-full flex flex-col justify-center" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="group">
                   <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                   <input type="text" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" placeholder="Your Name" />
                 </div>
                 <div className="group">
                   <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                   <input type="email" className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium" placeholder="your@email.com" />
                 </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <div className="relative">
                  <select className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-600 font-medium appearance-none">
                    <option>Product Management Consulting</option>
                    <option>Digital Strategy Development</option>
                    <option>AI & SaaS Product Launches</option>
                    <option>Just saying hi!</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <ChevronDownIcon />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium resize-none" placeholder="How can we help each other?"></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 group">
                 Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </ScrollReveal>
    </Section>
    
    <footer className="bg-white text-slate-500 py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-medium text-slate-900">© 2025 Venkatesh Behara.</p>
            <p className="text-sm">Built with passion for innovation.</p>
        </div>
    </footer>
    </>
  );
};

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Contact;