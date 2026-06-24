import { brand } from "@/lib/brand";
import { CopySection } from "./copy-section";

export function Audience() {
  return (
    <CopySection
      id="para-quien"
      title={brand.audience.title}
      copy={brand.audience.copy}
    />
  );
}
