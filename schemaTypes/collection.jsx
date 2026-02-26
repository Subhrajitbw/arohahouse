import { PackageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: PackageIcon,
  groups: [
    { name: 'basic', title: 'Basic Information', default: true },
    { name: 'content', title: 'CMS Content' },
    { name: 'seo', title: 'SEO & Meta' },
  ],
  fields: [
    defineField({ name: 'medusaId', type: 'string', readOnly: true, group: 'basic' }),
    defineField({ name: 'title', type: 'string', group: 'basic' }),
    defineField({ name: 'handle', type: 'string', group: 'basic' }),

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
      name: 'content',
      title: 'Collection Page Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      group: 'content',
    }),

    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
})