import Image, { type ImageProps } from "next/image";

export type LazyImageProps = ImageProps & {
  /** Set for LCP / above-the-fold images only */
  priority?: boolean;
};

/**
 * Next/Image with lazy loading by default (non-critical assets).
 */
export default function LazyImage({
  priority = false,
  loading,
  fetchPriority,
  ...props
}: LazyImageProps) {
  const resolvedFetchPriority =
    fetchPriority ?? (priority ? "high" : undefined);

  return (
    <Image
      {...props}
      priority={priority}
      loading={priority ? undefined : (loading ?? "lazy")}
      fetchPriority={resolvedFetchPriority}
      decoding="async"
    />
  );
}
