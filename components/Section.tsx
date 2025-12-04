import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean; // Deprecated but kept for compatibility, will ignore
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-10 bg-white text-slate-900 ${className}`}
    >
      <div className="w-full max-w-[1800px] mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;