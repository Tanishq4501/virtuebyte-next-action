import HeroImagePreload from "@/components/ui/HeroImagePreload";
import { HERO_IMAGES } from "@/lib/hero-images";

export default function VirtuNestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroImagePreload href={HERO_IMAGES.virtunestHero} />
      {children}
    </>
  );
}
