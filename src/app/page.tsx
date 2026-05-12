import { ContactSection } from "@/components/sections/ContactSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScrollytellingController } from "@/components/motion/ScrollytellingController";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProofBlockSection } from "@/components/sections/ProofBlockSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteShell } from "@/components/layout/SiteShell";
import { StickyHeader } from "@/components/layout/StickyHeader";
import { portfolioContent } from "@/features/portfolio/content";

export default function HomePage() {
  const [proofOne, proofTwo] = portfolioContent.proofBlocks;

  return (
    <SiteShell>
      <ScrollytellingController />
      <StickyHeader links={portfolioContent.nav} socialLinks={portfolioContent.social} />
      <HeroSection
        id="hero"
        headline={portfolioContent.hero.headline}
        supportingText={portfolioContent.hero.supportingText}
        ctas={portfolioContent.hero.ctas}
        visualVariant={portfolioContent.hero.visualVariant}
      />
      <ExpertiseSection id="expertise" title={portfolioContent.expertise.title} groups={portfolioContent.expertise.groups} />
      <ProofBlockSection
        id={proofOne.id}
        label={proofOne.label}
        name={proofOne.name}
        description={proofOne.description}
        features={proofOne.features}
        stack={proofOne.stack}
        media={proofOne.media}
        ctas={proofOne.ctas}
        desktopMediaSide={proofOne.desktopMediaSide}
      />
      <ProofBlockSection
        id={proofTwo.id}
        label={proofTwo.label}
        name={proofTwo.name}
        description={proofTwo.description}
        features={proofTwo.features}
        stack={proofTwo.stack}
        media={proofTwo.media}
        ctas={proofTwo.ctas}
        desktopMediaSide={proofTwo.desktopMediaSide}
      />
      <PhilosophySection
        id="philosophy"
        title={portfolioContent.philosophy.title}
        supportingText={portfolioContent.philosophy.supportingText}
        principles={portfolioContent.philosophy.principles}
      />
      <ContactSection id="contact" prompt={portfolioContent.contact.prompt} links={portfolioContent.contact.links} />
      <SiteFooter text={portfolioContent.footer.text} />
    </SiteShell>
  );
}
