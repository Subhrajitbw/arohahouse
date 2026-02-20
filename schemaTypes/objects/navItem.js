import { defineType, defineField } from "sanity"
import { lucideIconOptions } from "../utils/lucideIcons"

export default defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "priority",
      title: "Priority (Lower = Higher Position)",
      type: "number",
      initialValue: 0,
    }),

    defineField({
      name: "isVisible",
      title: "Visible",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "type",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Category (Medusa)", value: "category" },
          { title: "Custom Link", value: "link" },
        ],
        layout: "radio",
      },
      initialValue: "category",
    }),

    defineField({
      name: "categoryHandle",
      title: "Medusa Category Handle",
      type: "string",
      description: "Must match Medusa category handle exactly",
      hidden: ({ parent }) => parent?.type !== "category",
    }),

    defineField({
      name: "href",
      title: "Custom URL",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "link",
    }),

    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: lucideIconOptions,
      },
    }),

    defineField({
      name: "featured",
      title: "Featured Block (Mega Menu)",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "href",
          title: "Override Link (Optional)",
          type: "string",
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "label",
      type: "type",
      icon: "icon",
    },
    prepare({ title, type, icon }) {
      return {
        title: title,
        subtitle: type === "category" ? "Category Link" : "Custom Link",
        media: lucideIconOptions.find((i) => i.value === icon)?.icon,
      }
    },
  },
})