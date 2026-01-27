import { siteUrl } from "@/lib/utils";
import { MetadataRoute } from "next";

export function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl.toString(),
      lastModified: new Date(),
    },
  ];
}
