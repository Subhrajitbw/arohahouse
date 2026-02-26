import { BasketIcon, ImagesIcon } from '@sanity/icons'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  icon: BasketIcon,

  groups: [
    { name: 'basic', title: '1️⃣ Basic Information', default: true },
    { name: 'pricing', title: '2️⃣ Pricing & Availability' },
    { name: 'media', title: '3️⃣ Media' },
    { name: 'identity', title: '4️⃣ Product Identity (AI Core)' },
    { name: 'highlights', title: '5️⃣ Product Highlights' },
    { name: 'specs', title: '6️⃣ Specifications & Performance' },
    { name: 'usage', title: '7️⃣ Usage & Application' },
    { name: 'customization', title: '8️⃣ Customization Options' },
    { name: 'social', title: '9️⃣ Social Proof' },
    { name: 'trust', title: '🔟 After-Sales & Trust' },
    { name: 'faq', title: '1️⃣1️⃣ FAQs (AI Answer Engine)' },
    { name: 'seo', title: '🔎 SEO & AI Signals' },
    { name: 'relations', title: '🔗 Related Products' },
  ],

  fields: [

    // ======================
    // 1️⃣ BASIC INFORMATION (SYNCED FROM MEDUSA)
    // ======================

    { name: 'medusaId', type: 'string', readOnly: true, group: 'basic' },
    { name: 'title', type: 'string', readOnly: true, group: 'basic' },
    { name: 'handle', type: 'string', readOnly: true, group: 'basic' },
    { name: 'medusaType', type: 'string', readOnly: true, group: 'basic' },

    {
      name: 'brandName',
      type: 'string',
      initialValue: 'Aroha House',
      readOnly: true,
      group: 'basic',
    },

    {
      name: 'collectionName',
      type: 'string',
      group: 'basic',
    },

    // ======================
    // 2️⃣ PRICING
    // ======================

    {
      name: 'pricing',
      type: 'object',
      group: 'pricing',
      fields: [
        { name: 'price', type: 'number', title: 'Base Price (INR)' },
        {
          name: 'availability',
          type: 'string',
          options: {
            list: ['In Stock', 'Made to Order'],
            layout: 'radio',
          },
        },
        {
          name: 'deliveryDays',
          type: 'number',
          title: 'Delivery Time (Days)',
        },
      ],
    },

    // ======================
    // 3️⃣ MEDIA
    // ======================

    {
      name: 'thumbnailR2',
      type: 'object',
      title: 'Thumbnail',
      readOnly: true,
      group: 'media',
      fields: [{ name: 'url', type: 'url' }],
    },

    {
      name: 'galleryR2',
      type: 'array',
      title: 'Gallery',
      readOnly: true,
      group: 'media',
      of: [
        {
          type: 'object',
          fields: [{ name: 'url', type: 'url' }],
        },
      ],
    },

    // ======================
    // 4️⃣ PRODUCT IDENTITY
    // ======================

    {
      name: 'productCategory',
      type: 'string',
      options: {
        list: ['Sofa', 'Chair', 'Lounge Chair', 'Dining Chair', 'Bench', 'Ottoman', 'Table'],
      },
      group: 'identity',
    },

    { name: 'primaryMaterial', type: 'string', group: 'identity' },
    { name: 'secondaryMaterials', type: 'array', of: [{ type: 'string' }], group: 'identity' },
    { name: 'manufacturedIn', type: 'string', initialValue: 'India', group: 'identity' },

    {
      name: 'comparisonTags',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'identity',
    },

    // ======================
    // 5️⃣ HIGHLIGHTS
    // ======================

    { name: 'shortIntro', type: 'text', rows: 2, group: 'highlights' },

    {
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'highlights',
    },

    {
      name: 'keyFeatures',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'highlights',
    },

    {
      name: 'whyThisProduct',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'highlights',
    },

    {
      name: 'cta',
      type: 'object',
      group: 'highlights',
      fields: [
        { name: 'primary', type: 'string', initialValue: 'Enquire Now' },
        { name: 'secondary', type: 'string', initialValue: 'Customize Now' },
      ],
    },

    // ======================
    // 6️⃣ SPECIFICATIONS
    // ======================

    {
      name: 'dimensions',
      type: 'object',
      group: 'specs',
      fields: [
        { name: 'width', type: 'number' },
        { name: 'height', type: 'number' },
        { name: 'depth', type: 'number' },
        {
          name: 'unit',
          type: 'string',
          options: { list: ['mm', 'cm', 'inch'], layout: 'radio' },
        },
      ],
    },

    { name: 'weightCapacity', type: 'number', group: 'specs' },
    { name: 'assemblyRequired', type: 'boolean', group: 'specs' },
    { name: 'contractGrade', type: 'boolean', group: 'specs' },

    {
      name: 'careInstructions',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'specs',
    },

    {
      name: 'additionalSpecs',
      type: 'array',
      group: 'specs',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' },
          ],
        },
      ],
    },

    // ======================
    // 7️⃣ USAGE
    // ======================

    {
      name: 'perfectFor',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'usage',
    },

    {
      name: 'useCaseScenarios',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'usage',
    },

    // ======================
    // 8️⃣ CUSTOMIZATION (CENTRALIZED)
    // ======================

    {
      name: 'customizationOverride',
      title: 'Customization Override (Optional)',
      type: 'reference',
      to: [{ type: 'customizationMaster' }],
      group: 'customization',
      description: 'Override the type-based customization system.'
    },

    // ======================
    // 🔟 AFTER-SALES & TRUST (CENTRALIZED)
    // ======================

    {
      name: 'afterSalesOverride',
      title: 'After Sales Override (Optional)',
      type: 'reference',
      to: [{ type: 'policyDocument' }],
      options: { filter: 'policyType == "afterSales"' },
      group: 'trust',
      description: 'Override the type-based after-sales policy.'
    },

    {
      name: 'trustOverride',
      title: 'Trust Section Override (Optional)',
      type: 'reference',
      to: [{ type: 'trustMaster' }],
      group: 'trust',
      description: 'Override the type-based trust section.'
    },

    // ======================
    // 1️⃣1️⃣ FAQ
    // ======================

    {
      name: 'faqs',
      type: 'array',
      group: 'faq',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string' },
            { name: 'answer', type: 'text', rows: 3 },
          ],
        },
      ],
    },

    // ======================
    // 🔎 SEO
    // ======================

    {
      name: 'seo',
      type: 'seo',
      group: 'seo',
    },

    // ======================
    // 🔗 RELATED
    // ======================

    {
      name: 'relatedProducts',
      type: 'array',
      group: 'relations',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
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
        media: thumbnail ? (
          <img
            src={thumbnail}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : ImagesIcon,
      }
    },
  },
}