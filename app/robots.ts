import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["http://cafesports.club/"], // Bloquea HTTP
      },
    ],
    sitemap: "https://cafesports.club/sitemap.xml",
  };
}
