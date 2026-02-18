import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'responsiveStyle',
  title: 'Responsive Style',
  type: 'object',
  fields: [
    defineField({
      name: 'base',
      type: 'styleConfig',
    }),
    defineField({
      name: 'sm',
      type: 'styleConfig',
    }),
    defineField({
      name: 'md',
      type: 'styleConfig',
    }),
    defineField({
      name: 'lg',
      type: 'styleConfig',
    }),
    defineField({
      name: 'xl',
      type: 'styleConfig',
    }),
    defineField({
      name: 'bp2xl',
      title: '2xl',
      type: 'styleConfig',
    }),
  ],
})
