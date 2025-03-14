
import React from 'react';
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps extends ButtonProps {
  withArrow?: boolean;
  delay?: number;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, withArrow = false, delay = 0, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden group transition-all duration-300 ease-out",
          "before:absolute before:inset-0 before:-z-10 before:translate-y-full before:bg-bsd-gray before:transition-transform before:duration-300",
          "hover:before:translate-y-0",
          className
        )}
        style={{
          animationDelay: delay ? `${delay}ms` : '0ms',
        }}
        {...props}
      >
        <span className="group-hover:mr-2 transition-all duration-300">
          {children}
        </span>
        {withArrow && (
          <ArrowRight 
            className="w-4 h-4 inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
          />
        )}
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
