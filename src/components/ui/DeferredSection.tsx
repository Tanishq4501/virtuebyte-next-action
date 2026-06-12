"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";
import {
  homeSectionLoaders,
  type HomeSectionKey,
} from "@/lib/lazy-sections";
import {
  getSectionObserverRootMargin,
  scheduleSectionLoad,
  whenReadyForDeferredLoads,
} from "@/lib/resource-loading";

interface DeferredSectionProps {
  section: HomeSectionKey;
  minHeight?: string;
  rootMargin?: string;
}

/**
 * Loads a section chunk only when it nears the viewport (reduces initial JS parse/execute).
 */
export default function DeferredSection({
  section,
  minHeight = "160px",
  rootMargin,
}: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [Section, setSection] = useState<ComponentType | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || Section) {
      return;
    }

    let observer: IntersectionObserver | null = null;

    const cancelReady = whenReadyForDeferredLoads(() => {
      const margin = rootMargin ?? getSectionObserverRootMargin();

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            return;
          }
          observer?.disconnect();
          void scheduleSectionLoad(() => homeSectionLoaders[section]()).then(
            (mod) => setSection(() => mod.default),
          );
        },
        { rootMargin: margin },
      );

      observer.observe(element);
    });

    return () => {
      cancelReady();
      observer?.disconnect();
    };
  }, [section, Section, rootMargin]);

  return (
    <div ref={containerRef} style={Section ? undefined : { minHeight }}>
      {Section ? <Section /> : null}
    </div>
  );
}
