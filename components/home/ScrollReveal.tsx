"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type RevealDirection = "up" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: RevealDirection;
}

const HIDDEN_TRANSFORM: Record<RevealDirection, string> = {
  up: "translate-y-3",
  left: "-translate-x-4",
  right: "translate-x-4",
};

const ScrollReveal = ({
  children,
  className,
  delayMs = 0,
  direction = "up",
}: ScrollRevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${HIDDEN_TRANSFORM[direction]}`,
        className
      )}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
