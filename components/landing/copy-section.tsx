import { SectionLabel, SectionShell } from "./section-shell";

type Props = {
  id: string;
  title: string;
  copy: string;
  variant?: "default" | "surface";
  fullHeight?: boolean;
};

export function CopySection({
  id,
  title,
  copy,
  variant = "default",
  fullHeight = true,
}: Props) {
  return (
    <SectionShell id={id} variant={variant} fullHeight={fullHeight}>
      <div className="container max-w-3xl">
        <SectionLabel>{title}</SectionLabel>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 md:mb-10">
          {title}
        </h2>

        <p className="text-muted leading-relaxed text-base md:text-lg max-w-2xl">
          {copy}
        </p>
      </div>
    </SectionShell>
  );
}
