
import React from 'react';
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  delay?: number;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, delay = 0, ...props }, ref) => {
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
        <span className="transition-all duration-300">
          {children}
        </span>
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
