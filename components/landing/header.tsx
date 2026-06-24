import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "./mobile-menu";

const navItems = [
  { label: "Sobre mí", href: "#about" },
  { label: "Qué incluye", href: "#que-incluye" },
  { label: "Cómo funciona", href: "#como-funciona" },
];

export const Header = () => {
  return (
    <div className="fixed z-50 pt-4 md:pt-5 top-0 left-0 w-full bg-background/90 backdrop-blur-sm border-b border-border/60">
      <header className="flex items-center justify-between container pb-4 md:pb-5">
        <Link href="/" className="block shrink-0" aria-label="Cazul Fit">
          <Image
            src="/images/cazul-fit-logo.png"
            alt="Cazul Fit"
            width={420}
            height={320}
            className="h-16 w-auto md:h-20 object-contain object-left dark:brightness-0 dark:invert"
            priority
          />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {navItems.map((item) => (
            <Link
              className="uppercase inline-block font-mono text-xs tracking-[0.2em] text-muted hover:text-foreground duration-150 transition-colors ease-out"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-xs tracking-[0.2em] text-primary hover:text-primary/80"
            href="#apply"
          >
            Aplicar
          </Link>
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};
