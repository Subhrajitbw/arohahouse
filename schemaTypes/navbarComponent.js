import { defineType, defineField } from "sanity"

export default defineType({
  name: "navbarComponent",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Internal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "isEnabled",
      title: "Enable Navbar",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "variant",
      title: "Default Variant",
      description: "Fallback theme when background sampling is inactive",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "light",
    }),

    defineField({
      name: "enableBackgroundSampling",
      title: "Enable Background Sampling",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "logoText",
      title: "Logo Text",
      type: "string",
      initialValue: "AROHA",
    }),

    defineField({
      name: "shopLabel",
      title: "Shop Button Label",
      type: "string",
      initialValue: "Shop",
    }),

    defineField({
      name: "showLookbook",
      title: "Show Lookbook Link",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "lookbookLabel",
      title: "Lookbook Label",
      type: "string",
      initialValue: "Lookbook",
      hidden: ({ parent }) => !parent?.showLookbook,
    }),

    defineField({
      name: "navigationRef",
      title: "Navigation Configuration",
      type: "reference",
      to: [{ type: "navigation" }],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "internalName",
    },
  },
})