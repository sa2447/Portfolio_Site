"use client";

import { useCallback, useEffect, useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import type { LinkTarget } from "@/features/portfolio/types";

type ContactSectionProps = {
  id: string;
  prompt: string;
  links: LinkTarget[];
};

export function ContactSection({ id, prompt, links }: ContactSectionProps) {
  const [showCopiedToast, setShowCopiedToast] = useState(false);

  const copyEmail = useCallback(async (emailAddress: string) => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch {
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = emailAddress;
      tempTextArea.setAttribute("readonly", "");
      tempTextArea.style.position = "absolute";
      tempTextArea.style.left = "-9999px";
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
    }

    setShowCopiedToast(true);
  }, []);

  useEffect(() => {
    if (!showCopiedToast) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setShowCopiedToast(false);
    }, 1800);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [showCopiedToast]);

  return (
    <>
      <SectionContainer id={id} narrow>
        <div className="rounded-2xl border border-white/10 bg-[color:var(--surface-700)]/45 px-5 py-8 text-center md:px-8 md:py-12">
        <h2 className="mx-auto max-w-2xl text-2xl font-semibold leading-tight md:text-4xl">{prompt}</h2>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {links.map((link, index) => (
            link.href.startsWith("mailto:") ? (
              <button
                key={`${link.label}-${index}`}
                type="button"
                onClick={() => copyEmail(link.href.replace("mailto:", ""))}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-[color:var(--accent)]"
              >
                {link.label}
              </button>
            ) : (
              <CTAButton
                key={`${link.label}-${index}`}
                label={link.label}
                href={link.href}
                external={link.external}
                variant={index === 0 ? "primary" : "secondary"}
              />
            )
          ))}
        </div>
        </div>
      </SectionContainer>

      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-md border border-white/15 bg-[color:var(--surface-700)]/95 px-4 py-2 text-sm text-[color:var(--text-primary)] shadow-lg transition duration-200 ${
          showCopiedToast ? "opacity-100" : "opacity-0"
        }`}
      >
        Email address copied to clipboard.
      </div>
    </>
  );
}
