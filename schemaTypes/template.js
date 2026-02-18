import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'template',
  title: 'Template',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
    defineField({
      name: 'layout',
      type: 'layoutNode',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'version',
      type: 'number',
      initialValue: 1,
    }),
  ],
})
