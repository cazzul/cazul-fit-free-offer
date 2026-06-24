import Link from "next/link";
import { ApplyCoachingButton } from "@/components/apply-coaching-button";
import { Button } from "./ui/button";
import { PhotoRotator } from "./photo-rotator";
import { brand, heroPhotos } from "@/lib/brand";

export function Hero() {
  return (
    <section className="relative border-b border-border bg-background scroll-mt-28 lg:min-h-svh lg:flex lg:flex-col lg:justify-center">
      <div className="container flex flex-col gap-10 py-24 sm:py-28 lg:grid lg:min-h-svh lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-32">
        <div className="order-1 text-center lg:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-6 lg:mb-8">
            {brand.hero.eyebrow}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium uppercase leading-[1.05] tracking-tight text-balance">
            {brand.hero.headline}
            <br />
            <span className="text-primary italic font-normal">
              {brand.hero.headlineAccent}
            </span>
          </h1>

          <p className="mt-6 lg:mt-8 text-sm sm:text-base text-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
            {brand.hero.coachingLine}
          </p>

          <div className="relative z-10 mt-8 sm:mt-10 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
            <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <ApplyCoachingButton />
              <Link href="#que-incluye" className="contents">
                <Button variant="outline">{brand.hero.includedCta}</Button>
              </Link>
            </div>

            <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Link href={brand.hero.protocolHref} className="contents">
                <Button variant="outline" size="sm">
                  {brand.hero.protocolCta}
                </Button>
              </Link>
              <Link href={brand.hero.guideHref} className="contents">
                <Button variant="outline" size="sm">
                  {brand.hero.guideCta}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <figure className="order-2 relative z-0 mx-auto h-[min(48vh,360px)] w-[min(75vw,280px)] sm:h-[min(52vh,400px)] sm:w-[min(70vw,320px)] lg:mx-0 lg:h-[min(68vh,640px)] lg:w-auto lg:aspect-[3/4] overflow-hidden border border-border bg-background shrink-0">
          <PhotoRotator
            images={[...heroPhotos]}
            intervalMs={2000}
            className="absolute inset-0"
            priority
          />
        </figure>
      </div>
    </section>
  );
}
