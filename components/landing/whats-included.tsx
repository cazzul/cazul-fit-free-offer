import {
  BookOpen,
  CalendarCheck,
  Dumbbell,
  MessageCircle,
  Salad,
  Video,
} from "lucide-react";
import { brand } from "@/lib/brand";
import { SectionLabel, SectionShell } from "./section-shell";

const icons = [Dumbbell, Salad, CalendarCheck, Video, MessageCircle, BookOpen];

export function WhatsIncluded() {
  return (
    <SectionShell id="que-incluye" variant="surface">
      <div className="container">
        <SectionLabel>{brand.included.title}</SectionLabel>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-12 md:mb-16">
          {brand.included.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {brand.included.cards.map((card, index) => {
            const Icon = icons[index] ?? Dumbbell;
            return (
              <div
                key={card.title}
                className="bg-surface p-8 md:p-10 group hover:bg-surface-muted transition-colors duration-300"
              >
                <Icon
                  className="w-5 h-5 text-primary mb-6 opacity-70 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-xl mb-2">{card.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
