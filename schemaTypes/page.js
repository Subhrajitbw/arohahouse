import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'locale',
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
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
  ],
})
