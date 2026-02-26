import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "plyu49lt",
  dataset: "production",
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function run() {
  console.log("Deleting categories...")
  await client.delete({ query: '*[_type == "category"]' })

  console.log("Deleting collections...")
  await client.delete({ query: '*[_type == "collection"]' })

  console.log("Deleting product types...")
  await client.delete({ query: '*[_type == "productType"]' })

  console.log("Done.")
}

run().catch(console.error)