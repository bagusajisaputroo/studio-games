'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// =============================================================================
// FADE IN ANIMATIONS
// =============================================================================

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// STAGGER CONTAINER (untuk animasi berurutan)
// =============================================================================

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = '' }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// SCALE ON HOVER (untuk cards)
// =============================================================================

interface ScaleOnHoverProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export function ScaleOnHover({ children, scale = 1.05, className = '' }: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ 
        scale,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// SLIDE IN (untuk side animations)
// =============================================================================

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}

export function SlideIn({ children, direction = 'left', delay = 0, className = '' }: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        x: direction === 'left' ? -100 : 100
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0
      } : {}}
      transition={{ 
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// BOUNCE IN (untuk attention grabbing elements)
// =============================================================================

interface BounceInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function BounceIn({ children, delay = 0, className = '' }: BounceInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        scale: 0.5
      }}
      animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// ROTATE ON HOVER (untuk icons)
// =============================================================================

interface RotateOnHoverProps {
  children: ReactNode;
  rotation?: number;
  className?: string;
}

export function RotateOnHover({ children, rotation = 360, className = '' }: RotateOnHoverProps) {
  return (
    <motion.div
      whileHover={{ 
        rotate: rotation,
        transition: { duration: 0.6 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// PAGE TRANSITION (untuk smooth page load)
// =============================================================================

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// FLOATING ANIMATION (untuk decorative elements)
// =============================================================================

interface FloatingProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

export function Floating({ children, duration = 3, className = '' }: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}