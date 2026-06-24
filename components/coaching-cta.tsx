import { ApplyCoachingButton } from "@/components/apply-coaching-button";

export function CoachingCta() {
  return (
    <section className="border-t border-border bg-muted/40 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Coaching 1 a 1
        </p>
        <p className="mt-5 text-xl sm:text-2xl font-display leading-snug tracking-tight">
          ¿Quieres que alguien arme esto a tu medida y esté pendiente de ti?
        </p>
        <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
          Aplica para coaching 1 a 1.
        </p>
        <div className="mt-8 flex justify-center">
          <ApplyCoachingButton />
        </div>
      </div>
    </section>
  );
}
