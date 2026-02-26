export default {
  name: 'trustMaster',
  title: 'Trust Section Master',
  type: 'document',

  fields: [

    {
      name: 'internalTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },

    // ✅ Product Type based
    {
      name: 'applicableProductTypes',
      title: 'Applicable Product Types',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'productType' }]
        }
      ]
    },

    {
      name: 'content',
      title: 'Trust Section Content',
      type: 'array',
      of: [{ type: 'block' }]
    },

    {
      name: 'isDefault',
      type: 'boolean',
      initialValue: false
    }

  ]
}