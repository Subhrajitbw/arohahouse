import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {BasketIcon, CogIcon} from '@sanity/icons'

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
            // SITE SETTINGS (SINGLETON)
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
            // COMMERCE SECTION
            // =============================
            S.listItem()
              .title('Product Catalog')
              .icon(BasketIcon)
              .child(
                S.documentTypeList('product')
                  .title('All Products')
                  .defaultOrdering([{field: 'title', direction: 'asc'}])
              ),

            S.divider(),

            // =============================
            // OTHER CONTENT
            // =============================
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['product', 'siteSettings'].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})