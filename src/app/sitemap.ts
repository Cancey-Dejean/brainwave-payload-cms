import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config });

  const [pages] = await Promise.all([
    payload.find({
      collection: "pages",
    }),
  ]);

  const allPages = pages.docs
    .filter((page) => page.slug !== "home")
    .map((page) => ({
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${page.slug}`,
    }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...allPages,
  ];
}
