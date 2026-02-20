// schemaTypes/heroSlider.js
import { defineType, defineField } from "sanity"

export default defineType({
  name: "heroSlider",
  title: "Hero Slider",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Internal Title",
      type: "string",
      description: "For admin reference only (e.g. Homepage Hero)"
    }),
    defineField({
      name: "slides",
      title: "Slides",
      type: "array",
      of: [{ type: "heroSlide" }]
    })
  ]
})