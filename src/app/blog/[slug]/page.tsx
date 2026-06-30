import { Metadata } from "next";
import LazyImage from "@/components/ui/LazyImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog";
import { getCanonicalUrl, toMetaDescription } from "@/lib/seo";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
 params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
 const slugs = getAllSlugs();
 return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const post = getPostBySlug(slug);
 if (!post) return { title: "Post Not Found" };

 const canonical = getCanonicalUrl(`/blog/${slug}/`);
 const description = post.metaDescription || toMetaDescription(post.excerpt);

 return {
 title: post.title,
 description,
 alternates: {
 canonical,
 },
 openGraph: {
 title: post.title,
 description,
 type: "article",
 images: [post.featuredImage],
 url: canonical,
 },
 };
}

export default async function BlogPostPage({ params }: Props) {
 const { slug } = await params;
 const post = getPostBySlug(slug);
 if (!post) notFound();

 const allPosts = getAllPosts();
 const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
 const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

 const shareUrl = `https://virtuebytech.com/blog/${slug}/`;

 return (
 <>
 <Breadcrumb
 titleAs="p"
 items={[
 { label: "Blog", href: "/blog/" },
 { label: post.title },
 ]}
 />

 <article className="relative py-[50px] px-5 md:px-0 overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(at_center_left,#F6921E_0%,#FFFFFF00_50%)] opacity-10 pointer-events-none" />
 <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
 {/* Main Content */}
 <div className="lg:col-span-2">
 <h1 className="text-[26px] md:text-[36px] font-semibold text-white font-fira mb-4" style={{ lineHeight: '1.3em' }}>
 {post.title}
 </h1>
 <div className="w-16 h-1 bg-primary rounded-full mb-6" />

 {/* Featured Image */}
 <div className="relative w-full h-64 md:h-96 rounded-[20px] overflow-hidden mb-8">
 <LazyImage
 src={post.featuredImage}
 alt={`${post.title} featured image`}
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 66vw"
 priority
 />
 </div>

 {/* MDX Content */}
 <div className="blog-content">
 <MDXRemote source={post.content} />
 </div>

 {/* Divider */}
 <div className="my-8 border-t border-[#E5A2FF0A]" />

 {/* Social Share */}
 <div className="flex items-center gap-3">
 <span className="font-semibold text-white text-[15px]">Share:</span>
 <div className="flex gap-2">
 <a
 href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
 target="_blank"
 rel="noopener noreferrer"
 className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
 >
 <FaFacebookF className="w-4 h-4" />
 </a>
 <a
 href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
 target="_blank"
 rel="noopener noreferrer"
 className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-opacity"
 >
 <FaXTwitter className="w-4 h-4" />
 </a>
 <a
 href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}`}
 target="_blank"
 rel="noopener noreferrer"
 className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
 >
 <FaLinkedinIn className="w-4 h-4" />
 </a>
 <a
 href={`https://t.me/share/url?url=${shareUrl}&text=${post.title}`}
 target="_blank"
 rel="noopener noreferrer"
 className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
 >
 <FaTelegramPlane className="w-4 h-4" />
 </a>
 </div>
 </div>
 </div>

 {/* Sidebar */}
 <aside className="bg-[#1a0e3a] rounded-[20px] p-6 h-fit">
 <h3 className="text-xl font-semibold font-fira text-white mb-3">Recent Posts</h3>
 <div className="w-12 h-[3px] bg-primary rounded-full mb-6" />
 <div className="space-y-5">
 {recentPosts.map((p) => (
 <Link
 key={p.slug}
 href={`/blog/${p.slug}/`}
 className="flex gap-4 group items-center"
 >
 <div className="relative w-[70px] h-[70px] rounded-[10px] overflow-hidden flex-shrink-0">
 <LazyImage
 src={p.featuredImage}
 alt={`${p.title} thumbnail`}
 fill
 className="object-cover"
 sizes="70px"
 />
 </div>
 <h4 className="text-[14px] font-medium text-text-light group-hover:text-primary transition-colors line-clamp-2 leading-snug">
 {p.title}
 </h4>
 </Link>
 ))}
 </div>
 </aside>
 </div>

 {/* Related Blog Posts */}
 {relatedPosts.length > 0 && (
 <div className="mt-16">
 <div className="flex items-center justify-between mb-8">
 <div>
 <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-1 mb-2">
 <span className="text-primary">✦</span> Articles
 </span>
 <h2 className="text-[26px] md:text-[36px] font-semibold font-fira text-white" style={{ lineHeight: '1.3em' }}>Related Blog Posts</h2>
 </div>
 <Link href="/blog/" className="bg-primary text-white font-semibold text-sm px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(246,146,30,0.5)] transition-all uppercase tracking-wide whitespace-nowrap">
 View All →
 </Link>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {relatedPosts.map((p) => (
 <div key={p.slug} className="relative bg-[#E5A2FF0A] rounded-[20px] overflow-hidden border border-[#E5A2FF0A] hover:shadow-[0px_5px_30px_0px_rgba(0,0,0,0.41)] transition-all duration-300 hover-bob flex flex-col">
 <div className="absolute inset-0 bg-[radial-gradient(at_top_left,#F6921E_0%,#FFFFFF00_50%)] opacity-20 pointer-events-none rounded-[20px]" />
 <div className="relative h-44 overflow-hidden rounded-t-[20px]">
 <LazyImage
 src={p.featuredImage}
 alt={`${p.title} related post image`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 33vw"
 />
 </div>
 <div className="relative p-5 flex flex-col flex-1">
 <h3 className="text-[18px] font-semibold font-fira text-white line-clamp-2 leading-[1.4em] mb-2">
 {p.title}
 </h3>
 <p className="text-text-light text-[14px] leading-relaxed line-clamp-3 mb-4 flex-1">
 {p.excerpt}
 </p>
 <Link
 href={`/blog/${p.slug}/`}
 className="inline-block bg-primary text-white font-semibold text-[13px] px-5 py-2 rounded-[8px] hover:shadow-[0_0_20px_rgba(246,146,30,0.5)] transition-all uppercase tracking-wide self-start"
 >
 Learn More
 </Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 )}
 </div>
 </article>
 </>
 );
}
