import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {BasketIcon, TagIcon, CogIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'ArohaHouse',

  projectId: 'plyu49lt', // Ensure this is filled
  dataset: 'production',

  plugins: [
    structureTool({
      title: 'Aroha Admin',
      structure: (S) =>
        S.list()
          .title('Dashboard') // The main header
          .items([
            // --- SECTION: COMMERCE ---
            S.listItem()
              .title('Product Catalog')
              .icon(BasketIcon)
              .child(
                S.documentTypeList('product')
                  .title('All Products')
                  .defaultOrdering([{field: 'title', direction: 'asc'}])
              ),
            
            // Add more commerce items here later (e.g., Collections)

            S.divider(), // Visual separator

            // --- SECTION: OTHER CONTENT ---
            // Automatically add any other schemas you create (excluding 'product')
            ...S.documentTypeListItems().filter(
              (listItem) => !['product'].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
