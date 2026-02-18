export default {
  name: 'seo',
  type: 'object',
  title: 'SEO & AI Settings',

  fields: [

    // =========================
    // 🔹 META TITLE
    // =========================
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      description: 'Recommended: 50–60 characters. Leave blank to auto-generate.',
      validation: (Rule) => Rule.max(60),
    },

    // =========================
    // 🔹 META DESCRIPTION
    // =========================
    {
      name: 'metaDescription',
      type: 'text',
      rows: 3,
      title: 'Meta Description',
      description:
        'Recommended: 140–160 characters. Leave blank to use short intro.',
      validation: (Rule) => Rule.max(160),
    },

    // =========================
    // 🔹 AI SUMMARY (IMPORTANT)
    // =========================
    {
      name: 'aiSummary',
      type: 'text',
      rows: 3,
      title: 'AI Summary',
      description:
        '2–3 factual sentences summarizing this product clearly for AI systems. Leave blank to auto-generate.',
    },

    // =========================
    // 🔹 OPEN GRAPH IMAGE
    // =========================
    {
      name: 'ogImage',
      type: 'image',
      title: 'Open Graph Image',
      description:
        'Used when shared on WhatsApp, Facebook, LinkedIn, etc. If empty, product thumbnail will be used.',
    },

    // =========================
    // 🔹 CANONICAL URL
    // =========================
    {
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL (Optional)',
      description:
        'Use only if this page has duplicates elsewhere.',
    },

    // =========================
    // 🔹 INDEX CONTROL
    // =========================
    {
      name: 'noIndex',
      type: 'boolean',
      title: 'Hide From Search Engines (noindex)',
      description:
        'Enable only if this product should not appear in search results.',
      initialValue: false,
    },
  ],

  preview: {
    select: {
      title: 'metaTitle',
    },
    prepare({ title }) {
      return {
        title: title || 'SEO Settings',
      }
    },
  },
}
