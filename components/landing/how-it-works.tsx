import { brand } from "@/lib/brand";
import { SectionLabel, SectionShell } from "./section-shell";

export function HowItWorks() {
  return (
    <SectionShell id="como-funciona">
      <div className="container max-w-5xl">
        <SectionLabel>{brand.howItWorks.title}</SectionLabel>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-12 md:mb-16">
          {brand.howItWorks.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {brand.howItWorks.steps.map((step) => (
            <div
              key={step.step}
              className="border border-border bg-surface p-8 md:p-10 lg:p-12"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
                {step.step} · {step.title}
              </p>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
