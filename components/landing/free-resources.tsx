import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/brand";

export function FreeResources() {
  return (
    <section
      id="recursos"
      className="relative z-10 py-24 md:py-32 border-t border-border bg-background"
    >
      <div className="container max-w-4xl">
        <div className="section-divider mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted whitespace-nowrap">
            Recursos
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-medium text-center mb-4">
          {brand.resources.title}
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-16 text-sm md:text-base">
          {brand.resources.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={brand.resources.guide.href}
            className="group border border-border bg-surface p-8 md:p-10 hover:border-primary/30 transition-colors duration-300"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Gratis
            </p>
            <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">
              {brand.resources.guide.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              {brand.resources.guide.description}
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground">
              {brand.resources.guide.cta}
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>

          <Link
            href={brand.resources.protocol.href}
            className="group border border-border bg-surface p-8 md:p-10 hover:border-primary/30 transition-colors duration-300"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              90 días
            </p>
            <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">
              {brand.resources.protocol.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              {brand.resources.protocol.description}
            </p>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground">
              {brand.resources.protocol.cta}
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
