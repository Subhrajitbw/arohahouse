// schemas/objects/r2Image.js
export const r2Image = {
  name: "r2Image",
  title: "R2 Image",
  type: "object",
  fields: [
    {
      name: "url",
      title: "Image URL",
      type: "url",
      description: "Direct URL from Cloudflare R2.",
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
    },
  ],
  preview: {
    select: { title: "alt", url: "url" },
    prepare({ title, url }) {
      return {
        title: title || "R2 Image",
        subtitle: url,
      }
    },
  },
}
