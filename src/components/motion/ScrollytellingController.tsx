"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, select, summary, [role='button'], [role='link']";

function getStorySections(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-story-section='true']"));
}

function clampIndex(index: number, total: number): number {
  if (total <= 0) {
    return 0;
  }

  if (index < 0) {
    return total - 1;
  }

  if (index >= total) {
    return 0;
  }

  return index;
}

export function ScrollytellingController() {
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const sections = getStorySections();
    if (sections.length === 0) {
      return;
    }

    document.body.classList.add("scrolly-enabled");

    const updateActiveStyles = (index: number) => {
      sections.forEach((section, sectionIndex) => {
        const isActive = sectionIndex === index;
        section.dataset.active = isActive ? "true" : "false";
      });
    };

    const scrollToIndex = (nextIndex: number) => {
      const resolvedIndex = clampIndex(nextIndex, sections.length);
      activeIndexRef.current = resolvedIndex;
      updateActiveStyles(resolvedIndex);
      sections[resolvedIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) {
          return;
        }

        const mostVisible = visibleEntries[0].target as HTMLElement;
        const index = sections.findIndex((section) => section === mostVisible);
        if (index >= 0) {
          activeIndexRef.current = index;
          updateActiveStyles(index);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.7],
        rootMargin: "-12% 0px -12% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    updateActiveStyles(activeIndexRef.current);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "Space" && event.key !== " ") {
        return;
      }

      const target = event.target as HTMLElement | null;
      const isTypingContext =
        target?.matches("input, textarea, select") || target?.isContentEditable || target?.closest(INTERACTIVE_SELECTOR);

      if (isTypingContext) {
        return;
      }

      event.preventDefault();
      scrollToIndex(activeIndexRef.current + 1);
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }

      const touch = event.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchStartTime = Date.now();
    };

    const onTouchEnd = (event: TouchEvent) => {
      const changedTouch = event.changedTouches[0];
      if (!changedTouch) {
        return;
      }

      const deltaX = Math.abs(changedTouch.clientX - touchStartX);
      const deltaY = Math.abs(changedTouch.clientY - touchStartY);
      const duration = Date.now() - touchStartTime;
      const target = event.target as HTMLElement | null;

      const isTap = deltaX < 12 && deltaY < 12 && duration < 280;
      const tappedInteractive = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      if (!isTap || tappedInteractive) {
        return;
      }

      scrollToIndex(activeIndexRef.current + 1);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      document.body.classList.remove("scrolly-enabled");
    };
  }, []);

  return null;
}
