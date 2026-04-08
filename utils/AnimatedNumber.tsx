'use client';

import { useState, useEffect, useRef } from 'react';

function parseNumber(raw: string): { value: number; suffix: string } {
  const suffix = raw.replace(/[\d,]/g, '');
  const value = parseInt(raw.replace(/[^0-9]/g, ''), 10);
  return { value, suffix };
}

function formatNumber(n: number): string {
  return n.toLocaleString('en-IN');
}

export default function AnimatedNumber({ raw }: { raw: string }) {
  const { value, suffix } = parseNumber(raw);
  const start = Math.max(0, value - 200);
  const [display, setDisplay] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const steps = value - start;
          const duration = 2000; // ms
          const interval = duration / steps;
          let current = start;
          const timer = setInterval(() => {
            current += 1;
            setDisplay(current);
            if (current >= value) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, start]);

  return <span ref={ref}>{formatNumber(display)}{suffix}</span>;
}
