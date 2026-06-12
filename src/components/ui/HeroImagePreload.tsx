interface HeroImagePreloadProps {
  href: string;
}

/** Hoisted to document head by Next.js App Router. */
export default function HeroImagePreload({ href }: HeroImagePreloadProps) {
  return (
    <link
      rel="preload"
      as="image"
      href={href}
      type="image/webp"
      fetchPriority="high"
    />
  );
}
