import Image from "next/image";
import { brand } from "@/lib/brand";
import { SectionLabel, SectionShell } from "./section-shell";

export function About() {
  return (
    <SectionShell id="about" variant="surface">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>{brand.about.title}</SectionLabel>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 md:mb-10">
              {brand.about.title}
            </h2>

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] text-foreground italic">
              {brand.about.quote}
            </blockquote>

            <p className="mt-8 md:mt-10 text-base md:text-lg text-muted leading-relaxed max-w-xl">
              {brand.about.copy}
            </p>
          </div>

          <figure className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none overflow-hidden border border-border bg-background">
            <Image
              src={brand.about.photo}
              alt="Yadiel Casul en el gym"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </figure>
        </div>
      </div>
    </SectionShell>
  );
}
