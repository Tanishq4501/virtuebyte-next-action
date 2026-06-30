import Link from "next/link";

export default function NotFound() {
 return (
 <section className="min-h-[60vh] flex items-center justify-center py-20">
 <div className="text-center px-4">
 <h1 className="text-6xl md:text-8xl font-bold text-primary font-fira mb-4">404</h1>
 <h2 className="text-2xl lg:text-3xl font-bold text-dark font-fira mb-4">
 Page Not Found
 </h2>
 <p className="text-gray-medium mb-8 max-w-md mx-auto">
 The page you&apos;re looking for doesn&apos;t exist or has been moved.
 </p>
 <Link
 href="/"
 className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors shadow-md"
 >
 Back to Home
 </Link>
 </div>
 </section>
 );
}

