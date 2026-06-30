"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyBackgroundProps {
  src: string;
  className?: string;
  rootMargin?: string;
  children?: ReactNode;
}

/** Loads a CSS background image when the container nears the viewport. */
export default function LazyBackground({
  src,
  className = "absolute inset-0 bg-cover bg-center bg-no-repeat",
  rootMargin = "320px 0px",
  children,
}: LazyBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        observer.disconnect();
        setLoaded(true);
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className="absolute inset-0" aria-hidden>
      {loaded ? (
        <div className={className} style={{ backgroundImage: `url('${src}')` }} />
      ) : null}
      {children}
    </div>
  );
}
