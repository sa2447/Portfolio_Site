import { FeatureList } from "@/components/proof-blocks/FeatureList";
import { ProofCTAGroup } from "@/components/proof-blocks/ProofCTAGroup";
import { ProofMediaFrame } from "@/components/proof-blocks/ProofMediaFrame";
import { StackTagList } from "@/components/proof-blocks/StackTagList";
import type { FeatureItem, LinkTarget, StackTag } from "@/features/portfolio/types";

type ProofBlockSectionProps = {
  id: string;
  label: string;
  name: string;
  description: string;
  features: FeatureItem[];
  stack: StackTag[];
  media: {
    src: string;
    alt: string;
    aspectRatio: "16:10" | "16:9";
  };
  ctas: LinkTarget[];
  desktopMediaSide: "left" | "right";
};

export function ProofBlockSection({
  id,
  label,
  name,
  description,
  features,
  stack,
  media,
  ctas,
  desktopMediaSide
}: ProofBlockSectionProps) {
  const textOrderClass = desktopMediaSide === "left" ? "lg:order-2" : "lg:order-1";
  const mediaOrderClass = desktopMediaSide === "left" ? "lg:order-1" : "lg:order-2";

  return (
    <section id={id} data-story-section="true" className="section-space story-section">
      <div className="container max-w-[1200px]">
        <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-[color:var(--surface-700)]/45 p-5 md:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
          <div className={`order-1 lg:col-span-6 ${textOrderClass}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">{label}</p>
            <h3 className="text-2xl font-semibold leading-tight text-white md:text-4xl">{name}</h3>
            <p className="mt-4 max-w-xl text-[color:var(--text-secondary)]">{description}</p>

            <div className="mt-6">
              <FeatureList items={features} />
            </div>

            <div className="mt-6">
              <StackTagList tags={stack} />
            </div>

            <div className="mt-7">
              <ProofCTAGroup links={ctas} />
            </div>
          </div>

          <div className={`order-2 lg:col-span-6 ${mediaOrderClass}`}>
            <ProofMediaFrame src={media.src} alt={media.alt} aspectRatio={media.aspectRatio} />
          </div>
        </div>
      </div>
    </section>
  );
}
