'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'motion-dom';

// ---------------------------------------------------------------------------
// Animation variant presets
// ---------------------------------------------------------------------------
const VARIANTS: Record<string, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type RevealVariant = keyof typeof VARIANTS;

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
  className?: string;
}

// ---------------------------------------------------------------------------
// Reveal — wraps a single child in a scroll-triggered animation
// ---------------------------------------------------------------------------
export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  threshold = 0.15,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // `once: true` means the animation fires only the first time the element
  // enters the viewport — no replay on scroll-back.
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={VARIANTS[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier (CSS "ease" equivalent)
      }}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface StaggerContainerProps {
  children: React.ReactNode;
  /** Delay between each child (seconds) */
  staggerDelay?: number;
  /** Delay before the first child animates (seconds) */
  initialDelay?: number;
  /** Variant applied to every direct child */
  childVariant?: RevealVariant;
  /** Duration of each child's animation */
  duration?: number;
  threshold?: number;
  className?: string;
}

// ---------------------------------------------------------------------------
// Stagger container variants — the parent orchestrates child timing.
// ---------------------------------------------------------------------------
function buildStaggerVariants(
  staggerDelay: number,
  initialDelay: number,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };
}

// ---------------------------------------------------------------------------
// StaggerContainer — animates direct children with a stagger offset.
// Usage: wrap multiple <StaggerItem> (or plain divs via `childVariant`) in here.
// ---------------------------------------------------------------------------
export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  initialDelay = 0,
  childVariant = 'fade-up',
  duration = 0.6,
  threshold = 0.15,
  className,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const containerVariants = buildStaggerVariants(staggerDelay, initialDelay);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// StaggerItem — must be a direct child of StaggerContainer.
// Inherits timing from the parent; supply its own variant here.
// ---------------------------------------------------------------------------
interface StaggerItemProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  duration?: number;
  className?: string;
}

export function StaggerItem({
  children,
  variant = 'fade-up',
  duration = 0.6,
  className,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      transition={{
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
