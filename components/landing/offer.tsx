import { brand } from "@/lib/brand";
import { CopySection } from "./copy-section";

export function Offer() {
  return (
    <CopySection
      id="offer"
      title={brand.offer.title}
      copy={brand.offer.copy}
    />
  );
}
