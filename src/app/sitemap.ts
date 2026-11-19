import type { MetadataRoute } from "next";
import { primaryPages } from "@/lib/navigation";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  return primaryPages.map((page) => ({
    url: `${base}${page.path === "/" ? "" : page.path}`,
    lastModified: "2026-01-01",
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
