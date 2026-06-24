import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-10 bg-surface">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted text-center md:text-left">
          {brand.footer.copyright}
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="#apply"
            className="font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors"
          >
            Aplicar
          </a>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors"
          >
            {brand.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}
