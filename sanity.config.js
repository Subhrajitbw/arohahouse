import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { BasketIcon, CogIcon } from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'ArohaHouse',

  projectId: 'plyu49lt',
  dataset: 'production',

  plugins: [
    structureTool({
      title: 'Aroha Admin',
      structure: (S) =>
        S.list()
          .title('Dashboard')
          .items([

            // =============================
            // ⚙️ SITE SETTINGS
            // =============================

            S.listItem()
              .title('Site Settings')
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),

            S.divider(),

            // =============================
            // 📦 COMMERCE
            // =============================

            S.listItem()
              .title('Commerce')
              .icon(BasketIcon)
              .child(
                S.list()
                  .title('Commerce')
                  .items([
                    S.documentTypeListItem('product')
                      .title('Products'),

                    S.documentTypeListItem('category')
                      .title('Categories'),

                    S.documentTypeListItem('collection')
                      .title('Collections'),

                    S.documentTypeListItem('productType')
                      .title('Product Types'),
                  ])
              ),

            S.divider(),

            // =============================
            // 🛠 SYSTEMS (Centralized Logic)
            // =============================

            S.listItem()
              .title('Systems')
              .child(
                S.list()
                  .title('Systems')
                  .items([
                    S.documentTypeListItem('customizationMaster')
                      .title('Customization Masters'),

                    S.documentTypeListItem('policyDocument')
                      .title('Policy Documents'),

                    S.documentTypeListItem('trustMaster')
                      .title('Trust Masters'),
                  ])
              ),

            S.divider(),

            // =============================
            // 📄 OTHER CONTENT
            // =============================

            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'product',
                  'category',
                  'collection',
                  'productType',
                  'customizationMaster',
                  'policyDocument',
                  'trustMaster',
                  'siteSettings',
                ].includes(listItem.getId())
            ),
          ]),
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})