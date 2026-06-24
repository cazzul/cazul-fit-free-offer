import { brand } from "@/lib/brand";

export function Results() {
  return (
    <section
      id="results"
      className="relative z-10 py-24 md:py-32 border-t border-border bg-background"
    >
      <div className="container">
        <div className="section-divider mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted whitespace-nowrap">
            Real Results
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-medium text-center mb-4">
          {brand.results.title}
        </h2>
        <p className="text-muted text-center max-w-md mx-auto mb-16 text-sm md:text-base">
          {brand.results.subtitle}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {brand.results.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface py-12 md:py-16 px-6 text-center"
            >
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-3">
                {stat.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
