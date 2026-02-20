import { defineType, defineField } from "sanity"

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  // 👇 Force fixed ID (singleton behavior)
  __experimental_actions: ["update", "publish"],

  fields: [

    // ========================
    // BRAND
    // ========================

    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
    }),

    defineField({
      name: "defaultOgImage",
      title: "Default Social Share Image",
      type: "image",
      options: { hotspot: true },
    }),

    // ========================
    // SEO
    // ========================

    defineField({
      name: "defaultTitle",
      title: "Default SEO Title",
      type: "string",
    }),

    defineField({
      name: "titleTemplate",
      title: "Title Template",
      description: "Example: %s | Aroha House",
      type: "string",
    }),

    defineField({
      name: "defaultDescription",
      title: "Default SEO Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "defaultKeywords",
      title: "Default Keywords",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "baseUrl",
      title: "Base URL",
      type: "string",
    }),

    defineField({
      name: "enableIndexing",
      title: "Allow Search Engine Indexing",
      type: "boolean",
      initialValue: true,
    }),

    // ========================
    // SOCIAL
    // ========================

    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "instagram", type: "string" },
        { name: "facebook", type: "string" },
        { name: "twitter", type: "string" },
        { name: "pinterest", type: "string" },
        { name: "youtube", type: "string" },
      ],
    }),

    // ========================
    // CONTACT
    // ========================

    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),

    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Business Address",
      type: "text",
      rows: 3,
    }),

    // ========================
    // ANALYTICS
    // ========================

    defineField({
      name: "googleAnalyticsId",
      title: "Google Analytics ID",
      type: "string",
    }),

    defineField({
      name: "metaPixelId",
      title: "Meta Pixel ID",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "brandName",
    },
  },
})