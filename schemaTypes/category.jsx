import { TagIcon, ImagesIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  groups: [
    { name: 'basic', title: 'Basic Information', default: true },
    { name: 'content', title: 'CMS Content' },
    { name: 'seo', title: 'SEO & Meta' },
  ],
  fields: [
    defineField({ name: 'medusaId', type: 'string', readOnly: true, group: 'basic' }),
    defineField({ name: 'title', type: 'string', group: 'basic' }),
    defineField({ name: 'handle', type: 'string', group: 'basic' }),
    defineField({
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'basic',
    }),
    
    // R2 Hero Image
    defineField({
      name: 'heroImageR2',
      title: 'Hero Image (R2)',
      type: 'r2Image',
      group: 'content',
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      group: 'content',
    }),

    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),

    // SEO Object
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'handle',
      media: 'heroImageR2.url',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Category',
        subtitle: subtitle ? `/${subtitle}` : '',
        media: media ? (
          <img src={media} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : TagIcon,
      }
    },
  },
})