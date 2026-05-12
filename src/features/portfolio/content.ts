import type { PortfolioPageContent } from "./types";

export const portfolioContent: PortfolioPageContent = {
  nav: [
    { label: "About", href: "#hero" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#proof-1" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" }
  ],
  social: [
    { label: "GitHub", href: "https://github.com/sa2447", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/scott-armstrong-mcintosh-b2474340a/", external: true }
  ],
  hero: {
    headline: "Designing modern interfaces with clarity and precision.",
    supportingText:
      "I am an aspiring front-end developer focused on intelligent architecture, clean interaction systems, and high-performance user experiences.",
    ctas: [
      { label: "View Work", href: "#proof-1" },
      { label: "GitHub", href: "https://github.com/sa2447", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/scott-armstrong-mcintosh-b2474340a/", external: true }
    ],
    visualVariant: "grid"
  },
  expertise: {
    title: "Expertise",
    groups: [
      {
        id: "frontend-engineering",
        title: "Front-End Engineering",
        bullets: [
          "React and Next.js architecture",
          "Type-safe UI development",
          "Responsive systems",
          "Accessibility-first patterns",
          "State orchestration"
        ]
      },
      {
        id: "ui-systems",
        title: "UI Systems",
        bullets: [
          "Design system foundations",
          "Reusable component APIs",
          "Interaction design",
          "Motion hierarchy",
          "Scalable styling"
        ]
      },
      {
        id: "modern-web",
        title: "Modern Web",
        bullets: [
          "Performance optimization",
          "API integration patterns",
          "Data-heavy interfaces",
          "Real-time UX architecture",
          "AI-enhanced product surfaces"
        ]
      }
    ]
  },
  proofBlocks: [
    {
      id: "proof-1",
      label: "Featured Build",
      name: "AI Research Assistant",
      description:
        "The AI Research Assistant is a finished, production-ready document intelligence platform that transforms static PDFs into interactive, citation-grounded conversations. Users can upload documents, run semantic retrieval across embedded content, and chat in real time with streamed responses that are constrained to source context for higher factual reliability. The application includes robust chat persistence, saved conversation management, clear error handling, hydration-safe React patterns, and a polished responsive interface, delivering an end-to-end research workflow from ingestion to answer generation.",
      features: [
        { id: "f1", text: "Transforms static PDFs into interactive, citation-grounded conversations" },
        { id: "f2", text: "Runs semantic retrieval across embedded content for reliable answers" },
        { id: "f3", text: "Streams real-time chat with robust conversation persistence" },
        { id: "f4", text: "Includes hydration-safe React patterns and polished responsive UX" }
      ],
      stack: [
        { id: "p1-react-19", label: "React 19" },
        { id: "p1-next-16", label: "Next.js 16 (App Router)" },
        { id: "p1-typescript", label: "TypeScript" },
        { id: "p1-tailwind-4", label: "Tailwind CSS 4" },
        { id: "p1-supabase", label: "Supabase (PostgreSQL, Storage, pgvector)" },
        { id: "p1-openai", label: "OpenAI API (streaming chat)" },
        { id: "p1-rag", label: "Retrieval-Augmented Generation (RAG)" },
        { id: "p1-pdf", label: "PDF processing with pdfjs-dist" },
        { id: "p1-hooks", label: "Custom React hooks and Context API" },
        { id: "p1-testing", label: "ESLint and Jest + React Testing Library" }
      ],
      media: {
        src: "/ai_research.png",
        alt: "AI Research Assistant project preview",
        aspectRatio: "16:10"
      },
      ctas: [
        { label: "View Project", href: "https://is219airesearchassistant.vercel.app/", external: true },
        { label: "View Code", href: "https://github.com/sa2447/AI_Research_Assistant", external: true }
      ],
      desktopMediaSide: "right"
    },
    {
      id: "proof-2",
      label: "Experimental Build",
      name: "Student Reality Check",
      description:
        "Student Reality Check is a full-stack cost-of-living comparison web application that enables users to evaluate affordability across U.S. states, save personalized analysis snapshots, and explore reliable, versioned data through a fast and secure user experience. Engineered with modern web architecture and deployment-ready practices, the project demonstrates end-to-end product development, from database design and authentication to data pipeline automation and cloud-ready delivery.",
      features: [
        { id: "f5", text: "Compares U.S. state cost-of-living data with fast full-stack UX" },
        { id: "f6", text: "Supports personalized saved affordability analysis snapshots" },
        { id: "f7", text: "Implements secure authentication and session management" },
        { id: "f8", text: "Automates versioned data pipeline workflows for reliable insights" }
      ],
      stack: [
        { id: "p2-react-next", label: "React and Next.js" },
        { id: "p2-typescript", label: "TypeScript" },
        { id: "p2-postgresql", label: "PostgreSQL" },
        { id: "p2-prisma", label: "Prisma migrations" },
        { id: "p2-auth", label: "Auth.js / NextAuth" },
        { id: "p2-api-ssr", label: "API routes and server-side rendering" },
        { id: "p2-docker", label: "Docker and Docker Compose" },
        { id: "p2-vercel", label: "Vercel deployment" }
      ],
      media: {
        src: "/student_reality.png",
        alt: "Student Reality Check project preview",
        aspectRatio: "16:10"
      },
      ctas: [
        { label: "View Project", href: "https://improvedlab.vercel.app/", external: true },
        { label: "View Code", href: "https://github.com/sa2447/improved_lab", external: true }
      ],
      desktopMediaSide: "left"
    }
  ],
  philosophy: {
    title: "Building interfaces that reduce cognitive friction.",
    supportingText:
      "I prioritize clarity, performance, and maintainable systems so complex products remain intuitive as they grow.",
    principles: [
      "Clarity over decoration",
      "Performance as UX",
      "Accessibility as baseline quality",
      "Systemized components over one-off styling",
      "Maintainability under growth"
    ]
  },
  contact: {
    prompt: "Interested in building thoughtful digital systems together?",
    links: [
      { label: "GitHub", href: "https://github.com/sa2447", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/scott-armstrong-mcintosh-b2474340a/", external: true },
      { label: "Email", href: "mailto:sa2447@njit.edu", external: true }
    ]
  },
  footer: {
    text: ""
  }
};
