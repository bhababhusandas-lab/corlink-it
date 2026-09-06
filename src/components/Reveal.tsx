import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
  /** Anchor target, e.g. for an on-page tab bar. */
  id?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      {...(id ? { id } : {})}
      data-visible={visible ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </As>
  );
}
