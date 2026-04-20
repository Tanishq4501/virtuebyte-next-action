import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
 slug: string;
 title: string;
 date: string;
 updatedAt: string; // ISO timestamp from file system mtime — reflects actual last edit
 excerpt: string;
 metaDescription: string;
 featuredImage: string;
 tags: string[];
 content: string;
}

export function getAllPosts(): BlogPost[] {
 if (!fs.existsSync(BLOG_DIR)) return [];

 const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

 const posts = files.map((file) => {
 const slug = file.replace(/\.mdx$/, "");
 const filePath = path.join(BLOG_DIR, file);
 const fileContent = fs.readFileSync(filePath, "utf-8");
 const { data, content } = matter(fileContent);
 const mtime = fs.statSync(filePath).mtime;

 return {
 slug,
 title: data.title || "",
 date: data.date || "",
 updatedAt: mtime.toISOString(),
 excerpt: data.excerpt || "",
 metaDescription: data.metaDescription || "",
 featuredImage: data.featuredImage || "",
 tags: data.tags || [],
 content,
 };
 });

 return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
 const posts = getAllPosts();
 return posts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
 if (!fs.existsSync(BLOG_DIR)) return [];
 return fs
.readdirSync(BLOG_DIR)
.filter((f) => f.endsWith(".mdx"))
.map((f) => f.replace(/\.mdx$/, ""));
}

