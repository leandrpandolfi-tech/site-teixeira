import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTransformClass = () => {
    if (isVisible) return 'opacity-100 translate-y-0 scale-100';
    if (direction === 'up') return 'opacity-0 translate-y-8 scale-[0.99]';
    if (direction === 'down') return 'opacity-0 -translate-y-8 scale-[0.99]';
    return 'opacity-0';
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out will-change-[transform,opacity] ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
};
