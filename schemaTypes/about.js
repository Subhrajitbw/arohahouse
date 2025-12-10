// schemas/about.js
import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  icon: DocumentIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Main heading for this about section (e.g., "Our Story", "Our Mission")',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required(),
      description: 'Main text content for this section',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      initialValue: 0,
      description: 'Order in which this section appears (0 = first)',
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
      type: 'image',
      description: 'Main image for this section',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'video',
      title: 'Video File',
      type: 'file',
      description: 'Upload MP4 video (optional, instead of image)',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Or External Video URL',
      type: 'url',
      description: 'Direct video URL if not uploading file',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
      description: 'Show this section on the website',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
      order: 'order',
    },
    prepare({ title, subtitle, media, order }) {
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle?.substring(0, 60) + '...',
        media: media,
      }
    },
  },
})
