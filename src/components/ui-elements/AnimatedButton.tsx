import React from 'react';
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AnimatedButtonProps extends ButtonProps {
  delay?: number;
  hoverEffect?: 'slide' | 'glow' | 'scale' | 'pulse';
  href?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, delay = 0, hoverEffect = 'slide', href, ...props }, ref) => {
    
    const getHoverClasses = () => {
      switch (hoverEffect) {
        case 'slide':
          return "relative overflow-hidden group transition-all duration-300 ease-out before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-bsd-gray before:transition-transform before:duration-300 hover:before:translate-y-0";
        case 'glow':
          return "transition-all duration-300 ease-out hover:shadow-[0_0_15px_rgba(242,133,0,0.6)] hover:bg-bsd-orange/90";
        case 'scale':
          return "transition-all duration-300 ease-out hover:scale-105 active:scale-95";
        case 'pulse':
          return "transition-all duration-300 ease-out animate-pulse hover:animate-none hover:bg-bsd-orange/90";
        default:
          return "relative overflow-hidden group transition-all duration-300 ease-out before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-bsd-gray before:transition-transform before:duration-300 hover:before:translate-y-0";
      }
    };
    
    // If href is provided, render as a Link
    if (href) {
      return (
        <Link to={href}>
          <Button
            className={cn(
              getHoverClasses(),
              className
            )}
            style={{
              animationDelay: delay ? `${delay}ms` : '0ms',
            }}
            {...props}
          >
            <span className="transition-all duration-300">
              {children}
            </span>
          </Button>
        </Link>
      );
    }
    
    // Otherwise, render as a regular button
    return (
      <Button
        ref={ref}
        className={cn(
          getHoverClasses(),
          className
        )}
        style={{
          animationDelay: delay ? `${delay}ms` : '0ms',
        }}
        {...props}
      >
        <span className="transition-all duration-300">
          {children}
        </span>
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
