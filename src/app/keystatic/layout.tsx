/**
 * Keystatic layout — passes children straight through.
 * The site Header/Footer are hidden by ConditionalLayout
 * in the root layout based on the /keystatic pathname.
 */
export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
