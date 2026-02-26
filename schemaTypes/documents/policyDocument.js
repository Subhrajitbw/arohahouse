export default {
  name: 'policyDocument',
  title: 'Policy Document',
  type: 'document',

  fields: [

    {
      name: 'internalTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },

    {
      name: 'policyType',
      type: 'string',
      options: {
        list: [
          { title: 'After Sales', value: 'afterSales' }
        ],
        layout: 'radio'
      }
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
      name: 'deliveryOptions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'type', type: 'string' },
            { name: 'timeline', type: 'string' },
            { name: 'description', type: 'text' }
          ]
        }
      ]
    },

    { name: 'shipping', type: 'text' },
    { name: 'installationSupport', type: 'text' },
    { name: 'returnPolicy', type: 'text' },

    {
      name: 'lifetimeSupportServices',
      type: 'array',
      of: [{ type: 'string' }]
    },

    {
      name: 'supportContact',
      type: 'object',
      fields: [
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' }
      ]
    },

    {
      name: 'warranties',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'included', type: 'array', of: [{ type: 'string' }] },
            { name: 'excluded', type: 'array', of: [{ type: 'string' }] }
          ]
        }
      ]
    }

  ]
}