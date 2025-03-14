
import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  useEasing?: boolean;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  useEasing = true,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(start);
  const countRef = useRef<{ start: number; end: number; startTime: number | null; duration: number; rafId: number | null }>({
    start,
    end,
    startTime: null,
    duration: duration * 1000,
    rafId: null,
  });

  useEffect(() => {
    const easeOutQuad = (t: number): number => t * (2 - t);

    const animate = (timestamp: number) => {
      if (!countRef.current.startTime) {
        countRef.current.startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - countRef.current.startTime) / countRef.current.duration,
        1
      );

      const currentCount = countRef.current.start + 
        (countRef.current.end - countRef.current.start) * 
        (useEasing ? easeOutQuad(progress) : progress);

      setCount(Math.floor(currentCount));

      if (progress < 1) {
        countRef.current.rafId = requestAnimationFrame(animate);
      } else {
        setCount(countRef.current.end);
      }
    };

    const timeoutId = setTimeout(() => {
      countRef.current.rafId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (countRef.current.rafId) {
        cancelAnimationFrame(countRef.current.rafId);
      }
    };
  }, [end, start, duration, delay, useEasing]);

  // Update ref values if props change
  useEffect(() => {
    countRef.current.start = start;
    countRef.current.end = end;
    countRef.current.duration = duration * 1000;
  }, [start, end, duration]);

  return (
    <>
      {prefix}{count}{suffix}
    </>
  );
};

export default CountUp;
