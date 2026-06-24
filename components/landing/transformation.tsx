import { brand, transformationPhotos } from "@/lib/brand";
import { PhotoRotator } from "./photo-rotator";

export function Transformation() {
  return (
    <section
      id="transformacion"
      className="relative z-10 py-24 md:py-32 border-t border-border bg-surface"
    >
      <div className="container">
        <div className="section-divider mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted whitespace-nowrap">
            Transformación
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif font-medium text-center mb-4">
          {brand.transformation.title}
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
          {brand.transformation.subtitle}
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <figure className="relative aspect-[3/4] overflow-hidden border border-border bg-background">
            <PhotoRotator
              images={[...transformationPhotos.before]}
              intervalMs={2000}
              className="absolute inset-0"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-background/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {brand.transformation.beforeLabel}
            </figcaption>
          </figure>

          <figure className="relative aspect-[3/4] overflow-hidden border border-border bg-background">
            <PhotoRotator
              images={[...transformationPhotos.after]}
              intervalMs={2000}
              className="absolute inset-0"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-background/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              {brand.transformation.afterLabel}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
