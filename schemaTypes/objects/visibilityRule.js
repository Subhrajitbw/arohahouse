import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visibilityRule',
  title: 'Visibility Rule',
  type: 'object',
  fields: [
    defineField({
      name: 'breakpoint',
      type: 'string',
    }),
    defineField({
      name: 'hidden',
      type: 'boolean',
    }),
  ],
})
