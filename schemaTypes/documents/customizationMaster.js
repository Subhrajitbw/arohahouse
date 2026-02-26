export default {
  name: 'customizationMaster',
  title: 'Customization Master',
  type: 'document',

  fields: [

    {
      name: 'internalTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },

    // ✅ Dynamic Product Type Selection
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
      name: 'isDefault',
      type: 'boolean',
      initialValue: false
    },

    {
      name: 'customizationAttributes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'attributeName', type: 'string' },
            {
              name: 'options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', type: 'string' },
                    { name: 'description', type: 'string' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }

  ]
}