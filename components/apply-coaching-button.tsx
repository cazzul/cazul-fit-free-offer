import Link from "next/link";
import { brand } from "@/lib/brand";
import { Button } from "@/components/landing/ui/button";

export function ApplyCoachingButton() {
  return (
    <div className="theme-marketing-actions inline-flex">
      <Button asChild>
        <Link href="/#apply">{brand.hero.applyCta}</Link>
      </Button>
    </div>
  );
}
