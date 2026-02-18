import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'styleConfig',
  title: 'Style Config',
  type: 'object',
  fields: [
    defineField({
      name: 'className',
      type: 'string',
    }),
    defineField({
      name: 'vars',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
    defineField({
      name: 'style',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
    defineField({
      name: 'tokens',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
  ],
})
