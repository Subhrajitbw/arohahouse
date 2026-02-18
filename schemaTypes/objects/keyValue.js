import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'keyValue',
  title: 'Key/Value',
  type: 'object',
  fields: [
    defineField({
      name: 'key',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      type: 'string',
    }),
  ],
})
