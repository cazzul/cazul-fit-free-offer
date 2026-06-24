import { cn } from "@/lib/utils";

type Props = {
  id: string;
  children: React.ReactNode;
  variant?: "default" | "surface";
  fullHeight?: boolean;
  className?: string;
};

export function SectionShell({
  id,
  children,
  variant = "default",
  fullHeight = true,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative z-10 flex flex-col justify-center border-t border-border scroll-mt-28 py-16 md:py-24",
        fullHeight && "min-h-svh",
        variant === "surface" ? "bg-surface" : "bg-background",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-divider mb-6">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}
