"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface NavSection {
  id: string;
  label: string;
  count: number;
}

export const OffersNav = ({ sections }: { sections: NavSection[] }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const { id } of sections) {
      const element = document.querySelector(`#${id}`);
      if (element) {
        observer.observe(element);
      }
    }
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const link = scroller?.querySelector<HTMLAnchorElement>(
      `a[href="#${activeId}"]`
    );
    if (scroller && link) {
      scroller.scrollTo({
        left: link.offsetLeft - (scroller.clientWidth - link.offsetWidth) / 2,
      });
    }
  }, [activeId]);

  return (
    <nav
      aria-label="Ofertas por categoria"
      className="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur"
    >
      <div
        ref={scrollerRef}
        className="mx-auto flex max-w-7xl [scrollbar-width:none] gap-2 overflow-x-auto px-4 py-3 sm:px-7 [&::-webkit-scrollbar]:hidden"
      >
        {sections.map((section) => {
          const isActive = section.id === activeId;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-base font-semibold transition-colors",
                isActive
                  ? "border-ink bg-ink text-white"
                  : "text-stone hover:border-ink/40 hover:text-ink border-black/10 bg-white"
              )}
            >
              {section.label}
              <span
                className={cn(
                  "rounded-full px-1.5 text-xs tabular-nums",
                  isActive ? "bg-gold text-ink" : "bg-paper text-stone"
                )}
              >
                {section.count}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
