// /schemas/navigation.ts
export default {
  name: 'navigation',
  title: 'Main Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Config Name',
      type: 'string',
      initialValue: 'Main Navigation',
    },
    {
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          name: 'navItem',
          title: 'Nav Item',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label (shown in navbar)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'categoryHandle',
              title: 'Medusa Category Handle',
              type: 'string',
              description:
                'Must match Medusa product_category.handle (e.g. "living-room")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'featured',
              title: 'Featured Block (optional)',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Featured Title',
                  type: 'string',
                },
                {
                  name: 'subtitle',
                  title: 'Subtitle / Tagline',
                  type: 'string',
                },
                {
                  name: 'image',
                  title: 'Override Image',
                  type: 'image',
                  description:
                    'Optional. If empty, Medusa category image from R2 will be used.',
                  options: { hotspot: true },
                },
                {
                  name: 'href',
                  title: 'Link URL',
                  type: 'string',
                  description:
                    'Defaults to /shop/category/{handle} if left empty.',
                },
              ],
            },
            {
              name: 'priority',
              title: 'Order / Priority',
              type: 'number',
              description: 'Lower = appears earlier in the menu',
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'categoryHandle',
            },
          },
        },
      ],
      options: {
        sortable: true,
      },
    },
  ],
};
