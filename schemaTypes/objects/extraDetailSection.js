// schemas/objects/extraDetailSection.js
export const extraDetailSection = {
  name: "extraDetailSection",
  title: "Extra Detail Section",
  type: "object",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "e.g. Specifications, Features, Usage Information, Care.",
    },
    {
      name: "body",
      title: "Section Body",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text content for this section.",
    },
  ],
  preview: {
    select: { title: "sectionTitle" },
    prepare({ title }) {
      return {
        title: title || "Extra Detail Section",
      }
    },
  },
}
