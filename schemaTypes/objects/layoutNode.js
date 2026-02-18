import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'layoutNode',
  title: 'Layout Node',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      initialValue: 'node',
      readOnly: true,
    }),
    defineField({
      name: 'component',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'version',
      type: 'string',
    }),
    defineField({
      name: 'props',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
    defineField({
      name: 'styles',
      type: 'styleConfig',
    }),
    defineField({
      name: 'responsive',
      type: 'responsiveStyle',
    }),
    defineField({
      name: 'customCSS',
      type: 'text',
    }),
    defineField({
      name: 'animation',
      type: 'animationConfig',
    }),
    defineField({
      name: 'visibility',
      type: 'array',
      of: [{type: 'visibilityRule'}],
    }),
    defineField({
      name: 'children',
      type: 'array',
      of: [{type: 'layoutNode'}],
    }),
  ],
})
