
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number; // New: customize animation distance
  duration?: number; // New: customize animation duration
  easing?: 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'; // New: customize easing
  threshold?: number;
  once?: boolean; // New: option to trigger animation only once
  scale?: boolean; // New: add scale effect
}

const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 700,
  easing = 'ease-out',
  threshold = 0.1,
  once = true,
  scale = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const getInitialTransform = () => {
    const transforms = [];
    
    // Direction transform
    switch (direction) {
      case 'up': transforms.push(`translateY(${distance}px)`); break;
      case 'down': transforms.push(`translateY(-${distance}px)`); break;
      case 'left': transforms.push(`translateX(${distance}px)`); break;
      case 'right': transforms.push(`translateX(-${distance}px)`); break;
      case 'none': break;
      default: transforms.push(`translateY(${distance}px)`);
    }
    
    // Scale transform
    if (scale) {
      transforms.push('scale(0.95)');
    }
    
    return transforms.join(' ');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, once]);

  return (
    <div
      ref={sectionRef}
      className={cn(`transition-all ease-${easing}`, className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getInitialTransform(),
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export { RevealSection };
