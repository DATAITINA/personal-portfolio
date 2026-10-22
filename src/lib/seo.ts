import { SITE_URL } from "@/data/portfolio";

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Title, description, canonical URL, Open Graph and Twitter tags for one page. */
export function pageHead({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile" | "article";
}) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "David Itina, AI Engineer. I ship AI products that real people use.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@thedvditina" },
      { name: "twitter:creator", content: "@thedvditina" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
