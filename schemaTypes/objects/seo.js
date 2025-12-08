// schemas/objects/seo.js
export const seo = {
  name: "seo",
  title: "Search Engine Optimization",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Overrides the default product title in search results.",
      validation: (Rule) => Rule.max(60).warning("Optimal length is under 60 chars"),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "The snippet shown in Google search results.",
      validation: (Rule) => Rule.max(160).warning("Optimal length is under 160 chars"),
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string",
      description: "Comma-separated keywords (legacy support).",
    },
    {
      name: "canonicalUrl",
      title: "Canonical URL Override",
      type: "url",
      description: "Use only if this product is a duplicate of another page.",
    },
    {
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description: "Image used when sharing on social media.",
    },
  ],
}
