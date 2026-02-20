// schemaTypes/objects/heroSlide.js
import { defineType, defineField } from "sanity"

export default defineType({
  name: "heroSlide",
  title: "Hero Slide",
  type: "object",
  fields: [

    defineField({
      name: "backgroundType",
      title: "Background Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" }
        ],
        layout: "radio"
      },
      initialValue: "image"
    }),

    defineField({
      name: "image",
      type: "r2Image",
      hidden: ({ parent }) => parent?.backgroundType !== "image"
    }),

    defineField({
      name: "videoUrl",
      type: "url",
      hidden: ({ parent }) => parent?.backgroundType !== "video"
    }),

    defineField({
      name: "heading",
      type: "string"
    }),

    defineField({
      name: "subheading",
      type: "text"
    }),

    defineField({
      name: "badge",
      title: "Promotion Badge",
      type: "string",
      description: "Example: Limited Edition / New Arrival / 30% Off"
    }),

    defineField({
      name: "ctaPrimary",
      type: "object",
      fields: [
        { name: "text", type: "string" },
        { name: "link", type: "string" }
      ]
    }),

    defineField({
      name: "ctaSecondary",
      type: "object",
      fields: [
        { name: "text", type: "string" },
        { name: "link", type: "string" }
      ]
    }),

    defineField({
      name: "alignment",
      type: "string",
      options: {
        list: [
          { title: "Center", value: "center" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" }
        ],
        layout: "radio"
      },
      initialValue: "center"
    }),

    defineField({
      name: "overlayStrength",
      type: "number",
      description: "0 to 100",
      initialValue: 60
    }),

    defineField({
      name: "autoPlayDuration",
      type: "number",
      initialValue: 6000
    })
  ]
})