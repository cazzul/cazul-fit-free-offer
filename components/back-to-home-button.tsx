import Link from "next/link";
import { Button } from "@/components/landing/ui/button";

export function BackToHomeButton() {
  return (
    <div className="theme-marketing-actions inline-flex">
      <Button asChild variant="outline" size="sm">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
