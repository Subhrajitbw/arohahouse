import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'animationKeyframe',
  title: 'Animation Keyframe',
  type: 'object',
  fields: [
    defineField({
      name: 'at',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(1),
    }),
    defineField({
      name: 'props',
      type: 'array',
      of: [{type: 'keyValue'}],
    }),
  ],
})
