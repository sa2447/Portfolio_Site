export type LinkTarget = {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

export type StackTag = {
  id: string;
  label: string;
};

export type FeatureItem = {
  id: string;
  text: string;
};

export type ExpertiseGroup = {
  id: string;
  title: string;
  bullets: string[];
};

export type ProofBlock = {
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

export type PortfolioPageContent = {
  nav: LinkTarget[];
  social: LinkTarget[];
  hero: {
    headline: string;
    supportingText: string;
    ctas: LinkTarget[];
    visualVariant: "grid" | "diagram" | "wave";
  };
  expertise: {
    title: string;
    groups: ExpertiseGroup[];
  };
  proofBlocks: ProofBlock[];
  philosophy: {
    title: string;
    supportingText: string;
    principles: string[];
  };
  contact: {
    prompt: string;
    links: LinkTarget[];
  };
  footer: {
    text: string;
  };
};
