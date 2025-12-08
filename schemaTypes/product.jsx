// schemas/product.jsx (RENAME from .ts)
import {
  BasketIcon,
  TagIcon,
  DocumentTextIcon,
  InfoOutlineIcon,
  LinkIcon,
  ImagesIcon,
} from '@sanity/icons'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  icon: BasketIcon,
  
  groups: [
    { name: 'sync', title: 'Synced', icon: TagIcon, default: true },
    { name: 'content', title: 'Content', icon: DocumentTextIcon },
    { name: 'media', title: 'Media', icon: ImagesIcon },
    { name: 'relations', title: 'Related Products', icon: LinkIcon },
    { name: 'extra', title: 'Extra Info', icon: InfoOutlineIcon },
  ],
  
  fields: [
    // ===== SYNCED FROM MEDUSA =====
    {
      name: 'medusaId',
      type: 'string',
      title: 'Medusa ID',
      readOnly: true,
      group: 'sync',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Product Title',
      readOnly: true,
      group: 'sync',
    },
    {
      name: 'handle',
      type: 'string',
      title: 'Handle',
      readOnly: true,
      group: 'sync',
    },

    // ===== MEDIA (R2 IMAGES) =====
    {
      name: 'thumbnailR2',
      type: 'object',
      title: 'Thumbnail',
      readOnly: true,
      group: 'media',
      fields: [
        { name: 'url', type: 'url', title: 'URL' },
      ],
    },
    {
      name: 'galleryR2',
      type: 'array',
      title: 'Product Gallery',
      readOnly: true,
      group: 'media',
      of: [{
        type: 'object',
        fields: [
          { name: 'url', type: 'url', title: 'URL' },
        ],
        preview: {
          select: { url: 'url' },
          prepare({ url }) {
            return {
              title: url ? 'Image' : 'No URL',
              // JSX to render image
              media: url ? (
                <img 
                  src={url} 
                  alt="Gallery" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              ) : ImagesIcon,
            }
          },
        },
      }],
    },

    // ===== CONTENT =====
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      rows: 3,
      group: 'content',
    },
    {
      name: 'richDescription',
      type: 'array',
      title: 'Description',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
          ],
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      group: 'content',
      of: [{ type: 'string' }],
    },
    {
      name: 'specifications',
      type: 'array',
      title: 'Specifications',
      group: 'content',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'value', type: 'string', title: 'Value' },
        ],
        preview: {
          select: { title: 'label', subtitle: 'value' },
        },
      }],
    },

    // ===== PRODUCT RELATIONS =====
    {
      name: 'relatedProducts',
      type: 'array',
      title: 'Related Products',
      group: 'relations',
      description: 'Similar or complementary products',
      of: [{
        type: 'reference',
        to: [{ type: 'product' }],
      }],
    },
    {
      name: 'upsellProducts',
      type: 'array',
      title: 'Upsell Products',
      group: 'relations',
      description: 'Premium alternatives or upgrades',
      of: [{
        type: 'reference',
        to: [{ type: 'product' }],
      }],
    },
    {
      name: 'crosssellProducts',
      type: 'array',
      title: 'Cross-sell Products',
      group: 'relations',
      description: 'Frequently bought together',
      of: [{
        type: 'reference',
        to: [{ type: 'product' }],
      }],
    },

    // ===== EXTRA INFO =====
    {
      name: 'extraSections',
      type: 'array',
      title: 'Extra Sections',
      group: 'extra',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          {
            name: 'icon',
            type: 'string',
            title: 'Icon',
            options: {
              list: [
                { title: '🧼 Care', value: 'care' },
                { title: '🚚 Shipping', value: 'shipping' },
                { title: '🛡️ Warranty', value: 'warranty' },
                { title: '📏 Dimensions', value: 'dimensions' },
                { title: '♻️ Sustainability', value: 'sustainability' },
                { title: 'ℹ️ Other', value: 'info' },
              ],
            },
          },
          {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{ type: 'block' }],
          },
        ],
        preview: {
          select: { title: 'title' },
        },
      }],
    },
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'handle',
      thumbnail: 'thumbnailR2.url',
    },
    prepare({ title, subtitle, thumbnail }) {
      return {
        title: title || 'Untitled Product',
        subtitle: subtitle ? `/${subtitle}` : '',
        // JSX to render product thumbnail
        media: thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        ) : BasketIcon,
      }
    },
  },
}
