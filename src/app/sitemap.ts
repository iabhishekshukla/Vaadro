import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vaadro.com";
  
  const routes = [
    "",
    "/about",
    "/products",
    "/gallery",
    "/owner",
    "/certifications",
    "/delivery",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/products" ? 0.9 : 0.8,
  }));
}
