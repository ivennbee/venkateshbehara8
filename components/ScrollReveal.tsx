import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // delay in ms
  className?: string;
  width?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, className = '', width = '100%' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% visible

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`reveal ${isVisible ? 'active' : ''} ${className}`}
      style={{ 
        width: width === 'fit-content' ? 'fit-content' : width,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;