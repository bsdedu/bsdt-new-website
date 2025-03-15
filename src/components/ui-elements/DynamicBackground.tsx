
import React from 'react';
import { cn } from "@/lib/utils";

type BackgroundType = 
  | 'gradient'
  | 'particles'
  | 'waves'
  | 'blobs';

interface DynamicBackgroundProps {
  type: BackgroundType;
  className?: string;
  children?: React.ReactNode;
  colors?: string[];
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  type,
  className,
  children,
  colors = ['bg-bsd-orange/20', 'bg-bsd-gray/20']
}) => {
  const renderBackground = () => {
    switch (type) {
      case 'gradient':
        return (
          <div className="absolute inset-0 bg-gradient-to-r from-bsd-orange/5 via-bsd-gray/5 to-bsd-orange/10 bg-gradient-animate -z-10"></div>
        );
      
      case 'particles':
        return (
          <div className="absolute inset-0 particles-bg -z-10"></div>
        );
      
      case 'waves':
        return (
          <div className="absolute inset-0 wave-bg -z-10"></div>
        );
      
      case 'blobs':
        return (
          <>
            <div className={`floating-blob ${colors[0] || 'bg-bsd-orange/20'} w-64 h-64 top-0 left-10 animate-delay-0`}></div>
            <div className={`floating-blob ${colors[1] || 'bg-bsd-gray/20'} w-80 h-80 bottom-0 right-10 animate-delay-[5s]`}></div>
            <div className={`floating-blob ${colors[0] || 'bg-bsd-orange/20'} w-72 h-72 bottom-20 left-1/3 animate-delay-[10s]`}></div>
          </>
        );
    }
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {renderBackground()}
      {children}
    </div>
  );
};
