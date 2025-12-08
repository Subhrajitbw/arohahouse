import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSlider',
  title: 'Hero Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Slider Name (Internal Use)',
      type: 'string',
      initialValue: 'Homepage Hero',
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Slide',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'subheading', title: 'Subheading', type: 'text', rows: 2 },
            { 
              name: 'image', 
              title: 'Background Image', 
              type: 'image', 
              options: { hotspot: true } 
            },
            { 
              name: 'video', 
              title: 'Background Video (Optional)', 
              type: 'file', 
              options: { accept: 'video/*' },
              description: 'If uploaded, this overrides the image.'
            },
            { name: 'ctaText', title: 'Button Text', type: 'string' },
            { name: 'ctaLink', title: 'Button Link', type: 'string' },
          ],
          preview: {
            select: {
              title: 'heading',
              media: 'image'
            }
          }
        }
      ]
    }),
  ],
})
