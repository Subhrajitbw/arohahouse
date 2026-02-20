import { defineType, defineField } from "sanity"

export default defineType({
  name: "r2Image",
  title: "R2 Image",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "Image URL",
      type: "url",
      readOnly: true
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string"
    })
  ]
})