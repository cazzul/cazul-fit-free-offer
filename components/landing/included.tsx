import {
  CalendarCheck,
  ClipboardCheck,
  Dumbbell,
  MessageCircle,
  Salad,
} from "lucide-react";
import { brand } from "@/lib/brand";

const icons = [Dumbbell, Salad, ClipboardCheck, CalendarCheck, MessageCircle];

export function Included() {
  return (
    <section id="included" className="relative z-10 py-24 md:py-32 bg-background">
      <div className="container">
        <div className="section-divider mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted whitespace-nowrap">
            Coaching 1:1
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-center mb-4">
          {brand.included.title}
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
          {brand.included.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {brand.included.features.map((feature, index) => {
            const Icon = icons[index] ?? Dumbbell;
            return (
              <div
                key={feature.title}
                className="bg-surface p-8 md:p-10 group hover:bg-surface-muted transition-colors duration-300"
              >
                <Icon
                  className="w-5 h-5 text-primary mb-6 opacity-70 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="section-divider mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted whitespace-nowrap">
              Cómo funciona
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.included.howItWorks.map((step) => (
              <div
                key={step.step}
                className="border border-border p-8 md:p-10 bg-surface"
              >
                <p className="font-serif text-4xl text-primary/40 mb-4">
                  {step.step}
                </p>
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
