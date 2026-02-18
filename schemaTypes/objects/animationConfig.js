import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'animationConfig',
  title: 'Animation Config',
  type: 'object',
  fields: [
    defineField({
      name: 'engine',
      type: 'string',
    }),
    defineField({
      name: 'trigger',
      type: 'string',
    }),
    defineField({
      name: 'durationMs',
      type: 'number',
    }),
    defineField({
      name: 'delayMs',
      type: 'number',
    }),
    defineField({
      name: 'easing',
      type: 'string',
    }),
    defineField({
      name: 'keyframes',
      type: 'array',
      of: [{type: 'animationKeyframe'}],
    }),
    defineField({
      name: 'timelineId',
      type: 'string',
    }),
    defineField({
      name: 'gsap',
      type: 'object',
      fields: [
        defineField({
          name: 'scrub',
          type: 'boolean',
        }),
        defineField({
          name: 'start',
          type: 'string',
        }),
        defineField({
          name: 'end',
          type: 'string',
        }),
        defineField({
          name: 'markers',
          type: 'boolean',
        }),
      ],
    }),
  ],
})
