/**
 * Coordinates below-the-fold section chunk loads so they don't compete with LCP.
 */

type SectionLoader<T> = () => Promise<T>;

let sectionQueue: Promise<void> = Promise.resolve();

/** Run section dynamic imports one at a time after prior chunks finish. */
export function scheduleSectionLoad<T>(loader: SectionLoader<T>): Promise<T> {
  const task = sectionQueue.then(() => loader());
  sectionQueue = task.then(
    () => undefined,
    () => undefined,
  );
  return task;
}

/** Desktop: load sections only when near viewport. Mobile: prefetch a bit earlier. */
export function getSectionObserverRootMargin(): string {
  if (typeof window === "undefined") {
    return "120px 0px";
  }
  return window.matchMedia("(min-width: 1024px)").matches
    ? "80px 0px"
    : "200px 0px";
}

/** Wait until initial document + critical resources before loading deferred chunks. */
export function whenReadyForDeferredLoads(callback: () => void): () => void {
  const run = (): (() => void) => {
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(callback, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(callback, 800);
    return () => window.clearTimeout(timer);
  };

  if (typeof document === "undefined") {
    return () => {};
  }

  if (document.readyState === "complete") {
    return run();
  }

  let cancel: () => void = () => {};
  const onLoad = () => {
    cancel = run();
  };
  window.addEventListener("load", onLoad, { once: true });
  return () => {
    window.removeEventListener("load", onLoad);
    cancel();
  };
}
