import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'globalTokens',
  title: 'Global Tokens',
  type: 'document',
  fields: [
    defineField({
      name: 'colors',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
    defineField({
      name: 'spacing',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
    defineField({
      name: 'typography',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
    defineField({
      name: 'radii',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
  ],
})
