import { FilterIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productType',
  title: 'Product Type',
  type: 'document',
  icon: FilterIcon,
  groups: [
    { name: 'basic', title: 'Basic Information', default: true },
    { name: 'seo', title: 'SEO & Meta' },
  ],
  fields: [
    defineField({ name: 'medusaId', type: 'string', readOnly: true, group: 'basic' }),
    defineField({ 
      name: 'title', 
      title: 'Type Value', 
      type: 'string', 
      group: 'basic' 
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'basic',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
})