
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#works' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center py-4 px-4 pointer-events-none animate-fade-down">
      <div className={`pointer-events-auto transition-all duration-500 ease-in-out ${
          scrolled || isOpen ? 'w-full max-w-5xl' : 'w-full max-w-[1400px]'
        }`}>
        <div className={`
          flex justify-between items-center px-6 py-4 rounded-full transition-all duration-300 border border-transparent
          ${scrolled || isOpen 
            ? 'glass-nav shadow-lg shadow-black/5' 
            : 'bg-transparent'
          }
        `}>
          <a href="#" className="text-2xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
            <div className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110">
              <span className="font-bold text-sm">VB</span>
            </div>
            <span className={`hidden sm:block font-semibold ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity`}>Venkatesh</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 px-4 py-2 rounded-full transition-all duration-300 hover:text-blue-600 hover:bg-slate-50/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 hover:shadow-blue-500/20">
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-slate-900 rounded-full hover:bg-slate-100/50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-24 left-4 right-4 glass-nav rounded-3xl shadow-2xl p-6 flex flex-col space-y-2 border border-white/50 lg:hidden animate-fade-up z-50">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-800 py-3.5 px-4 rounded-xl transition-all duration-300 hover:bg-slate-50 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-200/50 my-2"></div>
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-slate-900/10 active:scale-95 transition-transform text-lg">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
