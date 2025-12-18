"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedSectionProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}>
      {children}
    </motion.div>
  );
}
