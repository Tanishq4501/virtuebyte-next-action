import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import fs from "fs";
import path from "path";

export const revalidate = 60;

const BASE_URL = "https://virtuebytech.com";
const DEFAULT_LAST_MODIFIED = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  // Dynamically reads all blog MDX files — new posts are auto-included on next revalidation
  const posts = getAllPosts();

  const blogSitemaps: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const staticRoutes: Array<{
    route: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { route: "/", changeFrequency: "weekly", priority: 1.0 },
    { route: "/about", changeFrequency: "monthly", priority: 0.8 },
    { route: "/services", changeFrequency: "monthly", priority: 0.9 },
    { route: "/products", changeFrequency: "monthly", priority: 0.9 },
    { route: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
    { route: "/blog", changeFrequency: "weekly", priority: 0.9 },
    { route: "/contact", changeFrequency: "yearly", priority: 0.7 },
    { route: "/services/salesforce-implementation", changeFrequency: "monthly", priority: 0.8 },
    { route: "/services/ai-ml-consulting", changeFrequency: "monthly", priority: 0.8 },
    { route: "/services/data-science-analytics", changeFrequency: "monthly", priority: 0.8 },
    { route: "/services/offshore-development-centers", changeFrequency: "monthly", priority: 0.8 },
    { route: "/services/cloud-services", changeFrequency: "monthly", priority: 0.8 },
    { route: "/services/devops-consulting-services", changeFrequency: "monthly", priority: 0.8 },
    { route: "/products/virtuelite", changeFrequency: "monthly", priority: 0.8 },
    { route: "/products/virtunest", changeFrequency: "monthly", priority: 0.8 },
  ];

  const staticSitemaps: MetadataRoute.Sitemap = staticRoutes.map(({ route, changeFrequency, priority }) => ({
    url: `${BASE_URL}${route}/`,
    lastModified: DEFAULT_LAST_MODIFIED,
    changeFrequency,
    priority,
  }));

  // Read custom sitemap configuration from Keystatic
  let customSitemaps: MetadataRoute.Sitemap = [];
  try {
    const sitemapPath = path.join(process.cwd(), "content", "sitemap-config.json");
    if (fs.existsSync(sitemapPath)) {
      const sitemapData = JSON.parse(fs.readFileSync(sitemapPath, "utf-8"));
      if (sitemapData.urls && Array.isArray(sitemapData.urls)) {
        customSitemaps = sitemapData.urls.map((entry: { path?: string; priority?: number }) => {
          let customPath = entry.path || "";
          if (customPath.startsWith("/")) customPath = customPath.substring(1);
          return {
            url: `${BASE_URL}/${customPath}${customPath ? "/" : ""}`,
            lastModified: DEFAULT_LAST_MODIFIED,
            changeFrequency: "monthly" as const,
            priority: entry.priority !== undefined ? entry.priority : 0.8,
          };
        });
      }
    }
  } catch (e) {
    console.error("Error reading sitemap custom URLs", e);
  }

  return [...staticSitemaps, ...blogSitemaps, ...customSitemaps];
}

