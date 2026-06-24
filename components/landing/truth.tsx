import { brand } from "@/lib/brand";
import { SectionLabel, SectionShell } from "./section-shell";

export function Truth() {
  return (
    <SectionShell id="verdad" fullHeight={false} className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <SectionLabel>{brand.truth.title}</SectionLabel>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-12 md:mb-16 text-center">
          {brand.truth.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-12 md:mb-16">
          {brand.truth.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface py-10 md:py-14 px-6 text-center"
            >
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-4">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted leading-relaxed text-base md:text-lg max-w-3xl mx-auto text-center">
          {brand.truth.copy}
        </p>
      </div>
    </SectionShell>
  );
}
