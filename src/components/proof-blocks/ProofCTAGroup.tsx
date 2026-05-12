import type { LinkTarget } from "@/features/portfolio/types";
import { CTAButton } from "@/components/ui/CTAButton";

type ProofCTAGroupProps = {
  links: LinkTarget[];
};

export function ProofCTAGroup({ links }: ProofCTAGroupProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, index) => (
        <CTAButton
          key={`${link.label}-${index}`}
          label={link.label}
          href={link.href}
          external={link.external}
          variant={index === 0 ? "primary" : "secondary"}
        />
      ))}
    </div>
  );
}
